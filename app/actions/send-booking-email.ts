"use server"

import { Resend } from "resend"

// Fallback mechanism for development
const getEmailService = () => {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.warn("⚠️ RESEND_API_KEY not found. Using mock email service.")
    return {
      emails: {
        send: async (options: any) => {
          console.log("📧 MOCK EMAIL:", options)
          return {
            data: { id: "mock-email-id" },
            error: null,
          }
        },
      },
    }
  }

  try {
    return new Resend(apiKey)
  } catch (error) {
    console.error("Failed to initialize Resend:", error)
    throw error
  }
}

// Get email service (real or mock)
const emailService = getEmailService()

export async function sendBookingEmail(formData: any) {
  try {
    console.log("Starting email sending process...")

    // Format the booking details for the email
    const formatBookingDetails = (data: any) => {
      const { name, email, phone, date, numPeople, accommodation, tours, totalPrice, message } = data

      // Format the date
      const formattedDate = date
        ? new Date(date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "Not specified"

      // Format tours
      const formattedTours = Array.isArray(tours)
        ? tours.map((tour: string) => `- ${tour}`).join("\n")
        : "None selected"

      return `
Name: ${name}
Email: ${email}
Phone: ${phone}
Arrival Date: ${formattedDate}
Number of People: ${numPeople}
Accommodation: ${accommodation || "None selected"}
Tours:
${formattedTours}

Total Price: ${totalPrice} JOD

Special Requests:
${message || "None"}
      `
    }

    const emailContent = formatBookingDetails(formData)
    console.log("Email content prepared:", emailContent)

    // Send the email
    console.log("Sending email to: mohammed.mutlak.camp@gmail.com")
    const { data, error } = await emailService.emails.send({
      from: "Wadi Rum Booking <onboarding@resend.dev>",
      to: "mohammed.mutlak.camp@gmail.com",
      subject: `New Booking Request from ${formData.name}`,
      text: `
New booking request from your website:

${emailContent}
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: `Failed to send booking email: ${error.message}` }
    }

    console.log("Email sent successfully with ID:", data?.id)
    return { success: true, data }
  } catch (error: any) {
    console.error("Exception in sendBookingEmail:", error)
    return {
      success: false,
      error: `An unexpected error occurred: ${error?.message || "Unknown error"}`,
    }
  }
}
