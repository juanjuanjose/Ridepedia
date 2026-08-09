import { Navigate, useParams } from 'react-router-dom'

import { CategoryFocusSection } from '../components/sections/CategoryFocusSection'
import { MotorcycleDetailHero } from '../components/sections/MotorcycleDetailHero'
import { RelatedMotorcyclesSection } from '../components/sections/RelatedMotorcyclesSection'
import { SpecsSection } from '../components/sections/SpecsSection'
import { findMotorcycleBySlug, findRelatedMotorcycles } from '../data/motorcycles'

export function MotorcycleDetailPage() {
  const { motorcycleSlug } = useParams()

  if (!motorcycleSlug) {
    return <Navigate to="/catalog" replace />
  }

  const motorcycle = findMotorcycleBySlug(motorcycleSlug)

  if (!motorcycle) {
    return <Navigate to="/catalog" replace />
  }

  const relatedMotorcycles = findRelatedMotorcycles(motorcycle)

  return (
    <>
      <MotorcycleDetailHero motorcycle={motorcycle} />
      <CategoryFocusSection motorcycle={motorcycle} />
      <SpecsSection motorcycle={motorcycle} />
      <RelatedMotorcyclesSection currentMotorcycle={motorcycle} motorcycles={relatedMotorcycles} />
    </>
  )
}
