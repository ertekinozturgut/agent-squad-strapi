import React from 'react';
import { Cpu, Users, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const ConsultingAndTrainingSection: React.FC = () => {
  const architecturalPractices = [
    {
      title: 'Production AI & Agentic System Design',
      desc: 'Architecting resilient Retrieval-Augmented Generation (RAG) pipelines, autonomous tool execution via Model Context Protocol (MCP), and real-time hallucination evaluation guardrails embedded directly into transactional backbones.',
    },
    {
      title: 'Enterprise Platform Modernisation & Cloud CRM',
      desc: 'Guiding large-scale Microsoft Dynamics 365 cloud transitions, Dataverse data modeling, and centralized API gateway architectures that eliminate fragile legacy point-to-point connections.',
    },
    {
      title: 'Intelligent Automation & Revenue Safeguards',
      desc: 'Designing automated reconciliation systems that scan high-volume ERP, billing, and promotional campaign streams to eliminate manual verification fatigue and prevent revenue leakage.',
    },
    {
      title: 'Pragmatic Technology Evaluation & Governance',
      desc: 'Conducting rigorous architectural due diligence, establishing zero-trust data residency boundaries, and evaluating total cost of ownership to separate genuine operational value from exploratory hype.',
    },
  ];

  const enablementPractices = [
    {
      title: 'Hands-On Agentic AI for Engineering Squads',
      desc: 'Translating emerging AI paradigms into production reality for software and data engineers — covering LLM integration, custom MCP server development, and hybrid vector search architectures.',
    },
    {
      title: 'Workflow Hyperautomation for Operational Teams',
      desc: 'Equipping business, marketing, and operations units to build governed, low-code automations using Microsoft Copilot Studio, n8n, and Power Automate.',
    },
    {
      title: 'Executive AI Strategy & Decision Frameworks',
      desc: 'Bridging technical reality with commercial priorities — guiding leadership teams through practical AI mental models, use-case prioritization matrices, and Kaizen continuous improvement metrics.',
    },
    {
      title: 'Sustainable Adoption Standards & Governance',
      desc: 'Establishing organizational usage guidelines, security guardrails, and telemetry loops so technology deployments translate into measurable, compounding day-to-day productivity.',
    },
  ];

  return (
    <section
      id="services"
      aria-label="Capabilities and Systems Practice"
      className="py-24 sm:py-32 bg-canvas bg-tech-grid border-b border-border-light relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-signal/15 border border-signal/30 text-ink rounded-[2px]">
            <span className="w-1.5 h-1.5 bg-signal rounded-none animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold">
              CAPABILITIES &amp; PRACTICE // SYSTEMS &amp; ENABLEMENT
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink uppercase leading-[1.05]">
            Enterprise Systems Architecture <br />
            <span className="text-ink-muted">&amp; Workforce Enablement.</span>
          </h2>

          <p className="text-base sm:text-lg text-ink-muted font-normal leading-relaxed pt-1">
            Bridging technical systems engineering, production AI execution, and organizational capability inside large-scale enterprises — prioritizing working architectures and team fluency over superficial hype.
          </p>
        </div>

        {/* 2 Core Practice Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Pillar 1: Systems & Architectural Practice */}
          <div className="bg-white border border-border-light p-8 sm:p-10 rounded-[2px] shadow-2xs hover:border-ink transition-all flex flex-col justify-between corner-crosshairs">
            <div className="space-y-6">
              
              {/* Pillar Header */}
              <div className="flex items-center justify-between border-b border-border-light pb-4 font-mono text-xs">
                <span className="font-bold text-ink flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-signal-contrast" />
                  01 // SYSTEMS &amp; ARCHITECTURAL PRACTICE
                </span>
                <span className="text-ink-muted uppercase">MİMARİ &amp; DANIŞMANLIK</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-ink tracking-tight">
                  Systems Architecture &amp; Advisory
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed">
                  Direct architectural design and strategic execution for organizations modernizing legacy platforms, deploying autonomous agent workflows, and hardening mission-critical enterprise systems.
                </p>
              </div>

              {/* Offerings List */}
              <div className="space-y-4 pt-2">
                {architecturalPractices.map((practice, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-ink">
                        {practice.title}
                      </h4>
                      <p className="text-xs text-ink-muted leading-relaxed mt-0.5">
                        {practice.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Persona Alignment */}
              <div className="pt-4 border-t border-border-light font-mono text-[11px] text-ink-muted bg-canvas p-3 rounded-[1px]">
                <strong className="text-ink">Strategic Context:</strong> Providing CTOs, CIOs, and Enterprise Architects with battle-tested systems engineering, clean abstractions, and verifiable production delivery.
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-border-light flex items-center justify-between font-mono text-xs">
              <span className="text-emerald-700 font-semibold text-[11px]">
                ● Production Tested · SLA Guarded
              </span>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 font-bold text-ink hover:text-dark border-b border-ink pb-0.5 group"
              >
                <span>Initiate Architecture Discussion</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Technical Enablement & Workforce Adoption */}
          <div className="bg-white border border-border-light p-8 sm:p-10 rounded-[2px] shadow-2xs hover:border-ink transition-all flex flex-col justify-between corner-crosshairs">
            <div className="space-y-6">
              
              {/* Pillar Header */}
              <div className="flex items-center justify-between border-b border-border-light pb-4 font-mono text-xs">
                <span className="font-bold text-ink flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-signal-contrast" />
                  02 // ENABLEMENT &amp; WORKFORCE ADOPTION
                </span>
                <span className="text-ink-muted uppercase">EĞİTİM &amp; DÖNÜŞÜM</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-ink tracking-tight">
                  Technical Enablement &amp; Capability Building
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed">
                  Practical capability-building programs and workshops designed to bridge technical theory with measurable workplace productivity across engineering squads and business operations.
                </p>
              </div>

              {/* Offerings List */}
              <div className="space-y-4 pt-2">
                {enablementPractices.map((practice, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-ink">
                        {practice.title}
                      </h4>
                      <p className="text-xs text-ink-muted leading-relaxed mt-0.5">
                        {practice.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Persona Alignment */}
              <div className="pt-4 border-t border-border-light font-mono text-[11px] text-ink-muted bg-canvas p-3 rounded-[1px]">
                <strong className="text-ink">Strategic Context:</strong> Equipping Engineering Managers, L&amp;D Directors, and Business Unit Leaders with hands-on labs tailored to real enterprise workflows and security policies.
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-border-light flex items-center justify-between font-mono text-xs">
              <span className="text-emerald-700 font-semibold text-[11px]">
                ● Hands-On Labs · Toyota Culture
              </span>
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 font-bold text-ink hover:text-dark border-b border-ink pb-0.5 group"
              >
                <span>Inquire About Technical Enablement</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Executive Context Callout */}
        <div className="mt-10 p-6 bg-white border border-border-light rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs shadow-2xs">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-ink-muted shrink-0" />
            <div>
              <span className="font-bold text-ink block sm:inline">
                LOOKING FOR EXECUTIVE LEADERSHIP OR VERIFIED CREDENTIALS?
              </span>
              <span className="text-ink-muted block sm:inline sm:ml-2">
                Explore progressive enterprise roles at Toyota Türkiye, managed engineering squads, and formal academic degrees.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="#experience"
              className="font-bold text-ink hover:text-dark border-b border-ink pb-0.5"
            >
              Work Experience ↓
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-dark text-white rounded-[1px] hover:bg-neutral-800 transition-colors"
            >
              Download CV ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
