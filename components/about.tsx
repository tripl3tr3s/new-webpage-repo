"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Database, GitBranch, BarChart3, Cpu, Globe, Brain, TrendingUp } from "lucide-react"
import { useTranslation } from "@/lib/use-translation"

export default function About() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skills = [
    {
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      title: t('about.skills.frontend.title'),
      description: t('about.skills.frontend.desc'),
    },
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: t('about.skills.backend.title'),
      description: t('about.skills.backend.desc'),
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      title: t('about.skills.visualization.title'),
      description: t('about.skills.visualization.desc'),
    },
    {
      icon: <GitBranch className="w-6 h-6 text-purple-400" />,
      title: t('about.skills.devops.title'),
      description: t('about.skills.devops.desc'),
    },
    {
      icon: <Brain className="w-6 h-6 text-pink-400" />,
      title: t('about.skills.ml.title'),
      description: t('about.skills.ml.desc'),
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      title: t('about.skills.web3.title'),
      description: t('about.skills.web3.desc'),
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
    <section id="about" className="py-20 relative">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto mb-8"></div>
        <p className="text-muted-foreground text-lg">
          {t('about.intro')}
        </p>
      </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-card/50 p-8 rounded-2xl border border-green-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden group cursor-pointer"
            whileHover={{
              scale: 1.02,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.4
              }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">{t('about.backgroundTitle')}</h3>
              <p className="text-muted-foreground mb-4">
              {t('about.backgroundText1')}
              </p>
              <p className="text-muted-foreground">
              {t('about.backgroundText2')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card/50 p-8 rounded-2xl border border-green-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden group cursor-pointer"
            whileHover={{
              scale: 1.02,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.4
              }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">{t('about.focusTitle')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('about.focusText1')} <span className="text-green-400 font-semibold">{t('about.focusRole')}</span> {t('about.focusText2')}
              </p>
              <p className="text-muted-foreground">
                {t('about.focusText3')}
              </p>
            </div>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">{t('about.toolkitTitle')}</h3>

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
              className="bg-card/30 p-6 rounded-xl border border-border hover:border-green-500/30 transition-colors group cursor-pointer"
              whileHover={{
                y: -10,
                rotate: 5,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  duration: 0.6
                }
              }}
              whileTap={{
                scale: 0.98,
                transition: {
                  duration: 1.2,
                  ease: bounceEase,
                }
              }}
            >
              <motion.div 
                className="p-3 bg-muted rounded-lg inline-block mb-4 group-hover:bg-green-500/10 transition-colors"
                whileHover={{
                  rotate: 180,
                  scale: 1.1,
                  transition: {
                    duration: 0.8,
                    ease: bounceEase,
                  }
                }}
              >
                {skill.icon}
              </motion.div>
              <h4 className="text-xl font-bold mb-2">{skill.title}</h4>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

