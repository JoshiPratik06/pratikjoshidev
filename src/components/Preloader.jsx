import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const duration = 1200; // fast & elegant 1.2s loader
    const intervalTime = 15;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setCount(progress);

      if (progress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoaded(true);
          setTimeout(onComplete, 400);
        }, 150);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07080a] text-white"
        >
          {/* Subtle ambient light */}
          <div className="absolute w-72 h-72 bg-[#d8ef61]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Minimal Brand Monogram */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tighter mb-6 font-display"
            >
              PJ<span className="text-[#d8ef61]">.</span>
            </motion.div>

            {/* Progress counter */}
            <div className="flex items-center gap-2 font-mono text-xs text-text-secondary tracking-widest uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-[#d8ef61] animate-ping" />
              <span>Initializing</span>
              <span className="text-white font-semibold w-9 text-right">{count}%</span>
            </div>

            {/* Thin Progress bar */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full mt-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#d8ef61] to-[#e4f77c]"
                style={{ width: `${count}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

