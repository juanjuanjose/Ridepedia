import type { Motorcycle } from '../../types/motorcycle'
import { Reveal } from '../common/Reveal'

interface SpecsSectionProps {
  motorcycle: Motorcycle
}

export function SpecsSection({ motorcycle }: SpecsSectionProps) {
  return (
    <Reveal className="section-shell mt-24">
      <section className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-slate-500">Technical profile</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Specs that support the visual story.</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {motorcycle.specs.map((spec) => (
            <div key={spec.label} className="glass-panel rounded-[24px] p-5">
              <p className="text-sm text-slate-500">{spec.label}</p>
              <p className="mt-3 text-lg font-medium text-white">{spec.value}</p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
