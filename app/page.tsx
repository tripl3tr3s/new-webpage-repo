import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Certifications from "@/components/certifications"
import Research from "@/components/research"
import Writing from "@/components/writing"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/90">
      <Header />
      <Hero />
      <About />
      <Certifications />
      <Research />
      <Writing />
      <Contact />
      <Footer />
    </main>
  )
}
