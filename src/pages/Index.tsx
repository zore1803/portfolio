import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Credentials from '../components/Credentials';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useReveal } from '@/hooks/useReveal';

const Index = () => {
  useReveal();
  return (
    <div className="portfolio-shell">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Credentials />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
