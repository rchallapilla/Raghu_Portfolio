"use client"

import { useEffect } from "react"
import { X, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoModalProps {
  video: {
    title: string
    description: string
    embedCode: string
    github?: string | null
  }
  onClose: () => void
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl bg-card border border-border rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="font-semibold text-base md:text-lg pr-8 line-clamp-1">{video.title}</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="shrink-0">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="p-4 md:p-6 space-y-4">
          <div dangerouslySetInnerHTML={{ __html: video.embedCode }} />
          <p className="text-sm text-muted-foreground leading-relaxed">{video.description}</p>
          {video.github && (
            <Button asChild variant="outline" className="gap-2 bg-transparent">
              <a href={video.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                View Code on GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
