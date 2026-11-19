import React, { useEffect } from 'react';
import { X, ExternalLink, Calendar, User, Building } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(230, 231, 238, 0.78)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
      onClick={onClose}
    >
      <div
        className="neu-panel modal-container"
        style={{
          backgroundColor: '#e6e7ee',
          border: '1px solid #d1d9e6',
          boxShadow: '10px 10px 24px #b8b9be, -10px -10px 24px #ffffff',
          borderRadius: '0.75rem',
          width: '100%',
          maxWidth: '780px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '34px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="neu-btn-icon"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 10,
          }}
          aria-label="Close modal"
        >
          <X size={19} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '20px', paddingRight: '40px' }}>
          <div style={{ display: 'inline-block', fontSize: '0.78rem', fontWeight: 700, color: '#2d4cc8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
            {project.category}
          </div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#31344b', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
            {project.title}
          </h2>
          <p style={{ fontSize: '1rem', color: '#44476a', fontWeight: 500, marginTop: '4px' }}>
            {project.subtitle}
          </p>
        </div>

        {/* Project Image Banner */}
        <div
          className="neu-inset"
          style={{
            width: '100%',
            height: '280px',
            borderRadius: '0.55rem',
            overflow: 'hidden',
            marginBottom: '24px',
            padding: '5px',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.4rem' }}
          />
        </div>

        {/* Quick Meta Row */}
        <div
          className="neu-inset"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '12px',
            padding: '16px 20px',
            marginBottom: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Building size={16} color="#2d4cc8" />
            <div>
              <div style={{ fontSize: '0.7rem', color: '#5e6282', fontWeight: 600 }}>Client</div>
              <div style={{ fontSize: '0.84rem', color: '#31344b', fontWeight: 700 }}>{project.details.client}</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Calendar size={16} color="#2d4cc8" />
            <div>
              <div style={{ fontSize: '0.7rem', color: '#5e6282', fontWeight: 600 }}>Timeline</div>
              <div style={{ fontSize: '0.84rem', color: '#31344b', fontWeight: 700 }}>{project.details.timeline}</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <User size={16} color="#2d4cc8" />
            <div>
              <div style={{ fontSize: '0.7rem', color: '#5e6282', fontWeight: 600 }}>Role</div>
              <div style={{ fontSize: '0.84rem', color: '#31344b', fontWeight: 700 }}>{project.details.role}</div>
            </div>
          </div>
        </div>

        {/* Description & Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '26px' }}>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#31344b', marginBottom: '6px' }}>
              Project Overview
            </h4>
            <p style={{ fontSize: '0.94rem', color: '#44476a', lineHeight: 1.65 }}>
              {project.description}
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#31344b', marginBottom: '6px' }}>
              The Challenge
            </h4>
            <p style={{ fontSize: '0.94rem', color: '#44476a', lineHeight: 1.65 }}>
              {project.details.challenge}
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#31344b', marginBottom: '6px' }}>
              The Solution & Architecture
            </h4>
            <p style={{ fontSize: '0.94rem', color: '#44476a', lineHeight: 1.65 }}>
              {project.details.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#31344b', marginBottom: '10px' }}>
            Technologies & Tools Used:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="neu-tag"
                style={{
                  fontSize: '0.78rem',
                  padding: '5px 14px',
                  color: '#31344b',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', paddingTop: '18px', borderTop: '1px solid #d1d9e6' }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="neu-btn neu-btn-accent"
            style={{
              padding: '12px 24px',
            }}
          >
            <span>Live Demo Preview</span>
            <ExternalLink size={16} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="neu-btn"
            style={{
              padding: '12px 24px',
            }}
          >
            <span>View Source Code</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
