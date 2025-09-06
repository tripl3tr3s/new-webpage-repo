"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink, GitBranch, Play, Code, BarChart } from "lucide-react"

export default function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("projects")

  const projects = [
    {
      title: "DeFi Analytics Dashboard",
      liveLink: "#", // Replace with actual link
      githubLink: "#", // Replace with actual link
      description: "Real-time DeFi protocol analytics with ApexCharts visualizations, Python backend for data processing, and React frontend with TypeScript.",
      image: "/placeholder.svg", // Replace with project screenshot
      tags: ["React", "TypeScript", "Python", "ApexCharts", "DeFi"],
      tech: ["Next.js", "Pandas", "Web3.py", "PostgreSQL"],
      status: "Live",
      type: "Full-Stack"
    },
    {
      title: "Crypto Portfolio Tracker",
      liveLink: "#", // Replace with actual link
      githubLink: "#", // Replace with actual link
      description: "Portfolio management app with real-time price feeds, P&L tracking, and interactive charts using Matplotlib and React.",
      image: "/placeholder.svg", // Replace with project screenshot
      tags: ["Python", "React", "Matplotlib", "Web3", "API"],
      tech: ["FastAPI", "React", "CoinGecko API", "Chart.js"],
      status: "In Progress",
      type: "Full-Stack"
    },
    {
      title: "ML Trading Algorithm",
      liveLink: "#", // Replace with actual link
      githubLink: "#", // Replace with actual link
      description: "Machine learning model for crypto price prediction using deep learning algorithms and advanced optimization techniques.",
      image: "/placeholder.svg", // Replace with project screenshot
      tags: ["Machine Learning", "Python", "Deep Learning", "TensorFlow"],
      tech: ["TensorFlow", "Pandas", "NumPy", "Sklearn"],
      status: "Development",
      type: "Data Science"
    },
    {
      title: "Web3 Data Pipeline",
      liveLink: "#", // Replace with actual link
      githubLink: "#", // Replace with actual link
      description: "Automated data pipeline for collecting and processing on-chain data with Docker deployment and CI/CD integration.",
      image: "/placeholder.svg", // Replace with project screenshot
      tags: ["DevOps", "Docker", "Python", "Blockchain"],
      tech: ["Docker", "GitHub Actions", "PostgreSQL", "Web3.py"],
      status: "Live",
      type: "Infrastructure"
    },
  ]

  const researchPosts = [
    {
      title: "Low Float-High FDV Issues & VC's Selling Rewards",
      youtubeLink: "https://youtu.be/LI_WiQDHWoc?si=WQf74oGXhBn1at4L", 
      description: "Diving into Low float-High FDV issues & exposing VC's selling rewards of staked Vested tokens.",
      image: "/VCsHighFDV_img.jpg",
      tags: ["FDV", "Staking Rewards", "VC's"],
    },
    {
      title: "Is Ethena the Next Luna?",
      youtubeLink: "https://youtu.be/wKtFMFTwpTM?si=cZRCe4ZBDrKYlJ2F", 
      description: "Understanding Luna Crash to predict Ethena's future. Analyzing the similarities and differences.",
      image: "/ethena_img.jpg",
      tags: ["Algorithmic Stablecoin", "Tokenized Bonds", "Hedging"],
    },
    {
      title: "Are NFTs Dead Forever?",
      youtubeLink: "https://youtu.be/c8AbMPubzBA?si=HqoDiybuS4KzXYmt", 
      description: "Deep dive into the NFTs history, exploring the reasons behind their rise and fall, and the potential for future growth.",
      image: "/nfts_dead.jpg",
      tags: ["NFT's", "History", "Trend Assessment"],
    },
    {
      title: "The Ultimate Puppets Master: BlackRock's CEO.",
      youtubeLink: "https://youtu.be/GuHb_IZlZis?si=KPmKqCFSABtV8CTN", 
      description: "Analysis of Larry Fink's influence on the crypto market and the impact of BlackRock venturing into Bitcoin.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work & Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg">
            Explore my development projects and research work in Web3 and data analysis.
          </p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 p-1 rounded-xl border border-gray-800">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "projects"
                  ? "bg-green-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <Code className="w-4 h-4 inline mr-2" />
              Development Projects
            </button>
            <button
              onClick={() => setActiveTab("research")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "research"
                  ? "bg-green-500 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <BarChart className="w-4 h-4 inline mr-2" />
              Research Content
            </button>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {activeTab === "projects" ? (
            projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900/30 rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/30 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === "Live" ? "bg-green-500/20 text-green-400 border border-green-500/40" :
                      project.status === "In Progress" ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40" :
                      "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800/80 text-gray-300 border border-gray-700">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium rounded bg-gray-800/50 text-gray-300 border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-400 border border-green-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg hover:bg-green-500/20 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 border border-gray-700 rounded-lg hover:bg-gray-700/50 transition-all"
                    >
                      <GitBranch className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            researchPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900/30 rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/30 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                    <a
                      href={post.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-2"
                    >
                      <Play className="w-4 h-4 text-red-500" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-gray-400 mb-4">{post.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
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
            ))
          )}
        </motion.div>
      </div>
    </section>
  )
}

