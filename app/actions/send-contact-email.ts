"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  try {
    console.log("Starting email send process...")

    // Log the API key (partially masked for security)
    const apiKey = process.env.RESEND_API_KEY || ""
    const maskedKey = apiKey.substring(0, 4) + "..." + apiKey.substring(apiKey.length - 4)
    console.log(`Using Resend API key: ${maskedKey}`)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    console.log(`Form data received - Name: ${name}, Email: ${email}, Message length: ${message?.length || 0}`)

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields")
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

    console.log("Preparing to send email to mohammed.mutlak.camp@gmail.com")

    // Send the email
    try {
      const { data, error } = await resend.emails.send({
        from: "Wadi Rum Contact <onboarding@resend.dev>", // Using Resend's verified domain
        to: ["mohammed.mutlak.camp@gmail.com"],
        subject: `New Contact Form Submission from ${name}`,
        text: emailContent,
        replyTo: email,
      })

      if (error) {
        console.error("Resend API returned an error:", error)
        return { success: false, error: `Failed to send email: ${error.message}` }
      }

      console.log("Email sent successfully with ID:", data?.id)
      return { success: true, data }
    } catch (sendError) {
      console.error("Error during Resend API call:", sendError)
      return {
        success: false,
        error: `Error sending email: ${sendError instanceof Error ? sendError.message : "Unknown error"}`,
      }
    }
  } catch (error) {
    console.error("Unexpected error in sendContactEmail:", error)
    return {
      success: false,
      error: `An unexpected error occurred: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}
