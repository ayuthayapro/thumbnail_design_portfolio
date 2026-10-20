import { useEffect } from 'react'
import { THUMBNAILS_DATA } from '../constants'

export default function LatestThumbnails() {
  useEffect(() => {
    const images = document.querySelectorAll('.image-thumbpage')
    const popupOverlay = document.querySelector('.popup-overlay')
    const popupImage = popupOverlay?.querySelector('.popup-image')
    if (!popupOverlay || !popupImage) return

    const handleImageClick = (e) => {
      e.stopPropagation()
      const img = e.currentTarget
      const rect = img.getBoundingClientRect()
      const popupWidth = rect.width * 1.75
      const popupHeight = rect.height * 1.75

      let top = e.clientY + window.scrollY - popupHeight
      let left = e.clientX + window.scrollX

      if (top + popupHeight > window.scrollY + window.innerHeight) {
        top = window.scrollY + window.innerHeight - popupHeight - 10
      }
      if (left + popupWidth > window.scrollX + window.innerWidth) {
        left = window.scrollX + window.innerWidth - popupWidth - 10
      }
      if (top < window.scrollY) top = window.scrollY + 10
      if (left < window.scrollX) left = window.scrollX + 10

      popupImage.src = img.src
      popupOverlay.style.top = `${top}px`
      popupOverlay.style.left = `${left}px`
      popupOverlay.style.width = `${popupWidth}px`
      popupOverlay.style.height = `${popupHeight}px`
      popupOverlay.style.display = 'flex'
      popupOverlay.classList.add('popup-visible')
    }

    images.forEach((img) => img.addEventListener('click', handleImageClick))
    const handleClose = () => {
      popupOverlay.style.display = 'none'
      popupOverlay.classList.remove('popup-visible')
    }
    document.addEventListener('click', handleClose)

    return () => {
      images.forEach((img) => img.removeEventListener('click', handleImageClick))
      document.removeEventListener('click', handleClose)
    }
  }, [])

  return (
    <>
      {/* Title Header */}
      <div
        className="elementor-element elementor-element-119ba76c e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-parent e-lazyloaded"
        data-id="119ba76c"
        data-element_type="container"
        data-e-type="container"
        id="latest-thumbnails"
        data-settings='{"background_background":"classic"}'
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-1be2bdab elementor-widget elementor-widget-menu-anchor"
            data-id="1be2bdab"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="menu-anchor.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-menu-anchor" id="latest-thumbnails"></div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-7b403a12 elementor-widget elementor-widget-heading"
            data-id="7b403a12"
            data-element_type="widget"
            data-e-type="widget"
            id="latest-thumbnails"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">Latest thumbnails</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Thumbnails (dynamically rendered from THUMBNAILS_DATA) */}
      <div
        className="elementor-element elementor-element-942ba77 e-grid e-con-full wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-parent e-lazyloaded"
        data-id="942ba77"
        data-element_type="container"
        data-e-type="container"
        data-settings='{"background_background":"classic"}'
      >
        {THUMBNAILS_DATA.map((thumb, index) => {
          const imageSrc = typeof thumb === 'string' ? thumb : thumb.image
          const key = typeof thumb === 'object' && thumb.id ? thumb.id : `thumb-${index}`
          const altText = typeof thumb === 'object' && thumb.title ? thumb.title : 'Thumbnail'

          return (
            <div
              key={key}
              className="elementor-element elementor-widget elementor-widget-html"
              data-element_type="widget"
              data-widget_type="html.default"
            >
              <div className="elementor-widget-container">
                <div className="container-thumbpage"></div>
                <div className="image-wrapper-thumbpage popup">
                  <img
                    decoding="async"
                    src={imageSrc}
                    className="image-thumbpage active"
                    alt={altText}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* View More Button */}
      <div
        className="elementor-element elementor-element-4d7b8a8 e-flex e-con-boxed wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no wpr-column-slider-no wpr-equal-height-no e-con e-parent e-lazyloaded"
        data-id="4d7b8a8"
        data-element_type="container"
        data-e-type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-a32f106 elementor-widget elementor-widget-html animated fadeInUp"
            data-id="a32f106"
            data-element_type="widget"
            data-e-type="widget"
            data-settings='{"_animation":"fadeInUp"}'
            data-widget_type="html.default"
          >
            <div className="elementor-widget-container">
              <div className="spring-pop-box">
                <a href="#contact" className="custom-button is-nav w-inline-block">
                  <div className="custom-button-wrapper">
                    <div className="custom-button-text button-text">I WANT TO SEE MORE</div>
                    <div className="custom-button-text-hidden button-text-hidden">
                      I WANT TO SEE MORE
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 1.75x Zoom Popup Overlay */}
      <div className="popup-overlay" style={{ display: 'none' }}>
        <img className="popup-image" alt="Popup thumbnail" />
      </div>
    </>
  )
}
