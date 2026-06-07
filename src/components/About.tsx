import React from 'react';
import { Code2, GraduationCap, MapPin, Shield, Sparkles, Trophy } from 'lucide-react';

const About = () => {
  const signals = [
    {
      icon: Shield,
      title: 'Security Instinct',
      desc: 'Vulnerability checks, keylogger and scanner work, Wireshark, firewalls, password analysis.',
      color: 'var(--c-accent)',
    },
    {
      icon: Code2,
      title: 'Builder Hands',
      desc: 'React Native, Supabase, OAuth 2.0, Razorpay, REST APIs, and deployment workflows.',
      color: 'var(--c-accent-2)',
    },
    {
      icon: GraduationCap,
      title: 'Learning Loop',
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

        <div className="about-signal-grid">
          <div className="about-narrative reveal reveal-up">
            <div className="mb-8 flex flex-wrap gap-3">
              {[
                { icon: MapPin, text: 'Mumbai' },
                { icon: Trophy, text: 'Top 5% TryHackMe' },
                { icon: Shield, text: 'Security Builder' },
              ].map((chip) => (
                <span key={chip.text} className="tag">
                  <chip.icon size={13} className="mr-2 text-[var(--c-accent)]" />
                  {chip.text}
                </span>
              ))}
            </div>

            <h3 className="about-statement">
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

            <div className="about-signature">
              <Sparkles size={17} />
              <span>My edge: I think like an attacker, then ship like a product engineer.</span>
            </div>
          </div>

          <div className="about-signal-board reveal reveal-scale">
            <div className="about-orbit" aria-hidden="true">
              <div className="about-orbit-ring" />
              <img src="/lovable-uploads/dca1d829-b131-45a7-8d52-3cf6cd1550d2.png" alt="" />
            </div>

            {signals.map((item, index) => (
              <div
                key={item.title}
                className={`about-signal about-signal-${index + 1}`}
                style={{ '--signal-color': item.color, transitionDelay: `${index * 0.1}s` } as React.CSSProperties}
              >
                <span className="about-signal-icon">
                  <item.icon size={19} />
                </span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="about-pulse-line about-pulse-line-a" />
            <div className="about-pulse-line about-pulse-line-b" />
            <div className="about-pulse-line about-pulse-line-c" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
