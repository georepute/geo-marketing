import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { DomainEntry } from '@/components/home/DomainEntry'
import { AgencyValueCards } from '@/components/home/agency/ValueCards'
import { AgencyPlatformFlow } from '@/components/home/agency/PlatformFlow'
import { AgencyComparison } from '@/components/home/agency/Comparison'
import { AgencyProposalFlow } from '@/components/home/agency/ProposalFlow'
import {
  AgencyRetention,
  AgencyStandardization,
  AgencyClose,
} from '@/components/home/agency/Statements'
import {
  AgencyRevenue,
  AgencyIntelligence,
  AgencyProof,
} from '@/components/home/agency/Capabilities'
import { Reveal } from '@/components/motion/Reveal'
import { getDictionary } from '@/lib/i18n/server'
import { getT } from '@/lib/i18n/content/translator'
import {
  getCompetitors,
  getDomainPreview,
  getReconstructableQuestions,
  getReconstruction,
} from '@/lib/api/client'

/* generateMetadata, not a static export: the title and description come from
   the active dictionary, and a module-scope constant is evaluated once at
   import time when no locale exists yet. */
export async function generateMetadata(): Promise<Metadata> {
  const copy = await getDictionary()
  return {
    title: `GeoRepute — ${copy.category}`,
    description: copy.meta.description,
  }
}

/* ============================================================================
   HOME — the agency argument, in eleven sections.

   This page used to ask seven executive questions of an end business, each
   answered from live seed data. It now addresses the marketing agency that
   would serve that business, and the order is the client's:

     what an agency gains → how the system runs → why it is not a dashboard →
     retention → revenue → intelligence → consistency → commercials →
     capability → the close.

   WHAT CAME OUT, AND WHY IT IS NOT LOST. The seven question sections, the
   premise band, the closed-loop band, the ecosystem strip and the engine
   band all spoke to the end business in the second person — "does AI know
   YOUR business" — which is the wrong reader for this page now. Every one of
   them still exists: the questions and their live readouts are the substance
   of /app/mission-control and /app/reconstruct, the loop is /how-it-works,
   and the ecosystem is /marketplace. Nothing was deleted, only unlinked from
   this page.

   WHAT STAYED. DomainEntry, immediately before the close. It is the only
   part of this page that runs rather than describes, and doc §1 asks the
   site to feel like a working system rather than an account of one. An
   agency runs it on a client's domain; the copy inside it still says "your
   business" and is the next thing to reword.
   ========================================================================= */

export default async function Home() {
  const copy = await getDictionary()
  const t = await getT()

  const [preview, questions, competitors] = await Promise.all([
    getDomainPreview('northwindsupply.com'),
    getReconstructableQuestions(),
    getCompetitors(),
  ])

  const heroQuestion = questions.data[0]!
  const hero = await getReconstruction(heroQuestion.id)
  const topCompetitor = competitors.data[0]!
  const self = competitors.data.find((c) => c.isSelf)!

  return (
    <>
      {/* --- 1 · hero ------------------------------------------------- */}
      <Hero
        reconstruction={hero.data}
        ownAuthoritySources={self.authoritySources}
        competitorAuthoritySources={topCompetitor.authoritySources}
      />

      {/* --- 2 to 10 · the argument ----------------------------------- */}
      <AgencyValueCards />
      <AgencyPlatformFlow />
      <AgencyComparison />
      <AgencyRetention />
      <AgencyRevenue />
      <AgencyIntelligence />
      <AgencyStandardization />
      <AgencyProposalFlow />
      <AgencyProof />

      {/* --- Run it, before being asked to believe it ------------------ */}
      <section className="gr-hairline">
        <div className="gr-rail-wide gr-section">
          <Reveal>
            <p className="text-label uppercase text-brand-300">
              {t('Your business')}
            </p>
            {/* Dictionary, not t(). This heading is copy.home.liveEntry — a
                DICTIONARY key — and the content overlay has no entry for it,
                so t() found nothing and rendered English on all six locales. */}
            <h2 className="text-display-2 text-ink mt-5 max-w-3xl text-balance">
              {copy.home.liveEntry}
            </h2>
            <p className="text-body-lg text-ink-2 mt-6 max-w-2xl">
              {t(
                'Enter a domain and one signal is released immediately. The rest of the position requires an account or a purchase — and the locked panels state exactly what sits behind them.',
              )}
            </p>
          </Reveal>

          <div className="mt-10">
            <DomainEntry
              preview={preview.data}
              lockedCount={preview.data.lockedSignalCount}
            />
          </div>
        </div>
      </section>

      {/* --- 11 · the close -------------------------------------------- */}
      <AgencyClose />
    </>
  )
}
