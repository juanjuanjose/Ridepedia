import { featuredMotorcycles } from '../data/motorcycles'
import { CatalogPreviewSection } from '../components/sections/CatalogPreviewSection'
import { FeaturedGridSection } from '../components/sections/FeaturedGridSection'
import { HeroSection } from '../components/sections/HeroSection'
import { MotorcycleAnatomy } from '../components/sections/MotorcycleAnatomy'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MotorcycleAnatomy motorcycle={featuredMotorcycles[0]} />
      <FeaturedGridSection />
      <CatalogPreviewSection />
    </>
  )
}
