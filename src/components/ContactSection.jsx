import { useState } from 'react'
import { CheckCircle2, ExternalLink } from 'lucide-react'
import { CONTACT_CONTENT } from '#constants'

const PLATFORMS = [
  { key: 'telegram', label: 'Telegram' },
  { key: 'facebook', label: 'Facebook' },
  { key: 'email', label: 'Email' },
]

const HANDLE_FIELD = {
  telegram: { label: 'Your Telegram @username', placeholder: 'e.g. @john_creator', type: 'text' },
  facebook: { label: 'Your Facebook Profile Link', placeholder: 'e.g. facebook.com/your.profile', type: 'text' },
  email: { label: 'Your Email Address', placeholder: 'e.g. you@gmail.com', type: 'email' },
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    channelLink: '',
    platform: 'telegram',
    handle: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handlePlatformChange = (key) => {
    setFormData((prev) => ({ ...prev, platform: key }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subject = encodeURIComponent(`Thumbnail Request from ${formData.name || 'Client'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Channel Link: ${formData.channelLink}\n` +
      `Preferred Contact: ${formData.platform.toUpperCase()} (${formData.handle})\n\n` +
      `Video Topic / Thumbnail Idea:\n${formData.message || '(not provided)'}\n`
    )

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      window.location.href = `mailto:${CONTACT_CONTENT.channels.email.address}?subject=${subject}&body=${body}`
    }, 600)
  }

  const handleReset = () => {
    setFormData({ name: '', channelLink: '', platform: 'telegram', handle: '', message: '' })
    setIsSubmitted(false)
  }

  /* ── Shared styles (image1-inspired card layout) ──────────────── */
  const sectionStyle = {
    backgroundColor: '#141414',
    color: '#ffffff',
    fontFamily: "'Figtree', sans-serif",
    padding: 'clamp(70px, 8vw, 110px) clamp(20px, 5vw, 64px)',
    position: 'relative',
    width: '100%',
    boxSizing: 'border-box',
    overflow: 'visible',
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'grid',
    gridTemplateColumns: '1fr 420px',
    gap: 'clamp(48px, 6vw, 80px)',
    alignItems: 'start',
  }

  const leftColStyle = {
    display: 'flex',
    flexDirection: 'column',
  }

  const titleStyle = {
    fontSize: 'clamp(40px, 5.5vw, 72px)',
    fontWeight: 900,
    letterSpacing: '-1.5px',
    lineHeight: 1.05,
    margin: '0 0 16px 0',
    color: '#ffffff',
    fontFamily: "'Figtree', sans-serif",
  }

  const subtitleStyle = {
    fontSize: 'clamp(14px, 1.4vw, 16.5px)',
    lineHeight: 1.65,
    color: '#a0a5ad',
    maxWidth: '500px',
    margin: '0 0 clamp(40px, 5vw, 60px) 0',
    fontWeight: 400,
  }

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: 'clamp(32px, 4vw, 48px)',
    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.55)',
    color: '#141414',
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  }

  const rowStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  }

  const fieldStyle = {
    marginBottom: '4px',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 700,
    marginBottom: '8px',
    color: '#141414',
    letterSpacing: '0.1px',
  }

  const reqStyle = {
    color: '#0260ef',
  }

  const inputStyle = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '12px 16px',
    backgroundColor: '#f7f8fa',
    border: '1.5px solid #e2e8f0',
    borderRadius: '10px',
    color: '#141414',
    fontSize: '15px',
    fontFamily: "'Figtree', sans-serif",
    outline: 'none',
    transition: 'border-color 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease',
  }

  const pillGroupStyle = {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  }

  const pillStyle = (selected) => ({
    padding: '10px 16px',
    borderRadius: '10px',
    border: '1.5px solid',
    borderColor: selected ? '#0260ef' : '#e2e8f0',
    backgroundColor: selected ? '#eef5ff' : '#f7f8fa',
    color: selected ? '#0260ef' : '#64748b',
    fontSize: '14px',
    fontWeight: 700,
    fontFamily: "'Figtree', sans-serif",
    cursor: 'pointer',
    transition: 'all 0.18s ease',
  })

  const textareaStyle = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '12px 16px',
    backgroundColor: '#f7f8fa',
    border: '1.5px solid #e2e8f0',
    borderRadius: '10px',
    color: '#141414',
    fontSize: '15px',
    fontFamily: "'Figtree', sans-serif",
    outline: 'none',
    resize: 'vertical',
    lineHeight: 1.55,
    minHeight: '120px',
    transition: 'border-color 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease',
  }

  const submitStyle = (submitting) => ({
    width: '100%',
    padding: '14px',
    backgroundColor: '#0260ef',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 800,
    letterSpacing: '0.2px',
    fontFamily: "'Figtree', sans-serif",
    cursor: submitting ? 'not-allowed' : 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4px',
    transition: 'background-color 0.18s ease, transform 0.15s ease',
    boxShadow: '0 10px 24px rgba(2, 96, 239, 0.28)',
  })

  /* ── Success state ────────────────────────────────────────────── */
  const successStyle = {
    textAlign: 'center',
    padding: '24px 8px',
    color: '#141414',
  }

  const successIconStyle = {
    width: '64px',
    height: '64px',
    backgroundColor: 'rgba(2, 96, 239, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    color: '#0260ef',
  }

  const successTitleStyle = {
    fontSize: '24px',
    fontWeight: 800,
    margin: '0 0 12px 0',
    color: '#141414',
  }

  const successTextStyle = {
    fontSize: '15px',
    color: '#64748b',
    maxWidth: '450px',
    margin: '0 auto 24px',
    lineHeight: 1.6,
  }

  const successCtaStyle = {
    padding: '12px 24px',
    backgroundColor: '#0260ef',
    color: '#ffffff',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 700,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px',
    transition: 'background-color 0.18s ease, transform 0.15s ease',
  }

  const resetBtnStyle = {
    padding: '12px 20px',
    backgroundColor: 'transparent',
    color: '#64748b',
    border: '1.5px solid #e2e8f0',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: "'Figtree', sans-serif",
    cursor: 'pointer',
    transition: 'border-color 0.18s ease, color 0.18s ease',
  }

  return (
    <section id="contact" style={sectionStyle}>
      <div style={containerStyle}>
        {/* ==================== LEFT COLUMN ==================== */}
        <div style={leftColStyle}>
          <h1 style={titleStyle}>{CONTACT_CONTENT.title}</h1>
          <p style={subtitleStyle}>{CONTACT_CONTENT.subtitle}</p>
        </div>

        {/* ==================== RIGHT COLUMN — WHITE CARD ==================== */}
        <div style={cardStyle}>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} style={formStyle}>
              {/* Row 1: Name | Channel Link */}
              <div style={rowStyle}>
                <div style={fieldStyle}>
                  <label style={labelStyle}>
                    Your Name <span style={reqStyle}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John"
                    style={inputStyle}
                  />
                </div>
                <div style={fieldStyle}>
                  <label style={labelStyle}>
                    YouTube Channel Link <span style={reqStyle}>*</span>
                  </label>
                  <input
                    type="text"
                    name="channelLink"
                    required
                    autoComplete="url"
                    value={formData.channelLink}
                    onChange={handleChange}
                    placeholder="e.g. youtube.com/@yourchannel"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Platform selector — pill buttons */}
              <div style={fieldStyle}>
                <label style={labelStyle}>
                  Where should I contact you back? <span style={reqStyle}>*</span>
                </label>
                <div style={pillGroupStyle}>
                  {PLATFORMS.map((p) => (
                    <button
                      key={p.key}
                      type="button"
                      onClick={() => handlePlatformChange(p.key)}
                      style={pillStyle(formData.platform === p.key)}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Handle / Username field */}
              <div style={fieldStyle}>
                <label style={labelStyle}>
                  {HANDLE_FIELD[formData.platform].label} <span style={reqStyle}>*</span>
                </label>
                <input
                  type={HANDLE_FIELD[formData.platform].type}
                  name="handle"
                  required
                  value={formData.handle}
                  onChange={handleChange}
                  placeholder={HANDLE_FIELD[formData.platform].placeholder}
                  style={inputStyle}
                />
              </div>

              {/* Message / Idea */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Video Topic or Thumbnail Idea</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="e.g. I built a business with $500 — looking for a high-contrast style with bold face cutout..."
                  style={textareaStyle}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={submitStyle(isSubmitting)}
              >
                {isSubmitting ? 'Sending…' : 'SEND REQUEST'}
              </button>
            </form>
          ) : (
            /* ── Success state ── */
            <div style={successStyle}>
              <div style={successIconStyle}>
                <CheckCircle2 size={34} />
              </div>
              <h3 style={successTitleStyle}>Request Sent Successfully!</h3>
              <p style={successTextStyle}>
                Thanks <strong style={{ color: '#141414' }}>{formData.name}</strong>! I received your details and will reach out via{' '}
                <strong style={{ color: '#0260ef', textTransform: 'capitalize' }}>{formData.platform}</strong> ({formData.handle}) shortly.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
                {formData.platform === 'telegram' ? (
                  <a
                    href={CONTACT_CONTENT.channels.telegram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={successCtaStyle}
                  >
                    Open Telegram Chat
                    <ExternalLink size={16} style={{ marginLeft: '6px' }} />
                  </a>
                ) : formData.platform === 'facebook' ? (
                  <a
                    href={CONTACT_CONTENT.channels.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={successCtaStyle}
                  >
                    Open Facebook Profile
                    <ExternalLink size={16} style={{ marginLeft: '6px' }} />
                  </a>
                ) : null}
                <button type="button" onClick={handleReset} style={resetBtnStyle}>
                  Send Another Request
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Responsive: stack columns on mobile */}
      <style>{`
        @media (max-width: 900px) {
          #contact > div {
            grid-template-columns: 1fr !important;
            gap: clamp(32px, 6vw, 48px) !important;
          }
        }
      `}</style>
    </section>
  )
}
