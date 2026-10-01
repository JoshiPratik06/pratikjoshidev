import React from 'react';
import { ArrowUp, Github, Linkedin, MessageSquare, Download } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080a] py-12 text-[#9aa4b2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="text-xl font-bold text-white font-display flex items-center gap-2">
              <span className="font-mono text-[#d8ef61]">PJ</span>
              <span>Pratik Joshi<span className="text-[#d8ef61]">.</span></span>
            </a>
            <p className="text-xs text-[#5e6878] mt-1">
              Front-End Developer • Building high-fidelity web applications
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-[#d8ef61] transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-[#d8ef61] transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-[#d8ef61] transition-all"
              aria-label="WhatsApp Chat"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-[#d8ef61] transition-all"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Pratik Joshi. All rights reserved.</p>
          <p className="text-[#5e6878]">
            Architected with React 19, Tailwind CSS & Framer Motion.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-white/80 hover:text-[#d8ef61] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
