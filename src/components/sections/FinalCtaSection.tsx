import { Link } from 'react-router-dom'

import { Reveal } from '../common/Reveal'

export function FinalCtaSection() {
  return (
    <Reveal className="section-shell mt-20">
      <section className="rounded-[36px] border border-black/8 bg-[radial-gradient(circle_at_top,rgba(157,34,53,0.16),transparent_28%),linear-gradient(180deg,#111827,#020617)] px-6 py-8 shadow-[0_28px_90px_rgba(15,23,42,0.18)] md:px-8 md:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="editorial-eyebrow text-white/45">Siguiente lectura</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-[2.9rem] sm:leading-[1.03]">
              Empieza por el catálogo y seguí hacia comparación o noticias según la moto que te interese.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/64">
              Hay naked, adventure, sport y modern classic para pasar del descubrimiento rápido a una ficha completa o a una comparación más técnica.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['20 motos reales', 'Comparador técnico', 'Noticias conectadas'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-white/68">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/6 p-5 backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.3em] text-white/42">Entrada recomendada</p>
            <p className="mt-3 text-sm leading-7 text-white/68">
              Si quieres empezar a mirar motos concretas, el catálogo ya reúne las fichas más completas del sitio y deja la puerta abierta al comparador.
            </p>
            <Link
              to="/catalog"
              className="mt-5 inline-flex w-fit items-center rounded-full bg-[var(--ride-brand)] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_24px_rgba(157,34,53,0.22)] transition hover:-translate-y-0.5 hover:bg-[var(--ride-brand-strong)]"
            >
              Ir al catálogo
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
