type ComparisonMetricCardProps = {
  label: string
  detail: string
  delta: string
  leftLabel: string
  leftValue: string
  rightLabel: string
  rightValue: string
  leftAccent: string
  rightAccent: string
  advantage?: 'left' | 'right'
}

export function ComparisonMetricCard({
  label,
  detail,
  delta,
  leftLabel,
  leftValue,
  rightLabel,
  rightValue,
  leftAccent,
  rightAccent,
  advantage,
}: ComparisonMetricCardProps) {
  return (
    <article className="rounded-[28px] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(250,247,242,0.95))] p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-black/42">{label}</p>
          <p className="mt-2 text-sm leading-6 text-black/64">{detail}</p>
        </div>
        <span className="rounded-full border border-black/10 bg-[var(--ride-paper)] px-3 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-black/58">
          {delta}
        </span>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <div className="rounded-[22px] border border-black/8 bg-white/84 p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-black/42">{leftLabel}</p>
            {advantage === 'left' ? (
              <span className="rounded-full px-3 py-1 text-[0.64rem] uppercase tracking-[0.22em] text-white" style={{ backgroundColor: leftAccent }}>
                Ventaja
              </span>
            ) : null}
          </div>
          <p className="mt-4 text-lg font-medium text-black">{leftValue}</p>
        </div>

        <div className="rounded-[22px] border border-black/8 bg-white/84 p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-black/42">{rightLabel}</p>
            {advantage === 'right' ? (
              <span className="rounded-full px-3 py-1 text-[0.64rem] uppercase tracking-[0.22em] text-white" style={{ backgroundColor: rightAccent }}>
                Ventaja
              </span>
            ) : null}
          </div>
          <p className="mt-4 text-lg font-medium text-black">{rightValue}</p>
        </div>
      </div>
    </article>
  )
}
