import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import Button from '../ui/Button'
import { subscribeToWaitlist } from '../../lib/api'

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      setEmail('')
      setStatus('idle')
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim() || status === 'sending') return
    setStatus('sending')
    const { ok } = await subscribeToWaitlist(email.trim())
    setStatus(ok ? 'done' : 'idle')
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(61,54,50,0.55)] px-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="anuri is coming soon"
    >
      <div
        className="w-full max-w-[440px] rounded-2xl bg-surface-card p-8 shadow-modal md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between">
          <p className="font-body text-[11px] uppercase tracking-[0.2em] text-dusty-pink">
            Coming soon
          </p>
          <button
            onClick={onClose}
            aria-label="Close"
            className="cursor-pointer font-body text-[16px] leading-none text-brown-muted transition-colors duration-150 hover:text-dark-brown"
          >
            ✕
          </button>
        </div>

        {status === 'done' ? (
          <div>
            <h2 className="mb-3 font-display text-[24px] font-medium leading-snug text-dark-brown">
              You&apos;re on the list.
            </h2>
            <p className="mb-6 font-body text-[13px] text-brown-muted">
              We&apos;ll email you the moment sign-ups open. Until then — consistency over
              perfection.
            </p>
            <Button variant="secondary" onClick={onClose} className="w-full">
              Close
            </Button>
          </div>
        ) : (
          <div>
            <h2 className="mb-3 font-display text-[24px] font-medium leading-snug text-dark-brown">
              anuri is coming soon.
            </h2>
            <p className="mb-6 font-body text-[13px] text-brown-muted">
              Daily practices, honest research, and real community — for women who take their
              wellbeing seriously. Leave your email and we&apos;ll let you know when you can sign
              up.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                autoFocus
                className="w-full rounded-lg border border-border-subtle bg-soft-white px-4 py-3 font-body text-[13px] text-dark-brown placeholder:text-brown-muted/60 focus:border-dusty-pink focus:outline-none"
              />
              <Button type="submit" className="w-full" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Notify me'}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
