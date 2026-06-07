import React from 'react';
import { Award, Briefcase, Code2, Download, Eye, GraduationCap, ShieldCheck, Trophy } from 'lucide-react';

const Resume = () => {
  const handleView = (file: string) => {
    window.open(file, '_blank');
  };

  const handleDownload = (file: string, downloadName: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resumes = [
    {
      title: 'Cybersecurity Resume',
      label: 'Security Roles',
      file: '/Rohit_Zore_Cybersecurity_Resume.pdf',
      downloadName: 'Rohit_Zore_Cybersecurity_Resume.pdf',
      desc: 'Focused on cyber security internships, pen-testing learning, vulnerability analysis, tools, and labs.',
      icon: ShieldCheck,
      color: 'var(--c-accent)',
      tags: ['SOC', 'Vulnerability Assessment', 'Wireshark', 'Python'],
    },
    {
      title: 'Full-Stack Resume',
      label: 'Developer Roles',
      file: '/Rohit_Zore_FullStack_Resume.pdf',
      downloadName: 'Rohit_Zore_FullStack_Resume.pdf',
      desc: 'Focused on React, React Native, Supabase, authentication, product workflows, and deployment.',
      icon: Code2,
      color: 'var(--c-accent-2)',
      tags: ['React Native', 'Supabase', 'MySQL', 'REST APIs'],
    },
  ];

  const internships = [
    {
      role: 'Cybersecurity Trainee',
      company: 'AIIPLTech Pvt Ltd, Kharghar',
      period: 'May 2026 - Present',
      details: [
        'Pursuing instructor-led CompTIA Security+ and PenTest+ training across threat landscape, malware analysis, and risk management.',
        'Learning CIA Triad, attack surfaces, security controls, social engineering indicators, and mitigation strategies.',
      ],
      color: 'var(--c-violet)',
    },
    {
      role: 'Cyber Security Intern',
      company: 'Elevate Labs',
      period: 'Jan 2026 - Apr 2026',
      details: [
        'Conducted vulnerability assessments and documented weak credentials, open ports, improper access controls, and remediation steps.',
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
        'Completed 77+ hours of structured security learning across Cyber Security 101 and CompTIA Pentest+ paths.',
        'Ranked Top 5% globally across 100+ challenge rooms covering networking, Linux, Active Directory, cryptography, and web security.',
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

  const achievements = [
    'Top 5% globally on TryHackMe out of 3M+ users across 100+ rooms.',
    'Treasurer - Computer Society of India (CSI), College Chapter.',
    'College-level Volleyball Player - University Sports Team.',
    'Languages: English, Marathi, Hindi.',
  ];

  return (
    <section id="experience" className="section-wrap">
      <div className="section-inner">
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label mb-4">Resume</p>
            <h2 className="section-heading">
              Training & <span className="warm-text">Education</span>
            </h2>
          </div>
          <p className="section-desc lg:justify-self-end">
            Choose the resume that matches the role: security-first work or full-stack product development.
          </p>
        </div>

        <div className="mb-6 grid gap-4 lg:grid-cols-2">
          {resumes.map((resume) => (
            <article key={resume.title} className="glass-panel reveal reveal-up p-5 md:p-6">
              <div className="flex items-start gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: `${resume.color}22`, color: resume.color }}
                >
                  <resume.icon size={22} />
                </span>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-black uppercase tracking-widest text-[var(--c-text-muted)]">{resume.label}</span>
                  <h3 className="mt-1 font-['Outfit'] text-2xl font-black uppercase leading-none text-[var(--c-text)]">
                    {resume.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--c-text-muted)]">{resume.desc}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {resume.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button className="btn-outline" onClick={() => handleView(resume.file)}>
                  <Eye size={16} /> View
                </button>
                <button className="btn-primary" onClick={() => handleDownload(resume.file, resume.downloadName)}>
                  <Download size={16} /> Download
                </button>
              </div>
            </article>
          ))}
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

        <div className="glass-panel reveal reveal-up mt-6 p-6">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--c-accent-3)]/15 text-[var(--c-accent-3)]">
              <Trophy size={20} />
            </span>
            <h3 className="font-['Outfit'] text-2xl font-black uppercase leading-none text-[var(--c-text)]">Achievements & Activities</h3>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {achievements.map((item) => (
              <div key={item} className="rounded-lg border border-[var(--c-border)] bg-white/5 p-4 text-sm font-bold leading-6 text-[var(--c-text-muted)]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
