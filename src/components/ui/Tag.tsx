import type { ReactNode } from 'react'

interface TagProps {
  selected?: boolean
  onClick?: () => void
  children: ReactNode
}

export default function Tag({ selected = false, onClick, children }: TagProps) {
  return (
    <button
      onClick={onClick}
      aria-pressed={selected}
      className={`cursor-pointer rounded-full px-5 py-2 font-body text-[11px] font-medium uppercase tracking-[0.14em] transition-all duration-150 ${
        selected
          ? 'bg-dark-brown text-soft-white'
          : 'border border-rose bg-transparent text-brown-muted hover:border-dusty-pink hover:text-dark-brown'
      }`}
    >
      {children}
    </button>
  )
}
