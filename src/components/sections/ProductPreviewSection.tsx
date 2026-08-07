import { Reveal } from '../common/Reveal'

type ProductPreviewItem = {
  label: string
  value: string
  description: string
}

type ProductPreviewSectionProps = {
  eyebrow: string
  title: string
  description: string
  statusLabel: string
  accent: string
  items?: ProductPreviewItem[]
  layout?: 'grid' | 'split'
}

export function ProductPreviewSection({
  eyebrow,
  title,
  description,
  statusLabel,
  accent,
  items = defaultItems,
  layout = 'grid',
}: ProductPreviewSectionProps) {
  return (
    <Reveal className="section-shell mt-24">
      <section className="overflow-hidden rounded-[36px] border border-black/8 bg-[var(--ride-paper)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-8">
        <div className="flex flex-col gap-5 border-b border-black/8 pb-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="editorial-eyebrow text-black/45">{eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold text-black sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-8 text-black/64">{description}</p>
          </div>

          <span
            className="inline-flex w-fit rounded-full border px-4 py-2 text-[0.72rem] uppercase tracking-[0.28em]"
            style={{ borderColor: `${accent}22`, color: accent, backgroundColor: `${accent}12` }}
          >
            {statusLabel}
          </span>
        </div>

        <div className={`mt-6 grid gap-4 ${layout === 'split' ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {items.map((item) => (
            <article key={`${eyebrow}-${item.label}`} className="rounded-[24px] border border-black/8 bg-white/78 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-black/42">{item.label}</p>
              <h3 className="mt-4 text-2xl font-semibold text-black">{item.value}</h3>
              <p className="mt-3 text-sm leading-7 text-black/62">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  )
}

const defaultItems: ProductPreviewItem[] = [
  {
    label: 'Reference point',
    value: 'Comparación guiada',
    description: 'Cruzar specs, enfoque de uso y presencia general en una sola lectura.',
  },
  {
    label: 'Visual reading',
    value: 'Lado a lado',
    description: 'Entender cómo cambia una moto frente a otra sin saltar entre páginas aisladas.',
  },
  {
    label: 'Decision support',
    value: 'Más contexto',
    description: 'Una vista pensada para descubrir diferencias antes de profundizar en cada ficha.',
  },
]
