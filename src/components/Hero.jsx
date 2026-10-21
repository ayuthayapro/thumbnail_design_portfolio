import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const link = document.getElementById('fake-link')
    const cursorImage = document.getElementById('cursor-image')
    if (!link || !cursorImage) return

    const handleMouseMove = (e) => {
      cursorImage.style.display = 'block'
      cursorImage.style.top = e.clientY + 'px'
      cursorImage.style.left = e.clientX + 'px'
    }
    const handleMouseLeave = () => {
      cursorImage.style.display = 'none'
    }

    link.addEventListener('mousemove', handleMouseMove)
    link.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      link.removeEventListener('mousemove', handleMouseMove)
      link.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      <div
        className="elementor-element elementor-element-43c15486 e-con-full section e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-parent e-lazyloaded"
        data-id="43c15486"
        data-element_type="container"
        data-e-type="container"
        id="hero"
        data-settings='{"background_background":"classic","animation":"none"}'
      >
        <div
          className="elementor-element elementor-element-63645036 e-con-full animated-fast e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child"
          data-id="63645036"
          data-element_type="container"
          data-e-type="container"
          data-settings='{"background_background":"classic","animation":"none"}'
        >
          <div
            className="elementor-element elementor-element-8a28b64 elementor-widget elementor-widget-heading animated fadeInUp"
            data-id="8a28b64"
            data-element_type="widget"
            data-e-type="widget"
            data-settings='{"_animation":"fadeInUp"}'
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h3 id="hero-tagline" className="elementor-heading-title elementor-size-default">THE ART OF GETTING CLICKS</h3>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-753a0afa elementor-widget elementor-widget-heading animated fadeInUp"
            data-id="753a0afa"
            data-element_type="widget"
            data-e-type="widget"
            data-settings='{"_animation":"fadeInUp"}'
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h2 id="hero-headline" className="elementor-heading-title elementor-size-default">
                Great{' '}
                <a
                  id="fake-link"
                  href="#contact"
                >
                  video
                </a>
                <br />
                don't get
                <br />
                views Great

                thumbnail do
                <img decoding="async" src="/click.png" id="cursor-image" alt="" aria-hidden="true" />
              </h2>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-1d85398a elementor-widget elementor-widget-heading animated fadeInUp"
            data-id="1d85398a"
            data-element_type="widget"
            data-e-type="widget"
            data-settings='{"_animation":"fadeInUp"}'
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <p className="elementor-heading-title elementor-size-default">
                IDEAS, TITLES &amp; THUMBNAILS
              </p>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-177e599 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child"
            data-id="177e599"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-50e4742b elementor-widget elementor-widget-html animated fadeInUp"
              data-id="50e4742b"
              data-element_type="widget"
              data-e-type="widget"
              data-settings='{"_animation":"fadeInUp"}'
              data-widget_type="html.default"
            >
              <div className="elementor-widget-container">
                <div className="spring-pop-box">
                  <a href="#contact" className="custom-button is-nav w-inline-block">
                    <div className="custom-button-wrapper">
                      <div className="custom-button-text button-text">LET'S WORK G</div>
                      <div className="custom-button-text-hidden button-text-hidden">
                        LET'S WORK G
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Headshot Column with Clean Styled Frame */}
        <div
          className="elementor-element elementor-element-1133be09 e-con-full animated-fast e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child animated fadeInRight"
          data-id="1133be09"
          data-element_type="container"
          data-e-type="container"
          data-settings='{"animation":"fadeInRight"}'
        >
          <div
            className="elementor-element elementor-element-3f011df7 elementor-widget elementor-widget-image"
            data-id="3f011df7"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="image.default"
          >
            <div className="elementor-widget-container">
              <img
                decoding="async"
                src="/headshot.png"
                className="attachment-full size-full wp-image-4504"
                alt="Headshot Profile"
                style={{
                  borderRadius: '24px',
                  border: '3.5px solid #ffffff',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.22)',
                  aspectRatio: '3 / 4',
                  objectFit: 'cover',
                  maxWidth: '430px',
                  display: 'inline-block',

                  


                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Wave Divider */}
      <div
        className="elementor-element elementor-element-55d039bc e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-parent e-lazyloaded"
        data-id="55d039bc"
        data-element_type="container"
        data-e-type="container"
      >
        <div
          className="elementor-element elementor-element-2b562b4d elementor-widget__width-inherit elementor-widget elementor-widget-html"
          data-id="2b562b4d"
          data-element_type="widget"
          data-e-type="widget"
          data-widget_type="html.default"
        >
          <div className="elementor-widget-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
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
