import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useReveal } from '@/hooks/useReveal';

const Index = () => {
  useReveal();
  return (
    <div className="min-h-screen relative" style={{ background: 'var(--c-bg)', color: 'var(--c-text)' }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
