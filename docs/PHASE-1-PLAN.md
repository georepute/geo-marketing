# GeoRepute — Phase 1 Build Plan (CONSTRAINED v1) — awaiting approval

**Status:** Draft for approval. No implementation code written.
**Source of truth:** `GeoRepute_Global_Commercial_Platform_Development_Master_Brief.pdf` (31pp).
**Missing input:** `GeoRepute_Basic_Build_Plan.md` — not in repo, not attached. Gaps decided here, marked `[DECISION]`.
**Revision:** Scope deliberately narrowed. Governing principle — *one convincing, internally-consistent
seeded product beats twelve half-built engines.*

---

## 0. The constraint rule

Everything in v1 must earn its place against **one** of the six non-negotiables. If a page, engine, product
or component doesn't directly serve one, it is deferred — regardless of how prominent it is in the brief.

| # | Non-negotiable | What satisfies it in v1 |
|---|---|---|
| 1 | Visitor knows this is NOT an SEO/BI/AI-mention tool | Home (9 sections, §19 copy) |
| 2 | Each built engine answers a distinct business question, real seeded outcome | **4** engines, built deep |
| 3 | Signal → evidence → consequence → action visibly connected | `IntelligenceReadout` + `CausalSignalChain` |
| 4 | Buy a subscription **and** a standalone product, no sales assistance | Pricing → checkout; Marketplace → checkout |
| 5 | Every financial figure = range + confidence + assumptions | `ExposureRange` type (scalar unrepresentable) |
| 6 | Exact headline copy from §19 | `lib/copy/en.ts` |

Plus the two hero experiences you named — **Mission Control** and **Decision Reconstruction** — which
together demonstrate the category.

---

## 1. Tech stack

**Next.js 15 (App Router) · TypeScript strict · Tailwind v4 · Radix primitives · Zod · motion · Vitest**

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 15 App Router, TS strict | Server Components render dense data with zero client JS. Routing maps to §4.1. |
| Styling | Tailwind v4, hand-authored `@theme` token layer | Tokens as CSS custom properties → drive both Tailwind classes and raw SVG fills. One source of truth. |
| Components | Radix primitives, hand-styled | a11y/focus/keyboard for free. **No shadcn CLI** — its default look is the "generic SaaS" §16 forbids. |
| Visuals | **Hand-built SVG only** | 7 bespoke components. No chart library at all — see cut list. |
| Motion | `motion` (Framer) + `LazyMotion` | `useReducedMotion` wires into the §5 motion contract. |
| Fonts | Inter Variable + IBM Plex Mono, self-hosted `next/font/local` | Zero external requests. Mono on every metric/prompt/date reads as auditable. |
| State | Server Components + URL params + one React Context | Entitlements + role lens only. |
| Validation | Zod on every seed entity | A broken number fails the build instead of rendering wrong. |
| Testing | Vitest (seed invariants) | The invariant suite is load-bearing; it *is* the consistency guarantee. |

**Dependencies cut in this revision:** ~~Recharts~~ (no conventional charts survive the cut — sparklines are
30 lines of hand-rolled SVG) · ~~zustand~~ (one Context suffices) · ~~Playwright~~ (moved to M7, optional).

**Deviations from the brief:** no CMS · no localization runtime (English only, but localization-*safe*) ·
Decision Reconstruction promoted Phase 2 → v1 · no real auth/payments/AI.

---

## 2. Scope — IN vs DEFERRED

### IN — v1 (13 routes)

| Route | Purpose | Brief |
|---|---|---|
| `/` | Home — all 9 sections, exact §19 copy | §5 |
| `/engines` | Overview — all 12 cards, 4 linked, 8 marked "Available in platform" | §7 |
| `/engines/[slug]` ×4 | The four deep engines (below) | §7 |
| `/marketplace` | Catalog, **8** products | §11 |
| `/marketplace/[slug]` | §9 detail template, 11 fields; **1** reference product in full depth | §9.1 |
| `/pricing` | 3 plans + add-ons | §10 |
| `/checkout` · `/checkout/success` | Mock checkout, both paths | §10.1 |
| `/methodology` | GEON, evidence, confidence, limitations | §15 |
| `/signin` | Mock auth | — |
| `/app/mission-control` | ★ **HERO 1** | §6.1 |
| `/app/reconstruct` | ★ **HERO 2** | §3.1 |
| `/app/actions` | Strategic Action Center | §7 |

