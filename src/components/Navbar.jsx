import { useEffect } from 'react'

export default function Navbar() {
  const handleNavClick = (e, targetSelector) => {
    if (e?.preventDefault) e.preventDefault()
    if (e?.stopPropagation) e.stopPropagation()
    let target = document.querySelector(targetSelector)
    if (!target && (targetSelector === '#client' || targetSelector === '#testimonial')) {
      target = document.querySelector('#client') || document.querySelector('#testimonial')
    }
    if (target) {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, {
          offset: -85,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })
      } else {
        const navOffset = 85
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - navOffset,
          behavior: 'smooth',
        })
      }
      window.history.pushState(null, '', targetSelector)
    }
  }

  useEffect(() => {
    let lastScrollTop = 0
    const menu = document.getElementById('menu')

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (scrollTop > lastScrollTop && scrollTop > 120) {
        menu?.classList.add('menu-hidden')
      } else {
        menu?.classList.remove('menu-hidden')
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }

    const openBtn = document.getElementById('open-menu')
    const closeBtn = document.getElementById('close-menu')
    const mobielMenu = document.getElementById('mobiel-menu')

    const openMenu = (e) => {
      e.preventDefault()
      if (mobielMenu) mobielMenu.style.display = 'block'
    }
    const closeMenu = (e) => {
      e.preventDefault()
      if (mobielMenu) mobielMenu.style.display = 'none'
    }

    openBtn?.addEventListener('click', openMenu)
    closeBtn?.addEventListener('click', closeMenu)
    window.addEventListener('scroll', handleScroll, { passive: true })

    document.querySelectorAll('#mobiel-menu ul li[data-target]').forEach((item) => {
      item.addEventListener('click', (e) => {
        const target = item.getAttribute('data-target')
        if (mobielMenu) mobielMenu.style.display = 'none'
        if (target) {
          handleNavClick(e, target)
        }
      })
    })

    return () => {
      openBtn?.removeEventListener('click', openMenu)
      closeBtn?.removeEventListener('click', closeMenu)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Mobile Sticky Header (Hidden on Desktop) */}
      <div
        className="elementor-element elementor-element-6e2f5c51 e-con-full wpr-sticky-section-yes elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-widescreen e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-column-slider-no wpr-equal-height-no e-con e-parent"
        data-id="6e2f5c51"
        data-element_type="container"
        data-e-type="container"
        data-settings='{"background_background":"classic","position_offset":0,"position_offset_widescreen":0,"position_offset_laptop":0,"position_offset_tablet_extra":0,"position_offset_tablet":0,"position_offset_mobile":0}'
      >
        <div
          className="elementor-element elementor-element-5236f1ba e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child"
          data-id="5236f1ba"
          data-element_type="container"
          data-e-type="container"
        >
          <div
            className="elementor-element elementor-element-56a1e464 elementor-widget elementor-widget-heading"
            data-id="56a1e464"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
                <a href="#contact">Let's talk</a>
              </h2>
            </div>
          </div>
        </div>

        <div
          className="elementor-element elementor-element-304c3b38 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child"
          data-id="304c3b38"
          data-element_type="container"
          data-e-type="container"
        >
          <div
            className="elementor-element elementor-element-46defb elementor-widget elementor-widget-image"
            data-id="46defb"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="image.default"
          >
            <div className="elementor-widget-container">
              <img
                fetchPriority="high"
                decoding="async"
                width="800"
                height="800"
                src="/images/Watermark.png"
                className="attachment-large size-large wp-image-1378"
                alt="Menno Visser Media"
                srcSet="/images/Watermark.png 800w, /images/Watermark-300x300.png 300w, /images/Watermark-150x150.png 150w, /images/Watermark-768x768.png 768w"
                sizes="(max-width: 800px) 100vw, 800px"
              />
            </div>
          </div>
        </div>

        <div
          className="elementor-element elementor-element-531ec36b e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child"
          data-id="531ec36b"
          data-element_type="container"
          data-e-type="container"
        >
          <div
            className="elementor-element elementor-element-6c3eda6e elementor-widget elementor-widget-html"
            data-id="6c3eda6e"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="html.default"
          >
            <div className="elementor-widget-container">
              <div className="menu-container">
                <a href="#" id="open-menu">
                  Menu
                </a>
              </div>
              <div id="mobiel-menu">
                <div style={{ position: 'relative', padding: '0px', textAlign: 'center' }}>
                  <img
                    decoding="async"
                    src="/images/Watermark.png"
                    alt="Logo"
                    style={{ width: '60px', height: '60px', marginBottom: '20px' }}
                  />
                  <a
                    href="#"
                    id="close-menu"
                    style={{ position: 'absolute', top: '20px', right: '20px', color: 'white' }}
                  >
                    Close
                  </a>
                </div>
                <ul>
                  <li data-target="#about-me">About me</li>
                  <li data-target="#theprocess">The process</li>
                  <li data-target="#latest-thumbnails">Latest thumbnails</li>
                  <li data-target="#client">Client</li>
                  <li data-target="#FAQ">FAQ</li>
                  <li>
                    <a href="#latest-thumbnails">Thumbnail Collection</a>
                  </li>
                  <li data-target="#contact">Let's Talk</li>
                </ul>
                <p
                  style={{
                    textAlign: 'left',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    paddingLeft: '2.4em',
                    paddingBottom: '1em',
                  }}
                >
                  Menno Visser Media
                </p>
                <div
                  style={{
                    textAlign: 'left',
                    paddingLeft: '2em',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ flexShrink: '0', paddingRight: '1em' }}>
                    <a href="https://www.youtube.com/@M_Visser_Media" target="_blank" rel="noreferrer">
                      <svg
                        id="Laag_1"
                        data-name="Laag 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 327.11 231.71"
                        width="25"
                        height="25"
                      >
                        <path
                          fill="#fff"
                          d="M872.69,688.05v40.88c-.17,1-.43,2.06-.5,3.1-1.33,17.71-2.52,35.44-4,53.14-1.26,15.28-15.38,29.66-30.43,31.24-13.44,1.41-26.88,2.81-40.33,4-30.12,2.75-60.32,3.82-90.56,3.79-41.76,0-83.34-2.93-124.83-7.58-15.74-1.77-30.31-15.15-31.79-30.62-1.94-20.22-3.53-40.5-4.32-60.79-1.22-31.42.68-62.76,4.17-94,1.69-15.13,15.76-29.38,30.67-30.68,26.6-2.32,53.19-4.85,79.83-6.54a859.62,859.62,0,0,1,109.45.53c22.28,1.44,44.5,3.91,66.75,5.93,15.47,1.41,29.88,15.21,31.31,30.68,1.62,17.47,2.68,35,4,52.5C872.25,685.13,872.5,686.59,872.69,688.05Zm-109,20.46-81.63-54.42V762.91Z"
                          transform="translate(-545.58 -592.53)"
                        />
                      </svg>
                    </a>
                  </div>
                  <div style={{ flexShrink: '0' }}>
                    <a href="https://twitter.com/M_Visser_Media" target="_blank" rel="noreferrer">
                      <svg
                        id="Laag_1"
                        data-name="Laag 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 897.75 918.88"
                        width="20"
                        height="20"
                      >
                        <path
                          fill="#fff"
                          d="M-1559.57,1135c21.25-25,42.37-50.2,63.78-75.11q140.05-162.9,280.24-325.69c1.93-2.25,3.75-4.61,6-7.32l-350.45-510c3.36-.25,5.56-.56,7.76-.56q126.06,0,252.12-.18c6,0,9,2.21,12.13,6.82q110.52,161.19,221.33,322.2c1.82,2.66,3.75,5.24,6.21,8.66,15.31-17.74,30.09-34.85,44.84-52q119.05-138.36,237.93-276.89c5.63-6.58,11.26-9.06,19.76-8.83,21.7.57,43.43.19,67.26.19C-803,346.86-914,475.9-1025.24,605.13c1.92,2.93,3.5,5.43,5.17,7.86q176.43,256.78,352.85,513.57c1.83,2.67,3.3,5.59,4.93,8.39H-929.68c-1.05-1.79-2-3.65-3.16-5.36q-118.49-172.5-237.05-345c-1.29-1.89-2.9-3.56-4.69-5.73-2.79,3.16-5.18,5.8-7.5,8.51q-95.64,111.14-191.24,222.29-53.76,62.55-107.29,125.27Zm107.42-859.13c2.59,4.05,4.21,6.78,6,9.38q20.78,29.78,41.6,59.5,253.74,362.88,507.34,725.85c3.92,5.62,8,7.53,14.64,7.46,33.78-.33,67.57-.15,101.36-.15h11.1c-11-15.83-20.74-29.74-30.45-43.63q-262.2-375-524.31-750.07c-3.86-5.53-7.5-8.7-15-8.57-29.88.54-59.79.23-89.69.23Z"
                          transform="translate(1560.04 -216.07)"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Fixed Sticky Header (Always Visible on Mount, Hides on Scroll Down) */}
      <div
        data-wpr-sticky-section="yes"
        data-wpr-position-type="fixed"
        data-wpr-position-offset="0"
        data-wpr-position-location="top"
        data-wpr-sticky-devices="desktop_sticky"
        data-wpr-custom-breakpoints="default"
        data-wpr-active-breakpoints="mobile_sticky tablet_sticky tablet_extra_sticky laptop_sticky widescreen_sticky desktop_sticky"
        data-wpr-z-index="10"
        className="elementor-element elementor-element-2150fc70 e-con-full wpr-sticky-section-yes menu elementor-hidden-mobile elementor-hidden-tablet elementor-hidden-tablet_extra e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-column-slider-no wpr-equal-height-no e-con e-parent e-lazyloaded animated fadeInDown"
        data-id="2150fc70"
        data-element_type="container"
        data-e-type="container"
        id="menu"
        data-settings='{"background_background":"classic","animation":"fadeInDown","position_offset":0,"position_offset_widescreen":0,"position_offset_laptop":0,"position_offset_tablet_extra":0,"position_offset_tablet":0,"position_offset_mobile":0}'
        style={{ position: 'fixed', top: 0, left: 0, width: '100%' }}
      >
        <div
          className="elementor-element elementor-element-37d6590b e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child"
          data-id="37d6590b"
          data-element_type="container"
          data-e-type="container"
        >
          <div
            className="elementor-element elementor-element-3cd9e8a3 elementor-widget elementor-widget-site-logo"
            data-id="3cd9e8a3"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="site-logo.default"
          >
            <div className="elementor-widget-container">
              <div className="hfe-site-logo">
                <a className="elementor-clickable" href="/">
                  <div className="hfe-site-logo-set">
                    <div className="hfe-site-logo-container">
                      <img
                        decoding="async"
                        className="hfe-site-logo-img elementor-animation-"
                        src="/images/Watermark-qo926l5kswtjswud1960onx1b3itqdu1khebwbw7ko.png"
                        alt="Watermark.png"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="elementor-element elementor-element-78bb64b9 e-con-full e-flex wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-child"
          data-id="78bb64b9"
          data-element_type="container"
          data-e-type="container"
        >
          <div
            className="elementor-element elementor-element-4bdd4a80 elementor-widget__width-auto elementor-widget elementor-widget-html"
            data-id="4bdd4a80"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="html.default"
          >
            <div className="elementor-widget-container">
              <div className="button-container">
                <a
                  href="#about-me"
                  onClick={(e) => handleNavClick(e, '#about-me')}
                  className="button is-nav w-inline-block"
                >
                  <div className="button-text-wrapper">
                    <div className="button-text knoptekst">The problem</div>
                    <div className="button-text-hidden knoptekst-verborgen">The problem</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-28ba9c78 elementor-widget__width-auto elementor-widget elementor-widget-html"
            data-id="28ba9c78"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="html.default"
          >
            <div className="elementor-widget-container">
              <div className="button-container">
                <a
                  href="#latest-thumbnails"
                  onClick={(e) => handleNavClick(e, '#latest-thumbnails')}
                  className="button is-nav w-inline-block"
                >
                  <div className="button-text-wrapper">
                    <div className="button-text knoptekst">Latest thumbnails</div>
                    <div className="button-text-hidden knoptekst-verborgen">Latest thumbnails</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-30ef138 elementor-widget__width-auto elementor-widget elementor-widget-html"
            data-id="30ef138"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="html.default"
          >
            <div className="elementor-widget-container">
              <div className="button-container">
                <a
                  href="#client"
                  onClick={(e) => handleNavClick(e, '#client')}
                  className="button is-nav w-inline-block"
                >
                  <div className="button-text-wrapper">
                    <div className="button-text knoptekst">Client</div>
                    <div className="button-text-hidden knoptekst-verborgen">Client</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-2b846470 elementor-widget__width-auto elementor-widget elementor-widget-html"
            data-id="2b846470"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="html.default"
          >
            <div className="elementor-widget-container">
              <div className="button-container">
                <a
                  href="#faq"
                  onClick={(e) => handleNavClick(e, '#faq')}
                  className="button is-inline-block"
                >
                  <div className="button-text-wrapper">
                    <div className="button-text knoptekst">FAQ</div>
                    <div className="button-text-hidden knoptekst-verborgen">FAQ</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-8b1d125 elementor-widget__width-auto elementor-widget elementor-widget-html"
            data-id="8b1d125"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="html.default"
          >
            <div className="elementor-widget-container">
              <div className="button-container">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="button is-nav w-inline-block"
                >
                  <div className="button-text-wrapper">
                    <div className="button-text knoptekst">LET'S WORK G</div>
                    <div className="button-text-hidden knoptekst-verborgen">LET'S WORK G</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
