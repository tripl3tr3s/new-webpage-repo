"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: "Low Float-High FDV Issues & VC's Selling Rewards",
      youtubeLink: "https://youtu.be/LI_WiQDHWoc?si=WQf74oGXhBn1at4L", 
      description:
        "Diving into Low float-High FDV issues & exposing VC's selling rewards of staked Vested tokens.",
      image: "/VCsHighFDV_img.jpg",
      tags: ["FDV", "Staking Rewards", "VC's"],
    },
    {
      title: "Is Ethena the Next Luna?",
      youtubeLink: "https://youtu.be/wKtFMFTwpTM?si=cZRCe4ZBDrKYlJ2F", 
      description:
        "Understanding Luna Crash to predict Ethena's future. Analyzing the similarities and differences.",
      image: "/ethena_img.jpg",
      tags: ["Algorithmic Stablecoin", "Tokenized Bonds", "Hedging"],
    },
    {
      title: "Are NFTs Dead Forever?",
      youtubeLink: "https://youtu.be/c8AbMPubzBA?si=HqoDiybuS4KzXYmt", 
      description:
        "Deep dive into the NFTs history, exploring the reasons behind their rise and fall, and the potential for future growth.",
      image: "/nfts_dead.jpg",
      tags: ["NFT's", "History", "Trend Assessment"],
    },
    {
      title: "The Ultimate Puppets Master: BlackRock's CEO.",
      youtubeLink: "https://youtu.be/GuHb_IZlZis?si=KPmKqCFSABtV8CTN", 
      description:
        "Analysis of Larry Fink's influence on the crypto market and the impact of BlackRock venturing into Bitcoin.",
      image: "/LFink.jpg",
      tags: ["BlackRock", "Bitcoin", "ETF"],
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="research" className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Scope: Top-Performing Videos</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg">
            Explore the most viewed and engaging videos, backed by my research and analysis.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900/30 rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/30 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                  <a
                    href={project.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-400 border border-green-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

