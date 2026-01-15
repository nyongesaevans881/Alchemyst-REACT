// Utilities to manage adult consent in localStorage
const CONSENT_KEY = "adult_consent_ts"
const HOURS = 25

export function grantAdultConsent() {
  try {
    const ts = Date.now()
    localStorage.setItem(CONSENT_KEY, String(ts))
  } catch (e) {
    // ignore storage errors
  }
}

export function clearAdultConsent() {
  try {
    localStorage.removeItem(CONSENT_KEY)
  } catch (e) {}
}

export function hasAdultConsent() {
  try {
    const v = localStorage.getItem(CONSENT_KEY)
    if (!v) return false
    const ts = Number(v)
    if (!ts) return false
    const age = Date.now() - ts
    return age < HOURS * 60 * 60 * 1000
  } catch (e) {
    return false
  }
}

export default { grantAdultConsent, clearAdultConsent, hasAdultConsent }
