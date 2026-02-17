
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AiAssistant from './components/AiAssistant';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-display font-bold mb-8">About <span className="text-gradient">Me</span></h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-6">
                I've spent the last 8 years mastering the art of digital craftsmanship. From the early days of jQuery to the modern frontier of generative AI, my journey has been defined by a relentless curiosity.
              </p>
              <p className="text-xl text-slate-400 leading-relaxed">
                Today, I focus on bridging the gap between complex engineering and intuitive user experiences. I believe that good software should be invisible—empowering users without getting in their way.
              </p>
            </div>
          </div>
        </section>
        <Skills />
        <Projects />
        <AiAssistant />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-white/5 bg-slate-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Amit Mishra Portfolio. Built with React & Gemini.
          </p>
          <div className="flex gap-6 text-slate-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
