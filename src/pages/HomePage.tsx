import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import CategoryCard from '../components/features/CategoryCard'
import QuoteBlock from '../components/features/QuoteBlock'
import { useSignupModal } from '../context/SignupModalContext'
import { config } from '../config'

const categories = [
  { label: 'Move', count: '24 practices', image: '/assets/stretching.jpeg' },
  { label: 'Rest', count: '18 practices', image: '/assets/stillness_strength_softness.jpeg' },
  { label: 'Connect', count: '12 circles', image: '/assets/group_class_one.jpeg' },
]

/** CTA that links into the app in v2 but opens the waitlist modal in v1. */
function GatedCta({ to, children }: { to: string; children: React.ReactNode }) {
  const { openSignupModal } = useSignupModal()
  if (config.waitlistMode) {
    return <span onClick={openSignupModal}>{children}</span>
  }
  return <Link to={to}>{children}</Link>
}

export default function HomePage() {
  const { openSignupModal } = useSignupModal()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[72vh] min-h-[480px] w-full md:h-[82vh]">
        <img
          src="/assets/summer_we_move.jpeg"
          alt="Women moving together in summer light"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(61,54,50,0.5), rgba(61,54,50,0) 55%)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start justify-between gap-6 px-6 pb-10 md:flex-row md:items-end md:px-12 md:pb-14">
          <div className="max-w-[720px]">
            <p className="mb-4 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-soft-white/90">
              01 — health is wealth
            </p>
            <h1 className="font-display text-[36px] font-medium leading-[1.08] tracking-[-0.02em] text-soft-white md:text-[64px] lg:text-[76px]">
              Your body is intelligent. Meet it there.
            </h1>
          </div>
          <Button size="lg" onClick={openSignupModal} className="shrink-0 bg-soft-white text-dark-brown hover:bg-blush">
            Start your practice
          </Button>
        </div>
      </section>

      {/* Category trio */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 md:py-[104px]">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-[26px] font-medium leading-tight text-dark-brown md:text-[36px]">
            Choose how you show up today
          </h2>
          <p
            aria-live="polite"
            className="font-body text-[11px] uppercase tracking-[0.14em] text-dusty-pink"
          >
            {activeCategory ? `Showing: ${activeCategory}` : 'All practices'}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.label}
              image={cat.image}
              label={cat.label}
              count={cat.count}
              selected={activeCategory === cat.label}
              onClick={() =>
                setActiveCategory((prev) => (prev === cat.label ? null : cat.label))
              }
            />
          ))}
        </div>
      </section>

      {/* Quote strip */}
      <QuoteBlock
        quote="We built anuri because wellness culture forgot about evidence. Every practice here is backed by research — not trends."
        attribution="The anuri team"
      />

      {/* Community band */}
      <section className="bg-dark-brown">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-12 md:py-[104px]">
          <div>
            <p className="mb-4 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-dusty-pink">
              02 — Community
            </p>
            <h2 className="mb-5 font-display text-[30px] font-medium leading-tight text-soft-white md:text-[44px]">
              A community of women. Zero miracle cures.
            </h2>
            <p className="mb-8 max-w-[440px] font-body text-[13px] leading-relaxed text-soft-white/75 md:text-[14px]">
              Circles are small groups of women who practice together — in your city or online.
              Honest conversations, real accountability, no toxic positivity.
            </p>
            <GatedCta to="/community">
              <Button variant="outline" className="border-soft-white text-soft-white hover:bg-soft-white hover:text-dark-brown">
                Find your circle
              </Button>
            </GatedCta>
          </div>
          <img
            src="/assets/group_mat_pilates.jpeg"
            alt="Women practicing mat pilates together"
            loading="lazy"
            className="w-full rounded-2xl object-cover md:rounded-[240px_240px_16px_16px]"
          />
        </div>
      </section>

      {/* Resources CTA */}
      <section className="px-6 py-16 text-center md:py-[104px]">
        <p className="mb-4 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-dusty-pink">
          03 — Near you
        </p>
        <h2 className="mx-auto mb-8 max-w-[640px] font-display text-[26px] font-medium leading-tight text-dark-brown md:text-[36px]">
          Wellness that exists in the real world, not just your feed.
        </h2>
        <GatedCta to="/resources">
          <Button size="lg">Find resources near you</Button>
        </GatedCta>
      </section>
    </>
  )
}
