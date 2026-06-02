import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--c-border)] bg-black/20 px-6 py-10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--c-border)] bg-white/10 text-[var(--c-accent)]">
            <Shield size={20} />
          </span>
          <div>
            <p className="font-['Outfit'] text-lg font-black uppercase leading-none text-[var(--c-text)]">Rohit Zore</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[var(--c-text-muted)]">
              Secure apps // Cyber security // Mumbai
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: 'https://github.com/zore1803', icon: Github, label: 'GitHub' },
            { href: 'https://linkedin.com/in/rzore430', icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:rzore430@gmail.com', icon: Mail, label: 'Email' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--c-border)] bg-white/10 text-[var(--c-text-muted)] transition hover:-translate-y-1 hover:text-[var(--c-accent)]"
              aria-label={social.label}
            >
              <social.icon size={17} />
            </a>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--c-border)] bg-white/10 text-[var(--c-text-muted)] transition hover:-translate-y-1 hover:text-[var(--c-accent)]"
            aria-label="Back to top"
          >
            <ArrowUp size={17} />
          </button>
        </div>

        <p className="text-xs font-bold uppercase tracking-widest text-[var(--c-text-muted)] md:text-right">
          © {currentYear} Rohit Zore
        </p>
      </div>
    </footer>
  );
};

export default Footer;
