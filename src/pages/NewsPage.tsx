import { ProductPageShell } from '../components/sections/ProductPageShell'

export function NewsPage() {
  return (
    <ProductPageShell
      eyebrow="News and editorial"
      title="Launches, editorial coverage, and industry updates in a format that supports discovery instead of overwhelming the portal."
      description="The news page gives Ridepedia a dedicated editorial surface for motorcycle launches, brand activity, and market context. It keeps the homepage lighter while still making editorial relevance part of the overall product architecture."
      statusLabel="Editorial MVP page"
      accent="#1F2937"
      highlights={['Launch coverage', 'Industry context', 'Curated stories']}
      metrics={[
        {
          label: 'Editorial role',
          value: 'Support discovery',
          detail: 'Coverage should help riders notice what is new, what matters, and where to keep exploring inside the product.',
        },
        {
          label: 'Content focus',
          value: 'Launches and context',
          detail: 'A disciplined MVP can start with launch stories, category trends, and brand-level updates rather than trying to be a full magazine.',
        },
        {
          label: 'Portal benefit',
          value: 'Less homepage density',
          detail: 'Moving editorial into its own page makes the front door cleaner while still preserving a visible route into news.',
        },
      ]}
      primaryCta={{ label: 'Return to homepage portal', to: '/' }}
      secondaryCta={{ label: 'Open marketplace vision', to: '/marketplace' }}
      sections={[
        {
          eyebrow: 'Coverage lanes',
          title: 'Editorial becomes stronger when it is curated around clear use cases.',
          description: 'The page can already outline the kinds of stories Ridepedia will publish, which helps the product feel intentional even before a real CMS-backed flow exists.',
          cards: [
            {
              meta: 'Launch desk',
              title: 'New motorcycles worth tracking',
              description: 'Cover notable model releases, trims, and category updates with quick context about where each bike fits in the market.',
            },
            {
              meta: 'Industry watch',
              title: 'Brand and segment movement',
              description: 'Summarize the events that influence buying research, enthusiast attention, and how categories evolve over time.',
            },
            {
              meta: 'Research support',
              title: 'Stories that connect back to products',
              description: 'Editorial should lead naturally into model pages, comparisons, and eventually marketplace exploration instead of ending as isolated reading.',
            },
            {
              meta: 'Voice',
              title: 'Professional and selective',
              description: 'The tone should feel expert and useful, not cluttered by endless low-value posts that dilute the portal experience.',
            },
          ],
        },
        {
          eyebrow: 'Portal architecture',
          title: 'Separating news from home protects hierarchy and makes every page easier to understand.',
          description: 'That is the core reason this page exists now: the editorial layer deserves presence, but it should not carry the whole front page on its back.',
          cards: [
            {
              meta: 'Homepage role',
              title: 'Signal, do not sprawl',
              description: 'Home should point users toward editorial coverage without embedding oversized article previews that compete with every other vertical.',
            },
            {
              meta: 'Editorial role',
              title: 'Build topical relevance',
              description: 'A dedicated page gives launches and industry updates enough space to feel deliberate, current, and product-grade.',
            },
          ],
        },
      ]}
    />
  )
}
