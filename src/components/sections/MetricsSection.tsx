import { Reveal } from '../common/Reveal'

const metrics = [
  { label: 'Media fallback chain', value: '4 layers' },
  { label: '3D bundle strategy', value: 'Lazy loaded' },
  { label: 'Catalog focus', value: 'Desktop + mobile' },
]

export function MetricsSection() {
  return (
    <Reveal className="section-shell mt-24">
      <div className="glass-panel grid gap-6 rounded-[36px] px-6 py-8 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-10">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-cyan-300">System intent</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Built for visual continuity, not fragile demos.</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-[24px] border border-white/8 bg-white/4 p-5">
              <p className="text-sm text-slate-400">{metric.label}</p>
              <p className="mt-4 text-2xl font-semibold text-white">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
