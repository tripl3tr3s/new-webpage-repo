"use client"

import { useI18n } from "@/lib/i18n-context"
import { motion } from "framer-motion"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useI18n()

  return (
    <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-1">
      <motion.button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {language === "en" && <Globe className="w-3.5 h-3.5" />}
        EN
      </motion.button>
      <motion.button
        onClick={() => setLanguage("es")}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${
          language === "es"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {language === "es" && <Globe className="w-3.5 h-3.5" />}
        ES
      </motion.button>
    </div>
  )
}
