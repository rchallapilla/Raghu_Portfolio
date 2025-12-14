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
  generator: "v0.app",
  openGraph: {
    title: "Raghu Challapilla - AI Product Manager",
    description: "AI Product Manager & Builder - Showcasing AI builds, technical demos, and engineering deep dives",
    url: "https://www.raghuchallapilla.com/",
    siteName: "Raghu Challapilla Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png", // You'll need to add this image to public folder
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
    images: ["/og-image.png"], // Same image for Twitter
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