### The four engines `[DECISION]`
Chosen because they chain into each other — together they *are* the causal argument, not four samples of it:

1. **AI Recognition Intelligence** — *Do AI engines understand who the business is?*
2. **Google vs AI Visibility** — *Does it exist consistently across both discovery surfaces?* (most category-defining contrast)
3. **Competitor Decision Intelligence** — *Who receives the decision instead, and why?*
4. **Action Intelligence** — *What must happen next, by whom, by when?* (closes diagnosis → execution)

Commercial exposure is **not** a separate engine page — it lives in `ExposureRange` on every readout, so it's
present everywhere rather than quarantined on one page.

### DEFERRED — explicitly not built

**Cut in this revision:** Platform page (§6 content folds into Home + Methodology) · Solutions ×7 (§14) ·
Agencies page · Partners page · Partner dashboard · Agency workflow · Commerce Center (§10.2) ·
Start Analysis wizard (folded into checkout) · 8 engine pages (AI Search Presence, Search Economics,
Narrative, Trust & Authority, Opportunity & Revenue, Strategic Timing, Distribution, Global Market).

**Already out per §20:** Decision Signals Library · CMS · real auth/payments/AI · localization runtime ·
industries, comparisons, customer stories, certification, resources (Phase 3) · APIs, benchmarks,
portfolio intelligence (Phase 4).

---

## 3. Component architecture — shared units first

### 3.1 `IntelligenceReadout` — built before any page
§13 mandates one structure for every signal, diagnostic and assessment.

```ts
interface Readout {
  id: string
  executiveTruth: string                 // one sentence
  businessMeaning: string
  evidence: Evidence[]                   // prompt, engine, source, position, cost, date
  connectedSignals: SignalRef[]
  competitorContext: { competitor: string; benefit: string; why: string }
  commercialExposure: ExposureRange      // never a scalar
  timing: { window: string; urgency: Urgency; decisionDeadline: ISODate }
  trend: 'improving' | 'stable' | 'deteriorating'
  prescription: string
  expectedMovement: { signal: string; from: number; to: number; unit: string }
  ownerDeadline: { owner: string; deadline: ISODate }
  measurement: string
  confidence: 'high' | 'medium' | 'directional' | 'insufficient-history'
  methodologyVersion: string
}
```

**3 variants** (was 4 — `export` cut): `full` · `panel` · `compact`.

Progressive disclosure is enforced by the component per §16: Executive Truth + Business Meaning open;
Evidence + Connected Signals collapsed; Methodology deepest. RoleLens (`executive | analyst | operator`)
changes which sections auto-expand — it never hides data.

### 3.2 `CausalSignalChain`
Renders §13.1 exactly. Vertical on mobile, horizontal on wide. Nodes clickable → EvidenceDrawer. Terminal
node is always the Prescription. Used on Home, Mission Control, all 4 engine pages, Reconstruction.

### 3.3 `ExposureRange` — the compliance component
Non-negotiable #5 says *never "confirmed lost revenue."* Made **structurally unrepresentable**:

```ts
type ExposureRange = {
  low: number; high: number; currency: 'USD'; period: 'month' | 'quarter' | 'year'
  confidence: Confidence
  assumptions: { label: string; value: string; source: 'connected' | 'customer-configured' | 'benchmark' }[]
  methodologyVersion: string
}
```
No code path produces a single number. A Vitest assertion fails the build if any money string renders
without an adjacent confidence node.

### 3.4 Visual components — **7** (was 12)

`CausalSignalChain` · `DecisionGraph` · `AIRecognitionMatrix` · `GoogleVsAIGapMatrix` ·
`DecisionJourneyTrack` · `RecommendationShare` · `GeonHexagon`

**Cut:** SearchEconomicsMatrix · StrategicTimingWindow · MarketReadinessGauge · TimingProfileRadar ·
NarrativeOwnership · OpportunityMap — all belonged to deferred engine pages.

