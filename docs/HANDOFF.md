# Handoff — launch preparation

**Branch:** `feat/launch-prep` · **Written:** 13 Aug 2026 ·
**Updated:** 16 Aug 2026 · Nothing pushed; this branch exists only locally and
has no upstream.

Read this first, then `AGENTS.md`, then the requirements PDF if you have it.
The PDF ("GeoRepute Website — Final Updates Before Launch") is the source of
truth for scope; this file records what has been built against it, why the
architecture is shaped the way it is, and the three or four things that will
waste your afternoon if you do not know them.

---

## 1. Where the work stands

| # | Requirement (doc §) | State |
| --- | --- | --- |
| 1 | Bring the site to life — brand tokens, motion, product UI | **Done.** Tokens in `styles/tokens.css`; motion respects `prefers-reduced-motion` throughout |
| 2 | Real reports and platform screens everywhere | **Slots built, images missing.** 30 declared slots, all `ready: false` — see §6 |
| 3 | Election Intelligence section | **Done.** Audiences, capabilities, 12 named screens, both CTAs |
| 4 | Hide pricing without deleting it | **Done.** `lib/flags.ts`, `NEXT_PUBLIC_SHOW_PRICING`, guarded by `tests/pricing-withheld.test.ts` |
| 5 | Demo booking calendar | **Built, unconfigured.** Cal.com v2; needs two secrets — see §6 |
| 6 | Production readiness + checklist | `docs/PRE-LAUNCH.md`. **Not deployed**, as instructed |
| 7 | Do not display pricing publicly | Held by the same flag as §4 |
| 8 | Full multilingual support | **Done.** Routing for 7 locales; all 42 routes translated in all six non-English locales. Native review outstanding — see §2 |
| 9 | The Closed Loop | **Done.** PLAN→DO→CHECK→ACT→REPEAT |
| 10 | Nav item, homepage band, dedicated page | **Done.** `/how-it-works` |

### The positioning rule is load-bearing

Doc §9 forbids describing GeoRepute as a content generator, an SEO/GEO tool, a
social or marketing automation product, a publishing/scheduling tool, an
analytics/reporting/dashboard product, or anything "all-in-one" or "autopilot".
Use: Decision Intelligence, Closed-Loop Intelligence & Execution, Deep
Diagnosis, Market/Competitive/Narrative/AI/Search Intelligence.

`tests/copy-fidelity.test.ts` enforces the banned vocabulary. `lib/i18n/GLOSSARY.md`
carries the approved terms in all six target languages, plus the evidence
language ("directional estimate", "not confirmed lost revenue") that must
survive translation unchanged.

---

## 2. Translation: the actual state

**All 42 routes are translated in all six locales** — he, ar, ru, fr, es, pt.
Each overlay carries ~1,670 entries and covers the same key set; both blog
articles exist in all six. `i18n-port.mjs he <locale>` reports `missing: 0`
for every one, and `i18n-keys.mjs <locale>` reports `MISSING: 0`.

### Count the routes before you believe a sweep

**The site has 42 routes per locale, not the 15 that are obvious.** An earlier
pass audited fifteen and declared the site finished; nineteen more —
`/marketplace/[slug]` ×8, `/marketplace/category/[slug]` ×7 and
`/engines/[slug]` ×4 — were fully English in every locale, 24–56 segments
each. Enumerate them, do not list them from memory:

```bash
curl -s localhost:PORT/sitemap.xml | grep -o '<loc>[^<]*</loc>' | sed 's|</\?loc>||g'
```

The sitemap omits `/legal`, `/signin`, `/pricing`, `/checkout`,
`/app/campaign-readiness` and `/app/narrative` — add those by hand. The full
list used for the last sweep is reproducible from `find "app/[locale]" -name
page.tsx` plus the four `generateStaticParams` expansions.

`/pricing`, `/checkout` and `/checkout/success` **404 behind the pricing
flag**, which is doc §4 working, not a gap. `/kitchen-sink`,
`/kitchen-sink/readout` and `/debug/seed` are `noindex` but still ship in the
production build and are still English (117, 26 and 91 segments). Whether they
should ship at all is a client decision, not something to silently delete.

### Where each locale stands

Totals across the 38 audited routes (excluding the flag-gated and dev routes):

