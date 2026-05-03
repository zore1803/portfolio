import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Resume', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--c-surface)]/80 backdrop-blur-xl border-b shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{
        borderColor: scrolled ? 'var(--c-border)' : 'transparent',
        backgroundColor: scrolled ? 'var(--c-surface)' : 'transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300">
              <span className="text-white font-bold text-sm font-['Outfit']">RZ</span>
            </div>
            <span className="font-bold text-lg font-['Outfit'] hidden sm:block" style={{ color: 'var(--c-text)' }}>
              Rohit<span className="text-emerald-500">.</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 relative">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-5 py-2 text-sm font-medium transition-all duration-300 group"
                style={{
                  color: activeSection === item.id ? 'var(--c-accent)' : 'var(--c-text-muted)',
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-500 rounded-full"
                    style={{
                      boxShadow: '0 0 10px var(--c-accent)',
                      animation: 'fadeIn 0.3s ease-out',
                    }}
                  />
                )}
                <span className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 rounded-xl transition-colors duration-300" />
              </button>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              style={{
                background: 'var(--c-surface-2)',
                color: 'var(--c-text-muted)',
                border: '1px solid var(--c-border)',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'var(--c-surface-2)', color: 'var(--c-text-muted)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'var(--c-surface-2)', color: 'var(--c-text-muted)' }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="md:hidden absolute left-0 right-0 top-16 backdrop-blur-xl p-4 border-b"
            style={{
              background: 'var(--c-surface)',
              borderColor: 'var(--c-border)',
            }}
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300"
                  style={{
                    color: activeSection === item.id ? 'var(--c-accent)' : 'var(--c-text-muted)',
                    background: activeSection === item.id ? 'var(--c-glow)' : 'transparent',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
