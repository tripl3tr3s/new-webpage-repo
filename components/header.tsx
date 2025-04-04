"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-mobile"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Scope", href: "#research" },
    { name: "Reports", href: "#publications" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500"
          >
            333<span className="text-white">RESEARCH</span>
          </Link>

          {isMobile ? (
            <>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-16 left-0 right-0 bg-gray-900 border-b border-green-500/20"
                >
                  <nav className="flex flex-col py-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="px-4 py-3 hover:bg-gray-800 text-gray-300 hover:text-green-400 transition-colors"
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
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-green-400 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

