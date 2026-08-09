import { Link } from 'react-router-dom'

import { Reveal } from '../common/Reveal'

type Destination = {
  name: string
  status: string
  phase: string
  description: string
  highlights: string[]
  href?: string
  accent: string
  featured?: boolean
}

const destinations: Destination[] = [
  {
    name: 'Wiki / catálogo',
    status: 'En vivo',
    phase: 'Explorar',
    description: 'El punto de entrada para descubrir modelos, marcas y fichas con suficiente contexto para seguir comparando.',
    highlights: ['Fichas estructuradas', 'Exploración por categoría', 'Descubrimiento por marca'],
    href: '/catalog',
    accent: '#9D2235',
    featured: true,
  },
  {
    name: 'Comparador visual',
    status: 'Preview',
    phase: 'Comparar',
    description: 'Una lectura persona vs moto para entender tamaño, postura y ergonomía con mucho más realismo.',
    highlights: ['Referencia humana', 'Lectura 3D lado a lado', 'Mejor noción de encaje'],
    href: '/visual-comparator',
    accent: '#0F766E',
  },
  {
    name: 'Comparador técnico',
    status: 'Siguiente MVP',
    phase: 'Elegir',
    description: 'Comparaciones moto vs moto con foco en specs clave, diferencias reales y decisión de compra.',
    highlights: ['Deltas de specs', 'Contexto de compra', 'Filtro por categoría'],
    href: '/technical-comparator',
    accent: '#2563EB',
  },
  {
    name: 'Marketplace',
    status: 'Roadmap',
    phase: 'Comprar',
    description: 'Avisos mejor conectados con el contexto de cada modelo para comprar y vender con más confianza.',
    highlights: ['Avisos ligados al modelo', 'Más contexto para comprar', 'Mejor confianza de producto'],
    href: '/marketplace',
    accent: '#C2410C',
  },
  {
    name: 'Comunidad / social',
    status: 'Roadmap',
    phase: 'Compartir',
    description: 'Perfiles, actividad y conversación para seguir motos, marcas y gente con la misma obsesión.',
    highlights: ['Perfiles y follows', 'Conversación útil', 'Actividad alrededor de modelos'],
    href: '/community',
    accent: '#7C3AED',
  },
  {
    name: 'Noticias / editorial',
    status: 'En desarrollo activo',
    phase: 'Leer',
    description: 'Actualidad general del mundo motero con mirada de medio digital: industria, cultura, producto y contexto para navegar mejor el portal.',
    highlights: ['Actualidad del sector', 'Contexto de industria', 'Cultura motera'],
    href: '/news',
    accent: '#9D2235',
  },
]

export function PortalDestinationsSection() {
  const primaryDestination = destinations.find((destination) => destination.featured) ?? destinations[0]
  const secondaryDestinations = destinations.filter((destination) => destination.name !== primaryDestination.name)

  return (
    <Reveal className="section-shell mt-20">
      <section className="rounded-[36px] border border-black/8 bg-[var(--ride-paper)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-8">
        <div className="mb-6 grid gap-4 rounded-[30px] border border-black/8 bg-[linear-gradient(180deg,#fcfbf8,#f6f1ea)] p-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="editorial-eyebrow text-black/45">Mapa del portal</p>
            <h2 className="mt-3 text-3xl font-semibold text-black sm:text-[2.4rem] sm:leading-[1.05]">
              Entradas principales para explorar catálogo, noticias y comparación.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[24rem]">
              {[
                { label: 'Motos', value: '20' },
                { label: 'Noticias', value: 'Activas' },
                { label: 'Comparar', value: 'Disponible' },
              ].map((item) => (
              <div key={item.label} className="rounded-[22px] border border-black/8 bg-white/82 px-4 py-4 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-black/42">{item.label}</p>
                <p className="mt-2 text-lg font-medium text-black">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
          <article className="overflow-hidden rounded-[30px] border border-black/8 bg-[linear-gradient(180deg,#111827,#020617)] p-6 shadow-[0_28px_90px_rgba(15,23,42,0.18)] md:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-2xl">
               <p className="text-xs uppercase tracking-[0.34em] text-white/42">Destino principal</p>
                <h3 className="mt-3 text-3xl font-semibold text-white sm:text-[2.6rem] sm:leading-[1.02]">{primaryDestination.name}</h3>
                <p className="mt-4 text-base leading-8 text-white/68">{primaryDestination.description}</p>
              </div>

              <div className="rounded-full border px-4 py-2 text-[0.72rem] uppercase tracking-[0.26em] text-white/82" style={{ borderColor: `${primaryDestination.accent}66`, backgroundColor: `${primaryDestination.accent}22` }}>
                {primaryDestination.status}
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {primaryDestination.highlights.map((highlight) => (
                <div key={highlight} className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-4 text-sm text-white/76">
                  {highlight}
                </div>
              ))}
            </div>

              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/6 px-5 py-5">
              <p className="text-xs uppercase tracking-[0.32em] text-white/42">Qué vas a encontrar</p>
               <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">
                 Marcas, categorías y fichas listas para pasar del vistazo rápido a la comparación técnica.
               </p>
             </div>

             <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-white/6 px-5 py-4">
               <div>
                <p className="text-xs uppercase tracking-[0.32em] text-white/42">Entrada recomendada</p>
                 <p className="mt-2 text-sm leading-7 text-white/68">
                   Si es tu primera visita, el catálogo es la forma más rápida de entender el tono y la variedad de Ridepedia.
                 </p>
               </div>

              {primaryDestination.href ? (
                <Link
                  to={primaryDestination.href}
                  className="inline-flex rounded-full bg-[var(--ride-brand)] px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[var(--ride-brand-strong)]"
                >
                  Abrir catálogo
                </Link>
              ) : null}
            </div>
          </article>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
            <div className="rounded-[28px] border border-black/8 bg-[#f8f4ef] p-5 xl:col-span-2">
              <p className="text-xs uppercase tracking-[0.32em] text-black/42">Ahora mismo</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  '20 motos para explorar desde el home y el catálogo.',
                  'Noticias conectadas a modelos y categorías reales.',
                  'Comparador técnico listo para profundizar una elección.',
                ].map((item) => (
                  <div key={item} className="rounded-[22px] border border-black/8 bg-white/78 px-4 py-4 text-sm leading-6 text-black/66">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {secondaryDestinations.map((destination) => (
              <article key={destination.name} className="rounded-[28px] border border-black/8 bg-white/82 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5">
                <div className="mb-4 h-1.5 w-16 rounded-full" style={{ backgroundColor: destination.accent }} />
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-black/42">{destination.phase}</p>
                    <h3 className="mt-3 text-[1.65rem] font-semibold leading-[1.08] text-black">{destination.name}</h3>
                  </div>
                  <span
                    className="rounded-full border px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em]"
                    style={{ borderColor: `${destination.accent}24`, color: destination.accent, backgroundColor: `${destination.accent}10` }}
                  >
                    {destination.status}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-black/64">{destination.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {destination.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-full border border-black/10 bg-[#f8f4ef] px-3 py-2 text-xs text-black/62">
                      {highlight}
                    </span>
                  ))}
                </div>

                {destination.href ? (
                  <Link
                    to={destination.href}
                    className="mt-5 inline-flex rounded-full px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5"
                     style={{ color: destination.accent, backgroundColor: `${destination.accent}12` }}
                   >
                    {destination.status === 'En vivo' || destination.status === 'Siguiente MVP' || destination.status === 'En desarrollo activo' ? 'Abrir destino' : 'Ver preview'}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  )
}
