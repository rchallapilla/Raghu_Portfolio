"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-border">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-mono text-2xl font-bold">About</h2>
                  <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)} className="gap-2">
                    {isExpanded ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        Show More
                      </>
                    )}
                  </Button>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Product Leader with hands on AI engineering skills delivering applied AI systems at enterprise scale
                  </p>

                  {isExpanded && (
                    <div className="space-y-3 pt-4 border-t border-border">
                      <h3 className="font-semibold text-primary">Technical Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Python",
                          "LangChain",
                          "LangGraph",
                          "RAG",
                          "Multi-Agent Systems",
                          "RAGAS",
                          "LangSmith",
                          "MCP",
                          "Google A2A",
                          "OpenAI",
                          "Anthropic",
                          "Vector DBs",
                          "Prompt Engineering",
                          "AI Evaluation",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
