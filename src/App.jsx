import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import {
  Navbar,
  Hero,
  AboutProblem,
  LatestThumbnails,
  Client,
  Faq,
  ShowcasedCreators,
  ContactSection,
  Footer,
  CustomCursor,
} from '#components'

export default function App() {
  useEffect(() => {
    // 1. Initialize Lenis: smooth anchor navigation, direct mouse wheel scrolling
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: false, // 100% direct 1:1 scroll based on user's mouse wheel (no lag or drift)
      touchMultiplier: 1,
    })
    window.__lenis = lenis

    // 2. Force manual scroll restoration so the browser doesn't auto-jump on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // 3. Clear any lingering hash (e.g. #contact) and reset viewport to top
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
    lenis.scrollTo(0, { immediate: true })

    // 4. Intercept internal anchor clicks so they smoothly glide with Lenis
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (href && href.length > 1) {
        let targetEl = document.querySelector(href)
        if (!targetEl && (href === '#client' || href === '#testimonial')) {
          targetEl = document.querySelector('#client') || document.querySelector('#testimonial')
        }
        if (targetEl) {
          e.preventDefault()
          lenis.scrollTo(targetEl, {
            offset: -85,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          })
          window.history.pushState(null, '', href)
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    // 5. Universal Spring Pop & Rise observer for all animated action/text boxes across the site
    const springElements = document.querySelectorAll('.spring-pop-box')
    const springObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    )
    springElements.forEach((el) => springObserver.observe(el))

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      springObserver.disconnect()
      lenis.destroy()
      delete window.__lenis
    }
  }, [])

  return (
    <div className="elementor elementor-1284">
      {/* Authentic Ambient Orange Cursor */}
      <CustomCursor />

      {/* Navigation Header & Mobile Menu */}
      <Navbar />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section & Wave Divider */}
        <Hero />

        {/* About Me & The Problem */}
        <AboutProblem />

        {/* 24 Latest Thumbnails & 1.75x Zoom Popup */}
        <LatestThumbnails />

        {/* Client Slider */}
        <Client />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Showcased Creators */}
        <ShowcasedCreators />

        {/* 60-Minute Strategy Session & Booking */}
        <ContactSection />
      </main>

      {/* Footer & Back to Top */}
      <Footer />
    </div>
  )
}
