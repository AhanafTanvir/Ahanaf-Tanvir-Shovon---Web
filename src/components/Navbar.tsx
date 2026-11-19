import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  name: string;
  role: string;
}

export const Navbar: React.FC<NavbarProps> = ({ name, role }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'skills', 'work', 'process', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Work' },
    { id: 'process', label: 'Process' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-4 z-50 px-4 md:px-8 mb-6">
      <div
        className="max-w-[1240px] mx-auto neu-panel"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isScrolled ? '10px 22px' : '13px 26px',
          backgroundColor: '#e6e7ee',
          border: '1px solid #d1d9e6',
          borderRadius: '0.75rem',
          boxShadow: isScrolled
            ? '6px 6px 14px #b8b9be, -6px -6px 14px #ffffff'
            : '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff',
          transition: 'all 0.25s ease',
        }}
      >
        {/* Brand / Logo */}
        <div
          onClick={() => scrollTo('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '0.55rem',
              backgroundColor: '#e6e7ee',
              border: '1px solid #d1d9e6',
              color: '#31344b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.15rem',
              boxShadow: 'inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #ffffff',
              fontFamily: 'var(--font-display)',
            }}
          >
            {name.charAt(0)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 700, fontSize: '0.96rem', color: '#31344b', letterSpacing: '-0.01em', lineHeight: 1.15 }}>
              {name}
            </span>
            <span style={{ fontSize: '0.73rem', color: '#5e6282', fontWeight: 600 }}>
              {role}
            </span>
          </div>
        </div>

        {/* Center Nav Links (Inset Neumorphic Track) */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: '#e6e7ee',
            padding: '5px 7px',
            borderRadius: '0.55rem',
            border: '1px solid #d1d9e6',
            boxShadow: 'inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #ffffff',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  backgroundColor: '#e6e7ee',
                  color: isActive ? '#31344b' : '#5e6282',
                  fontWeight: isActive ? 700 : 600,
                  fontSize: '0.83rem',
                  padding: '6px 13px',
                  borderRadius: '0.45rem',
                  border: isActive ? '1px solid #d1d9e6' : '1px solid transparent',
                  cursor: 'pointer',
                  boxShadow: isActive ? '3px 3px 6px #b8b9be, -3px -3px 6px #ffffff' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => scrollTo('contact')}
            className="neu-btn"
            style={{
              padding: '9px 18px',
              fontSize: '0.84rem',
            }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={15} style={{ strokeWidth: 2.2 }} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="neu-btn-icon mobile-toggle-btn"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            marginTop: '10px',
            backgroundColor: '#e6e7ee',
            borderRadius: '0.75rem',
            padding: '14px',
            border: '1px solid #d1d9e6',
            boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
          className="mobile-menu-drawer"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  textAlign: 'left',
                  padding: '10px 14px',
                  borderRadius: '0.55rem',
                  backgroundColor: '#e6e7ee',
                  color: isActive ? '#31344b' : '#44476a',
                  fontWeight: isActive ? 700 : 600,
                  border: isActive ? '1px solid #d1d9e6' : '1px solid transparent',
                  boxShadow: isActive ? 'inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #ffffff' : 'none',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease',
                }}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
          .mobile-menu-drawer {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
