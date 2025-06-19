export const SITE_CONFIG = {
  name: "Alan - Frontend Developer",
  description: "Passionate frontend developer specializing in modern web applications",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
  author: "Alan",
  email: "alankjose18@gmail.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  social: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/yourusername",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/yourusername",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/yourusername",
  },
}

export const NAVIGATION_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Testimonial", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Git",
  "Figma",
  "Responsive Design",
]
