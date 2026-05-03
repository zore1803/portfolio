import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated background blobs */}
      <div className="blob w-[500px] h-[500px] top-[-10%] left-[-5%]" style={{ background: 'var(--c-accent)' }} />
      <div className="blob w-[400px] h-[400px] bottom-[-5%] right-[-5%]" style={{ background: 'var(--c-accent-2)', animationDelay: '2s' }} />
      <div className="blob w-[300px] h-[300px] top-[30%] right-[20%]" style={{ background: 'var(--c-accent-3)', animationDelay: '4s' }} />

      {/* Decorative grid dots */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, var(--c-text) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Content */}
      <div
        className="relative z-10 text-center max-w-4xl mx-auto pt-24 md:pt-32"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full mb-10 transition-all duration-500 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, var(--c-surface), var(--c-surface-2))',
            border: '1px solid var(--c-border)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }}
        >
          <div className="relative">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-75" />
          </div>
          <span className="text-xs font-bold uppercase tracking-[2px]" style={{ color: 'var(--c-accent)' }}>
            Status: Ready for Breach
          </span>
          <Sparkles size={14} className="text-emerald-500" />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 font-['Outfit'] leading-[1.05] reveal reveal-up">
          <span style={{ color: 'var(--c-text)' }}>Hey, I'm </span>
          <span className="gradient-text">Rohit</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-medium mb-4 reveal reveal-up stagger-1" style={{ color: 'var(--c-text-muted)' }}>
          Cyber Security Enthusiast & Full-Stack Developer
        </p>

        {/* Description */}
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed reveal reveal-up stagger-2" style={{ color: 'var(--c-text-muted)' }}>
          I build <span className="font-semibold" style={{ color: 'var(--c-accent)' }}>secure systems</span>, break into them (legally),
          and craft beautiful web experiences. Ranked{' '}
          <span className="font-bold" style={{ color: 'var(--c-accent-2)' }}>Top 5%</span> on TryHackMe.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 reveal reveal-up stagger-3">
          <button className="btn-primary hover-lift" onClick={() => scrollToSection('projects')}>
            <Sparkles size={16} />
            View My Work
          </button>
          <button className="btn-outline hover-lift" onClick={() => scrollToSection('contact')}>
            Let's Connect
          </button>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-3 mb-16 reveal reveal-up stagger-4">
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
              className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-500/50"
              style={{
                background: 'var(--c-surface)',
                border: '1px solid var(--c-border)',
                color: 'var(--c-text-muted)',
              }}
              aria-label={s.label}
            >
              <s.icon size={20} />
            </a>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          {[
            { value: 'Top 5%', label: 'TryHackMe', emoji: '🏆' },
            { value: '6+', label: 'Certifications', emoji: '📜' },
            { value: '4+', label: 'Projects', emoji: '🚀' },
            { value: '77+', label: 'Hours of Labs', emoji: '🔬' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="card p-4 text-center"
            >
              <div className="text-xl mb-1">{stat.emoji}</div>
              <div className="text-xl font-bold font-['Outfit']" style={{ color: 'var(--c-text)' }}>{stat.value}</div>
              <div className="text-xs font-medium mt-0.5" style={{ color: 'var(--c-text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce transition-colors duration-300"
          style={{ color: 'var(--c-text-muted)' }}
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
