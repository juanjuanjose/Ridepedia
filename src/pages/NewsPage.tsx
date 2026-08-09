import { Link } from 'react-router-dom'

import { Reveal } from '../components/common/Reveal'
import { editorialLeadStory, newsroomBriefs, newsroomStories } from '../data/editorial'

const featuredStory = {
  section: 'Tema central',
  title: 'La actualidad del mundo motero se reparte entre mercado, uso real, cultura y motos que marcan tendencia.',
  description:
    'Marcas en movimiento, segmentos que cambian y modelos que concentran miradas: la agenda del sector ya no se deja leer desde un solo angulo.',
  href: '/catalog',
  cta: 'Explorar motos relacionadas',
  image: editorialLeadStory.image,
  tags: ['Actualidad motera', 'Lectura de mercado', 'Cultura y producto'],
}

const headlineStories = newsroomStories.slice(0, 3)

const coverageLanes = [
  {
    eyebrow: 'Industria y mercado',
    title: 'Las decisiones de marca estan moviendo tanto la conversacion como las motos nuevas.',
    description:
      'Reposicionamientos, equipamiento y lectura de segmento pesan cada vez mas en la forma en que se interpreta una novedad.',
    cards: [
      {
        meta: 'Industria',
        title: 'Las gamas premium se expanden sin abandonar el uso real',
        description: 'Las marcas estan buscando motos mas completas, no solo mas potentes o mas llamativas.',
      },
      {
        meta: 'Mercado',
        title: 'Las categorias medias siguen acercandose a propuestas que antes parecian exclusivas',
        description: 'Mas equipamiento y mejor terminacion estan tensionando el salto entre segmentos.',
      },
      {
        meta: 'Tecnologia',
        title: 'Pantallas, ayudas y ergonomia ya forman parte central del atractivo',
        description: 'La conversacion tecnica hoy tambien pasa por confort, interfaz y uso cotidiano.',
      },
      {
        meta: 'Modelos',
        title: 'Los modelos que ganan foco terminan arrastrando interes hacia todo su segmento',
        description: 'Cuando una moto pega fuerte, la categoria completa vuelve al centro del radar.',
      },
    ],
  },
  {
    eyebrow: 'Uso y cultura',
    title: 'La moto vuelve a hablar de estilo de vida, pero sin separarse del uso diario.',
    description:
      'Ciudad, escapadas, aspiracion visual y comunidad digital conviven cada vez mas en la misma lectura del producto.',
    cards: [
      {
        meta: 'Ciudad',
        title: 'Las motos versatiles ganan peso porque responden mejor al uso mixto',
        description: 'Comodidad, postura y practicidad influyen tanto como el motor en la decision final.',
      },
      {
        meta: 'Cultura',
        title: 'La presencia visual y la identidad digital empujan deseo de compra',
        description: 'Una moto tambien se vuelve deseable por como circula en contenido, comunidad y estilo.',
      },
    ],
  },
]

