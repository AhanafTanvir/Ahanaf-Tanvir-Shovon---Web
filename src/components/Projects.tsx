import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onSelectProject }) => {
  return (
    <section id="work" style={{ padding: '60px 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Header */}
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
              <span>FEATURED PROJECTS</span>
            </span>
            <h2 className="section-heading" style={{ marginTop: '8px' }}>
              Selected Work
            </h2>
          </div>

          <button
            onClick={() => onSelectProject(projects[0])}
            className="neu-btn"
            style={{
              padding: '10px 20px',
              fontSize: '0.86rem',
            }}
          >
            <span>View All Projects</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

        {/* 3 Neumorphic Project Cards Grid (Matches Screenshot 5 Shop Card Structure) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '28px',
          }}
          className="projects-grid"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="neu-card neu-card-interactive project-neu-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                overflow: 'hidden',
              }}
            >
              {/* Top Image Header */}
              <div style={{ padding: '16px' }}>
                <div
                  className="neu-inset-sm"
                  style={{
                    width: '100%',
                    height: '220px',
                    borderRadius: '0.45rem',
                    overflow: 'hidden',
                    position: 'relative',
                    padding: '4px',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '0.35rem',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block',
                        transition: 'transform 0.45s ease',
                      }}
                      className="project-img"
                    />
                  </div>
                </div>
              </div>

              {/* Card Body / Footer with border-top border-light */}
              <div
                style={{
                  borderTop: '1px solid #d1d9e6',
                  padding: '20px 22px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  flex: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <h3
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: '#31344b',
                        fontFamily: 'var(--font-display)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {project.title}
                    </h3>
                    <span
                      className="neu-badge"
                      style={{
                        fontSize: '0.72rem',
                        padding: '3px 10px',
                        color: '#18634b',
                        flexShrink: 0,
                      }}
                    >
                      {project.metrics}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.8rem', color: '#5e6282', fontWeight: 600 }}>
                    {project.category}
                  </div>

                  {/* Pill Tags (Matches apple / watch / white tags in Screenshot 5) */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginTop: '2px',
                    }}
                  >
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="neu-tag"
                        style={{
                          fontSize: '0.72rem',
                          padding: '3px 11px',
                          color: '#44476a',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span
                        className="neu-tag"
                        style={{
                          fontSize: '0.72rem',
                          padding: '3px 10px',
                          color: '#5e6282',
                        }}
                      >
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#44476a',
                      lineHeight: 1.55,
                      fontWeight: 400,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      marginTop: '4px',
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Bottom Action Row (Matches Price + Add to cart button in Screenshot 5) */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '6px',
                    paddingTop: '14px',
                    borderTop: '1px solid #d1d9e6',
                  }}
                >
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#44476a' }}>
                    {project.details.timeline}
                  </span>

                  <span
                    className="neu-btn project-action-btn"
                    style={{
                      padding: '8px 15px',
                      fontSize: '0.82rem',
                    }}
                  >
                    <span>Case Study</span>
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-neu-card:hover .project-img {
          transform: scale(1.04);
        }
        .project-neu-card:hover .project-action-btn {
          box-shadow: var(--shadow-inset);
          color: #2d4cc8;
        }
      `}</style>
    </section>
  );
};
