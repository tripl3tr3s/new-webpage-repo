"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 dark:bg-gray-800 border border-gray-700 dark:border-gray-600 hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
      whileTap={{ scale: 0.95 }}
      initial={{ rotate: 0 }}
      animate={{ rotate: theme === "dark" ? 0 : 180 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon size={18} className="text-yellow-400" />
      </motion.div>
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: theme === "light" ? 1 : 0,
          opacity: theme === "light" ? 1 : 0,
        }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="absolute"
      >
        <Sun size={18} className="text-yellow-400" />
      </motion.div>
    </motion.button>
  )
}