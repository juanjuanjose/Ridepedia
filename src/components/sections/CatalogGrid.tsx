import { Link } from 'react-router-dom'

import type { Motorcycle } from '../../types/motorcycle'
import { MotorcycleImage } from '../common/MotorcycleImage'

interface CatalogGridProps {
  motorcycles: Motorcycle[]
}

export function CatalogGrid({ motorcycles }: CatalogGridProps) {
  return (
    <section className="section-shell mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {motorcycles.map((motorcycle) => (
        <Link
          key={motorcycle.id}
          to={`/motorcycles/${motorcycle.slug}`}
          className="glass-panel group overflow-hidden rounded-[30px] p-4 transition hover:-translate-y-1"
        >
          <MotorcycleImage motorcycle={motorcycle} className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />

          <div className="space-y-5 px-2 pb-2 pt-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{motorcycle.category}</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{motorcycle.brand}</h2>
                <p className="text-slate-300">{motorcycle.model}</p>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{motorcycle.year}</span>
            </div>

            <p className="text-sm leading-7 text-slate-400">{motorcycle.tagline}</p>

            <div className="flex flex-wrap gap-2">
              {motorcycle.heroStats.map((stat) => (
                <span key={stat} className="rounded-full border border-white/8 px-3 py-1 text-xs text-slate-300">
                  {stat}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </section>
  )
}
