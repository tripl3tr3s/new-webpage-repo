"use client"

import React, { useRef, useState } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import { Brain, Database, Code2, Workflow } from "lucide-react"

interface Skill {
  icon: React.ReactNode
  title: string
  description: string
}

function SkillCard({ skill, itemVariants }: { skill: Skill; itemVariants: Variants }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const spotRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect()
    const px = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const py = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    setTilt({ x: py * -7, y: px * 7 })
    if (spotRef.current) {
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      spotRef.current.style.background = `radial-gradient(160px circle at ${x}% ${y}%, rgba(16,185,129,0.14), transparent 70%)`
      spotRef.current.style.opacity = "1"
    }
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    if (spotRef.current) spotRef.current.style.opacity = "0"
  }

  return (
    <motion.div variants={itemVariants}>
      <motion.div
        ref={cardRef}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="tilt-card glass-card p-6 rounded-xl border border-border hover:border-green-500/40 transition-colors group cursor-pointer relative overflow-hidden"
        whileTap={{ scale: 0.97, transition: { type: "spring", stiffness: 600, damping: 18 } }}
        style={{ transformPerspective: 800 }}
      >
        {/* Cursor spotlight */}
        <div
          ref={spotRef}
          className="pointer-events-none absolute inset-0 rounded-xl z-0 transition-opacity duration-300"
          style={{ opacity: 0 }}
        />

        <div className="relative z-10">
          <motion.div
            className="p-3 bg-muted rounded-lg inline-block mb-4 group-hover:bg-green-500/10 transition-colors"
            whileHover={{ rotate: 15, scale: 1.18, transition: { type: "spring", stiffness: 500, damping: 10 } }}
          >
            {skill.icon}
          </motion.div>
          <h4 className="text-xl font-bold mb-2">{skill.title}</h4>
          <p className="text-muted-foreground text-sm">{skill.description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills = [
    {
      icon: <Brain className="w-6 h-6 text-teal-600 dark:text-cyan-400" />,
      title: "AI Systems & LLM Orchestration",
      description: "Anthropic Claude API (tool_use, streaming, multi-turn), MCP Protocol (full primitive set: tools, resources, prompts, elicitations, tasks, MCP-UI), multi-agent orchestration (3-tier domain architecture, Expert Registry pattern, scoped tool allowlists), agentic loop design with self-correction and parallel tool calls.",
    },
    {
      icon: <Database className="w-6 h-6 text-green-700 dark:text-green-400" />,
      title: "Backend & Infrastructure",
      description: "TypeScript / Node.js, Python, PostgreSQL (RLS, pgvector), SQLite, Redis, Docker, Railway, CI/CD pipelines, rate limiting, security headers, observability and monitoring. REST API design, Zod schema validation, circuit breakers, multi-tenant architecture.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Frontend & Interfaces",
      description: "Next.js, React, Tailwind CSS, shadcn/ui, SSE streaming UIs, real-time data visualization (ApexCharts, Recharts). TypeScript throughout.",
    },
    {
      icon: <Workflow className="w-6 h-6 text-amber-600 dark:text-yellow-400" />,
      title: "Automation & Workflows",
      description: "n8n (self-hosted, multi-client deployments, complex workflow design), webhook orchestration, scheduled pipelines, third-party API integration.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-600 to-teal-500 dark:from-green-400 dark:to-cyan-500 mx-auto"></div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl border border-green-500/20 shadow-[0_0_30px_rgba(6,182,212,0.05)] relative overflow-hidden group cursor-pointer"
            whileHover={{
              y: -4,
              scale: 1.015,
              transition: { type: "spring", stiffness: 420, damping: 20 }
            }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Background</h3>
              <p className="text-muted-foreground mb-4">
                My path to AI engineering wasn&apos;t conventional. That&apos;s the point.
              </p>
              <p className="text-muted-foreground mb-4">
                I started in graphic design and tattoo artistry, where I learned that precision and
                intentionality aren&apos;t optional. Then I spent years writing deep technical analysis:
                20+ research reports on decentralized protocol architecture, on-chain data patterns,
                and economic system design. That work trained me to read complex systems, find failure
                modes, and communicate findings clearly.
              </p>
              <p className="text-muted-foreground mb-4">
                When I discovered LLMs, MCP, and agentic systems, I stopped analyzing other people&apos;s
                infrastructure and started building my own.
              </p>
              <p className="text-muted-foreground text-sm">
                I&apos;m Mexican, I operate globally, I speak both En and Es.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl border border-green-500/20 shadow-[0_0_30px_rgba(6,182,212,0.05)] relative overflow-hidden group cursor-pointer"
            whileHover={{
              y: -4,
              scale: 1.015,
              transition: { type: "spring", stiffness: 420, damping: 20 }
            }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Current Focus</h3>
              <p className="text-muted-foreground mb-4">
                Today I specialize in production AI systems engineering. Specifically:
              </p>
              <ul className="text-muted-foreground space-y-2 mb-4">
                <li>Custom MCP server design (tools, resources, prompts, elicitations, tasks, MCP-UI mini-apps) with SSE and HTTP Streamable transport</li>
                <li>3-tier agentic orchestration: lightweight router → domain-specialized agents with native tool_use → Expert Registry with scoped allowlists and live MCP resource injection</li>
                <li>LLM system testing: 3,960+ passing tests, 91%+ coverage on a solo-built TypeScript codebase</li>
                <li>Full deployment stack: Docker, Railway, CI/CD, rate limiting, security headers, RLS, observability</li>
              </ul>
              <p className="text-muted-foreground">
                I currently operate as an independent AI engineer, building DISAI_Conta (a production
                fiscal AI platform) and taking on select consulting engagements for teams that need
                real AI infrastructure, not demos.
              </p>
            </div>
          </motion.div>
        </div>

        <div id="stack">
          <h3 className="text-2xl font-bold text-center mb-8">Stack & Expertise</h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} itemVariants={itemVariants} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
