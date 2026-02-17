
import React from 'react';
import { PROFILE } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Selected <span className="text-gradient">Projects</span></h2>
            <p className="text-slate-400 max-w-xl">A glimpse into the digital solutions I've brought to life recently.</p>
          </div>
          <a href={PROFILE.github} target="_blank" className="text-primary-400 hover:text-white transition-colors flex items-center gap-2 font-medium">
            Explore Github
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROFILE.projects.map((project) => (
            <div key={project.id} className="group relative glass-card rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-primary-900/30 text-primary-400 text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-white font-medium hover:text-primary-400 transition-colors"
                >
                  View Case Study
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
