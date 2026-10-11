'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Search, Building2, Filter, Award } from 'lucide-react';
import { CaseStudyItem } from '../../../types/content.types';

export interface WorkProjectCatalogProps {
  caseStudies: CaseStudyItem[];
}

export const WorkProjectCatalog: React.FC<WorkProjectCatalogProps> = ({ caseStudies }) => {
  const [selectedCompany, setSelectedCompany] = useState<string>('all');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Domain categorization helper
  const getDomainForStudy = (cs: CaseStudyItem): string => {
    const text = (cs.title + ' ' + cs.technologies.join(' ') + ' ' + cs.executiveSummary).toLowerCase();
    if (text.includes('ai') || text.includes('agent') || text.includes('rag') || text.includes('copilot') || text.includes('multimodal')) {
      return 'ai-agents';
    }
    if (text.includes('api') || text.includes('soap') || text.includes('rest') || text.includes('integration') || text.includes('gateway')) {
      return 'api-integrations';
    }
    if (text.includes('crm') || text.includes('dynamics') || text.includes('omnichannel') || text.includes('migration')) {
      return 'crm-platforms';
    }
    if (text.includes('kaizen') || text.includes('marathon') || text.includes('award') || text.includes('1st place')) {
      return 'awards-kaizen';
    }
    return 'engineering';
  };

  const filteredProjects = useMemo(() => {
    return caseStudies.filter((cs) => {
      // Company match
      if (selectedCompany !== 'all') {
        if (selectedCompany === 'toyota' && !cs.organization.includes('Toyota')) return false;
        if (selectedCompany === 'bakici' && !cs.organization.includes('Bakici')) return false;
        if (selectedCompany === 'bepro' && !cs.organization.includes('BePro')) return false;
      }

      // Domain match
      if (selectedDomain !== 'all') {
        const domain = getDomainForStudy(cs);
        if (selectedDomain !== domain) return false;
      }

      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const fullContent = (
          cs.title +
          ' ' +
          cs.organization +
          ' ' +
          cs.role +
          ' ' +
          cs.period +
          ' ' +
          cs.executiveSummary +
          ' ' +
          cs.technologies.join(' ')
        ).toLowerCase();
        if (!fullContent.includes(query)) return false;
      }

      return true;
    });
  }, [caseStudies, selectedCompany, selectedDomain, searchQuery]);

  // Destination route resolver: handles primary test routes and direct slugs
  const getSlugLink = (slug: string) => {
    if (slug === 'toyota-first-production-ai-system') return '/work/enterprise-ai-assistant';
    if (slug === 'kaizen-marathon-multimodal-knowledge-base') return '/work/kaizen-intelligence';
    if (slug === 'dynamics-365-agentic-lead-intelligence') return '/work/ai-lead-intelligence';
    return `/work/${slug}`;
  };

  return (
    <div className="space-y-8">
      {/* Controls Bar: Search & Company Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 sm:p-6 bg-white border border-border-light rounded-[2px] shadow-2xs">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-ink-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by keyword, stack or title..."
            className="w-full bg-canvas border border-border-light pl-9 pr-4 py-2 font-mono text-xs text-ink placeholder:text-ink-faint rounded-[1px] focus:outline-none focus:border-ink transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[10px] text-ink-muted hover:text-ink"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Company Filters */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          <span className="text-[10px] text-ink-faint uppercase mr-1 flex items-center gap-1">
            <Building2 className="w-3 h-3 text-ink-muted" />
            COMPANY:
          </span>
          <button
            onClick={() => setSelectedCompany('all')}
            className={`px-3 py-1 rounded-[1px] transition-colors ${
              selectedCompany === 'all'
                ? 'bg-ink text-white font-bold'
                : 'bg-canvas border border-border-light text-ink-muted hover:text-ink'
            }`}
          >
            All ({caseStudies.length})
          </button>
          <button
            onClick={() => setSelectedCompany('toyota')}
            className={`px-3 py-1 rounded-[1px] transition-colors ${
              selectedCompany === 'toyota'
                ? 'bg-ink text-white font-bold'
                : 'bg-canvas border border-border-light text-ink-muted hover:text-ink'
            }`}
          >
            Toyota Türkiye (11)
          </button>
          <button
            onClick={() => setSelectedCompany('bakici')}
            className={`px-3 py-1 rounded-[1px] transition-colors ${
              selectedCompany === 'bakici'
                ? 'bg-ink text-white font-bold'
                : 'bg-canvas border border-border-light text-ink-muted hover:text-ink'
            }`}
          >
            Bakiciburada.com (1)
          </button>
          <button
            onClick={() => setSelectedCompany('bepro')}
            className={`px-3 py-1 rounded-[1px] transition-colors ${
              selectedCompany === 'bepro'
                ? 'bg-ink text-white font-bold'
                : 'bg-canvas border border-border-light text-ink-muted hover:text-ink'
            }`}
          >
            BePro Networks (1)
          </button>
        </div>
      </div>

      {/* Domain Focus Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border-light pb-4 font-mono text-xs">
        <span className="text-[10px] text-ink-faint uppercase tracking-wider mr-2 flex items-center gap-1">
          <Filter className="w-3 h-3 text-ink-muted" />
          FOCUS DOMAIN:
        </span>
        {[
          { id: 'all', label: 'All Disciplines' },
          { id: 'ai-agents', label: 'Production AI & Agents' },
          { id: 'crm-platforms', label: 'CRM & Enterprise Platforms' },
          { id: 'api-integrations', label: 'API Architecture & Modernisation' },
          { id: 'awards-kaizen', label: 'Kaizen Awards & Problem-Solving' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedDomain(tab.id)}
            className={`px-2.5 py-1 text-xs rounded-[1px] transition-all ${
              selectedDomain === tab.id
                ? 'bg-signal/30 text-ink font-bold border border-signal'
                : 'text-ink-muted hover:text-ink hover:bg-canvas'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Results Count Counter */}
      <div className="flex items-center justify-between font-mono text-xs text-ink-muted">
        <span>Showing {filteredProjects.length} of {caseStudies.length} verified projects</span>
        {searchQuery && (
          <span className="text-signal-contrast font-medium">Filtered by &quot;{searchQuery}&quot;</span>
        )}
      </div>

      {/* Grid of Verified Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((cs, idx) => {
          const isAwardWinning = cs.title.toLowerCase().includes('1st place') || cs.title.toLowerCase().includes('2nd place') || cs.title.toLowerCase().includes('represented');
          return (
            <div
              key={cs.id}
              className="bg-white border border-border-light p-6 sm:p-7 rounded-[2px] shadow-2xs hover:border-ink transition-all flex flex-col justify-between group corner-crosshairs"
            >
              <div className="space-y-4">
                {/* Header: Sequence, Org & Period */}
                <div className="flex items-center justify-between border-b border-border-light pb-3 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-signal rounded-none" />
                    <span className="font-bold text-ink">
                      {String(idx + 1).padStart(2, '0')} // {cs.organization}
                    </span>
                  </div>
                  <span className="text-ink-muted text-[11px]">{cs.period}</span>
                </div>

                {/* Role / Leadership Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-ink-faint">
                    ROLE: <strong className="text-ink font-semibold">{cs.role}</strong>
                  </span>
                  {isAwardWinning && (
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-signal-contrast bg-signal/25 px-1.5 py-0.5 rounded-[1px] font-bold">
                      <Award className="w-3 h-3" />
                      HONOR
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-ink group-hover:text-signal-contrast transition-colors leading-snug">
                  {cs.title}
                </h3>

                {/* Authentic LinkedIn Summary */}
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                  {cs.executiveSummary}
                </p>

                {/* Technology Stack Pills */}
                <div className="pt-1 flex flex-wrap gap-1.5">
                  {cs.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] bg-canvas border border-border-light px-2 py-0.5 rounded-[1px] text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom: Measurable Outcome & Inspect Link */}
              <div className="pt-4 mt-6 border-t border-border-light/60 flex items-center justify-between font-mono text-xs">
                {cs.measurableOutcomes[0] ? (
                  <span className="font-semibold text-emerald-700 text-[11px] truncate max-w-[200px]">
                    ● {cs.measurableOutcomes[0].metric} — {cs.measurableOutcomes[0].label}
                  </span>
                ) : (
                  <span className="text-ink-muted text-[11px]">Verified Production System</span>
                )}
                <Link
                  href={getSlugLink(cs.slug)}
                  className="inline-flex items-center gap-1 font-bold text-ink hover:text-dark border-b border-ink pb-0.5 group-hover:translate-x-0.5 transition-all shrink-0 ml-2"
                >
                  <span>Inspect System</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="p-12 text-center bg-white border border-border-light rounded-[2px] space-y-3 font-mono text-xs">
          <p className="text-ink font-semibold">No systems matched your search criteria.</p>
          <button
            onClick={() => {
              setSelectedCompany('all');
              setSelectedDomain('all');
              setSearchQuery('');
            }}
            className="text-signal-contrast underline underline-offset-2"
          >
            Reset all filters
          </button>
        </div>
      )}
    </div>
  );
};
