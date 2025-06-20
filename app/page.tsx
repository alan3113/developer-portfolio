import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Works from "@/components/works"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Works />
      <About />
      <Skills/>
      <Contact />
      <Footer />
    </main>
  )
}
