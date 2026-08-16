# Pre-launch checklist

Requirements doc §6. Work top to bottom; the blocking items are marked.

Nothing here has been done — this is the list to work through when the domain
is ready, not a record of completed work.

---

## 0. Before anything else

- [ ] **Provide `CAL_API_KEY` and `CAL_EVENT_TYPE_ID`** — see [`.env.example`](../.env.example).
      Until these exist the booking panel shows its fallback instead of a
      calendar. **Blocking for §5.**
- [ ] **Drop in the anonymised product screenshots.** `npm run screens` prints
      the outstanding list — currently **30 of 30**. Every one is a reserved,
      correctly-proportioned frame; filling one is a file drop plus flipping
      `ready: true` in [`lib/visual/screens.ts`](../lib/visual/screens.ts).
      **Blocking for §1 and §2.**
- [x] ~~**Supply human translations.**~~ Done. All seven languages are fully
      translated across all 42 routes — 531 `t()` keys and 1,664 overlay
      entries per locale, key sets identical in both directions, and
      `node scripts/i18n-review.mjs` clean.
- [ ] **Get the six translations read by a native speaker.** Every file is
      machine-produced and carries `reviewed: false`. The mechanical half is
      done and repeatable; the register judgement is not. Arabic needs it most
      — its second-person address was rewritten across 100+ strings. See
      [`lib/i18n/GLOSSARY.md`](../lib/i18n/GLOSSARY.md), which lists what is
      already settled so a reviewer does not re-litigate it.
      **Blocking for §8.**

---

## 1. Domain and TLS

- [ ] DNS points at the host
- [ ] Certificate issued and auto-renewing
- [ ] `http://` redirects to `https://`
- [ ] `www` and apex resolve to one canonical host, the other redirecting
- [ ] **Update the hardcoded production URL** — `https://georepute.ai` appears
      in exactly two places: `const base` in [`app/sitemap.ts`](../app/sitemap.ts)
      and `metadataBase` in [`app/[locale]/layout.tsx`](../app/[locale]/layout.tsx).
      If the real domain differs, both must change or every canonical, hreflang
      and OG URL will point at the wrong host. (`app/robots.ts` carries no URL —
      it returns relative rules only.)

**Host requirement:** the site needs a Node or serverless runtime — it cannot
be a static file export. Two things need a server: `proxy.ts` (language
detection) and `app/api/booking/` (the Cal.com calls that keep the API key off
the browser). Vercel, Netlify, Cloudflare and a container all work.

---

## 2. Language and routing

- [ ] `/` redirects to a language based on `Accept-Language`
- [ ] All seven prefixes load: `/en /he /ar /ru /fr /es /pt`
- [ ] Switching language stays on the same page rather than returning home
- [ ] The choice survives navigation and a return visit (cookie)
- [ ] `/he` and `/ar` render right-to-left: nav, forms, footer, mobile drawer
- [ ] **Numbers and dates read left-to-right inside RTL pages** — this is the
      one that silently inverts meaning if it regresses
- [ ] An unknown prefix (`/xx`) returns 404, not English

---

## 3. Content and correctness

- [ ] No placeholder screenshot frames left visible on pages being demonstrated
- [ ] No real customer name, domain, or figure anywhere — doc §2
- [ ] No real candidate, party or campaign anywhere — doc §3
- [ ] The demonstration subject is still labelled fictional where it renders
- [ ] Legal pages say something true about the production site. **[`/legal`](../app/[locale]/(marketing)/legal/page.tsx)
      is currently written for a demonstration build** and says there is no
      authentication and nothing is transmitted. Once booking is live that is
      false — visitor name and email go to Cal.com. This must be rewritten
      before launch, and it needs a privacy policy covering that transfer.
- [ ] Footer still says "Demonstration environment · Seeded data". Decide
      whether that stays true; if the site is presented as live, it must go.

---

## 4. Pricing

- [ ] `NEXT_PUBLIC_SHOW_PRICING` unset or `false` in the production environment
- [ ] `/pricing` returns 404
- [ ] `/checkout` returns 404
- [ ] No price visible on marketplace, category or product pages
- [ ] No "Pricing" link in nav, footer, or sitemap

`npm run test` enforces all of this — `tests/pricing-withheld.test.ts` fails
the build if a price can leak.

---

## 5. Booking flow

- [ ] Calendar loads and shows real availability
- [ ] Earliest offered slot is at least 48 hours out
- [ ] Times already busy in your real calendar do not appear
- [ ] A completed booking arrives in your calendar
- [ ] Confirmation email reaches the visitor
- [ ] Confirmation email reaches you
- [ ] Booking the same slot twice is rejected with a usable message
- [ ] Test from a non-UTC timezone — the invite must land at the right hour
- [ ] Every meeting CTA on the site reaches `/briefing`

---

## 6. Forms, CTAs and links

- [ ] Every nav item resolves
- [ ] Every footer link resolves, including GINTEX, copyup.ai and
      onlineperception.ai
- [ ] Home, How It Works and Election Intelligence CTAs all reach a real page
- [ ] Domain-entry box on the home page behaves sensibly
- [ ] `/signin` — decide whether it ships at all. It currently enters a
      demonstration workspace with no authentication.
- [ ] 404 page reachable and styled

---

## 7. Metadata and sharing

- [ ] Every page has a distinct title and description
- [ ] `hreflang` present with all seven languages plus `x-default`
- [ ] Canonical URL correct per locale
- [ ] `sitemap.xml` loads and lists every route in every language
- [x] ~~`robots.txt` correct for production~~ — [`app/robots.ts`](../app/robots.ts)
      already allows `/` and disallows only `/kitchen-sink`, `/debug`,
      `/checkout` and `/signin`. Re-check only if those routes change.
- [ ] **Open Graph image** — none exists. Links shared to LinkedIn, WhatsApp
      or Slack will render without a preview image. Either add
      `app/[locale]/opengraph-image.tsx` or accept text-only cards.
- [ ] Test a shared link on at least LinkedIn and WhatsApp

---

## 8. Analytics

- [ ] **Choose a provider.** Nothing is installed. If launch needs traffic
      data from day one, this must be decided before the domain goes live.
- [ ] Consider GDPR — Hebrew, Arabic, Russian, French, Spanish and Portuguese
      audiences imply EU and other jurisdictions. A cookie banner may be
      required depending on the provider.
- [ ] Verify events fire in production

---

## 9. Performance and device checks

- [ ] Test on a real phone, not only a resized browser window
- [ ] Test RTL on a real phone
- [ ] Lighthouse on home, How It Works, Election Intelligence
- [ ] Confirm no layout shift as screenshots load
- [ ] Check the animated loop on a low-end device
- [ ] Verify `prefers-reduced-motion` — the loop should stop entirely

---

## 10. Accessibility

- [ ] Keyboard-only pass through nav, language switcher, booking form
- [ ] Screen-reader pass on one page per language direction
- [ ] Confirm focus is visible everywhere
- [ ] Confirm the skip link works

`npm run test` covers the structural cases; none of the above is structural.

---

## Commands

```bash
npm run typecheck              # types
npm run lint                   # lint
npm run test                   # 222 tests, incl. pricing/i18n/booking guards
npm run build                  # production build
npm run screens                # outstanding screenshot slots
node scripts/i18n-review.mjs   # glossary compliance, exits 1 on any finding
```

All of these must pass before deploying.
