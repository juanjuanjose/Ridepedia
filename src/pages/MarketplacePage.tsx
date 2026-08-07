import { ProductPageShell } from '../components/sections/ProductPageShell'

export function MarketplacePage() {
  return (
    <ProductPageShell
      eyebrow="Marketplace"
      title="A curated transaction hub where listings inherit context instead of feeling disposable."
      description="The marketplace page frames Ridepedia as a higher-trust place to browse motorcycles for sale. Even as an MVP, it should signal cleaner inventory, stronger model context, and buying flows that feel informed rather than chaotic."
      statusLabel="Curated MVP page"
      accent="#C2410C"
      highlights={['Model-aware listings', 'Curated seller framing', 'Buyer confidence signals']}
      metrics={[
        {
          label: 'Inventory posture',
          value: 'Curated first',
          detail: 'Priority goes to clarity, verified model context, and disciplined presentation over raw volume.',
        },
        {
          label: 'Primary user',
          value: 'Research-driven buyers',
          detail: 'The page is designed for riders who want to connect listings with category, spec, and visual understanding.',
        },
        {
          label: 'Strategic tie-in',
          value: 'Connected to catalog',
          detail: 'Marketplace becomes stronger when every listing can borrow trust and structure from the live Ridepedia data layer.',
        },
      ]}
      primaryCta={{ label: 'Explore catalog context', to: '/catalog' }}
      secondaryCta={{ label: 'Open technical comparator', to: '/technical-comparator' }}
      sections={[
        {
          eyebrow: 'Transaction format',
          title: 'The marketplace should feel more like a guided showroom than a noisy classifieds wall.',
          description: 'These blocks show the kind of browsing structure that makes the product feel intentional while backend functionality is still pending.',
          cards: [
            {
              meta: 'Featured listings',
              title: 'Editor-curated inventory',
              description: 'A premium layer for standout motorcycles, rare trims, and listings with complete photography, spec clarity, and honest condition framing.',
            },
            {
              meta: 'Buyer tools',
              title: 'Shortlist with context',
              description: 'Save candidates alongside category, engine class, and direct links back into the catalog so research does not restart from zero.',
            },
            {
              meta: 'Seller quality',
              title: 'Structured listing standards',
              description: 'Require model selection, mileage, condition notes, and photo discipline so each post looks like part of a coherent product system.',
            },
            {
              meta: 'Trust layer',
              title: 'Signals that reduce noise',
              description: 'Highlight verified model match, complete media sets, and transparent specs to push the marketplace away from low-trust generic posting.',
            },
          ],
        },
        {
          eyebrow: 'Launch framing',
          title: 'The MVP can already communicate the destination before the transaction stack exists.',
          description: 'That matters because product architecture is not only backend capability. Users need to understand what this vertical is for and why it belongs inside Ridepedia.',
          cards: [
            {
              meta: 'Near-term lane',
              title: 'Discovery-led browsing',
              description: 'Start with polished listing cards, category shelves, and a strong value proposition around context-rich inventory.',
            },
            {
              meta: 'Expansion lane',
              title: 'Comparison before contact',
              description: 'Eventually buyers should be able to jump from a listing into side-by-side comparisons before deciding whether to reach out.',
            },
          ],
        },
      ]}
    />
  )
}