### 3.5 Reuse map
```
IntelligenceReadout ──┬── Mission Control panels
                      ├── 4 engine pages
                      ├── 8 product detail pages
                      ├── Decision Reconstruction
                      └── Action Center

CausalSignalChain ────── Home · Mission Control · engine pages · Reconstruction
ExposureRange ────────── everywhere a number touches money
ConfidenceBadge ──────── everywhere a number touches a claim
EvidenceDrawer ───────── every viz node click
```

---

## 4. Seed data — "Northwind Supply"

### 4.1 The anchor
§13.1 of the brief already contains a complete, internally consistent causal chain. It becomes the
**numeric spine** of the entire seed. Every screen derives from it.

**Northwind Supply** — industrial MRO/fasteners distributor, US Midwest, ~$48M revenue, 60% of revenue
through supplier-evaluation RFQs.

### 4.2 The spine (`lib/seed/spine.ts`) — canonical, immutable, verbatim from §13.1

| Fact | Value |
|---|---|
| ChatGPT supplier-recommendation presence | **4.2%** |
| Supplier-evaluation stage coverage | **7%** |
| Independent authority evidence | **weak** |
| Top competitor recommendation share | **31%** |
| Paid dependency | **high** |
| Directional commercial exposure | **$3,200 – $6,200 / month** |
| Prescription | strengthen authority evidence + supplier-comparison coverage |

Everything else is **derived arithmetic** from those seven facts.

### 4.3 Derived layer — volumes reduced

| Entity | v1 volume | (was) |
|---|---|---|
| AI engines | **6** — ChatGPT, Claude, Gemini, Perplexity, Copilot, Grok | 6 |
| Prompts | **24** across 5 stages | 48 |
| Search observations | **20** keywords | 62 |
| Competitors | **4** | 4 |
| Marketplace products | **8** | 22 |
| Actions | **6** | 14 |
| Readouts | **12** | ~30 |

- Engine recognition: 4.2 / 6.1 / 3.4 / 11.8 / 5.0 / 2.7 % — ChatGPT pinned to spine. Gemini = highest-risk.
- Competitor share: **Kestrel Industrial 31%** (spine) · Meridian 18 · Halvorsen 11 · Atlas 7 ·
  Northwind 4.2 · other 28.8 — **sums to 100**.
- 24 prompts by stage: Research 7 · Concerns 4 · Solution Evaluation 6 · Supplier Evaluation 4 ·
  Purchase Decision 3. Northwind appears in 5 of 24 overall but **7% of Supplier Evaluation** ✓ spine.
  The stage collapse *is* the story.
- Exposure math shown on-screen (§15.4): `1,240 queries × 26.8% gap × 1.4–2.7% conv × $7,200 ADV
  ≈ $3,200–$6,200/mo` ✓ spine.
- GEON (0–100): Visibility 34 · **Authority 28** (lowest ✓ "weak") · Context 61 · Trust 44 ·
  Consistency 57 · Market Fit 72.
- Decision Health Index **41/100** — a published weighted function of GEON, not a magic number.

### 4.4 The consistency guarantee — the mechanism, not a promise
`tests/seed-invariants.test.ts` **fails the build** if:
1. Any recommendation-share set ≠ 100%
2. Any figure appearing on ≥2 screens isn't read from the same spine constant
3. Supplier-Evaluation coverage computed from `prompts.ts` ≠ 7%
4. The exposure formula's output ≠ `$3,200–$6,200`
5. Any `ExposureRange` lacks confidence or ≥1 assumption
6. Any GEON vector or the Decision Health Index disagrees with its inputs
7. Any `Readout` is missing one of the 12 §13 sections

Screens hold **no literals**. Home preview, Mission Control, engine pages and Reconstruction all call
`getReadout(id)` → the same object.

---

## 5. Design system — "Quiet Authority"

Dark-first command environment. §16: *premium executive; no generic SaaS gradients, no excessive colour,
no playful illustration.*

