import React from "react"
import { Link } from "react-router-dom"

export default function AdultContentWarning() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Adult Content — Access Restricted</h1>
      <p className="text-text-secondary mb-4">
        This site contains adult-oriented listings and is intended only for users aged 18 or older. If you are not
        of legal age, please exit the site. If you believe you have reached this page in error you may return to the
        <Link to="/" className="text-primary ml-1">homepage</Link>.
      </p>
    </main>
  )
}
