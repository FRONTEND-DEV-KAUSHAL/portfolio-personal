import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import MissionSection from "@/components/mission-section"
import RiderTechSection from "@/components/rider-tech-section"
// import SignatureMarqueeSection from "@/components/signature-marquee-section"
import BikeShowcase from "@/components/bike-showcase"
import HelmetHall from "@/components/helmet-hall"
import SocialSection from "@/components/social-section"
import Footer from "@/components/footer"
import Image from "next/image"
import { HistoricalResultsAccordion } from "@/components/historical-results-accordion"

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <div className="relative z-10">
        <MissionSection />
        {/* <TrackSplitSection /> */}
        <RiderTechSection />
        {/* Digital Line Divider */}
        <div className="relative w-full h-[100px] bg-background flex items-center justify-center overflow-hidden">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-lorenzo-accent/30 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
        </div>
        <HelmetHall />
        {/* Digital Line Divider */}
        <div className="relative w-full h-[100px] bg-background flex items-center justify-center overflow-hidden">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-lorenzo-accent/30 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
        </div>
        <BikeShowcase />

        <HistoricalResultsAccordion />

        <SocialSection />
        <Footer />
      </div>
    </main>
  )
}
