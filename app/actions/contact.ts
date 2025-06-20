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

        // Send to Formspree (Server Action)
        if (process.env.FORMSPREE_ENDPOINT) {
            const res = await fetch(process.env.FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            })
            if (!res.ok) {
                return {
                    success: false,
                    error: "Failed to send message. Please try again later.",
                }
            }
            return { success: true }
        }

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



    // Option 3: Using fetch to send to external service (like Formspree)
    if (process.env.FORMSPREE_ENDPOINT) {
        await fetch(process.env.FORMSPREE_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        })
        return
    }

    // Fallback: Log to console (development only)
    console.log("Contact form submission:", { name, email, message })
}
