"use client"

import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform, useInView } from "framer-motion"

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [signatureDrawn, setSignatureDrawn] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1.2, 1, 0.2])
  const imageY = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0, -200])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [0, 1, 1, 0])

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setSignatureDrawn(true), 800)
    }
  }, [isInView])

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const sectionHeight = rect.height
        const scrolled = -rect.top
        const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1)
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getTextTransform = () => {
    if (scrollProgress < 0.2) {
      const progress = scrollProgress / 0.2
      return {
        opacity: progress,
        transform: `translateX(${(1 - progress) * -50}px)`,
      }
    }
    return {
      opacity: 1,
      transform: "translateX(0px)",
    }
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-lorenzo-dark text-lorenzo-text-light py-24 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
          <div className="relative h-20 flex items-center justify-center mt-16">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#c8f550" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-auto max-h-[60px]">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
        
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-balance leading-[1.1] xl:text-8xl">
            <span className="text-lorenzo-accent font-brier leading-[1.1] text-8xl">CRAFTING</span> SYSTEMS,{" "}
            <br />
            INTEGRATING <span className="text-lorenzo-accent font-brier leading-[1.1]">AI MODELS</span>,{" "}
            <br />
            DEVELOPING END-TO-END{" "}
            <br />
            SECURE FLOWS.{" "}
            <br />
            BUILDING A <span className="text-lorenzo-accent font-brier leading-[1.1]">DIGITAL</span>{" "}
            <br />
            FUTURE IN WEB{" "}
            <br />
            DEVELOPMENT & SaaS.
          </h2>
          <p className="mt-12 text-lg md:text-xl font-medium font-mono text-white/60 max-w-3xl mx-auto leading-relaxed normal-case">
            Full Stack Web Developer with 3+ years of experience engineering production-grade MERN/MEAN applications, securing cash transfer systems, and building AI-powered SaaS platforms.
          </p>
        </div>

        {/* Signature animation */}
        {/*
        <div className="relative h-32 flex items-center justify-center mt-16">
          
          <svg width="400" height="150" viewBox="0 0 400 150" className="w-full max-w-md">
            <motion.path
              d="M30,75 Q60,40 110,75 T220,75 Q250,95 310,65 Q340,45 370,75 M200,90 Q220,110 250,90"
              fill="none"
              stroke="#c8f550"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={signatureDrawn ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>
        </div>
        */}
      </div>
    </section>
  )
}