| Locale | Mode | Residue | What it is |
| --- | --- | --- | --- |
| he | script | 1 per route, 2 on election | ISO chip; `Riverbend` |
| ar | script | 1 per route, 2 on election | ISO chip; `Riverbend` |
| ru | script | 1 per route | ISO chip only — `Ривербенд` is transliterated |
| es | diff | **4 total** | `Visible`, `Media`, two candidate names |
| pt | diff | **5 total** | `Volume`, `Media`, two candidate names |
| fr | diff | **158 total** | cognates, `Position N`, `{n} modules` |

**None of these numbers is a defect.** he/ar/ru are script mode; fr/es/pt are
diff mode, and the two do not mean the same thing — read §3 before comparing a
column against another. Every remaining segment was checked individually:

- **The `1` across he/ar/ru** is the ISO code chip in the compact language
  switcher — deliberately Latin.
- **French's 158** are true cognates (`Classification`, `Prescription`,
  `Position`, `Volume`, `Absent`, `Action`, `Signal`, `Source`, `Influence`,
  `Effort`, `Stable`, `Visible`, `Intervention`, `Format`, `Articles`,
  `Citations`, `Composite`, `Date`) plus composites the component joins from
  two translated halves (`Position 14`, `12 modules`, `45 minutes`).
  **Spanish's 4 against French's 158 is a fact about the two languages, not
  about the two translations** — French shares that many cognates with
  English and Spanish does not. Do not "fix" the French column.
- **`/election-intelligence`** carries the fictional county and the two
  candidate names. he/ar keep `Riverbend` Latin; ru transliterates it, which
  is why ru reads 1 there and the others read 2. See §7.
- **`/app/narrative` in Spanish** shows `Media` — which is the Spanish for
  *Medium*, not the English for *the press*. Diff mode compares a **set** of
  segments per page, not positions, so a correct translation that collides
  with a different English string elsewhere on the same page is
  indistinguishable from an untranslated one.
- **`Media` in Portuguese** on `/how-it-works` is the pt-PT loanword (*os
  media*); Spanish uses `Medios`, Russian `Медиа`. Every neighbour in that
  list is translated, so it is a choice, not an omission.

Only the first locale costs real engineering. **Once a page is wrapped, no
component changes for the other five** — so a new locale is a translation job
and a newly-discovered page is not. The nineteen marketplace and engine routes
needed five page components and four shared components wrapped before any
translation could land; `AIRecognitionMatrix`, `RecommendationShare`,
`ModuleCard` and the evidence table inside `IntelligenceReadout` had never been
touched. That last one renders on Mission Control, the home page, every
product page and every engine page — its column headers were English
everywhere, in every locale, since the table was written.

### What is still genuinely open

- Every dictionary and overlay is marked `reviewed: false`. **None has been
  read by a native speaker.** This is the one remaining launch blocker in the
  translation workstream and no amount of auditing substitutes for it.
- **`i18n-keys.mjs` only sees literal `t('…')` calls.** The methodology page
  passes three arrays through `t(variable)`; the script reported 0 missing
  while 25 strings were still English. Treat it as a worklist, never as proof.
- **A page that renders `<ProductScreen>` needs overlay entries for each slot
  it uses.** `surface` and `caption` both go through `t()`, and
  `lib/visual/screens.ts` holds 30 slots — how-it-works alone pulled in
  fifteen. `scripts/i18n-keys.mjs` cannot see these either.
- `pt` is **European Portuguese**. pt-BR would be a new locale entry, not an
  edit to `pt.ts`; the vocabularies diverge too often for one file to serve
  both honestly.

Two commands give the current gap in any locale:

```bash
node scripts/i18n-keys.mjs ru      # t() keys the components ask for
node scripts/i18n-port.mjs he ru   # seed prose a finished locale already covers
```

`i18n-port.mjs` is the fast route for a new locale: port `he.ts`'s key set
across, then let the audit find whatever is left. That is how Arabic went from
an empty stub to zero in one pass.

It reads both `'single'` and `"double"` quoted keys. It did not until August
2026, and while it only read single quotes it reported **`missing: 0` on a
locale missing every double-quoted key** — a source string containing an
apostrophe is written with double quotes rather than escaped. If you extend
this script, the failure mode to fear is the silent under-count, not the crash.

### Three layers, and which one a string belongs to

Getting this wrong is the single biggest time sink in this codebase.

1. **`lib/copy/en.ts` → `lib/i18n/dictionaries/<locale>.ts`** — UI chrome: nav,
   footer, section labels, the seven executive questions. Translations are
   *partial overlays*; English is the schema. Read with `getDictionary()`
   (server) or `useDict()` (client).

