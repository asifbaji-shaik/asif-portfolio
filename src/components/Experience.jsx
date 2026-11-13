import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  Code
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono tracking-wider uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Industry Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hands-on software development experience creating production-ready frontend solutions and accessible user experiences.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Track Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-violet-500 to-transparent -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div 
                key={index}
                className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 items-center"
              >
                {/* Center Timeline Node Dot */}
                <div className="absolute left-1/2 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-950 border-4 border-indigo-500 shadow-glow-sm hidden sm:flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Left Side: Role, Company & Period */}
                <div className="sm:text-right space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {exp.title}
                  </h3>
                  <div className="flex items-center sm:justify-end gap-2 text-sm text-indigo-400 font-semibold">
                    <span className="text-slate-200">{exp.company}</span>
                    <span>•</span>
                    <span className="text-xs text-slate-400 font-normal">{exp.type}</span>
                  </div>
                  <p className="text-xs text-slate-400 flex items-center sm:justify-end gap-1 font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </p>
                </div>

                {/* Right Side: Responsibilities Card */}
                <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-indigo-500/40 hover:shadow-card-glow transition-all duration-300">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                    <Code className="w-4 h-4 text-violet-400" />
                    <span>Key Accomplishments & Contributions</span>
                  </h4>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="pt-5 mt-5 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;

