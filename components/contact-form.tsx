"use client"

import { useState } from "react"
import { sendContactEmail } from "@/app/actions/send-contact-email" // Updated import path

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormStatus({})

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setFormStatus({
          success: true,
          message: "Your message has been sent successfully! We'll get back to you soon.",
        })
        // Reset the form
        const form = document.getElementById("contact-form") as HTMLFormElement
        if (form) form.reset()
      } else {
        setFormStatus({
          success: false,
          message: result.error || "Failed to send your message. Please try again.",
        })
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
      console.error("Contact form error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form id="contact-form" action={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-left">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-left">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
        ></textarea>
      </div>

      {formStatus.message && (
        <div
          className={`p-3 rounded-md ${formStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
        >
          {formStatus.message}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-75"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  )
}
