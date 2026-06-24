"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FolderGit2, ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Voyager AI",
    category: "AI Travel Itinerary SaaS",
    tech: "Next.js • Claude API • Supabase • Leaflet.js",
    description: "AI-powered travel itinerary generator featuring freemium monetization, authentication gates, and custom prompt routing for deterministic generation.",
    color: "from-emerald-500/20 to-teal-500/5",
    border: "group-hover:border-emerald-400",
    shadow: "group-hover:shadow-emerald-500/10",
  },
  {
    id: 2,
    name: "PulseCheck.ai",
    category: "AI Habit Tracker",
    tech: "React.js • Node.js • OpenAI API",
    description: "AI habit tracking application that analyzes routines to generate intelligent summaries and personalized guidance to sustain habits.",
    color: "from-purple-500/20 to-indigo-500/5",
    border: "group-hover:border-purple-400",
    shadow: "group-hover:shadow-purple-500/10",
  },
  {
    id: 3,
    name: "TNT (Track & Trace Cash)",
    category: "Fintech Workflows",
    tech: "Node.js • MySQL • React • Angular",
    description: "Secure multi-step cash transfer workflow featuring end-to-end encryption, mysql schema compliance, and bank API integration.",
    color: "from-amber-500/20 to-yellow-500/5",
    border: "group-hover:border-amber-400",
    shadow: "group-hover:shadow-amber-500/10",
  },
  {
    id: 4,
    name: "Real-Time Chat App",
    category: "Messaging Platform",
    tech: "Angular • Node.js • Socket.io",
    description: "Feature-rich real-time chat server supporting typing indicators, file transfers, and emoji reactions with sub-100ms delivery.",
    color: "from-blue-500/20 to-cyan-500/5",
    border: "group-hover:border-blue-400",
    shadow: "group-hover:shadow-blue-500/10",
  },
  {
    id: 5,
    name: "Accessibility Video Platform",
    category: "WebRTC Conferencing",
    tech: "React.js • Node.js • Janus.js • WebRTC",
    description: "Zoom-like video conferencing platform designed for the deaf community, optimized for high-quality, sub-100ms video streaming.",
    color: "from-rose-500/20 to-red-500/5",
    border: "group-hover:border-rose-400",
    shadow: "group-hover:shadow-rose-500/10",
  },
  {
    id: 6,
    name: "Dermamatrimony",
    category: "Niche Matchmaking",
    tech: "MERN Stack • Custom Matching",
    description: "Specialized matching platform for people with skin conditions, delivering customized compatibility logic and secure messaging.",
    color: "from-pink-500/20 to-fuchsia-500/5",
    border: "group-hover:border-pink-400",
    shadow: "group-hover:shadow-pink-500/10",
  },
]

export default function HelmetHall() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="relative min-h-screen text-white py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight">
            <span className="text-white">PROJECTS</span>
            <br />
            <span className="text-lorenzo-accent font-brier text-8xl">HALL OF FAME</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 mt-6 max-w-2xl">
            A showcase of production-grade SaaS applications, real-time messaging systems, fintech modules, and intelligent AI-integrated platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative cursor-pointer flex h-full"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.color} 
                           border-2 border-zinc-800/80 
                           ${project.border} 
                           group-hover:shadow-2xl 
                           ${project.shadow} 
                           transition-all duration-300 flex flex-col justify-between p-6 md:p-8 h-full w-full min-h-[340px]`}
              >
                {/* Top Row: Icon & Category */}
                <div className="flex items-center justify-between z-10">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-[#c8f550]/10 group-hover:border-[#c8f550]/30 transition-colors">
                    <FolderGit2 className="w-6 h-6 text-white group-hover:text-lorenzo-accent transition-colors" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c8f550] bg-[#c8f550]/10 px-3 py-1 rounded-full border border-[#c8f550]/20">
                    {project.category}
                  </span>
                </div>

                {/* Description - Sliding up on hover */}
                <div className="my-6 z-10 flex-grow flex flex-col justify-start">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2 leading-none uppercase">
                    {project.name}
                  </h3>
                  <p className="text-sm text-zinc-400 line-clamp-3 group-hover:text-zinc-200 transition-colors leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Row: Tech Tags & Open Arrow */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4 z-10">
                  <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {project.tech}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:border-transparent transition-all">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                  </div>
                </div>

                {/* Ambient glow in card background */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80 opacity-60 z-0" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
