import { useState } from 'react'
import { CheckCircle2, ExternalLink } from 'lucide-react'
import { CONTACT_CONTENT } from '#constants'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    channelLink: '',
    email: '',
    platform: 'telegram',
    handle: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handlePlatformChange = (platformKey) => {
    setFormData((prev) => ({ ...prev, platform: platformKey }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Construct mailto link so user can immediately send via email client or store data
    const subject = encodeURIComponent(`Thumbnail Request from ${formData.name || 'Client'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Channel Link: ${formData.channelLink}\n` +
      `Email: ${formData.email}\n` +
      `Preferred Contact: ${formData.platform.toUpperCase()} (${formData.handle})\n\n` +
      `Video Topic / Thumbnail Idea:\n${formData.message}\n`
    )

    // Simulate fast submission & show confirmation
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Optional mailto trigger as fallback
      window.open(`mailto:${CONTACT_CONTENT.channels.email.address}?subject=${subject}&body=${body}`, '_blank')
    }, 600)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      channelLink: '',
      email: '',
      platform: 'telegram',
      handle: '',
      message: '',
    })
    setIsSubmitted(false)
  }

  return (
    <section
      id="contact"
      className="contact-section-wrapper"
      style={{
        backgroundColor: '#141414',
        background: '#141414',
        padding: 'clamp(70px, 9vw, 120px) 20px',
        color: '#ffffff',
        fontFamily: "'Figtree', sans-serif",
        width: '100%',
        position: 'relative',
        margin: 0,
        marginBottom: 0,
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto', width: '100%' }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 55px)' }}>
          <h2
            className="contact-main-title"
            style={{
              fontSize: 'clamp(48px, 6.5vw, 84px)',
              fontWeight: 900,
              letterSpacing: '-1.5px',
              margin: '0 0 16px 0',
              color: '#ffffff',
              textTransform: 'uppercase',
              fontFamily: "'Figtree', sans-serif",
              lineHeight: 1.05,
            }}
          >
            {CONTACT_CONTENT.title}
          </h2>
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: '#a0a5ad',
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontFamily: "'Figtree', sans-serif",
            }}
          >
            {CONTACT_CONTENT.subtitle}
          </p>
        </div>

        {/* Main Request Form Card */}
        <div
          style={{
            backgroundColor: '#1b1b1b',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '20px',
            padding: 'clamp(24px, 5vw, 44px)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
            marginBottom: '40px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Blue Glow in corner */}
          <div
            style={{
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(2, 96, 239, 0.25) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {/* Row 1: Name & Channel Link */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: '#e6e7ed' }}>
                    Your Name <span style={{ color: '#0260ef' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John"
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      backgroundColor: '#1b1b1b',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '15px',
                      outline: 'none',
                      fontFamily: "'Figtree', sans-serif",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: '#e6e7ed' }}>
                    YouTube Channel Link <span style={{ color: '#0260ef' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="channelLink"
                    required
                    value={formData.channelLink}
                    onChange={handleChange}
                    placeholder="e.g. youtube.com/@yourchannel"
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      backgroundColor: '#1b1b1b',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '15px',
                      outline: 'none',
                      fontFamily: "'Figtree', sans-serif",
                    }}
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: '#e6e7ed' }}>
                  Your Email Address <span style={{ color: '#0260ef' }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@gmail.com"
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    backgroundColor: '#1b1b1b',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '15px',
                    outline: 'none',
                    fontFamily: "'Figtree', sans-serif",
                  }}
                />
              </div>

              {/* Row 3: Platform Selector (Telegram vs Facebook vs Email) */}
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '10px', color: '#e6e7ed' }}>
                  Where should I contact you back? <span style={{ color: '#0260ef' }}>*</span>
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
                  {/* Telegram Option */}
                  <button
                    type="button"
                    onClick={() => handlePlatformChange('telegram')}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: formData.platform === 'telegram' ? '2px solid #0260ef' : '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: formData.platform === 'telegram' ? 'rgba(2, 96, 239, 0.15)' : '#1b1b1b',
                      color: formData.platform === 'telegram' ? '#ffffff' : '#a0a5ad',
                      fontSize: '14px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontFamily: "'Figtree', sans-serif",
                    }}
                  >
                    <span>✈️ Telegram</span>
                  </button>

                  {/* Facebook Option */}
                  <button
                    type="button"
                    onClick={() => handlePlatformChange('facebook')}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: formData.platform === 'facebook' ? '2px solid #0260ef' : '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: formData.platform === 'facebook' ? 'rgba(2, 96, 239, 0.15)' : '#1b1b1b',
                      color: formData.platform === 'facebook' ? '#ffffff' : '#a0a5ad',
                      fontSize: '14px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontFamily: "'Figtree', sans-serif",
                    }}
                  >
                    <span>📘 Facebook</span>
                  </button>

                  {/* Email Option */}
                  <button
                    type="button"
                    onClick={() => handlePlatformChange('email')}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: formData.platform === 'email' ? '2px solid #0260ef' : '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: formData.platform === 'email' ? 'rgba(2, 96, 239, 0.15)' : '#1b1b1b',
                      color: formData.platform === 'email' ? '#ffffff' : '#a0a5ad',
                      fontSize: '14px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontFamily: "'Figtree', sans-serif",
                    }}
                  >
                    <span>✉️ Email</span>
                  </button>
                </div>
              </div>

              {/* Row 4: Handle / Username based on chosen platform */}
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: '#e6e7ed' }}>
                  {formData.platform === 'telegram'
                    ? 'Your Telegram @username'
                    : formData.platform === 'facebook'
                    ? 'Your Facebook Profile Link'
                    : 'Preferred Email for replies'}
                  <span style={{ color: '#0260ef' }}> *</span>
                </label>
                <input
                  type="text"
                  name="handle"
                  required
                  value={formData.handle}
                  onChange={handleChange}
                  placeholder={
                    formData.platform === 'telegram'
                      ? 'e.g. @john_creator'
                      : formData.platform === 'facebook'
                      ? 'e.g. facebook.com/john.creator'
                      : 'e.g. john@gmail.com'
                  }
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    backgroundColor: '#1b1b1b',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '15px',
                    outline: 'none',
                    fontFamily: "'Figtree', sans-serif",
                  }}
                />
              </div>

              {/* Row 5: Video Topic / Notes */}
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '8px', color: '#e6e7ed' }}>
                  Video Topic or Thumbnail Idea
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="e.g. I built a business with $500 - looking for a high-contrast style with bold face cutout..."
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    backgroundColor: '#1b1b1b',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '15px',
                    outline: 'none',
                    fontFamily: "'Figtree', sans-serif",
                    resize: 'vertical',
                    lineHeight: 1.5,
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: '16px 28px',
                  backgroundColor: '#0260ef',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: 800,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'background-color 0.2s ease, transform 0.15s ease',
                  fontFamily: "'Figtree', sans-serif",
                  boxShadow: '0 4px 15px rgba(2, 96, 239, 0.35)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#024fc5')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0260ef')}
              >
                <span>{isSubmitting ? 'Sending...' : 'SEND REQUEST'}</span>
              </button>
            </form>
          ) : (
            /* Success Confirmation State */
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: 'rgba(2, 96, 239, 0.15)',
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

              <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '12px', color: '#ffffff' }}>
                Request Sent Successfully!
              </h3>

              <p style={{ fontSize: '16px', color: '#a0a5ad', maxWidth: '480px', margin: '0 auto 28px', lineHeight: 1.6 }}>
                Thanks <strong style={{ color: '#ffffff' }}>{formData.name}</strong>! I received your details and will reach out via{' '}
                <strong style={{ color: '#0260ef', textTransform: 'capitalize' }}>{formData.platform}</strong> ({formData.handle}) shortly.
              </p>

              {/* Immediate Chat Shortcut */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
                {formData.platform === 'telegram' ? (
                  <a
                    href={CONTACT_CONTENT.channels.telegram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
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
                    }}
                  >
                    <span>Open Telegram Chat with Ayuthaya</span>
                    <ExternalLink size={16} />
                  </a>
                ) : formData.platform === 'facebook' ? (
                  <a
                    href={CONTACT_CONTENT.channels.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
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
                    }}
                  >
                    <span>Open Facebook Profile</span>
                    <ExternalLink size={16} />
                  </a>
                ) : null}

                <button
                  type="button"
                  onClick={handleReset}
                  style={{
                    padding: '12px 20px',
                    backgroundColor: 'transparent',
                    color: '#a0a5ad',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Send Another Request
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ==========================================================================
            DIRECT CONTACT SECTION: TELEGRAM, FACEBOOK, EMAIL, FIVERR
            ========================================================================== */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '28px', color: '#ffffff' }}>
            Prefer to reach me directly?
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '16px',
            }}
          >
            {/* Telegram Direct Card */}
            <a
              href={CONTACT_CONTENT.channels.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#1b1b1b',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '14px',
                padding: '20px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0260ef'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(2, 96, 239, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(2, 96, 239, 0.15)',
                  color: '#0260ef',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  flexShrink: 0,
                }}
              >
                ✈️
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ color: '#ffffff', fontSize: '16px', fontWeight: 800 }}>Telegram</div>
                <div style={{ color: '#0260ef', fontSize: '14px', fontWeight: 600 }}>{CONTACT_CONTENT.channels.telegram.handle}</div>
                <div style={{ color: '#8e949e', fontSize: '12px' }}>{CONTACT_CONTENT.channels.telegram.desc}</div>
              </div>
            </a>

            {/* Facebook Direct Card */}
            <a
              href={CONTACT_CONTENT.channels.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#1b1b1b',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '14px',
                padding: '20px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0260ef'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(2, 96, 239, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(24, 119, 242, 0.15)',
                  color: '#1877f2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  flexShrink: 0,
                }}
              >
                📘
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ color: '#ffffff', fontSize: '16px', fontWeight: 800 }}>Facebook</div>
                <div style={{ color: '#1877f2', fontSize: '14px', fontWeight: 600 }}>{CONTACT_CONTENT.channels.facebook.handle}</div>
                <div style={{ color: '#8e949e', fontSize: '12px' }}>{CONTACT_CONTENT.channels.facebook.desc}</div>
              </div>
            </a>

            {/* Email Direct Card */}
            <a
              href={CONTACT_CONTENT.channels.email.url}
              style={{
                backgroundColor: '#1b1b1b',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '14px',
                padding: '20px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0260ef'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(2, 96, 239, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 122, 0, 0.15)',
                  color: '#ff7a00',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  flexShrink: 0,
                }}
              >
                ✉️
              </div>
              <div style={{ textAlign: 'left', overflow: 'hidden' }}>
                <div style={{ color: '#ffffff', fontSize: '16px', fontWeight: 800 }}>Email</div>
                <div
                  style={{
                    color: '#ff7a00',
                    fontSize: '13px',
                    fontWeight: 600,
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {CONTACT_CONTENT.channels.email.address}
                </div>
                <div style={{ color: '#8e949e', fontSize: '12px' }}>{CONTACT_CONTENT.channels.email.desc}</div>
              </div>
            </a>

            {/* Fiverr Order Card */}
            <a
              href={CONTACT_CONTENT.channels.fiverr.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#1b1b1b',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '14px',
                padding: '20px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#1dbf73'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(29, 191, 115, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(29, 191, 115, 0.15)',
                  color: '#1dbf73',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  flexShrink: 0,
                  fontWeight: 900,
                }}
              >
                fi
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ color: '#ffffff', fontSize: '16px', fontWeight: 800 }}>Fiverr</div>
                <div style={{ color: '#1dbf73', fontSize: '14px', fontWeight: 600 }}>Order on Fiverr</div>
                <div style={{ color: '#8e949e', fontSize: '12px' }}>{CONTACT_CONTENT.channels.fiverr.desc}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
