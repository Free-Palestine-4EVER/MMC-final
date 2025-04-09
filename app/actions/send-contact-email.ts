"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !message) {
      return { success: false, error: "Please fill out all required fields" }
    }

    // Create email content
    const emailContent = `
      New Contact Form Submission from Wadi Rum Website
      
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `

    // Send the email
    const { data, error } = await resend.emails.send({
      from: "Wadi Rum Contact <contact@wadirum-adventures.com>",
      to: ["mohammed.mutlak.camp@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      reply_to: email,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: "Failed to send email" }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error in sendContactEmail:", error)
    return { success: false, error: "An unexpected error occurred" }
  }
}
