import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Sparkles, 
  Code, 
  Terminal, 
  BrainCircuit, 
  Layers,
  ChevronDown
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = personalInfo.animatedTitles;

  // Typewriter effect
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const updateSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, updateSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles]);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Glows & Mesh Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-violet-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Decorative Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none -z-10" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 dark:bg-slate-900/90 border border-emerald-500/30 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-300 tracking-wide uppercase">
                Available for New Opportunities
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono text-blue-400 tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2">
                <Terminal className="w-4 h-4 text-violet-400" />
                <span>Hello, World! I am</span>
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                <span className="block">{personalInfo.name}</span>
              </h1>
            </div>

            {/* Dynamic Typewriter Title */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-3xl font-bold text-slate-300 font-mono">
                I build{' '}
                <span className="text-gradient font-extrabold">
                  {displayText}
                </span>
                <span className="animate-pulse text-indigo-400 font-normal">|</span>
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-lg sm:text-2xl font-medium text-slate-200 max-w-2xl">
              {personalInfo.headline}
            </h2>

            {/* Short Bio */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-glow-md hover:shadow-glow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Shaik_Asif_Baji_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base glass-card text-slate-200 hover:text-white hover:border-violet-500/50 hover:bg-white/10 active:scale-95 transition-all duration-300 group"
              >
                <Download className="w-4 h-4 text-blue-400 group-hover:text-violet-400 transition-colors" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white border border-slate-700/60 active:scale-95 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Stats */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-800/80 w-full">
              {/* Social icons */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-slate-400">Connect:</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 hover:shadow-glow-sm transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-violet-500 hover:shadow-glow-sm transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500 hover:shadow-glow-sm transition-all"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              {/* Quick Info pill */}
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>SRM AP University</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-violet-500"></span>
                  <span>CGPA: 8.7</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: User Photograph with Glowing Frame & Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-[280px] sm:w-[350px] lg:w-[380px]">
              
              {/* Outer Glowing Rings */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 rounded-3xl blur-xl opacity-60 animate-pulse-slow -z-10" />
              
              {/* Image Frame Card */}
              <div className="relative rounded-3xl overflow-hidden p-1.5 bg-gradient-to-tr from-blue-500/40 via-violet-500/40 to-transparent border border-white/10 shadow-2xl backdrop-blur-md">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950">
                  <img
                    src="/asif-photo.jpg"
                    alt="Shaik Asif Baji - Professional Photograph"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  {/* Subtle Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-card border border-white/10 backdrop-blur-md">
                    <p className="text-xs font-semibold text-white tracking-wide">
                      Shaik Asif Baji
                    </p>
                    <p className="text-[11px] text-blue-400 font-mono">
                      Full Stack & AI/ML Engineer
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: React & MERN */}
              <div className="absolute -top-4 -left-6 px-3.5 py-2 rounded-xl glass-card border border-blue-500/30 shadow-lg flex items-center gap-2.5 animate-float backdrop-blur-md">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Code className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-white">Full Stack</span>
                  <span className="block text-[10px] text-slate-400 font-mono">React • Node • Mongo</span>
                </div>
              </div>

              {/* Floating Badge 2: AI & Deep Learning */}
              <div className="absolute -bottom-4 -right-4 px-3.5 py-2 rounded-xl glass-card border border-violet-500/30 shadow-lg flex items-center gap-2.5 animate-float [animation-delay:2s] backdrop-blur-md">
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-white">AI / ML</span>
                  <span className="block text-[10px] text-slate-400 font-mono">Deep Learning • CNN</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">Explore More</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-indigo-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

