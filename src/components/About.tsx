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

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Bio Card */}
          <div className="lg:col-span-7 card p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            
            <h3 className="text-2xl font-bold mb-6 font-['Outfit'] flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Code2 size={18} />
              </span>
              The Human Behind the Code
            </h3>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--c-text-muted)' }}>
                I'm a <span className="font-bold text-white">Security Researcher</span> and <span className="font-bold text-white">Full-Stack Developer</span> based in Mumbai. I specialize in bridging the gap between high-performance code and uncompromising security.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--c-text-muted)' }}>
                Ranked <strong className="text-emerald-500">Top 5%</strong> on TryHackMe, I've spent hundreds of hours in virtual labs perfecting my offensive and defensive security skills. From developing the <strong className="text-violet-500">LOQIT</strong> anti-theft platform to securing student networks, I thrive on complex technical challenges.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { icon: MapPin, text: 'Mumbai' },
                { icon: Trophy, text: 'Top 5% THM' },
                { icon: Shield, text: 'Pen-Tester' },
              ].map((chip) => (
                <span key={chip.text} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors duration-300">
                  <chip.icon size={12} className="text-emerald-500" />
                  {chip.text}
                </span>
              ))}
            </div>
          </div>

          {/* Side Column - Bento Style */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {/* Highlight 1 */}
            <div className="card p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border-emerald-500/20 group hover:border-emerald-500/40 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:rotate-6 transition-transform">
                  <Shield size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold font-['Outfit']">Offensive Security</h4>
                  <p className="text-xs mt-1" style={{ color: 'var(--c-text-muted)' }}>Vulnerability Research & Exploitation</p>
                </div>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="card p-6 bg-gradient-to-br from-violet-500/10 to-transparent border-violet-500/20 group hover:border-violet-500/40 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-500 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:-rotate-6 transition-transform">
                  <Code2 size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold font-['Outfit']">Full-Stack Dev</h4>
                  <p className="text-xs mt-1" style={{ color: 'var(--c-text-muted)' }}>React Native & Scalable Backend</p>
                </div>
              </div>
            </div>

            {/* Education Summary */}
            <div className="card p-6 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <GraduationCap className="text-rose-500 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-bold font-['Outfit']">B.E. in AI & DS</h4>
                  <p className="text-xs" style={{ color: 'var(--c-text-muted)' }}>CGPA: 7.27</p>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 text-[10px] font-bold uppercase tracking-widest">
                Class of 2027
              </div>
            </div>
          </div>
        </div>

        {/* Motivational Quote - Now as a wide banner */}
        <div className="mt-12 card p-8 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-violet-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <span className="text-4xl block mb-4 animate-float">🔐</span>
            <p className="text-2xl md:text-3xl font-black font-['Outfit'] tracking-tight italic" style={{ color: 'var(--c-text)' }}>
              "BREAK IT TO <span className="gradient-text">SECURE IT</span>."
            </p>
            <p className="text-sm mt-4 font-mono tracking-widest opacity-50 uppercase">
              — MY CORE PHILOSOPHY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
