import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('TASK-18: Multi-Page Architecture & Route Hierarchy (/work, /work/[slug], /expertise, /about, /insights)', () => {
  it('should render work overview page in src/app/work/page.tsx', () => {
    const workPath = path.resolve(process.cwd(), 'src/app/work/page.tsx');
    expect(fs.existsSync(workPath)).toBe(true);
    const content = fs.readFileSync(workPath, 'utf8');

    expect(content).toContain('Selected Systems');
    expect(content).toContain('PORTFOLIO OF SYSTEMS');
    expect(content).toContain('<CaseStudiesSection');
  });

  it('should support the 4 deep case study routes and Section 30 layout in src/app/work/[slug]/page.tsx', () => {
    const slugPath = path.resolve(process.cwd(), 'src/app/work/[slug]/page.tsx');
    expect(fs.existsSync(slugPath)).toBe(true);
    const content = fs.readFileSync(slugPath, 'utf8');

    // Section 30 Page Structure
    expect(content).toContain('THE CHALLENGE');
    expect(content).toContain('THE SYSTEM ARCHITECTURE');
    expect(content).toContain('HOW IT WORKS');
    expect(content).toContain('MY RESPONSIBILITIES');
    expect(content).toContain('OUTCOME & IMPACT');

    // Key slugs in static generation
    expect(content).toContain('enterprise-ai-assistant');
    expect(content).toContain('kaizen-intelligence');
    expect(content).toContain('ai-lead-intelligence');
    expect(content).toContain('api-modernisation');
  });

  it('should verify /expertise page has been removed per user request', () => {
    const expPath = path.resolve(process.cwd(), 'src/app/expertise/page.tsx');
    expect(fs.existsSync(expPath)).toBe(false);
  });


  it('should render career narrative and academic background in src/app/about/page.tsx', () => {
    const aboutPath = path.resolve(process.cwd(), 'src/app/about/page.tsx');
    expect(fs.existsSync(aboutPath)).toBe(true);
    const content = fs.readFileSync(aboutPath, 'utf8');

    expect(content).toContain('About Ertekin');
    expect(content).toContain('Enterprise AI & Digital Transformation Leader who can still build');
    expect(content).toContain('Education');
    expect(content).toContain('Ankara University');
  });

  it('should render editorial insights in src/app/insights/page.tsx', () => {
    const insightsPath = path.resolve(process.cwd(), 'src/app/insights/page.tsx');
    expect(fs.existsSync(insightsPath)).toBe(true);
    const content = fs.readFileSync(insightsPath, 'utf8');

    expect(content).toContain('Insights');
    expect(content).toContain('THINKING // FIELD NOTES');
    expect(content).toContain('<ArticleListContainer');
  });
});
