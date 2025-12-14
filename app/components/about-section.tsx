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
                    Product Leader with hands-on AI engineering skills delivering applied AI systems at enterprise scale
                  </p>

                  {isExpanded && (
                    <div className="space-y-3 pt-4 border-t border-border">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-primary mb-3">Highlights</h3>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold mt-0.5">•</span>
                              <span>Forrester Award Winning AI @Bank of America</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold mt-0.5">•</span>
                              <span>Co-founder of House Whisperer AI with 12x faster reports</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold mt-0.5">•</span>
                              <span>20+ AI applications built & shipped</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold mt-0.5">•</span>
                              <span>Drove 23% support call reduction by year two</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-3">Technical Expertise</h3>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Python",
                              "LangChain",
                              "LangGraph",
                              "RAG",
                              "Multi-Agent Systems",
                              "Chunking & Retrieval Strategies",
                              "RAGAS",
                              "LangSmith",
                              "Observability",
                              "MCP",
                              "Google A2A",
                              "Vector DBs",
                              "Qdrant",
                              "Synthetic Test Data",
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
