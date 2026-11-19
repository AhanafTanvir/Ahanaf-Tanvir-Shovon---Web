import React from 'react';
import { Sparkles, Compass, Target, Lightbulb, PenTool, CheckCircle, ArrowRight } from 'lucide-react';
import type { ProcessStep } from '../data/portfolioData';

interface ProcessProps {
  process: ProcessStep[];
}

export const Process: React.FC<ProcessProps> = ({ process }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass size={18} />;
      case 1: return <Target size={18} />;
      case 2: return <Lightbulb size={18} />;
      case 3: return <PenTool size={18} />;
      case 4: return <CheckCircle size={18} />;
      default: return <Sparkles size={18} />;
    }
  };

  return (
    <section id="process" style={{ padding: '60px 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ marginBottom: '36px' }}>
          <span className="section-tag">
            <Sparkles size={13} style={{ color: '#2d4cc8' }} />
            <span>MY PROCESS</span>
          </span>
          <h2 className="section-heading" style={{ marginTop: '8px' }}>
            Design Process I Follow
          </h2>
        </div>

        {/* Process Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            position: 'relative',
          }}
          className="process-grid"
        >
          {process.map((step, idx) => (
            <div
              key={idx}
              className="neu-card neu-card-interactive"
              style={{
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                position: 'relative',
              }}
            >
              {/* Top row: Inset Icon & Step Number */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  className="neu-inset"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '0.55rem',
                    color: '#2d4cc8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getStepIcon(idx)}
                </div>

                <span
                  className="neu-badge"
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    padding: '4px 10px',
                    color: '#44476a',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {step.step}
                </span>
              </div>

              {/* Step Title & Description */}
              <div>
                <h3
                  style={{
                    fontSize: '1.12rem',
                    fontWeight: 700,
                    color: '#31344b',
                    marginBottom: '6px',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.86rem',
                    color: '#44476a',
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  {step.description}
                </p>
              </div>

              {/* Connecting arrow indicator for all except last */}
              {idx < process.length - 1 && (
                <div
                  className="process-connector"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-17px',
                    transform: 'translateY(-50%)',
                    width: '30px',
                    height: '30px',
                    borderRadius: '9999px',
                    backgroundColor: '#e6e7ee',
                    border: '1px solid #d1d9e6',
                    boxShadow: '3px 3px 6px #b8b9be, -3px -3px 6px #ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#31344b',
                    zIndex: 2,
                  }}
                >
                  <ArrowRight size={13} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .process-connector {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
