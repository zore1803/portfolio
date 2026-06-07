import React from 'react';
import { Award, GraduationCap, Trophy } from 'lucide-react';

const Credentials = () => {
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
    <section id="credentials" className="section-wrap credentials-section">
      <div className="section-inner">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label mb-4">Credentials</p>
            <h2 className="section-heading">
              Education & <span className="warm-text">Proof</span>
            </h2>
          </div>
          <p className="section-desc lg:justify-self-end">
            Academic background, certifications, and activities separated into quick-scan blocks.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr]">
          <div className="glass-panel reveal reveal-up p-6">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--c-accent-2)]/15 text-[var(--c-accent-2)]">
                <GraduationCap size={20} />
              </span>
              <h3 className="font-['Outfit'] text-xl font-black uppercase leading-none text-[var(--c-text)]">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.degree} className="rounded-lg border border-[var(--c-border)] bg-white/5 p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h4 className="font-['Outfit'] text-base font-black uppercase text-[var(--c-text)]">{edu.degree}</h4>
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

          <div className="grid gap-6">
            <div className="glass-panel reveal reveal-up p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--c-violet)]/15 text-[var(--c-violet)]">
                  <Award size={20} />
                </span>
                <h3 className="font-['Outfit'] text-xl font-black uppercase leading-none text-[var(--c-text)]">Certifications</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span key={cert} className="tag">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel reveal reveal-up p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--c-accent-3)]/15 text-[var(--c-accent-3)]">
                  <Trophy size={20} />
                </span>
                <h3 className="font-['Outfit'] text-xl font-black uppercase leading-none text-[var(--c-text)]">Achievements</h3>
              </div>
              <div className="grid gap-3">
                {achievements.map((item) => (
                  <div key={item} className="rounded-lg border border-[var(--c-border)] bg-white/5 p-4 text-sm font-bold leading-6 text-[var(--c-text-muted)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
