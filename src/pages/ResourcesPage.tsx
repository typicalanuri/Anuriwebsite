import { useState } from 'react'
import PageWrapper from '../components/layout/PageWrapper'
import Tag from '../components/ui/Tag'
import ResourceCard from '../components/features/ResourceCard'

const filters = ['All', 'Movement', 'Mind', 'Nutrition'] as const
type Filter = (typeof filters)[number]

const resources = [
  {
    image: '/assets/hot_yoga.jpeg',
    name: 'Glow Hot Yoga Studio',
    kind: 'Movement',
    distance: '0.8 mi',
    note: 'Beginner-friendly · women-owned',
  },
  {
    image: '/assets/stillness_strength_softness.jpeg',
    name: 'Stillness Meditation Loft',
    kind: 'Mind',
    distance: '1.2 mi',
    note: 'Free Sunday sits',
  },
  {
    image: '/assets/health_is_wealth.jpeg',
    name: 'Root & Bowl Kitchen',
    kind: 'Nutrition',
    distance: '2.1 mi',
    note: 'Dietitian-designed menu',
  },
]

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const visible =
    activeFilter === 'All' ? resources : resources.filter((r) => r.kind === activeFilter)

  return (
    <PageWrapper maxWidth={860}>
      <div className="mb-8">
        <h1 className="mb-2 font-display text-[28px] font-medium leading-tight text-dark-brown md:text-[36px]">
          Near you
        </h1>
        <p className="font-body text-[11px] uppercase tracking-[0.2em] text-dusty-pink">
          Atlanta, GA
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Tag
            key={filter}
            selected={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Tag>
        ))}
      </div>

      <div className="flex flex-col gap-4" aria-live="polite">
        {visible.map((resource) => (
          <ResourceCard key={resource.name} {...resource} />
        ))}
        {visible.length === 0 && (
          <p className="py-8 text-center font-body text-[13px] text-brown-muted">
            No resources in this category yet.
          </p>
        )}
      </div>
    </PageWrapper>
  )
}
