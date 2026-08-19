import type { HTMLAttributes } from 'react'

type Variant = 'default' | 'blush' | 'outline'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant
  padding?: string
}

const variantClasses: Record<Variant, string> = {
  default: 'bg-surface-card shadow-card border border-border-subtle',
  blush: 'bg-blush',
  outline: 'bg-transparent border border-rose',
}

export default function Card({
  variant = 'default',
  padding = 'p-6',
  className = '',
  children,
  ...rest
}: CardProps) {
  return (
    <div className={`rounded-lg ${variantClasses[variant]} ${padding} ${className}`} {...rest}>
      {children}
    </div>
  )
}
