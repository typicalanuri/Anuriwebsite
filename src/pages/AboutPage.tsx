import PageWrapper from '../components/layout/PageWrapper'
import Button from '../components/ui/Button'
import QuoteBlock from '../components/features/QuoteBlock'
import { useSignupModal } from '../context/SignupModalContext'

const principles = [
  {
    number: '01',
    title: 'Evidence over trends',
    text: 'Every practice on anuri is backed by peer-reviewed research. If the science is thin, we say so. If it changes, we update.',
  },
  {
    number: '02',
    title: 'Consistency over perfection',
    text: 'Ten minutes of sunlight beats a perfect routine you quit by Thursday. We design for the life you actually live.',
  },
  {
    number: '03',
    title: 'Community over comparison',
    text: 'Circles are small, honest, and free of toxic positivity. Real women, real accountability — no highlight reels.',
  },
  {
    number: '04',
    title: 'Access over luxury',
    text: 'Wellness is not a luxury — it’s a right. Our resources point to what’s near you, affordable, and real.',
  },
]

export default function AboutPage() {
  const { openSignupModal } = useSignupModal()

  return (
    <>
      <PageWrapper maxWidth={860}>
        <p className="mb-4 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-dusty-pink">
          About anuri
        </p>
        <h1 className="mb-8 max-w-[720px] font-display text-[32px] font-medium leading-[1.15] tracking-[-0.02em] text-dark-brown md:text-[48px]">
          Wellness culture forgot about evidence. We didn&apos;t.
        </h1>
        <p className="mb-16 max-w-[560px] font-body text-[14px] leading-relaxed text-brown-muted md:text-[15px]">
          anuri is a wellness platform for women built on three things: daily practices that
          actually hold up in research, honest information without the miracle-cure markup, and a
          community that tells you the truth. No trends, no 12-step morning routines, no shame.
        </p>

        <img
          src="/assets/wellness_aesthetic.jpeg"
          alt="Calm wellness still life"
          loading="lazy"
          className="mb-16 w-full rounded-2xl object-cover md:rounded-[240px_240px_16px_16px]"
        />

        {/* Principles */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-16">
          {principles.map((p) => (
            <div key={p.number}>
              <p className="mb-2 font-body text-[11px] uppercase tracking-[0.2em] text-dusty-pink">
                {p.number}
              </p>
              <h2 className="mb-3 font-display text-[20px] font-medium leading-snug text-dark-brown">
                {p.title}
              </h2>
              <p className="font-body text-[13px] leading-relaxed text-brown-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </PageWrapper>

      <QuoteBlock
        quote="Your body is intelligent. Our job is to help you meet it there — with practices that respect both the science and your time."
        attribution="The anuri team"
      />

      {/* Join CTA */}
      <section className="px-6 py-16 text-center md:py-[104px]">
        <h2 className="mx-auto mb-8 max-w-[560px] font-display text-[26px] font-medium leading-tight text-dark-brown md:text-[36px]">
          Ready to practice with us?
        </h2>
        <Button size="lg" onClick={openSignupModal}>
          Join anuri
        </Button>
      </section>
    </>
  )
}
