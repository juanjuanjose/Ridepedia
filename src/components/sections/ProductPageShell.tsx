import { Link } from 'react-router-dom'

import { Reveal } from '../common/Reveal'

type PageMetric = {
  label: string
  value: string
  detail: string
}

type PageCard = {
  title: string
  description: string
  meta: string
}

type PageSection = {
  eyebrow: string
  title: string
  description: string
  cards: PageCard[]
}

type ProductPageShellProps = {
  eyebrow: string
  title: string
  description: string
  statusLabel: string
  accent: string
  highlights: string[]
  metrics: PageMetric[]
  sections: PageSection[]
  primaryCta: {
    label: string
    to: string
  }
  secondaryCta?: {
    label: string
    to: string
  }
}

export function ProductPageShell({
  eyebrow,
  title,
  description,
  statusLabel,
  accent,
  highlights,
  metrics,
  sections,
  primaryCta,
  secondaryCta,
}: ProductPageShellProps) {
  return (
    <div className="section-shell mt-6 space-y-24 pb-6 md:mt-8">
      <Reveal>
        <section className="overflow-hidden rounded-[40px] border border-black/8 bg-[var(--ride-paper)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-8 lg:p-10">
          <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr] xl:items-end">
            <div>
              <p className="editorial-eyebrow text-black/45">{eyebrow}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.95] text-black sm:text-5xl lg:text-[4.3rem]">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-black/64 sm:text-lg">{description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em]"
                    style={{
                      borderColor: `${accent}22`,
                      color: accent,
                      backgroundColor: `${accent}10`,
                    }}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-[linear-gradient(180deg,#111827,#020617)] p-6 shadow-[0_28px_90px_rgba(15,23,42,0.18)] md:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <p className="text-xs uppercase tracking-[0.32em] text-white/42">Current role</p>
                <span
                  className="rounded-full border px-4 py-2 text-[0.7rem] uppercase tracking-[0.24em] text-white/82"
                  style={{ borderColor: `${accent}66`, backgroundColor: `${accent}22` }}
                >
                  {statusLabel}
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                {metrics.map((metric) => (
                  <article key={metric.label} className="rounded-[24px] border border-white/10 bg-white/6 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/42">{metric.label}</p>
                    <p className="mt-3 text-xl font-medium text-white">{metric.value}</p>
                    <p className="mt-3 text-sm leading-7 text-white/62">{metric.detail}</p>
                  </article>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to={primaryCta.to}
                  className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-[#090909] transition hover:-translate-y-0.5"
                >
                  {primaryCta.label}
                </Link>
                {secondaryCta ? (
                  <Link
                    to={secondaryCta.to}
                    className="inline-flex rounded-full border border-white/16 px-5 py-3 text-sm font-medium text-white/82 transition hover:border-white/32"
                  >
                    {secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {sections.map((section) => (
        <Reveal key={section.title}>
          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <p className="editorial-eyebrow text-black/45">{section.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold text-black sm:text-4xl">{section.title}</h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-black/64">{section.description}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {section.cards.map((card) => (
                <article key={card.title} className="rounded-[28px] border border-black/8 bg-white/82 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                  <p className="text-xs uppercase tracking-[0.3em] text-black/42">{card.meta}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-black">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-black/64">{card.description}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>
      ))}
    </div>
  )
}
