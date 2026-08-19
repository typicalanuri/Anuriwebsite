import { useEffect } from 'react'
import type { ReactElement } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import AnnouncementBar from './components/layout/AnnouncementBar'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import DailyPage from './pages/DailyPage'
import CommunityPage from './pages/CommunityPage'
import ResourcesPage from './pages/ResourcesPage'
import AccountPage from './pages/AccountPage'
import AboutPage from './pages/AboutPage'
import { SignupModalProvider, useSignupModal } from './context/SignupModalContext'
import { config } from './config'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

/**
 * In waitlist mode (v1), app sections redirect home and surface the
 * coming-soon modal. With the flag off (v2), the real page renders.
 */
function GatedRoute({ element }: { element: ReactElement }) {
  const { openSignupModal } = useSignupModal()
  const gated = config.waitlistMode
  useEffect(() => {
    if (gated) openSignupModal()
  }, [gated, openSignupModal])
  if (gated) return <Navigate to="/" replace />
  return element
}

export default function App() {
  return (
    <SignupModalProvider>
      <div className="flex min-h-screen flex-col">
        <ScrollToTop />
        <AnnouncementBar />
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/daily" element={<GatedRoute element={<DailyPage />} />} />
            <Route path="/community" element={<GatedRoute element={<CommunityPage />} />} />
            <Route path="/resources" element={<GatedRoute element={<ResourcesPage />} />} />
            <Route path="/account" element={<GatedRoute element={<AccountPage />} />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </SignupModalProvider>
  )
}