2. **`lib/i18n/content/<locale>.ts`** — a translation memory keyed by the
   **English source string**. Covers both the ~9,000 words of seed data in
   `lib/seed/` (applied automatically at the API seam in `lib/api/client.ts`)
   and prose written inline on components (applied explicitly via `t()`).

3. **Not translatable** — proper nouns, engine names, the demonstration
   companies, `public/` paths.

**If a string renders in English, work out which layer it belongs to before
writing any translation.** A missing `footer` block in `dictionaries/he.ts`
kept the entire footer English while the overlay was perfectly correct.

### `t()` — how inline prose is translated

```tsx
// Server Component
const t = await getT()          // lib/i18n/content/translator.ts
// Client Component
const t = useT()                // lib/i18n/content/client.tsx

t('Present in only {pct} of supplier evaluations.', { pct })
```

Keyed on the **template**, not the finished sentence, so one entry covers every
value and a translator can move `{pct}` to wherever the target language needs
it — which in Hebrew and Arabic is frequently not where English put it.

**Never assemble a sentence from fragments.** `` `${effort} effort` `` cannot be
translated: Hebrew puts the adjective after the noun. Make the whole phrase one
key (`'low effort'`, `'medium effort'`, `'high effort'`).

### `<Rich>` — emphasis inside a translated sentence

```tsx
<Rich text={t('Named by <b>{n} of {total}</b> engines.', { n, total })} />
```

`lib/i18n/content/rich.tsx`. Splitting such a paragraph into three `t()` calls
would freeze English word order. No HTML is parsed — the string is split on the
marker and rendered as React children, so a translation cannot inject markup.

### The server/client boundary that keeps biting

`next/root-params` **cannot be imported into a Client Component, even
transitively**. This has broken the build three times:

- `client.tsx` must import `makeTranslate` from `format.ts`, never from
  `translator.ts`.
- Any component rendered by a Client Component must use `useT()`, not `getT()`.
  `Wordmark` is a Client Component solely because `MarketingNav` renders it.

Symptom: `Error: Invalid import — 'root-params.js'`, and the page 500s.

### Dates

`dateFull(iso, intl?)` / `dateBrief(iso, intl?)` in `lib/format/index.ts` take
an optional BCP-47 tag, cached per tag, defaulting to `en-US`. The home page
passes `intl` from `getI18n()`. **Every other page still renders English month
names** — pass `intl` as you translate each one.

---

## 3. Verification that actually works

Four separate false readings cost hours across these sessions. Do not repeat
them.

**The audit has two modes, and picking the wrong one invalidates the result.**

```bash
# Non-Latin script — he, ar, ru. Finds runs of Latin letters.
node scripts/i18n-audit.mjs http://localhost:3000/he

# Latin script — fr, es, pt. Compares against the English render and reports
# only the segments that are byte-identical.
node scripts/i18n-audit.mjs http://localhost:3000/fr \
  --against http://localhost:3000/en
```

Script mode on a French page reports every sentence as English, because French
*is* Latin script. It scored a finished French home page at 508 segments —
the same as English.

**Diff mode fails in two directions, both benign, both requiring you to read
rather than count:**

1. *A correct translation that happens to equal English.* `Visible`, `Volume`,
   `Action`, `Position` are all correct French. Portuguese `Media` is the
   pt-PT loanword. These are cognates, and no count can distinguish them from
   an absent translation.
2. *A correct translation that equals a **different** English string on the
   same page.* The Spanish for *Medium* is `Media`; the English page separately
   shows `Media` meaning the press. Diff mode compares a **set** of segments
   per page rather than positions, so the two are indistinguishable to it.

I deliberately did not add a cognate allow-list to fix (1): `Intelligence` is
a cognate in French but not in Spanish (`Inteligencia`) or Portuguese
(`Inteligência`), so a shared list would suppress real gaps. Nor did I make
the comparison positional to fix (2) — that is fragile against reordering, and
would trade a legible false positive for silent drift. **A diff-mode number is
a reading list, not a score.**

**A cognate can also be reached through the dictionary layer rather than the
overlay**, so grepping `fr.ts` for it and finding nothing does not mean it was
missed. French `Intelligence` on the home page is a footer column title in
`lib/copy/en.ts`, translated in `lib/i18n/dictionaries/fr.ts` — correctly, and
identically. Check both layers before calling a segment untranslated.

Neither mode is the truth on its own. **Spot-check actual prose** in the target
language before declaring a locale done.

