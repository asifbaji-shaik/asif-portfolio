import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  BookOpen, 
  CheckCircle,
  Building2,
  Sparkles
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-violet-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Education & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Rigorous computer science curriculum, algorithm design, machine learning foundations, and sustained academic excellence.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={index}
                className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all duration-300 relative overflow-hidden ${
                  isFeatured
                    ? 'border-indigo-500/40 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950/90 shadow-card-glow'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {isFeatured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-600 to-violet-600 text-white text-[10px] font-mono uppercase tracking-wider px-4 py-1 rounded-bl-xl font-bold flex items-center gap-1.5 shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    <span>Degree Highlight</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-sm font-semibold text-indigo-400 flex items-center gap-1.5">
                          <Building2 className="w-4 h-4" />
                          <span>{edu.institution}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono">
                    <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700/80 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-violet-400" />
                      <span>{edu.duration}</span>
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-bold flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{edu.grade}</span>
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {edu.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Coursework tags for B.Tech */}
                {isFeatured && (
                  <div className="pt-4 mt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400 mr-2 flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                      <span>Relevant Coursework:</span>
                    </span>
                    {[
                      "Data Structures & Algorithms",
                      "Machine Learning",
                      "Database Management (DBMS)",
                      "Object-Oriented Programming (Java/C++)",
                      "Computer Networks",
                      "Operating Systems",
                      "Deep Neural Networks"
                    ].map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/60 text-slate-300 border border-slate-700/60"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Education;

