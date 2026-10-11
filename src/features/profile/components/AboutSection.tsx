import React from 'react';
import { ArrowUpRight, MapPin, Briefcase } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" aria-label="About Ertekin" className="py-24 sm:py-32 bg-canvas-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 bg-signal rounded-none" />
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
            ABOUT ERTEKIN // BACKGROUND &amp; PERSPECTIVE
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink uppercase leading-none mb-8">
          About Ertekin
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Storyline */}
          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
            <h3 className="text-xl sm:text-2xl text-ink font-semibold leading-snug">
              Enterprise AI &amp; Digital Transformation Leader who can still build.
            </h3>

            <p>
              My trajectory in technology spans over eight years of hands-on software engineering, enterprise CRM architecture, and digital process automation. Prior to leading digital solutions at Toyota Türkiye, I served as Software Team Lead at Bakiciburada.com and IT Consultant at BePro Networks, building high-availability transactional backbones, distributed .NET microservices, and directing cross-functional engineering squads.
            </p>

            <p>
              As Next-Generation Digital Solutions Unit Supervisor at Toyota Türkiye, I lead the evaluation, governance, and delivery of production-grade AI systems and intelligent workflows. From delivering the organization’s first live AI assistant to architecting agentic systems with the Model Context Protocol (MCP), my focus is simple: deploying AI where it generates verified operational leverage, and choosing deterministic engineering everywhere else.
            </p>

            <div className="pt-2">
              <div className="border-l-2 border-signal pl-4 py-2 text-ink font-mono text-xs sm:text-sm uppercase tracking-wider bg-canvas rounded-r-[2px] border border-border-light">
                Software Engineering → Enterprise Platforms → Architecture → Production AI → AI Transformation
              </div>
            </div>
          </div>

          {/* Right Column: Quick Facts Sidebar */}
          <div className="lg:col-span-4 bg-white border border-border-light p-6 rounded-[2px] space-y-5 font-mono text-xs shadow-2xs corner-crosshairs">
            <div className="border-b border-border-light pb-3">
              <span className="text-[10px] text-ink-faint uppercase tracking-wider block">CURRENT POST</span>
              <span className="font-bold text-ink flex items-center gap-1.5 mt-0.5">
                <Briefcase className="w-3.5 h-3.5 text-signal-contrast" />
                Unit Supervisor
              </span>
              <span className="block text-ink-muted text-[11px] mt-0.5">
                Toyota Türkiye Pazarlama ve Satış A.Ş.
              </span>
            </div>

            <div className="border-b border-border-light pb-3">
              <span className="text-[10px] text-ink-faint uppercase tracking-wider block">LOCATION</span>
              <span className="font-bold text-ink flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-ink-muted" />
                Istanbul, Türkiye
              </span>
            </div>

            <div className="border-b border-border-light pb-3">
              <span className="text-[10px] text-ink-faint uppercase tracking-wider block">PRIMARY CAPABILITIES</span>
              <span className="font-bold text-ink">
                Agentic AI · CRM Architecture · Corporate AI Enablement
              </span>
            </div>

            <div className="border-b border-border-light pb-3">
              <span className="text-[10px] text-ink-faint uppercase tracking-wider block">EXPERIENCE</span>
              <span className="font-bold text-ink">8+ Years Enterprise Technology</span>
            </div>

            <div className="pt-2">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button size="sm" variant="dark" className="w-full justify-center" rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                  Download Resume / CV
                </Button>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
