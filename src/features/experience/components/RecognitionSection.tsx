import React from 'react';
import { Trophy, Globe2 } from 'lucide-react';

export const RecognitionSection: React.FC = () => {
  return (
    <section aria-label="Recognition and Kaizen Honors" className="py-24 sm:py-32 bg-canvas border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 bg-signal rounded-none" />
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
            RECOGNITION
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Oversized 3x First Place Headline */}
          <div className="lg:col-span-6 space-y-4">
            <span className="font-mono text-6xl sm:text-8xl lg:text-9xl font-extrabold text-ink block leading-none">
              3×
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink uppercase leading-tight">
              First Place.
            </h2>
            <p className="text-base text-ink-muted max-w-md font-normal leading-relaxed pt-2">
              Recognized in competitive corporate Kaizen innovation marathons on the Toyota Turkey Kaizen Platform for building production-deployed AI and intelligent automation solutions.
            </p>
          </div>

          {/* Right Column: Structured Kaizen Honors Cards (Aligned with LinkedIn) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* 1st Place Honors */}
            <div className="bg-canvas-white border border-border-light p-6 rounded-[2px] shadow-2xs">
              <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold uppercase tracking-wider pb-3 border-b border-border-light">
                <Trophy className="w-4 h-4 text-ink" />
                <span>1ST PLACE HONORS (KAIZEN PROBLEM-SOLVING)</span>
              </div>
              <ul className="mt-4 space-y-3 font-mono text-xs text-ink">
                <li className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border-light/40 pb-2.5">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-signal rounded-none shrink-0" />
                    <span className="font-semibold">PS 1st Place · Toyota AI-Powered Assistant</span>
                  </span>
                  <span className="text-ink-muted text-[11px] sm:text-right pl-3.5 sm:pl-0">Toyota Turkey Kaizen Platform</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border-light/40 pb-2.5">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-signal rounded-none shrink-0" />
                    <span className="font-semibold">PS 1st Place · Personalised Communication & Offers</span>
                  </span>
                  <span className="text-ink-muted text-[11px] sm:text-right pl-3.5 sm:pl-0">Toyota Turkey Kaizen Platform</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-signal rounded-none shrink-0" />
                    <span className="font-semibold">PS 1st Place · Improving Post-Sales Customer Targeting with Data Analytics Models</span>
                  </span>
                  <span className="text-ink-muted text-[11px] sm:text-right pl-3.5 sm:pl-0">Post-Sales Targeting · Kaizen Platform</span>
                </li>
              </ul>
            </div>

            {/* 2nd Place Honor */}
            <div className="bg-canvas-white border border-border-light p-6 rounded-[2px] shadow-2xs">
              <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold uppercase tracking-wider pb-3 border-b border-border-light">
                <Trophy className="w-4 h-4 text-ink-muted" />
                <span>2ND PLACE HONOR (KAIZEN PROBLEM-SOLVING)</span>
              </div>
              <div className="mt-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 font-mono text-xs text-ink">
                <p className="font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-ink rounded-none shrink-0" />
                  <span>PS 2nd Place · My Lead Assistant</span>
                </p>
                <span className="text-ink-muted text-[11px] pl-3.5 sm:pl-0">Toyota Turkey Kaizen Platform</span>
              </div>
            </div>

            {/* Global ALJ Representation */}
            <div className="bg-dark text-white border border-dark p-6 rounded-[2px] shadow-sm">
              <div className="flex items-center gap-2 text-signal font-mono text-xs font-bold uppercase tracking-wider pb-3 border-b border-white/10">
                <Globe2 className="w-4 h-4 text-signal" />
                <span>GLOBAL REPRESENTATIVE · BUSINESS REFORM</span>
              </div>
              <div className="mt-3 space-y-1">
                <h4 className="font-mono text-sm font-bold tracking-wide uppercase">
                  Business Reform — Represented Toyota Turkey at the ALJ Global Kaizen Marathon
                </h4>
                <p className="font-mono text-[11px] text-signal/90">
                  Toyota Turkey Kaizen Platform
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Selected to represent Toyota Turkey internationally on the global stage at the ALJ Global Kaizen Marathon in the Business Reform category.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
