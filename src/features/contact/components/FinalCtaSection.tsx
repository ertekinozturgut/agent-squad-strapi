import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const FinalCtaSection: React.FC = () => {
  return (
    <section
      id="contact"
      aria-label="Final Call to Action"
      className="py-28 sm:py-40 bg-dark text-white border-t border-border-dark relative overflow-hidden bg-tech-grid-dark"
    >
      {/* Radial glow */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-signal/5 rounded-full blur-[130px] pointer-events-none" 
      />

      {/* Coordinate stamps */}
      <div className="absolute top-4 left-6 hidden lg:block font-mono text-[9px] uppercase tracking-widest text-neutral-600 select-none">
        [INITIATE_ENGAGEMENT // ISTANBUL_HQ]
      </div>
      <div className="absolute top-4 right-6 hidden lg:block font-mono text-[9px] uppercase tracking-widest text-neutral-600 select-none">
        [SECURE_CHANNEL: 256-BIT // RESPONSE &lt; 24H]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-8 px-2.5 py-1 bg-white/5 border border-white/10 rounded-[2px]">
          <span className="w-2 h-2 bg-signal rounded-none animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-300 font-semibold">
            {"WHAT'S NEXT?"}
          </span>
        </div>

        {/* Headline */}
        <div className="max-w-4xl space-y-6">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[0.98]">
            {"Let's Build Systems"} <br />
            <span className="text-neutral-400">That Make AI Useful.</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-widest pt-2">
            Enterprise AI · Architecture · Agents · Automation · Transformation
          </p>

          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl pt-1">
            Available for select enterprise systems advisory, architecture reviews, and technical enablement discussions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 max-w-3xl font-mono text-xs text-neutral-300">
            <div className="p-4 bg-white/5 border border-white/10 rounded-[2px] space-y-1.5">
              <span className="text-signal font-bold tracking-wider block uppercase">
                01 // CORPORATE ADVISORY &amp; TRAINING
              </span>
              <p className="text-neutral-400 font-sans text-xs leading-relaxed">
                Enterprise AI architecture reviews, Model Context Protocol (MCP) system design, and hands-on engineering squad enablement workshops.
              </p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-[2px] space-y-1.5">
              <span className="text-signal font-bold tracking-wider block uppercase">
                02 // EXECUTIVE &amp; TALENT ACQUISITION
              </span>
              <p className="text-neutral-400 font-sans text-xs leading-relaxed">
                Unit supervision, strategic technology leadership, enterprise platform transformations, and technical advisory board inquiries.
              </p>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-12 flex flex-wrap items-center gap-5 pt-4">
          <a
            href="https://www.linkedin.com/in/ertekinozturgut"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="signal"
              rightIcon={<ArrowUpRight className="w-4 h-4 text-dark" />}
            >
              CONNECT ON LINKEDIN
            </Button>
          </a>

          <a
            href="mailto:ertekinozturgut@gmail.com"
            className="inline-flex items-center gap-2 font-mono text-sm px-6 py-3.5 border border-white/20 hover:border-white text-white rounded-[2px] transition-colors uppercase tracking-wider bg-white/5"
          >
            <Mail className="w-4 h-4 text-signal" />
            <span>ertekinozturgut@gmail.com</span>
          </a>
        </div>

      </div>
    </section>
  );
};
