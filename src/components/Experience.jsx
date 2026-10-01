import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Building2 } from 'lucide-react';
import { experiences, educationList } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-[#08090b]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#d8ef61]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6 border-b border-white/[0.08] pb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d8ef61] uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#d8ef61]" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Experience & Education.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9aa4b2] max-w-md font-light leading-relaxed">
            1.2 years of professional agency delivery paired with a rigorous formal degree in Information Technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Professional Experience Timeline (Col-span 7) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#d8ef61]">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Professional Experience
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1] space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#08090b] border-2 border-[#d8ef61] shadow-[0_0_12px_rgba(216,239,97,0.6)] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d8ef61]" />
                  </div>

                  {/* Card Container */}
                  <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/[0.08] group-hover:border-[#d8ef61]/30 transition-all duration-300">
                    
                    {/* Role & Period Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-white font-display group-hover:text-[#d8ef61] transition-colors">
                          {exp.role}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-[#9aa4b2] mt-1 font-mono">
                          <Building2 className="w-3.5 h-3.5 text-[#d8ef61]" />
                          <span className="text-white/90 font-medium">{exp.company}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="self-start sm:self-auto">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#d8ef61]/10 text-[#d8ef61] border border-[#d8ef61]/25">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[#9aa4b2] mb-6 leading-relaxed font-light">
                      {exp.summary}
                    </p>

                    {/* Key Responsibilities */}
                    <div className="space-y-3 mb-6">
                      <p className="text-xs font-mono text-white/70 uppercase tracking-wider">
                        Core Responsibilities & Impact
                      </p>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((duty, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9aa4b2] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#d8ef61] flex-shrink-0 mt-0.5" />
                            <span>{duty}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-white/80 border border-white/[0.07]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education Showcase (Col-span 5) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#d8ef61]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Academic Foundation
              </h3>
            </div>

            <div className="space-y-6">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl glass-card border border-white/[0.08] hover:border-white/20 transition-all"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-[#9aa4b2] mb-3">
                    <span className="text-[#d8ef61] font-semibold">{edu.shortDegree}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white font-display mb-1.5">
                    {edu.degree}
                  </h4>

                  <p className="text-xs text-white/80 font-medium mb-1">
                    {edu.institution}
                  </p>

                  <p className="text-xs text-[#9aa4b2] mb-4">
                    {edu.location}
                  </p>

                  <div className="pt-3 border-t border-white/[0.06] text-xs text-[#9aa4b2] leading-relaxed">
                    {edu.highlights}
                  </div>
                </motion.div>
              ))}

              {/* Developer Quote / Philosophy Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#d8ef61]/[0.06] to-transparent border border-[#d8ef61]/20">
                <span className="text-xs font-mono uppercase tracking-widest text-[#d8ef61] block mb-2">
                  Commitment to Growth
                </span>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed italic">
                  "Blending formal computer science principles with daily modern frontend exploration ensures every project is built with architectural stability and aesthetic precision."
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
