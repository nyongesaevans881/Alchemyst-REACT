import React from "react"

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-text-secondary mb-4">
        At Alchemyst we respect your privacy. We store user data securely in MongoDB and take reasonable technical
        and organisational measures to protect it. We do not share personal data with third parties under any
        circumstances except where required by law.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Data we collect</h2>
      <ul className="list-disc list-inside text-text-secondary">
        <li>Account information: username, email (for account access and communication)</li>
        <li>Optional profile data provided by service providers</li>
        <li>Contact form entries to allow us to respond to inquiries</li>
      </ul>
    </main>
  )
}
