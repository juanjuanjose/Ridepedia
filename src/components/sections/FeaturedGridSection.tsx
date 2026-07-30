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
    <Reveal className="section-shell mt-24">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="editorial-eyebrow text-black/45">Motos más populares</p>
          <h2 className="mt-3 text-3xl font-semibold text-black sm:text-4xl">Las motos que definen la entrada al universo Ridepedia.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-black/60">
          Una selección visual de modelos reconocibles, fuertes en silueta y con suficiente personalidad para sostener la portada.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {featuredMotorcycles.map((motorcycle) => (
          <Link
            key={motorcycle.id}
            to={`/motorcycles/${motorcycle.slug}`}
            className="glass-panel group overflow-hidden rounded-[28px] p-4 transition hover:-translate-y-1"
          >
            <MotorcycleImage motorcycle={motorcycle} className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />

            <div className="space-y-4 px-2 pb-2 pt-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-black/45">{motorcycle.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-black">{motorcycle.brand}</h3>
                  <p className="text-black/70">{motorcycle.model}</p>
                </div>
                <span className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/65">{motorcycle.year}</span>
              </div>

              <p className="text-sm leading-7 text-black/62">{popularDescriptions[motorcycle.id] ?? motorcycle.model}</p>
            </div>
          </Link>
        ))}
      </div>
    </Reveal>
  )
}
