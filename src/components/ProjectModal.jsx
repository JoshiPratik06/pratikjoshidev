import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Sparkles, Layers } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#08090b]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#0f1217] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d8ef61]" />
              <span className="text-xs font-mono text-[#9aa4b2] uppercase tracking-wider">
                Case Study • {project.year}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Project Image Preview */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video sm:aspect-[21/9] bg-black/40">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1217] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-xs font-mono text-[#d8ef61] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Overview / Subtitle */}
            <div>
              <h4 className="text-xs font-mono text-[#9aa4b2] uppercase tracking-wider mb-2">Overview</h4>
              <p className="text-base text-white/90 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 text-xs font-semibold text-red-400 mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Challenge</span>
                </div>
                <p className="text-xs text-[#9aa4b2] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#d8ef61]/[0.03] border border-[#d8ef61]/20">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#d8ef61] mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Engineering Solution</span>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture Highlights */}
            {project.highlights && (
              <div>
                <h4 className="text-xs font-mono text-[#9aa4b2] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#d8ef61]" />
                  <span>Architecture & Feature Highlights</span>
                </h4>
                <div className="space-y-2.5">
                  {project.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-start gap-3"
                    >
                      <span className="text-xs font-mono text-[#d8ef61] pt-0.5 font-bold">0{idx + 1}</span>
                      <div>
                        <strong className="text-sm font-semibold text-white block">{item.label}</strong>
                        <p className="text-xs text-[#9aa4b2] mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs font-mono text-[#9aa4b2] uppercase tracking-wider mb-3">Technologies Leveraged</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-white/90 border border-white/[0.08]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Footer Bar */}
          <div className="p-6 border-t border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-[#08090b] bg-[#d8ef61] hover:bg-[#e4f77c] transition-all shadow-[0_0_15px_rgba(216,239,97,0.3)]"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs text-white bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#d8ef61]" />
                <span>Source Code</span>
              </a>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs text-[#9aa4b2] hover:text-white transition-colors"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
