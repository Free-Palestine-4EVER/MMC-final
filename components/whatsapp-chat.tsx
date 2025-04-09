"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function WhatsAppChat() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Listen for the custom event from the header component
    const handleMenuStateChange = (event: CustomEvent) => {
      setIsMenuOpen(event.detail.isOpen)
    }

    // Add event listener
    window.addEventListener("menuStateChange", handleMenuStateChange as EventListener)

    // Clean up
    return () => {
      window.removeEventListener("menuStateChange", handleMenuStateChange as EventListener)
    }
  }, [])

  // Don't render the button when the menu is open
  if (isMenuOpen) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://wa.link/mwcxbb"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Chat on WhatsApp"
      >
        <Image src="/images/whatsapp.png" alt="WhatsApp" width={48} height={48} className="h-12 w-12" />
      </a>
    </div>
  )
}
