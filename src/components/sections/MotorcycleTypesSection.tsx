import { motorcycles } from '../../data/motorcycles'
import { Reveal } from '../common/Reveal'

const typeSummaries = [
  {
    category: 'Naked',
    description: 'Mechanical exposure, direct ergonomics, and aggressive proportion without excess bodywork.',
  },
  {
    category: 'Adventure',
    description: 'Tall stance, travel capability, and long-range posture shaped around distance and terrain.',
  },
]

const supportedCategories = Array.from(new Set(motorcycles.map((motorcycle) => motorcycle.category)))

export function MotorcycleTypesSection() {
  return (
    <Reveal className="section-shell mt-24">
      <section className="grid gap-8 rounded-[36px] border border-black/8 bg-[var(--ride-paper)] px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] lg:grid-cols-[0.42fr_0.58fr] lg:px-10 lg:py-12">
        <div className="space-y-5">
          <p className="editorial-eyebrow text-black/45">Types of motorcycles</p>
          <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl">Categories explain riding intent before any spec sheet does.</h2>
          <p className="text-sm leading-7 text-black/64">
            The type of motorcycle shapes posture, visual mass, and the emotional promise of the machine. That is why the page introduces categories as part of the editorial flow, not as a filter buried later.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {typeSummaries.map((type) => (
            <article key={type.category} className="rounded-[28px] border border-black/8 bg-white/80 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-black/45">Type</p>
              <h3 className="mt-4 text-2xl font-semibold text-black">{type.category}</h3>
              <p className="mt-3 text-sm leading-7 text-black/62">{type.description}</p>
            </article>
          ))}

          <div className="rounded-[28px] border border-black/8 bg-[#090909] p-6 text-[#f5f3ef] sm:col-span-2">
            <p className="text-xs uppercase tracking-[0.35em] text-white/55">Present in Ridepedia</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {supportedCategories.map((category) => (
                <span key={category} className="rounded-full border border-white/14 px-4 py-2 text-sm text-white/78">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
