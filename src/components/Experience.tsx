import React from 'react';
import { Briefcase, GraduationCap, ShieldCheck } from 'lucide-react';

const Experience = () => {
  const timeline = [
    {
      role: 'Cybersecurity Trainee',
      company: 'AIIPLTech Pvt Ltd, Kharghar',
      period: 'May 2026 - Present',
      details: [
        'Instructor-led CompTIA Security+ and PenTest+ training across threat landscape, malware analysis, and risk management.',
        'Learning CIA Triad, attack surfaces, security controls, social engineering indicators, and mitigation strategies.',
      ],
      color: 'var(--c-violet)',
    },
    {
      role: 'Cyber Security Intern',
      company: 'Elevate Labs',
      period: 'Jan 2026 - Apr 2026',
      details: [
        'Conducted vulnerability assessments and documented weak credentials, open ports, access control gaps, and remediation steps.',
        'Built Python-based keylogger and vulnerability scanner tools for authorized internal security testing.',
        'Analyzed live network traffic with Wireshark and reviewed firewall/access control configurations.',
      ],
      color: 'var(--c-accent)',
    },
    {
      role: 'Cyber Security Learner',
      company: 'TryHackMe (Virtual)',
      period: 'Nov 2025 - Jan 2026',
      details: [
        'Completed 77+ hours of structured security learning across Cyber Security 101 and CompTIA PenTest+ paths.',
        'Ranked Top 5% globally across 100+ challenge rooms covering networking, Linux, Active Directory, cryptography, and web security.',
      ],
      color: 'var(--c-accent-2)',
    },
  ];

  return (
    <section id="career" className="section-wrap">
      <div className="section-inner">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label mb-4">Experience</p>
            <h2 className="section-heading">
              Training & <span className="gradient-text">Practice</span>
            </h2>
          </div>
          <p className="section-desc lg:justify-self-end">
            A focused timeline of my analyst training, internship work, hands-on labs, and security tool development.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {timeline.map((item, index) => (
            <article
              key={item.role}
              className="glass-panel reveal reveal-up p-5"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: `${item.color}22`, color: item.color }}
                >
                  {index === 0 ? <GraduationCap size={20} /> : index === 1 ? <Briefcase size={20} /> : <ShieldCheck size={20} />}
                </span>
                <span className="tag">{item.period}</span>
              </div>
              <h3 className="font-['Outfit'] text-xl font-black uppercase leading-none text-[var(--c-text)]">{item.role}</h3>
              <p className="mt-2 text-sm font-bold" style={{ color: item.color }}>{item.company}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--c-text-muted)]">
                {item.details.map((detail) => (
                  <li key={detail} className="border-l-2 pl-3" style={{ borderColor: item.color }}>
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
