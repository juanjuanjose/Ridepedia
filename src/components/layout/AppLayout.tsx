import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { resolveAssetPath } from '../../utils/asset-path'

const portalLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Catálogo', to: '/catalog' },
  { label: 'Mercado', to: '/marketplace' },
  { label: 'Comparador visual', to: '/visual-comparator' },
  { label: 'Comparador técnico', to: '/technical-comparator' },
  { label: 'Comunidad', to: '/community' },
  { label: 'Noticias', to: '/news' },
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
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-5 md:gap-8">
          <NavLink to="/" className="flex items-center">
            <img
              src={resolveAssetPath('/Logos/Ridepedia isotipo.png')}
              alt="Ridepedia"
              className="h-[4.4rem] w-[4.4rem] object-contain md:h-[5.5rem] md:w-[5.5rem]"
            />
          </NavLink>

          <div className="mx-auto flex w-full max-w-3xl items-center rounded-full border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(250,248,245,0.96))] px-6 py-3 shadow-[0_18px_48px_rgba(15,23,42,0.07)] ring-1 ring-white/60">
            <input
              type="text"
              placeholder="Buscar motos, marcas, estilos o categorías"
              className="w-full bg-transparent text-sm text-black outline-none placeholder:text-black/38 md:text-[16px]"
            />
          </div>

          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              `rounded-full px-6 py-3 text-sm transition ${isActive ? 'bg-[#9D2235] text-white shadow-[0_14px_28px_rgba(157,34,53,0.24)]' : 'bg-white text-black shadow-[0_16px_40px_rgba(15,23,42,0.06)] hover:bg-[#9D2235] hover:text-white'}`
            }
          >
            Catálogo
          </NavLink>
          </div>

          <nav className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {portalLinks.map((link) => (
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
              <p>Un espacio visual para descubrir motos con presencia, contexto y diseño.</p>
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
          {portalLinks.slice(2).map((link) => (
            <NavLink key={link.to} to={link.to} className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-black/58 transition hover:text-black">
              {link.label}
            </NavLink>
          ))}
        </div>
      </footer>
    </div>
  )
}
