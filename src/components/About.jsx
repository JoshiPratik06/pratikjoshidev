import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Languages, Code2, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  const details = [
    {
      icon: MapPin,
      label: "Current Base",
      value: personalInfo.location,
      desc: "Open to full-time on-site, hybrid, or remote opportunities worldwide."
    },
    {
      icon: Languages,
      label: "Spoken Languages",
      value: personalInfo.languages.join(", "),
      desc: "Trilingual fluency enabling seamless cross-functional team communication."
    },
    {
      icon: Code2,
      label: "Primary Stack",
      value: "React 19, JavaScript (ES6+), Tailwind CSS",
      desc: "Clean, component-driven architecture engineered for speed and maintainability."
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#090b0e] border-t border-white/[0.06] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-[#d8ef61]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d8ef61] uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#d8ef61]" />
              <span>Developer Identity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Curious by default.<br />User-focused by practice.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9aa4b2] max-w-md font-light leading-relaxed">
            Bridging technical frontend discipline with user psychology to deliver products that feel natural.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Portrait Card + Agency Credential (Col-span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card border border-white/[0.1] shadow-2xl p-4 sm:p-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black/50">
                <img
                  src={personalInfo.photoImg}
                  alt={`Pratik Joshi`}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-transparent to-transparent opacity-80" />

                {/* Bottom floating badge inside portrait */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono text-[#d8ef61]">Front-End Developer</p>
                    <p className="text-sm font-bold text-white font-display">{personalInfo.name}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#d8ef61]/15 text-[#d8ef61] border border-[#d8ef61]/30">
                    Pune, MH
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Pillars (Col-span 7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-[#9aa4b2] leading-relaxed font-light">
              <p>
                I'm a Front-End Developer with a strong focus on building responsive, user-friendly interfaces that balance visual polish with real-world performance. I enjoy turning complex requirements into clean layouts, smooth micro-interactions, and accessible web experiences across all devices.
              </p>
              <p>
                Having worked across client platforms and active product environments at <strong className="text-white font-medium">Alpha Developer Team LLP</strong>, I understand how critical frontend speed, state resilience, and responsive design are for user satisfaction and conversion.
              </p>
              <p>
                When not coding, I experiment with modern AI developer tools, generative interfaces, and graphic design to stay at the cutting edge of digital product creation.
              </p>
            </div>

            {/* Quick Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {details.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl glass-card border border-white/[0.07] hover:border-[#d8ef61]/30 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#d8ef61] mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#9aa4b2]">{item.label}</p>
                    <h4 className="text-sm font-bold text-white font-display mt-0.5 mb-1">{item.value}</h4>
                    <p className="text-[11px] text-[#9aa4b2] leading-normal">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA row */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#d8ef61] hover:text-[#e4f77c] group"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
