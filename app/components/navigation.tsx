"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-mono text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            RC
          </button>
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection("builds")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Builds
            </button>
            <button
              onClick={() => scrollToSection("videos")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Deep Dives
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
