"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  description?: string
  faqs: FAQ[]
  className?: string
}

export function FAQSection({ title, description, faqs, className }: FAQSectionProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">{title}</h2>
          {description && <p className="mb-8 text-lg text-gray-600">{description}</p>}
        </div>

        <div className="mx-auto mt-8 max-w-3xl divide-y">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: FAQ) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-medium text-gray-900 focus:outline-none"
      >
        <span className="text-lg font-semibold">{question}</span>
        <ChevronDown className={cn("h-5 w-5 text-amber-600 transition-transform", isOpen && "rotate-180")} />
      </button>
      <div
        className={cn(
          "mt-2 text-gray-600 overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <p className="py-2">{answer}</p>
      </div>
    </div>
  )
}
