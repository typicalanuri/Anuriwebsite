import PointsBadge from './PointsBadge'

interface ActivityCardProps {
  category: string
  title: string
  description: string
  points: number
  done: boolean
  onToggle: () => void
}

export default function ActivityCard({
  category,
  title,
  description,
  points,
  done,
  onToggle,
}: ActivityCardProps) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={done}
      className={`flex w-full cursor-pointer items-start gap-4 rounded-lg border p-5 text-left transition-all duration-150 md:p-6 ${
        done
          ? 'border-dusty-pink bg-blush'
          : 'border-border-subtle bg-surface-card shadow-card hover:border-rose'
      }`}
    >
      <span
        className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-150 ${
          done
            ? 'border-dark-brown bg-dark-brown text-soft-white'
            : 'border-rose bg-transparent text-transparent'
        }`}
        aria-hidden="true"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6.5L4.5 9L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="flex-1">
        <span className="mb-1 block font-body text-[10.5px] uppercase tracking-[0.2em] text-dusty-pink">
          {category}
        </span>
        <span
          className={`block font-display text-[16px] font-medium leading-snug text-dark-brown ${
            done ? 'line-through decoration-1 opacity-70' : ''
          }`}
        >
          {title}
        </span>
        <span className="mt-1 block font-body text-[12px] text-brown-muted">{description}</span>
      </span>
      <PointsBadge points={points} size="sm" />
    </button>
  )
}
