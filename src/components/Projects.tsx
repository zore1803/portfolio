import React, { useState } from 'react';
import { ArrowUpRight, Bluetooth, CalendarDays, Github, Globe, Home, LogIn, Moon, ScanSearch, Shield, Smartphone, Workflow } from 'lucide-react';

const Projects = () => {
  const [selectedId, setSelectedId] = useState(1);

  const projects = [
    {
      id: 1,
      title: 'LOQIT',
      subtitle: 'Full Stack Anti-Theft Platform',
      description:
        'A cross-platform security product with a web app, Android APK, BLE device binding, OAuth 2.0/JWT authentication, RBAC, Supabase PostgreSQL, encrypted APIs, and a Law Enforcement Command Center with GIS-based real-time tracking.',
      tech: ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'REST APIs', 'RBAC'],
      github: 'https://github.com/zore1803',
      live: 'https://loqit-psi.vercel.app/',
      period: 'Oct 2025 - Present',
      icon: Bluetooth,
      featured: true,
      accent: 'var(--c-accent)',
    },
    {
      id: 2,
      title: 'E-Guruji',
      subtitle: 'Full Stack Puja Booking Platform',
      description:
        'A multi-role service booking web app built from scratch with user, priest, and admin roles, JWT authentication, RBAC, Razorpay payment validation, admin management, and normalized MySQL tables for users, priests, services, bookings, and payments.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'JWT', 'Razorpay', 'MySQL'],
      github: 'https://github.com/zore1803/guruji-pooja-seva-portal',
      live: 'https://seva-profile-scribe.vercel.app/',
      period: 'Sep - Oct 2024',
      icon: Workflow,
      accent: 'var(--c-accent-2)',
    },
    {
      id: 3,
      title: 'Security Training',
      subtitle: 'Assessment Tools & Analyst Labs',
      description:
        'Hands-on cybersecurity work across AIIPLTech training and Elevate Labs internship: vulnerability assessment, Python keylogger and scanner development, Wireshark traffic analysis, firewall review, password policy analysis, and structured risk reporting.',
      tech: ['Python', 'Wireshark', 'Risk Reports', 'Firewalls', 'CIA Triad'],
      github: 'https://github.com/zore1803',
      period: 'Jan 2026 - Present',
      icon: ScanSearch,
      accent: 'var(--c-violet)',
    },
    {
      id: 4,
      title: 'Portfolio v2',
      subtitle: 'This Website',
      description:
        'A cinematic portfolio interface with orbital navigation, glass panels, responsive command surfaces, and custom visual language.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Vite'],
      github: 'https://github.com/zore1803/Portfolio',
      period: '2025',
      icon: Globe,
      accent: 'var(--c-accent-3)',
    },
  ];

  const activeProject = projects.find((project) => project.id === selectedId) ?? projects[0];

  const renderProjectPreview = () => {
    if (activeProject.title === 'LOQIT') {
      return (
        <div className="project-preview loqit-preview">
          <div className="preview-nav">
            <strong>LOQIT</strong>
            <span>Features</span>
            <span>How It Works</span>
            <span>Download</span>
            <Moon size={16} />
            <button>Sign In</button>
          </div>
          <div className="loqit-hero">
            <div className="loqit-orb">
              <span>LOQIT</span>
            </div>
            <div>
              <p className="preview-kicker">LOQIT - Next Gen Phone Recovery Protocol</p>
              <h4>Your Device, Always Protected</h4>
              <p>BLE alerts, secure anonymous recovery, and trusted device registration.</p>
              <div className="preview-actions">
                <button>Get Started Free</button>
                <span>See How It Works</span>
              </div>
            </div>
          </div>
          <div className="loqit-status">
            <Smartphone size={18} />
            <div>
              <strong>Web + APK</strong>
              <span>Device recovery workflow active</span>
            </div>
          </div>
        </div>
      );
    }

    if (activeProject.title === 'E-Guruji') {
      return (
        <div className="project-preview eguruji-preview">
          <div className="preview-nav">
            <strong>E-GURUJI</strong>
            <span>Home</span>
            <span>Services</span>
            <span>Live Streams</span>
            <span>Astrology</span>
            <button>
              <LogIn size={14} />
              Login
            </button>
          </div>
          <div className="eguruji-hero">
            <h4>E-GURUJI</h4>
            <p>Connect with experienced Pandits for authentic Pooja services</p>
            <div className="preview-actions">
              <button>Browse Services</button>
              <span>Sign In / Register</span>
            </div>
          </div>
          <div className="eguruji-cards">
            {[
              { icon: Shield, title: 'Expert Pandits', text: 'Verified guidance' },
              { icon: CalendarDays, title: 'Easy Booking', text: 'Flexible dates' },
              { icon: Home, title: 'At Location', text: 'Home or venue' },
            ].map((item) => (
              <div key={item.title}>
                <item.icon size={18} />
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="project-preview cyber-preview">
        <div className="preview-nav">
          <strong>{activeProject.title}</strong>
          <span>Scan</span>
          <span>Report</span>
          <span>Deploy</span>
        </div>
        <div className="cyber-window">
          <div className="mb-4 flex gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--c-accent-2)]" />
            <span className="h-2 w-2 rounded-full bg-[var(--c-accent)]" />
            <span className="h-2 w-2 rounded-full bg-[var(--c-violet)]" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <span className="h-10 rounded bg-white/10" />
            <span className="h-10 rounded bg-[var(--c-accent)]/25" />
            <span className="h-10 rounded bg-white/10" />
            <span className="col-span-2 h-10 rounded bg-[var(--c-accent-2)]/25" />
            <span className="h-10 rounded bg-white/10" />
          </div>
        </div>
        <span className="preview-badge">Feature Highlight</span>
      </div>
    );
  };

  return (
    <section id="projects" className="section-wrap">
      <div className="soft-glow left-[-6rem] top-32 h-72 w-72 rounded-full bg-[var(--c-accent-2)]" />
      <div className="section-inner">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label mb-4">Projects</p>
            <h2 className="section-heading">
              A Curated <span className="gradient-text">Collection</span>
            </h2>
          </div>
          <p className="section-desc lg:justify-self-end">
            Production-grade web and mobile builds shaped around authentication, database ownership, secure payments, device recovery, and practical security analysis.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
          <article
            className="glass-panel project-feature-panel min-h-[520px] p-5 md:p-7"
            style={{ boxShadow: `0 0 48px color-mix(in srgb, ${activeProject.accent} 24%, transparent)` }}
          >
            <div className="mb-6 overflow-hidden rounded-md border border-white/10 bg-[#06111f]">
              {renderProjectPreview()}
            </div>

            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg" style={{ background: `${activeProject.accent}22`, color: activeProject.accent }}>
                    <activeProject.icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-['Outfit'] text-4xl font-black uppercase leading-none text-[var(--c-text)]">
                      {activeProject.title}
                    </h3>
                    <p className="text-sm text-[var(--c-text-muted)]">{activeProject.subtitle}</p>
                  </div>
                </div>
                <p className="max-w-3xl text-sm leading-7 text-[var(--c-text-muted)]">{activeProject.description}</p>
              </div>
              <span className="tag">{activeProject.period}</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {activeProject.tech.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {activeProject.github && (
                <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <Github size={16} /> Code
                </a>
              )}
              {activeProject.live && (
                <a href={activeProject.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <ArrowUpRight size={16} /> Live Demo
                </a>
              )}
            </div>
          </article>

          <div className="space-y-4">
            {projects.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                className={`glass-panel project-selector w-full p-4 text-left transition ${
                  activeProject.id === project.id ? 'border-[var(--c-accent-2)]' : ''
                }`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg" style={{ background: `${project.accent}22`, color: project.accent }}>
                    <project.icon size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="truncate font-['Outfit'] text-xl font-black uppercase leading-none text-[var(--c-text)]">{project.title}</h4>
                      {project.featured && (
                        <span className="rounded bg-[var(--c-accent-2)]/20 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-[var(--c-accent-3)]">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-xs text-[var(--c-text-muted)]">{project.subtitle}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[var(--c-text-muted)]">
                      <Shield size={13} style={{ color: project.accent }} />
                      {project.tech.slice(0, 3).join(' / ')}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
