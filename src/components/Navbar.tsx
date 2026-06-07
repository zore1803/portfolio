import React, { useEffect, useState } from 'react';
import { BriefcaseBusiness, FileText, Home, Mail, Menu, Moon, Shield, Sun, User, X, Zap } from 'lucide-react';
import { useTheme } from '@/hooks/useThemeContext';

const navItems = [
  { label: 'Home', id: 'hero', icon: Home },
  { label: 'About', id: 'about', icon: User },
  { label: 'Projects', id: 'projects', icon: BriefcaseBusiness },
  { label: 'Skills', id: 'skills', icon: Zap },
  { label: 'Experience', id: 'career', icon: BriefcaseBusiness },
  { label: 'Resume', id: 'resume', icon: FileText },
  { label: 'Contact', id: 'contact', icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      for (const section of [...navItems].reverse()) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= 170) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
        <div className="nav-topbar mx-auto flex max-w-7xl items-center justify-between">
          <button onClick={() => scrollToSection('hero')} className="group flex items-center gap-3">
            <span className="theme-icon-button">
              <Shield size={20} className="text-[var(--c-accent)]" />
            </span>
            <span className="hidden text-left sm:block">
              <span className="block font-['Outfit'] text-sm font-black uppercase tracking-wide text-[var(--c-text)]">
                Rohit Zore
              </span>
              <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--c-text-muted)]">
                Cyber Security // Full Stack
              </span>
            </span>
          </button>

          <div className="mobile-nav">
            <div className="flex items-center gap-2">
              <button
                className="theme-icon-button h-10 w-10"
                onClick={() => setIsOpen((value) => !value)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="mobile-nav mx-auto mt-3 max-w-7xl rounded-lg border border-[var(--c-border)] bg-[var(--c-surface-solid)]/95 p-2 shadow-2xl backdrop-blur-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm font-black uppercase ${
                  activeSection === item.id ? 'bg-[var(--c-accent-2)] text-[#111827]' : 'text-[var(--c-text-muted)]'
                }`}
              >
                <item.icon size={16} />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <aside className="nav-orbit" aria-label="Section navigation">
        <div className="nav-orbit-panel">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-orbit-button ${activeSection === item.id ? 'active' : ''}`}
            >
              <span className="nav-orbit-dot" />
              <item.icon size={16} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </aside>

      <button
        onClick={toggleTheme}
        className="theme-floating-toggle"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </>
  );
};

export default Navbar;
