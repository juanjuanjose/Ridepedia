import { useEffect, useState } from 'react'

import type { Motorcycle } from '../../types/motorcycle'
import { getMotorcycleMediaCandidates } from '../../services/motorcycle-media.service'

interface MotorcycleImageProps {
  motorcycle: Motorcycle
  className?: string
}

export function MotorcycleImage({ motorcycle, className }: MotorcycleImageProps) {
  const candidates = getMotorcycleMediaCandidates(motorcycle)
  const [candidateIndex, setCandidateIndex] = useState(0)

  useEffect(() => {
    setCandidateIndex(0)
  }, [motorcycle.id])

  const activeCandidate = candidates[candidateIndex] || candidates[candidates.length - 1]
  const showSourceBadge = candidates.length > 1

  return (
    <div className="relative overflow-hidden rounded-[28px] bg-slate-950/70">
      <img
        key={`${motorcycle.id}-${activeCandidate.url}`}
        src={activeCandidate.url}
        alt={activeCandidate.alt}
        className={className}
        loading="lazy"
        onError={() => {
          setCandidateIndex((index) => Math.min(index + 1, candidates.length - 1))
        }}
      />

      {showSourceBadge ? (
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-slate-300">
          {activeCandidate.source}
        </span>
      ) : null}
    </div>
  )
}
