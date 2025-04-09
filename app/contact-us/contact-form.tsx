"use client"

import { useFormStatus } from "react-dom"

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-10 items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  )
}

export function FormStatus({ formState }: { formState: any }) {
  if (!formState) return null

  return (
    <div
      className={`p-3 rounded-md mt-4 ${formState.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
    >
      <p>{formState.message}</p>
      {!formState.success && (
        <p className="text-xs mt-2">
          If you continue to experience issues, please contact us directly at{" "}
          <a href="https://wa.link/grbinm" className="underline font-medium" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>{" "}
          or by email at mohammed.mutlak.camp@gmail.com
        </p>
      )}
    </div>
  )
}
