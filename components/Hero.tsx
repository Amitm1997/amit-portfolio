
import React, { useState } from 'react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  const [isSynced, setIsSynced] = useState(PROFILE.syncLinkedIn);
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggleSync = () => {
    setImageLoaded(false);
    setIsSynced(!isSynced);
  };

  const currentImage = isSynced ? PROFILE.linkedinPicture : PROFILE.profilePicture;

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-900/30 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-ping"></span>
              Open to Opportunities
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold leading-tight mb-6">
              Building the <span className="text-gradient">Next Generation</span> of Digital Products.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              I'm <span className="text-white font-medium">{PROFILE.name}</span>, a {PROFILE.role}. 
              Crafting software that feels like magic and works like clockwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-full transition-all text-center shadow-lg shadow-primary-600/20 active:scale-95"
              >
                View My Work
              </a>
              <a 
                href="#ai-assistant" 
                className="px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-full transition-all text-center backdrop-blur-sm active:scale-95"
              >
                Talk to my AI
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center gap-8">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
              
              {/* Spinning Ring Background */}
              <div className="absolute inset-0 border-2 border-dashed border-primary-500/30 rounded-full animate-spin-slow"></div>
              
              {/* Pulsing Aura */}
              <div className={`absolute -inset-4 bg-gradient-to-tr transition-all duration-700 rounded-full blur-2xl animate-pulse ${
                isSynced ? 'from-blue-500/30 to-blue-400/30' : 'from-primary-500/20 to-accent/20'
              } group-hover:scale-110`}></div>

              {/* Unique Morphing Container */}
              <div className={`relative w-full h-full overflow-hidden profile-blob border-2 shadow-2xl transition-all duration-500 ${
                isSynced ? 'border-blue-400/50' : 'border-white/20'
              }`}>
                <img 
                  key={currentImage}
                  src={currentImage} 
                  alt={PROFILE.name}
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-700 ease-out ${
                    imageLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-lg'
                  }`}
                />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-2 -left-6 px-4 py-2 glass-card rounded-full text-xs font-bold text-primary-300 border border-primary-500/20 shadow-xl">
                {isSynced ? 'Synced with LinkedIn' : 'Portfolio View'}
              </div>
            </div>

            {/* LinkedIn Sync Toggle - Unique Glass Design */}
            <div className="glass-card px-6 py-3 rounded-2xl flex items-center gap-4 border border-white/10 shadow-lg">
              <div className="flex items-center gap-2">
                <svg className={`w-5 h-5 transition-colors ${isSynced ? 'text-blue-400' : 'text-slate-500'}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-sm font-medium text-slate-300">LinkedIn Sync</span>
              </div>
              
              <button 
                onClick={toggleSync}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
                  isSynced ? 'bg-blue-600' : 'bg-slate-700'
                }`}
              >
                <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                  isSynced ? 'translate-x-6' : 'translate-x-0'
                }`}></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
