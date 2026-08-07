import { ProductPageShell } from '../components/sections/ProductPageShell'

export function CommunityPage() {
  return (
    <ProductPageShell
      eyebrow="Community"
      title="A disciplined participation layer that grows from product depth instead of trying to fake engagement too early."
      description="The community page presents Ridepedia's future social direction with restraint. It should show where profiles, rider follow systems, and useful discussion can go, without pretending the platform needs noisy social mechanics before the core motorcycle experience is mature enough."
      statusLabel="Future participation lane"
      accent="#7C3AED"
      highlights={['Profiles with purpose', 'Model-centered discussion', 'Earned participation']}
      metrics={[
        {
          label: 'Participation principle',
          value: 'Utility before chatter',
          detail: 'Community only works if users already have reasons to return for catalog depth, comparisons, and editorial value.',
        },
        {
          label: 'Best anchor',
          value: 'Models and decisions',
          detail: 'Discussion should attach to motorcycle pages, comparisons, ownership notes, and launches instead of floating without context.',
        },
        {
          label: 'MVP message',
          value: 'Intentional, not loud',
          detail: 'The page communicates serious direction without turning the current product into a generic social feed.',
        },
      ]}
      primaryCta={{ label: 'Explore the live catalog', to: '/catalog' }}
      secondaryCta={{ label: 'Read editorial direction', to: '/news' }}
      sections={[
        {
          eyebrow: 'Participation design',
          title: 'The strongest community features are anchored to real rider value.',
          description: 'That means emphasizing identity, ownership context, and useful interaction around motorcycles rather than copying mainstream social patterns.',
          cards: [
            {
              meta: 'Identity layer',
              title: 'Profiles built around motorcycles',
              description: 'Rider profiles can eventually highlight owned bikes, wishlists, comparison history, and saved models instead of vanity-first social signals.',
            },
            {
              meta: 'Discussion layer',
              title: 'Conversations attached to products',
              description: 'Comments and threads make more sense when they live around launches, model pages, and comparison decisions users actually care about.',
            },
            {
              meta: 'Contribution layer',
              title: 'Community knowledge with moderation',
              description: 'Ridepedia can later invite owner impressions, practical notes, and corrections in a controlled format that protects information quality.',
            },
            {
              meta: 'Retention layer',
              title: 'Follow what matters',
              description: 'Following brands, categories, and selected motorcycles is more useful than a broad social graph with no product purpose.',
            },
          ],
        },
        {
          eyebrow: 'Maturity rule',
          title: 'This page matters because it keeps community visible without letting it dominate too soon.',
          description: 'That is a healthier product posture than squeezing speculative social previews into the homepage.',
          cards: [
            {
              meta: 'Current role',
              title: 'Signal future participation',
              description: 'The MVP page shows that community is part of the roadmap while preserving the homepage as a clean portal into clearer product areas.',
            },
            {
              meta: 'Later role',
              title: 'Deepen loyalty and repeat use',
              description: 'Once the catalog and comparator layers are stronger, community can become the mechanism that keeps riders coming back with purpose.',
            },
          ],
        },
      ]}
    />
  )
}
