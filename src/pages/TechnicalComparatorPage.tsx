import { ProductPageShell } from '../components/sections/ProductPageShell'

export function TechnicalComparatorPage() {
  return (
    <ProductPageShell
      eyebrow="Technical comparator"
      title="A bike-versus-bike decision space for riders who need measurable tradeoffs, not vague impressions."
      description="This page frames the technical comparator as Ridepedia's decision-support layer: a structured place to compare motorcycles across power, displacement, top speed, weight, seat height, and other attributes that matter when narrowing real options."
      statusLabel="Decision-support MVP"
      accent="#2563EB"
      highlights={['Bike vs bike', 'Spec tradeoffs', 'Purchase framing']}
      metrics={[
        {
          label: 'Primary output',
          value: 'Clear deltas',
          detail: 'Users should understand where one motorcycle wins, where another compromises, and which tradeoff profile fits their priorities.',
        },
        {
          label: 'Comparison axis',
          value: 'Performance + ergonomics',
          detail: 'Power, cc, speed, weight, and seat height all belong together because buying decisions are rarely about only one metric.',
        },
        {
          label: 'Strategic fit',
          value: 'Supports research',
          detail: 'This product turns catalog discovery into more actionable evaluation instead of leaving the user with disconnected spec tables.',
        },
      ]}
      primaryCta={{ label: 'Browse motorcycles to compare', to: '/catalog' }}
      secondaryCta={{ label: 'Open visual comparator', to: '/visual-comparator' }}
      sections={[
        {
          eyebrow: 'Comparison model',
          title: 'A serious comparator should help riders decide, not just dump numbers into columns.',
          description: 'The dedicated page is where Ridepedia can explain the shape of that decision-support product without crowding the homepage.',
          cards: [
            {
              meta: 'Powertrain',
              title: 'Power, torque, and displacement',
              description: 'These metrics establish the engine character and are often the first layer riders use to understand where a bike sits in the market.',
            },
            {
              meta: 'Real-world usability',
              title: 'Weight and seat height',
              description: 'These numbers matter because confidence at low speed and when stopping can be as decisive as raw performance.',
            },
            {
              meta: 'Category awareness',
              title: 'Fair comparisons only',
              description: 'The strongest version of the product compares motorcycles that make sense together, preserving decision quality instead of forcing random matchups.',
            },
            {
              meta: 'Reading aid',
              title: 'Highlight meaningful deltas',
              description: 'An MVP can already teach users which differences are worth noticing, even before advanced filtering or weighted scoring exists.',
            },
          ],
        },
        {
          eyebrow: 'Buyer journey',
          title: 'The comparator belongs near the catalog because research should become progressively sharper.',
          description: 'Users discover first, compare second, and only then commit. That is the architecture this vertical now communicates more clearly.',
          cards: [
            {
              meta: 'Before comparison',
              title: 'Catalog as entry point',
              description: 'Model pages give the baseline understanding that makes a later comparison feel informed rather than purely numerical.',
            },
            {
              meta: 'After comparison',
              title: 'Marketplace and editorial tie-ins',
              description: 'Once users know what they want, adjacent pages like marketplace and news become more relevant and better timed.',
            },
          ],
        },
      ]}
    />
  )
}