### 5.1 Colour
```css
/* Surfaces */
--surface-canvas:#0A0910; --surface-raised:#131019;
--surface-panel:#1A1622;  --surface-inset:#221D2C;
--line-subtle:#262031;    --line-strong:#38304A;
/* Text */
--text-primary:#F3F0F7; --text-secondary:#A79FB8; --text-tertiary:#6E667F;
/* Brand — the brief's deep violet */
--brand-900:#22093A; --brand-700:#3F1566; --brand-500:#6B32A3;
--brand-400:#8B54C4; --brand-300:#B189DE;
/* Accent — the brief's gold. SIGNAL ONLY, never decorative. */
--accent-500:#DFA22C; --accent-300:#F0C56A;
/* Semantic — muted, institutional. No pure hues. */
--critical:#C9564A; --warning:#C98A2E; --neutral:#7D8590;
--positive:#3D9678; --info:#527FB4;
/* Confidence — colour + glyph, never colour alone */
--conf-high:#3D9678; --conf-medium:#C98A2E;
--conf-directional:#527FB4; --conf-insufficient:#6E667F;
```
Body text ≥4.5:1, large ≥3:1. Data marks carry shape/label as well as hue.
**Light theme cut** — dark only in v1 (was: light theme for print/export).

### 5.2 Type — Inter Variable + IBM Plex Mono

| Token | Size | LH | Tracking | Weight |
|---|---|---|---|---|
| `display-1` | `clamp(2.75rem, 1.9rem + 3.2vw, 4.5rem)` | 1.04 | -0.03em | 560 |
| `display-2` | `clamp(2.0rem, 1.5rem + 2.1vw, 3.0rem)` | 1.10 | -0.02em | 560 |
| `heading-1` | 1.75rem | 1.20 | -0.015em | 560 |
| `heading-2` | 1.375rem | 1.30 | -0.01em | 560 |
| `heading-3` | 1.125rem | 1.40 | 0 | 580 |
| `body-lg` | 1.0625rem | 1.60 | 0 | 400 |
| `body` | 0.9375rem | 1.60 | 0 | 400 |
| `caption` | 0.8125rem | 1.50 | 0 | 400 |
| `label` | 0.6875rem | 1.30 | 0.09em | 600 · uppercase |
| `data` | 0.875rem | 1.40 | 0 | 450 · mono · tabular-nums |
| `data-lg` | 1.75rem | 1.10 | -0.01em | 450 · mono · tabular-nums |

Every metric uses `data`/`data-lg` with `tabular-nums` so columns align and values don't jitter when animating.

### 5.3 Space · radius · elevation
- Base **4px**. Scale `0 4 8 12 16 20 24 32 40 48 64 80 96 128`. Section rhythm 96 mobile / 128 desktop.
- Radius `2` inputs · `4` default · `8` cards · `12` modals. Sharp reads institutional.
- Elevation = **1px border + one soft drop**, never stacked glows.
  `--elev-2: 0 8px 24px -14px rgb(0 0 0 / .70), 0 1px 0 rgb(255 255 255 / .04) inset;`
- Grid 12 col, 24px gutter (16 mobile). Content `max-w-[1180px]`, command surfaces `max-w-[1440px]`.

### 5.4 Motion contract
```
--dur-fast:120ms  --dur-base:200ms  --dur-slow:320ms
--dur-reveal:520ms (data entrance)  --dur-scan:2400ms (loop)
--ease-standard:cubic-bezier(.2,.6,.2,1)
--ease-enter:cubic-bezier(0,.6,.2,1)
--ease-exit:cubic-bezier(.4,0,1,1)
```
**Nothing bounces, overshoots, or parallaxes.** Motion is permitted for exactly three purposes:
(1) tracing a *relationship*, (2) marking a *state change*, (3) conveying *liveness*.
**Max one looping animation per viewport.** Counters fire once, on first intersection.

### 5.5 `prefers-reduced-motion: reduce` — full contract
- Transforms → opacity-only, ≤120ms
- All loops off (scan sweep, feed pulse, graph shimmer)
- Counters render final value immediately
- Causal chain + Decision Graph render **fully drawn**, no progressive trace
- Reconstruction becomes an instantly-complete stepper
- Implemented in CSS **and** JS so SVG animation genuinely halts

---

## 6. Milestones — **8** (was 11)

Each ends with something you can open and judge.

