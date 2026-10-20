import { useState, useEffect } from 'react'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { CONTACT_CONTENT } from '#constants'

// =========================================================================
// ✏️ EDIT YOUR CONTACT INFO & TITLES HERE (EASY CUSTOMIZATION):
// =========================================================================
const CONTACT_BLOCKS = {
  // Block 1
  availabilityTitle: 'Availability', // <-- EDIT TITLE 1 HERE (e.g. 'Availability' or 'Location')
  country: 'Cambodia',
  hours: 'Monday–Sunday, 5–8 PM (UTC+7)',

  // Block 2
  chatTitle: 'Social Media', // <-- EDIT TITLE 2 HERE (e.g. 'Social Media' or 'Chat')
  socials: [
    { label: 'Telegram', url: 'https://t.me/boayuthaya' },
    { label: 'Facebook', url: 'https://www.facebook.com/bo.ayuthaya/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com' },
    { label: '081661190', url: 'tel:081661190' },
  ],

  // Block 3
  emailTitle: 'Email', // <-- EDIT TITLE 3 HERE
  email: 'ayutiatabb@gmail.com',

  // Block 4
  freelanceTitle: 'Freelance', // <-- EDIT TITLE 4 HERE
  freelanceName: 'Fiverr',
  freelanceUrl: 'https://www.fiverr.com',
}

// Global timezones for client convenience
const TIMEZONE_LIST = [
  { id: 'indochina', label: 'Indochina Time', zone: 'Asia/Bangkok' },
  { id: 'singapore', label: 'Singapore / HK', zone: 'Asia/Singapore' },
  { id: 'tokyo', label: 'Tokyo / Seoul', zone: 'Asia/Tokyo' },
  { id: 'india', label: 'India (IST)', zone: 'Asia/Kolkata' },
  { id: 'dubai', label: 'Dubai (GST)', zone: 'Asia/Dubai' },
  { id: 'london', label: 'London (GMT/BST)', zone: 'Europe/London' },
  { id: 'berlin', label: 'Paris / Berlin (CET)', zone: 'Europe/Berlin' },
  { id: 'ny', label: 'New York (ET)', zone: 'America/New_York' },
  { id: 'chicago', label: 'Chicago (CT)', zone: 'America/Chicago' },
  { id: 'la', label: 'Los Angeles (PT)', zone: 'America/Los_Angeles' },
  { id: 'sydney', label: 'Sydney (AEST)', zone: 'Australia/Sydney' },
]

