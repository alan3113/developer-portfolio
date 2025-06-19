"use client";

import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });
  const links=[
		{ Icon: Github, url: "https://github.com/alan3113" },
		{ Icon: Linkedin, url: "https://www.linkedin.com/in/alan-jose-28a504304/" },
	]

	return (
		<footer className="bg-gray-900 text-white section-padding" ref={ref}>
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8 }}
					className="grid md:grid-cols-3 gap-8 mb-8"
				>
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<motion.h3
							whileHover={{ scale: 1.05 }}
							className="text-2xl font-bold text-teal-400 mb-4"
						>
							Alan
						</motion.h3>
						<p className="text-gray-400 mb-4">
							Full Stack Developer and Data Scientist with a passion for crafting
							robust web solutions and extracting meaningful insights from data to
							drive business outcomes.
						</p>
						<div className="flex space-x-4">
							{links.map(({ Icon, url }, index) => (
								<motion.a
									key={index}
									href={url}
                  target="_blank"
                  rel="noopener noreferrer"
									initial={{ opacity: 0, scale: 0 }}
									animate={
										isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
									}
									transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
									whileHover={{ scale: 1.2, rotate: 5, color: "#14b8a6" }}
									whileTap={{ scale: 0.9 }}
									className="text-gray-400 hover:text-teal-400 transition-colors"
								>
									<Icon size={24} />
								</motion.a>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2 text-gray-400">
							{["About", "Works", "Skills", "Contact"].map((item, index) => (
								<motion.li
									key={item}
									initial={{ opacity: 0, x: -20 }}
									animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
									transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
								>
									<motion.a
										href={`#${item.toLowerCase()}`}
										whileHover={{ x: 5, color: "#14b8a6" }}
										className="hover:text-teal-400 transition-colors"
									>
										{item}
									</motion.a>
								</motion.li>
							))}
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<h4 className="text-lg font-semibold mb-4">Services</h4>
						<ul className="space-y-2 text-gray-400">
							{[
								"Full-Stack Development",
								"React Applications",
								"Data Analysis & Predictions",
								"AI & ML based Solutions",
							].map((item, index) => (
								<motion.li
									key={item}
									initial={{ opacity: 0, x: 20 }}
									animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
									transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
									whileHover={{ x: -5 }}
								>
									{item}
								</motion.li>
							))}
						</ul>
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6, delay: 1 }}
					className="border-t border-gray-800 pt-8 text-center"
				>
					<p className="text-gray-400 flex items-center justify-center">
						Made with{" "}
						<motion.span
							animate={{ scale: [1, 1.3, 1] }}
							transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
							className="mx-2"
						>
							<Heart className="text-red-500" size={16} />
						</motion.span>{" "}
						by Alan © 2025
					</p>
				</motion.div>
			</div>
		</footer>
	);
}
