"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Brain, Cpu, Zap } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills = [
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Blockchain Fundamentals",
      description: "You can’t analyze on-chain data or protocols without knowing what’s happening under the hood. It’s the foundation for interpreting everything else.",
    },
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "SQL & Visualization",
      description: "On-chain analytics, tracking transactions, wallet activity, or token flows, relies on extracting and interpreting raw data. This turns numbers into insights.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: "Programming Basics",
      description: "Ability to read or write simple code, even basic coding unlocks deeper research capabilities.",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Crypto-Economic Intuition",
      description: "Blockchain systems are built on economic models. Without this, you'll miss why things happen.",
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
            I began my journey as a visual designer and have since expanded my expertise to encompass a blend of roles, from Crypto Research to Data Analysis (SQL entry level).
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
            <h3 className="text-2xl font-bold mb-4">Research Focus</h3>
            <p className="text-gray-400 mb-4">
              My current research focus is on dissecting market trends, Whitepapers, projects economic models, on-chain data, Technical & Macro Analysis tools and strategies, and more, 
              to deliver bleeding-edge insights for a crypto-savvy audience. 
            </p>
            <p className="text-gray-400">
              I'm particularly interested in the intersection of AI x Crypto, where its headed, and how it can be leveraged to enhance the crypto experience.
              I believe that the future of crypto lies in its ability to adapt and evolve, and I'm excited to be a part of that journey.
            </p>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">Toolkit</h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
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

