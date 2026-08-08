import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { resolveAssetPath } from '../../utils/asset-path'

const primaryLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Catálogo', to: '/catalog' },
  { label: 'Comparador técnico', to: '/technical-comparator' },
  { label: 'Noticias', to: '/news' },
]

const roadmapLinks = [
  { label: 'Comparador visual', to: '/visual-comparator' },
  { label: 'Marketplace', to: '/marketplace' },
  { label: 'Comunidad', to: '/community' },
]

export function AppLayout() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isScrollingUp = currentScrollY < lastScrollY

      setIsHeaderVisible(isScrollingUp || currentScrollY < 24)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--ride-cream)] text-[var(--ride-ink)]">
      <div className="page-ambient page-ambient-top" />
      <div className="page-ambient page-ambient-side" />
      <div className="page-ambient page-ambient-bottom" />
      <div className="noise-overlay absolute inset-0 opacity-70" />

      <motion.header
        initial={false}
        animate={{ y: isHeaderVisible ? 0 : '-120%' }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-40 border-b border-black/6 bg-[rgba(245,243,239,0.74)] backdrop-blur-xl"
      >
        <div className="mx-auto w-[min(1680px,calc(100%-1.5rem))] py-3">
          <div className="grid gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8">
            <NavLink to="/" className="flex items-center gap-3">
              <img
                src={resolveAssetPath('/Logos/Ridepedia isotipo.png')}
                alt="Ridepedia"
                className="h-[4.25rem] w-[4.25rem] object-contain md:h-[5.1rem] md:w-[5.1rem]"
              />
              <div className="hidden min-w-0 sm:block">
                <p className="text-[0.72rem] uppercase tracking-[0.3em] text-black/42">Motorcycle discovery portal</p>
                <p className="mt-1 text-base font-medium text-black">Ridepedia</p>
              </div>
            </NavLink>

            <div className="rounded-[28px] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(252,249,244,0.95))] px-5 py-4 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-[0.68rem] uppercase tracking-[0.3em] text-black/42">Entrega próxima semana</p>
                  <p className="mt-1 text-sm leading-6 text-black/68 md:text-[0.95rem]">
                    Núcleo en foco: catálogo, fichas reales, noticias y comparador técnico como siguiente capa creíble.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-[#9D2235]/16 bg-[#9D2235]/8 px-3 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-[#9D2235]">
                    MVP activo
                  </span>
                  <span className="rounded-full border border-black/10 bg-white/82 px-3 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-black/58">
                    Roadmap visible
                  </span>
                </div>
              </div>
            </div>

            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm transition ${isActive ? 'bg-[#9D2235] text-white shadow-[0_14px_28px_rgba(157,34,53,0.24)]' : 'bg-white text-black shadow-[0_16px_40px_rgba(15,23,42,0.06)] hover:bg-[#9D2235] hover:text-white'}`
              }
            >
              Explorar catálogo
            </NavLink>
          </div>

          <nav className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {primaryLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `shrink-0 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${isActive ? 'border-[#9D2235]/18 bg-[#9D2235] text-white shadow-[0_12px_24px_rgba(157,34,53,0.2)]' : 'border-black/8 bg-white/72 text-black/58 hover:border-black/16 hover:text-black'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.22em] text-black/42">
            <span className="mr-1">En preparación</span>
            {roadmapLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[0.68rem] text-black/58 transition hover:border-black/18 hover:text-black"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </motion.header>

      <main className="relative z-10 pb-24 pt-28 md:pt-32">
        <Outlet />
      </main>

      <footer className="relative z-10 border-t border-black/8 bg-[var(--ride-paper)]">
        <div className="section-shell flex flex-col gap-5 py-10 text-sm text-black/60 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={resolveAssetPath('/Logos/Ridepedia isotipo.png')}
              alt="Ridepedia"
              className="h-12 w-12 rounded-2xl object-cover"
            />
            <div>
              <p className="font-medium text-black">Ridepedia</p>
              <p>Un portal para descubrir motos con fichas reales, criterio editorial y una visión clara de lo que sigue.</p>
            </div>
          </div>

          <NavLink
            to="/catalog"
            className="inline-flex items-center justify-center rounded-full bg-[#9D2235] px-5 py-3 text-white shadow-[0_12px_24px_rgba(157,34,53,0.22)] transition hover:-translate-y-0.5"
          >
            Explorar catálogo
          </NavLink>
        </div>

        <div className="section-shell flex flex-wrap gap-2 pb-10">
          {roadmapLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-black/58 transition hover:text-black">
              {link.label}
            </NavLink>
          ))}
        </div>
      </footer>
    </div>
  )
}
