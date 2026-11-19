import React from 'react';
import { ArrowUp } from 'lucide-react';
import type { PortfolioData } from '../data/portfolioData';

interface FooterProps {
  personal: PortfolioData['personal'];
  socials: PortfolioData['socials'];
}

const currentYear = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ personal, socials }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        );
      case 'LinkedIn':
        return (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case 'Twitter / X':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case 'Dribbble':
        return (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.165 10.74c-.035-.008-2.617-.611-5.305-.28.169.467.324.945.463 1.431 3.255.452 4.792 1.794 4.842 1.839-.015-.99-.214-1.956-.584-2.846l.584-.144zm-7.391-.073c-1.428-2.637-2.887-4.839-2.973-4.968-.908.31-1.742.791-2.464 1.411.082.115 1.517 2.274 2.923 4.857-1.429.39-3.082.721-4.854.98-.109-.239-.214-.482-.315-.729 3.033-1.077 4.077-3.029 4.125-3.12-.998-.679-2.164-1.096-3.42-1.096-3.309 0-6 2.691-6 6 0 .522.072 1.026.195 1.509.049-.009 2.057-.367 4.542-.782.477 1.134.908 2.228 1.282 3.267-3.238.995-6.071 3.251-6.141 3.308.971 1.091 2.247 1.884 3.69 2.253.072-.084 2.131-2.457 5.176-3.649.912 2.378 1.341 4.551 1.378 4.747 1.002-.315 1.916-.838 2.696-1.528-.052-.228-.466-2.28-1.346-4.606 2.502-.451 4.821.111 4.921.136.216-.763.336-1.569.336-2.402 0-1.897-.615-3.655-1.652-5.088-.046-.043-1.413-1.258-4.375-1.782z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer
      style={{
        padding: '32px 0 40px 0',
        borderTop: '1px solid #d1d9e6',
        position: 'relative',
        zIndex: 2,
        backgroundColor: '#e6e7ee',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {/* Brand & Copyright */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.88rem', color: '#44476a' }}>
              © {currentYear} <strong style={{ color: '#31344b' }}>{personal.name}</strong>. All rights reserved.
            </span>
          </div>

          {/* Social Links & Back to top (Neumorphic Icon Buttons) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="neu-btn-icon"
                style={{
                  width: '38px',
                  height: '38px',
                }}
                aria-label={social.name}
              >
                {renderSocialIcon(social.name)}
              </a>
            ))}

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="neu-btn-icon"
              style={{
                width: '38px',
                height: '38px',
                marginLeft: '6px',
                color: '#2d4cc8',
              }}
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