**The audit cannot see `<meta name="description">`.** It reads visible prose
plus `alt`, `aria-label`, `title` and `placeholder`. Four page descriptions sat
in English through every clean audit this site passed, because nothing that
looks at the rendered body was ever going to find them. If you add a page,
check its `generateMetadata` by hand.

**`pkill` does not exist in this shell.** It fails silently, the old server
survives, and every subsequent measurement reads a stale build. Kill by port:

```powershell
Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue |
  ForEach-Object { taskkill /PID $_.OwningProcess /T /F }
```

**Next 16 refuses to start a second `next dev`.** It prints "Another next dev
server is already running" and points at the existing one — so a command that
looks like it started a fresh server may have done nothing at all. Confirm the
port in the output.

**Stopping a background task does not always kill the server.** The wrapper
exits; `next dev` underneath survives. Always verify with the port check above.

**A 500 has no English on it either.** `scripts/i18n-audit.mjs` once reported
"0 segments remaining" against a page that was crashing. It now exits non-zero
on a non-200 or a page under 20 KB. Trust the exit code.

### The loop

```bash
# 1. kill anything on the port (above), then start ONE server
npx next dev -p 3000

# 2. what does the page still show in English? (mode per §3 above)
node scripts/i18n-audit.mjs http://localhost:3000/he
node scripts/i18n-audit.mjs http://localhost:3000/fr --against http://localhost:3000/en

# 3. what does the code ask for that the overlay lacks?
node scripts/i18n-keys.mjs he

# 4. what does a finished locale cover that this one does not?
node scripts/i18n-port.mjs he fr

# 5. write translations, restart the server, re-audit
```

Step 2 is the measure of done. Steps 3 and 4 only tell you what to write.

**The overlays are imported statically, and must stay that way.** They were
lazy (`he: () => import('./he')`), and `next dev` does not reliably invalidate
a dynamically imported module — an overlay edited mid-session kept serving its
previous contents. The failure was partial and therefore convincing: older keys
resolved while newly added ones fell through to English, so a page rendered
half-translated and looked like a broken lookup rather than a stale module. It
produced three false readings before it was found. Reverting
`lib/i18n/content/index.ts` to lazy imports brings all of that back.

### Full gate before any commit

```bash
npm run typecheck && npm run lint && npm test && npm run build
```

Currently: typecheck ✓ · lint ✓ · **222 tests** ✓ · build ✓ (**298 pages**).

Two notes on running that gate. `next build` and a running `next dev` both own
`.next`, so a build started while a dev server is up gets clobbered and
`next start` then dies on a missing `prerender-manifest.json` — stop the dev
server first. And `vitest` alongside a dev server can OOM with
`ERR_IPC_CHANNEL_CLOSED`; that is memory pressure, not a failing test. Re-run
it on its own before believing it.

---

## 4. What to do next

In order. Each is a session's work or less.

Translation is **done** — all fifteen routes in all six locales. What follows
needs a person, not more of the same work.

1. **Native review of all six dictionaries and all six overlays.** Flip
   `reviewed: false` only when a human has actually read one. This is a launch
   blocker, not a detail — every one of them is machine-produced. Some carry
   real judgement calls worth a second opinion: Arabic renders "authority" as
   حُجّية (evidentiary weight) rather than سُلطة (power), and Portuguese is
   European rather than Brazilian. The reviewer should also be told which
   proper nouns are deliberately untranslated (§7) so they do not "fix" them.
2. **The `/legal` page becomes false the moment `CAL_API_KEY` is set.** It
   currently states "Nothing is transmitted anywhere" in all six languages.
   Booking a briefing will transmit a name, an email and a time to an external
   calendar service. Rewrite that section — in six languages — as part of
   wiring the calendar, not after.
3. **The remaining non-translation launch items** — §6.

If you add a route or a new string after this point, the loop in §3 still
applies, and the two things it cannot see (`t(variable)`, `generateMetadata`)
still need checking by hand.

---

## 5. Repository map

