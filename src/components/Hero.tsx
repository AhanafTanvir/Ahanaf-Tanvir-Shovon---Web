import React from 'react';
import { Download, Sparkles, TrendingUp, Award } from 'lucide-react';
import type { PortfolioData } from '../data/portfolioData';
import { LiquidGlassButton } from './LiquidGlassButton';
import { TypewriterText } from './TypewriterText';

interface HeroProps {
  personal: PortfolioData['personal'];
  trustedCompanies: PortfolioData['trustedCompanies'];
  onOpenProject?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ personal }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{ position: 'relative', paddingTop: '32px', paddingBottom: '70px' }}>
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Text & CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', zIndex: 2 }}>
            {/* Greeting Tag */}
            <div>
              <span className="section-tag">
                <Sparkles size={13} style={{ color: '#2d4cc8' }} />
                <span>{personal.greeting}</span>
              </span>
            </div>

            {/* Main Name & Animated Title */}
            <div>
              <h1
                style={{
                  fontSize: 'clamp(2.65rem, 5.2vw, 4.1rem)',
                  fontWeight: 800,
                  color: '#31344b',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: '10px',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {personal.name}
              </h1>
              <h2
                style={{
                  fontSize: 'clamp(1.7rem, 3.1vw, 2.4rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.25,
                  minHeight: '1.3em',
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <TypewriterText
                  words={
                    personal.titles && personal.titles.length > 0
                      ? personal.titles
                      : ['Web Developer', 'Graphic Designer', 'App Developer']
                  }
                />
              </h2>
            </div>

            {/* Tagline / Bio summary */}
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: '#44476a',
                maxWidth: '480px',
                fontWeight: 400,
              }}
            >
              {personal.bio}
            </p>

            {/* CTA Buttons (Neumorphic) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', paddingTop: '10px', alignItems: 'center' }}>
              <LiquidGlassButton
                text="Get started"
                onClick={() => scrollTo('work')}
                size="lg"
              />

              <a
                href={personal.resumeUrl}
                download="Ahanaf_Tanvir_Shovon_CV.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Download CV: Demo CV download triggered!');
                }}
                className="neu-btn"
                id="hero-download-cv-btn"
                style={{
                  height: '56px',
                  padding: '0 24px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                }}
              >
                <span>Download CV</span>
                <Download size={16} />
              </a>
            </div>

            {/* Trusted By Section */}
            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #d1d9e6' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#5e6282',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'block',
                  marginBottom: '14px',
                }}
              >
                Trusted by
              </span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  flexWrap: 'wrap',
                  opacity: 0.85,
                }}
              >
                {/* Google */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '1rem', color: '#44476a' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                  </svg>
                  <span>Google</span>
                </div>

                {/* Microsoft */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.95rem', color: '#44476a' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 6px)', gap: '2px' }}>
                    <div style={{ width: '6px', height: '6px', background: '#f25022' }}></div>
                    <div style={{ width: '6px', height: '6px', background: '#7fba00' }}></div>
                    <div style={{ width: '6px', height: '6px', background: '#00a4ef' }}></div>
                    <div style={{ width: '6px', height: '6px', background: '#ffb900' }}></div>
                  </div>
                  <span>Microsoft</span>
                </div>

                {/* Airbnb */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.95rem', color: '#44476a' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF5A5F">
                    <path d="M12 0C6.5 0 2 4.5 2 10c0 4.5 3 8 7 12.5 1.5 1.7 3 1.5 3 1.5s1.5.2 3-1.5c4-4.5 7-8 7-12.5 0-5.5-4.5-10-10-10zm0 14c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                  </svg>
                  <span>airbnb</span>
                </div>

                {/* HubSpot */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 700, fontSize: '0.95rem', color: '#44476a' }}>
                  <span style={{ color: '#ff7a59', fontSize: '1.2rem', lineHeight: 1 }}>•</span>
                  <span>HubSpot</span>
                </div>

                {/* Dribbble */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 700, fontSize: '0.95rem', color: '#ea4c89' }}>
                  <span>dribbble</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Neumorphic Portrait Card */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className="neu-panel"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '420px',
                aspectRatio: '0.88',
                padding: '16px',
                borderRadius: '0.75rem',
                zIndex: 1,
              }}
            >
              <div
                className="neu-inset"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '0.55rem',
                  overflow: 'hidden',
                  position: 'relative',
                  padding: '4px',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '0.45rem',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                    className="hero-img-hover"
                  />
                </div>
              </div>

              {/* Floating Neumorphic Badge 1: Top Right "5+ Years of Experience" */}
              <div
                className="neu-card animate-float"
                style={{
                  position: 'absolute',
                  top: '-18px',
                  right: '-18px',
                  padding: '12px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  zIndex: 3,
                }}
              >
                <div
                  className="neu-inset-sm"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '0.45rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2d4cc8',
                  }}
                >
                  <Award size={19} />
                </div>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#31344b', lineHeight: 1.1 }}>
                    {personal.yearsOfExperience}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#44476a', fontWeight: 600 }}>
                    Years of Experience
                  </div>
                </div>
              </div>

              {/* Floating Neumorphic Badge 2: Bottom Right "Design Impact +120%" */}
              <div
                className="neu-card animate-float-delayed"
                style={{
                  position: 'absolute',
                  bottom: '-22px',
                  right: '-20px',
                  padding: '14px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  zIndex: 3,
                  minWidth: '175px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#44476a' }}>Design Impact</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#18634b', fontWeight: 700, fontSize: '0.85rem' }}>
                    <TrendingUp size={14} />
                    <span>{personal.designImpact}</span>
                  </div>
                </div>

                {/* Sparkline Graphic inside subtle inset container */}
                <div className="neu-inset-sm" style={{ width: '100%', height: '40px', padding: '4px 6px' }}>
                  <svg width="100%" height="30" viewBox="0 0 120 36" fill="none">
                    <defs>
                      <linearGradient id="sparkGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2d4cc8" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#2d4cc8" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M2 28 C 20 25, 35 32, 50 18 C 65 4, 80 22, 95 10 C 105 2, 115 6, 118 4"
                      stroke="#2d4cc8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2 28 C 20 25, 35 32, 50 18 C 65 4, 80 22, 95 10 C 105 2, 115 6, 118 4 L 118 36 L 2 36 Z"
                      fill="url(#sparkGradient)"
                    />
                    <circle cx="118" cy="4" r="3.5" fill="#2d4cc8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-img-hover:hover {
          transform: scale(1.03);
        }
        @media (max-width: 820px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};
