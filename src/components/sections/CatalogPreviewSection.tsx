import { Link } from 'react-router-dom'

import { motorcycles } from '../../data/motorcycles'
import { Reveal } from '../common/Reveal'

export function CatalogPreviewSection() {
  return (
    <Reveal className="section-shell mt-24">
      <section className="rounded-[36px] border border-black/8 bg-[var(--ride-paper)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="editorial-eyebrow text-black/45">Wiki / catalog</p>
            <h2 className="mt-3 text-3xl font-semibold text-black sm:text-4xl">La base del producto es un catálogo que organiza lo que el usuario ya puede explorar.</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-black/64">
              Ridepedia no necesita fingir un ecosistema completo para ser útil hoy. El catálogo ya sirve como índice visual para entrar por marca,
              modelo o categoría mientras el resto de los pilares madura.
            </p>
          </div>
          <Link to="/catalog" className="inline-flex items-center rounded-full bg-[#9D2235] px-5 py-3 text-sm text-white shadow-[0_12px_24px_rgba(157,34,53,0.22)] transition hover:-translate-y-0.5">
            Ir al catálogo completo
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {motorcycles.map((motorcycle, index) => (
            <article key={motorcycle.id} className="rounded-[26px] border border-black/8 bg-white/78 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-black/42">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-6 text-2xl font-semibold text-black">{motorcycle.brand}</h3>
              <p className="mt-2 text-base text-black/68">{motorcycle.model}</p>
              <p className="mt-5 text-sm leading-7 text-black/58">{motorcycle.category}</p>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
