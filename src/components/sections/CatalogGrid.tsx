import { Link } from 'react-router-dom'

import type { Motorcycle } from '../../types/motorcycle'
import { MotorcycleImage } from '../common/MotorcycleImage'

interface CatalogGridProps {
  motorcycles: Motorcycle[]
}

export function CatalogGrid({ motorcycles }: CatalogGridProps) {
  return (
    <section className="section-shell mt-10">
      <div className="mb-6 flex flex-col gap-4 rounded-[30px] border border-black/8 bg-white/74 px-5 py-5 shadow-[0_18px_48px_rgba(15,23,42,0.05)] lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-black/42">Catálogo actual</p>
          <p className="mt-2 text-sm leading-7 text-black/64">
            Veinte motos reales entre naked, adventure, sport y modern classic para empezar a comparar categorías, marcas y propuestas de uso.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {['20 motos', '4 categorías', 'Comparador activo'].map((item) => (
            <span key={item} className="rounded-full border border-black/10 bg-[var(--ride-paper)] px-3 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-black/58">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {motorcycles.map((motorcycle) => (
        <article
          key={motorcycle.id}
          className="group overflow-hidden rounded-[30px] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(251,249,245,0.94))] p-4 shadow-[0_22px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
        >
          <div className="relative overflow-hidden rounded-[24px]">
            <Link to={`/motorcycles/${motorcycle.slug}`}>
              <MotorcycleImage motorcycle={motorcycle} className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
            </Link>
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
              <span className="rounded-full border border-white/20 bg-black/28 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-white/80 backdrop-blur-md">
                {motorcycle.category}
              </span>
              <span className="rounded-full border border-white/20 bg-black/22 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-white/80 backdrop-blur-md">
                {motorcycle.year}
              </span>
            </div>
          </div>

          <div className="space-y-5 px-2 pb-2 pt-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-black/45">{motorcycle.brand}</p>
                <Link to={`/motorcycles/${motorcycle.slug}`}>
                  <h2 className="mt-2 text-2xl font-semibold text-black">{motorcycle.model}</h2>
                </Link>
                <p className="mt-1 text-sm text-black/64">{motorcycle.tagline}</p>
              </div>
              <span className="rounded-full border border-black/10 bg-[var(--ride-paper)] px-3 py-1 text-xs text-black/62">Ficha real</span>
            </div>

            <p className="text-sm leading-7 text-black/64">{motorcycle.summary}</p>

            <div className="flex flex-wrap gap-2">
              {motorcycle.heroStats.map((stat) => (
                <span key={stat} className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/62">
                  {stat}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link to={`/motorcycles/${motorcycle.slug}`} className="inline-flex items-center text-sm font-medium text-[var(--ride-brand)] transition group-hover:translate-x-1 hover:text-[var(--ride-brand-strong)]">
                Abrir ficha
              </Link>
              <Link
                to={`/technical-comparator?left=${motorcycle.slug}`}
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
  )
}
