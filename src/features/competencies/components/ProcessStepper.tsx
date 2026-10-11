'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Terminal } from 'lucide-react';

export const ProcessStepper: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(2); // Default to 'BUILD'

  const steps = [
    {
      num: '01',
      name: 'DISCOVER',
      points: ['Business need', 'Process mapping', 'Opportunity ROI'],
      deliverable: 'Business Value Assessment & Feasibility Matrix',
      timeline: 'Sprint 1-2',
    },
    {
      num: '02',
      name: 'DESIGN',
      points: ['Architecture', 'Data boundaries', 'AI strategy'],
      deliverable: 'Decoupled System Architecture & Security Spec',
      timeline: 'Sprint 3-4',
    },
    {
      num: '03',
      name: 'BUILD',
      points: ['Agent core', 'RAG pipeline', 'Integration'],
      deliverable: 'Production Model Context Protocol & Vector Store',
      timeline: 'Sprint 5-8',
    },
    {
      num: '04',
      name: 'DEPLOY',
      points: ['Security audit', 'Production rollout', 'Monitoring'],
      deliverable: 'Hardened Production Gateway & Telemetry Observability',
      timeline: 'Sprint 9-10',
    },
    {
      num: '05',
      name: 'ADOPT',
      points: ['Enablement', 'Governance', 'Kaizen scale'],
      deliverable: 'Enterprise Playbooks & Kaizen Feedback Loops',
      timeline: 'Continuous',
    },
  ];

  return (
    <section aria-label="From Problem to Production Process" className="py-24 sm:py-32 bg-canvas bg-tech-grid border-b border-border-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-signal/15 border border-signal/30 text-ink rounded-[2px]">
            <span className="w-1.5 h-1.5 bg-signal rounded-none animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold">
              OPERATIONAL LIFECYCLE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink uppercase leading-[1.05]">
            From Business Problem <br />
            <span className="text-ink-muted">To Production AI.</span>
          </h2>
          <p className="text-base sm:text-lg text-ink-muted font-normal leading-relaxed pt-1">
            A disciplined, 5-phase execution framework designed to navigate enterprise complexity from initial ideation to long-term adoption.
          </p>
        </div>

        {/* Global Pipeline Progress Bar */}
        <div className="relative mb-6 hidden lg:block">
          <div className="h-1 bg-border-light w-full rounded-none relative overflow-hidden">
            <div 
              className="h-full bg-dark transition-all duration-500 ease-out" 
              style={{ width: `${((selectedStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* 5-Step Process Stepper Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => {
            const isSelected = selectedStep === idx;
            return (
              <button
                type="button"
                key={step.num}
                onClick={() => setSelectedStep(idx)}
                className={`text-left bg-canvas-white border p-6 rounded-[2px] flex flex-col justify-between transition-all relative group shadow-2xs corner-crosshairs ${
                  isSelected
                    ? 'border-dark ring-2 ring-signal/60 bg-white shadow-md'
                    : 'border-border-light hover:border-ink/50'
                }`}
              >
                <div>
                  {/* Step number and indicator */}
                  <div className="flex items-center justify-between border-b border-border-light pb-3 mb-4 font-mono">
                    <span className={`text-xs font-bold px-1.5 py-0.5 rounded-[1px] ${
                      isSelected ? 'bg-signal text-dark' : 'bg-canvas text-ink'
                    }`}>
                      PHASE {step.num}
                    </span>
                    {idx < steps.length - 1 && (
                      <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-ink-faint group-hover:text-ink group-hover:translate-x-0.5 transition-all" />
                    )}
                  </div>

                  <h3 className="font-mono text-sm font-bold tracking-wider text-ink uppercase mb-3 flex items-center justify-between">
                    <span>{step.name}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-signal" />}
                  </h3>

                  <ul className="space-y-1.5 text-xs text-ink-muted font-mono">
                    {step.points.map((p, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className={`w-1 h-1 rounded-none ${isSelected ? 'bg-signal-contrast' : 'bg-ink-muted'}`} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-3 border-t border-border-light/60 font-mono text-[10px] text-ink-faint flex items-center justify-between">
                  <span>GATE 0{idx + 1}</span>
                  <span className={`font-bold uppercase ${isSelected ? 'text-signal-contrast' : 'text-emerald-700'}`}>
                    VERIFIED
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Detail Bar */}
        <div className="mt-8 p-5 bg-[#0D0E11] text-white border border-white/15 rounded-[2px] font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3">
            <Terminal className="w-4 h-4 text-signal shrink-0" />
            <div>
              <span className="text-neutral-400 block text-[10px] uppercase">
                ACTIVE PHASE DELIVERABLE [{steps[selectedStep].name}]
              </span>
              <span className="text-white font-semibold text-[12px]">
                {steps[selectedStep].deliverable}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px] shrink-0 border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0 sm:pl-4">
            <span className="text-neutral-400">DURATION: <strong className="text-white">{steps[selectedStep].timeline}</strong></span>
            <span className="inline-flex items-center gap-1 text-signal font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              QUALITY GATE READY
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
