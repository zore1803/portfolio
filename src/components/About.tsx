import React from 'react';
import { Code2, GraduationCap, MapPin, Shield, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: 'Security Mindset',
      desc: 'Vulnerability checks, keylogger and scanner work, Wireshark, firewalls, password analysis.',
      color: 'var(--c-accent)',
    },
    {
      icon: Code2,
      title: 'Full-Stack Builder',
      desc: 'React Native, Supabase, OAuth 2.0, Razorpay, REST APIs, and deployment workflows.',
      color: 'var(--c-accent-2)',
    },
    {
      icon: GraduationCap,
      title: 'AI & DS Student',
      desc: 'B.E. at Vasantdada Patil College of Engineering, Mumbai. CGPA: 7.27.',
      color: 'var(--c-violet)',
    },
  ];

  return (
    <section id="about" className="section-wrap">
      <div className="soft-glow right-[-7rem] top-16 h-80 w-80 rounded-full bg-[var(--c-accent)]" />
      <div className="section-inner">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label mb-4">About Me</p>
            <h2 className="section-heading">
              Break It To <span className="warm-text">Secure It</span>
            </h2>
          </div>
          <p className="section-desc">
            I am a cyber security fresher and full-stack developer from Mumbai, focused on making systems that are usable, observable, and harder to misuse.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="glass-panel reveal reveal-up p-6 md:p-8 lg:col-span-7">
            <div className="mb-8 flex flex-wrap gap-3">
              {[
                { icon: MapPin, text: 'Mumbai' },
                { icon: Trophy, text: 'Top 5% TryHackMe' },
                { icon: Shield, text: 'Pen-Test Learner' },
              ].map((chip) => (
                <span key={chip.text} className="tag">
                  <chip.icon size={13} className="mr-2 text-[var(--c-accent)]" />
                  {chip.text}
                </span>
              ))}
            </div>

            <h3 className="font-['Outfit'] text-3xl font-black uppercase leading-tight text-[var(--c-text)] md:text-5xl">
              Security instincts with product-builder hands.
            </h3>
            <div className="mt-7 space-y-5 text-sm leading-7 text-[var(--c-text-muted)] md:text-base">
              <p>
                I work at the intersection of secure systems and practical interfaces. My strongest projects combine authentication, device state, backend data, and user-facing workflows instead of treating security as something added at the end.
              </p>
              <p>
                Ranked <strong className="text-[var(--c-accent)]">Top 5%</strong> on TryHackMe, I have spent 77+ hours across Cyber Security 101 and CompTIA Pentest+ paths while building apps like <strong className="text-[var(--c-accent-2)]">LOQIT</strong>, a BLE-based anti-theft platform.
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-5">
            {highlights.map((item, index) => (
              <div key={item.title} className="glass-panel reveal reveal-up p-5" style={{ transitionDelay: `${index * 0.12}s` }}>
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg" style={{ background: `${item.color}22`, color: item.color }}>
                    <item.icon size={22} />
                  </span>
                  <div>
                    <h4 className="font-['Outfit'] text-xl font-black uppercase leading-none text-[var(--c-text)]">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-[var(--c-text-muted)]">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
