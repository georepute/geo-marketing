# Product screenshots

Every screenshot the website is waiting on is declared in
[`lib/visual/screens.ts`](../../lib/visual/screens.ts). This folder is where the
image files go.

## The one rule

**Anonymise every export before it goes in this folder.**

No customer names. No real domains. No personal data. No confidential figures.
No real political candidates, parties or campaigns. The requirements doc is
explicit on this point in both §2 and §3: real GeoRepute interface, demonstration
or anonymised data.

Anything placed here is served publicly at `https://<domain>/screens/<file>` the
moment it is deployed. There is no access control on this folder, and a file
committed here stays in git history even if it is deleted later.

## Filling a slot

1. **Export** the surface named in the slot's `surface` field as PNG or WebP,
   at roughly **2400px wide**. That covers every layout on the site at 2×.
2. **Anonymise** it — see above.
3. **Save** it to the exact `file` path from the slot, e.g.
   `lib/visual/screens.ts` says `/screens/mission-control.png`, so the file goes
   to `public/screens/mission-control.png`.
4. **Flip `ready: false` to `ready: true`** for that slot.
5. **Re-read `alt` and `caption`** and correct them so they describe the image
   you actually supplied. The alt text is written from the doc's description of
   each screen and will not be right by accident.

Nothing else needs to change. The frame already reserves the correct aspect
ratio, so filling a slot never shifts the surrounding layout.

## Checking what is outstanding

```
npm run screens
```

Prints every slot that still has `ready: false`, with its path and the surface
to capture.

## Aspect ratios

Slots use one of three ratios so a page of screens reads as one series:

| Ratio | Used for |
|---|---|
| `16 / 10` | a full application window |
| `4 / 3` | a single panel or card lifted out of a screen |
| `3 / 4` | a narrow column — action list, feed, report sidebar |

Export at the ratio the slot declares. An export at a different ratio will be
cropped to fit (`object-cover`, anchored to the top).
