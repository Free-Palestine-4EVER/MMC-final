"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ImageLightboxProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function ImageLightbox({ src, alt, width, height, className = "" }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openLightbox = () => {
    setIsOpen(true)
  }

  const closeLightbox = () => {
    setIsOpen(false)
  }

  // Handle keyboard events for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeLightbox()
    }
    if (e.key === "Enter" || e.key === " ") {
      openLightbox()
    }
  }

  return (
    <>
      <div
        className={`cursor-pointer transition-all duration-300 hover:opacity-90 hover:shadow-lg ${className}`}
        onClick={openLightbox}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label={`View larger image of ${alt}`}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={className}
          style={{ pointerEvents: "auto" }}
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -right-4 -top-4 rounded-full bg-white p-2 text-black shadow-lg"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={width * 2} // Larger size for the lightbox
              height={height * 2}
              className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
