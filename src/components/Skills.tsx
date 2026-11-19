import React, { useState } from 'react';
import { Sparkles, Code2, Layers, Cpu, Wrench } from 'lucide-react';
import type { Skill } from '../data/portfolioData';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'All Stack', icon: Layers },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend & APIs', icon: Cpu },
    { id: 'tools', label: 'Design & DevOps', icon: Wrench },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  const renderTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'react':
        return (
          <svg viewBox="-11.5 -10.23174 23 20.46348" width="28" height="28">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        );
      case 'typescript':
        return (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <rect width="32" height="32" rx="6" fill="#3178c6"/>
            <path d="M10.8 11.2h10.4v2.8h-3.6v12h-3.2v-12h-3.6v-2.8zm12.3 8.3c.7-.6 1.7-1 2.8-1 1.6 0 2.7.9 2.7 2.2 0 1.2-.8 1.9-2.2 2.5l-1 .4c-1.8.8-3 1.8-3 3.9 0 2.6 2 4.1 4.7 4.1 1.7 0 3.1-.6 4-1.6l-1.4-2.1c-.6.6-1.6 1.1-2.6 1.1-1.3 0-2-.7-2-1.6 0-1 .7-1.6 2.1-2.1l1.1-.4c2.2-.9 3.2-2.1 3.2-4.1 0-2.6-1.9-4-4.5-4-1.6 0-3 .6-3.8 1.4l1.2 2.3z" fill="#ffffff" transform="scale(0.85) translate(2, 2)"/>
          </svg>
        );
      case 'javascript':
        return (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <rect width="32" height="32" rx="6" fill="#f7df1e"/>
            <path d="M12.8 23.6c0 2.2-1.3 3.4-3.4 3.4-1.8 0-3-.9-3.6-2.1l2.2-1.3c.3.7.8 1.1 1.4 1.1.7 0 1.1-.4 1.1-1.2V13h2.3v10.6zm6.8-1.5c.7.9 1.8 1.5 3 1.5 1.3 0 2-.6 2-1.5 0-1-.7-1.4-2.3-2.1-2.2-.9-3.7-2.1-3.7-4.2 0-2.4 1.8-4.2 4.6-4.2 1.8 0 3.1.6 4.1 1.9l-1.8 1.4c-.6-.7-1.4-1-2.3-1-1.1 0-1.8.6-1.8 1.4 0 .9.6 1.3 2.1 1.9 2.5 1.1 3.9 2.2 3.9 4.4 0 2.7-2 4.4-4.9 4.4-2.3 0-3.9-1-4.8-2.5l1.8-1.4z" fill="#000000" transform="scale(0.9) translate(1, 1)"/>
          </svg>
        );
      case 'nextjs':
        return (
          <svg viewBox="0 0 180 180" width="28" height="28">
            <circle cx="90" cy="90" r="90" fill="#000000"/>
            <path fill="url(#nextGradient)" d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l72.631 93.636a89.92 89.92 0 0010.763-5.5z"/>
            <path fill="#ffffff" d="M115.886 54h12.114v72h-12.114z"/>
            <defs>
              <linearGradient id="nextGradient" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff"/>
                <stop offset="1" stopColor="#ffffff" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        );
      case 'tailwind':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#06b6d4">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
          </svg>
        );
      case 'nodejs':
        return (
          <svg viewBox="0 0 32 32" width="28" height="28">
            <path d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5z" fill="#339933"/>
            <path d="M16 11.2c-2.8 0-4.5 1.5-4.5 3.8 0 3.3 4.2 3.2 4.2 5 0 .6-.5 1-1.4 1-.9 0-1.8-.4-2.4-.9l-.9 1.6c.9.8 2.2 1.3 3.4 1.3 2.7 0 4.5-1.5 4.5-3.9 0-3.3-4.2-3.1-4.2-4.9 0-.6.5-.9 1.2-.9.8 0 1.6.4 2.2.8l.8-1.6c-.8-.7-1.9-1.2-3.2-1.2z" fill="#ffffff"/>
          </svg>
        );
      case 'nestjs':
        return (
          <svg viewBox="0 0 256 256" width="28" height="28">
            <path fill="#ea2845" d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm68.3 189.5l-44.5-57.1v57.1h-19.1V95.7h19.1l44.5 57.1V95.7h19.1v93.8h-19.1zM60.6 95.7h19.1v93.8H60.6V95.7z"/>
          </svg>
        );
      case 'database':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#4169e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
          </svg>
        );
      case 'figma':
        return (
          <svg viewBox="0 0 38 57" width="22" height="28">
            <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe"/>
            <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83"/>
            <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262"/>
            <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e"/>
            <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff"/>
          </svg>
        );
      case 'palette':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="13.5" cy="6.5" r=".5" fill="#8b5cf6"/>
            <circle cx="17.5" cy="10.5" r=".5" fill="#8b5cf6"/>
            <circle cx="8.5" cy="7.5" r=".5" fill="#8b5cf6"/>
            <circle cx="6.5" cy="12.5" r=".5" fill="#8b5cf6"/>
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.463 17.522 2 12 2z"/>
          </svg>
        );
      case 'docker':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#2496ed">
            <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M23.95 9.878c-.288-.352-1.32-.824-2.848-.31-1.395.467-1.996 1.488-2.316 2.052-.777-.184-1.848-.255-3.08-.255H1.616C.725 11.365 0 12.09 0 12.98c0 3.737 1.542 6.55 4.385 7.973 1.83.916 4.095 1.447 6.643 1.447 7.784 0 12.434-4.877 12.434-10.748 0-.46-.035-.907-.09-1.34.622-.224 1.35-.615 1.765-1.127.352-.435.345-.718.324-.783a.478.478 0 00-.51-.524z"/>
          </svg>
        );
      case 'git':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#f05032">
            <path d="M2.597 10.963l8.44-8.44a2.26 2.26 0 0 1 3.197 0l8.44 8.44a2.26 2.26 0 0 1 0 3.197l-8.44 8.44a2.26 2.26 0 0 1-3.197 0l-8.44-8.44a2.26 2.26 0 0 1 0-3.197zm10.778 5.643v-2.023a2.533 2.533 0 0 0-1.144-.27c-.896 0-1.623.727-1.623 1.623a1.623 1.623 0 0 0 1.623 1.623 1.623 1.623 0 0 0 1.144-.953zm-1.87-4.666v-1.92a1.623 1.623 0 1 0-1.077 0v3.426a2.533 2.533 0 0 0-1.144 2.146c0 1.4 1.134 2.533 2.533 2.533a2.533 2.533 0 0 0 2.533-2.533v-3.652z"/>
          </svg>
        );
      default:
        return <Code2 size={26} color="#6366f1" />;
    }
  };

  return (
    <section id="skills" style={{ padding: '60px 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Header */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '36px'
          }}
        >
          <div>
            <span className="section-tag">
              <Sparkles size={13} style={{ color: '#2d4cc8' }} />
              <span>TOOLS & SKILLS</span>
            </span>
            <h2 className="section-heading" style={{ marginTop: '8px' }}>
              Technologies I Use
            </h2>
          </div>

          {/* Filter Pills (Neumorphic Buttons) */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '4px',
            }}
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as 'all' | 'frontend' | 'backend' | 'tools')}
                  className={`neu-btn ${isActive ? 'is-active' : ''}`}
                  style={{
                    padding: '9px 18px',
                    fontSize: '0.84rem',
                    fontWeight: isActive ? 700 : 600,
                    color: isActive ? '#2d4cc8' : '#44476a',
                  }}
                >
                  <Icon size={14} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid - Neumorphic Tiles */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="neu-card neu-card-interactive skill-card-hover"
              style={{
                padding: '24px 18px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '14px',
                cursor: 'default',
              }}
            >
              {/* Tech Icon Container - Recessed Inset Well */}
              <div
                className="neu-inset skill-icon-wrap"
                style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '0.55rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.25s ease',
                }}
              >
                {renderTechIcon(skill.icon)}
              </div>

              {/* Name & Experience */}
              <div>
                <div
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#31344b',
                    marginBottom: '2px',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {skill.name}
                </div>
                <div style={{ fontSize: '0.74rem', color: '#5e6282', fontWeight: 600 }}>
                  {skill.experience} exp
                </div>
              </div>

              {/* Mini Proficiency Progress Bar (Matches Screenshot 3 Slider Track) */}
              <div style={{ width: '100%', marginTop: '4px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: '#5e6282',
                    marginBottom: '6px',
                  }}
                >
                  <span>Mastery</span>
                  <span style={{ color: '#31344b' }}>{skill.proficiency}%</span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '9999px',
                    backgroundColor: '#e6e7ee',
                    border: '1px solid #d1d9e6',
                    boxShadow: 'inset 2px 2px 4px #b8b9be, inset -2px -2px 4px #ffffff',
                    overflow: 'hidden',
                    padding: '1px',
                  }}
                >
                  <div
                    style={{
                      width: `${skill.proficiency}%`,
                      height: '100%',
                      borderRadius: '9999px',
                      backgroundColor: '#31344b',
                      transition: 'width 0.8s ease-out',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-card-hover:hover .skill-icon-wrap {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
};
