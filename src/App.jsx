import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import AiShowcase from './components/AiShowcase';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#08090b] text-[#f6f8fb] selection:bg-[#d8ef61]/25 selection:text-white">
      {/* Short Luxury Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Main Application Shell */}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <AiShowcase />
          <Experience />
          <About />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
