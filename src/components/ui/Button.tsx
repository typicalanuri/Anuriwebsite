import type { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-dark-brown text-soft-white hover:bg-brown-muted',
  secondary: 'bg-blush text-dark-brown hover:bg-rose',
  outline:
    'border border-dark-brown bg-transparent text-dark-brown hover:bg-dark-brown hover:text-soft-white',
  ghost: 'bg-transparent text-dark-brown hover:text-dusty-pink',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-[11px]',
  md: 'px-6 py-3 text-[12px]',
  lg: 'px-8 py-4 text-[13px]',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        `inline-flex cursor-pointer items-center justify-center rounded-lg font-body font-medium uppercase tracking-[0.14em] transition-all duration-150 ${variantClasses[variant]} ${sizeClasses[size]}`,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
