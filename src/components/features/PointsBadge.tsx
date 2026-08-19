interface PointsBadgeProps {
  points: number
  size?: 'sm' | 'lg'
}

export default function PointsBadge({ points, size = 'lg' }: PointsBadgeProps) {
  if (size === 'sm') {
    return (
      <span className="inline-flex items-center rounded-full bg-blush px-3 py-1 font-body text-[11px] font-semibold tracking-[0.08em] text-dark-brown">
        +{points} pts
      </span>
    )
  }
  return (
    <div className="inline-flex items-baseline gap-2 rounded-2xl bg-blush px-6 py-4">
      <span className="font-display text-[36px] font-semibold leading-none text-dark-brown">
        {points}
      </span>
      <span className="font-body text-[11px] uppercase tracking-[0.14em] text-dusty-pink">
        pts today
      </span>
    </div>
  )
}