```text
app/[locale]/                 Root layout under a dynamic segment.
  layout.tsx                  lang/dir, hreflang, I18nProvider > ContentProvider
  (marketing)/page.tsx        The home page — seven executive questions
  global-not-found.tsx        Required by experimental.globalNotFound
proxy.ts                      Next 16's middleware. Accept-Language, RFC 9110 q-values

lib/i18n/
  config.ts                   LOCALES, localePath, stripLocale. `as const satisfies`
  server.ts                   getLocale / getDictionary / getI18n   SERVER ONLY
  context.tsx                 useDict                               CLIENT
  merge.ts                    Overlay merge. Object arrays merge element-wise
                              (hrefs survive); string arrays replace wholesale
  types.ts                    PartialDictionary + Widen<T>
  GLOSSARY.md                 Approved terms × 6 languages, banned vocabulary
  dictionaries/<locale>.ts    UI chrome overlays
  content/
    index.ts                  translateContent + the overlay registry
    format.ts                 makeTranslate + interpolate — PURE, no next/*
    translator.ts             getT()   SERVER ONLY (imports next/root-params)
    client.tsx                useT()   CLIENT
    rich.tsx                  <b>…</b> inside a translated sentence
    he.ts                     Hebrew overlay — the only complete one

lib/flags.ts                  Build-time flags. MUST use literal process.env refs
lib/visual/screens.ts         30 screenshot slots
lib/api/client.ts             Data seam; every getter wrapped in localised()
lib/format/index.ts           Intl only. dateFull/dateBrief take an optional tag

scripts/i18n-audit.mjs        Render a page, list remaining English
scripts/i18n-keys.mjs         List t() keys a locale overlay is missing
scripts/i18n-port.mjs         Keys one overlay has that another lacks
scripts/screens.mjs           Screenshot slot report

docs/PRE-LAUNCH.md            Launch checklist
docs/HANDOFF.md               This file
```

---

## 6. Outstanding — needs the client, not code

Nothing below can be finished without something from outside the repository.

**Booking is built but inert.** `CAL_API_KEY` and `CAL_EVENT_TYPE_ID` are
unset. Without them `/api/booking` returns 503 and the UI states plainly that
booking is unavailable — deliberately, rather than pretending to accept a
booking. Full manifest in `.env.example`. Nothing is hardcoded.

**30 screenshots.** Every slot in `lib/visual/screens.ts` is `ready: false` and
renders a designed pending state naming the exact path the file goes to
(`node scripts/screens.mjs` prints the list). Dropping a file in and flipping
`ready: true` is the whole change; layout does not move, because the space is
already reserved at the right aspect ratio.
**Doc §2 and §3: no real customer names, domains, personal data or confidential
figures. Anonymise before these ship.**

**`/legal` is factually wrong the moment booking goes live.** It currently
says "Nothing is transmitted anywhere." That is true today and false as soon as
`CAL_API_KEY` is set — a booking sends a name and email to Cal.com. Rewrite
before launch.

**No Open Graph image.** `public/og.png` does not exist; links unfurl bare.

**Production URL is hardcoded** as `https://georepute.ai` in
`app/[locale]/layout.tsx` (`metadataBase`), `app/sitemap.ts` and
`app/robots.ts`. Move to an env var if the domain is not final.

---

## 7. Decisions taken — reverse them deliberately, not by accident

**Demonstration search queries are translated.** Originally left as literal
English strings on the theory that they are what a buyer types. Reversed: it
left the most visible sentence on the page — the buyer's question in the hero —
in English. *If the demo is ever pointed at a real Israeli or Arabic-speaking
market, these should be the phrases that market actually searches, not
translations of the US ones.* That is a content decision, not a translation
one. Noted in `he.ts`.

**One English string carries one translation.** The overlay is keyed by source
text, so the same English cannot have two different translations in two
contexts. It has bitten once already: `High` is masculine `גבוה` in Hebrew and
serves both the confidence chip (which wants feminine `גבוהה`) and elsewhere.
If this becomes a real problem the entry needs a context-qualified key and the
walk in `content/index.ts` gains a path argument.

**Pricing is hidden, never deleted.** Doc §4 is explicit. The plans still carry
their figures in the data layer; `tests/pricing-withheld.test.ts` asserts both
that nothing is publicly reachable *and* that the code still exists.

**Placeholder slots over invented assets.** The instruction was "never invent
brand assets, screenshots, or data". A fabricated screenshot is a false claim
about the product, so slots state what is missing and where it goes.

**Proper nouns follow the script, not a single global rule.** The invented
county (`Riverbend`) and the two candidate names (`A. Marchetti`,
`D. Okonkwo`) are transliterated in Russian — Ривербенд, А. Маркетти,
Д. Оконкво — and left Latin in Hebrew and Arabic. That is not drift. A Latin
run inside RTL prose reads as a foreign quotation, which is roughly what an
invented American county name *is*; Russian transliterates personal and place
names as a matter of course, so leaving them Latin would be the odd choice.
French, Spanish and Portuguese need no change and record them as identity
mappings so `i18n-port.mjs` reports parity rather than flagging a gap.

