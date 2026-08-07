import { FinalCtaSection } from '../components/sections/FinalCtaSection'
import { FeaturedGridSection } from '../components/sections/FeaturedGridSection'
import { HeroSection } from '../components/sections/HeroSection'
import { LearnBikeSection } from '../components/sections/LearnBikeSection'
import { PortalDestinationsSection } from '../components/sections/PortalDestinationsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PortalDestinationsSection />
      <LearnBikeSection />
      <FeaturedGridSection />
      <FinalCtaSection />
    </>
  )
}
