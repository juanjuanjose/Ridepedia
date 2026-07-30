import { Reveal } from '../common/Reveal'

const editorialNotes = [
  'Each section is paced to feel closer to a magazine spread than a product feed.',
  'Photography leads first, then specifications, then context, so the machine earns attention before data appears.',
  'The interface stays quiet enough for shape, proportion, and material to carry the premium feel.',
]

export function EditorialSection() {
  return (
    <Reveal className="section-shell mt-24">
      <section className="grid gap-8 rounded-[36px] border border-black/8 bg-[var(--ride-paper)] px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-12">
        <div>
          <p className="editorial-eyebrow text-black/45">Editorial</p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-black sm:text-4xl">
            The page should feel curated, deliberate, and premium from the first scroll.
          </h2>
        </div>

        <div className="grid gap-4">
          {editorialNotes.map((note) => (
            <div key={note} className="rounded-[24px] border border-black/8 bg-white/70 px-5 py-5 text-sm leading-7 text-black/68">
              {note}
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  )
}
