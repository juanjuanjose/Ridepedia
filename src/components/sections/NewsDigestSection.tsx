import { Link } from 'react-router-dom'

import { newsroomBriefs, newsroomStories } from '../../data/editorial'
import { Reveal } from '../common/Reveal'

export function NewsDigestSection() {
  const leadStory = newsroomStories[0]
  const supportingStories = newsroomStories.slice(1, 4)

  return (
    <Reveal className="section-shell mt-20">
      <section className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <article className="overflow-hidden rounded-[34px] border border-black/8 bg-[linear-gradient(180deg,var(--ride-dark-2),#020617)] p-6 shadow-[0_28px_90px_rgba(15,23,42,0.18)] md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.68rem] uppercase tracking-[0.28em] text-white/76">
              Actualidad
            </span>
            <span className="rounded-full border border-[var(--ride-brand-line)] bg-[var(--ride-brand-soft)] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-[var(--ride-copy-on-dark)]">
              Ultimas claves
            </span>
          </div>

          <p className="mt-6 text-[0.72rem] uppercase tracking-[0.34em] text-white/42">{leadStory.section}</p>
          <h2 className="mt-4 max-w-[16ch] text-3xl font-semibold leading-[0.98] text-white sm:text-[2.7rem]">
            {leadStory.title}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/70">{leadStory.summary}</p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {newsroomBriefs.map((brief) => (
              <div key={brief.id} className="rounded-[22px] border border-white/12 bg-white/4 p-4">
                <p className="text-[0.66rem] uppercase tracking-[0.28em] text-white/40">{brief.label}</p>
                <h3 className="mt-3 text-sm font-medium leading-6 text-white">{brief.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/64">{brief.summary}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
              <Link
              to="/news"
              className="rounded-full bg-[var(--ride-brand)] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[var(--ride-brand-strong)]"
            >
              Ir a noticias
            </Link>
            <Link
              to="/news"
              className="rounded-full border border-white/14 bg-white/8 px-6 py-3 text-sm font-medium text-[var(--ride-copy-on-dark)] transition hover:border-[var(--ride-brand-line)] hover:bg-[var(--ride-brand-soft)]"
            >
              Ver todas las noticias
            </Link>
          </div>
        </article>

        <div className="grid gap-4">
          {supportingStories.map((story, index) => (
            <article key={story.id} className="rounded-[28px] border border-black/10 bg-[linear-gradient(180deg,rgba(252,250,246,0.94),rgba(245,240,233,0.92))] p-5 shadow-[0_14px_34px_rgba(15,23,42,0.045)] transition hover:-translate-y-0.5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-black/42">0{index + 2} · {story.section}</p>
                  <h3 className="mt-3 text-[1.3rem] font-semibold leading-[1.08] text-black">{story.title}</h3>
                </div>
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: story.accent, boxShadow: `0 0 0 6px ${story.accent}22` }} />
              </div>

              <p className="mt-4 text-sm leading-6 text-black/66">{story.summary}</p>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-black/12 bg-[#f4efe8] px-3 py-2 text-[0.66rem] uppercase tracking-[0.22em] text-black/56">
                  {story.meta}
                </span>
                <Link to={story.href} className="inline-flex text-sm font-medium text-[var(--ride-brand)] transition hover:text-[var(--ride-brand-strong)]">
                  Abrir historia
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
