import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/lib/i18n-context"
import MouseTrail from "@/components/mouse-trail"
import { AnalyticsTracker } from "@/components/analytics-tracker"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Triple Tres - AI Automation Consultant for Mexican PyMEs",
  description: "n8n-certified automation specialist helping Mexican businesses unlock growth through intelligent AI workflows. From manual chaos to streamlined systems that deliver ROI.",
  generator: 'Triple Tres',
  applicationName: 'Triple Tres AI Automation',
  keywords: ['AI automation', 'n8n', 'workflow automation', 'Mexican PyMEs', 'business automation', 'AI consultant', 'intelligent workflows', 'process automation', 'AI Agents', 'LLM Integration'],
  authors: [{ name: 'Triple Tres' }],
  openGraph: {
    title: 'Triple Tres - AI Automation Consultant',
    description: 'n8n-certified automation specialist transforming Mexican businesses with intelligent AI workflows',
    type: 'website',
    locale: 'es_MX',
    alternateLocale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="a2eb1721-bfa8-40ef-b6e4-0a4605124678"
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange={false}>
          <I18nProvider>
            <MouseTrail />
            <AnalyticsTracker />
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}