import { useEffect, useRef, useState } from 'react'

export default function AboutProblem() {
  const buttonRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    )

    if (buttonRef.current) {
      observer.observe(buttonRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* =========================================================
          SECTION 1: ABOUT ME
          ========================================================= */}
      <div
        className="elementor-element elementor-element-34e0e02b e-con-full scroll-section3 a e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-parent e-lazyloaded"
        data-id="34e0e02b"
        data-element_type="container"
        data-e-type="container"
        id="about-me"
      >
        {/* Left Side: "About me" Title */}
        <div
          className="elementor-element elementor-element-55bba3b4 e-con-full scroll-container3 e-flex wpr-particle-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no elementor-invisible e-con e-child"
          data-id="55bba3b4"
          data-element_type="container"
          data-e-type="container"
          data-settings='{"position":"absolute","animation":"fadeInLeft"}'
        >
          <div
            className="elementor-element elementor-element-7e14423c scroll-text3 elementor-widget elementor-widget-heading"
            data-id="7e14423c"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="heading.default"
            style={{ transform: 'translateY(-2.2px)' }}
          >
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
                About
                <br />
                me
              </h2>
            </div>
          </div>
        </div>

        {/* Right Side: Bio / Description Text */}
        <div
          className="elementor-element elementor-element-675e2dfa e-con-full rotated-container e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no elementor-invisible e-con e-child"
          data-id="675e2dfa"
          data-element_type="container"
          data-e-type="container"
          data-settings='{"position":"absolute","animation":"fadeInRight"}'
        >
          <div
            className="elementor-element elementor-element-367f50c6 elementor-widget elementor-widget-heading"
            data-id="367f50c6"
            data-element_type="widget"
            data-e-type="widget"
            data-settings='{"_animation":"none"}'
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
                I am Menno and I help serious YouTube creators turn ideas into high-performing titles and thumbnails, backed by strategy and market research, to drive more views. I've worked with some of the biggest creators on the platforms like Jeff Nippard, James West &amp; vidIQ.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION 2: THE PROBLEM
          ========================================================= */}
      <div
        className="elementor-element elementor-element-f7d1553 e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-parent e-lazyloaded"
        data-id="f7d1553"
        data-element_type="container"
        data-e-type="container"
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-cdf2a38 e-con-full scroll-container5 e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child"
            data-id="cdf2a38"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-347fc0b elementor-widget elementor-widget-spacer"
              data-id="347fc0b"
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

            <div
              className="elementor-element elementor-element-35f3e13 elementor-widget elementor-widget-spacer"
              data-id="35f3e13"
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

            <div
              className="elementor-element elementor-element-db3412f elementor-widget elementor-widget-spacer"
              data-id="db3412f"
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

            <div
              className="elementor-element elementor-element-f00a891 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child"
              data-id="f00a891"
              data-element_type="container"
              data-e-type="container"
            >
              {/* "The problem" Title */}
              <div
                className="elementor-element elementor-element-45c1671 scroll-text5 elementor-widget elementor-widget-heading"
                data-id="45c1671"
                data-element_type="widget"
                data-e-type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">The problem</h2>
                </div>
              </div>

              <div
                className="elementor-element elementor-element-eb5bc0f elementor-widget elementor-widget-spacer"
                data-id="eb5bc0f"
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

              {/* Problem Bullets & Description */}
              <div
                className="elementor-element elementor-element-2eb1f5b elementor-widget elementor-widget-heading"
                data-id="2eb1f5b"
                data-element_type="widget"
                data-e-type="widget"
                data-settings='{"_animation":"none"}'
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                      Most creators invest hours upon hours in production. But your thumbnail has 2 seconds to win. Viewers don’t read they scan and in that moment your thumbnail either creates curiosity or gets ignored.
                    <br /><br />

                      most channels:

                    <br /><br />

                    • repeat the title instead of adding a new hook
                    <br />
                    • promise something the video doesn’t deliver
                    <br />
                  </h2>
                </div>
              </div>

              {/* Action Button: Curious? Let's work */}
              <div
                className="elementor-element elementor-element-dea5f8d elementor-widget elementor-widget-html"
                data-id="dea5f8d"
                data-element_type="widget"
                data-e-type="widget"
                data-widget_type="html.default"
              >
                <div className="elementor-widget-container">
                  <div
                    ref={buttonRef}
                    className={`curious-btn-box spring-pop-box ${isVisible ? 'is-visible' : ''}`}
                  >
                    <a href="#contact" className="custom-button-whitebg is-nav w-inline-block">
                      <div className="custom-button-wrapper-whitebg">
                        <div className="custom-button-text-whitebg button-text">
                          Curious? Let's work
                        </div>
                        <div className="custom-button-text-hidden-whitebg button-text-hidden">
                          Curious? Let's work
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SECTION 3: BLUE WAVE DIVIDER
          ========================================================= */}
      <div
        className="elementor-element elementor-element-6001f87f e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-parent e-lazyloaded"
        data-id="6001f87f"
        data-element_type="container"
        data-e-type="container"
      >
        <div
          className="elementor-element elementor-element-2485c061 elementor-widget__width-inherit elementor-widget elementor-widget-html"
          data-id="2485c061"
          data-element_type="widget"
          data-e-type="widget"
          data-widget_type="html.default"
        >
          <div className="elementor-widget-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#0260ef"
                fillOpacity="1"
                d="M0,96L80,80C160,64,320,32,480,26.7C640,21,800,43,960,48C1120,53,1280,43,1360,37.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
