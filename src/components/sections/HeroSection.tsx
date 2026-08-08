import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { resolveAssetPath } from '../../utils/asset-path'

type EditorialCard = {
  id: string
  section: string
  title: string
  summary: string
  href: string
  meta: string
  accent: string
}

const leadStory = {
  section: 'Tema central',
  title: 'Por qué las motos que mezclan uso real, carácter y tecnología vuelven a dominar la conversación del mundo motero.',
  summary:
    'Entre lanzamientos más maduros, pruebas menos superficiales y compradores que comparan mejor antes de decidir, el interés ya no gira solo alrededor de la potencia bruta: ahora importa más qué moto ofrece una experiencia completa y defendible.',
  href: '/news',
  cta: 'Entrar a noticias',
  highlights: ['Lanzamientos 2025', 'Pruebas con criterio', 'Mercado en movimiento'],
  image: resolveAssetPath('/Hero images/h2r.jpg'),
}

const editorialCards: EditorialCard[] = [
  {
    id: 'ducati-naked-premium',
    section: 'Lanzamiento',
    title: 'Las naked premium vuelven a tensar el segmento con más electrónica y menos concesiones.',
    summary: 'Ducati, Triumph y otras marcas están empujando un tipo de moto que mezcla espectáculo, calle y lectura técnica más fina.',
    href: '/motorcycles/ducati-streetfighter-v4',
    meta: 'Ducati · Streetfighter V4 S',
    accent: '#9D2235',
  },
  {
    id: 'adventure-middleweight',
    section: 'Prueba / tendencia',
    title: 'Las trail medias siguen ganando terreno porque resuelven mejor el uso diario sin perder aspiración.',
    summary: 'La conversación ya no pasa solo por viajar lejos: también pesa mucho cómo se siente la moto en ciudad, autopista y escapada.',
    href: '/motorcycles/yamaha-tenere-700',
    meta: 'Yamaha · Ténéré 700',
    accent: '#2563EB',
  },
  {
    id: 'compare-before-buying',
    section: 'Decisión de compra',
    title: 'Comparar antes de comprar deja de ser un lujo y empieza a sentirse como el paso lógico.',
    summary: 'Cuando sube la oferta y cambian las prioridades del usuario, tener una lectura técnica clara deja de ser accesorio.',
    href: '/technical-comparator',
    meta: 'Comparador técnico · MVP activo',
    accent: '#0F766E',
  },
]

export function HeroSection() {
  return (
    <section className="px-2 pt-4 sm:px-3 lg:px-4 lg:pt-5">
      <motion.section
        initial={{ opacity: 0, scale: 0.985, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto overflow-hidden rounded-[38px] border border-black/8 bg-[#0d1016] shadow-[0_28px_90px_rgba(15,23,42,0.18)]"
      >
        <div className="relative">
          <img
            src={leadStory.image}
            alt="Escena editorial del mundo motero"
            className="absolute inset-0 h-full w-full object-cover blur-[10px] saturate-[0.9]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,15,0.96)_0%,rgba(8,10,15,0.82)_44%,rgba(8,10,15,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(157,34,53,0.22),transparent_24%),radial-gradient(circle_at_85%_24%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_78%_78%,rgba(37,99,235,0.14),transparent_22%)]" />

          <div className="relative z-10 grid min-h-[42rem] gap-6 p-5 sm:p-6 lg:grid-cols-[1.22fr_0.78fr] lg:p-8 xl:min-h-[calc(100vh-11.5rem)] xl:p-10">
            <div className="flex flex-col justify-between gap-8 rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 backdrop-blur-md sm:p-7 xl:p-8">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.68rem] uppercase tracking-[0.3em] text-white/78">
                    Portada editorial
                  </span>
                  <span className="rounded-full border border-[#9D2235]/35 bg-[#9D2235]/18 px-4 py-2 text-[0.68rem] uppercase tracking-[0.26em] text-white/82">
                    Noticias del mundo motero
                  </span>
                </div>

                <p className="mt-6 text-[0.72rem] uppercase tracking-[0.34em] text-white/44">{leadStory.section}</p>
                <h1 className="mt-4 max-w-[13ch] text-4xl font-semibold leading-[0.92] text-white sm:text-5xl xl:text-[5rem]">
                  {leadStory.title}
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
                  {leadStory.summary}
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {leadStory.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-white/72">
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to={leadStory.href}
                    className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#090909] shadow-[0_12px_24px_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5"
                  >
                    {leadStory.cta}
                  </Link>
                  <Link
                    to="/catalog"
                    className="rounded-full border border-white/14 bg-white/8 px-6 py-3 text-sm font-medium text-white/82 transition hover:border-white/24 hover:bg-white/12"
                  >
                    Ver catálogo base
                  </Link>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { label: 'Tono', value: 'Editorial premium' },
                    { label: 'Foco', value: 'Lanzamientos y pruebas' },
                    { label: 'Uso', value: 'Informar y orientar' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[22px] border border-white/10 bg-white/6 p-4">
                      <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42">{item.label}</p>
                      <p className="mt-2 text-sm font-medium leading-6 text-white/84">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="grid gap-4">
              {editorialCards.map((card, index) => (
                <article
                  key={card.id}
                  className={`rounded-[28px] border border-white/10 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-md ${index === 0 ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]' : 'bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]'}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/44">0{index + 1} · {card.section}</p>
                      <h2 className={`mt-3 font-semibold text-white ${index === 0 ? 'text-2xl leading-[1.02]' : 'text-xl leading-[1.08]'}`}>
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
                    <span className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-[0.66rem] uppercase tracking-[0.22em] text-white/58">
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
