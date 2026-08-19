import type { ReactNode } from 'react'

interface BadgeProps {
  variant?: 'outline' | 'filled'
  children: ReactNode
}

export default function Badge({ variant = 'outline', children }: BadgeProps) {
  const styles =
    variant === 'filled'
      ? 'bg-blush text-dark-brown'
      : 'border border-rose text-brown-muted'
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-body text-[10.5px] uppercase tracking-[0.14em] ${styles}`}
    >
      {children}
    </span>
  )
}
