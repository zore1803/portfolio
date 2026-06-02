import React from 'react';
import { Award, Briefcase, Download, Eye, GraduationCap } from 'lucide-react';

const Resume = () => {
  const handleView = () => {
    window.open('/Rohit_Resume.pdf', '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Rohit_Resume.pdf';
    link.download = 'Rohit_Zore_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const internships = [
    {
      role: 'Cyber Security Intern',
      company: 'Elevate Labs',
      period: 'Jan 2026 - Apr 2026',
      details: [
        'Performed vulnerability checks; built a keylogger and vulnerability scanner.',
        'Hands-on exposure to Wireshark, firewalls, and password strength analysis.',
      ],
      color: 'var(--c-accent)',
    },
    {
      role: 'Cyber Security Learner',
      company: 'TryHackMe (Virtual)',
      period: 'Nov 2025 - Jan 2026',
      details: [
        'Completed Cyber Security 101 (45+ hrs) and CompTIA Pentest+ (32+ hrs).',
        'Covered networking, Linux, and Active Directory fundamentals.',
      ],
      color: 'var(--c-accent-2)',
    },
  ];

  const education = [
    { degree: 'B.E. in AI & Data Science', school: 'Vasantdada Patil College of Engineering, Mumbai', period: '2023 - 2027', score: 'CGPA: 7.27' },
    { degree: 'HSC Science - PCM', school: 'D.G. Ruparel College, Mumbai', period: '2021 - 2023', score: '53.5%' },
    { degree: 'SSC', school: 'Little Star English High School, Mumbai', period: '2020 - 2021', score: '86.4%' },
  ];

  const certifications = [
    'Jr. Penetration Tester',
    'CompTIA Pentest+',
    'Cyber Security 101',
    'Pre Security',
    'AI Agent Architect',
    'Generative AI',
    'ADCAG',
  ];

  return (
    <section id="experience" className="section-wrap">
      <div className="section-inner">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label mb-4">Resume</p>
            <h2 className="section-heading">
              Training & <span className="warm-text">Education</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-self-end">
            <button className="btn-outline" onClick={handleView}>
              <Eye size={16} /> View Resume
            </button>
            <button className="btn-primary" onClick={handleDownload}>
              <Download size={16} /> Download
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-panel reveal reveal-up p-6">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--c-accent)]/15 text-[var(--c-accent)]">
                <Briefcase size={20} />
              </span>
              <h3 className="font-['Outfit'] text-2xl font-black uppercase leading-none text-[var(--c-text)]">Training Log</h3>
            </div>
            <div className="space-y-5">
              {internships.map((intern) => (
                <div key={intern.role} className="relative border-l pl-5" style={{ borderColor: intern.color }}>
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full" style={{ background: intern.color, animation: 'pulse-dot 2s infinite' }} />
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h4 className="font-['Outfit'] text-xl font-black uppercase text-[var(--c-text)]">{intern.role}</h4>
                      <p className="text-sm font-bold" style={{ color: intern.color }}>{intern.company}</p>
                    </div>
                    <span className="tag">{intern.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--c-text-muted)]">
                    {intern.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel reveal reveal-up p-6">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--c-accent-2)]/15 text-[var(--c-accent-2)]">
                <GraduationCap size={20} />
              </span>
              <h3 className="font-['Outfit'] text-2xl font-black uppercase leading-none text-[var(--c-text)]">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.degree} className="rounded-lg border border-[var(--c-border)] bg-white/5 p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h4 className="font-['Outfit'] text-lg font-black uppercase text-[var(--c-text)]">{edu.degree}</h4>
                      <p className="mt-1 text-sm leading-5 text-[var(--c-text-muted)]">{edu.school}</p>
                    </div>
                    <span className="tag">{edu.period}</span>
                  </div>
                  <span className="mt-3 inline-flex rounded bg-[var(--c-accent)]/15 px-3 py-1 text-xs font-black uppercase text-[var(--c-accent)]">
                    {edu.score}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-panel reveal reveal-up mt-6 p-6">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--c-violet)]/15 text-[var(--c-violet)]">
              <Award size={20} />
            </span>
            <h3 className="font-['Outfit'] text-2xl font-black uppercase leading-none text-[var(--c-text)]">Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span key={cert} className="tag">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
