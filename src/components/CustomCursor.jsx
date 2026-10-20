import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // =========================================================================
  // CURSOR POSITION CONTROLS (Adjust position in pixels here):
  // 0, 0 = Exact middle / dead center on mouse pointer.
  // offsetY: Negative (-5, -10) moves UP | Positive (+5, +10) moves DOWN.
  // offsetX: Negative (-5, -10) moves LEFT | Positive (+5, +10) moves RIGHT.
  // =========================================================================
  const offsetX = 0
  const offsetY = -5

  useEffect(() => {
    // Only activate cursor on devices with a fine pointer (mouse/trackpad)
    if (!window.matchMedia('(pointer: fine)').matches) return

    const cursor = cursorRef.current
    if (!cursor) return

    const handleMouseMove = (e) => {
      // translate(-50%, -50%) centers the circle perfectly around the mouse coordinates
      cursor.style.transform = `translate3d(${e.clientX + offsetX}px, ${e.clientY + offsetY}px, 0) translate(-50%, -50%)`
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Expand into an orange ring when hovering clickable elements
    const handleMouseOver = (e) => {
      const target = e.target.closest(
        'a, button, [role="button"], input, select, textarea, .thumb-card, .elementor-accordion-title, .client-nav-btn, .button, .elementor-clickable, .custom-button-whitebg, .swiper-slide'
      )
      setIsHovered(Boolean(target))
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isVisible, offsetX, offsetY])

  return (
    <div
      ref={cursorRef}
      id="muis"
      className="custom-orange-cursor"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        margin: 0,
        pointerEvents: 'none',
        borderRadius: '50%',
        zIndex: 99999999,
        userSelect: 'none',
        willChange: 'transform',
        opacity: isVisible ? 0.9 : 0,
        backgroundColor: isHovered ? 'transparent' : '#f79824',
        border: isHovered ? '3px solid #f79824' : '0px solid transparent',
        width: isHovered ? '38px' : '20px',
        height: isHovered ? '38px' : '20px',
        transition:
          'width 0.2s cubic-bezier(0.25, 1, 0.5, 1), height 0.2s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.2s ease, border 0.2s ease, opacity 0.2s ease',
      }}
    />
  )
}
