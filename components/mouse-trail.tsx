"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  timestamp: number
}

export default function MouseTrail() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let particleId = 0

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Create new particle
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      }

      setParticles(prev => [...prev, newParticle])
    }

    // Clean up old particles
    const cleanup = setInterval(() => {
      const now = Date.now()
      setParticles(prev => prev.filter(particle => now - particle.timestamp < 800))
    }, 16) // 60fps cleanup

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      clearInterval(cleanup)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ 
              x: particle.x - 4, 
              y: particle.y - 4, 
              scale: 1, 
              opacity: 0.8 
            }}
            animate={{ 
              scale: 0, 
              opacity: 0 
            }}
            exit={{ 
              opacity: 0 
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut" 
            }}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]"
            style={{
              left: 0,
              top: 0,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}