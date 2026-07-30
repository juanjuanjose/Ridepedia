import { CatalogGrid } from '../components/sections/CatalogGrid'
import { CatalogHero } from '../components/sections/CatalogHero'
import { motorcycles } from '../data/motorcycles'

export function CatalogPage() {
  return (
    <>
      <CatalogHero total={motorcycles.length} />
      <CatalogGrid motorcycles={motorcycles} />
    </>
  )
}
