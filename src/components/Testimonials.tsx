import React, { useState } from 'react';
import { Sparkles, Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import type { Testimonial } from '../data/portfolioData';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" style={{ padding: '60px 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Header with Arrows */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '36px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <span className="section-tag">
              <Sparkles size={13} style={{ color: '#2d4cc8' }} />
              <span>TESTIMONIALS</span>
            </span>
            <h2 className="section-heading" style={{ marginTop: '8px' }}>
              What Clients Say
            </h2>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={prev}
              className="neu-btn-icon"
              style={{ width: '42px', height: '42px' }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={19} />
            </button>
            <button
              onClick={next}
              className="neu-btn-icon"
              style={{ width: '42px', height: '42px' }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>

        {/* Testimonials 3 Neumorphic Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {testimonials.map((item, idx) => {
            const isHighlighted = idx === activeIndex;
            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className="neu-card"
                style={{
                  padding: '28px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '22px',
                  cursor: 'pointer',
                  boxShadow: isHighlighted
                    ? 'inset 3px 3px 6px #b8b9be, inset -3px -3px 6px #ffffff'
                    : '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff',
                  borderColor: isHighlighted ? '#c4cddb' : '#d1d9e6',
                  transition: 'all 0.25s ease',
                }}
              >
                <div>
                  {/* Quote Icon & Stars + Rating Badge (Matches Screenshot 4) */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div
                      className="neu-inset-sm"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '0.45rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#2d4cc8',
                      }}
                    >
                      <Quote size={17} style={{ transform: 'rotate(180deg)' }} />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {[...Array(item.rating)].map((_, rIdx) => (
                        <Star key={rIdx} size={14} fill="#f0b400" color="#f0b400" />
                      ))}
                      <span
                        className="neu-badge"
                        style={{
                          fontSize: '0.7rem',
                          padding: '2px 8px',
                          marginLeft: '4px',
                          color: '#31344b',
                        }}
                      >
                        {item.rating}.0
                      </span>
                    </div>
                  </div>

                  {/* Quote Text */}
                  <p
                    style={{
                      fontSize: '0.93rem',
                      lineHeight: 1.65,
                      color: '#44476a',
                      fontWeight: 400,
                    }}
                  >
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Row with border-top border-light */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    paddingTop: '16px',
                    borderTop: '1px solid #d1d9e6',
                  }}
                >
                  <div
                    className="neu-inset-sm"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '9999px',
                      padding: '3px',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={item.avatar}
                      alt={item.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '9999px',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: '#31344b',
                        fontFamily: 'var(--font-display)',
                      }}
                    >
                      {item.name}
                    </div>
                    <div style={{ fontSize: '0.76rem', color: '#5e6282', fontWeight: 600 }}>
                      {item.role}, <span style={{ color: '#2d4cc8' }}>{item.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
