import React, { useState } from "react"
import { sendContactForm } from "../utils/contact"
import toast from "react-hot-toast"

export default function Contact() {
  const [form, setForm] = useState({
    intention: "inquiry",
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await sendContactForm(form)
      toast.success("Message sent — we'll get back to you soon")
      setForm({ intention: "inquiry", name: "", email: "", phone: "", message: "" })
    } catch (err) {
      toast.error(err.message || "Failed to send message")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-text-secondary mb-6">Join our Telegram or send us a message using the form below.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Join our Telegram</h2>
          <p className="text-text-secondary mb-4">Get community updates and support on Telegram.</p>
          <a href="https://t.me/" target="_blank" rel="noreferrer" className="text-primary underline">Open Telegram</a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-bg-secondary p-6 rounded-lg">
          <label className="block text-sm">Intention</label>
          <select name="intention" value={form.intention} onChange={handleChange} className="w-full p-2 rounded">
            <option value="inquiry">Inquiry</option>
            <option value="complaint">Complaint</option>
            <option value="comment">Comment</option>
          </select>

          <label className="block text-sm">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full p-2 rounded" required />

          <label className="block text-sm">Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full p-2 rounded" required />

          <label className="block text-sm">Phone (optional)</label>
          <input name="phone" value={form.phone} onChange={handleChange} className="w-full p-2 rounded" />

          <label className="block text-sm">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="w-full p-2 rounded h-32" required />

          <button type="submit" disabled={loading} className="px-4 py-2 bg-primary text-text-inverse rounded">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <p className="text-xs text-text-secondary mt-6">
        Note: Name, email and phone are requested only to validate human contact and enable response. Your data is
        kept private and not shared.
      </p>
    </main>
  )
}
