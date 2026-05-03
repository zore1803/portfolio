import React from 'react';
import { Shield, Code2, Terminal, Database, Cpu, Lock, Globe, Server } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Security',
      icon: Shield,
      skills: ['Nmap', 'Wireshark', 'Metasploit', 'Active Directory', 'JWT', 'OAuth 2.0'],
      color: 'bg-primary/10 text-primary',
    },
    {
      title: 'Languages',
      icon: Terminal,
      skills: ['Python', 'JavaScript', 'HTML/CSS', 'Java', 'SQL'],
      color: 'bg-secondary/10 text-secondary',
    },
    {
      title: 'Frameworks',
      icon: Code2,
      skills: ['React Native', 'Expo', 'React', 'Vite', 'Express'],
      color: 'bg-accent/10 text-accent',
    },
    {
      title: 'Tools',
      icon: Cpu,
      skills: ['Git', 'Docker', 'Vercel', 'Supabase', 'Razorpay', 'BLE'],
      color: 'bg-foreground/10 text-foreground',
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          My <span className="gradient-text">Arsenal</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
          A curated selection of technologies I use to architect secure and scalable digital solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="bento-item !rounded-[2rem] flex flex-col p-6">
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-12 rounded-2xl ${group.color} flex items-center justify-center`}>
                  <group.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl border bg-card/50 text-xs font-bold transition-all duration-300 hover:border-primary hover:text-primary cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-12 bento-item !rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4">Beyond Technical</h3>
            <p className="text-muted-foreground leading-relaxed">
              Cybersecurity is as much about people and processes as it is about tools. I bring leadership, communication, and a problem-solving mindset to every team.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 flex-1">
            {['Leadership', 'Communication', 'Adaptability', 'Team Player', 'Critical Thinking'].map((soft) => (
              <div key={soft} className="px-6 py-3 rounded-full bg-muted font-bold text-sm tracking-tight transition-all duration-300 hover:scale-105">
                {soft}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
