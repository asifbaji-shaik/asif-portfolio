import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  Sparkles, 
  Check, 
  Terminal,
  Layers
} from 'lucide-react';
import { skillsData, personalInfo } from '../data/portfolioData';

const iconMap = {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Wrench,
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...skillsData.map(c => c.category)];

  const filteredCategories = activeTab === 'All'
    ? skillsData
    : skillsData.filter(c => c.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Comprehensive skill set covering modern full-stack development, machine learning algorithms, and engineering toolsets.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white border-transparent shadow-glow-sm scale-105'
                  : 'glass-card text-slate-300 border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, idx) => {
            const IconComponent = iconMap[group.icon] || Code2;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-indigo-500/40 hover:shadow-card-glow transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-gradient-to-tr from-blue-500/20 to-violet-500/20 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                          {group.category}
                        </h3>
                        <p className="text-[11px] text-slate-400 font-mono">
                          {group.skills.length} Technologies
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Badges List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/30 hover:bg-slate-800/80 transition-all duration-200"
                      >
                        {/* Devicon / Tech logo fallback */}
                        <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-5 h-5 object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-xs font-semibold text-slate-200 truncate">
                            {skill.name}
                          </p>
                          <span className="text-[10px] text-slate-400 font-mono block">
                            {skill.badge}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom decorative bar */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Proficiency</span>
                  <span className="text-indigo-400 font-medium">Production-Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="mt-14 glass-card rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Always Learning & Expanding Tech Stack
              </h4>
              <p className="text-xs text-slate-400">
                Regularly exploring modern full-stack frameworks, AI APIs, neural architectures, and developer tooling.
              </p>
            </div>
          </div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/20 transition-all shrink-0"
          >
            Check GitHub Commits
          </a>
        </div>

      </div>
    </section>
  );
};

export default Skills;

