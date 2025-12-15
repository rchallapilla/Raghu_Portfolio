// Removed Card import - using semantic article instead
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "House Whisperer",
    description:
      "Inspectors spend 1–3 hours writing inspection reports. A multimodal, multi-agent RAG system analyzes voice notes and photos to generate InterNACHI/ASHI-compliant inspection reports. Includes a domain-grounded assistant for inspection standards, codes, and guidelines.",
    impact: "12x Faster Report Generation",
    techStack: ["Multi-Agent", "RAG", "Multimodal", "InterNACHI and ASHI"],
    demo: "https://house-whisperer-demoday.vercel.app/",
    website: "https://www.housewhisperer.io/",
    github: null,
  },
  {
    title: "ModelGov",
    description:
      "Built for the Bank of America Innovation Challenge, this RAG-based assistant validated that domain knowledge onboarding can be done in days rather than months with scripted NLU bots.",
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
  const softwareSchemas = projects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: "AI Application",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    ...(project.website && { url: project.website }),
    ...(project.demo && { softwareVersion: "1.0" }),
  }))

  return (
    <section id="builds" className="py-20 relative">
      {softwareSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
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
              <article
                key={index}
                className="glass-card border-border hover:border-primary/50 transition-all duration-300 group rounded-lg border p-8"
                itemScope
                itemType="https://schema.org/SoftwareApplication"
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors" itemProp="name">
                        {project.title}
                      </h3>
                        <div className="glass-card px-3 py-1 rounded-full">
                          <span className="text-xs md:text-sm font-mono text-primary whitespace-nowrap">{project.impact}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed" itemProp="description">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2" aria-label="Technology stack">
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
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="gap-2" aria-label={`View live demo of ${project.title}`}>
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                          Live Demo
                        </a>
                      </Button>
                      {project.website && (
                        <Button asChild size="sm" variant="outline">
                          <a href={project.website} target="_blank" rel="noopener noreferrer" className="gap-2" aria-label={`Visit ${project.title} website`} itemProp="url">
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            Website
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button asChild size="sm" variant="outline">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2" aria-label={`View ${project.title} on GitHub`}>
                            <Github className="h-4 w-4" aria-hidden="true" />
                            GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