| # | Milestone | Testable when done |
|---|---|---|
| **M0** | Foundation — Next.js, TS, Tailwind v4, tokens, fonts, Zod, Vitest | `/kitchen-sink`: palette, type scale, spacing, motion, reduced-motion toggle |
| **M1** | Seed spine + API seam — all seed modules, Zod, `lib/api/`, invariant suite | `npm test` invariants pass; `/debug/seed` traces every number to the spine |
| **M2** | **Readout + Causal Chain** — 3 variants, ExposureRange, ConfidenceBadge, EvidenceDrawer, ActionCard | §13.1 chain renders exactly; no money value renders without confidence |
| **M3** | **★ Mission Control** — shell, RoleLens, 10 §6.1 tiles, Intelligence Feed, readout drawers | Feels like a live command environment; every tile opens a full readout |
| **M4** | **★ Decision Reconstruction** — 10-step §3.1 sequence + interactive Decision Graph | Enter domain → pick question → watch the decision reconstruct. Sells the category alone. |
| **M5** | **Home** — 9 sections, exact §19 copy, gated live-domain preview | A first-time visitor can state what this is and that it isn't SEO/BI |
| **M6** | **Engines ×4 + Action Center** | 4 distinct questions, 4 distinct seeded outcomes, zero duplicated visuals |
| **M7** | **Commerce + Methodology + hardening** — Marketplace, product detail, Pricing, mock checkout both paths, Methodology, a11y, responsive 360→1920 | Buy a plan **and** a scan end-to-end; locked panels unlock; all 6 non-negotiables demonstrable |

M2 before M3 is deliberate — the readout is the atom. Building a page first means rebuilding it.

---

## 7. Questions before Phase 2

**Blocking — these change architecture:**

1. **Does `GeoRepute_Basic_Build_Plan.md` exist?** If yes, send it — it supersedes §1/§2 here.
2. **Does Sign In lead to a real in-app shell?** I've assumed **yes** (`/app/*` behind mock session). The
   alternative — Mission Control as a public marketing demo screen — is smaller still and a different nav model.
3. **Approve the 4-engine cut** (AI Recognition · Google vs AI · Competitor Decision · Action)?

**Non-blocking — I'll decide and flag if you skip:**

4. **Pricing** — PDF names no plans/prices. I'll invent 3 tiers, clearly marked placeholder USD.
5. **Dark-only?** Light theme is cut. Say now if the brand needs light-first — it changes every token.
6. **Brand assets** — logo, "POWERED BY GINTEX" lockup, licensed fonts? Otherwise Inter wordmark + simple mark.
7. **Naming real AI products** (ChatGPT, Claude, Gemini…) publicly — plain text, no logos. Confirm, or I'll
   switch to generic labels.
8. **Northwind Supply / industrial distribution** — approve? Cheap now, expensive later.
9. **USD / `en-US`** throughout, `localStorage` persistence with a "Reset demo" control?

---

## 8. Risks

| Risk | Mitigation |
|---|---|
| **Seed drift** — one contradictory number destroys the illusion the product depends on | Single spine + build-failing invariants (§4.4). No literals in components. |
| **Engines diluting into shallow pages** | Cut to 4, chosen to chain into one causal argument. |
| **Legal exposure on financial claims** | `ExposureRange` makes a bare number unrepresentable. |
| **Decision Graph performance / a11y** | Deterministic hand-laid layout (no force sim), ≤24 nodes, keyboard traversal, table fallback. |
| **"Live intelligence" tipping into gimmick** | One-loop-per-viewport; motion limited to three purposes. |
| **Mock seams rotting into real coupling** | Pages import **only** `lib/api/*` — enforced by ESLint `no-restricted-imports`, not discipline. |
| **Deferred surfaces reading as broken** | Engines overview shows all 12 cards; the 8 unbuilt say "Available in platform", not 404. Nav omits deferred pages entirely. |

---

## 9. If you want it tighter still

The next cut, in the order I'd make it:
1. Drop `/app/actions` — fold the Action Center into Mission Control (−1 route)
2. Drop Marketplace to a single reference product, no catalog (−1 route, −7 products)
3. Drop Decision Reconstruction's interactive graph; keep the 10-step sequence as guided static steps
4. Drop `/methodology`; move confidence/limitations into a readout disclosure only

I would **not** cut below that — past this point you lose one of the six non-negotiables.
