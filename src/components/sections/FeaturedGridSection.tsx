import { Link } from 'react-router-dom'

import { featuredMotorcycles } from '../../data/motorcycles'
import { Reveal } from '../common/Reveal'
import { MotorcycleImage } from '../common/MotorcycleImage'

const popularDescriptions: Record<string, string> = {
  'ducati-streetfighter-v4': 'Una naked radical, compacta y agresiva que convierte cada línea en tensión visual.',
  'bmw-r-1300-gs': 'La referencia moderna para viajar lejos sin perder presencia ni capacidad técnica.',
  'triumph-street-triple-rs': 'Ligera, precisa y afilada. Una deportiva de calle pensada para disfrutar cada apoyo.',
}

export function FeaturedGridSection() {
  return (
    <Reveal className="section-shell mt-20">
      <section className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[32px] border border-black/8 bg-[linear-gradient(180deg,#f8f4ef,#f2ede7)] p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-8">
          <p className="editorial-eyebrow text-black/45">Valor actual</p>
          <h2 className="mt-3 text-3xl font-semibold text-black sm:text-[2.6rem] sm:leading-[1.04]">
            Motos reales para ver ahora, no promesas para algún día.
          </h2>

          <div className="mt-8 grid gap-3">
            {[
              'Modelos con presencia visual fuerte',
              'Acceso directo a fichas reales',
              'Selección pensada para seguir explorando',
            ].map((item) => (
              <div key={item} className="rounded-[22px] border border-black/8 bg-white/82 px-4 py-4 text-sm leading-7 text-black/68">
                {item}
              </div>
              ))}
          </div>

          <div className="mt-8 rounded-[24px] border border-black/8 bg-white/82 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-black/42">Selección destacada</p>
            <p className="mt-3 text-sm leading-7 text-black/66">
              Una mezcla de motos aspiracionales, fichas navegables y buen material visual para que la portada tenga peso real.
            </p>
          </div>

          <Link
            to="/catalog"
            className="mt-8 inline-flex rounded-full bg-[#9D2235] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_24px_rgba(157,34,53,0.22)] transition hover:-translate-y-0.5"
          >
            Explorar catálogo
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredMotorcycles.map((motorcycle, index) => (
          <Link
            key={motorcycle.id}
            to={`/motorcycles/${motorcycle.slug}`}
            className="glass-panel group overflow-hidden rounded-[28px] p-4 transition hover:-translate-y-1"
          >
            <div className="relative overflow-hidden rounded-[22px]">
              <MotorcycleImage motorcycle={motorcycle} className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
                <span className="rounded-full border border-white/20 bg-black/34 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-white/78 backdrop-blur-md">
                  Seleccion {index + 1}
                </span>
                <span className="rounded-full border border-white/20 bg-black/24 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-white/78 backdrop-blur-md">
                  {motorcycle.year}
                </span>
              </div>
            </div>

            <div className="space-y-4 px-2 pb-2 pt-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-black/45">{motorcycle.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-black">{motorcycle.brand}</h3>
                  <p className="text-black/70">{motorcycle.model}</p>
                </div>
                <span className="rounded-full border border-black/10 bg-[#f8f4ef] px-3 py-1 text-xs text-black/65">Ficha real</span>
              </div>

              <p className="text-sm leading-7 text-black/62">{popularDescriptions[motorcycle.id] ?? motorcycle.model}</p>
            </div>
          </Link>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
