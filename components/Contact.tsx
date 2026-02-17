
import React from 'react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-display font-bold mb-6">Let's build something <span className="text-gradient">Epic</span> together.</h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Whether you have a specific project in mind or just want to say hi, my inbox is always open.
            </p>
            
            <div className="space-y-6">
              <a 
                href={`mailto:${PROFILE.email}`} 
                className="flex items-center gap-4 group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary-500 group-hover:scale-110 group-hover:bg-primary-500/10 transition-all duration-300">
                  <svg 
                    className="w-6 h-6 text-primary-400 group-hover:text-white transition-colors duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <p className="text-lg text-slate-200 group-hover:text-primary-400 transition-colors duration-300">{PROFILE.email}</p>
                </div>
              </a>

              <a 
                href={PROFILE.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary-500 group-hover:scale-110 group-hover:bg-primary-500/10 transition-all duration-300">
                  <svg 
                    className="w-6 h-6 text-primary-400 group-hover:text-white transition-colors duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">LinkedIn</p>
                  <p className="text-lg text-slate-200 group-hover:text-primary-400 transition-colors duration-300">Amit-Mishra</p>
                </div>
              </a>
            </div>
          </div>

          <form className="glass-card p-10 rounded-[3rem] space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Name</label>
                <input type="text" className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-3 px-5 focus:outline-none focus:border-primary-500 transition-colors text-white" placeholder="Amit Mishra" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
                <input type="email" className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-3 px-5 focus:outline-none focus:border-primary-500 transition-colors text-white" placeholder="Amit@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
              <textarea rows={5} className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-3 px-5 focus:outline-none focus:border-primary-500 transition-colors text-white resize-none" placeholder="How can I help you?"></textarea>
            </div>
            <button className="w-full py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-primary-600/20 active:scale-95">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
