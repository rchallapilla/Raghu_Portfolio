"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative flex flex-col justify-start items-center overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="font-mono text-5xl md:text-7xl font-bold text-balance">AI Product Builds & Demos</h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Curated by <span className="text-foreground font-medium">Raghu Challapilla</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base">
            <div className="glass-card px-4 py-2 rounded-full">
              <span className="text-primary font-mono whitespace-nowrap">12x Faster Report Generation</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-full">
              <span className="text-primary font-mono whitespace-nowrap">Forrester Award Winning AI</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-full">
              <span className="text-primary font-mono whitespace-nowrap">90% Reduced Onboarding Time</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" onClick={() => scrollToSection("builds")} className="font-medium">
              Explore Projects
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("videos")} className="font-medium">
              Watch Demos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
