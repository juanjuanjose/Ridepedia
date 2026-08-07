import { ProductPageShell } from '../components/sections/ProductPageShell'

export function VisualComparatorPage() {
  return (
    <ProductPageShell
      eyebrow="Visual comparator"
      title="A rider-versus-bike comparison product built to answer the fit question before specs take over."
      description="This vertical explains the visual comparator as its own product: a person scaled by rider height standing next to a motorcycle, helping users understand silhouette, ergonomic impression, and physical presence in a way numbers alone cannot deliver."
      statusLabel="MVP framing"
      accent="#0F766E"
      highlights={['Person vs motorcycle', 'Scale and stance', '3D-friendly direction']}
      metrics={[
        {
          label: 'Core question',
          value: 'How will it feel?',
          detail: 'The product focuses on perceived fit, stance, and visual scale before a rider commits to deeper research.',
        },
        {
          label: 'Interaction model',
          value: 'Height-led comparison',
          detail: 'A rider figure can be scaled from user height input and placed next to one motorcycle at a time for clearer visual reading.',
        },
        {
          label: 'Relationship to home',
          value: 'Supports LearnBike',
          detail: 'The homepage keeps the 3D experience visible because it makes this future product feel believable, not speculative.',
        },
      ]}
      primaryCta={{ label: 'Return to LearnBike on home', to: '/' }}
      secondaryCta={{ label: 'Open technical comparator', to: '/technical-comparator' }}
      sections={[
        {
          eyebrow: 'Product concept',
          title: 'This is not a spreadsheet view. It is a visual understanding tool.',
          description: 'Its job is to answer questions that riders often struggle to evaluate from dealer photos or isolated spec sheets.',
          cards: [
            {
              meta: 'Fit reading',
              title: 'Rider scale next to the bike',
              description: 'Show a rider avatar scaled from entered height in centimeters to create a more honest sense of proportion around the motorcycle.',
            },
            {
              meta: 'Perspective control',
              title: 'Switchable viewpoints',
              description: 'A side profile is essential first, but front and three-quarter views can deepen the reading of width, seat height, and stance.',
            },
            {
              meta: 'Decision value',
              title: 'Reduce uncertainty early',
              description: 'The comparator helps users eliminate clearly mismatched options before they spend time on full specification comparison.',
            },
            {
              meta: 'Future depth',
              title: 'Mounted rider later',
              description: 'A seated or mounted pose would be a more advanced phase because it introduces posture complexity and model alignment work.',
            },
          ],
        },
        {
          eyebrow: 'MVP framing',
          title: 'The dedicated page gives the concept enough space to feel like a real product lane.',
          description: 'That separation matters. Cramming this explanation into the homepage weakens both the story and the hierarchy of the portal.',
          cards: [
            {
              meta: 'Immediate value',
              title: 'Explain the comparison journey',
              description: 'Position the page as the place where Ridepedia will help riders understand physical fit before comparing engine and performance data.',
            },
            {
              meta: 'Design principle',
              title: 'Visual first, disciplined second',
              description: 'Keep the experience aspirational but clear about scope so the page feels premium without pretending the full tool already exists.',
            },
          ],
        },
      ]}
    />
  )
}
