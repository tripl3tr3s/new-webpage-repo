"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink, GitBranch, Play, Code, BarChart, Info } from "lucide-react"
import { useTranslation } from "@/lib/use-translation"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Research() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("projects")

  const projects = [
    {
      id: "n8nStarter",
      liveLink: "#",
      githubLink: "https://github.com/tripl3tr3s/n8n-freelancer-starter",
      image: "/n8n_freelancer_starter.jpg",
      tags: ["Automation", "Docker", "Self-Hosting", "Cost-Optimization"],
      tech: ["n8n", "SQLite", "Docker", "Railway", "Bash"],
      status: "development"
    },
    {
      id: "satMcp",
      liveLink: "#",
      githubLink: "#",
      image: "/MCP_inspector.png",
      tags: ["Tax Compliance", "MCP Protocol", "Automation", "FinTech"],
      tech: ["TypeScript", "SQLite", "MCP", "XML Signing", "Cryptography"],
      status: "development"
    },
    {
      id: "terminal",
      liveLink: "https://retaildao-terminal.vercel.app/",
      githubLink: "https://github.com/RetailDAO/website",
      image: "/RD_Terminal.png",
      tags: ["React", "TypeScript", "Docker", "ApexCharts", "Crypto"],
      tech: ["Next.js", "Docker", "Axios", "Redis", "Dual WebSocket", "Custom API"],
      status: "live"
    },
    {
      id: "retailDocs",
      liveLink: "https://retaildao.github.io/Docs/",
      githubLink: "https://github.com/RetailDAO/Docs",
      image: "/RD_Docs.png",
      tags: ["React", "Matplotlib", "Docusaurus", "API"],
      tech: ["TypeScript", "React", "Docusaurus", "GitHub Pages"],
      status: "live"
    },
    {
      id: "gradientGolf",
      liveLink: "https://scratch.mit.edu/projects/1197478584",
      githubLink: "https://scratch.mit.edu/projects/1197478584",
      image: "G_D_G.png",
      tags: ["Machine Learning", "Back Propagation", "Deep Learning", "]Loss Functions"],
      tech: ["Scratch", "Adobe Illustrator", "Photoshop"],
      status: "development"
    },
    {
      id: "thisWebsite",
      liveLink: "https://researchooor.quest",
      githubLink: "https://github.com/tripl3tr3s/new-webpage-repo",
      image: "/Portfolio.png",
      tags: ["Portfolio", "Web3", "Analytics", "Blockchain", "Toolkit"],
      tech: ["Tailwind CSS", "GitHub Actions", "GitHub Pages", "Framer Motion"],
      status: "live"
    },
  ]

  const researchPosts = [
    {
      id: "lowFloat",
      youtubeLink: "https://youtu.be/LI_WiQDHWoc?si=WQf74oGXhBn1at4L",
      image: "/VCsHighFDV_img.jpg",
      tags: ["FDV", "Staking Rewards", "VC's"],
    },
    {
      id: "ethena",
      youtubeLink: "https://youtu.be/wKtFMFTwpTM?si=cZRCe4ZBDrKYlJ2F",
      image: "/ethena_img.jpg",
      tags: ["Algorithmic Stablecoin", "Tokenized Bonds", "Hedging"],
    },
    {
      id: "nfts",
      youtubeLink: "https://youtu.be/c8AbMPubzBA?si=HqoDiybuS4KzXYmt",
      image: "/nfts_dead.jpg",
      tags: ["NFT's", "History", "Trend Assessment"],
    },
    {
      id: "blackrock",
      youtubeLink: "https://youtu.be/GuHb_IZlZis?si=KPmKqCFSABtV8CTN",
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
    <TooltipProvider>
      <section id="research" className="py-20 bg-gradient-to-b from-background to-background/90 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('research.title')}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg">
              {t('research.subtitle')}
            </p>
          </div>

          {/* Interactive Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-card/60 backdrop-blur-sm p-2 rounded-2xl border border-border shadow-2xl">
              <motion.button
                onClick={() => setActiveTab("projects")}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(34, 197, 94, 0.3)"
                }}
                whileTap={{
                  scale: 0.95,
                  boxShadow: "0 0 15px rgba(34, 197, 94, 0.5)"
                }}
                className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 overflow-hidden group ${activeTab === "projects"
                  ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {/* Background gradient animation for inactive state */}
                {activeTab !== "projects" && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  />
                )}

                {/* Shimmer effect for active state */}
                {activeTab === "projects" && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                )}

                <motion.div
                  className="relative z-10 flex items-center gap-3"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Code className="w-5 h-5" />
                  </motion.div>
                  {t('research.tabs.projects')}
                </motion.div>

                {/* Glow border effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-green-400/0 group-hover:border-green-400/50 transition-all duration-300"
                  whileHover={{
                    borderColor: "rgba(34, 197, 94, 0.7)",
                    boxShadow: "inset 0 0 20px rgba(34, 197, 94, 0.1)"
                  }}
                />
              </motion.button>

              <motion.button
                onClick={() => setActiveTab("research")}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(34, 197, 94, 0.3)"
                }}
                whileTap={{
                  scale: 0.95,
                  boxShadow: "0 0 15px rgba(34, 197, 94, 0.5)"
                }}
                className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 overflow-hidden group ${activeTab === "research"
                  ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {/* Background gradient animation for inactive state */}
                {activeTab !== "research" && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  />
                )}

                {/* Shimmer effect for active state */}
                {activeTab === "research" && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                )}

                <motion.div
                  className="relative z-10 flex items-center gap-3"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <BarChart className="w-5 h-5" />
                  </motion.div>
                  {t('research.tabs.research')}
                </motion.div>

                {/* Glow border effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-green-400/0 group-hover:border-green-400/50 transition-all duration-300"
                  whileHover={{
                    borderColor: "rgba(34, 197, 94, 0.7)",
                    boxShadow: "inset 0 0 20px rgba(34, 197, 94, 0.1)"
                  }}
                />
              </motion.button>
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
                  className="bg-card/30 rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={t(`research.projects.${project.id}.title`)}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${project.status === "live" ? "bg-primary/20 text-primary border border-primary/40" :
                        project.status === "inProgress" ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40" :
                          "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                        }`}>
                        {t(`research.status.${project.status}`)}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted/80 text-muted-foreground border border-border">
                        {t(`research.projects.${project.id}.type`)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {t(`research.projects.${project.id}.title`)}
                    </h3>
                    <p className="text-muted-foreground mb-4">{t(`research.projects.${project.id}.desc`)}</p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">{t('research.techStack')}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs font-medium rounded bg-muted/50 text-muted-foreground border border-border"
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
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.liveLink === "#" ? (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-all cursor-help"
                              data-umami-event={`Project Live Demo (WIP) - ${project.id}`}
                            >
                              <ExternalLink className="w-4 h-4" />
                              {t('research.liveDemo')}
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Work In Progress</p>
                          </TooltipContent>
                        </Tooltip>
                      ) : (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-all"
                          data-umami-event={`Project Live Demo - ${project.id}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t('research.liveDemo')}
                        </a>
                      )}
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-muted/50 text-muted-foreground border border-border rounded-lg hover:bg-muted/70 transition-all"
                        data-umami-event={`Project Code - ${project.id}`}
                      >
                        <GitBranch className="w-4 h-4" />
                        {t('research.code')}
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
                  className="bg-card/30 rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={t(`research.researchPosts.${post.id}.title`)}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      <a
                        href={post.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-2"
                      >
                        <Play className="w-4 h-4 text-red-500" />
                        {t(`research.researchPosts.${post.id}.title`)}
                      </a>
                    </h3>
                    <p className="text-muted-foreground mb-4">{t(`research.researchPosts.${post.id}.desc`)}</p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
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
    </TooltipProvider>
  )
}

