import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="grainy-bg" />
      <div className="floating-blob w-[600px] h-[600px] bg-primary/20 top-[-20%] left-[-10%]" />
      <div className="floating-blob w-[500px] h-[500px] bg-secondary/20 bottom-[-10%] right-[-10%] animation-delay-2000" />

      <div className="relative z-10 text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border bg-card/50 backdrop-blur-sm mb-12 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-bold tracking-tight text-muted-foreground uppercase">
            Currently securing the digital world
          </span>
        </div>

        <h1 className="hero-title mb-8">
          Crafting <span className="gradient-text">Secure</span> &<br />
          Elegant Experiences.
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          I'm Rohit Zore, a <span className="text-foreground font-bold underline decoration-primary/30 underline-offset-4">Cyber Security Specialist</span> & Full-Stack Developer. I specialize in building robust systems and breaking them to make them better.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-modern btn-modern-primary w-full sm:w-auto"
          >
            Explore My Work
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-modern btn-modern-outline w-full sm:w-auto"
          >
            Get In Touch
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24 max-w-3xl mx-auto">
          {[
            { label: 'TryHackMe', value: 'Top 5%', color: 'text-primary' },
            { label: 'Certifications', value: '7+', color: 'text-secondary' },
            { label: 'Success Rate', value: '100%', color: 'text-accent' },
            { label: 'Projects', value: '12+', color: 'text-foreground' },
          ].map((stat) => (
            <div key={stat.label} className="p-6 rounded-[2rem] border bg-card/30 backdrop-blur-sm">
              <div className={`text-2xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
