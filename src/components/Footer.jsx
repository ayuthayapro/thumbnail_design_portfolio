import { useState, useEffect } from 'react'
import { CONTACT_CONTENT } from '#constants'

const NAV_ITEMS = [
  { label: 'About me', href: '#about-me' },
  { label: 'The process', href: '#theprocess' },
  { label: 'Latest thumbnails', href: '#latest-thumbnails' },
  { label: 'Testimonials', href: '#testimonial' },
  { label: 'FAQ', href: '#FAQ' },
  { label: 'Thumbnail Collection', href: '#latest-thumbnails' },
  { label: "Let's talk!", href: '#contact' },
]

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 150)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetSelector) => {
    if (e?.preventDefault) e.preventDefault()
    let target = document.querySelector(targetSelector)
    if (!target && (targetSelector === '#client' || targetSelector === '#testimonial')) {
      target = document.querySelector('#client') || document.querySelector('#testimonial')
    }
    if (!target && (targetSelector === '#faq' || targetSelector === '#FAQ')) {
      target = document.querySelector('#FAQ') || document.querySelector('#faq')
    }
    if (!target && targetSelector === '#theprocess') {
      target = document.querySelector('#about-me')
    }
    if (target) {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, {
          offset: -85,
          duration: 1.2,
        })
      } else {
        const navOffset = 85
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - navOffset,
          behavior: 'smooth',
        })
      }
    }
  }

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Outer wrapper matching black background of contact section above eliminates any white edge/corner gap */}
      <div className="authentic-footer-outer-wrapper">
        <footer className="authentic-site-footer">
          <div className="authentic-footer-inner">
            {/* Top Row: Nav Links & Social Icons (No Logo) */}
            <div className="authentic-footer-main-row">
              {/* Left Balance Spacer (Preserves perfect centering of Nav links without any logo) */}
              <div className="authentic-footer-spacer" aria-hidden="true" />

              {/* Center: Navigation Links */}
              <nav className="authentic-footer-nav-col" aria-label="Footer navigation">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="footer-button-container">
                    <a
                      href={item.href}
                      className="button is-nav w-inline-block footer-nav-btn"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      <div className="button-text-wrapper">
                        <div className="button-text knoptekst">{item.label}</div>
                        <div className="button-text-hidden knoptekst-verborgen">{item.label}</div>
                      </div>
                    </a>
                  </div>
                ))}
              </nav>

              {/* Right: User's Social Channels */}
              <div className="authentic-footer-social-col">
                {/* Telegram */}
                <a
                  href={CONTACT_CONTENT.channels.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="authentic-footer-social-link"
                  aria-label="Telegram"
                >
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    fill="#ffffff"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.7 8.01c-.13.57-.46.71-.94.44l-2.6-1.92-1.25 1.21c-.14.14-.26.26-.53.26l.19-2.65 4.83-4.36c.21-.19-.05-.29-.32-.11l-5.97 3.76-2.57-.8c-.56-.17-.57-.56.12-.83l10.05-3.87c.47-.17.87.11.72.86z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={CONTACT_CONTENT.channels.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="authentic-footer-social-link"
                  aria-label="Facebook"
                >
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#ffffff"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@AyuthayaPro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="authentic-footer-social-link"
                  aria-label="YouTube"
                >
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg e-fab-youtube"
                    viewBox="0 0 576 512"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#ffffff"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                  </svg>
                </a>

                {/* Envelope / Email */}
                <a
                  href="mailto:ayutiatabb@gmail.com"
                  className="authentic-footer-social-link"
                  aria-label="Email"
                >
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg e-fas-envelope"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#ffffff"
                  >
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Bottom Row: Centered Copyright Claimed as Bo Ayuthaya */}
            <div className="authentic-footer-bottom-row">
              <p className="authentic-footer-copyright">
                Copyright © 2025 | Powered by Bo Ayuthaya
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`authentic-back-to-top-btn ${showBackToTop ? 'is-visible' : ''}`}
        aria-label="Back to top"
      >
        <span className="authentic-back-to-top-icon">
          <svg
            aria-hidden="true"
            className="e-font-icon-svg e-fas-arrow-up"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
          </svg>
        </span>
      </button>
    </>
  )
}
