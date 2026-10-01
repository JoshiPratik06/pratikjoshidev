import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Terminal, Cpu, Zap, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function AiShowcase() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  const workflows = [
    {
      id: "api-integration",
      title: "AI API Integration",
      subtitle: "OpenAI & Anthropic REST Endpoints",
      description: "Direct client and serverless integration with OpenAI and Anthropic models to create dynamic, generative capabilities, assistive text completions, and contextual search inside web frontends.",
      tags: ["OpenAI API", "Anthropic Claude API", "Streaming Responses", "REST Fetch"],
      code: `// Consuming Generative API stream
const response = await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are an intelligent interface assistant." },
      { role: "user", content: query }
    ],
    stream: true
  })
});`
    },
    {
      id: "prompt-architecture",
      title: "Prompt Engineering & Guardrails",
      subtitle: "System instructions & schema enforcement",
      description: "Designing deterministic prompt pipelines, JSON output validation, role conditioning, and context memory injection to ensure zero hallucinations in user-facing web tools.",
      tags: ["Structured JSON", "System Prompting", "Few-Shot Examples", "Context Wrappers"],
      code: `// Structured Prompt Wrapper Pattern
const systemPrompt = {
  role: "system",
  content: \`Format output strictly as JSON matching schema:
  {
    status: "success" | "error",
    data: Array<{ id: string, name: string, score: number }>
  }\`
};`
    },
    {
      id: "dev-acceleration",
      title: "AI-Accelerated Development Suite",
      subtitle: "Claude, ChatGPT, Genspark & Antigravity AI",
      description: "Accelerating frontend delivery by leveraging modern AI agents to rapidly debug asynchronous state traps, scaffold accessible components, and iterate responsive Tailwind designs in record time.",
      tags: ["Claude AI", "ChatGPT", "Genspark", "Antigravity AI", "10x Velocity"],
      code: `// Workflow Metrics:
// 1. Bug Diagnostic: Root-cause identification in seconds
// 2. Mock Data Generator: Realistic API stubs & schemas
// 3. Accessibility Audit: ARIA tag validation & keyboard testing
// 4. Production Ready: Clean, handwritten React components`
    }
  ];

  return (
    <section id="ai-lab" className="py-24 sm:py-32 relative bg-[#090b0e] border-y border-white/[0.06]">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#d8ef61]/10 via-purple-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d8ef61] uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#d8ef61] animate-pulse" />
              <span>Modern Engineering Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              AI as an engineering force multiplier.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9aa4b2] max-w-md font-light leading-relaxed">
            I don’t just write code — I leverage generative intelligence to prototype faster, eliminate boilerplate, and build next-generation interfaces.
          </p>
        </div>

        {/* Interactive Workflow Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Workflow Selector Cards */}
          <div className="lg:col-span-5 space-y-4">
            {workflows.map((item, idx) => {
              const isSelected = activeWorkflow === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveWorkflow(idx)}
                  className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 border ${
                    isSelected
                      ? 'bg-white/[0.05] border-[#d8ef61]/40 shadow-[0_10px_30px_-10px_rgba(216,239,97,0.15)]'
                      : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20 hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-[#d8ef61]">0{idx + 1}</span>
                    <span className="text-xs font-mono text-[#9aa4b2]">{item.subtitle}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-2 flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#d8ef61] translate-x-1' : 'text-white/20'}`} />
                  </h3>
                  <p className="text-xs text-[#9aa4b2] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Code & Architecture Terminal */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeWorkflow}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl glass-card border border-white/10 overflow-hidden shadow-2xl"
            >
              {/* Terminal Title Bar */}
              <div className="px-5 py-3.5 bg-black/40 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-xs text-[#9aa4b2]">
                    workflow_{workflows[activeWorkflow].id}.ts
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#d8ef61] px-2 py-0.5 rounded bg-[#d8ef61]/10 border border-[#d8ef61]/20">
                  Active Blueprint
                </span>
              </div>

              {/* Terminal Code Display */}
              <div className="p-6 bg-[#06080a] font-mono text-xs sm:text-sm text-white/90 overflow-x-auto leading-relaxed">
                <pre>
                  <code>{workflows[activeWorkflow].code}</code>
                </pre>
              </div>

              {/* Tag Showcase Footer */}
              <div className="p-5 bg-white/[0.02] border-t border-white/[0.08]">
                <p className="text-xs font-mono text-[#9aa4b2] uppercase tracking-wider mb-2.5">
                  Integrated Tooling & Frameworks
                </p>
                <div className="flex flex-wrap gap-2">
                  {workflows[activeWorkflow].tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-white border border-white/[0.08] flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#d8ef61]" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
