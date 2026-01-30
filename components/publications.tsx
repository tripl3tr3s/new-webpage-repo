"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, ExternalLink } from "lucide-react"
import { useTranslation } from "@/lib/use-translation"

interface PublicationCardProps {
  publication: {
    title: string
    journal: string
    year: number | string
    link: string
  }
  index: number
  t: (key: string) => string
}

function PublicationCard({ publication, index, t }: PublicationCardProps) {
  const hueA = 120 + (index * 40) % 240 // Green to cyan range
  const hueB = 180 + (index * 60) % 240 // Cyan to blue range

  const gradientBg = `linear-gradient(135deg, hsl(${hueA}, 70%, 15%), hsl(${hueB}, 70%, 10%))`
  const glowColor = `hsl(${hueA}, 80%, 50%)`

  const bounceEase = (x: number) => {
    const n1 = 7.5625
    const d1 = 2.75

    if (x < 1 / d1) {
      return n1 * x * x
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375
    }
  }

  return (
    <motion.div
      className="bg-card/30 p-6 rounded-xl border border-border hover:border-green-500/30 transition-colors group cursor-pointer relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -10,
        rotate: -5, // Counter-clockwise rotation
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 20,
          duration: 0.6
        }
      }}
      whileTap={{
        scale: 0.90,
        transition: {
          duration: 0.1,
        }
      }}
      style={{
        boxShadow: `0 4px 20px -2px ${glowColor}20, 0 0 0 1px ${glowColor}10`
      }}
    >
      <div
        className="absolute inset-0 rounded-xl opacity-20 pointer-events-none"
        style={{
          background: gradientBg,
          filter: 'blur(1px)'
        }}
      />
      <div className="relative z-10">
        <motion.div
          className="p-3 bg-muted rounded-lg inline-block mb-4 group-hover:bg-green-500/10 transition-colors"
          whileHover={{
            rotate: -180, // Counter-clockwise icon rotation
            scale: 1.1,
            transition: {
              duration: 0.8,
              ease: bounceEase,
            }
          }}
        >
          <FileText className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors" />
        </motion.div>
        <h4 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {publication.title}
          </a>
        </h4>
        <p className="text-muted-foreground mb-3 text-sm">
          {publication.journal} • {publication.year}
        </p>
        <motion.a
          href={publication.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-sm"
          whileHover={{ x: 4 }}
        >
          {t('publications.readMore')} <ExternalLink className="ml-1 w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function Publications() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
      journal: "Analysis of the history and influence of Larry Fink in digital asset markets.",
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
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('publications.title')}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">
            {t('publications.subtitle')}
          </p>
        </motion.div>

        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {publications.map((publication, index) => (
              <motion.div key={index} variants={itemVariants}>
                <PublicationCard
                  publication={publication}
                  index={index}
                  t={t}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

