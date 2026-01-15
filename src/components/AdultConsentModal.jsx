import React from "react"
import { grantAdultConsent } from "../utils/consent"
import { useNavigate } from "react-router-dom"

export default function AdultConsentModal({ onClose }) {
  const navigate = useNavigate()

  const accept = () => {
    grantAdultConsent()
    if (onClose) onClose()
  }

  const decline = () => {
    navigate("/adult-content-warning")
  }

  return (
    <div className="fixed inset-0 z-999999 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="max-w-md w-full bg-white rounded-2xl p-6 mx-4">
        <h2 className="text-2xl font-bold mb-3 flex flex-col items-center gap-2 uppercase">
          <div className="bg-black p-2 rounded-full flex items-center justify-center">
          <img src="/primary-logo.png" className="h-25" alt="" />
          </div>
          Adult Content Warning
          </h2>
        <p className="text-text-secondary mb-4 text-center">
          This website contains content intended for adults aged 18 and over. By continuing, you confirm that you
          are at least 18 years old and that viewing this content is legal in your jurisdiction.
        </p>
        <div className="flex max-md:flex-col gap-3 justify-end">
          <button
            onClick={decline}
            className="px-4 py-2 rounded-lg border border-border-light text-text-primary cursor-pointer"
          >
            I am under 18 / Exit
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 rounded-lg bg-primary text-text-inverse font-medium cursor-pointer"
          >
            I am 18 or older — Enter
          </button>
        </div>
        <p className="text-xs text-text-secondary mt-4 text-center">Consent will be remembered for 25 hours.</p>
      </div>
    </div>
  )
}
