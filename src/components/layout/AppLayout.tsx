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
        className="fixed inset-x-0 top-0 z-40 border-b border-black/6 bg-[rgba(245,243,239,0.82)] backdrop-blur-xl"
      >
        <div className="mx-auto w-[min(1680px,calc(100%-1.5rem))] py-3">
          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            <NavLink to="/" className="shrink-0">
              <img
                src={resolveAssetPath('/Logos/Ridepedia isotipo.png')}
                alt="Ridepedia"
                className="h-[4rem] w-[4rem] object-contain md:h-[4.8rem] md:w-[4.8rem]"
              />
            </NavLink>

            <div className="min-w-0 flex-1">
              <nav className="flex flex-wrap items-center gap-2">
                {primaryLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${isActive ? 'border-[var(--ride-brand-line)] bg-[var(--ride-brand)] text-white shadow-[0_12px_24px_rgba(157,34,53,0.2)]' : 'border-black/8 bg-[var(--ride-surface-strong)] text-black/62 hover:border-[var(--ride-brand-line)] hover:text-[var(--ride-brand)]'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                `shrink-0 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm transition ${isActive ? 'bg-[var(--ride-brand)] text-white shadow-[0_14px_28px_rgba(157,34,53,0.24)]' : 'bg-[var(--ride-surface-strong)] text-black shadow-[0_16px_40px_rgba(15,23,42,0.06)] hover:bg-[var(--ride-brand)] hover:text-white'}`
              }
            >
              Explorar catálogo
            </NavLink>
          </div>
        </div>
      </motion.header>

      <main className="relative z-10 pb-24 pt-20 md:pt-24">
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
            className="inline-flex items-center justify-center rounded-full bg-[var(--ride-brand)] px-5 py-3 text-white shadow-[0_12px_24px_rgba(157,34,53,0.22)] transition hover:-translate-y-0.5 hover:bg-[var(--ride-brand-strong)]"
          >
            Explorar catálogo
          </NavLink>
        </div>

        <div className="section-shell flex flex-wrap gap-2 pb-10">
          {roadmapLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-black/58 transition hover:border-[var(--ride-brand-line)] hover:text-[var(--ride-brand)]">
              {link.label}
            </NavLink>
          ))}
        </div>
      </footer>
    </div>
  )
}
