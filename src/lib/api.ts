/**
 * Backend integration points.
 *
 * v1 ships without a backend: subscribeToWaitlist resolves locally so the
 * signup flow is fully wired on the frontend. To go live, replace the body
 * with a real call — e.g.:
 *
 *   - Supabase:   supabase.from('waitlist').insert({ email })
 *   - Mailchimp / ConvertKit / Resend: POST to their list-subscribe endpoint
 *   - Own API:    fetch(`${import.meta.env.VITE_API_URL}/waitlist`, { method: 'POST', ... })
 *
 * The calling code (SignupModal) only depends on this signature, so swapping
 * the implementation requires no UI changes.
 */
export async function subscribeToWaitlist(email: string): Promise<{ ok: boolean }> {
  console.info('[anuri] waitlist signup:', email)
  await new Promise((resolve) => setTimeout(resolve, 400))
  return { ok: true }
}
