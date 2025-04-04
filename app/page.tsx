import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Research from "@/components/research"
import Publications from "@/components/publications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Header />
      <Hero />
      <About />
      <Research />
      <Publications />
      <Contact />
      <Footer />
    </main>
  )
}

