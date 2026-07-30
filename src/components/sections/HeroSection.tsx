import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { motorcycles } from '../../data/motorcycles'

const heroMotorcycle = motorcycles[0]

export function HeroSection() {
  return (
    <section className="px-2 pt-4 sm:px-3 lg:px-4 lg:pt-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.985, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid min-h-[82vh] max-w-[1880px] gap-2 rounded-[40px] bg-[var(--ride-paper)] p-2 shadow-[0_24px_80px_rgba(15,23,42,0.06)] lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch lg:p-3"
      >
        <div className="flex h-full flex-col justify-between rounded-[34px] bg-[#f5f3ef] px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          <div className="max-w-2xl space-y-4">
            <p className="editorial-eyebrow text-black/45">Ridepedia</p>
            <h1 className="text-5xl font-semibold leading-[0.9] text-[#090909] sm:text-6xl xl:text-[6.4rem]">
              La felicidad va en dos ruedas.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-black/64 sm:text-xl">
              Ridepedia propone una mirada premium sobre el motociclismo: presencia mecánica, fotografía protagonista y una lectura visual pensada para quedarse mirando más tiempo.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-3">
              <Link
                to="/catalog"
                className="rounded-full bg-[#9D2235] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_24px_rgba(157,34,53,0.22)] transition hover:-translate-y-0.5"
              >
                Ver catálogo
              </Link>
              <Link
                to={`/motorcycles/${heroMotorcycle.slug}`}
                className="rounded-full border border-[#9D2235]/18 bg-white px-6 py-3 text-sm font-medium text-[#9D2235] transition hover:border-[#9D2235]/40"
              >
                Ver destacada
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroMotorcycle.heroStats.map((stat) => (
                <div key={stat} className="rounded-[24px] border border-black/8 bg-white/78 p-4 lg:min-h-[9.5rem]">
                  <p className="text-xs uppercase tracking-[0.35em] text-black/45">Dato clave</p>
                  <p className="mt-3 text-xl font-medium text-[#090909]">{stat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[34rem] items-center justify-center overflow-hidden rounded-[34px] bg-[radial-gradient(circle_at_top,rgba(157,34,53,0.16),transparent_34%),#111111] lg:min-h-full">
          <img
            src="/Hero images/h2r.jpg"
            alt="Kawasaki Ninja H2R"
            className="relative z-10 h-full w-full object-contain p-0 lg:p-1"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,9,0.06)_0%,rgba(9,9,9,0.16)_58%,rgba(9,9,9,0.36)_100%)]" />

          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 sm:p-6">
            <div className="rounded-[24px] border border-white/12 bg-black/32 px-4 py-3 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.35em] text-white/55">Fotografía</p>
              <p className="mt-2 text-lg font-medium text-[#f5f3ef]">Kawasaki Ninja H2R</p>
            </div>

            <div className="hidden rounded-[24px] border border-white/12 bg-black/24 px-4 py-3 text-right backdrop-blur-md sm:block">
              <p className="text-xs uppercase tracking-[0.35em] text-white/55">Edición actual</p>
              <p className="mt-2 text-lg font-medium text-[#f5f3ef]">Volumen 01</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
