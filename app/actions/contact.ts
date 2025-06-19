"use server"

import { z } from "zod"

// Contact form schema for validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
})

export type ContactFormData = z.infer<typeof contactSchema>

export interface ContactFormState {
  success?: boolean
  error?: string
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
  }
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  try {
    // Extract form data
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    // Validate the data
    const validatedData = contactSchema.safeParse(rawData)

    if (!validatedData.success) {
      return {
        success: false,
        errors: validatedData.error.flatten().fieldErrors,
      }
    }

    const { name, email, message } = validatedData.data

    // Here you can choose different methods to handle the form submission:

    // Method 1: Send email using a service like Resend, SendGrid, or Nodemailer
    await sendEmail({ name, email, message })

    // Method 2: Save to database
    // await saveToDatabase({ name, email, message })

    // Method 3: Send to external service like Formspree
    // await sendToFormspree({ name, email, message })

    return {
      success: true,
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    }
  }
}

// Email sending function using Resend (you can replace with your preferred service)
async function sendEmail({ name, email, message }: ContactFormData) {
  // Option 1: Using Resend (recommended)
  if (process.env.RESEND_API_KEY) {
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: "contact@yourdomain.com", // Replace with your verified domain
      to: process.env.CONTACT_EMAIL || "albert@example.com",
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })
    return
  }



  // Fallback: Log to console (development only)
  console.log("Contact form submission:", { name, email, message })
}
