import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { editorialHeroStories, editorialLeadStory } from '../../data/editorial'

export function HeroSection() {
  return (
    <section className="px-2 pt-4 sm:px-3 lg:px-4 lg:pt-5">
      <motion.section
        initial={{ opacity: 0, scale: 0.985, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto overflow-hidden rounded-[38px] border-2 border-black/10 bg-[var(--ride-dark)] shadow-[0_28px_90px_rgba(15,23,42,0.18)]"
      >
        <div className="relative">
          <img
            src={editorialLeadStory.image}
            alt="Escena editorial del mundo motero"
            className="absolute inset-0 h-full w-full object-cover blur-[10px] saturate-[0.9]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,15,0.96)_0%,rgba(8,10,15,0.82)_44%,rgba(8,10,15,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(157,34,53,0.22),transparent_24%),radial-gradient(circle_at_85%_24%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_78%_78%,rgba(37,99,235,0.14),transparent_22%)]" />

          <div className="relative z-10 grid min-h-[34rem] gap-5 p-5 sm:p-6 lg:grid-cols-[1.18fr_0.82fr] lg:p-7 xl:min-h-[40rem] xl:p-8">
            <div className="flex flex-col justify-between gap-8 rounded-[32px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 backdrop-blur-md sm:p-7 xl:p-8">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.68rem] uppercase tracking-[0.3em] text-white/78">
                    Ridepedia news
                  </span>
                  <span className="rounded-full border border-[var(--ride-brand-line)] bg-[var(--ride-brand-soft)] px-4 py-2 text-[0.68rem] uppercase tracking-[0.26em] text-[var(--ride-copy-on-dark)]">
                    Actualidad motera
                  </span>
                </div>

                <p className="mt-6 text-[0.72rem] uppercase tracking-[0.34em] text-white/44">{editorialLeadStory.section}</p>
                <h1 className="mt-4 max-w-[15ch] text-3xl font-semibold leading-[0.96] text-white sm:text-[2.9rem] xl:text-[4rem]">
                  {editorialLeadStory.title}
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
                  {editorialLeadStory.summary}
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {editorialLeadStory.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-[var(--ride-copy-on-dark-muted)]">
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to={editorialLeadStory.href}
                    className="rounded-full bg-[var(--ride-brand)] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_24px_rgba(157,34,53,0.22)] transition hover:-translate-y-0.5 hover:bg-[var(--ride-brand-strong)]"
                  >
                    {editorialLeadStory.cta}
                  </Link>
                  <Link
                    to="/catalog"
                    className="rounded-full border border-white/14 bg-white/8 px-6 py-3 text-sm font-medium text-[var(--ride-copy-on-dark)] transition hover:border-[var(--ride-brand-line)] hover:bg-[var(--ride-brand-soft)]"
                  >
                    Ver catálogo base
                  </Link>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: 'Ahora', value: 'Mercado' },
                    { label: 'Radar', value: 'Tendencias' },
                    { label: 'Seguir', value: 'Modelos clave' },
                  ].map((item) => (
                      <div key={item.label} className="rounded-[22px] border border-white/16 bg-white/6 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                       <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42">{item.label}</p>
                       <p className="mt-2 text-sm font-medium leading-6 text-[var(--ride-copy-on-dark)]">{item.value}</p>
                     </div>
                   ))}
                 </div>
              </div>
            </div>

            <aside className="grid gap-4">
              {editorialHeroStories.map((card, index) => (
                <article
                  key={card.id}
                  className={`rounded-[28px] border-2 border-white/18 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-md ${index === 0 ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))]' : 'bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))]'}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/44">0{index + 1} · {card.section}</p>
                        <h2 className={`mt-3 font-semibold text-white ${index === 0 ? 'text-xl leading-[1.06]' : 'text-lg leading-[1.1]'}`}>
                          {card.title}
                        </h2>
                    </div>
                    <span
                      className="mt-1 h-3 w-3 shrink-0 rounded-full"
                      style={{ backgroundColor: card.accent, boxShadow: `0 0 0 6px ${card.accent}22` }}
                    />
                  </div>

                  <p className="mt-4 text-sm leading-7 text-white/70">{card.summary}</p>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full border border-white/16 bg-white/6 px-3 py-2 text-[0.66rem] uppercase tracking-[0.22em] text-[var(--ride-copy-on-dark-muted)]">
                      {card.meta}
                    </span>
                    <Link to={card.href} className="inline-flex text-sm font-medium text-white transition hover:text-white/78">
                      Abrir historia
                    </Link>
                  </div>
                </article>
              ))}
            </aside>
          </div>
        </div>
      </motion.section>
    </section>
  )
}
