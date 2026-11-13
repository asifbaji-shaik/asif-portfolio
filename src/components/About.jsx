import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Award, 
  CheckCircle2, 
  Code2, 
  Sparkles,
  User,
  HeartHandshake
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-wider uppercase">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bridging strong theoretical foundations with hands-on software engineering and artificial intelligence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Summary & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Professional Summary Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Professional Summary
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Engineering Graduate • SRM AP University
                  </p>
                </div>
              </div>

              {/* Exact user requested professional summary text */}
              <blockquote className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  "{personalInfo.about}"
                </p>
              </blockquote>

              {/* Core Strengths Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-800">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Scalable Full-Stack Architecture</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Deep Learning & CNN Models</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Frontend Responsive Engineering</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Continuous Algorithmic Growth</span>
                </div>
              </div>
            </div>

            {/* Quick Details Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="glass-card rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>Location</span>
                </div>
                <p className="text-sm font-semibold text-white">India</p>
              </div>

              <div className="glass-card rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-1">
                  <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
                  <span>Education</span>
                </div>
                <p className="text-sm font-semibold text-white">B.Tech CSE</p>
              </div>

              <div className="glass-card rounded-xl p-4 border border-white/5 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-1">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CGPA</span>
                </div>
                <p className="text-sm font-semibold text-white">8.7 / 10 (SRM AP)</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code Snapshot & Key Metrics */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Developer Terminal / JSON Card */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <span className="text-[11px] text-slate-400">developer-profile.ts</span>
                <span className="text-[10px] text-blue-400">v1.0.0</span>
              </div>

              {/* Code Body */}
              <div className="p-5 text-slate-300 leading-relaxed space-y-1.5 overflow-x-auto">
                <p>
                  <span className="text-violet-400">const</span>{' '}
                  <span className="text-blue-400">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-amber-300">"{personalInfo.name}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">degree:</span>{' '}
                  <span className="text-amber-300">"B.Tech in CSE"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">university:</span>{' '}
                  <span className="text-amber-300">"SRM AP University"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">cgpa:</span>{' '}
                  <span className="text-emerald-400">8.7</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">roles:</span> [
                  <span className="text-amber-300">"Full Stack Developer"</span>,{' '}
                  <span className="text-amber-300">"AI/ML Enthusiast"</span>],
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">stack:</span> [
                  <span className="text-amber-300">"React"</span>,{' '}
                  <span className="text-amber-300">"Node.js"</span>,{' '}
                  <span className="text-amber-300">"Python"</span>,{' '}
                  <span className="text-amber-300">"TensorFlow"</span>],
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">hireable:</span>{' '}
                  <span className="text-emerald-400">true</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">passion:</span>{' '}
                  <span className="text-amber-300">"Crafting user-centric digital experiences"</span>
                </p>
                <p>&#125;;</p>
                <p className="text-slate-500 pt-2">// Ready to contribute to impact-driven engineering teams</p>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="glass-card rounded-2xl p-5 border border-white/5 hover:border-violet-500/30 transition-all text-center sm:text-left"
                >
                  <p className="text-2xl sm:text-3xl font-extrabold text-gradient mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400 font-mono">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;

