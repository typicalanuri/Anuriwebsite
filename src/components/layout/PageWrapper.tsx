import type { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  maxWidth?: number
  className?: string
}

export default function PageWrapper({ children, maxWidth = 860, className = '' }: PageWrapperProps) {
  return (
    <div
      className={`mx-auto w-full px-6 py-16 md:px-12 md:py-[104px] ${className}`}
      style={{ maxWidth }}
    >
      {children}
    </div>
  )
}
