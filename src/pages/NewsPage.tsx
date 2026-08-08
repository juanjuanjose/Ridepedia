import { Link } from 'react-router-dom'

import { Reveal } from '../components/common/Reveal'
import { resolveAssetPath } from '../utils/asset-path'

const featuredStory = {
  section: 'Tema central',
  title: 'Las motos que mejor combinan carácter, uso real y tecnología son las que están marcando la agenda de 2025.',
  description:
    'Más allá de la potencia máxima o del titular fácil, la conversación está girando hacia modelos que resuelven mejor el uso cotidiano, viajan con más sentido y siguen transmitiendo identidad. Esa mezcla explica por qué ciertas naked premium y trail medias están ganando tanta relevancia.',
  href: '/technical-comparator',
  cta: 'Ver comparador técnico',
  image: resolveAssetPath('/Hero images/h2r.jpg'),
  tags: ['Análisis editorial', 'Lanzamientos 2025', 'Lectura de mercado'],
}

const headlineStories = [
  {
    section: 'Lanzamiento',
    title: 'Ducati endurece la pelea entre las naked premium con una propuesta cada vez más tecnológica.',
    summary: 'La Streetfighter V4 S resume bien el momento del segmento: espectáculo visual, electrónica avanzada y un perfil de uso más amplio de lo que parece.',
    meta: 'Ducati · Producto',
    href: '/motorcycles/ducati-streetfighter-v4',
    accent: '#9D2235',
  },
  {
    section: 'Prueba / tendencia',
    title: 'Las trail medias siguen creciendo porque responden mejor al uso mixto que muchos usuarios realmente tienen.',
    summary: 'No se trata solo de aventura aspiracional: también pesan comodidad, versatilidad y una postura más fácil de sostener a diario.',
    meta: 'Yamaha · Uso real',
    href: '/motorcycles/yamaha-tenere-700',
    accent: '#2563EB',
  },
  {
    section: 'Mercado',
    title: 'Comparar antes de comprar ya no se siente opcional cuando la oferta crece y las categorías se superponen.',
    summary: 'Con más motos bien equipadas en segmentos cercanos, la decisión necesita herramientas más claras que una ficha aislada o una impresión superficial.',
    meta: 'Decisión de compra',
    href: '/technical-comparator',
    accent: '#0F766E',
  },
]

const coverageLanes = [
  {
    eyebrow: 'Cobertura principal',
    title: 'Noticias que ayudan a leer mejor el producto, no solo a consumir titulares.',
    description:
      'La capa editorial de Ridepedia tiene más valor cuando conecta actualidad con fichas, comparaciones y decisiones reales de compra.',
    cards: [
      {
        meta: 'Lanzamientos',
        title: 'Modelos nuevos que vale la pena seguir',
        description: 'Versiones, renovaciones y motos clave explicadas con contexto sobre categoría, uso y relevancia real dentro del mercado.',
      },
      {
        meta: 'Pruebas',
        title: 'Lecturas que vayan más allá del entusiasmo rápido',
        description: 'Notas que expliquen sensaciones, ergonomía y carácter con una voz editorial más cuidada y menos superficial.',
      },
      {
        meta: 'Mercado',
        title: 'Segmentos que cambian y marcas que se reposicionan',
        description: 'Tendencias que ayudan a entender por qué ciertas motos están ganando atención y cómo eso afecta la decisión de compra.',
      },
      {
        meta: 'Conexión con Ridepedia',
        title: 'Historias que llevan de vuelta al catálogo y al comparador',
        description: 'La editorial funciona mejor cuando orienta hacia modelos, fichas y comparaciones concretas en vez de quedarse aislada.',
      },
    ],
  },
  {
    eyebrow: 'Criterio de portada',
    title: 'La home presenta la conversación; esta página le da espacio para desarrollarse con más calma.',
    description:
      'Ese reparto de roles protege la jerarquía del portal y hace que noticias, catálogo y comparación se sientan complementarios en lugar de mezclados.',
    cards: [
      {
        meta: 'Rol de la home',
        title: 'Señalar lo importante con impacto visual',
        description: 'La portada debe atraer y ordenar, no intentar contener toda la cobertura dentro del primer scroll.',
      },
      {
        meta: 'Rol de noticias',
        title: 'Profundizar sin perder claridad',
        description: 'La página editorial puede desarrollar tendencias, modelos y contexto con una lectura más amplia y mejor jerarquizada.',
      },
    ],
  },
]

export function NewsPage() {
  return (
    <div className="section-shell mt-6 space-y-16 pb-6 md:mt-8">
      <Reveal>
        <section className="overflow-hidden rounded-[40px] border border-black/8 bg-[#0d1016] shadow-[0_28px_90px_rgba(15,23,42,0.18)]">
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
                  <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/62">
                    Cobertura editorial
                  </span>
                </div>

                <p className="mt-6 text-[0.72rem] uppercase tracking-[0.34em] text-white/44">{featuredStory.section}</p>
                <h1 className="mt-4 max-w-[13ch] text-4xl font-semibold leading-[0.92] text-white sm:text-5xl xl:text-[4.7rem]">
                  {featuredStory.title}
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">{featuredStory.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredStory.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-white/72">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to={featuredStory.href}
                    className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#090909] shadow-[0_12px_24px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5"
                  >
                    {featuredStory.cta}
                  </Link>
                  <Link
                    to="/catalog"
                    className="rounded-full border border-white/14 bg-white/8 px-6 py-3 text-sm font-medium text-white/82 transition hover:border-white/24 hover:bg-white/12"
                  >
                    Ir al catálogo
                  </Link>
                </div>
              </div>

              <aside className="grid gap-4">
                {headlineStories.map((story, index) => (
                  <article key={story.title} className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-md">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/44">0{index + 1} · {story.section}</p>
                        <h2 className={`mt-3 font-semibold text-white ${index === 0 ? 'text-2xl leading-[1.02]' : 'text-xl leading-[1.08]'}`}>
                          {story.title}
                        </h2>
                      </div>
                      <span className="mt-1 h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: story.accent, boxShadow: `0 0 0 6px ${story.accent}22` }} />
                    </div>

                    <p className="mt-4 text-sm leading-7 text-white/70">{story.summary}</p>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                      <span className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-[0.66rem] uppercase tracking-[0.22em] text-white/58">
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
              <h2 className="mt-3 text-3xl font-semibold text-black sm:text-4xl">{lane.title}</h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-black/64">{lane.description}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {lane.cards.map((card) => (
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
