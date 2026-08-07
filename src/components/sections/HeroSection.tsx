import { useState } from 'react'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { resolveAssetPath } from '../../utils/asset-path'

type HeroStory = {
  id: string
  category: string
  title: string
  description: string
  href: string
  cta: string
  image: string
  imagePosition?: string
  meta: string[]
}

const heroStories: HeroStory[] = [
  {
    id: 'kawasaki-h2r',
    category: 'Lanzamiento destacado',
    title: 'Kawasaki H2R: una bestia de portada que vuelve a marcar el tono de la semana.',
    description:
      'Más extrema, más teatral y todavía capaz de dominar la conversación cuando el foco vuelve a las motos que empujan diseño, velocidad y carácter al límite.',
    href: '/news',
    cta: 'Leer lanzamiento',
    image: resolveAssetPath('/Hero images/h2r.jpg'),
    imagePosition: 'center center',
    meta: ['326 hp', 'Sobrealimentada', 'Pieza de portada'],
  },
  {
    id: 'yamaha-tenere-rally',
    category: 'Trail 2025',
    title: 'Yamaha prepara una Ténéré 700 Rally con más ambición viajera y mejor presencia off-road.',
    description:
      'La trail japonesa vuelve al centro del radar con una lectura más aventurera, mejor equipamiento y una imagen pensada para seguir liderando el segmento medio.',
    href: '/news',
    cta: 'Ver cobertura',
    image: resolveAssetPath('/Hero images/h2r.jpg'),
    imagePosition: 'center top',
    meta: ['Trail media', 'Rally touring', '2025'],
  },
  {
    id: 'ducati-streetfighter-v4',
    category: 'Naked premium',
    title: 'Ducati refuerza la Streetfighter V4 S con una lectura todavía más agresiva y tecnológica.',
    description:
      'La italiana mantiene el lugar de referencia entre las hypernaked cuando se juntan electrónica de superbike, presencia visual y aspiración real.',
    href: '/motorcycles/ducati-streetfighter-v4',
    cta: 'Ver ficha completa',
    image: resolveAssetPath('/Hero images/h2r.jpg'),
    imagePosition: 'right center',
    meta: ['208 hp', 'Öhlins', 'Hypernaked'],
  },
]

