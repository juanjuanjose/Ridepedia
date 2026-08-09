import type { Motorcycle } from '../../types/motorcycle'
import { Reveal } from '../common/Reveal'

interface SpecsSectionProps {
  motorcycle: Motorcycle
}

export function SpecsSection({ motorcycle }: SpecsSectionProps) {
  return (
    <Reveal className="section-shell mt-24">
      <section className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-5">
          <div>
            <p className="editorial-eyebrow text-black/45">Perfil técnico</p>
            <h2 className="mt-3 text-3xl font-semibold text-black sm:leading-[1.04]">Las cifras clave para entender dónde encaja esta moto.</h2>
          </div>

          <div className="rounded-[28px] border border-black/8 bg-[linear-gradient(180deg,#fcfbf8,#f5efe8)] p-5 shadow-[0_18px_48px_rgba(15,23,42,0.05)]">
            <p className="text-xs uppercase tracking-[0.3em] text-black/42">Qué mirar primero</p>
            <p className="mt-3 text-sm leading-7 text-black/68">
              Potencia, peso, altura de asiento y electrónica suelen decir rápido si esta moto apunta a ciudad, ruta, viaje largo o una conducción más exigente.
            </p>
          </div>

          <div className="rounded-[28px] border border-black/8 bg-white/82 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
            <p className="text-xs uppercase tracking-[0.3em] text-black/42">Lectura de anatomía</p>
            <div className="mt-4 grid gap-3">
              {motorcycle.anatomyNotes.map((note) => (
                 <div key={note} className="rounded-[20px] border border-black/8 bg-[var(--ride-paper)] px-4 py-4 text-sm leading-7 text-black/68">
                   {note}
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {motorcycle.specs.map((spec) => (
              <div key={spec.label} className="rounded-[24px] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(251,249,245,0.94))] p-5 shadow-[0_16px_44px_rgba(15,23,42,0.06)]">
                <p className="text-sm text-black/48">{spec.label}</p>
                <p className="mt-3 text-lg font-medium text-black">{spec.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[30px] border border-black/8 bg-[linear-gradient(180deg,#111827,#020617)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
            <p className="text-xs uppercase tracking-[0.3em] text-white/42">Lectura rápida</p>
            <p className="mt-3 max-w-3xl text-base leading-8 text-white/70">
              Esta ficha junta imagen, contexto y datos para que puedas decidir rápido si vale la pena seguir con esta moto o compararla con otra de la misma categoría.
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
