import React from 'react';
import { Sparkles, Award, FolderKanban, Users } from 'lucide-react';
import type { PortfolioData } from '../data/portfolioData';
import { LiquidGlassButton } from './LiquidGlassButton';

interface AboutProps {
  personal: PortfolioData['personal'];
  about: PortfolioData['about'];
}

export const About: React.FC<AboutProps> = ({ personal, about }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const statItems = [
    {
      value: personal.yearsOfExperience,
      label: 'Years Experience',
      icon: Award,
      color: '#2d4cc8',
    },
    {
      value: personal.projectsCompleted,
      label: 'Projects Completed',
      icon: FolderKanban,
      color: '#18634b',
    },
    {
      value: personal.happyClients,
      label: 'Happy Clients',
      icon: Users,
      color: '#31344b',
    },
  ];

  return (
    <section id="about" style={{ padding: '70px 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Neumorphic Panel Container */}
        <div
          className="neu-panel"
          style={{
            padding: '44px 36px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center',
            }}
            className="about-grid"
          >
            {/* Left Column: Title & Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div>
                <span className="section-tag">
                  <Sparkles size={13} style={{ color: '#2d4cc8' }} />
                  <span>ABOUT ME</span>
                </span>
                <h3
                  className="section-heading"
                  style={{ marginTop: '8px', maxWidth: '440px' }}
                >
                  {about.headline}
                </h3>
              </div>

              {/* 3 Stats Row in Neumorphic Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                }}
                className="stats-row"
              >
                {statItems.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="neu-card"
                      style={{
                        padding: '18px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '8px',
                      }}
                    >
                      <div
                        className="neu-inset-sm"
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '0.45rem',
                          color: stat.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '2px',
                        }}
                      >
                        <Icon size={17} />
                      </div>
                      <div
                        style={{
                          fontSize: '1.45rem',
                          fontWeight: 800,
                          color: '#31344b',
                          lineHeight: 1,
                          fontFamily: 'var(--font-display)',
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontSize: '0.76rem',
                          color: '#44476a',
                          fontWeight: 600,
                          lineHeight: 1.25,
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Bio Narrative & Action */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                paddingLeft: '10px',
              }}
              className="about-right"
            >
              {about.storyParagraphs.map((para, idx) => (
                <p
                  key={idx}
                  style={{
                    fontSize: '1.02rem',
                    lineHeight: 1.7,
                    color: '#44476a',
                    fontWeight: 400,
                  }}
                >
                  {para}
                </p>
              ))}

              <div style={{ paddingTop: '8px' }}>
                <LiquidGlassButton
                  text="More About Me"
                  onClick={() => scrollTo('skills')}
                  size="md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-row {
            grid-template-columns: 1fr !important;
          }
          .about-right {
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};
