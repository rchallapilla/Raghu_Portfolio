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
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent",
        )}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("hero")
              }}
              className="font-mono text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
              aria-label="Go to homepage"
            >
              RC
            </a>
            <div className="flex items-center gap-4 md:gap-6" role="list">
              <a
                href="#builds"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("builds")
                }}
                className="text-base md:text-sm font-medium hover:text-primary transition-colors"
                role="listitem"
              >
                Builds
              </a>
              <a
                href="#videos"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("videos")
                }}
                className="text-base md:text-sm font-medium hover:text-primary transition-colors"
                role="listitem"
              >
                Deep Dives
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("about")
                }}
                className="text-base md:text-sm text-muted-foreground hover:text-primary transition-colors"
                role="listitem"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
