import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Download, MessageSquare, MapPin, Sparkles, Terminal, Code2, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('code');

  const codeSnippet = `const developer = {
  name: "${personalInfo.name}",
  role: "${personalInfo.role}",
  experience: "${personalInfo.experienceYears} Years (Agency)",
  coreStack: ["React 19", "JavaScript (ES6+)", "Tailwind CSS"],
  accelerators: ["OpenAI API", "Anthropic API", "Prompt Eng."],
  currentStatus: "Open for Full-Time Roles",
  location: "Pune, Maharashtra",
  buildReady: true
};`;

  const terminalOutput = `> git log -1 --pretty=format:"%h - %s"
3f8a91c - feat: high-fidelity client-side SPAs
> vite build --mode production
✓ 48 modules transformed.
dist/index.html   0.82 kB │ gzip: 0.44 kB
dist/assets.js   42.18 kB │ gzip: 14.12 kB
✓ built in 28ms. Ready for deployment.`;

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-noise">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#d8ef61]/10 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-32 right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm self-start mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d8ef61] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d8ef61]"></span>
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-white/90">
                Available for Full-Time Opportunities
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.08] mb-6">
              I build web experiences that{' '}
              <span className="relative whitespace-nowrap">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f6f8fb] to-[#9aa4b2]">
                  feel effortless.
                </span>
                <motion.span
                  className="absolute left-0 bottom-1 w-full h-[3px] bg-gradient-to-r from-[#d8ef61] via-[#d8ef61]/80 to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h1>

            {/* Subtitle / Biography */}
            <p className="text-base sm:text-lg text-[#9aa4b2] leading-relaxed mb-8 max-w-2xl font-light">
              I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>, a Front-End Developer with{' '}
              <span className="text-white font-medium">1.2 years of hands-on agency experience</span> creating responsive, user-centric, and visually engaging web applications using{' '}
              <span className="text-white font-medium">React.js, modern JavaScript (ES6+), Tailwind CSS, Bootstrap</span>, and AI developer workflows.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#08090b] bg-[#d8ef61] hover:bg-[#e4f77c] shadow-[0_0_25px_rgba(216,239,97,0.35)] transition-all hover:scale-[1.02]"
              >
                <span>Explore My Work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-white bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] hover:border-white/20 transition-all"
              >
                <Download className="w-4 h-4 text-[#d8ef61]" />
                <span>Resume</span>
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm text-[#9aa4b2] hover:text-white transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-[#d8ef61]" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-2xl font-bold font-display text-white">1.2+ <span className="text-xs font-mono text-[#d8ef61]">YRS</span></p>
                <p className="text-xs text-[#9aa4b2] mt-0.5">Professional Exp</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-white">100% <span className="text-xs font-mono text-[#d8ef61]">SPA</span></p>
                <p className="text-xs text-[#9aa4b2] mt-0.5">Responsive Apps</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-white">Pune <span className="text-xs font-mono text-[#d8ef61]">MH</span></p>
                <p className="text-xs text-[#9aa4b2] mt-0.5">On-site / Remote</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Developer Interactive Sandbox + Portrait Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end"
          >
            <div className="w-full max-w-md relative">
              
              {/* Glassmorphic Developer Window */}
              <div className="rounded-2xl glass-card overflow-hidden shadow-2xl border border-white/[0.09]">
                {/* Window Title Bar */}
                <div className="px-4 py-3 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-xs text-[#9aa4b2]">developer.config.ts</span>
                  </div>

                  <div className="flex items-center gap-1 bg-black/40 rounded-lg p-0.5 border border-white/5">
                    <button
                      type="button"
                      onClick={() => setActiveTab('code')}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                        activeTab === 'code' ? 'bg-white/10 text-[#d8ef61]' : 'text-white/50 hover:text-white'
                      }`}
                    >
                      Config
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('terminal')}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                        activeTab === 'terminal' ? 'bg-white/10 text-[#d8ef61]' : 'text-white/50 hover:text-white'
                      }`}
                    >
                      Terminal
                    </button>
                  </div>
                </div>

                {/* Window Content */}
                <div className="p-4 bg-[#090b0e]/90 font-mono text-xs leading-relaxed overflow-x-auto min-h-[200px]">
                  {activeTab === 'code' ? (
                    <pre className="text-white/80">
                      <code>{codeSnippet}</code>
                    </pre>
                  ) : (
                    <pre className="text-[#9aa4b2]">
                      <code className="text-[#d8ef61]">{terminalOutput}</code>
                    </pre>
                  )}
                </div>

                {/* Bottom Card: Portrait & Location info */}
                <div className="p-4 bg-white/[0.02] border-t border-white/[0.06] flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-[#d8ef61]/40 flex-shrink-0 shadow-lg">
                    <img
                      src={personalInfo.portraitImg}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-white truncate">
                      <span>{personalInfo.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d8ef61] flex-shrink-0" />
                    </div>
                    <p className="text-xs text-[#9aa4b2] truncate">Front-End Developer • Pune, IN</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#d8ef61] font-mono">
                        <Sparkles className="w-3 h-3" /> React 19 + AI
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#0e1218]/90 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-md shadow-xl items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#d8ef61]/10 border border-[#d8ef61]/30 flex items-center justify-center text-[#d8ef61]">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Modern SPAs</p>
                  <p className="text-[11px] text-[#9aa4b2]">Tailored UX & High Perf</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
