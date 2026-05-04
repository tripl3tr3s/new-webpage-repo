"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Clock } from "lucide-react"

interface Post {
  title: string
  excerpt: string
  link: string
  date: string
  tags: string[]
  comingSoon: boolean
}

const posts: Post[] = [
  {
    title: "122,449 Operations Per Minute: Benchmarking a Production MCP Server",
    excerpt: "How a minimal n8n Railway deployment and a custom MCP server hit 122x the market leader's throughput, with 0% error rate at 1.16ms average latency. Originally published in Spanish.",
    link: "https://www.linkedin.com/posts/tripl3tr3s_hace-un-par-de-d%C3%ADas-alcanc%C3%A9-un-hito-que-me-ugcPost-7395001162833387520-A22X",
    date: "2025",
    tags: ["MCP Server", "Performance", "Benchmarking"],
    comingSoon: false,
  },
  {
    title: "AI Strategy is Not Business Strategy with AI Bolted On",
    excerpt: "Why AI initiatives that don't tie back to clear business drivers are expensive experiments. What MLOps, PoC scoping, and responsible design actually look like in practice.",
    link: "https://www.linkedin.com/posts/tripl3tr3s_aistrategy-businessai-mlops-share-7437688675934789632-uTg5",
    date: "2025",
    tags: ["AI Strategy", "MLOps", "Engineering"],
    comingSoon: false,
  },
  {
    title: "Coming Soon",
    excerpt: "",
    link: "#",
    date: "",
    tags: [],
    comingSoon: true,
  },
]

export default function Writing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section id="writing" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Writing</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-600 to-teal-500 dark:from-green-400 dark:to-cyan-500 mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">
            I write about what I actually build: the non-obvious problems, the design decisions, and what breaks in production.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {posts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              {post.comingSoon ? (
                <div className="h-full bg-card/20 rounded-2xl border border-border/50 border-dashed p-6 flex flex-col items-center justify-center text-center opacity-50">
                  <Clock className="w-8 h-8 text-muted-foreground/40 mb-4" />
                  <p className="text-muted-foreground/60 font-medium">Coming Soon</p>
                  <p className="text-muted-foreground/40 text-sm mt-1">Next post dropping soon</p>
                </div>
              ) : (
                <motion.a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full flex flex-col bg-card/30 rounded-2xl border border-border hover:border-green-500/30 hover:bg-green-500/5 transition-colors group p-6 relative overflow-hidden"
                  whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                  whileTap={{ scale: 0.98, y: 0 }}
                  data-umami-event={`writing-post-${index}`}
                >
                  {/* Left accent bar that draws in from top on hover */}
                  <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-primary to-cyan-500 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 ease-out rounded-l-2xl" />

                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                          whileHover={{ scale: 1.08, transition: { type: "spring", stiffness: 500, damping: 14 } }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                    <span className="text-xs text-muted-foreground/60">{post.date} · LinkedIn</span>
                    <motion.div whileHover={{ x: 2, y: -2, transition: { type: "spring", stiffness: 500, damping: 14 } }}>
                      <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                    </motion.div>
                  </div>
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
