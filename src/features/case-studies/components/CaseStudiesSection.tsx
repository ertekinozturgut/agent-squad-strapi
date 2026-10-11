'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Cpu, Database, Network, ShieldCheck } from 'lucide-react';
import { CaseStudyItem } from '../../../types/content.types';

export interface CaseStudiesSectionProps {
  caseStudies?: CaseStudyItem[];
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = () => {
  // Interactive state for Case Study 01 Tab
  const [cs1Tab, setCs1Tab] = useState<'flow' | 'telemetry'>('flow');
  // Interactive state for Case Study 04 Before/After Toggle
  const [cs4Mode, setCs4Mode] = useState<'after' | 'before'>('after');

  return (
    <section id="work" aria-label="Selected Systems" className="py-24 sm:py-32 bg-canvas bg-tech-grid border-b border-border-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-border-light gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 px-2 py-0.5 bg-signal/15 border border-signal/30 text-ink rounded-[2px]">
              <span className="w-1.5 h-1.5 bg-signal rounded-none animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold">
                SELECTED SYSTEMS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink uppercase">
              AI In Production.
            </h2>
          </div>
          <div className="font-mono text-xs text-ink-muted uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>[ 04 ARCHITECTURAL CASE STUDIES // VERIFIED IN PROD ]</span>
          </div>
        </div>

        {/* 4 Large Horizontal System Blocks */}
        <div className="space-y-12">
          
          {/* ========================================================================= */}
          {/* 01 / Enterprise AI Assistant */}
          {/* ========================================================================= */}
          <article className="border border-border-light bg-canvas-white p-6 sm:p-10 rounded-[2px] transition-all hover:border-ink/40 shadow-sm relative corner-crosshairs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Narrative & Metadata */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-signal-contrast bg-signal/30 px-2 py-0.5 rounded-[1px]">
                    01 / PRODUCTION AI
                  </span>
                  <span className="font-mono text-xs text-ink-muted uppercase">Toyota Türkiye</span>
                </div>

                <div className="space-y-1">
                  <span className="text-signal-contrast font-mono text-xs font-bold uppercase tracking-wider block">
                    PS 1st Place · Toyota AI-Powered Assistant
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                    Enterprise AI Assistant
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
                  Turning organisational knowledge into an AI-powered employee experience — integrating real-time internal documents, vector indices, and enterprise security guardrails.
                </p>

                {/* Metadata Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border-light font-mono text-xs">
                  <div>
                    <span className="block text-[10px] text-ink-faint uppercase tracking-wider">ROLE</span>
                    <span className="font-semibold text-ink">Architecture &amp; Delivery</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-ink-faint uppercase tracking-wider">SYSTEM</span>
                    <span className="font-semibold text-ink">RAG · LLM · Vectors</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-ink-faint uppercase tracking-wider">STATUS</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Production
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/work/enterprise-ai-assistant"
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-ink hover:text-dark border-b border-ink pb-0.5 group"
                  >
                    <span>Explore System</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Scale AI Architectural Interactive Workbench */}
              <div className="lg:col-span-6 bg-[#0E1013] text-white border border-white/15 p-6 rounded-[2px] shadow-lg">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-[10px]">
                  <span className="text-neutral-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-signal rounded-none animate-pulse" />
                    FLOW // RAG RETRIEVAL PIPELINE
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setCs1Tab('flow')}
                      className={`px-2 py-0.5 rounded-[1px] uppercase transition-colors ${
                        cs1Tab === 'flow' ? 'bg-white/20 text-signal font-bold' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Pipeline
                    </button>
                    <button
                      type="button"
                      onClick={() => setCs1Tab('telemetry')}
                      className={`px-2 py-0.5 rounded-[1px] uppercase transition-colors ${
                        cs1Tab === 'telemetry' ? 'bg-white/20 text-signal font-bold' : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Telemetry
                    </button>
                    <span className="text-emerald-400 font-semibold border-l border-white/10 pl-2">99.9% UPTIME</span>
                  </div>
                </div>

                {cs1Tab === 'flow' ? (
                  <div className="space-y-3 font-mono text-xs text-center">
                    <div className="py-2 bg-[#16181D] border border-white/10 rounded-[2px] text-white font-semibold flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                      EMPLOYEE
                    </div>
                    
                    {/* SVG Connector */}
                    <div className="flex justify-center">
                      <svg className="w-4 h-5 overflow-visible">
                        <line x1="2" y1="0" x2="2" y2="20" stroke="#B6FF39" strokeWidth="1.5" className="animate-flow-dash" />
                      </svg>
                    </div>
                    
                    <div className="py-2.5 bg-[#171A21] text-white rounded-[2px] font-bold border-2 border-signal flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(182,255,57,0.2)]">
                      <Cpu className="w-4 h-4 text-signal" />
                      AI ASSISTANT (ORCHESTRATION)
                    </div>

                    {/* SVG Split Connector */}
                    <div className="flex justify-center py-0.5">
                      <svg className="w-48 h-5 overflow-visible stroke-current fill-none">
                        <path d="M96 0 L96 4 L32 4 L32 20" stroke="#B6FF39" strokeWidth="1.5" className="animate-flow-dash" />
                        <path d="M96 0 L96 4 L160 4 L160 20" stroke="#B6FF39" strokeWidth="1.5" className="animate-flow-dash" />
                      </svg>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="py-2 bg-[#14161B] border border-white/10 rounded-[2px] text-white">
                        <span className="block font-bold text-signal">KNOWLEDGE</span>
                        <span className="text-[10px] text-neutral-400">Hybrid Vectors</span>
                      </div>
                      <div className="py-2 bg-[#14161B] border border-white/10 rounded-[2px] text-white">
                        <span className="block font-bold text-signal">INTERNAL APIS</span>
                        <span className="text-[10px] text-neutral-400">Auth &amp; RBAC</span>
                      </div>
                    </div>

                    {/* SVG Down Connector */}
                    <div className="flex justify-center">
                      <svg className="w-4 h-4 overflow-visible">
                        <line x1="2" y1="0" x2="2" y2="16" stroke="#666" strokeWidth="1.5" />
                      </svg>
                    </div>

                    <div className="py-2 bg-[#101216] border border-white/10 rounded-[2px] text-neutral-300 font-semibold text-[11px]">
                      ENTERPRISE DATA &amp; DOCUMENTS
                    </div>
                  </div>
                ) : (
                  <div className="p-3 bg-[#08090A] border border-white/10 rounded-[2px] font-mono text-[11px] space-y-2 text-neutral-300">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-neutral-500">P95 RETRIEVAL LATENCY</span>
                      <span className="text-signal font-bold">14 ms</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-neutral-500">VECTOR CHUNKS INDEXED</span>
                      <span className="text-white font-bold">42,000</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-neutral-500">HALLUCINATION RATE</span>
                      <span className="text-emerald-400 font-bold">0.00% (Guarded)</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-neutral-500">ACTIVE BUSINESS UNITS</span>
                      <span className="text-white font-bold">Sales, Operations, HR</span>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </article>


          {/* ========================================================================= */}
          {/* 02 / Kaizen Intelligence */}
          {/* ========================================================================= */}
          <article className="border border-border-light bg-canvas-white p-6 sm:p-10 rounded-[2px] transition-all hover:border-ink/40 shadow-sm relative corner-crosshairs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Narrative & Metadata */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-signal-contrast bg-signal/30 px-2 py-0.5 rounded-[1px]">
                    02 / KNOWLEDGE INTELLIGENCE
                  </span>
                  <span className="font-mono text-xs text-ink-muted uppercase">Global ALJ Kaizen</span>
                </div>

                <div className="space-y-1">
                  <span className="text-signal-contrast font-mono text-xs font-bold uppercase tracking-wider block">
                    Kaizen Intelligence · 200+ Projects Knowledge Base
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                    Turning 200+ Projects Into Organisational Intelligence
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
                  An AI-assisted system for analysing historical project videos, presentation decks, and technical documents — transforming unstructured data into actionable, searchable enterprise intelligence.
                </p>

                {/* Metadata Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border-light font-mono text-xs">
                  <div>
                    <span className="block text-[10px] text-ink-faint uppercase tracking-wider">ROLE</span>
                    <span className="font-semibold text-ink">Lead Architect</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-ink-faint uppercase tracking-wider">SYSTEM</span>
                    <span className="font-semibold text-ink">Multimodal · Vector DB</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-ink-faint uppercase tracking-wider">STATUS</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Production
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/work/kaizen-intelligence"
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-ink hover:text-dark border-b border-ink pb-0.5 group"
                  >
                    <span>Explore System</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Architectural Flow Diagram */}
              <div className="lg:col-span-6 bg-[#0E1013] text-white border border-white/15 p-6 rounded-[2px] shadow-lg">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-[10px]">
                  <span className="text-neutral-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-signal rounded-none animate-pulse" />
                    DATA FLOW // MULTIMODAL INGESTION
                  </span>
                  <span className="font-semibold text-signal">200+ REPOSITORIES</span>
                </div>

                <div className="space-y-3 font-mono text-xs text-center">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="py-2 bg-[#16181D] border border-white/10 rounded-[2px] text-[11px] text-neutral-200">
                      Video Recs
                    </div>
                    <div className="py-2 bg-[#16181D] border border-white/10 rounded-[2px] text-[11px] text-neutral-200">
                      Presentations
                    </div>
                    <div className="py-2 bg-[#16181D] border border-white/10 rounded-[2px] text-[11px] text-neutral-200">
                      Documentation
                    </div>
                  </div>

                  {/* SVG Connector */}
                  <div className="flex justify-center">
                    <svg className="w-4 h-5 overflow-visible">
                      <line x1="2" y1="0" x2="2" y2="20" stroke="#B6FF39" strokeWidth="1.5" className="animate-flow-dash" />
                    </svg>
                  </div>

                  <div className="py-2.5 bg-[#171A21] text-white rounded-[2px] font-bold border border-signal/60 flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(182,255,57,0.15)]">
                    <span className="w-1.5 h-1.5 bg-signal rounded-none" />
                    AI PROCESSING (Classification · Summarisation · Metadata)
                  </div>

                  {/* SVG Connector */}
                  <div className="flex justify-center">
                    <svg className="w-4 h-5 overflow-visible">
                      <line x1="2" y1="0" x2="2" y2="20" stroke="#B6FF39" strokeWidth="1.5" className="animate-flow-dash" />
                    </svg>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="py-2 bg-[#14161B] border border-white/10 rounded-[2px] text-white font-semibold flex items-center justify-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-signal" />
                      KNOWLEDGE LAYER
                    </div>
                    <div className="py-2 bg-[#14161B] border border-white/10 rounded-[2px] text-white font-semibold flex items-center justify-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-signal" />
                      AI AGENT
                    </div>
                  </div>

                  {/* SVG Connector */}
                  <div className="flex justify-center">
                    <svg className="w-4 h-4 overflow-visible">
                      <line x1="2" y1="0" x2="2" y2="16" stroke="#666" strokeWidth="1.5" />
                    </svg>
                  </div>

                  <div className="py-2 bg-[#101216] border border-white/10 rounded-[2px] text-signal font-bold text-xs uppercase tracking-wider">
                    ORGANISATIONAL INSIGHT &amp; DECISION SUPPORT
                  </div>
                </div>
              </div>

            </div>
          </article>


          {/* ========================================================================= */}
          {/* 03 / AI Lead Intelligence */}
          {/* ========================================================================= */}
          <article className="border border-border-light bg-canvas-white p-6 sm:p-10 rounded-[2px] transition-all hover:border-ink/40 shadow-sm relative corner-crosshairs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Narrative & Metadata */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-signal-contrast bg-signal/30 px-2 py-0.5 rounded-[1px]">
                    03 / AI + CRM
                  </span>
                  <span className="font-mono text-xs text-ink-muted uppercase">Dealer Network</span>
                </div>

                <div className="space-y-1">
                  <span className="text-signal-contrast font-mono text-xs font-bold uppercase tracking-wider block">
                    PS 2nd Place · My Lead Assistant
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                    From Incoming Lead to Intelligent Action
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
                  Extracting customer intent, urgency, and automotive interest in real-time from multi-channel inputs and routing with context directly to dealership sales consultants.
                </p>

                {/* Outcome Callout */}
                <div className="p-3 bg-canvas border border-border-light rounded-[2px]">
                  <span className="font-mono text-xs font-bold text-ink block">
                    BUSINESS OUTCOME: Faster qualification &amp; initial response within minutes across 60+ dealerships.
                  </span>
                </div>

                {/* Metadata Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border-light font-mono text-xs">
                  <div>
                    <span className="block text-[10px] text-ink-faint uppercase tracking-wider">ROLE</span>
                    <span className="font-semibold text-ink">CRM &amp; AI Lead</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-ink-faint uppercase tracking-wider">SYSTEM</span>
                    <span className="font-semibold text-ink">Dynamics 365 · LLM</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-ink-faint uppercase tracking-wider">STATUS</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Production
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/work/ai-lead-intelligence"
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-ink hover:text-dark border-b border-ink pb-0.5 group"
                  >
                    <span>Explore System</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Architectural Flow Diagram */}
              <div className="lg:col-span-6 bg-[#0E1013] text-white border border-white/15 p-6 rounded-[2px] shadow-lg">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-[10px]">
                  <span className="text-neutral-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-signal rounded-none animate-pulse" />
                    REAL-TIME PIPELINE // INTENT ROUTING
                  </span>
                  <span className="text-signal font-semibold">EVENT-DRIVEN</span>
                </div>

                <div className="space-y-3 font-mono text-xs text-center">
                  <div className="py-2 bg-[#16181D] border border-white/10 rounded-[2px] text-white font-semibold flex items-center justify-center gap-2">
                    <Network className="w-3.5 h-3.5 text-neutral-400" />
                    MULTI-CHANNEL LEAD SOURCES (Web · Chat · Call Center)
                  </div>

                  {/* SVG Connector */}
                  <div className="flex justify-center">
                    <svg className="w-4 h-5 overflow-visible">
                      <line x1="2" y1="0" x2="2" y2="20" stroke="#B6FF39" strokeWidth="1.5" className="animate-flow-dash" />
                    </svg>
                  </div>

                  <div className="py-2 bg-[#14161B] border border-white/10 rounded-[2px] text-neutral-200">
                    ENTERPRISE CRM (Dynamics 365 / Dataverse)
                  </div>

                  {/* SVG Connector */}
                  <div className="flex justify-center">
                    <svg className="w-4 h-5 overflow-visible">
                      <line x1="2" y1="0" x2="2" y2="20" stroke="#B6FF39" strokeWidth="1.5" className="animate-flow-dash" />
                    </svg>
                  </div>

                  <div className="py-2.5 bg-[#171A21] text-white rounded-[2px] font-bold border border-signal/60 flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(182,255,57,0.15)]">
                    <Cpu className="w-3.5 h-3.5 text-signal" />
                    AI INTERPRETATION (Intent · Priority · Vehicle Context)
                  </div>

                  {/* SVG Connector */}
                  <div className="flex justify-center">
                    <svg className="w-4 h-4 overflow-visible">
                      <line x1="2" y1="0" x2="2" y2="16" stroke="#666" strokeWidth="1.5" />
                    </svg>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="py-2 bg-[#101216] border border-white/10 rounded-[2px] text-neutral-200 text-[11px] font-semibold">
                      INTELLIGENT ROUTING
                    </div>
                    <div className="py-2 bg-[#101216] border border-white/10 rounded-[2px] text-signal text-[11px] font-semibold">
                      DEALER CONSULTANT
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </article>


          {/* ========================================================================= */}
          {/* 04 / Enterprise API Modernisation (With Interactive Before/After Toggle) */}
          {/* ========================================================================= */}
          <article className="border border-border-light bg-canvas-white p-6 sm:p-10 rounded-[2px] transition-all hover:border-ink/40 shadow-sm relative corner-crosshairs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Narrative & Metadata */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-signal-contrast bg-signal/30 px-2 py-0.5 rounded-[1px]">
                    04 / ENTERPRISE ARCHITECTURE
                  </span>
                  <span className="font-mono text-xs text-ink-muted uppercase">Platform Backbone</span>
                </div>

                <div className="space-y-1">
                  <span className="text-signal-contrast font-mono text-xs font-bold uppercase tracking-wider block">
                    Centralised API Architecture &amp; Integration Platform
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                    Simplifying Fragmented Enterprise Integrations
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
                  Before AI can safely act, the enterprise backend must be decoupled. Replacing spaghetti point-to-point connections with a unified, governed enterprise API layer that makes autonomous agents possible.
                </p>

                {/* Metadata Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border-light font-mono text-xs">
                  <div>
                    <span className="block text-[10px] text-ink-faint uppercase tracking-wider">ROLE</span>
                    <span className="font-semibold text-ink">Integration Architect</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-ink-faint uppercase tracking-wider">SYSTEM</span>
                    <span className="font-semibold text-ink">APIs · ESB · Microservices</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-ink-faint uppercase tracking-wider">STATUS</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Modernised
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/work/api-modernisation"
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-ink hover:text-dark border-b border-ink pb-0.5 group"
                  >
                    <span>Explore System</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Scale AI Interactive Before vs After Workbench */}
              <div className="lg:col-span-6 bg-[#0E1013] text-white border border-white/15 p-6 rounded-[2px] shadow-lg">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-[10px]">
                  <span className="text-neutral-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-signal rounded-none animate-pulse" />
                    BEFORE VS. AFTER // INTEGRATION TOPOLOGY
                  </span>
                  
                  {/* Interactive Toggle Switcher */}
                  <div className="flex items-center bg-[#16181D] border border-white/15 rounded-[2px] p-0.5">
                    <button
                      type="button"
                      onClick={() => setCs4Mode('before')}
                      className={`px-2 py-0.5 text-[10px] uppercase rounded-[1px] transition-colors ${
                        cs4Mode === 'before'
                          ? 'bg-red-900/60 text-red-300 font-bold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Before (Spaghetti)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCs4Mode('after')}
                      className={`px-2 py-0.5 text-[10px] uppercase rounded-[1px] transition-colors ${
                        cs4Mode === 'after'
                          ? 'bg-signal text-dark font-bold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      After (Modern)
                    </button>
                  </div>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  {/* Before State View */}
                  {cs4Mode === 'before' ? (
                    <div className="p-4 bg-red-950/25 border border-red-500/40 rounded-[2px] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">
                          BEFORE: FRAGMENTED POINT-TO-POINT
                        </span>
                        <span className="text-[10px] text-red-400">LATENCY: ~850ms</span>
                      </div>
                      <div className="text-[11px] text-neutral-300 leading-relaxed font-mono space-y-1">
                        <div>CRM ────► System A (ERP S/4HANA) <span className="text-red-400 text-[10px]">(Tight Coupling)</span></div>
                        <div>CRM ────► System B (Billing &amp; Finance) <span className="text-red-400 text-[10px]">(Direct DB Sync)</span></div>
                        <div>CRM ────► System C (Logistics Warehouse) <span className="text-red-400 text-[10px]">(Legacy Batch)</span></div>
                        <div>CRM ────► System D (Dealer DMS) <span className="text-red-400 text-[10px]">(Unthrottled)</span></div>
                      </div>
                      <p className="text-[10px] text-red-300/80 pt-1 border-t border-red-500/20">
                        Vulnerabilities: High failure blast radius, no central RBAC, impossible for autonomous AI agents to execute safe tool calls.
                      </p>
                    </div>
                  ) : (
                    /* After State View */
                    <div className="p-4 bg-emerald-950/20 border border-signal/40 rounded-[2px] space-y-3 shadow-[0_0_15px_rgba(182,255,57,0.1)]">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-signal uppercase tracking-wider flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-signal" />
                          AFTER: CENTRAL GOVERNED API LAYER
                        </span>
                        <span className="text-[10px] text-emerald-400 font-bold">LATENCY: 18ms</span>
                      </div>
                      
                      <div className="text-[12px] text-white font-semibold leading-relaxed py-1 flex items-center gap-2">
                        <span className="text-neutral-300">CRM</span>
                        <span className="text-signal">──►</span>
                        <span className="bg-signal text-dark px-2 py-0.5 font-mono text-xs font-bold rounded-[1px]">
                          UNIFIED API GATEWAY
                        </span>
                        <span className="text-signal">──►</span>
                        <span className="text-neutral-300">[ A, B, C, D ]</span>
                      </div>

                      {/* Animated data pulse */}
                      <div className="w-full bg-white/10 h-1 rounded-none overflow-hidden">
                        <div className="bg-signal h-full w-2/3 animate-flow-dash-fast" />
                      </div>

                      <span className="block text-[10px] text-neutral-300 mt-1 leading-relaxed">
                        Enabling zero-trust security, rate limiting, audit telemetry &amp; AI Agent tool call execution with sub-20ms response times.
                      </span>
                    </div>
                  )}

                  {/* Summary Bar */}
                  <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-2 border-t border-white/10">
                    <span>TOPOLOGY: {cs4Mode === 'before' ? 'POINT-TO-POINT MESH' : 'DECOUPLED EVENT-DRIVEN'}</span>
                    <span className="text-signal font-semibold">ZERO-TRUST ENFORCED</span>
                  </div>
                </div>
              </div>

            </div>
          </article>

        </div>

        {/* View All Systems Link */}
        <div className="mt-16 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-dark text-white rounded-[2px] font-mono text-xs uppercase tracking-wider hover:bg-black transition-colors"
          >
            <span>View All Selected Systems</span>
            <ArrowUpRight className="w-4 h-4 text-signal" />
          </Link>
        </div>

      </div>
    </section>
  );
};
