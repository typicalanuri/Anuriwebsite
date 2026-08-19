import { NavLink, Link } from 'react-router-dom'
import { useSignupModal } from '../../context/SignupModalContext'
import { config } from '../../config'

const baseLinkClass =
  'font-body text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-150'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `${baseLinkClass} ${isActive ? 'text-dusty-pink' : 'text-dark-brown hover:text-dusty-pink'}`

/** Nav item for an app section: a real link in v2, a waitlist-modal trigger in v1. */
function AppNavItem({ to, label }: { to: string; label: string }) {
  const { openSignupModal } = useSignupModal()

  if (config.waitlistMode) {
    return (
      <button
        onClick={openSignupModal}
        className={`${baseLinkClass} cursor-pointer text-dark-brown hover:text-dusty-pink`}
      >
        {label}
      </button>
    )
  }
  return (
    <NavLink to={to} className={linkClass}>
      {label}
    </NavLink>
  )
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 h-[68px] border-b border-border-subtle bg-soft-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6 md:px-12">
        <div className="flex flex-1 items-center gap-4 md:gap-8">
          <AppNavItem to="/daily" label="Daily" />
          <AppNavItem to="/community" label="Community" />
          <AppNavItem to="/resources" label="Resources" />
        </div>

        <Link
          to="/"
          className="font-display text-[22px] font-semibold lowercase tracking-[0.3em] text-dark-brown transition-colors duration-150 hover:text-dusty-pink"
        >
          anuri
        </Link>

        <div className="flex flex-1 items-center justify-end gap-4 md:gap-8">
          <NavLink
            to="/about"
            className={({ isActive }) => `hidden sm:inline ${linkClass({ isActive })}`}
          >
            About
          </NavLink>
          <AppNavItem to="/account" label="Account" />
        </div>
      </nav>
    </header>
  )
}
