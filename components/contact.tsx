"use client"

import { useActionState, useEffect } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { submitContactForm, type ContactFormState } from "@/app/actions/contact"

const initialState: ContactFormState = {}

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Reset form on successful submission
  useEffect(() => {
    if (state.success) {
      const form = document.getElementById("contact-form") as HTMLFormElement
      if (form) {
        form.reset()
      }
    }
  }, [state.success])

  return (
    <section id="contact" className="gradient-bg-animated section-padding text-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            HAVE AN IDEA? TELL ME ABOUT IT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Ready to bring your project to life? Let's discuss how we can work together to create something amazing.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl font-bold mb-6"
              >
                Get In Touch
              </motion.h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: "albert@example.com", href: "mailto:albert@example.com" },
                  { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
                  { icon: MapPin, text: "San Francisco, CA", href: "#" },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    className="flex items-center cursor-pointer hover:text-white/80 transition-colors"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    >
                      <item.icon className="mr-4" size={24} />
                    </motion.div>
                    <span>{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="text-xl font-semibold mb-4">Why Work With Me?</h4>
              <ul className="space-y-2 text-white/90">
                {[
                  "Full-stack development expertise",
                  "Data science and ML integration",
                  "Clean, maintainable code",
                  "Responsive design guaranteed",
                  "Ongoing support and maintenance",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    • {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            {/* Success/Error Messages */}
            <AnimatePresence>
              {state.success && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-green-100">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {state.error && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                  <span className="text-red-100">{state.error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form id="contact-form" action={formAction} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name *
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isPending}
                  whileFocus={{ scale: 1.02, borderColor: "rgba(255, 255, 255, 0.8)" }}
                  className={`w-full px-4 py-3 rounded-lg bg-white/20 border ${
                    state.errors?.name ? "border-red-400" : "border-white/30"
                  } text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all disabled:opacity-50`}
                  placeholder="Enter your name"
                />
                {state.errors?.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-300"
                  >
                    {state.errors.name[0]}
                  </motion.p>
                )}
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email *
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isPending}
                  whileFocus={{ scale: 1.02, borderColor: "rgba(255, 255, 255, 0.8)" }}
                  className={`w-full px-4 py-3 rounded-lg bg-white/20 border ${
                    state.errors?.email ? "border-red-400" : "border-white/30"
                  } text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all disabled:opacity-50`}
                  placeholder="Enter your email"
                />
                {state.errors?.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-300"
                  >
                    {state.errors.email[0]}
                  </motion.p>
                )}
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  disabled={isPending}
                  whileFocus={{ scale: 1.02, borderColor: "rgba(255, 255, 255, 0.8)" }}
                  className={`w-full px-4 py-3 rounded-lg bg-white/20 border ${
                    state.errors?.message ? "border-red-400" : "border-white/30"
                  } text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none transition-all disabled:opacity-50`}
                  placeholder="Tell me about your project..."
                />
                {state.errors?.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-300"
                  >
                    {state.errors.message[0]}
                  </motion.p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isPending}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={!isPending ? { scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" } : {}}
                whileTap={!isPending ? { scale: 0.95 } : {}}
                className="w-full bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-5 h-5 border-2 border-teal-600 border-t-transparent rounded-full mr-2"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Send className="mr-2" size={20} />
                    </motion.div>
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
