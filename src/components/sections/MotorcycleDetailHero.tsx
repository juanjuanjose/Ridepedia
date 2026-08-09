import { Link } from 'react-router-dom'

import type { Motorcycle } from '../../types/motorcycle'
import { MotorcycleImage } from '../common/MotorcycleImage'

interface MotorcycleDetailHeroProps {
  motorcycle: Motorcycle
}

export function MotorcycleDetailHero({ motorcycle }: MotorcycleDetailHeroProps) {
  return (
    <section className="section-shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-[#9D2235]/16 bg-[#9D2235]/8 px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-[#9D2235]">
            {motorcycle.category}
          </span>
          <span className="rounded-full border border-black/10 bg-white/78 px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-black/58">
            {motorcycle.year}
          </span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-black/45">{motorcycle.brand}</p>
          <h1 className="mt-3 text-4xl font-semibold text-black sm:text-5xl sm:leading-[1.02]">{motorcycle.model}</h1>
          <p className="mt-3 text-sm uppercase tracking-[0.28em] text-black/42">{motorcycle.tagline}</p>
          <p className="mt-4 text-lg leading-8 text-black/66">{motorcycle.summary}</p>
        </div>

        <div className="rounded-[28px] border border-black/8 bg-white/80 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <p className="text-xs uppercase tracking-[0.3em] text-black/42">Lectura editorial</p>
          <p className="mt-3 text-base leading-8 text-black/72">{motorcycle.story}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {motorcycle.heroStats.map((stat) => (
            <span key={stat} className="rounded-full border border-black/10 bg-[var(--ride-paper)] px-4 py-2 text-sm text-black/68">
              {stat}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to={`/technical-comparator?left=${motorcycle.slug}`}
            className="inline-flex rounded-full bg-[var(--ride-tech)] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_24px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5"
          >
            Llevar al comparador técnico
          </Link>
          <Link
            to="/catalog"
            className="inline-flex rounded-full border border-black/10 bg-white/82 px-5 py-3 text-sm font-medium text-black/78 transition hover:border-black/20"
          >
            Volver al catálogo
          </Link>
        </div>
      </div>

      <div className="overflow-hidden rounded-[36px] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,243,237,0.96))] p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
        <div className="relative overflow-hidden rounded-[28px]">
          <MotorcycleImage motorcycle={motorcycle} className="aspect-[4/3] h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(6,6,7,0.78))] p-5">
            <p className="text-xs uppercase tracking-[0.32em] text-white/52">Por qué importa</p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-white/76">{motorcycle.galleryLabel}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
