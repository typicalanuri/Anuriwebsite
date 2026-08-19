/**
 * Site-wide feature flags.
 *
 * waitlistMode — v1 "coming soon" mode. The app sections (Daily, Community,
 * Resources, Account) are gated behind the waitlist signup modal. The full
 * pages remain implemented and routable for v2: set VITE_WAITLIST_MODE=false
 * in a .env file (or the deploy environment) to open up the full app without
 * any code changes.
 */
export const config = {
  waitlistMode: import.meta.env.VITE_WAITLIST_MODE !== 'false',
}
