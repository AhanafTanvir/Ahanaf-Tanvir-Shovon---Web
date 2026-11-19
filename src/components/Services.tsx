import React from 'react';
import { ArrowUpRight, Sparkles, Layout, Layers, Component, Code, Smartphone, Palette } from 'lucide-react';
import type { Service } from '../data/portfolioData';

interface ServicesProps {
  services: Service[];
  onSelectService?: (service: Service) => void;
}

export const Services: React.FC<ServicesProps> = ({ services, onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout': return <Layout size={20} />;
      case 'Layers': return <Layers size={20} />;
      case 'Component': return <Component size={20} />;
      case 'Code': return <Code size={20} />;
      case 'Smartphone': return <Smartphone size={20} />;
      case 'Palette': return <Palette size={20} />;
      default: return <Layout size={20} />;
    }
  };

  const getCardAccent = (index: number) => {
    const colors = [
      '#2d4cc8',
      '#a91e2c',
      '#18634b',
      '#31344b',
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="services" style={{ padding: '60px 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ marginBottom: '36px' }}>
          <span className="section-tag">
            <Sparkles size={13} style={{ color: '#2d4cc8' }} />
            <span>WHAT I DO</span>
          </span>
          <h2 className="section-heading" style={{ marginTop: '8px' }}>
            Services I Offer
          </h2>
        </div>

        {/* 4 Neumorphic Service Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          {services.map((service, idx) => {
            const accentColor = getCardAccent(idx);
            return (
              <div
                key={service.id}
                className="neu-card neu-card-interactive service-neu-card"
                onClick={() => onSelectService && onSelectService(service)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '270px',
                  cursor: 'pointer',
                  overflow: 'hidden',
                }}
              >
                {/* Card Body */}
                <div style={{ padding: '26px 24px 20px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '22px',
                    }}
                  >
                    {/* Inset Icon Holder */}
                    <div
                      className="neu-inset"
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '0.55rem',
                        color: accentColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {getIcon(service.iconName)}
                    </div>

                    <div
                      className="neu-btn-icon card-arrow"
                      style={{
                        width: '34px',
                        height: '34px',
                        color: '#44476a',
                      }}
                    >
                      <ArrowUpRight size={17} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#31344b',
                      marginBottom: '10px',
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#44476a',
                      lineHeight: 1.6,
                      fontWeight: 400,
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Card Footer with border-top border-light (matches screenshot 5) */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    padding: '16px 24px',
                    borderTop: '1px solid #d1d9e6',
                  }}
                >
                  {service.deliverables.slice(0, 2).map((del, dIdx) => (
                    <span
                      key={dIdx}
                      className="neu-tag"
                      style={{
                        fontSize: '0.73rem',
                        padding: '4px 11px',
                      }}
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .service-neu-card:hover .card-arrow {
          box-shadow: var(--shadow-inset);
          color: #2d4cc8 !important;
        }
      `}</style>
    </section>
  );
};
