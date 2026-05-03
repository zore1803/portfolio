import React from 'react';
import { Shield, Code2, GraduationCap, Trophy, Volleyball, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          Behind the <span className="gradient-text">Screen</span>
        </h2>

        <div className="bento-container">
          {/* Bio - Large item */}
          <div className="bento-item md:col-span-2 md:row-span-2 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Shield size={24} className="text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4">The Security Mindset</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                I'm a B.E. in AI & Data Science student with a deep obsession with cybersecurity. I don't just build apps; I architect them to withstand the unknown. Ranked in the top 5% on TryHackMe, I bring a hacker's perspective to every line of code.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">Penetration Testing</span>
              <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest">Network Security</span>
              <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest">Full-Stack Dev</span>
            </div>
          </div>

          {/* Education - Small item */}
          <div className="bento-item flex flex-col justify-between">
            <div className="w-10 h-10 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4">
              <GraduationCap size={20} className="text-secondary" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">B.E. Student</h4>
              <p className="text-sm text-muted-foreground">Vasantdada Patil College, Mumbai</p>
            </div>
            <div className="text-2xl font-black text-secondary mt-4">7.27 CGPA</div>
          </div>

          {/* Experience - Small item */}
          <div className="bento-item flex flex-col justify-between">
            <div className="w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
              <Trophy size={20} className="text-accent" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">THM Rank</h4>
              <p className="text-sm text-muted-foreground">Cyber Security Learner</p>
            </div>
            <div className="text-2xl font-black text-accent mt-4">Top 5%</div>
          </div>

          {/* Hobbies - Wide item */}
          <div className="bento-item md:col-span-2 flex items-center gap-8">
            <div className="flex-1">
              <h4 className="text-2xl font-bold mb-2">Off the clock</h4>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not in the terminal, I'm spikes-down on the volleyball court or managing student activities as Treasurer.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-2xl">🏐</div>
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-2xl">🏢</div>
            </div>
          </div>

          {/* Community - Tall item */}
          <div className="bento-item md:row-span-1 flex flex-col justify-center text-center">
            <Users size={32} className="mx-auto mb-4 text-primary" />
            <h4 className="text-xl font-bold">CSI Treasurer</h4>
            <p className="text-sm text-muted-foreground mt-2">Active Student Leader</p>
          </div>

          {/* Quick Quote - Tall item */}
          <div className="bento-item md:row-span-1 flex items-center justify-center bg-primary text-primary-foreground border-none">
            <div className="text-center italic">
              <span className="text-4xl block mb-2 opacity-50 font-serif">"</span>
              <p className="font-bold text-lg">Break it to secure it.</p>
              <span className="text-4xl block mt-2 opacity-50 font-serif rotate-180">"</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
