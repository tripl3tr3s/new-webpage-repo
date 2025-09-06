"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { FileText, ExternalLink } from "lucide-react"

interface PublicationCardProps {
  publication: {
    title: string
    journal: string
    year: number | string
    link: string
  }
  index: number
}

function PublicationCard({ publication, index }: PublicationCardProps) {
  const hueA = 120 + (index * 40) % 240 // Green to cyan range
  const hueB = 180 + (index * 60) % 240 // Cyan to blue range
  
  const gradientBg = `linear-gradient(135deg, hsl(${hueA}, 70%, 15%), hsl(${hueB}, 70%, 10%))`
  const glowColor = `hsl(${hueA}, 80%, 50%)`

  return (
    <motion.div
      className="publication-card-container relative"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.3, once: true }}
    >
      <div 
        className="absolute inset-0 rounded-xl opacity-20"
        style={{ 
          background: gradientBg,
          filter: 'blur(1px)'
        }} 
      />
      <motion.div
        variants={cardVariants}
        className="publication-card relative bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-green-500/50 transition-all duration-300 group overflow-hidden"
        style={{
          boxShadow: `0 4px 20px -2px ${glowColor}20, 0 0 0 1px ${glowColor}10`
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: `0 8px 30px -2px ${glowColor}30, 0 0 0 1px ${glowColor}30`,
          transition: { duration: 0.2 }
        }}
      >
        <div className="flex items-start gap-4 relative z-10">
          <motion.div 
            className="p-3 bg-gray-800/80 rounded-lg group-hover:bg-green-500/20 transition-all duration-300"
            whileHover={{ rotate: 5 }}
          >
            <FileText className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors" />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {publication.title}
              </a>
            </h3>
            <p className="text-muted-foreground mb-2">
              {publication.journal} • {publication.year}
            </p>
            <motion.a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
              whileHover={{ x: 4 }}
            >
              Read Document <ExternalLink className="ml-1 w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
    rotateX: -15,
    scale: 0.9,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
}

export default function Publications() {
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
      link: "https://docs.google.com/document/d/e/2PACX-1vRVg4Ir_mafKgxc2GZixv6pKSDjilH1AlLCr_DzsPFN10anWUHEXC9zZ9Kkz7NvaKTs6CTK-UIQRyp8/pub",
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

  return (
    <section id="publications" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Reports</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">
            Fully reviewed research reports published via Google Documents.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((publication, index) => (
            <PublicationCard 
              key={index} 
              publication={publication} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

