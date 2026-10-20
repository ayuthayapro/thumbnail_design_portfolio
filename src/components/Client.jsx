import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CLIENT_DATA } from '../constants'

export default function Client() {
  const [activeSlide, setActiveSlide] = useState(0)

  const totalSlides = CLIENT_DATA.length

  const nextSlide = (e) => {
    e?.preventDefault()
    if (totalSlides <= 1) return
    setActiveSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = (e) => {
    e?.preventDefault()
    if (totalSlides <= 1) return
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <>
      <section
        className="elementor-element elementor-element-11267ec4 client-main-section e-flex e-con-boxed e-con e-parent e-lazyloaded"
        data-id="11267ec4"
        data-element_type="container"
        data-e-type="container"
        id="client"
      >
        {/* Alias anchor for backward compatibility */}
        <div id="testimonial" style={{ position: 'absolute', top: 0, left: 0, height: 0, width: 0, pointerEvents: 'none' }}></div>
        <div className="e-con-inner">
          {/* Spacer */}
          <div
            className="elementor-element elementor-element-c28d521 elementor-widget elementor-widget-spacer client-top-spacer"
            data-id="c28d521"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="spacer.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-spacer">
                <div className="elementor-spacer-inner"></div>
              </div>
            </div>
          </div>

          {/* Centered Heading: Client */}
          <div
            className="elementor-element elementor-element-5986e5b elementor-widget elementor-widget-heading client-heading-wrapper"
            data-id="5986e5b"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default client-heading-title">Client</h2>
            </div>
          </div>

          {/* Client Showcase Layout: Left Controls | Center Text | Right Photo */}
          <div className="client-showcase-wrapper">
            <div className="client-showcase-container">
              {/* Left Column: Navigation Buttons (fixed/stable on the left, independent of text height) */}
              <div className="client-nav-left-col">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="client-nav-btn client-prev-btn"
                  aria-label="Previous client"
                >
                  <ChevronLeft size={22} strokeWidth={2.5} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="client-nav-btn client-next-btn"
                  aria-label="Next client"
                >
                  <ChevronRight size={22} strokeWidth={2.5} />
                </button>
              </div>

              {/* Center Column: Client text (crossfade stage: all quotes stacked in same grid cell) */}
              <div className="client-text-col client-crossfade-stage">
                {CLIENT_DATA.map((client, index) => {
                  const isActive = index === activeSlide
                  return (
                    <div
                      key={`text-${client.id || index}`}
                      className={`client-slide-text ${isActive ? 'is-active' : ''}`}
                      aria-hidden={!isActive}
                    >
                      <h3 className="client-company-title">{client.name}</h3>
                      {client.quote && (
                        <p className="client-quote-text">
                          {client.quote}
                        </p>
                      )}
                      {(client.author || client.role) && (
                        <div className="client-meta-info">
                          {client.author && (
                            <p className="client-author-name">
                              <strong>{client.author}</strong>
                            </p>
                          )}
                          {(client.role || client.subscribers) && (
                            <p className="client-author-role">
                              <em>
                                {[client.role, client.subscribers].filter(Boolean).join(' - ')}
                              </em>
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Right Column: Client Photo (crossfade stage: photos stacked in same grid cell) */}
              <div className="client-photo-col client-crossfade-stage">
                {CLIENT_DATA.map((client, index) => {
                  const isActive = index === activeSlide
                  return (
                    <div
                      key={`photo-${client.id || index}`}
                      className={`client-photo-card client-slide-photo ${isActive ? 'is-active' : ''}`}
                      aria-hidden={!isActive}
                    >
                      <img
                        src={client.avatar}
                        alt={client.name || 'Client placeholder'}
                        className="client-photo-img"
                        loading="lazy"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider Below Client */}
      <div
        className="elementor-element elementor-element-c73b0e0 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-parent e-lazyloaded"
        data-id="c73b0e0"
        data-element_type="container"
        data-e-type="container"
      >
        <div
          className="elementor-element elementor-element-6bcf4127 elementor-widget__width-inherit elementor-widget elementor-widget-html"
          data-id="6bcf4127"
          data-element_type="widget"
          data-e-type="widget"
          data-widget_type="html.default"
        >
          <div className="elementor-widget-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 98"
              style={{ display: 'block', width: '100%', height: 'auto' }}
            >
              <path
                fill="#0260ef"
                fillOpacity="1"
                d="M0,96L80,80C160,64,320,32,480,26.7C640,21,800,43,960,48C1120,53,1280,43,1360,37.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
