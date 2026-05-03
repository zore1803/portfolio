import React, { useState } from 'react';
import { ExternalLink, Github, Lock, Globe, Shield, Search, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'LOQIT',
      subtitle: 'Anti-Theft Hardware Security Platform',
      description:
        'A BLE-powered security ecosystem creating a hardware-identity bond between handsets and devices. Secure OAuth 2.0 & JWT authentication, device-level integrity, and a Law Enforcement Command Center with GIS-based recovery.',
      tech: ['React Native', 'Expo', 'Supabase', 'BLE 2.0', 'OAuth', 'JWT'],
      github: 'https://github.com/zore1803',
      live: 'https://loqit-psi.vercel.app/',
      period: 'Oct 2025 – Present',
      gradient: 'from-emerald-500 to-teal-500',
      icon: Lock,
      featured: true,
    },
    {
      id: 2,
      title: 'E-Guruji',
      subtitle: 'Pandit-Customer Booking Platform',
      description:
        'Web app for booking pujas and connecting users with priests. JWT authentication, Razorpay payment gateway, and admin panel for managing users, services, and bookings.',
      tech: ['JavaScript', 'HTML', 'JWT', 'Razorpay', 'MySQL'],
      github: 'https://github.com/zore1803/guruji-pooja-seva-portal',
      live: 'https://seva-profile-scribe.vercel.app/',
      period: 'Sep – Oct 2024',
      gradient: 'from-violet-500 to-purple-500',
      icon: Globe,
    },
    {
      id: 3,
      title: 'Security Tools',
      subtitle: 'Keylogger & Vulnerability Scanner',
      description:
        'Built a keylogger and vulnerability scanner under mentor guidance at Elevate Labs. Hands-on Wireshark, firewalls, and password strength analysis.',
      tech: ['Python', 'Wireshark', 'Nmap', 'Firewalls'],
      github: 'https://github.com/zore1803',
      period: 'Jan – Apr 2026',
      gradient: 'from-rose-500 to-pink-500',
      icon: Search,
    },
    {
      id: 4,
      title: 'Portfolio v2',
      subtitle: 'This Website',
      description:
        'A creative, modern portfolio with animated blobs, gradient effects, dark/light mode, and smooth interactions. Built to stand out.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Vite'],
      github: 'https://github.com/zore1803/Portfolio',
      period: '2025',
      gradient: 'from-amber-500 to-orange-500',
      icon: Shield,
    },
  ];

  return (
    <section id="projects" className="relative py-24 overflow-hidden px-6">
      <div className="blob w-[350px] h-[350px] bottom-[5%] left-[-8%]" style={{ background: 'var(--c-accent-2)', animationDelay: '3s' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="section-label">Projects</p>
        <h2 className="section-heading">
          Things I've <span className="gradient-text">Built</span>
        </h2>
        <p className="section-desc">
          From anti-theft security platforms to payment integrations — here's what I've been working on.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`card overflow-hidden group reveal reveal-up ${project.featured ? 'md:col-span-2' : ''}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient} transition-all duration-500 ${hoveredId === project.id ? 'opacity-100' : 'opacity-40'}`} />

              <div className={`p-6 md:p-8 ${project.featured ? 'md:flex md:gap-8 md:items-start' : ''}`}>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0 shadow-lg mb-5 md:mb-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <project.icon size={24} className="text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold font-['Outfit']" style={{ color: 'var(--c-text)' }}>
                        {project.title}
                        {project.featured && (
                          <span className="ml-2 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500">
                            Featured
                          </span>
                        )}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--c-text-muted)' }}>{project.subtitle}</p>
                    </div>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap" style={{
                      background: 'var(--c-surface-2)',
                      color: 'var(--c-text-muted)',
                      border: '1px solid var(--c-border)',
                    }}>
                      {project.period}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--c-text-muted)' }}>
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          background: 'var(--c-surface-2)',
                          border: '1px solid var(--c-border)',
                          color: 'var(--c-text-muted)',
                        }}
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 hover:bg-emerald-500/20"
                      >
                        <ArrowUpRight size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
