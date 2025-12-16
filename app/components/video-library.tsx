"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Play } from "lucide-react"
import { VideoModal } from "@/components/video-modal"

const videos = [
  {
    id: 1,
    title: "Guardrails and Caching for AI",
    description:
      "Production-ready AI with security guardrails and 2-3x faster responses through intelligent caching strategies.",
    tags: ["Guardrails", "Caching", "Production AI"],
    loomUrl: "https://www.loom.com/share/1dec6ba553d64229bde655ec6469cfd7",
    embedCode:
      '<div style="position: relative; padding-bottom: 60.60606060606061%; height: 0;"><iframe src="https://www.loom.com/embed/1dec6ba553d64229bde655ec6469cfd7" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    github:
      "https://github.com/rchallapilla/AIE7/tree/16_Production_RAG_and_Guardrails/16_Production_RAG_and_Guardrails",
  },
  {
    id: 2,
    title: "A2A Agent-to-Agent Protocol",
    description:
      "Implementing Google's A2A protocol enabling independent agents from different vendors to discover and collaborate.",
    tags: ["A2A", "Google", "Multi-Agent"],
    loomUrl: "https://www.loom.com/share/7bdd66c0409c4a3a970929c03bfca94a",
    embedCode:
      '<div style="position: relative; padding-bottom: 64.1711229946524%; height: 0;"><iframe src="https://www.loom.com/embed/7bdd66c0409c4a3a970929c03bfca94a" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    github: "https://github.com/rchallapilla/AIE7/tree/15_A2A_LangGraph/15_A2A_LangGraph",
  },
  {
    id: 3,
    title: "LangSmith Studio & Modular Agents",
    description:
      "Building modular, deployable agent platforms with instant model/tool swapping using LangGraph Studio.",
    tags: ["LangSmith", "LangGraph", "Platform"],
    loomUrl: "https://www.loom.com/share/e1b57fe2d6f74bb296914c6a58697fd2",
    embedCode:
      '<div style="position: relative; padding-bottom: 68.63117870722432%; height: 0;"><iframe src="https://www.loom.com/embed/e1b57fe2d6f74bb296914c6a58697fd2" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    github: "https://github.com/rchallapilla/AIE7/blob/14_LangGraph_Platform/14_LangGraph_Platform/PROJECT_SUMMARY.md",
  },
  {
    id: 4,
    title: "Exploring MCP: Creating Tools for LLMs",
    description:
      "Deep dive into Model Context Protocol (MCP) - the standard for LLM clients to discover and utilize external tools and data.",
    tags: ["MCP", "Tools", "LLM"],
    loomUrl: "https://www.loom.com/share/e2ef7d303473480fa46443a11e89111d",
    embedCode:
      '<div style="position: relative; padding-bottom: 60.70826306913997%; height: 0;"><iframe src="https://www.loom.com/embed/e2ef7d303473480fa46443a11e89111d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    github: "https://github.com/rchallapilla/AIE7-MCP-Session/blob/main/server.py",
  },
  {
    id: 5,
    title: "Open Deep Research with Smaller Models",
    description:
      "Cost-effective AI research application using modular graph-based pipelines to produce high-quality outcomes efficiently.",
    tags: ["Research", "Orchestration", "Cost-Effective"],
    loomUrl: "https://www.loom.com/share/87b2a461a94746c2a95dbc248eb79314",
    embedCode:
      '<div style="position: relative; padding-bottom: 60.52173913043478%; height: 0;"><iframe src="https://www.loom.com/embed/87b2a461a94746c2a95dbc248eb79314" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    github:
      "https://github.com/rchallapilla/AIE7/blob/10_Open_DeepResearch/10_Open_DeepResearch/open-deep-research.ipynb",
  },
  {
    id: 6,
    title: "Advanced RAG Retrieval Strategies",
    description:
      "Implementing 6 retrieval strategies: BM25, multi-query, contextual compression, parent document, ensemble, and semantic chunking.",
    tags: ["RAG", "RAGAS", "LangChain"],
    loomUrl: "https://www.loom.com/share/3279fdf3391c4d86aeaf7be39d59caa6",
    embedCode:
      '<div style="position: relative; padding-bottom: 60.68003487358327%; height: 0;"><iframe src="https://www.loom.com/embed/3279fdf3391c4d86aeaf7be39d59caa6" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    github:
      "https://github.com/rchallapilla/AIE7/blob/09_Advanced_Retrieval/09_Advanced_Retrieval/Advanced_Retrieval_with_LangChain_Assignment.ipynb",
  },
  {
    id: 7,
    title: "Evaluating RAG with RAGAS",
    description:
      "Building robust evaluation frameworks for RAG and agentic applications using RAGAS with synthetic test data generation.",
    tags: ["RAGAS", "Evaluation", "Testing"],
    loomUrl: "https://www.loom.com/share/f5d88f5da6104edab323468bb59dbc14",
    embedCode:
      '<div style="position: relative; padding-bottom: 70.30303030303031%; height: 0;"><iframe src="https://www.loom.com/embed/f5d88f5da6104edab323468bb59dbc14" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    github:
      "https://github.com/rchallapilla/AIE7/blob/08_Evaluating_RAG_With_Ragas/08_Evaluating_RAG_With_Ragas/Evaluating_Agents_with_Ragas_(2025)_AI_Makerspace.ipynb",
  },
  {
    id: 8,
    title: "Synthetic Data Generation with LangSmith",
    description:
      "Creating synthetic test data for RAG pipeline evaluation using LangSmith for comprehensive quality assurance.",
    tags: ["LangSmith", "Synthetic Data", "Testing"],
    loomUrl: "https://www.loom.com/share/0a5404b985e84b7cacb4b4903a741db6",
    embedCode:
      '<div style="position: relative; padding-bottom: 61.63967611336032%; height: 0;"><iframe src="https://www.loom.com/embed/0a5404b985e84b7cacb4b4903a741db6" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    github:
      "https://github.com/rchallapilla/AIE7/blob/08_Evaluating_RAG_With_Ragas/07_Synthetic_Data_Generation_and_LangSmith/Synthetic_Data_Generation_RAGAS_%26_LangSmith_Assignment.ipynb",
  },
  {
    id: 9,
    title: "Multi-Agent LLM Systems",
    description:
      "Building sophisticated multi-agent systems using LangGraph for complex orchestration and coordination.",
    tags: ["LangGraph", "Multi-Agent", "Orchestration"],
    loomUrl: "https://www.loom.com/share/1cdb6b4e25d64b81bacc82b86b95e505",
    embedCode:
      '<div style="position: relative; padding-bottom: 69.11618669314797%; height: 0;"><iframe src="https://www.loom.com/embed/1cdb6b4e25d64b81bacc82b86b95e505" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    github:
      "https://github.com/rchallapilla/AIE7/blob/06_Multi_Agent_with_LangGraph/06_Multi_Agent_with_LangGraph/Multi_Agent_RAG_LangGraph.ipynb",
  },
  {
    id: 10,
    title: "Building Multi-Step Agents with LangGraph",
    description:
      "Creating intelligent agents capable of multi-step reasoning and multi-tool coordination using LangGraph.",
    tags: ["LangGraph", "Agents", "Tools"],
    loomUrl: "https://www.loom.com/share/2e9e6b2e98a04fc7b61703f122ddb9ff",
    embedCode:
      '<div style="position: relative; padding-bottom: 60.68003487358327%; height: 0;"><iframe src="https://www.loom.com/embed/2e9e6b2e98a04fc7b61703f122ddb9ff" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    github:
      "https://github.com/rchallapilla/AIE7/blob/05_Our_First_Agent_with_LangGraph/05_Our_First_Agent_with_LangGraph/Introduction_to_LangGraph_for_Agents_Assignment_Version.ipynb",
  },
  {
    id: 11,
    title: "Exploring LangSmith: LLM Observability",
    description:
      "Using LangSmith for monitoring performance, evaluating correctness, tracking latency, and debugging AI applications.",
    tags: ["LangSmith", "Observability", "Monitoring"],
    loomUrl: "https://www.loom.com/share/2f3b9097331a4ad48910ec4918754ce3",
    embedCode:
      '<div style="position: relative; padding-bottom: 62.882096069869%; height: 0;"><iframe src="https://www.loom.com/embed/2f3b9097331a4ad48910ec4918754ce3" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    github:
      "https://github.com/rchallapilla/AIE7/blob/s04-production-rag/04_Production_RAG/LangSmith_and_Evaluation.ipynb",
  },
  {
    id: 12,
    title: "Building RAG with LangChain & Python",
    description: "Complete RAG system implementation using LangChain, LangGraph, LangSmith, LCEL, and Python.",
    tags: ["RAG", "LangChain", "Python"],
    loomUrl: "https://www.loom.com/share/a6a120a479c34a6a97c132908074b539",
    embedCode:
      '<div style="position: relative; padding-bottom: 65.29080675422139%; height: 0;"><iframe src="https://www.loom.com/embed/a6a120a479c34a6a97c132908074b539" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
    github: null,
  },
]

