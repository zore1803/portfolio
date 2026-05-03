import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      title: 'Security & Networks',
      emoji: '🛡️',
      gradient: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'Networking Fundamentals', level: 85 },
        { name: 'Linux & Windows Security', level: 80 },
        { name: 'Active Directory', level: 75 },
        { name: 'Wireshark / Firewalls', level: 78 },
        { name: 'Password Security / JWT', level: 82 },
      ],
    },
    {
      title: 'Languages & Frameworks',
      emoji: '⚡',
      gradient: 'from-violet-500 to-purple-500',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'JavaScript / HTML / CSS', level: 88 },
        { name: 'React Native (Expo)', level: 78 },
        { name: 'Java (Basics)', level: 60 },
        { name: 'Supabase / REST APIs', level: 80 },
      ],
    },
    {
      title: 'Tools & DevOps',
      emoji: '🔧',
      gradient: 'from-rose-500 to-pink-500',
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'MySQL', level: 75 },
        { name: 'OAuth 2.0 / BLE', level: 76 },
        { name: 'Vercel Deployment', level: 80 },
        { name: 'Nmap / Pen Testing', level: 70 },
      ],
    },
  ];

  const softSkills = [
    '🧩 Problem-Solving',
    '🔄 Adaptability',
    '⏰ Time Management',
    '💬 Communication',
    '🤝 Team Collaboration',
  ];

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 overflow-hidden px-6">
      <div className="blob w-[400px] h-[400px] top-[20%] left-[-8%]" style={{ background: 'var(--c-accent-3)', animationDelay: '2s' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="section-label">Skills</p>
        <h2 className="section-heading">
          My <span className="gradient-text">Arsenal</span>
        </h2>
        <p className="section-desc">
          Technologies and tools I use to build and break things.
        </p>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {categories.map((cat, catIdx) => (
            <div key={cat.title} className="card p-6">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-lg shadow-md`}>
                  {cat.emoji}
                </div>
                <h3 className="font-bold font-['Outfit']" style={{ color: 'var(--c-text)' }}>
                  {cat.title}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm" style={{ color: 'var(--c-text-muted)' }}>{skill.name}</span>
                      <span className="text-xs font-bold" style={{ color: 'var(--c-accent)' }}>{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className={`skill-bar-fill bg-gradient-to-r ${cat.gradient}`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${catIdx * 0.2 + skillIdx * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div className="card p-6 text-center">
          <h3 className="font-bold font-['Outfit'] mb-4 text-lg" style={{ color: 'var(--c-text)' }}>
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-default"
                style={{
                  background: 'var(--c-surface-2)',
                  border: '1px solid var(--c-border)',
                  color: 'var(--c-text-muted)',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
