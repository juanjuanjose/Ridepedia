import { Link } from 'react-router-dom'

import type { Motorcycle } from '../../types/motorcycle'
import { MotorcycleImage } from '../common/MotorcycleImage'
import { Reveal } from '../common/Reveal'

interface RelatedMotorcyclesSectionProps {
  currentMotorcycle: Motorcycle
  motorcycles: Motorcycle[]
}

export function RelatedMotorcyclesSection({ currentMotorcycle, motorcycles }: RelatedMotorcyclesSectionProps) {
  if (motorcycles.length === 0) {
    return null
  }

  return (
    <Reveal className="section-shell mt-20">
      <section className="grid gap-6 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
        <div className="rounded-[32px] border border-black/8 bg-[linear-gradient(180deg,#fcfbf8,#f3eee7)] p-6 shadow-[0_20px_70px_rgba(15,23,42,0.07)] md:p-8">
          <p className="editorial-eyebrow text-black/45">Misma categoría</p>
          <h2 className="mt-3 text-3xl font-semibold text-black sm:text-[2.5rem] sm:leading-[1.04]">
            Si te interesa la {currentMotorcycle.category.toLowerCase()}, estas otras fichas también merecen un vistazo.
          </h2>
          <p className="mt-4 text-base leading-7 text-black/66">
            Cambia de enfoque sin salir de la categoría: más potencia, otra postura, mejor relación valor o una lectura distinta del mismo tipo de moto.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={`/technical-comparator?left=${currentMotorcycle.slug}`}
              className="inline-flex rounded-full bg-[var(--ride-tech)] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_24px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5"
            >
              Comparar esta moto
            </Link>
            <Link
              to="/catalog"
              className="inline-flex rounded-full border border-black/10 bg-white/84 px-5 py-3 text-sm font-medium text-black/78 transition hover:border-[var(--ride-brand-line)] hover:text-[var(--ride-brand)]"
            >
              Ver las 20 motos
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {motorcycles.map((motorcycle) => (
            <article key={motorcycle.id} className="overflow-hidden rounded-[28px] border border-black/8 bg-white/84 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1">
              <Link to={`/motorcycles/${motorcycle.slug}`} className="block">
                <div className="relative overflow-hidden rounded-[22px]">
                  <MotorcycleImage motorcycle={motorcycle} className="aspect-[4/3] h-full w-full object-cover transition duration-700 hover:scale-[1.03]" />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
                    <span className="rounded-full border border-white/20 bg-black/28 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-white/78 backdrop-blur-md">
                      {motorcycle.year}
                    </span>
                  </div>
                </div>
              </Link>

              <div className="space-y-4 px-1 pb-1 pt-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-black/45">{motorcycle.brand}</p>
                  <Link to={`/motorcycles/${motorcycle.slug}`}>
                    <h3 className="mt-2 text-xl font-semibold leading-[1.08] text-black">{motorcycle.model}</h3>
                  </Link>
                  <p className="mt-2 text-sm text-black/64">{motorcycle.tagline}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {motorcycle.heroStats.slice(0, 2).map((stat) => (
                    <span key={stat} className="rounded-full border border-black/10 bg-[var(--ride-paper)] px-3 py-1 text-xs text-black/62">
                      {stat}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <Link to={`/motorcycles/${motorcycle.slug}`} className="inline-flex items-center text-sm font-medium text-[var(--ride-brand)] transition hover:text-[var(--ride-brand-strong)]">
                    Abrir ficha
                  </Link>
                  <Link
                    to={`/technical-comparator?left=${currentMotorcycle.slug}&right=${motorcycle.slug}`}
                    className="inline-flex items-center rounded-full border border-[var(--ride-tech-line)] bg-[var(--ride-tech-soft)] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[var(--ride-tech)] transition hover:border-[var(--ride-tech)]/40"
                  >
                    Comparar
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
