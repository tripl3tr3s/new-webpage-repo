"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Database, GitBranch, BarChart3, Cpu, Globe, Brain, TrendingUp } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills = [
    {
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS - Building responsive, interactive web applications with modern frameworks.",
    },
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: "Data Analysis & Backend",
      description: "Python, Pandas, SQL - Processing and analyzing large datasets, building APIs and data pipelines.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      title: "Visualization & Charts",
      description: "ApexCharts, Matplotlib, Recharts - Creating interactive dashboards and data visualizations for insights.",
    },
    {
      icon: <GitBranch className="w-6 h-6 text-purple-400" />,
      title: "DevOps & Tools",
      description: "Git/GitHub, Docker, CI/CD - Version control, deployment pipelines, and development workflow automation.",
    },
    {
      icon: <Brain className="w-6 h-6 text-pink-400" />,
      title: "Machine Learning",
      description: "Deep Learning, AI algorithms, optimization techniques - Currently studying advanced ML concepts and applications.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      title: "Web3 Analytics",
      description: "On-chain data analysis, DeFi protocols, crypto-economic models - Bridging traditional analysis with blockchain insights.",
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
    <section id="about" className="py-20 relative">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto mb-8"></div>
        <p className="text-gray-400 text-lg">
          I'm a creative crypto researcher based in Mexico, crafting briefs for{" "}
          <a 
            href="https://www.youtube.com/@Coinsider" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-cyan-500 font-semibold hover:underline hover:text-cyan-300 transition-colors"
          >
            Coinsider
          </a>, 
          while looking for the next shiny thing in crypto. Insight over noise, patterns over guesswork, clarity over complexity.
        </p>
      </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900/50 p-8 rounded-2xl border border-green-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
          >
            <h3 className="text-2xl font-bold mb-4">Background</h3>
            <p className="text-gray-400 mb-4">
            I began my journey as a visual designer and have since expanded my expertise to encompass a blend of roles, from Crypto Research to Data Analysis (SQL/pandas/ggplot2 entry level).
            Previously tattooing and designing, I now focus on the intersection of data, design and technology, particularly in the realm of blockchain.
            </p>
            <p className="text-gray-400">
            Authored 20+ in-depth research briefs (~50 pages each), blending thematic storytelling with hardcore crypto analysis, fueling videos racking up thousands of views.
            From 2020 to this date, I laid the groundwork for a seamless pivot into professional crypto research and community building. 
            

            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900/50 p-8 rounded-2xl border border-green-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
          >
            <h3 className="text-2xl font-bold mb-4">Current Focus</h3>
            <p className="text-gray-400 mb-4">
              Transitioning into a <span className="text-green-400 font-semibold">Junior Full-Stack Web3 Developer/Analyst</span> while studying Machine Learning, Deep Learning and AI. 
              Building practical applications that combine crypto research insights with modern web development.
            </p>
            <p className="text-gray-400">
              Currently mastering advanced algorithms for training and optimization, applied mathematics for computer science, 
              and developing full-stack applications with React, TypeScript, and Python data analysis workflows.
            </p>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">Toolkit</h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900/30 p-6 rounded-xl border border-gray-800 hover:border-green-500/30 transition-colors group"
            >
              <div className="p-3 bg-gray-800 rounded-lg inline-block mb-4 group-hover:bg-green-500/10 transition-colors">
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{skill.title}</h4>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

