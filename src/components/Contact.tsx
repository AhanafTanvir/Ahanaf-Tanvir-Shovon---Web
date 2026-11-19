import React, { useState } from 'react';
import { Sparkles, Mail, Phone, MapPin, Send, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { PortfolioData } from '../data/portfolioData';

interface ContactProps {
  personal: PortfolioData['personal'];
}

export const Contact: React.FC<ContactProps> = ({ personal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: 'Web Development',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setSubmitted(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#2d4cc8', '#31344b', '#18634b', '#f0b400'],
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        project: 'Web Development',
        message: '',
      });
    }, 4500);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section id="contact" style={{ padding: '70px 0 90px 0', position: 'relative' }}>
      <div className="container-custom">
        <div
          className="neu-panel"
          style={{
            padding: '48px 36px',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '44px',
              position: 'relative',
              zIndex: 1,
            }}
            className="contact-grid"
          >
            {/* Left Column: Headline & Direct Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '32px' }}>
              <div>
                <span className="section-tag">
                  <Sparkles size={13} style={{ color: '#2d4cc8' }} />
                  <span>LET'S CONNECT</span>
                </span>
                <h2
                  className="section-heading"
                  style={{ marginTop: '12px', lineHeight: 1.25, maxWidth: '440px' }}
                >
                  Have a project in mind? Let's create something amazing together.
                </h2>
              </div>

              {/* Direct Info Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Email Item */}
                <div
                  className="neu-card neu-card-interactive"
                  onClick={() => copyToClipboard(personal.email, 'email')}
                  style={{
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                  title="Click to copy email"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      className="neu-inset-sm"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '0.45rem',
                        color: '#2d4cc8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#5e6282', fontWeight: 700 }}>Email</div>
                      <div style={{ fontSize: '0.92rem', color: '#31344b', fontWeight: 700, wordBreak: 'break-all' }}>
                        {personal.email}
                      </div>
                    </div>
                  </div>
                  <div
                    className="neu-btn-icon"
                    style={{
                      width: '34px',
                      height: '34px',
                      color: copiedType === 'email' ? '#18634b' : '#44476a',
                      flexShrink: 0,
                    }}
                  >
                    {copiedType === 'email' ? <Check size={16} /> : <Copy size={15} />}
                  </div>
                </div>

                {/* Phone Item */}
                <div
                  className="neu-card neu-card-interactive"
                  onClick={() => copyToClipboard(personal.phone, 'phone')}
                  style={{
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                  title="Click to copy phone"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      className="neu-inset-sm"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '0.45rem',
                        color: '#18634b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#5e6282', fontWeight: 700 }}>Phone</div>
                      <div style={{ fontSize: '0.92rem', color: '#31344b', fontWeight: 700 }}>
                        {personal.phone}
                      </div>
                    </div>
                  </div>
                  <div
                    className="neu-btn-icon"
                    style={{
                      width: '34px',
                      height: '34px',
                      color: copiedType === 'phone' ? '#18634b' : '#44476a',
                      flexShrink: 0,
                    }}
                  >
                    {copiedType === 'phone' ? <Check size={16} /> : <Copy size={15} />}
                  </div>
                </div>

                {/* Location Item */}
                <div
                  className="neu-card"
                  style={{
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  <div
                    className="neu-inset-sm"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '0.45rem',
                      color: '#a91e2c',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#5e6282', fontWeight: 700 }}>Location</div>
                    <div style={{ fontSize: '0.92rem', color: '#31344b', fontWeight: 700 }}>
                      {personal.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Neumorphic Contact Form (Matches Screenshot 3 & 1) */}
            <div style={{ position: 'relative' }}>
              <div
                className="neu-card"
                style={{
                  padding: '32px 28px',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {submitted ? (
                  <div
                    style={{
                      padding: '40px 20px',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '16px',
                    }}
                  >
                    <div
                      className="neu-inset"
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '9999px',
                        color: '#18634b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Check size={28} />
                    </div>
                    <h4 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#31344b', fontFamily: 'var(--font-display)' }}>
                      Message Sent Successfully!
                    </h4>
                    <p style={{ color: '#44476a', fontSize: '0.95rem', maxWidth: '340px' }}>
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Row 1: Name and Email */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: '14px',
                      }}
                    >
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#31344b', marginBottom: '6px' }}>
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="neu-input"
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#31344b', marginBottom: '6px' }}>
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="neu-input"
                        />
                      </div>
                    </div>

                    {/* Row 2: Project Type */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#31344b', marginBottom: '6px' }}>
                        Service Needed
                      </label>
                      <select
                        value={formData.project}
                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                        className="neu-input"
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="Web Development">Web Development</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="App Development">App Development</option>
                        <option value="UI/UX & Design System">UI/UX & Design System</option>
                        <option value="Other Inquiries">Other Inquiries</option>
                      </select>
                    </div>

                    {/* Row 3: Message */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#31344b', marginBottom: '6px' }}>
                        Your Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell me about your project goals, timeline, and scope..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="neu-input"
                        style={{ resize: 'vertical' }}
                      />
                    </div>

                    {/* Neumorphic Submit Button (Matches Place Order / Apply in Screenshots 1 & 3) */}
                    <button
                      type="submit"
                      className="neu-btn"
                      style={{
                        width: '100%',
                        padding: '13px',
                        marginTop: '6px',
                        fontSize: '0.96rem',
                        fontWeight: 700,
                      }}
                    >
                      <span>Send Message</span>
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
