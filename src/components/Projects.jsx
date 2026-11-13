import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Sparkles, 
  Code2, 
  Layers, 
  BrainCircuit, 
  CheckCircle,
  Eye,
  X
} from 'lucide-react';
import { projectsData, personalInfo } from '../data/portfolioData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Full Stack', 'AI & ML', 'Computer Vision'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-wider uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Real-world full-stack web applications, deep learning neural networks, and computer vision systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white border-transparent shadow-glow-sm scale-105'
                  : 'glass-card text-slate-300 border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-white/10 hover:border-indigo-500/40 hover:shadow-card-glow transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header / Banner */}
              <div>
                <div className={`h-40 relative bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between overflow-hidden border-b border-white/5`}>
                  {/* Subtle Grid Pattern in Banner */}
                  <div 
                    className="absolute inset-0 opacity-10 pointer-events-none" 
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }}
                  />

                  {/* Top Category & Accuracy/Features Badge */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-lg text-[11px] font-mono font-medium bg-black/40 backdrop-blur-md text-white border border-white/10">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                      {project.badge}
                    </span>
                  </div>

                  {/* Icon Representation */}
                  <div className="relative z-10 flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Highlights list (2 items) */}
                  <div className="space-y-1.5 pt-1">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/80 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between gap-3">
                {/* Details Modal Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Deep Dive</span>
                </button>

                {/* Actual GitHub Repository Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-glow-sm hover:shadow-glow-md hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repo</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Link CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-xs sm:text-sm font-mono mb-4">
            Curious to see more code repositories and experiments?
          </p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white shadow-lg hover:border-slate-700 hover:scale-105 active:scale-95 transition-all"
          >
            <Github className="w-4 h-4 text-blue-400" />
            <span>Visit @asifbaji-shaik on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div 
            className="glass-card max-w-2xl w-full rounded-2xl border border-white/20 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title & Category */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {selectedProject.category}
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  {selectedProject.badge}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Key Features */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Key Features & Architecture
              </h4>
              <div className="space-y-2">
                {selectedProject.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Technologies & Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-indigo-300 border border-indigo-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-800 border border-slate-700"
              >
                Close
              </button>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-glow-sm hover:shadow-glow-md"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

