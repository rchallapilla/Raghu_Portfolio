import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Raghu Challapilla - AI Product Manager",
  description: "AI Product Manager & Builder - Showcasing AI builds, technical demos, and engineering deep dives",
  keywords: [
    "AI Product Manager",
    "Artificial Intelligence",
    "RAG",
    "LangChain",
    "Multi-Agent Systems",
    "AI Engineering",
    "Machine Learning",
    "Product Management",
    "AI Applications",
    "Enterprise AI",
    "Forrester Award",
    "House Whisperer",
    "ModelGov",
  ],
  authors: [{ name: "Raghu Challapilla" }],
  creator: "Raghu Challapilla",
  publisher: "Raghu Challapilla",
  metadataBase: new URL("https://www.raghuchallapilla.com"),
  alternates: {
    canonical: "https://www.raghuchallapilla.com/",
  },
  openGraph: {
    title: "Raghu Challapilla - AI Product Manager",
    description: "AI Product Manager & Builder - Showcasing AI builds, technical demos, and engineering deep dives",
    url: "https://www.raghuchallapilla.com/",
    siteName: "Raghu Challapilla Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.raghuchallapilla.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raghu Challapilla - AI Product Manager Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghu Challapilla - AI Product Manager",
    description: "AI Product Manager & Builder - Showcasing AI builds, technical demos, and engineering deep dives",
    images: ["https://www.raghuchallapilla.com/og-image.png"],
    creator: "@raghuchallapilla",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  themeColor: "#3b82f6",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "RC Portfolio",
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Raghu Challapilla",
  jobTitle: "AI Product Manager",
  url: "https://www.raghuchallapilla.com",
  sameAs: [
    "https://www.linkedin.com/in/raghuscrum/",
    "https://github.com/rchallapilla",
  ],
  description: "AI Product Manager & Builder - Showcasing AI builds, technical demos, and engineering deep dives",
}

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Raghu Challapilla - AI Product Manager Portfolio",
  description: "Portfolio showcasing AI builds, technical demos, and engineering deep dives",
  url: "https://www.raghuchallapilla.com",
  mainEntity: {
    "@type": "Person",
    name: "Raghu Challapilla",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.raghuchallapilla.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Builds",
      item: "https://www.raghuchallapilla.com/#builds",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Technical Deep Dives",
      item: "https://www.raghuchallapilla.com/#videos",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "About",
      item: "https://www.raghuchallapilla.com/#about",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://www.loom.com" />
        <link rel="preconnect" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://www.loom.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
