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
  const engagementStart = useRef<number>(Date.now())
  const lastActivity = useRef<number>(Date.now())
  const isUserActive = useRef<boolean>(true)

  useEffect(() => {
    // Wait for Umami to load
    const checkUmami = setInterval(() => {
      if (window.umami) {
        clearInterval(checkUmami)
        initializeTracking()
      }
    }, 100)

    // Setup engagement tracking
    const activityEvents = ["mousedown", "keydown", "scroll", "touchstart"]
    const handleActivity = () => {
      lastActivity.current = Date.now()
      if (!isUserActive.current) {
        isUserActive.current = true
        engagementStart.current = Date.now()
      }
    }

    activityEvents.forEach(event => window.addEventListener(event, handleActivity, { passive: true }))

    // Check for inactivity every 10 seconds
    const inactivityCheck = setInterval(() => {
      if (Date.now() - lastActivity.current > 30000 && isUserActive.current) {
        // User has been idle for 30 seconds
        trackEngagement("idle-timeout")
        isUserActive.current = false
      }
    }, 10000)

    const handleUnload = () => trackEngagement("page-unload")
    window.addEventListener("beforeunload", handleUnload)

    return () => {
      clearInterval(checkUmami)
      clearInterval(inactivityCheck)
      window.removeEventListener("beforeunload", handleUnload)
      activityEvents.forEach(event => window.removeEventListener(event, handleActivity))
      observerRef.current?.disconnect()
    }
  }, [])

  const trackEngagement = (trigger: string) => {
    if (!isUserActive.current) return

    const duration = Math.round((Date.now() - engagementStart.current) / 1000)
    if (duration > 0) {
      window.umami?.track("engagement-time", {
        duration,
        trigger,
        path: window.location.pathname
      })
    }
  }

  const initializeTracking = () => {
    // Track initial page load
    window.umami?.track("page-load", {
      language: navigator.language,
      screen: `${window.screen.width}x${window.screen.height}`,
      referrer: document.referrer
    })

    // Set up section view tracking
    trackSectionViews()

    // Track scroll depth
    trackScrollDepth()

    // Track button clicks with enhanced attribute support
    trackButtonClicks()

    // Track form submissions
    trackFormSubmissions()

    // Track external links
    trackExternalLinks()
  }

  const trackSectionViews = () => {
    const sections = document.querySelectorAll("section[id], main > div[id]")

    const observerOptions = {
      threshold: [0.1, 0.5], // Track at 10% and 50% visibility
      rootMargin: "0px",
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id || entry.target.getAttribute("data-section") || "unknown"

        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          // Section became mostly visible
          if (!sectionTimers.current.has(sectionId)) {
            sectionTimers.current.set(sectionId, Date.now())
            window.umami?.track("section-view", {
              section: sectionId,
              timestamp: new Date().toISOString(),
            })
          }
        } else if (!entry.isIntersecting || entry.intersectionRatio < 0.1) {
          // Section left view - calculate time spent
          const startTime = sectionTimers.current.get(sectionId)
          if (startTime) {
            const timeSpent = Math.round((Date.now() - startTime) / 1000) // in seconds

            if (timeSpent > 2) { // Only track if spent more than 2 seconds
              window.umami?.track("section-dwell", {
                section: sectionId,
                duration: timeSpent,
                unit: "seconds",
              })
            }
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

      if (documentHeight === 0) return

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
      const element = target.closest("button, a, [data-umami-event]") as HTMLElement

      if (element) {
        // Prioritize explicit data attribute
        const eventName = element.getAttribute("data-umami-event")

        if (eventName) {
          // If explicit event name provided, track it directly
          const eventData: Record<string, any> = {
            section: findParentSection(element),
            text: element.innerText?.substring(0, 50) || "No Text"
          }

          // Add any other data-umami-* attributes
          Array.from(element.attributes).forEach(attr => {
            if (attr.name.startsWith("data-umami-") && attr.name !== "data-umami-event") {
              const key = attr.name.replace("data-umami-", "")
              eventData[key] = attr.value
            }
          })

          window.umami?.track(eventName, eventData)
          return
        }

        // Fallback for generic buttons without attributes
        const isButton = element.tagName === "BUTTON" || element.getAttribute("role") === "button" || element.classList.contains("btn")

        if (isButton) {
          const buttonText = element.textContent?.trim().substring(0, 50) || "Unknown Button"
          const buttonId = element.id || "unnamed"

          window.umami?.track("button-click", {
            button: buttonText,
            id: buttonId,
            section: findParentSection(element),
          })
        }
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
        // Skip if already tracked by data-umami-event
        if (link.getAttribute("data-umami-event")) return

        const isExternal =
          link.hostname !== window.location.hostname && link.hostname !== ""

        if (isExternal) {
          window.umami?.track("external-link", {
            url: link.href,
            text: link.textContent?.trim().substring(0, 50) || "Unknown Link",
            destination: link.hostname,
          })
        }
      }
    })
  }

  const findParentSection = (element: Element): string => {
    const section = element.closest("section[id], main > div[id]")
    return section?.id || section?.getAttribute("data-section") || "global"
  }

  return null
}
