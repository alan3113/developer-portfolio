"use client"

import { Heart, Code2, Database, Brain, BookOpen, Target, Lightbulb, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Full-Stack Development",
    description: "Building complete web applications from frontend to backend with modern technologies.",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database Design",
    description: "Designing efficient database schemas and optimizing queries for performance.",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Data Science & ML",
    description: "Extracting insights from data and building predictive models to solve business problems.",
  },
]

const journeyHighlights = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Continuous Learning",
    description: "Always exploring new technologies in both development and data science",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Problem Solver",
    description: "Love tackling complex challenges with code and data-driven solutions",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation Focused",
    description: "Bringing AI and ML capabilities to web applications",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "End-to-End Mindset",
    description: "From data collection to user interface, I build complete solutions",
    color: "from-orange-500 to-red-500",
  },
]

const techStack = [
  { name: "React", logo: "⚛️", color: "bg-blue-100 text-blue-600" },
  { name: "Python", logo: "🐍", color: "bg-green-100 text-green-600" },
  { name: "Node.js", logo: "🟢", color: "bg-green-100 text-green-700" },
  { name: "PostgreSQL", logo: "🐘", color: "bg-blue-100 text-blue-700" },
  { name: "AI & ML", logo: "🧠", color: "bg-orange-100 text-orange-600" },
  { name: "Golang", logo: "🐹", color: "bg-yellow-100 text-yellow-600" },
]

const learningPath = [
  {
    phase: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    status: "mastered",
    color: "bg-green-500",
  },
  {
    phase: "Backend & Databases",
    skills: ["Node.js", "Python", "SQL", "APIs"],
    status: "proficient",
    color: "bg-blue-500",
  },
  {
    phase: "Data Science",
    skills: ["Pandas", "NumPy", "Scikit-learn", "ML"],
    status: "developing",
    color: "bg-purple-500",
  },
  {
    phase: "Advanced ML & AI",
    skills: ["Deep Learning", "NLP", "Computer Vision"],
    status: "exploring",
    color: "bg-orange-500",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="bg-gradient-to-br from-emerald-50 to-teal-50 section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-black gradient-text"
            >
              PASSIONATE ABOUT TECHNOLOGY
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            I bridge the gap between development and data science, creating intelligent applications that not only work
            beautifully but also learn and adapt. Every project is an opportunity to solve problems with code and data.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="text-teal-600 mb-4"
              >
                {skill.icon}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="text-xl font-bold text-gray-900 mb-3"
              >
                {skill.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="text-gray-600"
              >
                {skill.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                My Development Journey
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-gray-600 mb-6"
              >
                Started with web development and discovered the power of data science. Now I combine both worlds to
                create intelligent applications that can learn, predict, and provide valuable insights while delivering
                exceptional user experiences.
              </motion.p>
              <div className="space-y-4">
                {[
                  "Full-stack developer with data science expertise",
                  "Building ML-powered web applications",
                  "Passionate about clean code and meaningful data",
                  "Always learning cutting-edge technologies",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                    className="flex items-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                      className="w-4 h-4 bg-teal-600 rounded-full mr-4"
                    />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Visual Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="space-y-6"
            >
              {/* What Drives Me */}
              <div className="grid grid-cols-2 gap-4">
                {journeyHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 shadow-lg border border-gray-100"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                      className={`inline-flex p-2 rounded-xl bg-gradient-to-r ${highlight.color} text-white mb-3`}
                    >
                      {highlight.icon}
                    </motion.div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{highlight.title}</div>
                    <div className="text-xs text-gray-600">{highlight.description}</div>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Code2 className="w-5 h-5 mr-2 text-teal-600" />
                  Core Tech Stack
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`${tech.color} rounded-lg p-3 text-center transition-all duration-200`}
                    >
                      <div className="text-lg mb-1">{tech.logo}</div>
                      <div className="text-xs font-medium">{tech.name}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Learning Path */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 2 }}
                className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-100"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Rocket className="w-5 h-5 mr-2 text-teal-600" />
                  Skill Development Path
                </h4>
                <div className="space-y-3">
                  {learningPath.map((phase, index) => (
                    <motion.div
                      key={phase.phase}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 2.2 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-3 h-3 ${phase.color} rounded-full`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">{phase.phase}</span>
                          <span className="text-xs text-gray-500 capitalize">{phase.status}</span>
                        </div>
                        <div className="text-xs text-gray-600">{phase.skills.join(", ")}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
