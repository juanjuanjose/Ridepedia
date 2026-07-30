import { featuredMotorcycles } from '../../data/motorcycles'
import { Reveal } from '../common/Reveal'

export function HistorySection() {
  return (
    <Reveal className="section-shell mt-24">
      <section>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="editorial-eyebrow text-black/45">History</p>
            <h2 className="mt-3 text-3xl font-semibold text-black sm:text-4xl">Behind every silhouette, there is a story worth keeping.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-black/60">
            A premium motorcycle page should not stop at beauty. It should explain why a machine matters, what it represents, and how it earns its shape.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredMotorcycles.map((motorcycle) => (
            <article key={motorcycle.id} className="rounded-[28px] border border-black/8 bg-white/72 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.05)]">
              <p className="text-xs uppercase tracking-[0.35em] text-black/45">{motorcycle.brand}</p>
              <h3 className="mt-4 text-2xl font-semibold text-black">{motorcycle.model}</h3>
              <p className="mt-4 text-sm leading-7 text-black/62">{motorcycle.story}</p>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
