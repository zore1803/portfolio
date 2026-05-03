import React from 'react';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1WQNUKjXspXlqr3drmmczQgc4JRquVuTh/view?usp=sharing', '_blank');
  };

  const internships = [
    {
      role: 'Cyber Security Intern',
      company: 'Elevate Labs',
      period: 'Jan 2026 – Apr 2026',
      details: [
        'Performed vulnerability checks; built a keylogger and vulnerability scanner.',
        'Hands-on exposure to Wireshark, firewalls, and password strength analysis.',
      ],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      role: 'Cyber Security Learner',
      company: 'TryHackMe (Virtual)',
      period: 'Nov 2025 – Jan 2026',
      details: [
        'Completed Cyber Security 101 (45+ hrs) & CompTIA Pentest+ (32+ hrs).',
        'Covered networking, Linux, and Active Directory fundamentals.',
      ],
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  const certifications = [
    { name: 'Jr. Penetration Tester', provider: 'TryHackMe', emoji: '🎯' },
    { name: 'CompTIA Pentest+', provider: 'TryHackMe', emoji: '🔓' },
    { name: 'Cyber Security 101', provider: 'TryHackMe', emoji: '🛡️' },
    { name: 'Pre Security', provider: 'TryHackMe', emoji: '🔒' },
    { name: 'AI Agent Architect', provider: 'IBM', emoji: '🤖' },
    { name: 'Generative AI', provider: 'GDSC', emoji: '✨' },
    { name: 'ADCAG', provider: 'Shree Institute', emoji: '📜' },
  ];

  const education = [
    {
      degree: 'B.E. in AI & Data Science',
      school: 'Vasantdada Patil College of Engineering, Mumbai',
      period: '2023 – 2027',
      score: 'CGPA: 7.27',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      degree: 'HSC (Science – PCM)',
      school: 'D.G. Ruparel College, Mumbai',
      period: '2021 – 2023',
      score: '53.5%',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      degree: 'SSC',
      school: 'Little Star English High School, Mumbai',
      period: '2020 – 2021',
      score: '86.4%',
      gradient: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <section id="experience" className="relative py-24 overflow-hidden px-6">
      <div className="blob w-[350px] h-[350px] top-[5%] right-[-5%]" style={{ background: 'var(--c-accent)', animationDelay: '1s' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="section-label">Resume</p>
        <h2 className="section-heading">
          Experience & <span className="gradient-text">Education</span>
        </h2>
        <div className="flex justify-center mb-12">
          <button className="btn-primary" onClick={handleDownload}>
            <Download size={16} />
            Download Resume
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Internships */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-md">
                <Briefcase size={18} className="text-white" />
              </div>
              <h3 className="text-xl font-bold font-['Outfit']" style={{ color: 'var(--c-text)' }}>
                Internships & Training
              </h3>
            </div>

            <div className="space-y-4">
              {internships.map((intern, i) => (
                <div key={i} className="card p-6 overflow-hidden relative">
                  {/* Left accent bar */}
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${intern.gradient} rounded-full`} />

                  <div className="pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h4 className="font-bold font-['Outfit']" style={{ color: 'var(--c-text)' }}>{intern.role}</h4>
                      <span className="text-xs px-3 py-1 rounded-full" style={{
                        background: 'var(--c-surface-2)',
                        color: 'var(--c-text-muted)',
                        border: '1px solid var(--c-border)',
                      }}>
                        {intern.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium mb-3" style={{ color: 'var(--c-accent)' }}>{intern.company}</p>
                    <ul className="space-y-2">
                      {intern.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--c-text-muted)' }}>
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--c-accent)' }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-md">
                <GraduationCap size={18} className="text-white" />
              </div>
              <h3 className="text-xl font-bold font-['Outfit']" style={{ color: 'var(--c-text)' }}>Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="card p-6 overflow-hidden relative">
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${edu.gradient} rounded-full`} />
                  <div className="pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <h4 className="font-bold font-['Outfit'] text-sm" style={{ color: 'var(--c-text)' }}>
                        {edu.degree}
                      </h4>
                      <span className="text-xs px-3 py-1 rounded-full" style={{
                        background: 'var(--c-surface-2)',
                        color: 'var(--c-text-muted)',
                        border: '1px solid var(--c-border)',
                      }}>
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs mb-2" style={{ color: 'var(--c-text-muted)' }}>{edu.school}</p>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${edu.gradient} text-white`}>
                      {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-md">
              <Award size={18} className="text-white" />
            </div>
            <h3 className="text-xl font-bold font-['Outfit']" style={{ color: 'var(--c-text)' }}>Certifications</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="card p-4 text-center group hover:scale-[1.02] cursor-default"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{cert.emoji}</div>
                <div className="text-sm font-semibold" style={{ color: 'var(--c-text)' }}>{cert.name}</div>
                <div className="text-xs mt-1" style={{ color: 'var(--c-text-muted)' }}>{cert.provider}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
