import { useState } from 'react'
import { FAQ_ITEMS } from '../constants'

export default function Faq() {
  // First item open by default matching Photo 1 ("Do you have a YouTube channel?")
  const [openId, setOpenId] = useState('faq-3')

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <>
      <div
        className="elementor-element elementor-element-7e692ff3 scroll-section4 e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-parent e-lazyloaded"
        data-id="7e692ff3"
        data-element_type="container"
        data-e-type="container"
        id="faq"
        data-settings='{"background_background":"classic"}'
      >
        <div className="e-con-inner">
          {/* Left Column: Heading */}
          <div
            className="elementor-element elementor-element-64b14ec1 e-con-full scroll-container4 e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child animated fadeInLeft"
            data-id="64b14ec1"
            data-element_type="container"
            data-e-type="container"
            id="FAQ"
            data-settings='{"background_background":"classic","animation":"fadeInLeft"}'
          >
            <div
              className="elementor-element elementor-element-772bb599 scroll-text4 elementor-widget elementor-widget-heading"
              data-id="772bb599"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Frequently
                  <br />
                  asked
                  <br />
                  questions
                </h2>
              </div>
            </div>
          </div>

          {/* Right Column: CTA Button + Dynamic Animated Accordion */}
          <div
            className="elementor-element elementor-element-73f3cdf2 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child"
            data-id="73f3cdf2"
            data-element_type="container"
            data-e-type="container"
          >
            {/* Always visible LET'S TALK button */}
            <div
              className="elementor-element elementor-element-27192660 elementor-widget elementor-widget-html"
              data-id="27192660"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="html.default"
              style={{ width: '100%', marginBottom: '18px' }}
            >
              <div className="elementor-widget-container" style={{ width: '100%' }}>
                <a
                  href="#contact"
                  className="custom-button-whitebg is-nav w-inline-block faq-black-btn"
                >
                  <div className="custom-button-wrapper-whitebg">
                    <div className="custom-button-text-whitebg button-text">LET'S TALK</div>
                    <div className="custom-button-text-hidden-whitebg button-text-hidden">
                      LET'S TALK
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-6eb8a1e3 faqtop elementor-widget elementor-widget-accordion"
              data-id="6eb8a1e3"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="accordion.default"
              style={{ width: '100%' }}
            >
              <div className="elementor-widget-container" style={{ width: '100%' }}>
                <div className="elementor-accordion" role="region" style={{ width: '100%' }}>
                  {(FAQ_ITEMS || []).map((item, index) => {
                    const isOpen = openId === item.id
                    return (
                      <div className="elementor-accordion-item" key={item.id || index}>
                        <div
                          className={`elementor-tab-title ${isOpen ? 'elementor-active' : ''}`}
                          role="button"
                          aria-expanded={isOpen}
                          tabIndex={0}
                          onClick={() => toggleItem(item.id)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              toggleItem(item.id)
                            }
                          }}
                        >
                          <span
                            className="elementor-accordion-icon elementor-accordion-icon-left"
                            aria-hidden="true"
                          >
                            <svg
                              className={`e-font-icon-svg e-fas-angle-down faq-chevron-icon ${
                                isOpen ? 'is-rotated' : ''
                              }`}
                              viewBox="0 0 320 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                            </svg>
                          </span>
                          <span className="elementor-accordion-title">{item.question}</span>
                        </div>

                        {/* Smooth Fluid CSS Accordion Animation */}
                        <div className={`faq-accordion-wrapper ${isOpen ? 'is-open' : ''}`}>
                          <div className="faq-accordion-inner">
                            <div className="elementor-tab-content elementor-clearfix">
                              {item.answer && !item.inlineLink && <p>{item.answer}</p>}
                              {item.inlineLink && (
                                <p>
                                  {item.answer}{' '}
                                  <a
                                    href={item.inlineLink.url}
                                    target={item.inlineLink.url.startsWith('http') ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                    style={{
                                      color: '#0260ef',
                                      fontWeight: 700,
                                      textDecoration: 'underline',
                                    }}
                                  >
                                    {item.inlineLink.text}
                                  </a>{' '}
                                  {item.answerAfterLink}
                                </p>
                              )}
                              {item.bullets && item.bullets.length > 0 && (
                                <ul>
                                  {item.bullets.map((bullet, idx) => (
                                    <li key={idx}>{bullet}</li>
                                  ))}
                                </ul>
                              )}
                              {item.linkUrl && (
                                <p style={{ marginTop: '10px' }}>
                                  <a
                                    href={item.linkUrl}
                                    target={item.linkUrl.startsWith('http') ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                    style={{
                                      color: '#0260ef',
                                      fontWeight: 700,
                                      textDecoration: 'underline',
                                    }}
                                  >
                                    {item.linkText || 'Click here'}
                                  </a>
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
