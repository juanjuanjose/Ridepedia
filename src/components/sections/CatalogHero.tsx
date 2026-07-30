interface CatalogHeroProps {
  total: number
}

export function CatalogHero({ total }: CatalogHeroProps) {
  return (
    <section className="section-shell">
      <div className="glass-panel rounded-[36px] px-6 py-10 md:px-10 md:py-14">
        <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">Catalog</p>
        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Browse motorcycles with resilient media and premium detail pages.</h1>
            <p className="mt-4 max-w-2xl text-slate-400">
              This catalog is typed around a real motorcycle entity so the visual layer stays separate from media resolution and model lookup.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/8 bg-white/4 px-5 py-4">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Models loaded</p>
            <p className="mt-3 text-3xl font-semibold text-white">{total}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
