import { useEffect, useRef, useState, useMemo } from 'react'
import Swiper from 'swiper'
import { SHOWCASED_CREATORS_DATA, CREATORS_STATS } from '#constants'

export default function ShowcasedCreators() {
  const sliderRef = useRef(null)
  const swiperInstanceRef = useRef(null)
  const statsSectionRef = useRef(null)
  const [activeCreatorIndex, setActiveCreatorIndex] = useState(0)
  const [hasAnimatedStats, setHasAnimatedStats] = useState(false)
  const [viewsCount, setViewsCount] = useState(CREATORS_STATS.views.target)
  const [likesCount, setLikesCount] = useState(CREATORS_STATS.likes.target)

  // 1. Base creators data
  const baseCreators = SHOWCASED_CREATORS_DATA

  // 2. Multiply slides pool to ensure seamless, infinite loop with ZERO empty/black space
  // even if there are only 3, 5, or 7 creators configured!
  const loopedSlides = useMemo(() => {
    const repeatCount = Math.max(4, Math.ceil(24 / Math.max(baseCreators.length, 1)))
    const slides = []
    for (let r = 0; r < repeatCount; r++) {
      baseCreators.forEach((creator, idx) => {
        slides.push({
          ...creator,
          uniqueKey: `${creator.id}-rep-${r}`,
          creatorIndex: idx,
        })
      })
    }
    return slides
  }, [baseCreators])

  // 3. Initialize Swiper engine with authentic Prime Slider Tango options
  useEffect(() => {
    if (!sliderRef.current) return

    const syncActiveCreator = (swiper) => {
      if (!swiper || !swiper.slides || swiper.activeIndex === undefined) return
      const activeSlide = swiper.slides[swiper.activeIndex]
      if (activeSlide) {
        const creatorIdx = activeSlide.getAttribute('data-creator-index')
        if (creatorIdx !== null) {
          setActiveCreatorIndex(parseInt(creatorIdx, 10))
        }
      }
    }

    const swiper = new Swiper(sliderRef.current, {
      loop: true,
      loopAdditionalSlides: 4,
      speed: 800,
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true,
      initialSlide: baseCreators.length, // Start at first creator in the middle set for instant full buffer
      grabCursor: true,
      slideToClickedSlide: true,
      watchSlidesProgress: true,
      resistance: false,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 1,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 40,
          slidesPerGroup: 1,
        },
      },
      on: {
        init: (s) => syncActiveCreator(s),
        slideChange: (s) => syncActiveCreator(s),
        slideChangeTransitionEnd: (s) => syncActiveCreator(s),
      },
    })

    swiperInstanceRef.current = swiper

    return () => {
      swiper.destroy(true, true)
      swiperInstanceRef.current = null
    }
  }, [baseCreators.length, loopedSlides])

  // 4. Click handler for pagination bullets: slides smoothly to the nearest copy of that creator
  const handleBulletClick = (targetIdx) => {
    if (!swiperInstanceRef.current) return
    const swiper = swiperInstanceRef.current
    const currentIndex = swiper.activeIndex

    let bestSlideIndex = -1
    let minDiff = Infinity

    swiper.slides.forEach((slideEl, idx) => {
      const creatorIdx = slideEl.getAttribute('data-creator-index')
      if (creatorIdx !== null && parseInt(creatorIdx, 10) === targetIdx) {
        const diff = Math.abs(idx - currentIndex)
        if (diff < minDiff) {
          minDiff = diff
          bestSlideIndex = idx
        }
      }
    })

    if (bestSlideIndex !== -1) {
      swiper.slideTo(bestSlideIndex, 800)
    }
  }

  // 5. Animate counter numbers when section scrolls into viewport
  useEffect(() => {
    if (!statsSectionRef.current || hasAnimatedStats) return
    if (CREATORS_STATS.views.target === 0 && CREATORS_STATS.likes.target === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setHasAnimatedStats(true)
          const duration = 2000
          const startTime = performance.now()

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)

            setViewsCount(Math.round(easeOut * CREATORS_STATS.views.target))
            setLikesCount(parseFloat((easeOut * CREATORS_STATS.likes.target).toFixed(1)))

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setViewsCount(CREATORS_STATS.views.target)
              setLikesCount(CREATORS_STATS.likes.target)
            }
          }

          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(statsSectionRef.current)
    return () => observer.disconnect()
  }, [hasAnimatedStats])

  return (
    <>
      {/* Back To Top anchor / trigger */}
      <div
        className="elementor-element elementor-element-72dbcd8a e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-parent e-lazyloaded"
        data-id="72dbcd8a"
        data-element_type="container"
        data-e-type="container"
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-60ef75e0 wpr-stt-btn-align-fixed wpr-stt-btn-align-fixed-right elementor-widget elementor-widget-wpr-back-to-top"
            data-id="60ef75e0"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="wpr-back-to-top.default"
          >
            <div className="elementor-widget-container">
              <div className="wpr-stt-wrapper">
                <div
                  className="wpr-stt-btn"
                  data-settings='{"animation":"fade","animationOffset":"0","animationDuration":"200","fixed":"fixed","scrolAnim":"800"}'
                  style={{ opacity: '6.65847e-05', visibility: 'visible' }}
                >
                  <span className="wpr-stt-icon">
                    <svg className="e-font-icon-svg e-fas-arrow-up" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Showcased Creators Section */}
      <div
        className="elementor-element elementor-element-6e7afaa2 e-con-full section e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-parent e-lazyloaded"
        data-id="6e7afaa2"
        data-element_type="container"
        data-e-type="container"
        id="creators"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-element elementor-element-4a991e7 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child" data-id="4a991e7" data-element_type="container" data-e-type="container" />

        {/* Section Heading */}
        <div
          className="elementor-element elementor-element-51cef126 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child"
          data-id="51cef126"
          data-element_type="container"
          data-e-type="container"
        >
          <div className="elementor-element elementor-element-a0b276d elementor-widget elementor-widget-heading" data-id="a0b276d" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">Showcased creators</h2>
            </div>
          </div>
        </div>

        {/* Dynamic Tango Carousel */}
        <div
          className="elementor-element elementor-element-1ba1ad0b e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child"
          data-id="1ba1ad0b"
          data-element_type="container"
          data-e-type="container"
        >
          <div
            className="elementor-element elementor-element-5d4e57f bdt-pagination-hide-yes bdt-carousel-style-carousel elementor-widget elementor-widget-prime-slider-tango e-widget-swiper"
            data-id="5d4e57f"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="prime-slider-tango.default"
          >
            <div className="elementor-widget-container">
              <div className="bdt-prime-slider">
                <div id="bdt-prime-slider-5d4e57f" className="bdt-prime-slider-tango elementor-swiper">
                  {/* Swiper Container */}
                  <div
                    ref={sliderRef}
                    className="swiper-tango swiper"
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="Tango Slider"
                    dir="ltr"
                  >
                    <div className="swiper-wrapper">
                      {loopedSlides.map((creator) => {
                        const words = creator.name.split(' ')
                        const firstWord = words[0]
                        const restWords = words.slice(1).join(' ')

                        return (
                          <div
                            key={creator.uniqueKey}
                            className="swiper-slide bdt-item"
                            role="group"
                            aria-roledescription="slide"
                            data-creator-index={creator.creatorIndex}
                          >
                            <div className="bdt-image-wrap">
                              <img
                                loading="lazy"
                                decoding="async"
                                width={creator.width}
                                height={creator.height}
                                src={creator.image}
                                className="bdt-img"
                                alt={creator.name}
                              />
                            </div>
                            <div className="bdt-content-wrap">
                              <div className="bdt-subtitle" data-reveal="reveal-active">
                                {creator.subscribers}
                              </div>
                              <h1 className="bdt-title" data-reveal="reveal-active">
                                <span className="frist-word">{firstWord}</span>
                                {restWords ? ` ${restWords}` : ''}
                              </h1>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                  </div>

                  {/* Swiper Pagination Bullets (Synchronized with unique creators count) */}
                  <div
                    className="swiper-pagination reveal-muted swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
                  >
                    {baseCreators.map((_, idx) => (
                      <span
                        key={idx}
                        role="button"
                        tabIndex={0}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`swiper-pagination-bullet ${activeCreatorIndex === idx ? 'swiper-pagination-bullet-active' : ''}`}
                        onClick={() => handleBulletClick(idx)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            handleBulletClick(idx)
                          }
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Counter Stats Container */}
        <div
          ref={statsSectionRef}
          style={{ display: 'contents' }}
        >
          {/* Total Views */}
          <div
            className="elementor-element elementor-element-48b16b6e e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child"
            data-id="48b16b6e"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-730cdca4 elementor-widget elementor-widget-counter"
              data-id="730cdca4"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="counter.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-counter">
                  <div className="elementor-counter-title">{CREATORS_STATS.views.label}</div>
                  <div className="elementor-counter-number-wrapper">
                    <span className="elementor-counter-number-prefix"></span>
                    <span
                      className="elementor-counter-number"
                      data-duration="2000"
                      data-to-value={CREATORS_STATS.views.target}
                      data-from-value="0"
                      data-delimiter=","
                    >
                      {viewsCount}
                    </span>
                    <span className="elementor-counter-number-suffix">{CREATORS_STATS.views.suffix}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total Likes */}
          <div
            className="elementor-element elementor-element-6734cb98 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child"
            data-id="6734cb98"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-2280d00f elementor-widget elementor-widget-counter"
              data-id="2280d00f"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="counter.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-counter">
                  <div className="elementor-counter-title">{CREATORS_STATS.likes.label}</div>
                  <div className="elementor-counter-number-wrapper">
                    <span className="elementor-counter-number-prefix"></span>
                    <span
                      className="elementor-counter-number"
                      data-duration="2000"
                      data-to-value={CREATORS_STATS.likes.target}
                      data-from-value="0"
                      data-delimiter=","
                    >
                      {likesCount % 1 === 0 ? likesCount : likesCount.toFixed(1)}
                    </span>
                    <span className="elementor-counter-number-suffix">{CREATORS_STATS.likes.suffix}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
