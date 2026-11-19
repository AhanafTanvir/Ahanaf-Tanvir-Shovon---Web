import React from 'react';

interface LiquidGlassButtonProps {
  text?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  width?: string;
  height?: string;
  icon?: React.ReactNode;
}

export const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({
  text = 'Get started',
  onClick,
  href,
  className = '',
  size = 'lg',
  width,
  height,
  icon,
}) => {
  const dimensions = {
    sm: { minW: '160px', h: '44px', fontSize: '0.88rem', iconSize: '26px', svgSize: '11px', pad: '0 10px 0 18px' },
    md: { minW: '195px', h: '52px', fontSize: '0.95rem', iconSize: '32px', svgSize: '13px', pad: '0 10px 0 22px' },
    lg: { minW: '220px', h: '56px', fontSize: '1rem', iconSize: '34px', svgSize: '14px', pad: '0 12px 0 24px' },
  }[size];

  const content = (
    <div
      className={`neu-btn neu-cta-btn ${className}`}
      style={{
        minWidth: width || dimensions.minW,
        height: height || dimensions.h,
        padding: dimensions.pad,
        justifyContent: 'space-between',
        gap: '14px',
        fontSize: dimensions.fontSize,
        fontWeight: 700,
        color: '#31344b',
        borderRadius: '0.55rem',
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <span>{text}</span>
      <div
        className="neu-cta-icon"
        style={{
          width: dimensions.iconSize,
          height: dimensions.iconSize,
          borderRadius: '0.45rem',
          backgroundColor: '#e6e7ee',
          border: '1px solid #d1d9e6',
          boxShadow: 'inset 2px 2px 4px #b8b9be, inset -2px -2px 4px #ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#31344b',
          transition: 'all 0.2s ease',
        }}
      >
        {icon || (
          <svg
            width={dimensions.svgSize}
            height={dimensions.svgSize}
            viewBox="0 0 1024 1024"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M779.180132 473.232045 322.354755 16.406668c-21.413706-21.413706-56.121182-21.413706-77.534887 0-21.413706 21.413706-21.413706 56.122205 0 77.534887l418.057421 418.057421L244.819868 930.057421c-21.413706 21.413706-21.413706 56.122205 0 77.534887 10.706853 10.706853 24.759917 16.059767 38.767955 16.059767s28.061103-5.353938 38.767955-16.059767L779.180132 550.767955C800.593837 529.35425 800.593837 494.64575 779.180132 473.232045z" />
          </svg>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        style={{ textDecoration: 'none', display: 'inline-block' }}
        onClick={(e) => {
          if (href.startsWith('#')) {
            e.preventDefault();
            const el = document.getElementById(href.replace('#', ''));
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
          onClick?.();
        }}
      >
        {content}
      </a>
    );
  }

  return content;
};
