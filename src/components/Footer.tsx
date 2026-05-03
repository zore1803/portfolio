import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--c-surface)', borderTop: '1px solid var(--c-border)' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm font-['Outfit']">RZ</span>
              </div>
              <span className="font-bold text-lg font-['Outfit']" style={{ color: 'var(--c-text)' }}>
                Rohit<span className="text-emerald-500">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--c-text-muted)' }}>
              Cyber security enthusiast & full-stack developer building secure, beautiful applications from Mumbai, India.
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://github.com/zore1803', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/rzore430', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:rzore430@gmail.com', icon: Mail, label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ background: 'var(--c-surface-2)', border: '1px solid var(--c-border)', color: 'var(--c-text-muted)' }}
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--c-text-muted)' }}>
              Navigation
            </h4>
            <nav className="space-y-2">
              {[
                { name: 'About', id: 'about' },
                { name: 'Projects', id: 'projects' },
                { name: 'Skills', id: 'skills' },
                { name: 'Resume', id: 'experience' },
                { name: 'Contact', id: 'contact' },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-sm transition-all duration-300 hover:translate-x-1"
                  style={{ color: 'var(--c-text-muted)' }}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--c-text-muted)' }}>
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div>
                <span className="text-xs uppercase tracking-widest block mb-1" style={{ color: 'var(--c-text-muted)' }}>Email</span>
                <a href="mailto:rzore430@gmail.com" className="text-sm hover:text-emerald-500 transition-colors" style={{ color: 'var(--c-text)' }}>
                  rzore430@gmail.com
                </a>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest block mb-1" style={{ color: 'var(--c-text-muted)' }}>Phone</span>
                <a href="tel:+918879466037" className="text-sm hover:text-emerald-500 transition-colors" style={{ color: 'var(--c-text)' }}>
                  +91 8879466037
                </a>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest block mb-1" style={{ color: 'var(--c-text-muted)' }}>Location</span>
                <span className="text-sm" style={{ color: 'var(--c-text)' }}>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--c-border)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--c-text-muted)' }}>
              <span>© {currentYear} Rohit Zore</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                Made with <Heart size={12} className="text-rose-500 animate-pulse" /> and caffeine
              </span>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
              style={{ background: 'var(--c-surface-2)', border: '1px solid var(--c-border)', color: 'var(--c-text-muted)' }}
              aria-label="Back to top"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
