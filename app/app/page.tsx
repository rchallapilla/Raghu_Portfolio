import { HeroSection } from "@/components/hero-section"
import { AIBuilds } from "@/components/ai-builds"
import { VideoLibrary } from "@/components/video-library"
import { AboutSection } from "@/components/about-section"
import { ContactFooter } from "@/components/contact-footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <AIBuilds />
        <VideoLibrary />
        <AboutSection />
      </main>
      <ContactFooter />
    </div>
  )
}
