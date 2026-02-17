
import React from 'react';
import { PROFILE } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'Tools', 'Soft Skills'];

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Technical <span className="text-gradient">Mastery</span></h2>
          <div className="h-1.5 w-24 bg-primary-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((cat) => (
            <div key={cat} className="space-y-8">
              <h3 className="text-xl font-display font-bold text-slate-400 uppercase tracking-widest">{cat}</h3>
              <div className="space-y-6">
                {PROFILE.skills
                  .filter((s) => s.category === cat)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <span className="text-primary-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary-600 to-accent rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
