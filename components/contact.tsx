"use client";

import { useEffect, useState, useRef } from "react";
import {
	Mail,
	Phone,
	MapPin,
	Send,
	CheckCircle,
	AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

interface FormFields {
	name: string;
	email: string;
	message: string;
}

interface FormErrors {
	name?: string;
	email?: string;
	message?: string;
}

const initialState: FormFields = { name: "", email: "", message: "" };

const CONTACT_EMAIL =
	process.env.NEXT_PUBLIC_CONTACT_EMAIL || "alankjose18@gmail.com";
const FORMSPREE_ENDPOINT =
	process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
	"https://formspree.io/f/xanjbzda";

export default function Contact() {
	const [form, setForm] = useState<FormFields>(initialState);
	const [errors, setErrors] = useState<FormErrors>({});
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");
	const [isPending, setIsPending] = useState(false);

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: undefined });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsPending(true);
		setSuccess(false);
		setError("");
		setErrors({});

		// Simple client-side validation
		const newErrors: FormErrors = {};
		if (!form.name || form.name.length < 2)
			newErrors.name = "Name must be at least 2 characters";
		if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
			newErrors.email = "Please enter a valid email address";
		if (!form.message || form.message.length < 10)
			newErrors.message = "Message must be at least 10 characters";
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			setIsPending(false);
			return;
		}

		try {
			const res = await fetch(FORMSPREE_ENDPOINT, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});
			if (res.ok) {
				setSuccess(true);
				setForm(initialState);
			} else {
				setError("Failed to send message. Please try again later.");
			}
		} catch (err) {
			setError("Something went wrong. Please try again later.");
		}
		setIsPending(false);
	};

	return (
		<section
			id="contact"
			className="gradient-bg-animated section-padding text-white"
			ref={ref}
		>
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<motion.h2
						initial={{ opacity: 0, scale: 0.5 }}
						animate={
							isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
						}
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
						Ready to bring your project to life? Let's discuss how we can work
						together to create something amazing.
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
								animate={
									isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="text-2xl font-bold mb-6"
							>
								Get In Touch
							</motion.h3>
							<div className="space-y-4">
								{[
									{
										icon: Mail,
										text: CONTACT_EMAIL,
										href: `mailto:${CONTACT_EMAIL}`,
									},
									{
										icon: Phone,
										text: "9400218655",
										href: "tel:9400218655",
									},
									{ icon: MapPin, text: "Thrissur, Kerala", href: "https://maps.app.goo.gl/mfMMomJdXE6662Rt6" },
								].map((item, index) => (
									<motion.a
										key={index}
										href={item.href}
										initial={{ opacity: 0, x: -30 }}
										animate={
											isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
										}
										transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
										whileHover={{ x: 10, scale: 1.05 }}
										className="flex items-center cursor-pointer hover:text-white/80 transition-colors"
									>
										<motion.div
											animate={{ rotate: [0, 10, -10, 0] }}
											transition={{
												duration: 3,
												repeat: Number.POSITIVE_INFINITY,
												delay: index * 0.5,
											}}
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
										animate={
											isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
										}
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
						<form
							id="contact-form"
							onSubmit={handleSubmit}
							className="space-y-6"
						>
							{/* Name Field */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={
									isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.6, delay: 0.6 }}
							>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-2"
								>
									Your Name *
								</label>
								<motion.input
									type="text"
									id="name"
									name="name"
									required
									disabled={isPending}
									value={form.name}
									onChange={handleChange}
									whileFocus={{
										scale: 1.02,
										borderColor: "rgba(255, 255, 255, 0.8)",
									}}
									className={`w-full px-4 py-3 rounded-lg bg-white/20 border ${
										errors.name ? "border-red-400" : "border-white/30"
									} text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all disabled:opacity-50`}
									placeholder="Enter your name"
								/>
								{errors.name && (
									<motion.p
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										className="mt-1 text-sm text-red-300"
									>
										{errors.name}
									</motion.p>
								)}
							</motion.div>

							{/* Email Field */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={
									isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.6, delay: 0.7 }}
							>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-2"
								>
									Your Email *
								</label>
								<motion.input
									type="email"
									id="email"
									name="email"
									required
									disabled={isPending}
									value={form.email}
									onChange={handleChange}
									whileFocus={{
										scale: 1.02,
										borderColor: "rgba(255, 255, 255, 0.8)",
									}}
									className={`w-full px-4 py-3 rounded-lg bg-white/20 border ${
										errors.email ? "border-red-400" : "border-white/30"
									} text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all disabled:opacity-50`}
									placeholder="Enter your email"
								/>
								{errors.email && (
									<motion.p
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										className="mt-1 text-sm text-red-300"
									>
										{errors.email}
									</motion.p>
								)}
							</motion.div>

							{/* Message Field */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={
									isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.6, delay: 0.8 }}
							>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-2"
								>
									Your Message *
								</label>
								<motion.textarea
									id="message"
									name="message"
									required
									rows={5}
									disabled={isPending}
									value={form.message}
									onChange={handleChange}
									whileFocus={{
										scale: 1.02,
										borderColor: "rgba(255, 255, 255, 0.8)",
									}}
									className={`w-full px-4 py-3 rounded-lg bg-white/20 border ${
										errors.message ? "border-red-400" : "border-white/30"
									} text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none transition-all disabled:opacity-50`}
									placeholder="Tell me about your project..."
								/>
								{errors.message && (
									<motion.p
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										className="mt-1 text-sm text-red-300"
									>
										{errors.message}
									</motion.p>
								)}
							</motion.div>

							{/* Submit Button */}
							<motion.button
								type="submit"
								disabled={isPending}
								initial={{ opacity: 0, y: 20 }}
								animate={
									isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.6, delay: 1 }}
								whileHover={
									!isPending
										? {
												scale: 1.05,
												boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
											}
										: {}
								}
								whileTap={!isPending ? { scale: 0.95 } : {}}
								className="w-full bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isPending ? (
									<>
										<motion.div
											animate={{ rotate: 360 }}
											transition={{
												duration: 1,
												repeat: Number.POSITIVE_INFINITY,
												ease: "linear",
											}}
											className="w-5 h-5 border-2 border-teal-600 border-t-transparent rounded-full mr-2"
										/>
										Sending...
									</>
								) : (
									<>
										<motion.div
											animate={{ x: [0, 5, 0] }}
											transition={{
												duration: 1.5,
												repeat: Number.POSITIVE_INFINITY,
											}}
										>
											<Send className="mr-2" size={20} />
										</motion.div>
										Send Message
									</>
								)}
							</motion.button>
						</form>

						{/* Success/Error Messages */}
						<AnimatePresence>
							{success && (
								<motion.div
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center"
								>
									<CheckCircle className="w-5 h-5 text-green-400 mr-3" />
									<span className="text-green-100">
										Message sent successfully! I'll get back to you soon.
									</span>
								</motion.div>
							)}
							{error && (
								<motion.div
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center"
								>
									<AlertCircle className="w-5 h-5 text-red-400 mr-3" />
									<span className="text-red-100">{error}</span>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
