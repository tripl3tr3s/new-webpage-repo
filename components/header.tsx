"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useMediaQuery } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useI18n } from "@/lib/i18n-context"
import { translations } from "@/lib/translations"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const { theme } = useTheme()
  const { language } = useI18n()

  const words = ["RESEARCH", "DEVELOPMENT", "DESIGN", "ILLUSTRATION", "ANALYSIS", "VISUALIZATIONS"]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const currentWord = words[currentWordIndex]
    let timeoutId: NodeJS.Timeout

    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1))
        }, 100)
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false)
        }, 2000) // Pause before erasing
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 50)
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [displayedText, currentWordIndex, isTyping, mounted, words])

  const navItems = [
    { name: translations.nav.about[language], href: "#about" },
    { name: translations.nav.credentials[language], href: "#certifications" },
    { name: translations.nav.scope[language], href: "#research" },
    { name: translations.nav.reports[language], href: "#publications" },
    { name: translations.nav.contact[language], href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
              }}
              className="relative w-6 h-6 md:w-8 md:h-8"
            >
              {mounted && (
                <Image
                  src={theme === "dark" ? "/dado_333_amarillo_sin fondo.png" : "/dado_333_negro_sin fondo.png"}
                  alt="333 Research Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3,
              }}
              className="text-lg md:text-2xl font-bold font-mono"
            >
              <span className="text-foreground">
                <span className="text-primary">TRIPLE-TRES</span>
                {!isMobile && (
                  <>
                    <span className="text-primary">/</span>
                    {displayedText}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-primary"
                    >
                      |
                    </motion.span>
                  </>
                )}
              </span>
            </motion.div>
          </Link>

          {isMobile ? (
            <>
              <div className="flex items-center space-x-1">
                <LanguageToggle />
                <ThemeToggle />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-foreground"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-16 left-0 right-0 bg-card border-b border-primary/20"
                >
                  <nav className="flex flex-col py-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="px-4 py-3 hover:bg-muted text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </motion.div>
              )}
            </>
          ) : (
            <div className="flex items-center space-x-6">
              <nav className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </nav>
              <LanguageToggle />
              <ThemeToggle />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

