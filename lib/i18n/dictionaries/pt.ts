import type { DictionaryMeta, PartialDictionary } from '../types'

/* ============================================================================
   Portuguese (pt) — LTR, left-to-right.

   NOT YET TRANSLATED. Every key below falls through to the English in
   lib/copy/en.ts, so the site renders correctly in Portuguese layout with
   English text until a translator fills this in.

   HOW TO FILL THIS IN
     1. `npm run i18n pt` prints every untranslated key with its English
        source, ready to hand to a translator.
     2. Add the translated keys to `dictionary` below, mirroring the shape of
        lib/copy/en.ts. Partial is fine — untranslated keys keep English, so
        this can be delivered a section at a time.
     3. Set `reviewed: true` once a human has checked the result.

   TWO THINGS THE TRANSLATOR MUST KNOW

   POSITIONING IS NOT NEGOTIABLE. Requirements doc §9 bans a specific
   vocabulary in every language: GeoRepute is never a content generator, an
   SEO or GEO tool, a social-media or marketing-automation platform, a
   publishing or scheduling tool, or an analytics, reporting or dashboard
   tool. It is Decision Intelligence — an intelligence system that reconstructs
   how decisions are made. A translator working from the English alone will
   reach for the local marketing-software vocabulary by default, and that is
   precisely the outcome the doc exists to prevent. Send them §9 with the file.

   EVIDENCE LANGUAGE IS LOAD-BEARING. "Directional estimate", "not confirmed
   lost revenue", and the four confidence levels are commitments about what
   the product does and does not claim. They must not be softened, sharpened
   or made more marketable in translation.
   ========================================================================= */

export const meta: DictionaryMeta = {
  reviewed: false,
  notes:
    'Scaffold only. Falls back to English. Requires human translation — see the header of this file for the positioning constraints that must go to the translator.',
}

export const dictionary: PartialDictionary = {
  /* Translated keys go here, mirroring lib/copy/en.ts. For example:
       nav: { signIn: '…', startAnalysis: '…' },
     Anything absent renders in English. */
}
