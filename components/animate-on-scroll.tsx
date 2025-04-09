"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimateOnScrollProps {
  children: React.ReactNode
  animation?: "fade-in" | "slide-from-left" | "slide-from-right"
  delay?: number
}

export function AnimateOnScroll({ children, animation = "fade-in", delay = 0 }: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const animationClass = isVisible ? animation : ""

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${animationClass}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: !isVisible
          ? animation === "slide-from-left"
            ? "translateX(-50px)"
            : animation === "slide-from-right"
              ? "translateX(50px)"
              : "translateY(20px)"
          : "translate(0, 0)",
      }}
    >
      {children}
    </div>
  )
}
