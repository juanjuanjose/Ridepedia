import { motorcycles } from '../../data/motorcycles'
import { Reveal } from '../common/Reveal'

const brandEntries = Array.from(
  new Map(
    motorcycles.map((motorcycle) => [motorcycle.brand, motorcycle]),
  ).values(),
)

export function BrandsSection() {
  return (
    <Reveal className="section-shell mt-24">
      <section>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="editorial-eyebrow text-black/45">Brands</p>
            <h2 className="mt-3 text-3xl font-semibold text-black sm:text-4xl">Distinct manufacturers, distinct visual languages.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-black/60">
            From Ducati aggression to BMW utility, the catalog is strongest when each brand keeps its own attitude.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {brandEntries.map((motorcycle) => (
            <article key={motorcycle.brand} className="rounded-[28px] border border-black/8 bg-white/72 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.05)]">
              <p className="text-xs uppercase tracking-[0.35em] text-black/45">{motorcycle.category}</p>
              <h3 className="mt-4 text-2xl font-semibold text-black">{motorcycle.brand}</h3>
              <p className="mt-3 text-sm leading-7 text-black/62">{motorcycle.tagline}</p>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
