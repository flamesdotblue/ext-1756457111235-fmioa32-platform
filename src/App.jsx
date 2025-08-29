import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-green-300 selection:bg-green-500/30 selection:text-green-100">
      <Hero />
      <main className="relative z-10">
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