const allTags = [
  "All",
  "MCP",
  "LangGraph",
  "RAGAS",
  "A2A",
  "RAG",
  "LangSmith",
  "Multi-Agent",
  "Guardrails",
  "Evaluation",
]

export function VideoLibrary() {
  const [selectedTag, setSelectedTag] = useState("All")
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null)

  const filteredVideos =
    selectedTag === "All"
      ? videos
      : videos.filter((video) => video.tags.some((tag) => tag.toLowerCase().includes(selectedTag.toLowerCase())))

  const videoSchemas = videos.map((video) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: "https://www.raghuchallapilla.com/og-image.png",
    uploadDate: new Date().toISOString(),
    contentUrl: video.loomUrl,
    embedUrl: video.loomUrl,
  }))

  return (
    <section id="videos" className="py-20 relative bg-secondary/20">
      {videoSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-mono text-4xl md:text-5xl font-bold">Technical Deep Dives</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technical demos covering advanced AI engineering topics
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
                className="font-mono text-xs"
              >
                {tag}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <Card
                key={video.id}
                className="glass-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <CardContent className="p-4 md:p-6">
                  <div className="space-y-4">
                    <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center group-hover:bg-secondary/70 transition-colors" aria-label={`Video thumbnail for ${video.title}`}>
                      <Play className="h-12 w-12 text-primary" aria-hidden="true" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{video.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {video.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {video.github && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="w-full bg-transparent"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={video.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                            <Github className="h-4 w-4" />
                            View Code
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

      {selectedVideo && <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />}
    </section>
  )
}
