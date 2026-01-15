const API_URL = import.meta.env.VITE_API_URL || ""

export async function sendContactForm(payload) {
  const url = `${API_URL}/contact`
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.message || "Failed to send contact form")
  return data
}

export default sendContactForm
