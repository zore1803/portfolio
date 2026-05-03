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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((cat, catIdx) => (
            <div key={cat.title} className="group">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  {cat.emoji}
                </div>
                <h3 className="text-xl font-black font-['Outfit'] tracking-tight" style={{ color: 'var(--c-text)' }}>
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-8">
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--c-text-muted)' }}>
                        {skill.name}
                      </span>
                      <span className="text-xs font-black font-mono" style={{ color: 'var(--c-accent)' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative">
                      {/* Background glow track */}
                      <div className="absolute inset-0 opacity-20 blur-sm" style={{ background: 'var(--c-accent)' }} />
                      
                      {/* Animated fill */}
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${cat.gradient} relative z-10`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transition: `width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                          transitionDelay: `${catIdx * 0.1 + skillIdx * 0.05}s`,
                          boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
                        }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                      </div>
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
