"use client";

import Image from "next/image";
import { Code, ArrowDown, Database, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: "easeOut",
		},
	},
};

export default function Hero() {
	return (
		<section
			id="about"
			className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 pt-16 overflow-hidden"
		>
			<div className="max-w-full mx-auto section-padding">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
				>
					<div className="space-y-8">
						<motion.div variants={itemVariants} className="space-y-4">
							<motion.p
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								className="text-lg text-gray-600 font-medium"
							>
								Hi there, I'm Alan
							</motion.p>
							<motion.h4
								style={{ fontSize: "70px", fontWeight: 900 }}
								className="text-6xl md:text-8xl font-black leading-none"
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1, delay: 0.4 }}
							>
								<motion.span
									className="gradient-text inline-block"
									initial={{ opacity: 0, rotateX: -90 }}
									animate={{ opacity: 1, rotateX: 0 }}
									transition={{ duration: 0.8, delay: 0.6 }}
								>
									FULL STACK DEVELOPER
								</motion.span>
								<br />
								<motion.span
									className="gradient-text inline-block"
									initial={{ opacity: 0, rotateX: -90 }}
									animate={{ opacity: 1, rotateX: 0 }}
									transition={{ duration: 0.8, delay: 0.8 }}
								>
									&
								</motion.span>
								<motion.span
									className="gradient-text inline-block"
									initial={{ opacity: 0, rotateX: -90 }}
									animate={{ opacity: 1, rotateX: 0 }}
									transition={{ duration: 0.8, delay: 0.8 }}
								>
									DATA SCIENTIST
								</motion.span>
							</motion.h4>
						</motion.div>

						<motion.div
							variants={itemVariants}
							className="flex items-center space-x-6"
						>
							<motion.div
								animate={{ rotate: 360 }}
								transition={{
									duration: 20,
									repeat: Number.POSITIVE_INFINITY,
									ease: "linear",
								}}
							>
								<Code className="text-teal-600" size={24} />
							</motion.div>
							<motion.div
								animate={{ scale: [1, 1.2, 1] }}
								transition={{
									duration: 3,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
								}}
							>
								<Database className="text-blue-600" size={24} />
							</motion.div>
							<motion.div
								animate={{ y: [0, -5, 0] }}
								transition={{
									duration: 2,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
								}}
							>
								<BarChart3 className="text-purple-600" size={24} />
							</motion.div>
						</motion.div>
						<motion.div
							variants={itemVariants}
							className="flex items-center space-x-4"
						>
							<p className="text-gray-600 max-w-md">
								Merging the art of full-stack development with the science of data —
								creating smart, scalable, and meaningful digital experiences.
							</p>
						</motion.div>

						<motion.div
							variants={itemVariants}
							className="flex flex-col sm:flex-row gap-4"
						>
							<motion.a
								href="#works"
								whileHover={{
									scale: 1.05,
									boxShadow: "0 10px 25px rgba(20, 184, 166, 0.3)",
								}}
								whileTap={{ scale: 0.95 }}
								className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-center"
							>
								View My Work
							</motion.a>
							<motion.a
								href="#contact"
								whileHover={{
									scale: 1.05,
									backgroundColor: "rgb(13, 148, 136)",
									color: "white",
								}}
								whileTap={{ scale: 0.95 }}
								className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold transition-all text-center"
							>
								Get In Touch
							</motion.a>
						</motion.div>
					</div>

					<motion.div
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
						className="relative"
					>
						<div className="relative w-full max-w-md mx-auto">
							<motion.div
								animate={{ rotate: [0, 6, -6, 6, 0] }}
								transition={{
									duration: 8,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
								}}
								className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-3xl"
							/>
							<motion.div
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.7 }}
								className="relative bg-white rounded-3xl p-2 shadow-2xl floating"
							>
								<Image
									src="/images/Alan.png"
									alt="Alan - Frontend Developer"
									width={500}
									height={500}
									className="rounded-2xl object-cover"
								/>
							</motion.div>
						</div>

						{/* Floating elements */}
						<motion.div
							animate={{ y: [-10, 10, -10] }}
							transition={{
								duration: 4,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							}}
							className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-70"
						/>
						<motion.div
							animate={{ y: [10, -10, 10] }}
							transition={{
								duration: 3,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
								delay: 1,
							}}
							className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-70"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1.2 }}
					className="flex justify-center mt-12"
				>
					<motion.a
						href="#works"
						animate={{ y: [0, 10, 0] }}
						transition={{
							duration: 2,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
						whileHover={{ scale: 1.2 }}
						className="text-teal-600 hover:text-teal-700 transition-colors"
					>
						<ArrowDown size={32} />
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
}
