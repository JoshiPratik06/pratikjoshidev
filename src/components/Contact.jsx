import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Copy, Check, ArrowUpRight, MessageSquare, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Trigger direct mailto with user's inputs
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#08090b] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#d8ef61]/10 via-transparent to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Intro */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d8ef61] uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#d8ef61]" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-[1.15]">
            Looking for a front-end developer who builds with purpose?
          </h2>
          <p className="text-base text-[#9aa4b2] mt-4 font-light leading-relaxed">
            I'm actively looking for full-time front-end developer opportunities and ready to bring value to a product-focused engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct High-Value Channels (Col-span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Copyable Email Box */}
            <div className="p-6 rounded-2xl glass-card border border-white/[0.08] hover:border-[#d8ef61]/30 transition-all">
              <span className="text-xs font-mono text-[#9aa4b2] uppercase tracking-wider block mb-2">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-[#d8ef61] transition-colors truncate font-display"
                >
                  {personalInfo.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/90 border border-white/10 transition-all flex-shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#d8ef61]" />
                      <span className="text-[#d8ef61]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#9aa4b2]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-[#9aa4b2] mt-2">
                Expect a response within 12–24 business hours.
              </p>
            </div>

            {/* Direct WhatsApp Callout */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl glass-card border border-white/[0.08] hover:border-[#d8ef61]/40 transition-all block"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#9aa4b2] uppercase tracking-wider block">Instant Chat</span>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#d8ef61] transition-colors">
                      {personalInfo.phone}
                    </h4>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#d8ef61] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </a>

            {/* Availability details */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d8ef61] animate-ping" />
                <span className="text-xs font-mono text-white font-medium">Availability Status</span>
              </div>
              <p className="text-xs text-[#9aa4b2] leading-relaxed">
                Open for immediate joining in Pune, Maharashtra or remote full-time positions worldwide.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-white/70">
                <span className="px-2 py-0.5 rounded bg-white/5">Full-Time</span>
                <span className="px-2 py-0.5 rounded bg-white/5">On-Site / Remote</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Frontend / React</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Send Note Form (Col-span 7) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/[0.09] shadow-2xl relative">
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Send a direct dispatch
              </h3>
              <p className="text-xs text-[#9aa4b2] mb-6 font-light">
                Fill in the details below to initiate conversation directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-[#9aa4b2] uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#d8ef61] focus:ring-1 focus:ring-[#d8ef61] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-[#9aa4b2] uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#d8ef61] focus:ring-1 focus:ring-[#d8ef61] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-[#9aa4b2] uppercase tracking-wider mb-2">
                    Project / Opportunity Brief
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about the role, frontend challenges, or project goals..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#d8ef61] focus:ring-1 focus:ring-[#d8ef61] transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-[#08090b] bg-[#d8ef61] hover:bg-[#e4f77c] shadow-[0_0_20px_rgba(216,239,97,0.3)] transition-all hover:scale-[1.02]"
                  >
                    <span>Dispatch Message</span>
                    <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  {isSent && (
                    <span className="text-xs text-[#d8ef61] font-mono flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Mail Client Opened!
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
