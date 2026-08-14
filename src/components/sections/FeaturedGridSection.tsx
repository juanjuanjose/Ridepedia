import { useState } from 'react'
import { Link } from 'react-router-dom'

import { featuredMotorcycles } from '../../data/motorcycles'
import type { Motorcycle } from '../../types/motorcycle'
import { resolveAssetPath } from '../../utils/asset-path'
import { Reveal } from '../common/Reveal'

const featuredCurtainImages: Record<string, string> = {
  'ducati-streetfighter-v4': resolveAssetPath('/Moto images/ducati figher v4.jpg'),
  'triumph-street-triple-rs': resolveAssetPath('/Moto images/street triple.webp'),
  'bmw-r-1300-gs': resolveAssetPath('/Moto images/R1300GS.webp'),
}

function FeaturedCurtainCard({
  motorcycle,
  isOpen,
  onOpen,
}: {
  motorcycle: Motorcycle
  isOpen: boolean
  onOpen: () => void
}) {
  return (
    <Link
      to={`/motorcycles/${motorcycle.slug}`}
      onMouseEnter={onOpen}
      onFocus={onOpen}
      onTouchStart={onOpen}
      className={`group relative flex min-h-[29rem] overflow-hidden rounded-[34px] border border-black/10 bg-[linear-gradient(180deg,rgba(244,239,232,0.96),rgba(236,229,221,0.94))] shadow-[0_20px_64px_rgba(15,23,42,0.07)] transition-all duration-500 ease-out ${isOpen ? 'lg:flex-[1.65]' : 'lg:flex-[0.75]'}`}
    >
      <div className={`relative z-10 flex w-full flex-col justify-between p-5 transition-all duration-500 sm:p-6 ${isOpen ? 'lg:w-[16rem]' : 'lg:w-[8.2rem]'}`}>
        <div>
          <p className="text-[0.66rem] uppercase tracking-[0.32em] text-black/42">{motorcycle.category}</p>
          <h3 className={`mt-4 font-semibold leading-[0.98] text-black transition-all duration-500 ${isOpen ? 'text-[2rem]' : 'text-[1.5rem] lg:[writing-mode:vertical-rl] lg:rotate-180 lg:text-[1.65rem]'}`}>
            {motorcycle.brand}
          </h3>
          <p className={`mt-3 text-black/68 transition-all duration-500 ${isOpen ? 'max-w-[12ch] text-lg leading-7 opacity-100' : 'text-sm leading-6 opacity-100 lg:max-w-none lg:[writing-mode:vertical-rl] lg:rotate-180'}`}>
            {motorcycle.model}
          </p>
        </div>

        <div className={`transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-100 lg:opacity-0'}`}>
          <span className="inline-flex rounded-full border border-black/12 bg-black/4 px-3 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-black/55">
            Abrir ficha
          </span>
        </div>
      </div>

      <div className={`grid flex-1 overflow-hidden border-l border-black/8 transition-all duration-500 ease-out ${isOpen ? 'max-w-[38rem] opacity-100' : 'max-w-0 opacity-0'} lg:grid-cols-[1.15fr_0.85fr]`}>
        <div className="relative min-h-[16rem] bg-[#e9e2d8]">
          <img
            src={featuredCurtainImages[motorcycle.id]}
            alt={`${motorcycle.brand} ${motorcycle.model}`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.06),rgba(15,23,42,0.24))]" />
        </div>

        <div className="flex flex-col justify-between bg-[linear-gradient(180deg,rgba(247,243,237,0.98),rgba(240,233,224,0.94))] p-5 sm:p-6">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-black/42">Entrada rápida</p>
            <p className="mt-3 text-sm leading-7 text-black/66">{motorcycle.summary}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {motorcycle.heroStats.map((stat) => (
              <span key={stat} className="rounded-full border border-black/12 bg-[#efe8df] px-3 py-2 text-[0.7rem] uppercase tracking-[0.18em] text-black/62">
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export function FeaturedGridSection() {
  const [openSlug, setOpenSlug] = useState('ducati-streetfighter-v4')

  return (
    <Reveal className="section-shell mt-20">
      <section>
        <div className="max-w-3xl">
          <p className="editorial-eyebrow text-black/45">Selección destacada</p>
          <h2 className="mt-3 text-3xl font-semibold text-black sm:text-[2.6rem] sm:leading-[1.04]">
            Tres motos para entrar rápido en el catálogo.
          </h2>
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row">
          {featuredMotorcycles.map((motorcycle) => (
            <FeaturedCurtainCard
              key={motorcycle.id}
              motorcycle={motorcycle}
              isOpen={openSlug === motorcycle.slug}
              onOpen={() => setOpenSlug(motorcycle.slug)}
            />
          ))}
        </div>
      </section>
    </Reveal>
  )
}
