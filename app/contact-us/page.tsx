"use client"

import Image from "next/image"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { sendContactEmail } from "@/app/actions/send-contact-email"
import { useState } from "react"
import { SubmitButton, FormStatus } from "./contact-form"

export default function ContactPage() {
  const [formState, setFormState] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  async function handleSubmit(formData: FormData) {
    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setFormState({
          success: true,
          message: "Your message has been sent successfully! We'll get back to you soon.",
        })
        // Reset the form
        const form = document.getElementById("contact-form") as HTMLFormElement
        if (form) form.reset()
      } else {
        setFormState({
          success: false,
          message: result.error || "Failed to send your message. Please try again.",
        })
      }
    } catch (error) {
      setFormState({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
      console.error("Contact form error:", error)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">Contact Us</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions about our tours or need help planning your Wadi Rum adventure? We&apos;re here to help!
                  Fill out the form and we&apos;ll get back to you as soon as possible.
                </p>
                <div className="space-y-2">
                  <h3 className="font-semibold">Contact Information</h3>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-4 w-4 text-amber-600" />
                    <span>+962777424837</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MailIcon className="h-4 w-4 text-amber-600" />
                    <span>mohammed.mutlak.camp@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-4 w-4 text-amber-600" />
                    <span>Wadi Rum Village, Jordan</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-amber-600"
                    >
                      <FacebookIcon className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-amber-600"
                    >
                      <InstagramIcon className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-amber-600"
                    >
                      <TwitterIcon className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4 rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Send Us a Message</h3>
                <form id="contact-form" action={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>
                  <SubmitButton />
                  <FormStatus formState={formState} />
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Find Us in Wadi Rum</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our camp is located in the heart of Wadi Rum, surrounded by stunning desert landscapes and ancient
                  rock formations.
                </p>
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/images/jordan-map.jpg"
                  alt="Map of Jordan showing Wadi Rum location"
                  width={800}
                  height={450}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppChat />
    </div>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
