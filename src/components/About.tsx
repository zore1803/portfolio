import React from 'react';
import { Shield, Code2, GraduationCap, MapPin, Trophy, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: 'Security Mindset',
      desc: 'Vulnerability checks, keyloggers, and pen-testing under mentor guidance at Elevate Labs.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Code2,
      title: 'Full-Stack Builder',
      desc: 'React Native, Supabase, OAuth 2.0, Razorpay — end-to-end application development.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: GraduationCap,
      title: 'B.E. in AI & DS',
      desc: 'Vasantdada Patil College of Engineering, Mumbai — CGPA: 7.27',
      gradient: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden px-6">
      {/* Decorative blob */}
      <div className="blob w-[400px] h-[400px] top-[10%] right-[-10%]" style={{ background: 'var(--c-accent)', animationDelay: '1s' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="section-label">About Me</p>
        <h2 className="section-heading">
          Passionate about <span className="gradient-text">security</span> & code
        </h2>
        <p className="section-desc">
          I'm a cyber security fresher with a strong foundation in networking, system security, and full-stack development, based in Mumbai.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — Bio card */}
          <div className="card p-8 space-y-5">
            <p className="leading-relaxed" style={{ color: 'var(--c-text-muted)' }}>
              Completed <strong style={{ color: 'var(--c-accent)' }}>Pre Security</strong> &{' '}
              <strong style={{ color: 'var(--c-accent)' }}>Cyber Security 101</strong> on TryHackMe,
              ranked <strong style={{ color: 'var(--c-accent-2)' }}>top 5%</strong> on the platform.
              Keen interest in offensive and defensive security fundamentals.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--c-text-muted)' }}>
              When not hacking or coding, you'll find me on the{' '}
              <strong style={{ color: 'var(--c-accent)' }}>volleyball court</strong> playing for
              my college team, serving as <strong style={{ color: 'var(--c-accent-2)' }}>Treasurer at CSI</strong>,
              or contributing to student council activities.
            </p>

            {/* Quick info chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: MapPin, text: 'Mumbai, India' },
                { icon: GraduationCap, text: 'B.E. AI & DS' },
                { icon: Trophy, text: 'Top 5% THM' },
                { icon: Heart, text: 'Volleyball' },
              ].map((chip) => (
                <div
                  key={chip.text}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm"
                  style={{
                    background: 'var(--c-surface-2)',
                    color: 'var(--c-text-muted)',
                    border: '1px solid var(--c-border)',
                  }}
                >
                  <chip.icon size={14} style={{ color: 'var(--c-accent)' }} />
                  {chip.text}
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="pt-2">
              <p className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: 'var(--c-text-muted)' }}>
                Languages
              </p>
              <div className="flex gap-2">
                {['English', 'Marathi', 'Hindi'].map((lang) => (
                  <span key={lang} className="tag">{lang}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Highlight cards */}
          <div className="space-y-4">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="card p-6 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${h.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <h.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 font-['Outfit'] text-lg" style={{ color: 'var(--c-text)' }}>
                      {h.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--c-text-muted)' }}>
                      {h.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Fun decorative card */}
            <div
              className="card p-6 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(16,185,129,0.05), rgba(139,92,246,0.05))',
              }}
            >
              <p className="text-4xl mb-2">🔐</p>
              <p className="font-semibold font-['Outfit']" style={{ color: 'var(--c-text)' }}>
                "Break it to secure it."
              </p>
              <p className="text-sm mt-1" style={{ color: 'var(--c-text-muted)' }}>
                — My approach to cybersecurity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
