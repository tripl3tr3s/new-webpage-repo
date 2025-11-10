"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Download, X, Brain, Code2, Database, Workflow } from "lucide-react"
import { useTranslation } from "@/lib/use-translation"

// Certificate data structure
interface Certificate {
  id: string
  title: string
  date: string
  hours?: string
  platform: "Platzi" | "Anthropic" | "DataCamp" | "n8n"
  category: "AI" | "Development" | "Logic" | "Blockchain" | "Tools" | "Data" | "Automation"
  file: string
  verifyUrl?: string
  description?: string
}

// Organized certificate data
const certificates: Certificate[] = [
  // n8n Featured
  {
    id: "n8n-level-1",
    title: "n8n Course Level 1 Certified",
    date: "2025",
    platform: "n8n",
    category: "Automation",
    file: "Captura de pantalla 2025-09-30 211337.png",
    description: "Workflow automation and n8n fundamentals"
  },
  // Anthropic - AI & Tools (2025)
  {
    id: "mcp-advanced",
    title: "Model Context Protocol: Advanced Topics",
    date: "October 7, 2025",
    platform: "Anthropic",
    category: "AI",
    file: "certificate-outzbe498ykm-AdvancedMCP.pdf",
    verifyUrl: "https://verify.skilljar.com/c/outzbe498ykm"
  },
  {
    id: "claude-code",
    title: "Claude Code in Action",
    date: "September 25, 2025",
    platform: "Anthropic",
    category: "AI",
    file: "certificate-9reqrkwostz5-1758848937.pdf",
    verifyUrl: "https://verify.skilljar.com/c/9reqrkwostz5"
  },
  {
    id: "mcp-intro",
    title: "Introduction to Model Context Protocol",
    date: "September 25, 2025",
    platform: "Anthropic",
    category: "AI",
    file: "certificate-tfsj7gki3476-1758836011.pdf",
    verifyUrl: "https://verify.skilljar.com/c/tfsj7gki3476"
  },
  {
    id: "ai-fluency",
    title: "AI Fluency: Framework & Foundations",
    date: "2025",
    platform: "Anthropic",
    category: "AI",
    file: "certificate-6nrqh5j4rte6-1758841956.pdf"
  },
  // DataCamp
  {
    id: "data-literacy",
    title: "Data Literacy Fundamentals",
    date: "May 17, 2025",
    platform: "DataCamp",
    category: "Data",
    file: "DL0033995155503 (1).pdf"
  },
  // Platzi - Foundations
  {
    id: "software-eng",
    title: "Software Engineering Fundamentals",
    date: "February 26, 2024",
    hours: "16h",
    platform: "Platzi",
    category: "Development",
    file: "diploma-ingenieria2017.pdf"
  },
  {
    id: "prog-history",
    title: "Programming History: Languages & Paradigms",
    date: "February 26, 2024",
    hours: "14h",
    platform: "Platzi",
    category: "Development",
    file: "diploma-historia-programacion.pdf"
  },
  {
    id: "web-intro",
    title: "Web Introduction: Internet History & Functionality",
    date: "February 25, 2024",
    hours: "12h",
    platform: "Platzi",
    category: "Development",
    file: "diploma-introweb.pdf"
  },
  // Platzi - Logical Thinking Series
  {
    id: "logic-algorithms",
    title: "Logical Thinking: Algorithms & Flowcharts",
    date: "February 28, 2024",
    hours: "12h",
    platform: "Platzi",
    category: "Logic",
    file: "diploma-pensamiento-logico-2022.pdf"
  },
  {
    id: "logic-structures",
    title: "Logical Thinking: Data Structures & Functions",
    date: "March 3, 2024",
    hours: "12h",
    platform: "Platzi",
    category: "Logic",
    file: "diploma-pensamiento-logico-estructuras-2022.pdf"
  },
  {
    id: "logic-languages",
    title: "Logical Thinking: Programming Languages",
    date: "March 4, 2024",
    hours: "12h",
    platform: "Platzi",
    category: "Logic",
    file: "diploma-pensamiento-logico-lenguajes-2022.pdf"
  },
  // Platzi - Tools & Blockchain
  {
    id: "ethereum-fundamentals",
    title: "Ethereum Fundamentals",
    date: "October 29, 2024",
    hours: "16h",
    platform: "Platzi",
    category: "Blockchain",
    file: "diploma-ethereum-ecosistema.pdf"
  },
  {
    id: "blockchain-prework",
    title: "Blockchain Development Prework",
    date: "March 9, 2024",
    hours: "16h",
    platform: "Platzi",
    category: "Blockchain",
    file: "diploma-prework-ethereum.pdf"
  },
  {
    id: "git-github",
    title: "Git & GitHub",
    date: "October 27, 2024",
    hours: "24h",
    platform: "Platzi",
    category: "Tools",
    file: "diploma-gitgithub.pdf"
  },
  {
    id: "linux-admin",
    title: "Linux Server Administration Introduction",
    date: "November 5, 2024",
    hours: "14h",
    platform: "Platzi",
    category: "Tools",
    file: "diploma-linux.pdf"
  },
  {
    id: "n8n-lowcode",
    title: "Low-Code Automation with n8n",
    date: "October 30, 2024",
    hours: "7h",
    platform: "Platzi",
    category: "Automation",
    file: "diploma-n8n-lowcode.pdf"
  },
  {
    id: "terminal",
    title: "Terminal & Command Line Introduction",
    date: "March 7, 2024",
    hours: "11h",
    platform: "Platzi",
    category: "Tools",
    file: "diploma-terminal-21.pdf"
  }
]

