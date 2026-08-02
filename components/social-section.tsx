"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const devStrengths = [
  {
    title: "Frontend Architecture",
    description: "Building fast, type-safe, and highly interactive user interfaces using Next.js, React, and Tailwind CSS.",
    tech: "TypeScript • Next.js • React",
  },
  {
    title: "WebGL & Graphics",
    description: "Designing high-performance, immersive 3D layouts and custom shaders using Three.js and Canvas elements.",
    tech: "Three.js • Custom Shaders • Canvas",
  },
  {
    title: "Type Safety & Security",
    description: "Establishing type integrity and secure APIs to prevent runtime issues and keep user data protected.",
    tech: "TypeScript • Schema validation",
  },
  {
    title: "Real-Time Communication",
    description: "Engineering sub-100ms real-time audio/video streaming platforms and collaborative modules.",
    tech: "WebRTC • Socket.io • Janus.js",
  },
  {
    title: "Backend Engineering",
    description: "Designing robust server architectures, RESTful APIs, and efficient background worker microservices.",
    tech: "Node.js • Express • REST APIs",
  },
  {
    title: "Database Architectures",
    description: "Modeling performant relational and document schema models with robust validation rules.",
    tech: "PostgreSQL • MongoDB • Redis",
  },
  {
    title: "DevOps & Deployments",
    description: "Automating builds, containerizing server suites, and orchestrating serverless edge delivery.",
    tech: "Docker • Vercel • GitHub Actions",
  },
]

const handIcons = [
  "/images/icon/icon-hand1.png",
  "/images/icon/icon-hand2.png",
  "/images/icon/icon-hand3.png",
  "/images/icon/icon-hand4.png",
  "/images/icon/icon-hand5.png",
  "/images/icon/icon-hand6.png",
]

export default function SocialSection() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % handIcons.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="social-section" className="relative bg-[#F5F1E8] text-black py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-32 flex items-center justify-center mt-16">
          {/* Replaced static image with animated icon switcher */}
          <div className="relative h-full w-auto max-h-[60px] aspect-square">
            {handIcons.map((icon, index) => (
              <div
                key={icon}
                className={`absolute inset-0 transition-opacity duration-0 ${
                  index === currentIconIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={icon || "/placeholder.svg"}
                  className="h-full w-full object-contain"
                  alt="Animated hand icon"
                />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-2.5"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none leading-[2.25] text-lorenzo-dark lg:text-6xl">
            CONNECT
          </h2>
          <h3 className="text-4xl md:text-6xl font-brier mt-2 lg:text-6xl leading-10 text-lorenzo-dark">WITH KAUSHAL</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-[600px] md:h-[700px] mb-16 flex items-center justify-center"
        >
          {devStrengths.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotate: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                rotate: (i - 3) * 6, // Adjusted rotation for 7 items (centered at index 3)
                scale: 1 - Math.abs(i - 3) * 0.02, // Reduced scale drop-off
                x: (i - 3) * 90, // Tighter horizontal overlap
                y: Math.abs(i - 3) * 35, // Adjusted vertical curve
              }}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.1,
                type: "spring",
                stiffness: 60,
                damping: 12,
              }}
              viewport={{ once: true }}
              whileHover={{
                rotate: 0,
                scale: 1.1,
                zIndex: 20,
                y: -40,
                transition: { duration: 0.3 },
              }}
              className="absolute w-60 md:w-80 h-80 md:h-[480px] bg-zinc-950 border border-white/10 hover:border-lorenzo-accent/50 rounded-3xl shadow-2xl p-6 md:p-8 cursor-pointer origin-bottom flex flex-col justify-between"
              style={{ zIndex: 10 - Math.abs(i - 3) }} // Adjusted z-index logic for 7 items
            >
              <div className="flex flex-col h-full justify-between select-none">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-lorenzo-accent uppercase bg-lorenzo-accent/10 px-2 py-0.5 rounded border border-lorenzo-accent/20">
                      SPECS.0{i + 1}
                    </span>
                    <div className="text-[9px] font-mono text-white/30">ID.GOHIL.{i+1}</div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sans font-medium">
                    {item.description}
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4">
                  <div className="text-[9px] font-mono uppercase tracking-wider text-white/40 mb-1">
                    Core tech
                  </div>
                  <div className="text-xs font-mono text-lorenzo-accent">
                    {item.tech}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <p className="text-lg md:text-xl font-serif text-black/80 font-medium">Get in touch or check out the repositories</p>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "GITHUB", link: "https://github.com/FRONTEND-DEV-KAUSHAL" },
              { name: "LINKEDIN", link: "https://in.linkedin.com/in/kaushal-gohil-242362224" },
              { name: "EMAIL", link: "mailto:gohilkaushal16@email.com" },
            ].map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="font-black uppercase text-sm tracking-wider text-black hover:text-black/60 transition-colors"
              >
                {platform.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
