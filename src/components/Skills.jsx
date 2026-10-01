import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Atom,
  Braces,
  Palette,
  Code2,
  Layout,
  Sparkles,
  Boxes,
  Bot,
  Cpu,
  Terminal,
  Zap,
  Globe,
  GitBranch,
  Rocket,
  Gauge
} from 'lucide-react';
import { skillCategories, skills } from '../data/skills';

// Safe icon lookup
const iconMap = {
  Atom,
  Braces,
  Palette,
  Code2,
  Layout,
  Sparkles,
  Boxes,
  Bot,
  Cpu,
  Terminal,
  Zap,
  Globe,
  GitBranch,
  Rocket,
  Gauge
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#08090b] overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#d8ef61]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 border-b border-white/[0.08] pb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d8ef61] uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#d8ef61]" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Built to move from idea to implementation.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9aa4b2] max-w-md font-light leading-relaxed">
            Modern frontend libraries, AI-assisted development pipelines, and engineering workflows I leverage daily.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'text-[#08090b] font-semibold'
                    : 'text-[#9aa4b2] hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-skill-tab"
                    className="absolute inset-0 bg-[#d8ef61] rounded-xl -z-10 shadow-[0_0_20px_rgba(216,239,97,0.3)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Code2;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  className="group relative p-6 rounded-2xl glass-card border border-white/[0.07] hover:border-[#d8ef61]/35 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Number & Category Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-mono text-[#5e6878] group-hover:text-[#d8ef61] transition-colors">
                        0{index + 1}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/[0.04] text-[#9aa4b2] border border-white/[0.08]">
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Icon */}
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#d8ef61] mb-4 group-hover:scale-110 group-hover:bg-[#d8ef61]/10 group-hover:border-[#d8ef61]/30 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Skill Name */}
                    <h3 className="text-base sm:text-lg font-bold text-white font-display tracking-tight mb-2 group-hover:text-[#d8ef61] transition-colors">
                      {skill.name}
                    </h3>

                    {/* Skill Description */}
                    <p className="text-xs text-[#9aa4b2] leading-relaxed font-light">
                      {skill.description}
                    </p>
                  </div>

                  {/* Micro bottom indicator */}
                  <div className="mt-5 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-[#5e6878]">
                    <span className="capitalize">{skill.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d8ef61]/40 group-hover:bg-[#d8ef61] transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
