import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-soft-white">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row md:px-12">
        <Link
          to="/"
          className="font-display text-[18px] font-semibold lowercase tracking-[0.3em] text-dark-brown"
        >
          anuri
        </Link>
        <nav className="flex items-center gap-6">
          {['Privacy', 'Research', 'Contact'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="font-body text-[11px] uppercase tracking-[0.14em] text-brown-muted transition-colors duration-150 hover:text-dusty-pink"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
