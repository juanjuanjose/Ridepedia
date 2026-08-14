import { Link } from 'react-router-dom'

import type { Motorcycle } from '../../types/motorcycle'
import { MotorcycleImage } from '../common/MotorcycleImage'

interface MotorcycleDetailHeroProps {
  motorcycle: Motorcycle
}

export function MotorcycleDetailHero({ motorcycle }: MotorcycleDetailHeroProps) {
  return (
    <section className="section-shell grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
      <div className="flex h-full flex-col gap-6 rounded-[34px] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(251,249,245,0.96))] p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] md:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[#9D2235]/16 bg-[#9D2235]/8 px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-[#9D2235]">
            {motorcycle.category}
          </span>
          <span className="rounded-full border border-black/10 bg-white/78 px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-black/58">
            {motorcycle.year}
          </span>
          <span className="rounded-full border border-[var(--ride-tech-line)] bg-[var(--ride-tech-soft)] px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-[var(--ride-tech)]">
            Ficha editorial
          </span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-black/45">{motorcycle.brand}</p>
          <h1 className="mt-3 text-4xl font-semibold text-black sm:text-5xl sm:leading-[1.02]">{motorcycle.model}</h1>
          <p className="mt-4 max-w-2xl text-base uppercase tracking-[0.24em] text-black/42 sm:text-sm">{motorcycle.tagline}</p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-black/66">{motorcycle.summary}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {motorcycle.heroStats.map((stat) => (
            <div key={stat} className="rounded-[22px] border border-black/8 bg-white/82 px-4 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-black/40">Dato clave</p>
              <p className="mt-3 text-sm font-medium text-black/78">{stat}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[28px] border border-black/8 bg-[var(--ride-paper)] p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-black/42">Lectura editorial</p>
          <p className="mt-3 text-base leading-8 text-black/72">{motorcycle.story}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
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
        <div className="relative h-full overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_top_left,rgba(157,34,53,0.12),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0))]">
          <MotorcycleImage motorcycle={motorcycle} className="aspect-[4/3] h-full min-h-[420px] w-full object-cover lg:aspect-auto" />
          <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(6,6,7,0.86))] p-6">
            <div className="max-w-2xl rounded-[22px] border border-white/12 bg-black/18 px-4 py-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.32em] text-white/52">Por qué importa</p>
              <p className="mt-2 text-sm leading-7 text-white/78">{motorcycle.galleryLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
