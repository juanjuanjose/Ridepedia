interface CatalogHeroProps {
  total: number
}

export function CatalogHero({ total }: CatalogHeroProps) {
  return (
    <section className="section-shell">
      <div className="rounded-[36px] border border-black/8 bg-[linear-gradient(180deg,#fcfbf8,#f5efe8)] px-6 py-10 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:px-10 md:py-14">
        <p className="editorial-eyebrow text-black/45">Catálogo Ridepedia</p>
        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold text-black sm:text-5xl sm:leading-[1.02]">
              Modelos reales para descubrir antes de comparar, guardar criterio o seguir investigando.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-black/64">
              Este catálogo es la base real del MVP: motos con identidad clara, specs legibles, imágenes consistentes y rutas directas hacia fichas que sí pueden sostener una presentación seria.
            </p>
          </div>

          <div className="rounded-[24px] border border-black/8 bg-white/82 px-5 py-4 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
            <p className="text-xs uppercase tracking-[0.35em] text-black/42">Modelos cargados</p>
            <p className="mt-3 text-3xl font-semibold text-black">{total}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {[
            'Fichas con narrativa, no solo una tabla fría.',
            'Selección visual pensada para dar buen feedback.',
            'Base lista para conectar búsqueda, filtros y comparador.',
          ].map((item) => (
            <div key={item} className="rounded-[22px] border border-black/8 bg-white/80 px-4 py-4 text-sm leading-7 text-black/66">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-6 inline-flex rounded-full border border-[#9D2235]/16 bg-[#9D2235]/8 px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-[#9D2235]">
          Núcleo principal para la entrega
        </div>
        </div>
    </section>
  )
}
