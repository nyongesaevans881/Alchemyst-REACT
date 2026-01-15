import React, { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import BackToTop from "./BackToTop"
import ScrollToTop from "./BackToTop"
import SnapToTop from "./SnapToTop"
import AdultConsentModal from "./AdultConsentModal"
import { hasAdultConsent } from "../utils/consent"

export default function SiteLayout({ children }) {
  // read localStorage synchronously to avoid flashes
  const [consentGiven, setConsentGiven] = useState(() => hasAdultConsent())

  return (
    <div>

        <div>
          <Navbar />
          <ScrollToTop />
          <SnapToTop />
          {!consentGiven && (
            <AdultConsentModal onClose={() => setConsentGiven(true)} />
          )}
          {children}
          <BackToTop />
          <Footer />
        </div>
    </div>
  )
}
