import { CatalogPreviewSection } from '../components/sections/CatalogPreviewSection'
import { FeaturedGridSection } from '../components/sections/FeaturedGridSection'
import { HeroSection } from '../components/sections/HeroSection'
import { LearnBikeSection } from '../components/sections/LearnBikeSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <LearnBikeSection />
      <FeaturedGridSection />
      <CatalogPreviewSection />
    </>
  )
}