export default function ContactSection() {
  // Form fields state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    platform: 'Telegram',
    handle: '',
    details: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Timezone state
  const [currentTime, setCurrentTime] = useState(() => new Date())
  const [selectedTz, setSelectedTz] = useState(() => {
    try {
      if (typeof window !== 'undefined' && Intl?.DateTimeFormat) {
        const userZone = Intl.DateTimeFormat().resolvedOptions().timeZone
        const match = TIMEZONE_LIST.find((t) => t.zone === userZone)
        if (match) return match
      }
    } catch {
      // fallback
    }
    return TIMEZONE_LIST[0] // Indochina by default
  })

  // Live second-by-second clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Format time for any given timezone
  const formatTime = (zone) => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: zone,
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).format(currentTime)
    } catch {
      return '--:--'
    }
  }

  // Convert creator's working hours (17:00 - 20:00 UTC+7) to client's timezone
  const getConvertedWorkingHours = (targetZone) => {
    try {
      const utcYear = currentTime.getUTCFullYear()
      const utcMonth = currentTime.getUTCMonth()
      const utcDate = currentTime.getUTCDate()

      // 17:00 UTC+7 = 10:00 UTC
      const startUtc = new Date(Date.UTC(utcYear, utcMonth, utcDate, 10, 0, 0))
      // 20:00 UTC+7 = 13:00 UTC
      const endUtc = new Date(Date.UTC(utcYear, utcMonth, utcDate, 13, 0, 0))

      const fmt = (d) =>
        new Intl.DateTimeFormat('en-US', {
          timeZone: targetZone,
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }).format(d)

      return `${fmt(startUtc)} – ${fmt(endUtc)}`
    } catch {
      return '5:00 PM – 8:00 PM (UTC+7)'
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const getHandlePlaceholder = (platform) => {
    switch (platform) {
      case 'Telegram':
        return '@yourusername or phone number'
      case 'Facebook':
        return 'Profile link or full name'
      case 'LinkedIn':
        return 'Profile link or full name'
      default:
        return 'Your username or link'
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const endpoint = CONTACT_CONTENT?.endpoint || 'https://formspree.io/f/mrpevdjb'
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          'Full Name': formData.name,
          Email: formData.email,
          'Where to Message': formData.platform,
          'Username or Number': formData.handle,
          'What They Need': formData.details,
          _replyto: formData.email,
          _subject: `New Request from ${formData.name} via ${formData.platform}`,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        const data = await response.json().catch(() => null)
        setErrorMessage(
          data?.errors?.map((err) => err.message).join(', ') ||
            'Failed to send request. Please check your fields or reach out directly on Telegram!'
        )
      }
    } catch {
      setErrorMessage('Network connection error. Please try again or reach out on Telegram.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      platform: 'Telegram',
      handle: '',
      details: '',
    })
    setIsSubmitted(false)
    setErrorMessage('')
  }

  // Clean title style matching reference photo (Image 2: Social Media, Title Case, not all-caps)
  const blockTitleStyle = {
    display: 'block',
    fontSize: '18px',
    fontWeight: 700,
    color: '#ffffff',
    letterSpacing: '-0.2px',
    marginBottom: '14px',
    fontFamily: "'Figtree', sans-serif",
  }

  const itemLinkStyle = {
    color: '#d1d5db',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 400,
    lineHeight: 1.5,
    fontFamily: "'Figtree', sans-serif",
    transition: 'color 0.2s ease, transform 0.15s ease',
    display: 'inline-block',
  }

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#141414',
        background: '#141414',
        color: '#ffffff',
        fontFamily: "'Figtree', sans-serif",
        padding: 'clamp(80px, 9vw, 130px) clamp(24px, 5vw, 64px)',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.25fr) minmax(380px, 460px)',
          gap: 'clamp(48px, 7vw, 100px)',
          alignItems: 'start',
        }}
        className="contact-grid-container"
      >
        {/* ===================================================================
            LEFT COLUMN: Big Titles, Subtitle & 2x2 Info Grid with Wide Spacing
            =================================================================== */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Main Titles */}
          <div style={{ marginBottom: '22px' }}>
            <h2
              style={{
                fontSize: 'clamp(42px, 5.6vw, 76px)',
                fontWeight: 900,
                letterSpacing: '-1.5px',
                lineHeight: 1.05,
                margin: '0 0 6px 0',
                color: '#ffffff',
                fontFamily: "'Figtree', sans-serif",
              }}
            >
              Got a Video?
            </h2>
            <h2
              style={{
                fontSize: 'clamp(42px, 5.6vw, 76px)',
                fontWeight: 900,
                letterSpacing: '-1.5px',
                lineHeight: 1.05,
                margin: 0,
                color: '#ffffff',
                fontFamily: "'Figtree', sans-serif",
              }}
            >
              Let's Make It Click.
            </h2>
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(15px, 1.35vw, 17.5px)',
              lineHeight: 1.65,
              color: '#9496a1',
              maxWidth: '520px',
              margin: '0 0 clamp(50px, 7vw, 84px) 0',
              fontWeight: 400,
            }}
          >
            Tell me about your video, your channel and the style you like. I'll send concepts within 24-48 hours.
          </p>

          {/* 2x2 Structured Info Grid (Clean, Wide Spacing matching photo 2) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              columnGap: 'clamp(40px, 6vw, 80px)',
              rowGap: 'clamp(36px, 5vw, 54px)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: 'clamp(36px, 5vw, 50px)',
            }}
            className="contact-2x2-grid"
          >
            {/* 1. AVAILABILITY */}
            <div>
              <span style={blockTitleStyle}>{CONTACT_BLOCKS.availabilityTitle}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '15px' }}>
                <span style={{ color: '#d1d5db', lineHeight: 1.5 }}>{CONTACT_BLOCKS.country}</span>
                <span style={{ color: '#9ca3af', fontSize: '14.5px', lineHeight: 1.5 }}>
                  {CONTACT_BLOCKS.hours}
                </span>

                {/* Clean, Subtle Timezone Converter (No clunky box, no glitch) */}
                <div style={{ marginTop: '4px' }}>
                  <select
                    value={selectedTz.id}
                    onChange={(e) => {
                      const match = TIMEZONE_LIST.find((t) => t.id === e.target.value)
                      if (match) setSelectedTz(match)
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.14)',
                      borderRadius: '8px',
                      color: '#d1d5db',
                      fontSize: '13px',
                      padding: '5px 10px',
                      outline: 'none',
                      cursor: 'pointer',
                      fontFamily: "'Figtree', sans-serif",
                    }}
                  >
                    {TIMEZONE_LIST.map((tz) => (
                      <option key={tz.id} value={tz.id} style={{ backgroundColor: '#141414', color: '#ffffff' }}>
                        {tz.label} ({formatTime(tz.zone)})
                      </option>
                    ))}
                  </select>
                  <div style={{ fontSize: '12px', color: '#60a5fa', marginTop: '6px', fontWeight: 500 }}>
                    My 5–8 PM is {getConvertedWorkingHours(selectedTz.zone)} in your time
                  </div>
                </div>
              </div>
            </div>

            {/* 2. CHAT / SOCIAL MEDIA (Shift+Enter on each line, with spacing, NO ICONS like photo 2) */}
            <div>
              <span style={blockTitleStyle}>{CONTACT_BLOCKS.chatTitle}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {CONTACT_BLOCKS.socials.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target={item.url.startsWith('http') ? '_blank' : undefined}
                    rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={itemLinkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#d1d5db')}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* 3. EMAIL (Shift+Enter clean text, NO ICONS) */}
            <div>
              <span style={blockTitleStyle}>{CONTACT_BLOCKS.emailTitle}</span>
              <div>
                <a
                  href={`mailto:${CONTACT_BLOCKS.email}`}
                  style={itemLinkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#d1d5db')}
                >
                  {CONTACT_BLOCKS.email}
                </a>
              </div>
            </div>

            {/* 4. FREELANCE (Shift+Enter clean text, NO ICONS) */}
            <div>
              <span style={blockTitleStyle}>{CONTACT_BLOCKS.freelanceTitle}</span>
              <div>
                <a
                  href={CONTACT_BLOCKS.freelanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={itemLinkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#d1d5db')}
                >
                  {CONTACT_BLOCKS.freelanceName}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            RIGHT COLUMN: Pure White Floating Card Shifted to the Right
            =================================================================== */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: 'clamp(30px, 4.5vw, 46px)',
            boxShadow: '0 25px 65px rgba(0, 0, 0, 0.55)',
            color: '#141414',
            position: 'relative',
            width: '100%',
            boxSizing: 'border-box',
          }}
          className="contact-white-card"
        >
          {/* Card Title (No Subtitle) */}
          <div style={{ marginBottom: '24px' }}>
            <h3
              style={{
                fontSize: 'clamp(23px, 2.3vw, 29px)',
                fontWeight: 800,
                letterSpacing: '-0.5px',
                margin: 0,
                color: '#141414',
                fontFamily: "'Figtree', sans-serif",
              }}
            >
              Tell Me What You Need
            </h3>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '19px' }}>
              {/* Field 1: Full Name */}
              <div>
                <label
                  htmlFor="cf-name"
                  style={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    marginBottom: '7px',
                    color: '#0f172a',
                  }}
                >
                  Full Name <span style={{ color: '#0260ef' }}>*</span>
                </label>
                <input
                  id="cf-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    backgroundColor: '#f8fafc',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '10px',
                    color: '#0f172a',
                    fontSize: '14.5px',
                    fontFamily: "'Figtree', sans-serif",
                    outline: 'none',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#0260ef'
                    e.target.style.boxShadow = '0 0 0 3px rgba(2, 96, 239, 0.12)'
                    e.target.style.backgroundColor = '#ffffff'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0'
                    e.target.style.boxShadow = 'none'
                    e.target.style.backgroundColor = '#f8fafc'
                  }}
                />
              </div>

              {/* Field 2: Email */}
              <div>
                <label
                  htmlFor="cf-email"
                  style={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    marginBottom: '7px',
                    color: '#0f172a',
                  }}
                >
                  Email <span style={{ color: '#0260ef' }}>*</span>
                </label>
                <input
                  id="cf-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    backgroundColor: '#f8fafc',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '10px',
                    color: '#0f172a',
                    fontSize: '14.5px',
                    fontFamily: "'Figtree', sans-serif",
                    outline: 'none',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#0260ef'
                    e.target.style.boxShadow = '0 0 0 3px rgba(2, 96, 239, 0.12)'
                    e.target.style.backgroundColor = '#ffffff'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0'
                    e.target.style.boxShadow = 'none'
                    e.target.style.backgroundColor = '#f8fafc'
                  }}
                />
              </div>

              {/* Field 3: Where should I message you? */}
              <div>
                <label
                  htmlFor="cf-platform"
                  style={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    marginBottom: '7px',
                    color: '#0f172a',
                  }}
                >
                  Where should I message you? <span style={{ color: '#0260ef' }}>*</span>
                </label>
                <select
                  id="cf-platform"
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    backgroundColor: '#f8fafc',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '10px',
                    color: '#0f172a',
                    fontSize: '14.5px',
                    fontWeight: 600,
                    fontFamily: "'Figtree', sans-serif",
                    outline: 'none',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#0260ef'
                    e.target.style.boxShadow = '0 0 0 3px rgba(2, 96, 239, 0.12)'
                    e.target.style.backgroundColor = '#ffffff'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0'
                    e.target.style.boxShadow = 'none'
                    e.target.style.backgroundColor = '#f8fafc'
                  }}
                >
                  <option value="Telegram">Telegram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="LinkedIn">LinkedIn</option>
                </select>
              </div>

              {/* Field 4: Username or Number on that app */}
              <div>
                <label
                  htmlFor="cf-handle"
                  style={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    marginBottom: '7px',
                    color: '#0f172a',
                  }}
                >
                  Your username or number on {formData.platform} <span style={{ color: '#0260ef' }}>*</span>
                </label>
                <input
                  id="cf-handle"
                  type="text"
                  name="handle"
                  required
                  value={formData.handle}
                  onChange={handleChange}
                  placeholder={getHandlePlaceholder(formData.platform)}
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    backgroundColor: '#f8fafc',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '10px',
                    color: '#0f172a',
                    fontSize: '14.5px',
                    fontFamily: "'Figtree', sans-serif",
                    outline: 'none',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#0260ef'
                    e.target.style.boxShadow = '0 0 0 3px rgba(2, 96, 239, 0.12)'
                    e.target.style.backgroundColor = '#ffffff'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0'
                    e.target.style.boxShadow = 'none'
                    e.target.style.backgroundColor = '#f8fafc'
                  }}
                />
              </div>

              {/* Field 5: What do you need? */}
              <div>
                <label
                  htmlFor="cf-details"
                  style={{
                    display: 'block',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    marginBottom: '7px',
                    color: '#0f172a',
                  }}
                >
                  What do you need? <span style={{ color: '#0260ef' }}>*</span>
                </label>
                <textarea
                  id="cf-details"
                  name="details"
                  rows={4}
                  required
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Share your video link or topic, thumbnail style you like, and your deadline..."
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    backgroundColor: '#f8fafc',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '10px',
                    color: '#0f172a',
                    fontSize: '14.5px',
                    fontFamily: "'Figtree', sans-serif",
                    outline: 'none',
                    resize: 'vertical',
                    lineHeight: 1.5,
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#0260ef'
                    e.target.style.boxShadow = '0 0 0 3px rgba(2, 96, 239, 0.12)'
                    e.target.style.backgroundColor = '#ffffff'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0'
                    e.target.style.boxShadow = 'none'
                    e.target.style.backgroundColor = '#f8fafc'
                  }}
                />
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 14px',
                    backgroundColor: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: '8px',
                    color: '#b91c1c',
                    fontSize: '13.5px',
                    fontWeight: 600,
                  }}
                >
                  <AlertCircle size={16} style={{ flexShrink: 0 }} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="contact-submit-btn"
                style={{
                  width: '100%',
                  padding: '15px 28px',
                  backgroundColor: '#141414',
                  color: '#ffffff',
                  border: '1.5px solid #141414',
                  borderRadius: '12px',
                  fontSize: '15.5px',
                  fontWeight: 800,
                  letterSpacing: '0.4px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  fontFamily: "'Figtree', sans-serif",
                  marginTop: '5px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = '#0260ef'
                    e.currentTarget.style.borderColor = '#0260ef'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(2, 96, 239, 0.35)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = '#141414'
                    e.currentTarget.style.borderColor = '#141414'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)'
                  }
                }}
              >
                <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
              </button>
            </form>
          ) : (
            /* Success State */
            <div style={{ textAlign: 'center', padding: '36px 12px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: 'rgba(2, 96, 239, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: '#0260ef',
                }}
              >
                <CheckCircle2 size={36} />
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '10px', color: '#0f172a' }}>
                Request Sent Successfully!
              </h3>

              <p
                style={{
                  fontSize: '14.5px',
                  color: '#64748b',
                  maxWidth: '420px',
                  margin: '0 auto 24px',
                  lineHeight: 1.6,
                }}
              >
                Thanks <strong style={{ color: '#0f172a' }}>{formData.name}</strong>! I received your details in my
                inbox and will reach out on <strong style={{ color: '#0260ef' }}>{formData.platform}</strong> ({formData.handle})
                shortly.
              </p>

              <button
                type="button"
                onClick={handleReset}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#141414',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: "'Figtree', sans-serif",
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0260ef')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#141414')}
              >
                Send Another Request
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Responsive layout styles */}
      <style>{`
        @media (max-width: 960px) {
          .contact-grid-container {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
          .contact-white-card {
            max-width: 580px;
            margin: 0 auto;
          }
        }
        @media (max-width: 600px) {
          .contact-2x2-grid {
            grid-template-columns: 1fr !important;
            row-gap: 28px !important;
          }
        }
      `}</style>
    </section>
  )
}
