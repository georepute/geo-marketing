# Handoff — launch preparation

**Branch:** `feat/launch-prep` · **Written:** 13 Aug 2026 · Nothing pushed;
this branch exists only locally and has no upstream.

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
| 8 | Full multilingual support | **Routing done for 7 locales. Translation done for Hebrew home page only** — see §2 |
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

**Three pages are complete in all six** — he, ar, ru, fr, es, pt.

| Page | he · ar · ru (script) | fr | es | pt |
| --- | --- | --- | --- | --- |
| home | 1 each | 16 | 1 | 1 |
| /methodology | 1 each | 1 | 0 | 0 |
| /how-it-works | 1 each | 4 | 0 | 1 |

The `1` on he/ar/ru is the ISO code chip in the compact language switcher. The
Latin-script residue is cognates — `Visible`, `Volume`, `Intelligence`,
`Action` — words genuinely identical in those languages.

**Read §3 on the two audit modes before trusting any of those numbers.** The
Latin-script locales cannot be measured the same way as the others, and the
default mode says a perfectly translated French page is 100% English.

Only the first locale cost real engineering. **No component changed for any
locale after Hebrew** — every string that needed wrapping was wrapped once, so
the rest were translation jobs.

**Everything else is untranslated.** To be precise about what that means:

- The **UI dictionaries** (`lib/i18n/dictionaries/*.ts`) are machine-translated
  into all six languages at ~98% coverage. Every one is marked
  `reviewed: false`. **None has been read by a native speaker.**
- The **content overlays** (`lib/i18n/content/*.ts`) — seed prose and inline
  component prose — now exist for all six, ~580 entries each.
- All six cover **home, /methodology and /how-it-works**. Other routes will
  show English wherever they use prose those three did not.
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
the same as English. Diff mode has the opposite blind spot: it cannot tell a
correct identical translation (`Visible`, `Volume`, `Action`) from an absent
one, so its residue always needs reading by eye rather than trusting the count.

Neither mode is the truth on its own. **Spot-check actual prose** in the target
language before declaring a locale done.

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

1. **The remaining routes, per locale.** `/marketplace`, `/engines/*`,
   `/election-intelligence`, `/briefing`, `/blog`, `/legal`.
   Expect four categories, all of which have bitten already: unwrapped inline
   prose, seed prose, dictionary blocks that were never written, and
   `ProductScreen` slot captions.
2. **Native review of all six dictionaries and all six overlays.** Flip
   `reviewed: false` only when a human has actually read one. This is a launch
   blocker, not a detail — every one of them is machine-produced. Some carry
   real judgement calls worth a second opinion: Arabic renders "authority" as
   حُجّية (evidentiary weight) rather than سُلطة (power), and Portuguese is
   European rather than Brazilian.

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
