"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void
      identify: (data: Record<string, any>) => void
    }
  }
}

export function AnalyticsTracker() {
  const sectionTimers = useRef<Map<string, number>>(new Map())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Wait for Umami to load
    const checkUmami = setInterval(() => {
      if (window.umami) {
        clearInterval(checkUmami)
        initializeTracking()
      }
    }, 100)

    return () => clearInterval(checkUmami)
  }, [])

  const initializeTracking = () => {
    // Track initial page load
    window.umami?.track("page-load", {
      language: navigator.language,
      screen: `${window.screen.width}x${window.screen.height}`,
    })

    // Set up section view tracking
    trackSectionViews()

    // Track scroll depth
    trackScrollDepth()

    // Track button clicks
    trackButtonClicks()

    // Track form submissions
    trackFormSubmissions()

    // Track external links
    trackExternalLinks()
  }

  const trackSectionViews = () => {
    const sections = document.querySelectorAll("section[id], main > div[id]")

    const observerOptions = {
      threshold: 0.5, // Trigger when 50% of section is visible
      rootMargin: "0px",
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id || entry.target.getAttribute("data-section")

        if (entry.isIntersecting) {
          // Section entered view
          sectionTimers.current.set(sectionId, Date.now())

          window.umami?.track("section-view", {
            section: sectionId,
            timestamp: new Date().toISOString(),
          })
        } else {
          // Section left view - calculate time spent
          const startTime = sectionTimers.current.get(sectionId)
          if (startTime) {
            const timeSpent = Math.round((Date.now() - startTime) / 1000) // in seconds

            window.umami?.track("section-time", {
              section: sectionId,
              duration: timeSpent,
              unit: "seconds",
            })

            sectionTimers.current.delete(sectionId)
          }
        }
      })
    }, observerOptions)

    sections.forEach((section) => observerRef.current?.observe(section))
  }

  const trackScrollDepth = () => {
    let maxScroll = 0
    const milestones = [25, 50, 75, 100]
    const tracked = new Set<number>()

    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      const scrollPercent = Math.round(((scrollTop + windowHeight) / documentHeight) * 100)

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent

        milestones.forEach((milestone) => {
          if (scrollPercent >= milestone && !tracked.has(milestone)) {
            tracked.add(milestone)
            window.umami?.track("scroll-depth", {
              depth: milestone,
              unit: "percent",
            })
          }
        })
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }

  const trackButtonClicks = () => {
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement
      const button = target.closest("button, a[role='button']")

      if (button) {
        const buttonText = button.textContent?.trim() || "Unknown Button"
        const buttonId = button.id || button.className || "unnamed"

        window.umami?.track("button-click", {
          button: buttonText,
          id: buttonId,
          section: findParentSection(button),
        })
      }
    })
  }

  const trackFormSubmissions = () => {
    document.addEventListener("submit", (e) => {
      const form = e.target as HTMLFormElement
      const formId = form.id || form.name || "contact-form"

      window.umami?.track("form-submit", {
        form: formId,
        section: findParentSection(form),
      })
    })
  }

  const trackExternalLinks = () => {
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")

      if (link && link.href) {
        const isExternal =
          link.hostname !== window.location.hostname && link.hostname !== ""

        if (isExternal) {
          window.umami?.track("external-link", {
            url: link.href,
            text: link.textContent?.trim() || "Unknown Link",
            destination: link.hostname,
          })
        }
      }
    })
  }

  const findParentSection = (element: Element): string => {
    const section = element.closest("section[id], main > div[id]")
    return section?.id || section?.getAttribute("data-section") || "unknown"
  }

  return null // This component doesn't render anything
}
