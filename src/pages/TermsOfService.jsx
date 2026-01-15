import React from "react"

export default function TermsOfService() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-text-secondary mb-4">
        By using Alchemyst you agree to our Terms of Service. Our platform provides listings and connection services
        only — we do not employ or control providers. Users must comply with local laws and must be of legal age to
        access adult content.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">User responsibilities</h2>
      <ul className="list-disc list-inside text-text-secondary">
        <li>Provide accurate information when creating profiles</li>
        <li>Respect other users and comply with local laws</li>
        <li>Do not upload content you do not own or have permission to use</li>
      </ul>
    </main>
  )
}