const secondaryStories = [
  {
    category: 'BMW',
    title: 'La R 1300 GS vuelve a dominar la charla sobre viajes largos y tecnología útil.',
    href: '/motorcycles/bmw-r-1300-gs',
  },
  {
    category: 'Mercado',
    title: 'Las naked premium recuperan terreno entre quienes bajan de una superbike extrema.',
    href: '/technical-comparator',
  },
  {
    category: 'Triumph',
    title: 'Street Triple RS: la mediana que sigue siendo referencia cuando se busca calle con filo real.',
    href: '/catalog',
  },
  {
    category: 'Comparativa',
    title: 'Trail o naked: qué cambia de verdad cuando llega la hora de comprar con criterio.',
    href: '/technical-comparator',
  },
]

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStory = heroStories[activeIndex]

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? heroStories.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActiveIndex((current) => (current === heroStories.length - 1 ? 0 : current + 1))
  }

  return (
    <section className="px-2 pt-4 sm:px-3 lg:px-4 lg:pt-5">
      <motion.section
        initial={{ opacity: 0, scale: 0.985, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto overflow-hidden rounded-[36px] border border-black/8 bg-[var(--ride-paper)] shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
      >
        <div className="grid lg:grid-cols-[1.32fr_0.68fr]">
          <div className="grid min-h-[37rem] lg:min-h-[calc(100vh-11.5rem)] lg:grid-cols-[1.08fr_0.92fr]">
            <div className="flex flex-col justify-between bg-[linear-gradient(180deg,#f7f3ee,#f1ebe3)] px-5 py-6 sm:px-7 lg:px-8 lg:py-8">
              <div className="max-w-2xl">
                <p className="text-[0.72rem] uppercase tracking-[0.34em] text-black/42">Noticias que importan</p>
                <h1 className="mt-4 max-w-[11ch] text-4xl font-semibold leading-[0.92] text-[#090909] sm:text-5xl xl:text-[4.65rem]">
                  Una portada moderna para seguir lo que mueve al mundo de las motos.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-black/64 sm:text-lg">
                  Lanzamientos, modelos clave y cobertura con criterio editorial para arrancar la visita con algo que realmente valga la pena mirar.
                </p>
              </div>

              <div className="mt-8 space-y-5">
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/news"
                    className="rounded-full bg-[#9D2235] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_24px_rgba(157,34,53,0.22)] transition hover:-translate-y-0.5"
                  >
                    Ver noticias
                  </Link>
                  <Link
                    to="/catalog"
                    className="rounded-full border border-black/10 bg-white/82 px-6 py-3 text-sm font-medium text-black/78 transition hover:border-black/20"
                  >
                    Explorar catálogo
                  </Link>
                  <a
                    href="#learnbike"
                    className="rounded-full border border-[#9D2235]/16 bg-white px-6 py-3 text-sm font-medium text-[#9D2235] transition hover:border-[#9D2235]/32"
                  >
                    Ver experiencia 3D
                  </a>
                </div>

                <div className="rounded-[28px] border border-black/8 bg-white/84 p-5 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-black/42">Ahora en portada</p>
                      <p className="mt-2 text-lg font-medium text-black">{activeStory.title}</p>
                    </div>
                    <div className="hidden gap-2 sm:flex">
                      <button
                        type="button"
                        onClick={goToPrevious}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 transition hover:border-black/20 hover:text-black"
                        aria-label="Ver noticia anterior"
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={goToNext}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 transition hover:border-black/20 hover:text-black"
                        aria-label="Ver noticia siguiente"
                      >
                        →
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeStory.meta.map((meta) => (
                      <span key={meta} className="rounded-full border border-black/10 bg-[#f8f4ef] px-3 py-2 text-xs text-black/64">
                        {meta}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[24rem] overflow-hidden bg-[#111112]">
              <img
                src={activeStory.image}
                alt={activeStory.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700"
                style={{ objectPosition: activeStory.imagePosition ?? 'center center' }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,7,0.12)_0%,rgba(6,6,7,0.26)_38%,rgba(6,6,7,0.82)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_78%_72%,rgba(157,34,53,0.2),transparent_26%)]" />

              <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6 lg:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/12 bg-black/18 px-4 py-2 text-[0.68rem] uppercase tracking-[0.3em] text-white/78 backdrop-blur-md">
                    {activeStory.category}
                  </span>

                  <div className="flex gap-2 sm:hidden">
                    <button
                      type="button"
                      onClick={goToPrevious}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/24 text-white/78 backdrop-blur-md"
                      aria-label="Ver noticia anterior"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={goToNext}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/24 text-white/78 backdrop-blur-md"
                      aria-label="Ver noticia siguiente"
                    >
                      →
                    </button>
                  </div>
                </div>

                <article className="max-w-lg rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,10,0.14),rgba(10,10,10,0.5))] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-6">
                  <p className="text-xs uppercase tracking-[0.32em] text-white/56">Portada principal</p>
                  <h2 className="mt-3 max-w-[10ch] text-3xl font-semibold leading-[0.94] text-white sm:text-[2.65rem]">
                    {activeStory.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/72 sm:text-[0.98rem]">{activeStory.description}</p>
                  <Link
                    to={activeStory.href}
                    className="mt-5 inline-flex rounded-full border border-white/14 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/16"
                  >
                    {activeStory.cta}
                  </Link>
                </article>
              </div>
            </div>
          </div>

          <aside className="flex flex-col border-t border-black/8 bg-[linear-gradient(180deg,#0f1012,#0a0a0b)] lg:border-l lg:border-t-0">
            <div className="border-b border-white/8 px-6 py-5 sm:px-7 lg:px-8">
              <p className="text-[0.72rem] uppercase tracking-[0.32em] text-white/46">Radar editorial</p>
              <p className="mt-2 max-w-sm text-lg font-medium leading-7 text-white">
                Noticias, lanzamientos y temas que empujan la conversación del mundo moto.
              </p>
            </div>

            <div className="flex-1 px-6 py-6 sm:px-7 lg:px-8">
              <div className="space-y-4">
                {secondaryStories.map((story, index) => (
                  <article key={story.title} className="group border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/44">
                        0{index + 1} · {story.category}
                      </p>
                      <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.64rem] uppercase tracking-[0.2em] text-white/58">
                        Ahora
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-medium leading-6 text-white transition group-hover:text-white/86">
                      {story.title}
                    </h3>
                    <Link to={story.href} className="mt-3 inline-flex text-sm font-medium text-white/76 transition hover:text-white">
                      Ir a la nota
                    </Link>
                  </article>
                ))}
              </div>

              <div className="mt-6 grid gap-3">
                <div className="rounded-[24px] border border-white/8 bg-white/[0.04] px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.32em] text-white/50">Comparadores</p>
                  <p className="mt-2 text-sm leading-6 text-white/68">
                    Visual y técnico, para transformar una noticia interesante en una decisión mejor informada.
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-white/[0.04] px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.32em] text-white/50">Cobertura continua</p>
                  <p className="mt-2 text-sm leading-6 text-white/68">
                    Lanzamientos, mercado, comparativas y cultura moto en una portada que quiere verse actual, no vieja.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </motion.section>
    </section>
  )
}