**Trade-publication mastheads stay Latin everywhere** — `Industrial
Distribution`, `Modern Supply Chain`, `Fastener Technology`, `Plant
Engineering`. They are invented proper nouns, like the competitor company
names, and they are in `PHRASES` in `scripts/i18n-audit.mjs` so script mode
does not report them.

**Identity mappings are deliberate.** `'Google Ads': 'Google Ads'` and the
mastheads are functionally no-ops — an absent key falls through to English
identically. They exist so the decision is written down in the file a
translator reads, rather than looking like six locales each forgot the same
string.

---

## 8. Traps

- **`lib/flags.ts` must use literal `process.env.NEXT_PUBLIC_*` references.**
  A dynamic lookup is not inlined at build time and the flag reads `undefined`
  in the browser.
- **Guard tests scan source text.** Three times a *documentation comment*
  tripped a violation check. `tests/pricing-withheld.test.ts` and
  `tests/booking.test.ts` now strip comments via a `code()` helper before
  scanning; copy that pattern in any new guard test.
- **`DEFAULT_LOCALE` needs `as const`.** A `: Locale` annotation widens it and
  breaks narrowing in `dictionaryFor`.
- **`PartialDictionary` needs `Widen<T>`.** Without it, `as const` literals in
  `en.ts` force every translation to equal the English string — which made
  translation impossible until it was found.
- **SVG:** set `pathLength` as an attribute, not in `style`. Never animate a
  CSS `transform` on a node positioned by the SVG `transform` attribute — it
  overrides it and collapses everything onto the origin.
- **Stale `.next/dev` types** can break `typecheck` after a branch switch.
  Delete the directory.
- **Windows file locks:** a running `next dev` blocks `git mv`. Kill it first.
- **Never key the content overlay on a bare lowercase enum value.**
  `translateContent` walks *every* string in the seed graph and cannot tell
  prose from a discriminant. Adding `high` / `medium` / `low` once rewrote the
  enum itself, so `copy.confidence['גבוהה'].definition` threw and three pages
  failed to prerender. The fix in `Reconstruct.tsx` and `NarrativeView.tsx` is
  a capitalised display-label map — `{ high: 'High', … }` — which cannot
  collide. I made this mistake twice; the second time with
  `emerging`/`growing`/`steady`/`declining`.
- **Do not copy a key out of audit output.** The audit prints what the user
  sees, which is not what the code asks for. This has produced, repeatedly:
  keys with React's `&#x27;` in place of a plain apostrophe; keys with the
  interpolated value baked in (`stage 4 of 5` beside a live
  `stage {n} of {total}`); and keys with *Hebrew inside the English source*.
  Each is unreachable and fails silently. Eleven such keys were removed from
  `he.ts` in August 2026 — the last three after this warning was already
  written, so treat it as a live hazard rather than a historical note. The
  most recent shape: the audit printed `3 of 20`, but the seed stores
  `expectedMovement.unit` as `' of 20'` **with its leading space** and the
  component prints the figure beside it. Read the call site.
- **The seed stores the bare value; the component adds the ornament.**
  Statements are stored unquoted and wrapped in curly quotes at render;
  source names are capitalised in the seed and lowercased at render; feed
  deltas store `3 → 0 citations` and the component draws the arrow. Key on
  the seed, not the screen.
- **The same string often renders from more than one call site.** "Primary
  constraint" lives in both the view and the shared `DimensionPanel`;
  momentum renders from three places. Wrapping one and seeing the translation
  appear makes the others look done. Grep before believing it.
- **`useT()` defaults to identity when no provider is present.** It does not
  throw — that is deliberate, so the design-system routes outside the
  localized tree keep rendering. The consequence is that a component mounted
  outside `ContentProvider` renders English *silently*. When a string is
  demonstrably wrapped and still comes out English, suspect the provider
  boundary before you suspect the key.
- **A sync component cannot call `getT()`.** The two row components in
  `marketplace/category/[slug]` take the page's translator as a prop instead.
  Making them `async` would also work; passing it down keeps one translator
  per request rather than one per row.
- **Adding a `'use client'` directive is sometimes the whole fix.**
  `ModuleCard` needed one to take `useT()`. Check whether a component is
  already in the client graph before reaching for `getT()`.
