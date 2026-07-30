import type { Motorcycle } from '../../types/motorcycle'
import { MotorcycleImage } from '../common/MotorcycleImage'

interface MotorcycleDetailHeroProps {
  motorcycle: Motorcycle
}

export function MotorcycleDetailHero({ motorcycle }: MotorcycleDetailHeroProps) {
  return (
    <section className="section-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
      <div className="space-y-5">
        <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">{motorcycle.category}</p>
        <div>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">{motorcycle.brand}</h1>
          <p className="mt-3 text-xl text-slate-200">{motorcycle.model}</p>
        </div>
        <p className="max-w-2xl text-base leading-8 text-slate-400">{motorcycle.summary}</p>

        <div className="flex flex-wrap gap-3">
          {motorcycle.heroStats.map((stat) => (
            <span key={stat} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200">
              {stat}
            </span>
          ))}
        </div>
      </div>

      <div className="glass-panel rounded-[36px] p-4">
        <MotorcycleImage motorcycle={motorcycle} className="aspect-[4/3] h-full w-full object-cover" />
      </div>
    </section>
  )
}
