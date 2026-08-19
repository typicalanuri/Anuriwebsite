interface CircleCardProps {
  name: string
  memberCount: number
}

export default function CircleCard({ name, memberCount }: CircleCardProps) {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-lg border border-border-subtle bg-surface-card px-4 py-3 transition-colors duration-150 hover:border-rose">
      <span className="font-body text-[12px] font-medium text-dark-brown">{name}</span>
      <span className="font-body text-[10.5px] uppercase tracking-[0.14em] text-brown-muted">
        {memberCount}
      </span>
    </div>
  )
}
