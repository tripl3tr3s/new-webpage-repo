"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, ExternalLink } from "lucide-react"

export default function Publications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const publications = [
    {
      title: "How to spot local market bottoms with Data.",
      journal: "Macro, on-chian and social data analysis tools.",
      year: 2025,
      link: "https://docs.google.com/document/d/e/2PACX-1vQN6k3vqjq8jraYzvwWvHgr7vMSkOC-sLxIUuUpob-u8k6r1pHAQDFvkV2VuAWQEFCWkkJ1BFYErfVc/pub",
    },
    {
      title: "How in the world BNB is at ATH?",
      journal: "BNB ecosystem Assessment.",
      year: 2024,
      link: "https://docs.google.com/document/d/e/2PACX-1vRVg4Ir_mafKgxc2GZixv6pKSDjilH1AlLCr_DzsPFN10anWUHEXC9zZ9Kkz7NvaKTs6CTK-UIQRyp8/pub",
    },
    {
      title: "It's time to buy $SEI? For and Against Case.",
      journal: "Assessing background, tokenomics, investment thesis and a list of pros and cons for buying $SEI.",
      year: 2024,
      link: "https://docs.google.com/document/d/e/2PACX-1vQjppHRmRcWBLfMhuR14wr2Oz26BAIZX1rQvCyyizZCRty3-IkSZousEnt-ZnCBjEHp0gIavDb9z0e1/pub",
    },
    {
      title: "Larry Fink (BlackRock) Never Loses.",
      journal: "Analysis of the history and influence of Larry Fink in the crypto market.",
      year: 2024,
      link: "https://docs.google.com/document/d/e/2PACX-1vQECKZHvd8iOw5y8LYNDEVgQP50xMQzC7oIFlOfK1lMPpWJfYB2aR2qDEpIMfOekgUUR2cDYd_tu0Dm/pub",
    },
    {
      title: "Why the Memecoin Supercycle will fail.",
      journal: "Analysis of the Memecoin Supercycle Theory and its likelihood of success.",
      year: 2024,
      link: "https://docs.google.com/document/d/e/2PACX-1vTqsPMavIVPp2Sf2XY3GPEMRg4-cLfZ4WuuWZNAf4JYWIlWM7S8f4TMnc1-XTfmRhedsxcCw8xeZiW9/pub",
    },
    {
      title: "Research Reports Index.",
      journal: "Many yet to be published and updated to an improved version.",
      year: "2024 - 2025",
      link: "https://docs.google.com/document/d/e/2PACX-1vRAKgSHq_Ui8XC8nHRVDLmy1nMz8OzsHkj0-vsanC0GdFQ7VWEyeDsq794gpgnre5nMxVHSuRVQGaom/pub",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="publications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Reports</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg">
            Fully reviewed research reports published via Google Documents.
          </p>
        </div>

        <motion.ul
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-4"
        >
          {publications.map((pub, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="bg-gray-900/30 p-6 rounded-xl border border-gray-800 hover:border-green-500/30 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-green-500/10 transition-colors">
                  <FileText className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {pub.title}
                    </a>
                  </h3>
                  <p className="text-gray-400 mb-2">
                    {pub.journal} • {pub.year}
                  </p>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                  >
                    Read Document <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