// Platform colors
const platformColors = {
  Platzi: { primary: "hsl(88, 60%, 50%)", glow: "rgba(152, 202, 63, 0.3)" },
  Anthropic: { primary: "hsl(45, 30%, 50%)", glow: "rgba(204, 179, 128, 0.3)" },
  DataCamp: { primary: "hsl(180, 60%, 50%)", glow: "rgba(58, 196, 201, 0.3)" },
  n8n: { primary: "hsl(11, 100%, 67%)", glow: "rgba(255, 109, 90, 0.3)" }
}

// Category icons
const categoryIcons = {
  AI: Brain,
  Development: Code2,
  Logic: Code2,
  Blockchain: Database,
  Tools: Code2,
  Data: Database,
  Automation: Workflow
}

interface CertificateCardProps {
  cert: Certificate
  index: number
  onClick: () => void
  t: (key: string) => string
}

function CertificateCard({ cert, index, onClick, t }: CertificateCardProps) {
  const Icon = categoryIcons[cert.category]
  const color = platformColors[cert.platform]

  return (
    <motion.div
      className="bg-card/30 p-6 rounded-xl border border-border hover:border-green-500/30 transition-colors group cursor-pointer relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 20
        }
      }}
      onClick={onClick}
      style={{
        boxShadow: `0 4px 20px -2px ${color.glow}`
      }}
    >
      {/* Hover gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${color.glow}, transparent)`
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="p-3 bg-muted rounded-lg inline-block mb-4 group-hover:bg-green-500/10 transition-colors"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-6 h-6" style={{ color: color.primary }} />
        </motion.div>

        {/* Title */}
        <h4 className="text-lg font-bold mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
          {t(`certifications.certs.${cert.id}`)}
        </h4>

        {/* Platform badge */}
        <div className="inline-block px-2 py-1 rounded text-xs font-semibold mb-2"
          style={{
            backgroundColor: color.glow,
            color: color.primary
          }}
        >
          {cert.platform}
        </div>

        {/* Date and hours */}
        <p className="text-muted-foreground text-sm mb-3">
          {cert.date} {cert.hours && `• ${cert.hours}`}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2 text-sm">
          <motion.span
            className="inline-flex items-center text-green-400 hover:text-green-300"
            whileHover={{ x: 4 }}
          >
            {t('certifications.viewCert')} <ExternalLink className="ml-1 w-3 h-3" />
          </motion.span>
        </div>
      </div>
    </motion.div>
  )
}

