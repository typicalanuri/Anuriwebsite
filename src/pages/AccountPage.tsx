import { useState } from 'react'
import PageWrapper from '../components/layout/PageWrapper'
import Card from '../components/ui/Card'
import Switch from '../components/ui/Switch'
import Button from '../components/ui/Button'

export default function AccountPage() {
  const [prefs, setPrefs] = useState({
    reminders: true,
    circleAlerts: true,
    digest: false,
  })

  const setPref = (key: keyof typeof prefs) => (value: boolean) =>
    setPrefs((prev) => ({ ...prev, [key]: value }))

  return (
    <PageWrapper maxWidth={600}>
      {/* Profile */}
      <div className="mb-10 flex items-center gap-5">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-rose font-display text-[26px] font-semibold text-dark-brown">
          A
        </span>
        <div>
          <h1 className="font-display text-[24px] font-medium leading-tight text-dark-brown">
            Amara Nwosu
          </h1>
          <p className="font-body text-[11px] uppercase tracking-[0.14em] text-brown-muted">
            Member since March 2026
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-2 gap-4">
        <Card variant="blush" className="text-center">
          <p className="font-display text-[32px] font-semibold leading-none text-dark-brown">185</p>
          <p className="mt-2 font-body text-[10.5px] uppercase tracking-[0.14em] text-dusty-pink">
            Points this week
          </p>
        </Card>
        <Card variant="outline" className="text-center">
          <p className="font-display text-[32px] font-semibold leading-none text-dark-brown">12</p>
          <p className="mt-2 font-body text-[10.5px] uppercase tracking-[0.14em] text-brown-muted">
            Day streak
          </p>
        </Card>
      </div>

      {/* Preferences */}
      <Card className="mb-8">
        <p className="mb-2 font-body text-[11px] uppercase tracking-[0.2em] text-dusty-pink">
          Preferences
        </p>
        <div className="divide-y divide-border-subtle">
          <Switch
            label="Daily reminders"
            checked={prefs.reminders}
            onChange={setPref('reminders')}
          />
          <Switch
            label="Circle activity alerts"
            checked={prefs.circleAlerts}
            onChange={setPref('circleAlerts')}
          />
          <Switch
            label="Weekly research digest"
            checked={prefs.digest}
            onChange={setPref('digest')}
          />
        </div>
      </Card>

      <Button variant="ghost" className="px-0 text-brown-muted hover:text-dark-brown">
        Sign out
      </Button>
    </PageWrapper>
  )
}
