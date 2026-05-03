import React from 'react';
import { Download, Briefcase, GraduationCap, Award, ArrowUpRight } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      role: 'Cyber Security Intern',
      company: 'Elevate Labs',
      period: 'Jan – Apr 2026',
      desc: 'Focused on vulnerability assessment and security tool development.',
      color: 'bg-primary/10 text-primary',
    },
    {
      role: 'Cyber Security Learner',
      company: 'TryHackMe',
      period: 'Nov 2025 – Present',
      desc: 'Completed 100+ labs in Networking and Penetration Testing.',
      color: 'bg-secondary/10 text-secondary',
    },
  ];

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="section-title mb-4">Experience & <br /><span className="gradient-text">Journey</span></h2>
            <p className="text-xl text-muted-foreground max-w-xl">
              A timeline of my growth in the cybersecurity and software engineering space.
            </p>
          </div>
          <button
            onClick={() => window.open('https://drive.google.com/uc?export=download&id=129qKo-KuYi15RSArpwOGq2FM1z7us06f', '_blank')}
            className="btn-modern btn-modern-primary"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Timeline */}
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.company} className="bento-item !p-10 group">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${exp.color} flex items-center justify-center`}>
                    <Briefcase size={24} />
                  </div>
                  <span className="text-sm font-bold opacity-40">{exp.period}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                <p className="text-primary font-bold mb-4">{exp.company}</p>
                <p className="text-muted-foreground">{exp.desc}</p>
              </div>
            ))}
          </div>

          {/* Education & Certs - Bento style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bento-item !bg-secondary/5 border-secondary/10 flex flex-col justify-between">
              <GraduationCap size={32} className="text-secondary mb-8" />
              <div>
                <h3 className="text-xl font-bold">B.E. AI & DS</h3>
                <p className="text-sm text-muted-foreground">Mumbai University</p>
              </div>
            </div>
            <div className="bento-item !bg-accent/5 border-accent/10 flex flex-col justify-between">
              <Award size={32} className="text-accent mb-8" />
              <div>
                <h3 className="text-xl font-bold">7+ Global Certs</h3>
                <p className="text-sm text-muted-foreground">IBM, IBM, THM</p>
              </div>
            </div>
            <div className="bento-item sm:col-span-2 flex items-center justify-between group cursor-pointer" onClick={() => window.open('https://tryhackme.com/p/rohitzore', '_blank')}>
              <div>
                <h3 className="text-2xl font-bold">Top 5% Rank</h3>
                <p className="text-muted-foreground">Global leaderboard on TryHackMe</p>
              </div>
              <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