function FeaturedBadge({ cert, onClick, t }: { cert: Certificate; onClick: () => void; t: (key: string) => string }) {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 p-8 rounded-2xl border-2 border-orange-500/30 overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      {/* Ribbon */}
      <div className="absolute top-6 -right-12 bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-2 rotate-45 text-sm font-bold shadow-lg">
        {t('certifications.featured').split(' ')[0]}
      </div>

      {/* Animated glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
        {/* Icon/Logo placeholder */}
        <motion.div
          className="p-6 bg-orange-500/20 rounded-2xl"
          whileHover={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Workflow className="w-16 h-16 text-orange-500" />
        </motion.div>

        <div className="flex-1 text-center md:text-left">
          <div className="text-orange-500 font-bold text-sm mb-2">🏆 {t('certifications.featured')}</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">{t(`certifications.certs.${cert.id}`)}</h3>
          <p className="text-muted-foreground mb-4">
            {t('certifications.featuredBadge.desc')} • {cert.date}
          </p>
          <motion.button
            className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('certifications.viewBadge')}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

function CertificateModal({ cert, onClose, t }: { cert: Certificate; onClose: () => void; t: (key: string) => string }) {
  const isImage = cert.file.endsWith('.png') || cert.file.endsWith('.jpg')

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-card max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden relative"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-1">{t(`certifications.certs.${cert.id}`)}</h3>
            <p className="text-sm text-muted-foreground">{cert.platform} • {cert.date}</p>
          </div>
          <div className="flex items-center gap-2">
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                title="Verify Certificate"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            <a
              href={`/${cert.file}`}
              download
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              title="Download"
            >
              <Download className="w-5 h-5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
          {isImage ? (
            <img
              src={`/${cert.file}`}
              alt={t(`certifications.certs.${cert.id}`)}
              className="w-full h-auto rounded-lg"
            />
          ) : (
            <iframe
              src={`/${cert.file}`}
              className="w-full h-[600px] rounded-lg"
              title={t(`certifications.certs.${cert.id}`)}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Certifications() {
  const { t } = useTranslation()
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  // Organize certificates by category
  const featured = certificates.find(c => c.platform === "n8n")!
  const aiCerts = certificates.filter(c => c.category === "AI")
  const dataCert = certificates.find(c => c.category === "Data")
  const devCerts = certificates.filter(c => c.category === "Development")
  const logicCerts = certificates.filter(c => c.category === "Logic")
  const toolsCerts = certificates.filter(c => ["Blockchain", "Tools", "Automation"].includes(c.category) && c.id !== "n8n-level-1")

  return (
    <>
      <section id="certifications" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('certifications.title')}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg">
              {t('certifications.subtitle')}
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-16">
            {/* Featured n8n Badge */}
            <div>
              <FeaturedBadge cert={featured} onClick={() => setSelectedCert(featured)} t={t} />
            </div>

            {/* AI & Development Tools */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-purple-400" />
                <div>
                  <h3 className="text-2xl font-bold">{t('certifications.categories.ai.title')}</h3>
                  <p className="text-muted-foreground text-sm">{t('certifications.categories.ai.subtitle')}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {aiCerts.map((cert, idx) => (
                  <CertificateCard
                    key={cert.id}
                    cert={cert}
                    index={idx}
                    onClick={() => setSelectedCert(cert)}
                    t={t}
                  />
                ))}
              </div>
            </motion.div>

            {/* Data & Analytics */}
            {dataCert && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Database className="w-8 h-8 text-cyan-400" />
                  <div>
                    <h3 className="text-2xl font-bold">{t('certifications.categories.data.title')}</h3>
                    <p className="text-muted-foreground text-sm">{t('certifications.categories.data.subtitle')}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <CertificateCard
                    cert={dataCert}
                    index={0}
                    onClick={() => setSelectedCert(dataCert)}
                    t={t}
                  />
                </div>
              </motion.div>
            )}

            {/* Computer Science Fundamentals */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-2xl font-bold">{t('certifications.categories.cs.title')}</h3>
                  <p className="text-muted-foreground text-sm">{t('certifications.categories.cs.subtitle')}</p>
                </div>
              </div>

              {/* Programming Foundations */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-muted-foreground">{t('certifications.categories.foundations')}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {devCerts.map((cert, idx) => (
                    <CertificateCard
                      key={cert.id}
                      cert={cert}
                      index={idx}
                      onClick={() => setSelectedCert(cert)}
                      t={t}
                    />
                  ))}
                </div>
              </div>

              {/* Logical Thinking Series */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-muted-foreground">{t('certifications.categories.logic')}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {logicCerts.map((cert, idx) => (
                    <CertificateCard
                      key={cert.id}
                      cert={cert}
                      index={idx}
                      onClick={() => setSelectedCert(cert)}
                      t={t}
                    />
                  ))}
                </div>
              </div>

              {/* Developer Tools */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-muted-foreground">{t('certifications.categories.tools')}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {toolsCerts.map((cert, idx) => (
                    <CertificateCard
                      key={cert.id}
                      cert={cert}
                      index={idx}
                      onClick={() => setSelectedCert(cert)}
                      t={t}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
          t={t}
        />
      )}
    </>
  )
}
