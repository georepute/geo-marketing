import { describe, expect, it } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import {
  MIN_NOTICE_HOURS,
  earliestBookable,
  latestBookable,
  isBookingConfigured,
  bookingConfig,
} from '@/lib/booking/config'

/* ============================================================================
   REQUIREMENTS DOC §5 — the booking calendar.

   Two classes of failure are guarded here.

   THE KEY. CAL_API_KEY grants full control of the calendar: read, create and
   cancel every booking on the account. It must never reach a browser. The
   protection is that it carries no NEXT_PUBLIC_ prefix and is read only from
   route handlers — both of which are one careless import away from being
   untrue, and neither of which fails visibly when broken.

   THE NOTICE PERIOD. "Earliest available booking should be at least 48 hours
   from the current time" is a business rule, and the endpoint that enforces
   it is public. A client-side filter alone would be decoration.
   ========================================================================= */

const ROOT = join(import.meta.dirname, '..')

function walk(dir: string, files: string[] = []): string[] {
  let entries: string[]
  try {
    entries = readdirSync(dir)
  } catch {
    return files
  }
  for (const entry of entries) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) walk(full, files)
    else if (/\.tsx?$/.test(full)) files.push(full)
  }
  return files
}

const read = (file: string) => readFileSync(file, 'utf8')
const relative = (file: string) => file.slice(ROOT.length + 1)

/** Source with comments stripped. Several files here name the key in order to
    explain how it is protected; those mentions are not reads. */
const code = (source: string) =>
  source.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')

describe('The API key cannot reach the browser', () => {
  it('is not a NEXT_PUBLIC_ variable anywhere', () => {
    /* NEXT_PUBLIC_ is a one-way door: Next inlines it into the client bundle
       at build time, and no amount of care afterwards gets it back. */
    const offenders = [
      ...walk(join(ROOT, 'lib')),
      ...walk(join(ROOT, 'app')),
      ...walk(join(ROOT, 'components')),
    ]
      .filter((file) => /NEXT_PUBLIC_CAL|NEXT_PUBLIC_.*API_KEY/.test(read(file)))
      .map(relative)

    expect(offenders).toEqual([])
  })

  it('is read in exactly one place', () => {
    /* One reader means one place to audit. Every other module receives the
       parsed config, so widening access is a visible change to this list. */
    const readers = [
      ...walk(join(ROOT, 'lib')),
      ...walk(join(ROOT, 'app')),
      ...walk(join(ROOT, 'components')),
    ]
      .filter((file) => code(read(file)).includes('process.env.CAL_API_KEY'))
      .map(relative)

    expect(readers).toEqual([join('lib', 'booking', 'config.ts')])
  })

  it('is never imported by a Client Component', () => {
    /* `use client` marks a module for the browser bundle. Anything it imports
       goes with it, transitively. */
    const offenders = [
      ...walk(join(ROOT, 'components')),
      ...walk(join(ROOT, 'app')),
    ]
      .filter((file) => {
        const source = read(file)
        return (
          /^['"]use client['"]/m.test(source) &&
          /from '@\/lib\/booking\/(cal|config)'/.test(source)
        )
      })
      .map(relative)

    expect(
      offenders,
      'A Client Component importing the booking modules pulls the Cal.com ' +
        'credentials toward the browser bundle. Go through /api/booking.',
    ).toEqual([])
  })
})

describe('The 48-hour notice period', () => {
  it('matches the doc', () => {
    expect(MIN_NOTICE_HOURS).toBe(48)
  })

  it('puts the earliest bookable instant 48 hours out', () => {
    const now = new Date('2026-08-13T10:00:00.000Z')
    expect(earliestBookable(now).toISOString()).toBe('2026-08-15T10:00:00.000Z')
  })

  it('offers a window that starts after the floor', () => {
    const now = new Date('2026-08-13T10:00:00.000Z')
    expect(latestBookable(now).getTime()).toBeGreaterThan(
      earliestBookable(now).getTime(),
    )
  })

  it('is enforced server-side, not only in the UI', () => {
    /* The client filters for UX. This endpoint is public, so it re-checks. */
    const cal = read(join(ROOT, 'lib', 'booking', 'cal.ts'))
    expect(cal).toMatch(/earliestBookable\(\)/)
    expect(cal).toMatch(/reason: 'invalid'/)
  })

  it('narrows the upstream request rather than filtering the response', () => {
    /* Asking the calendar for a narrower window means a slot inside the
       notice period is never transmitted, so it cannot be read out of the
       network response and posted back. */
    const cal = read(join(ROOT, 'lib', 'booking', 'cal.ts'))
    expect(cal).toMatch(/searchParams\.set\('start', start\.toISOString\(\)\)/)
  })
})

describe('Unconfigured is a supported state', () => {
  it('reports not-configured rather than throwing when the key is absent', () => {
    /* No CAL_API_KEY is set in the test environment, which is the point. */
    expect(() => bookingConfig()).not.toThrow()
    expect(bookingConfig()).toBeNull()
    expect(isBookingConfigured()).toBe(false)
  })

  it('the slots route answers 503 so the UI can show its fallback', () => {
    const route = read(
      join(ROOT, 'app', 'api', 'booking', 'slots', 'route.ts'),
    )
    expect(route).toMatch(/unconfigured' \? 503/)
  })

  it('the calendar renders a fallback instead of a broken control', () => {
    const ui = read(join(ROOT, 'components', 'booking', 'BookingCalendar.tsx'))
    expect(ui).toContain('unconfigured')
    expect(ui).toContain('unconfiguredTitle')
  })
})

describe('Double booking is rejected by the calendar', () => {
  it('a conflict is surfaced rather than swallowed', () => {
    const cal = read(join(ROOT, 'lib', 'booking', 'cal.ts'))
    expect(cal).toMatch(/status === 409/)
    expect(cal).toMatch(/reason: 'conflict'/)
  })

  it('the taken slot is removed from the grid so it cannot be retried', () => {
    const ui = read(join(ROOT, 'components', 'booking', 'BookingCalendar.tsx'))
    expect(ui).toMatch(/filter\(\(s\) => s\.start !== selectedSlot\)/)
  })
})

describe('Availability is never cached', () => {
  it('both the fetch and the routes opt out', () => {
    const cal = read(join(ROOT, 'lib', 'booking', 'cal.ts'))
    expect(cal.match(/cache: 'no-store'/g)?.length).toBe(2)

    for (const route of [
      join('app', 'api', 'booking', 'route.ts'),
      join('app', 'api', 'booking', 'slots', 'route.ts'),
    ]) {
      expect(read(join(ROOT, route)), route).toContain(
        "export const dynamic = 'force-dynamic'",
      )
    }
  })
})

describe('The public endpoint validates its input', () => {
  it('parses the body with a schema rather than trusting it', () => {
    const route = read(join(ROOT, 'app', 'api', 'booking', 'route.ts'))
    expect(route).toContain('safeParse')
    expect(route).toMatch(/z\.string\(\)/)
    expect(route).toMatch(/\.email\(\)/)
  })
})
