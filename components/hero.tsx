"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid effect */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Animated glow orb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 blur-[100px] z-0"
      />

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-2 inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20"
            >
              Crypto Researcher / Analyst
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
            >
              Unlocking the Puzzle:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                Insights Across Crypto and Blockchain
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0"
            >
              Delivering sharp analysis on crypto trends, blockchain breakthroughs, and their real-world impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="#research"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 text-black font-medium hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-shadow"
              >
                View Reports
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-green-500/50 text-white hover:bg-green-500/10 transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full h-[400px]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-green-500/20 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                <Image
                  src="/img_hero.jpg"
                  alt="Blockchain visualization"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* Animated code snippets */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -left-10 bottom-10 p-4 bg-gray-900/90 rounded-lg border border-green-500/20 shadow-[0_0_15px_rgba(6,182,212,0.2)] max-w-[200px]"
              >
                <div className="text-green-400 font-mono text-xs">
                  {"function transfer require(to != emit Transfer( return true);"}
                  <br />
                  {"  // Transfer Function verification"}
                  <br />
                  {"  // ..."}
                  <br />
                  {"}"}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -right-10 top-10 p-4 bg-gray-900/90 rounded-lg border border-green-500/20 shadow-[0_0_15px_rgba(6,182,212,0.2)] max-w-[200px]"
              >
                <div className="text-cyan-400 font-mono text-xs">
                  {"async function signTransaction(tx) {"}
                  <br />
                  {"  const signature = await wallet.sign(tx);"}
                  <br />
                  {"  return { ...tx, signature };"}
                  <br />
                  {"}"}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 1.5,
          y: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
          opacity: { duration: 1 },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-2 bg-green-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

