"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Github, Twitter, Linkedin } from "lucide-react"
import { useTranslation } from "@/lib/use-translation"

export default function Contact() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real implementation, you would send the form data to your backend
    // For this demo, we'll just simulate a successful submission
    setFormStatus("success")
  }

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/tripl3tr3s", label: "GitHub" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/TripleeeTres", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/tripl3tr3s", label: "LinkedIn" },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-background/90 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Primary CTA - Book Call */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <a
            href="https://calendly.com/tripl3tr3s/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 text-black hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 transform hover:scale-105"
            data-umami-event="Contact - Book Call"
          >
            {t('contact.bookCall')}
          </a>
        </motion.div>

        {/* Divider with text */}
        <div className="max-w-3xl mx-auto mb-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
          <span className="text-muted-foreground text-sm">{t('contact.orSendMessage')}</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="bg-card/50 p-8 rounded-2xl border border-green-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
          >
            <h3 className="text-2xl font-bold mb-6">{t('contact.form.send')}</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={t('contact.form.namePlaceholder')}
                  className="w-full px-4 py-3 bg-input/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 text-foreground placeholder:text-muted-foreground/60"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="w-full px-4 py-3 bg-input/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 text-foreground placeholder:text-muted-foreground/60"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="w-full px-4 py-3 bg-input/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 text-foreground resize-none placeholder:text-muted-foreground/60"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 text-black font-medium hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-shadow"
              >
                {t('contact.form.send')}
              </button>

              {formStatus === "success" && (
                <p className="text-green-400 text-sm">Your message has been sent successfully!</p>
              )}

              {formStatus === "error" && (
                <p className="text-red-400 text-sm">There was an error sending your message. Please try again.</p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-green-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)] mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-muted rounded-lg">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{t('contact.info.email')}</h4>
                  <a
                    href="mailto:contact@researchooor.xyz"
                    className="text-muted-foreground hover:text-green-400 transition-colors"
                    data-umami-event="Contact - Email Click"
                  >
                    contact@researchooor.xyz
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-2xl border border-green-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
              <h4 className="text-xl font-bold mb-6">{t('contact.info.social')}</h4>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-4 p-3 bg-input/50 rounded-lg hover:bg-green-500/10 transition-colors group"
                    data-umami-event={`Contact - Social ${link.label}`}
                  >
                    <div className="p-2 bg-muted rounded-lg group-hover:bg-green-500/20 transition-colors">
                      {link.icon}
                    </div>
                    <span className="text-muted-foreground group-hover:text-green-400 transition-colors">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

