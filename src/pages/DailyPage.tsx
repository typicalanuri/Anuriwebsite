import { useState } from 'react'
import PageWrapper from '../components/layout/PageWrapper'
import PointsBadge from '../components/features/PointsBadge'
import ActivityCard from '../components/features/ActivityCard'

interface Activity {
  id: string
  category: string
  title: string
  description: string
  points: number
}

const activities: Activity[] = [
  {
    id: 'morning',
    category: 'Morning',
    title: '10 minutes of sunlight before your first screen',
    description: 'Morning light anchors your circadian rhythm and steadies cortisol.',
    points: 10,
  },
  {
    id: 'midday',
    category: 'Midday',
    title: 'A 20-minute walk — no podcast, no phone',
    description: 'Unstructured walking gives your brain the idle time it needs to process.',
    points: 15,
  },
  {
    id: 'evening',
    category: 'Evening',
    title: 'Three lines in your journal before bed',
    description: 'Brief expressive writing improves sleep onset in controlled studies.',
    points: 10,
  },
]

const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
})

export default function DailyPage() {
  const [done, setDone] = useState<Record<string, boolean>>({})

  const totalPoints = activities.reduce(
    (sum, a) => (done[a.id] ? sum + a.points : sum),
    0,
  )

  const toggle = (id: string) => setDone((prev) => ({ ...prev, [id]: !prev[id] }))

  return (
    <PageWrapper maxWidth={760}>
      <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 font-body text-[11px] uppercase tracking-[0.2em] text-dusty-pink">
            {today}
          </p>
          <h1 className="font-display text-[28px] font-medium leading-tight text-dark-brown md:text-[36px]">
            Good morning, Amara
          </h1>
        </div>
        <PointsBadge points={totalPoints} />
      </div>

      <div className="mb-10 rounded-lg border-l-2 border-dusty-pink bg-blush/50 px-6 py-5">
        <p className="font-display text-[15px] italic leading-relaxed text-dark-brown">
          &ldquo;Discipline is choosing between what you want now and what you want most.&rdquo;
        </p>
      </div>

      <div className="mb-10 flex flex-col gap-4">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            category={activity.category}
            title={activity.title}
            description={activity.description}
            points={activity.points}
            done={!!done[activity.id]}
            onToggle={() => toggle(activity.id)}
          />
        ))}
      </div>

      <div className="mb-8 flex items-center gap-4 rounded-lg bg-dark-brown px-6 py-5">
        <span className="font-display text-[28px] font-semibold text-soft-white">12</span>
        <p className="font-body text-[12px] uppercase tracking-[0.14em] text-soft-white/80">
          Consistency over perfection — 12-day streak
        </p>
      </div>

      <a
        href="#history"
        className="font-body text-[11px] uppercase tracking-[0.14em] text-dusty-pink underline underline-offset-4 transition-colors duration-150 hover:text-dark-brown"
      >
        View history
      </a>
    </PageWrapper>
  )
}
