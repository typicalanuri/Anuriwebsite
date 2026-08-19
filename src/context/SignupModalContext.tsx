import { createContext, useCallback, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import SignupModal from '../components/features/SignupModal'

interface SignupModalContextValue {
  openSignupModal: () => void
}

const SignupModalContext = createContext<SignupModalContextValue | null>(null)

export function SignupModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const openSignupModal = useCallback(() => setIsOpen(true), [])

  return (
    <SignupModalContext.Provider value={{ openSignupModal }}>
      {children}
      <SignupModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </SignupModalContext.Provider>
  )
}

export function useSignupModal() {
  const ctx = useContext(SignupModalContext)
  if (!ctx) throw new Error('useSignupModal must be used within SignupModalProvider')
  return ctx
}
