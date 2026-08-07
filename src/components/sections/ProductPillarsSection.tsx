import { Reveal } from '../common/Reveal'

const pillars = [
  {
    name: 'Wiki / catalog',
    status: 'Live now',
    description: 'La base actual de Ridepedia: fichas, categorías, marcas y exploración visual de motos.',
  },
  {
    name: 'Visual comparator',
    status: 'Preview',
    description: 'Comparaciones lado a lado para entender diferencias entre modelos con más claridad.',
  },
  {
    name: 'Marketplace',
    status: 'Coming soon',
    description: 'Compra y venta con más contexto que un listado tradicional gracias al catálogo previo.',
  },
  {
    name: 'Community / social',
    status: 'Coming soon',
    description: 'Perfiles, actividad y conversación útil alrededor de motos, marcas y lanzamientos.',
  },
]

export function ProductPillarsSection() {
  return (
    <Reveal className="section-shell mt-24">
      <section className="rounded-[36px] border border-black/8 bg-[var(--ride-paper)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="editorial-eyebrow text-black/45">Product direction</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold text-black sm:text-4xl">
              Ridepedia se está construyendo como un producto de descubrimiento para todo el ecosistema moto.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-black/64">
              El MVP ya entrega valor real desde el catálogo. Sobre esa base se suman comparador, marketplace y comunidad,
              con una capa editorial dedicada a lanzamientos e industria acompañando el recorrido.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {pillars.map((pillar) => (
              <article key={pillar.name} className="rounded-[26px] border border-black/8 bg-white/78 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-black">{pillar.name}</h3>
                  <span className="rounded-full border border-black/10 bg-[#f8f4ef] px-3 py-1 text-[0.7rem] uppercase tracking-[0.24em] text-black/58">
                    {pillar.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-black/64">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  )
}
