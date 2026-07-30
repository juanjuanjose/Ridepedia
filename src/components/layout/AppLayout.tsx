import { motion } from 'framer-motion'
import { NavLink, Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--ride-cream)] text-[var(--ride-ink)]">
      <div className="noise-overlay absolute inset-0 opacity-70" />

      <header className="sticky top-0 z-40 border-b border-black/6 bg-[rgba(245,243,239,0.82)] backdrop-blur-xl">
        <div className="mx-auto grid w-[min(1680px,calc(100%-1.5rem))] grid-cols-[auto_1fr_auto] items-center gap-5 py-3 md:gap-8">
          <NavLink to="/" className="flex items-center">
            <img
              src="/Logos/Ridepedia isotipo.png"
              alt="Ridepedia"
              className="h-[6.6rem] w-[6.6rem] object-contain md:h-[8.2rem] md:w-[8.2rem]"
            />
          </NavLink>

          <div className="mx-auto flex w-full max-w-3xl items-center rounded-full border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(250,248,245,0.96))] px-7 py-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)] ring-1 ring-white/60">
            <input
              type="text"
              placeholder="Buscar motos, marcas, estilos o categorías"
              className="w-full bg-transparent text-sm text-black outline-none placeholder:text-black/38 md:text-[16px]"
            />
          </div>

          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              `rounded-full px-7 py-3.5 text-sm transition ${isActive ? 'bg-[#9D2235] text-white shadow-[0_14px_28px_rgba(157,34,53,0.24)]' : 'bg-white text-black shadow-[0_16px_40px_rgba(15,23,42,0.06)] hover:bg-[#9D2235] hover:text-white'}`
            }
          >
            Catálogo
          </NavLink>
        </div>
      </header>

      <main className="relative z-10 pb-24 pt-8">
        <Outlet />
      </main>

      <footer className="relative z-10 border-t border-black/8 bg-[var(--ride-paper)]">
        <div className="section-shell flex flex-col gap-5 py-10 text-sm text-black/60 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/Logos/Ridepedia isotipo.png"
              alt="Ridepedia"
              className="h-12 w-12 rounded-2xl object-cover"
            />
            <div>
              <p className="font-medium text-black">Ridepedia</p>
              <p>Un espacio visual para descubrir motos con presencia, contexto y diseño.</p>
            </div>
          </div>

          <motion.a
            href="/catalog"
            whileHover={{ y: -2 }}
            className="inline-flex items-center justify-center rounded-full bg-[#9D2235] px-5 py-3 text-white shadow-[0_12px_24px_rgba(157,34,53,0.22)]"
          >
            Explorar catálogo
          </motion.a>
        </div>
      </footer>
    </div>
  )
}
