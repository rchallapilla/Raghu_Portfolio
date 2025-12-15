import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactFooter() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="space-y-2">
              <h3 className="font-mono text-lg md:text-xl font-semibold">Let's Connect</h3>
              <p className="text-sm text-muted-foreground">
                Open to select AI collaborations and advisory work
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" size="icon">
                <a href="https://www.linkedin.com/in/raghuscrum/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://github.com/rchallapilla" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">© 2025 Raghu Challapilla</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
