import React, { useState } from 'react';
import { Sliders, X, Check, RotateCcw, FileCode } from 'lucide-react';
import type { PortfolioData } from '../data/portfolioData';

interface CustomizeDrawerProps {
  portfolioData: PortfolioData;
  onUpdatePersonal: (updated: Partial<PortfolioData['personal']>) => void;
  onReset: () => void;
}

export const CustomizeDrawer: React.FC<CustomizeDrawerProps> = ({
  portfolioData,
  onUpdatePersonal,
  onReset,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'quick' | 'guide'>('quick');

  return (
    <>
      {/* Floating Toggle Pill (Liquid Squircle) */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 50,
          background: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          boxShadow: 'inset 1.5px -1.5px 1px -1px rgba(255, 255, 255, 0.95), inset -1.5px 1.5px 1px -1px rgba(255, 255, 255, 0.95), 0 12px 28px -5px rgba(99, 102, 241, 0.25)',
          borderRadius: '24px 16px 26px 18px / 18px 26px 16px 24px',
          padding: '11px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#0f172a',
          fontSize: '0.82rem',
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        className="customize-floating-trigger"
        id="quick-customize-btn"
      >
        <Sliders size={16} color="#6366f1" />
        <span>Quick Edit & Config</span>
        <span 
          style={{
            fontSize: '0.65rem',
            background: '#6366f1',
            color: '#ffffff',
            padding: '2px 7px',
            borderRadius: '10px 6px 12px 7px / 7px 12px 6px 10px'
          }}
        >
          Live
        </span>
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(15, 23, 42, 0.35)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            justifyContent: 'flex-start'
          }}
          onClick={() => setIsOpen(false)}
        >
          {/* Drawer Sidebar */}
          <div 
            style={{
              width: '100%',
              maxWidth: '420px',
              height: '100%',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(30px)',
              boxShadow: '20px 0 50px rgba(0, 0, 0, 0.15)',
              borderRight: '1px solid rgba(255, 255, 255, 0.9)',
              display: 'flex',
              flexDirection: 'column',
              padding: '28px 24px',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sliders size={20} color="#6366f1" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-display)' }}>
                  Portfolio Customizer
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '6px',
                  borderRadius: '50%'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Tabs with Liquid Squircle Geometry */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
              <button
                onClick={() => setActiveTab('quick')}
                style={{
                  flex: 1,
                  padding: '9px 14px',
                  borderRadius: '16px 10px 18px 12px / 12px 18px 10px 16px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  background: activeTab === 'quick' ? '#0f172a' : 'rgba(241, 245, 249, 0.8)',
                  color: activeTab === 'quick' ? '#ffffff' : '#475569',
                  boxShadow: activeTab === 'quick' ? 'inset 1px -1px 1px -1px rgba(255,255,255,0.3), 0 4px 12px rgba(15,23,42,0.2)' : 'none',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                Live Editor
              </button>
              <button
                onClick={() => setActiveTab('guide')}
                style={{
                  flex: 1,
                  padding: '9px 14px',
                  borderRadius: '16px 10px 18px 12px / 12px 18px 10px 16px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  background: activeTab === 'guide' ? '#0f172a' : 'rgba(241, 245, 249, 0.8)',
                  color: activeTab === 'guide' ? '#ffffff' : '#475569',
                  boxShadow: activeTab === 'guide' ? 'inset 1px -1px 1px -1px rgba(255,255,255,0.3), 0 4px 12px rgba(15,23,42,0.2)' : 'none',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                File Guide
              </button>
            </div>

            {activeTab === 'quick' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.5 }}>
                  Change any values below to instantly preview updates on the website.
                </p>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={portfolioData.personal.name}
                    onChange={(e) => onUpdatePersonal({ name: e.target.value })}
                    className="glass-input"
                    style={{ fontSize: '0.88rem', padding: '10px 14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Job Title / Role (Primary)
                  </label>
                  <input
                    type="text"
                    value={portfolioData.personal.title}
                    onChange={(e) => onUpdatePersonal({ title: e.target.value })}
                    className="glass-input"
                    style={{ fontSize: '0.88rem', padding: '10px 14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Typing Animation Skills / Roles (comma separated)
                  </label>
                  <input
                    type="text"
                    value={(portfolioData.personal.titles || ['Web Developer', 'Graphic Designer', 'App Developer']).join(', ')}
                    placeholder="Web Developer, Graphic Designer, App Developer"
                    onChange={(e) => {
                      const list = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                      onUpdatePersonal({ titles: list });
                    }}
                    className="glass-input"
                    style={{ fontSize: '0.88rem', padding: '10px 14px' }}
                  />
                  <span style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '3px', display: 'block' }}>
                    These rotate one-by-one in the hero section typing animation.
                  </span>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Hero Bio Tagline
                  </label>
                  <textarea
                    rows={3}
                    value={portfolioData.personal.bio}
                    onChange={(e) => onUpdatePersonal({ bio: e.target.value })}
                    className="glass-input"
                    style={{ fontSize: '0.88rem', padding: '10px 14px', resize: 'vertical' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={portfolioData.personal.email}
                    onChange={(e) => onUpdatePersonal({ email: e.target.value })}
                    className="glass-input"
                    style={{ fontSize: '0.88rem', padding: '10px 14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={portfolioData.personal.phone}
                    onChange={(e) => onUpdatePersonal({ phone: e.target.value })}
                    className="glass-input"
                    style={{ fontSize: '0.88rem', padding: '10px 14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Location
                  </label>
                  <input
                    type="text"
                    value={portfolioData.personal.location}
                    onChange={(e) => onUpdatePersonal({ location: e.target.value })}
                    className="glass-input"
                    style={{ fontSize: '0.88rem', padding: '10px 14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Years of Experience Badge
                  </label>
                  <input
                    type="text"
                    value={portfolioData.personal.yearsOfExperience}
                    onChange={(e) => onUpdatePersonal({ yearsOfExperience: e.target.value })}
                    className="glass-input"
                    style={{ fontSize: '0.88rem', padding: '10px 14px' }}
                  />
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '20px', display: 'flex', gap: '10px' }}>
                  <button
                    onClick={onReset}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '11px',
                      borderRadius: '18px 12px 20px 14px / 14px 20px 12px 18px',
                      border: '1px solid rgba(226, 232, 240, 0.95)',
                      background: 'rgba(241, 245, 249, 0.85)',
                      boxShadow: 'inset 1px -1px 1px -1px rgba(255, 255, 255, 0.9), 0 2px 6px rgba(0, 0, 0, 0.04)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#475569',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <RotateCcw size={15} />
                    <span>Reset Default</span>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '11px',
                      borderRadius: '18px 12px 20px 14px / 14px 20px 12px 18px',
                      border: 'none',
                      background: '#0f172a',
                      boxShadow: 'inset 1px -1px 1px -1px rgba(255, 255, 255, 0.3), 0 6px 16px rgba(15, 23, 42, 0.25)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <Check size={15} />
                    <span>Apply & Close</span>
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                <div 
                  style={{
                    padding: '18px',
                    borderRadius: '24px 16px 26px 18px / 18px 26px 16px 24px',
                    background: 'rgba(238, 242, 255, 0.75)',
                    border: '1px solid rgba(199, 210, 254, 0.7)',
                    boxShadow: 'inset 1.5px -1.5px 1px -1px rgba(255, 255, 255, 0.95), 0 8px 20px -6px rgba(99, 102, 241, 0.1)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <FileCode size={18} color="#4f46e5" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#312e81' }}>Centralized Data</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#4338ca', lineHeight: 1.5 }}>
                    All portfolio data is kept in:
                    <br />
                    <code style={{ background: '#ffffff', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                      src/data/portfolioData.ts
                    </code>
                  </p>
                </div>

                <div style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.6 }}>
                  <strong>How to request changes:</strong>
                  <ul style={{ paddingLeft: '18px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <li>Tell me in the chat: <em>"Change my name to..."</em></li>
                    <li><em>"Add my skill Python and AWS"</em></li>
                    <li><em>"Update my projects with links to my repo"</em></li>
                    <li><em>"Change the bio and contact email"</em></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .customize-floating-trigger:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px -5px rgba(99, 102, 241, 0.35) !important;
        }
      `}</style>
    </>
  );
};
