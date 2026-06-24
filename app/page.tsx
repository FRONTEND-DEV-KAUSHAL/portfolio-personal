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
        <div className="relative w-full h-[120px] md:h-[160px] lg:h-[200px] overflow-hidden bg-white">
          <Image
            src="/images/trilha2.svg"
            alt="Tire track divider"
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>
        <HelmetHall />
        <div className="relative w-full h-[120px] md:h-[160px] lg:h-[200px] overflow-hidden bg-white">
          <Image
            src="/images/splash.svg"
            alt="Tire track divider"
            fill
            className="object-cover object-center bg-lorenzo-dark"
            priority={false}
          />
        </div>
        <BikeShowcase />

        <HistoricalResultsAccordion />

        <SocialSection />
        <Footer />
      </div>
    </main>
  )
}
