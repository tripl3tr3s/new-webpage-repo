import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/lib/i18n-context"
import MouseTrail from "@/components/mouse-trail"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Triple Tres Crypto Research Portfolio",
  description: "Portfolio of a blockchain and cryptocurrency researcher / analyst.",
    generator: 'Triple Tres',
  applicationName: 'Triple Tres Crypto Research Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange={false}>
          <I18nProvider>
            <MouseTrail />
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}