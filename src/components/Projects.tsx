import React from 'react';
import { ExternalLink, Github, Lock, Globe, Search, ArrowUpRight, ShieldCheck } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'LOQIT',
      category: 'Hardware Security',
      description: 'A BLE-powered ecosystem creating a hardware-identity bond between handsets and devices. Featuring Law Enforcement Command Center.',
      tech: ['React Native', 'Supabase', 'BLE', 'OAuth 2.0'],
      icon: Lock,
      color: 'from-emerald-500 to-teal-500',
      size: 'md:col-span-2 md:row-span-2',
    },
    {
      title: 'E-Guruji',
      category: 'Full-Stack Web',
      description: 'Pandit booking platform with JWT auth and Razorpay integration.',
      tech: ['React', 'Node.js', 'MySQL', 'Razorpay'],
      icon: Globe,
      color: 'from-violet-500 to-purple-500',
      size: 'md:col-span-2',
    },
    {
      title: 'Security Tools',
      category: 'Cyber Security',
      description: 'Custom keylogger and vulnerability scanner developed for security auditing.',
      tech: ['Python', 'Nmap', 'Wireshark'],
      icon: Search,
      color: 'from-rose-500 to-pink-500',
      size: 'md:col-span-1',
    },
    {
      title: 'Portfolio v3',
      category: 'Design & Dev',
      description: 'Bento-inspired premium portfolio with dark/light mode.',
      tech: ['Vite', 'Tailwind', 'Framer Motion'],
      icon: ShieldCheck,
      color: 'from-amber-500 to-orange-500',
      size: 'md:col-span-1',
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          Selected <span className="gradient-text">Work</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`bento-item ${project.size} flex flex-col justify-between group`}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <project.icon size={28} />
                  </div>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-muted transition-colors">
                      <Github size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-muted transition-colors text-primary border-primary/20">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>

                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  {project.category}
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-muted text-[10px] font-black uppercase tracking-tighter">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
