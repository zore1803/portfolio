import React from 'react';
import { BriefcaseBusiness, Code2, GraduationCap, Languages, MapPin, Shield, Trophy, Users } from 'lucide-react';

const About = () => {
  const focusAreas = [
    {
      icon: Shield,
      title: 'Cybersecurity Analyst Track',
      desc: 'SOC operations, vulnerability assessment, threat analysis, network security, and structured risk reporting.',
      points: ['AIIPLTech Security+ / PenTest+ training', 'Elevate Labs internship', 'Wireshark and Python security scripting'],
      color: 'var(--c-accent)',
    },
    {
      icon: Code2,
      title: 'Full Stack Product Track',
      desc: 'React Native, Expo, Supabase, REST APIs, MySQL, OAuth 2.0, JWT, RBAC, and payment workflows.',
      points: ['LOQIT web app + Android APK', 'E-Guruji booking platform', 'End-to-end product ownership'],
      color: 'var(--c-accent-2)',
    },
  ];

  const quickFacts = [
    { icon: MapPin, label: 'Mumbai, Maharashtra' },
    { icon: Trophy, label: 'Top 5% globally on TryHackMe' },
    { icon: BriefcaseBusiness, label: '4-month Elevate Labs internship' },
    { icon: GraduationCap, label: 'B.E. AI & Data Science, 2027' },
    { icon: Users, label: 'CSI Treasurer, college chapter' },
    { icon: Languages, label: 'English, Marathi, Hindi' },
  ];

  return (
    <section id="about" className="section-wrap">
      <div className="soft-glow right-[-7rem] top-16 h-80 w-80 rounded-full bg-[var(--c-accent)]" />
      <div className="section-inner">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label mb-4">About Me</p>
            <h2 className="section-heading">
              Secure Systems, <span className="warm-text">Usable Products</span>
            </h2>
          </div>
          <p className="section-desc">
            Aspiring Cybersecurity Analyst and Full Stack Developer focused on secure, scalable, user-centric web and mobile applications.
          </p>
        </div>

        <div className="about-profile-grid">
          <article className="about-profile-panel reveal reveal-up">
            <div className="about-profile-header">
              <div className="avatar-ring about-profile-avatar">
                <img src="/lovable-uploads/dca1d829-b131-45a7-8d52-3cf6cd1550d2.png" alt="Rohit Zore" />
              </div>
              <div>
                <p className="section-label mb-3">Profile Snapshot</p>
                <h3 className="about-profile-title">Rohit Ramesh Zore</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--c-text-muted)] md:text-base">
                  B.E. AI & Data Science student with 2 production-grade applications, a 4-month cybersecurity internship, and active instructor-led Security+ and PenTest+ training.
                </p>
              </div>
            </div>

            <div className="about-facts">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="about-fact">
                  <fact.icon size={16} />
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>
          </article>

          <div className="about-focus-list">
            {focusAreas.map((area, index) => (
              <article
                key={area.title}
                className="about-focus-item reveal reveal-up"
                style={{ '--focus-color': area.color, transitionDelay: `${index * 0.08}s` } as React.CSSProperties}
              >
                <div className="flex gap-4">
                  <span className="about-focus-icon">
                    <area.icon size={22} />
                  </span>
                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.desc}</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-2">
                  {area.points.map((point) => (
                    <span key={point} className="about-focus-point">
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
