"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
	{
		id: 1,
		title: "Product Recommendation System",
		description: "Machine Learning based Product recommendation system",
		image: "/images/project1.png",
		tags: ["Machine Learning", "React", "JavaScript", "Python", "Fast Api"],
		// liveUrl: "#",
		githubUrl:
			"https://github.com/alan3113/Recommendation-System-Classification-",
	},
	{
		id: 2,
		title: "Content Moderation System",
		description:
			"Application for content moderation of text and image data using Deep Learning",
		image: "/images/contentModeration.jpg",
		tags: [
			"Deep Learning",
			"Image Processing",
			"React",
			"Text Classification",
			"Python",
			"Fast API",
		],
		liveUrl: "#",
		githubUrl: "#",
	},
	{
		id: 3,
		title: "Time Series Problems ",
		description:
			"Completed various times series problems like Stock & Sale, Web Traffic, Customer Churn predictions etc",
		image: "/images/timeSeries.jpg",
		tags: ["Deep Learning", "ML", "Numpy", "Python", "Data Science", "Pandas"],
		liveUrl: "#",
		githubUrl: "#",
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

export default function Works() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="works" className="bg-white section-padding" ref={ref}>
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
						WORKS
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-xl text-gray-600 max-w-2xl mx-auto"
					>
						Here are some of my recent projects that showcase my skills and passion
						for frontend development.
					</motion.p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							variants={itemVariants}
							whileHover={{ y: -10, scale: 1.02 }}
							className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
						>
							<div className="relative overflow-hidden">
								<motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
									<Image
										src={project.image || "/placeholder.svg"}
										alt={project.title}
										width={400}
										height={300}
										className="w-full h-48 object-cover"
									/>
								</motion.div>
								<motion.div
									initial={{ opacity: 0 }}
									whileHover={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
									className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4"
								>
									<motion.a
										href={project.liveUrl}
										whileHover={{ scale: 1.1, rotate: 5 }}
										whileTap={{ scale: 0.9 }}
										className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
									>
										<ExternalLink size={20} />
									</motion.a>
									<motion.a
										href={project.githubUrl}
										whileHover={{ scale: 1.1, rotate: -5 }}
										whileTap={{ scale: 0.9 }}
										className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
									>
										<Github size={20} />
									</motion.a>
								</motion.div>
							</div>

							<div className="p-6">
								<motion.h3
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="text-xl font-bold text-gray-900 mb-2"
								>
									{project.title}
								</motion.h3>
								<motion.p
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
									className="text-gray-600 mb-4"
								>
									{project.description}
								</motion.p>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
									className="flex flex-wrap gap-2"
								>
									{project.tags.map((tag, tagIndex) => (
										<motion.span
											key={tag}
											initial={{ opacity: 0, scale: 0 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
											whileHover={{ scale: 1.1 }}
											className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium"
										>
											{tag}
										</motion.span>
									))}
								</motion.div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
