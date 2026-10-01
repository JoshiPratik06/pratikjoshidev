import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ChevronDown, ChevronUp, GitFork, Star, Sparkles, Layers } from 'lucide-react';
import { projects } from '../data/projects';
import { repositories } from '../data/repositories';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedHighlights, setExpandedHighlights] = useState({});

  const toggleHighlights = (id) => {
    setExpandedHighlights(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#08090b]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#d8ef61]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Intro Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6 border-b border-white/[0.08] pb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d8ef61] uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#d8ef61]" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Projects with purpose.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9aa4b2] max-w-md font-light leading-relaxed">
            Thoughtful interfaces, practical interactions, and an eye for how a digital product feels in use.
          </p>
        </div>

        {/* Project Case Studies List */}
        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;
            const isExpanded = !!expandedHighlights[project.id];

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl glass-card border border-white/[0.08] hover:border-[#d8ef61]/30 transition-all duration-500 p-6 sm:p-10 shadow-2xl overflow-hidden"
              >
                {/* Subtle card glow on hover */}
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#d8ef61]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Project Image Panel */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#d8ef61]/40 transition-all duration-500 aspect-[16/10] bg-black/50 shadow-inner group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Overlay badge on hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-4 py-2 rounded-xl bg-[#08090b]/90 text-[#d8ef61] text-xs font-semibold backdrop-blur-md border border-[#d8ef61]/30 shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Layers className="w-3.5 h-3.5" />
                          <span>View Full Case Study</span>
                        </span>
                      </div>

                      {/* Corner Icon */}
                      <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 group-hover:text-[#d8ef61] group-hover:border-[#d8ef61]/30 transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details Panel */}
                  <div className={`lg:col-span-5 flex flex-col ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Index & Year */}
                    <div className="flex items-center justify-between text-xs font-mono text-[#9aa4b2] mb-3">
                      <span className="text-[#d8ef61] font-semibold">0{index + 1} / 0{projects.length}</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight group-hover:text-[#d8ef61] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#9aa4b2] mt-1 mb-4">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-[#9aa4b2] leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-white/80 border border-white/[0.08]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#08090b] bg-[#d8ef61] hover:bg-[#e4f77c] transition-all shadow-[0_0_15px_rgba(216,239,97,0.25)]"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-white/90 bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5 text-[#d8ef61]" />
                        <span>Source</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1 text-xs text-[#9aa4b2] hover:text-[#d8ef61] transition-colors ml-auto py-2"
                      >
                        <span>Details</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Technical Highlights Accordion (Preserved from original design) */}
                    {project.highlights && (
                      <div className="border-t border-white/[0.08] pt-4">
                        <button
                          type="button"
                          onClick={() => toggleHighlights(project.id)}
                          className="flex items-center justify-between w-full text-xs font-medium text-white/80 hover:text-white transition-colors py-1"
                          aria-expanded={isExpanded}
                        >
                          <span className="flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3 text-[#d8ef61]" />
                            Architecture & Technical Highlights
                          </span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-[#d8ef61]" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>

                        {isExpanded && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 space-y-2 text-xs text-[#9aa4b2] list-disc list-inside leading-relaxed bg-white/[0.02] p-3 rounded-xl border border-white/[0.05]"
                          >
                            {project.highlights.map((h, i) => (
                              <li key={i}>
                                <strong className="text-white/90 font-medium">{h.label}:</strong> {h.desc}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </div>
                    )}

                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Live GitHub Spotlight Grid */}
        <div className="mt-20 pt-16 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#d8ef61] mb-1">
                Code Repositories
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Recent GitHub Activity
              </h3>
            </div>
            <a
              href="https://github.com/JoshiPratik06"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#d8ef61] hover:underline"
            >
              <span>Explore GitHub profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repositories.map((repo, idx) => (
              <a
                key={idx}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl glass-card border border-white/[0.07] hover:border-[#d8ef61]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <GitFork className="w-4 h-4 text-[#d8ef61]" />
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#d8ef61] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-mono group-hover:text-[#d8ef61] transition-colors mb-2">
                    {repo.name}
                  </h4>
                  <p className="text-xs text-[#9aa4b2] leading-relaxed line-clamp-2">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#9aa4b2] font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#d8ef61]" />
                    {repo.stars}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Case Study Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
