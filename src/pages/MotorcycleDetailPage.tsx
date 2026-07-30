import { Navigate, useParams } from 'react-router-dom'

import { MotorcycleAnatomy } from '../components/sections/MotorcycleAnatomy'
import { MotorcycleDetailHero } from '../components/sections/MotorcycleDetailHero'
import { SpecsSection } from '../components/sections/SpecsSection'
import { findMotorcycleBySlug } from '../data/motorcycles'

export function MotorcycleDetailPage() {
  const { motorcycleSlug } = useParams()

  if (!motorcycleSlug) {
    return <Navigate to="/catalog" replace />
  }

  const motorcycle = findMotorcycleBySlug(motorcycleSlug)

  if (!motorcycle) {
    return <Navigate to="/catalog" replace />
  }

  return (
    <>
      <MotorcycleDetailHero motorcycle={motorcycle} />
      <SpecsSection motorcycle={motorcycle} />
      <MotorcycleAnatomy motorcycle={motorcycle} />
    </>
  )
}
