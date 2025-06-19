"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
	Code2,
	Palette,
	Database,
	Globe,
	Smartphone,
	Zap,
	Settings,
  Brain,
} from "lucide-react";

const skillCategories = [
	{
		title: "DataScience & ML",
		icon: <Palette className="w-6 h-6" />,
		color: "from-purple-500 to-pink-500",
		skills: [
			{ name: "Data Science", level: 90, icon: "📊" },
			{ name: "Data Analysis", level: 90, icon: "📈" },
			{ name: "Machine Learning", level: 85, icon: "🤖" },
			{ name: "Deep Learning", level: 75, icon: "🧠" },
			{ name: "Pandas & Numpy", level: 90, icon: "🐼" },
			{ name: "Image Processing", level: 90, icon: "🖼️" },
			{ name: "Text Processing", level: 90, icon: "📝" },
		],
	},
	{
		title: "Frontend Development",
		icon: <Code2 className="w-6 h-6" />,
		color: "from-blue-500 to-cyan-500",
		skills: [
			{ name: "React", level: 90, icon: "⚛️" },
			{ name: "Angular", level: 80, icon: "🅰️" },
			{ name: "TypeScript", level: 88, icon: "🔷" },
			{ name: "JavaScript", level: 92, icon: "📟" },
			{ name: "HTML5", level: 95, icon: "🌐" },
			{ name: "CSS3", level: 90, icon: "🎨" },
			{ name: "Tailwind CSS", level: 90, icon: "🌬️" },
		],
	},
	{
		title: "Backend & Database",
		icon: <Database className="w-6 h-6" />,
		color: "from-green-500 to-emerald-500",
		skills: [
			{ name: "Node.js", level: 80, icon: "🟩" },
			{ name: "Golang", level: 80, icon: "🐹" },
			{ name: "Python", level:85, icon: "🐍" },
			{ name: "PostgreSQL", level: 80, icon: "🐘" },
			{ name: "Fast API", level: 80, icon: "⚡️" },
			{ name: "Java", level: 70, icon: "☕" },
		],
	},
	{
		title: "Tools & Technologies",
		icon: <Settings className="w-6 h-6" />,
		color: "from-orange-500 to-red-500",
		skills: [
			{ name: "Git & GitHub", level: 90, icon: "🐙" },
			{ name: "VS Code", level: 95, icon: "🧠" },
			{ name: "Webpack", level: 75, icon: "📦" },
			{ name: "Vite", level: 85, icon: "⚡️" },
			{ name: "AI Tools", level: 90, icon: "🧠" },
			{ name: "Vercel", level: 80, icon: "▲" },
		],
	},
];

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
	hidden: { y: 50, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: "easeOut",
		},
	},
};

export default function Skills() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="skills" className="bg-gray-50 section-padding" ref={ref}>
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
						className="text-5xl md:text-6xl font-black gradient-text mb-6"
					>
						SKILLS & EXPERTISE
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-xl text-gray-600 max-w-2xl mx-auto"
					>
						A comprehensive overview of my technical skills and proficiency levels
						across different technologies and tools.
					</motion.p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="grid lg:grid-cols-2 gap-8 mb-16"
				>
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							variants={itemVariants}
							whileHover={{ y: -5, scale: 1.02 }}
							className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
						>
							<div className="flex items-center mb-6">
								<motion.div
									initial={{ scale: 0, rotate: -180 }}
									animate={
										isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
									}
									transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.1 }}
									className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4`}
								>
									{category.icon}
								</motion.div>
								<motion.h3
									initial={{ opacity: 0, x: -20 }}
									animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
									transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
									className="text-2xl font-bold text-gray-900"
								>
									{category.title}
								</motion.h3>
							</div>

							<div className="space-y-4">
								{category.skills.map((skill, skillIndex) => (
									<motion.div
										key={skill.name}
										initial={{ opacity: 0, x: -30 }}
										animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
										transition={{
											duration: 0.6,
											delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05,
										}}
										className="group"
									>
										<div className="flex items-center justify-between mb-2">
											<div className="flex items-center">
												<span className="text-lg mr-2">{skill.icon}</span>
												<span className="font-medium text-gray-800">{skill.name}</span>
											</div>
											<motion.span
												initial={{ opacity: 0 }}
												animate={isInView ? { opacity: 1 } : { opacity: 0 }}
												transition={{
													duration: 0.4,
													delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05,
												}}
												className="text-sm font-semibold text-gray-600"
											>
												{skill.level}%
											</motion.span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
											<motion.div
												initial={{ width: 0 }}
												animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
												transition={{
													duration: 1.2,
													delay: 1 + categoryIndex * 0.1 + skillIndex * 0.05,
													ease: "easeOut",
												}}
												className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
											>
												<motion.div
													animate={{ x: [0, 10, 0] }}
													transition={{
														duration: 2,
														repeat: Number.POSITIVE_INFINITY,
														ease: "easeInOut",
														delay: 1.5 + categoryIndex * 0.1 + skillIndex * 0.05,
													}}
													className="absolute right-0 top-0 w-2 h-full bg-white/30 rounded-full"
												/>
											</motion.div>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Additional Skills Overview */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
				>
					<div className="text-center mb-8">
						<motion.h3
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.6, delay: 1 }}
							className="text-3xl font-bold text-gray-900 mb-4"
						>
							What I Bring to Your Project
						</motion.h3>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.6, delay: 1.2 }}
							className="text-gray-600 max-w-2xl mx-auto"
						>
							Beyond technical skills, I bring passion, creativity, and a commitment to
							delivering exceptional user experiences.
						</motion.p>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{[
							{
								icon: <Zap className="w-8 h-8" />,
								title: "Performance Focused",
								description: "Optimized code and fast-loading applications",
								color: "from-yellow-400 to-orange-500",
							},
							{
								icon: <Brain className="w-8 h-8" />,
								title: "Data-Driven",
								description:
									"Building intelligent systems powered by data, analytics, and machine learning.",
								color: "from-purple-500 to-indigo-500",
							},

							{
								icon: <Globe className="w-8 h-8" />,
								title: "Modern Standards",
								description: "Following latest web standards and best practices",
								color: "from-purple-400 to-pink-500",
							},
						].map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 30 }}
								animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
								transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
								whileHover={{ y: -5, scale: 1.05 }}
								className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
							>
								<motion.div
									animate={{ rotate: [0, 10, -10, 0] }}
									transition={{
										duration: 4,
										repeat: Number.POSITIVE_INFINITY,
										delay: index * 0.5,
									}}
									className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4`}
								>
									{feature.icon}
								</motion.div>
								<h4 className="text-xl font-semibold text-gray-900 mb-2">
									{feature.title}
								</h4>
								<p className="text-gray-600">{feature.description}</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