export function NewsPage() {
  return (
    <div className="section-shell mt-6 space-y-16 pb-6 md:mt-8">
      <Reveal>
        <section className="overflow-hidden rounded-[40px] border border-black/8 bg-[var(--ride-dark)] shadow-[0_28px_90px_rgba(15,23,42,0.18)]">
          <div className="relative">
            <img
              src={featuredStory.image}
              alt="Cobertura editorial del mundo motero"
              className="absolute inset-0 h-full w-full object-cover blur-[9px] saturate-[0.92]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,10,15,0.96)_0%,rgba(8,10,15,0.84)_48%,rgba(8,10,15,0.7)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(157,34,53,0.22),transparent_24%),radial-gradient(circle_at_82%_28%,rgba(255,255,255,0.08),transparent_20%)]" />

            <div className="relative z-10 grid gap-6 p-6 md:p-8 xl:grid-cols-[1.15fr_0.85fr] xl:p-10">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md sm:p-7 xl:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.68rem] uppercase tracking-[0.3em] text-white/78">
                    Noticias Ridepedia
                  </span>
                  <span className="rounded-full border border-[var(--ride-brand-line)] bg-[var(--ride-brand-soft)] px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-[var(--ride-copy-on-dark)]">
                    Actualidad general
                  </span>
                </div>

                <p className="mt-6 text-[0.72rem] uppercase tracking-[0.34em] text-white/44">{featuredStory.section}</p>
                <h1 className="mt-4 max-w-[15ch] text-3xl font-semibold leading-[0.98] text-white sm:text-[2.9rem] xl:text-[4rem]">
                  {featuredStory.title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-7 text-white/72 sm:text-lg">{featuredStory.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredStory.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-[var(--ride-copy-on-dark-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to={featuredStory.href}
                    className="rounded-full bg-[var(--ride-brand)] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_24px_rgba(157,34,53,0.22)] transition hover:-translate-y-0.5 hover:bg-[var(--ride-brand-strong)]"
                  >
                    {featuredStory.cta}
                  </Link>
                  <Link
                    to="/catalog"
                    className="rounded-full border border-white/14 bg-white/8 px-6 py-3 text-sm font-medium text-[var(--ride-copy-on-dark)] transition hover:border-[var(--ride-brand-line)] hover:bg-[var(--ride-brand-soft)]"
                  >
                    Ir al catalogo
                  </Link>
                </div>
              </div>

              <aside className="grid gap-4">
                {headlineStories.map((story, index) => (
                  <article key={story.title} className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-md">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/44">0{index + 1} · {story.section}</p>
                        <h2 className={`mt-3 font-semibold text-white ${index === 0 ? 'text-xl leading-[1.06]' : 'text-lg leading-[1.1]'}`}>
                          {story.title}
                        </h2>
                      </div>
                      <span className="mt-1 h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: story.accent, boxShadow: `0 0 0 6px ${story.accent}22` }} />
                    </div>

                     <p className="mt-4 text-sm leading-6 text-white/70">{story.summary}</p>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                       <span className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-[0.66rem] uppercase tracking-[0.22em] text-[var(--ride-copy-on-dark-muted)]">
                         {story.meta}
                       </span>
                      <Link to={story.href} className="inline-flex text-sm font-medium text-white transition hover:text-white/78">
                        Abrir historia
                      </Link>
                    </div>
                  </article>
                ))}
              </aside>
            </div>
          </div>
        </section>
      </Reveal>

      {coverageLanes.map((lane) => (
        <Reveal key={lane.title}>
          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <p className="editorial-eyebrow text-black/45">{lane.eyebrow}</p>
               <h2 className="mt-3 text-3xl font-semibold text-black sm:text-[2.3rem] sm:leading-[1.04]">{lane.title}</h2>
               <p className="mt-4 max-w-xl text-base leading-7 text-black/64">{lane.description}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {lane.cards.map((card) => (
                <article key={card.title} className="rounded-[28px] border border-black/8 bg-white/82 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
                  <p className="text-xs uppercase tracking-[0.3em] text-black/42">{card.meta}</p>
                   <h3 className="mt-3 text-[1.35rem] font-semibold leading-[1.08] text-black">{card.title}</h3>
                   <p className="mt-4 text-sm leading-6 text-black/64">{card.description}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>
      ))}

      <Reveal>
        <section className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
          <div className="rounded-[32px] border border-black/8 bg-[linear-gradient(180deg,var(--ride-paper),#f3eee7)] p-6 shadow-[0_20px_70px_rgba(15,23,42,0.07)] md:p-8">
            <p className="editorial-eyebrow text-black/45">Radar editorial</p>
            <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold text-black sm:text-[2.4rem] sm:leading-[1.04]">
              Radar rapido
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-black/66">
              Claves cortas para seguir lo que hoy mueve la conversacion del sector.
            </p>

            <div className="mt-8 grid gap-3">
              {newsroomBriefs.map((brief) => (
                <article key={brief.id} className="rounded-[24px] border border-black/8 bg-white/84 p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--ride-brand)]">{brief.label}</p>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-black">{brief.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/64">{brief.summary}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {newsroomStories.slice(3).map((story, index) => (
              <article key={story.id} className="rounded-[28px] border border-black/8 bg-white/82 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-black/42">0{index + 4} · {story.section}</p>
                    <h3 className="mt-3 text-[1.3rem] font-semibold leading-[1.08] text-black">{story.title}</h3>
                  </div>
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: story.accent, boxShadow: `0 0 0 6px ${story.accent}22` }} />
                </div>

                <p className="mt-4 text-sm leading-6 text-black/64">{story.summary}</p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-[var(--ride-line)] bg-[var(--ride-paper)] px-3 py-2 text-[0.66rem] uppercase tracking-[0.22em] text-black/56">
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
    </div>
  )
}
