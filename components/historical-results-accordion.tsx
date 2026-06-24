"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Briefcase, Award } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface CareerDetail {
  id: string
  achievement: string
  date: string
  roleType: string
  techUsed: string
}

interface ExperienceYear {
  yearRange: string
  company: string
  title: string
  details: CareerDetail[]
}

const careerTimeline: ExperienceYear[] = [
  {
    yearRange: "2024 - Present",
    company: "Appgambit",
    title: "Full Stack Web Developer",
    details: [
      {
        id: "01",
        achievement: "TNT (Track & Trace Cash) app lead architect",
        date: "June 2024",
        roleType: "Architect",
        techUsed: "React & Node.js",
      },
      {
        id: "02",
        achievement: "Engineered secure financial transaction workflows for banks",
        date: "August 2024",
        roleType: "Fintech",
        techUsed: "API Security",
      },
      {
        id: "03",
        achievement: "Designed complex MySQL database schemas & security modules",
        date: "October 2024",
        roleType: "Database",
        techUsed: "MySQL / SQL",
      },
      {
        id: "04",
        achievement: "Implemented role-based access control (RBAC) for cash tracking",
        date: "December 2024",
        roleType: "Auth/RBAC",
        techUsed: "Node.js Security",
      },
    ],
  },
  {
    yearRange: "2022 - 2024",
    company: "Daydreamsoft Infotech",
    title: "MEAN / MERN Developer",
    details: [
      {
        id: "01",
        achievement: "Co-developed secure Video Call platform for deaf accessibility",
        date: "October 2022",
        roleType: "Real-time",
        techUsed: "Janus.js / WebRTC",
      },
      {
        id: "02",
        achievement: "Built Gamerznet.net social media platform for gamers",
        date: "May 2023",
        roleType: "Chat Engine",
        techUsed: "Socket.io Reactions",
      },
      {
        id: "03",
        achievement: "Standardized version control workflows and code reviews",
        date: "January 2024",
        roleType: "Git Lead",
        techUsed: "Git / PR / Reviews",
      },
      {
        id: "04",
        achievement: "Resolved production bugs, cutting issue resolution time by 30%",
        date: "June 2024",
        roleType: "Debugging",
        techUsed: "MERN Stack",
      },
    ],
  },
  {
    yearRange: "2021 - 2022",
    company: "Red & White Institute",
    title: "Lab Coordinator",
    details: [
      {
        id: "01",
        achievement: "Mentored students in modern web development practices",
        date: "May 2021",
        roleType: "Tutor",
        techUsed: "HTML & CSS",
      },
      {
        id: "02",
        achievement: "Conducted hands-on technical troubleshooting labs",
        date: "December 2021",
        roleType: "Support",
        techUsed: "JavaScript",
      },
      {
        id: "03",
        achievement: "Developed training structures for junior web development students",
        date: "October 2022",
        roleType: "Curriculum",
        techUsed: "Frontend Frameworks",
      },
    ],
  },
]

export function HistoricalResultsAccordion() {
  const [activeCompany, setActiveCompany] = useState<string | null>("2024 - Present")

  return (
    <div id="experience" className="w-full bg-[#111111] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="flex flex-col">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-6xl font-bold uppercase leading-none text-white tracking-tighter">
              CAREER
            </h2>
            <h1 className="font-brier text-5xl text-zinc-400 leading-none md:-mt-2 md:text-7xl mt-2.5">Timeline & Exp</h1>
          </div>
          <p className="text-zinc-500 text-sm md:text-base max-w-xs md:text-right font-medium">
            Discover Kaushal's professional journey, core duties, and key tech accomplishments.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {careerTimeline.map((data) => (
            <div key={data.company} className="border-b border-white/10 last:border-none">
              <button
                onClick={() => setActiveCompany(activeCompany === data.yearRange ? null : data.yearRange)}
                className={cn(
                  "w-full flex items-center justify-between p-4 md:p-6 transition-all duration-300 ease-out group",
                  activeCompany === data.yearRange
                    ? "bg-lorenzo-accent text-black"
                    : "bg-transparent text-white hover:bg-white/5",
                )}
              >
                <div className="flex items-center gap-6">
                  <ChevronDown
                    className={cn(
                      "w-6 h-6 md:w-8 md:h-8 transition-transform duration-300",
                      activeCompany === data.yearRange ? "rotate-180 text-black" : "text-white -rotate-90",
                    )}
                  />
                  <span className="font-[family-name:var(--font-oswald)] font-bold text-3xl md:text-5xl tracking-tighter leading-none">
                    {data.yearRange}
                  </span>
                </div>

                <div className="flex items-center gap-8 md:gap-16 pr-4">
                  <div className="flex flex-col items-end">
                    <div className="text-xs font-bold uppercase opacity-60 mb-1">Company</div>
                    <span className="font-[family-name:var(--font-oswald)] font-bold text-xl md:text-3xl italic leading-none uppercase">
                      {data.company}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-xs font-bold uppercase opacity-60 mb-1">Role</div>
                    <span className="font-[family-name:var(--font-oswald)] font-bold text-xl md:text-3xl leading-none uppercase">
                      {data.title}
                    </span>
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {activeCompany === data.yearRange && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-zinc-900/30"
                  >
                    <div className="grid grid-cols-12 gap-4 py-4 px-6 text-[10px] md:text-xs font-bold text-white/30 uppercase tracking-widest border-b border-white/10">
                      <div className="col-span-1">Id</div>
                      <div className="col-span-6">Core Achievement / Responsibility</div>
                      <div className="col-span-3 text-center">Focus Area</div>
                      <div className="col-span-2 text-right">Tech Stack</div>
                    </div>

                    <div className="p-0">
                      {data.details.map((detail, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-12 gap-4 py-4 px-6 border-b border-white/5 text-white hover:bg-white/5 transition-colors items-center group"
                        >
                          <div className="col-span-1 relative">
                            <span className="font-[family-name:var(--font-oswald)] font-bold text-2xl text-white/40 relative z-10">
                              {detail.id}
                            </span>
                          </div>

                          <div className="col-span-6 flex items-center gap-3">
                            <Briefcase className="w-5 h-5 text-lorenzo-accent/50 group-hover:text-lorenzo-accent transition-colors flex-shrink-0" />
                            <span className="font-sans font-bold text-sm md:text-lg leading-relaxed text-white/90 group-hover:text-white transition-colors">
                              {detail.achievement}
                            </span>
                          </div>

                          <div className="col-span-3 text-center font-[family-name:var(--font-oswald)] font-bold text-lg md:text-xl text-white/70 uppercase">
                            {detail.roleType}
                          </div>

                          <div className="col-span-2 text-right font-mono text-xs md:text-sm text-lorenzo-accent">
                            {detail.techUsed}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
