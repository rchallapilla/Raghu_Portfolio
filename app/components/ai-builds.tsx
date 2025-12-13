import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "House Whisperer",
    description:
      "Multimodal home inspection AI powered by multi-agent systems and RAG. Analyzes property conditions using InterNACHI standards to deliver instant, professional-grade inspection reports.",
    impact: "12x Faster Report Generation",
    techStack: ["Multi-Agent", "RAG", "Computer Vision", "InterNACHI Standards"],
    demo: "https://house-whisperer-demoday.vercel.app/",
    website: "https://www.housewhisperer.io/",
    github: null,
  },
  {
    title: "ModelGov",
    description:
      "MRM Knowledge Assistant that won the Bank of America Innovation Challenge. Transforms model risk management onboarding from weeks to hours using intelligent knowledge retrieval.",
    impact: "90% reduced onboarding time",
    techStack: ["RAG", "LangChain", "Knowledge Graphs", "Enterprise AI"],
    demo: "https://model-risk-management.vercel.app/",
    github: null,
  },
  {
    title: "Asimov-Vedanta Interface",
    description:
      "AI ethics and philosophy exploration platform. Bridges Western AI safety principles with Eastern philosophical wisdom through cross-domain reasoning and dialogue systems.",
    impact: "Novel AI ethics framework",
    techStack: ["LLM Reasoning", "Philosophy AI", "Ethical AI", "Dialog Systems"],
    demo: "https://asimov-vedanta.vercel.app/",
    github: null,
  },
]

export function AIBuilds() {
  return (
    <section id="builds" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-mono text-4xl md:text-5xl font-bold">AI Builds</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Production-ready AI applications solving real-world problems
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="glass-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="glass-card px-3 py-1 rounded-full">
                          <span className="text-xs md:text-sm font-mono text-primary whitespace-nowrap">{project.impact}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button asChild size="sm" variant="default">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      {project.website && (
                        <Button asChild size="sm" variant="outline">
                          <a href={project.website} target="_blank" rel="noopener noreferrer" className="gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Website
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button asChild size="sm" variant="outline">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                            <Github className="h-4 w-4" />
                            GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
