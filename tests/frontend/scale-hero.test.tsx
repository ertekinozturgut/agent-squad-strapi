import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('TASK-12: Minimalist Header & System Architecture Hero (Scale AI Pattern)', () => {
  it('should render minimalist uppercase brand and core navigation in Navbar.tsx', () => {
    const navbarPath = path.resolve(process.cwd(), 'src/layouts/Navbar.tsx');
    const content = fs.readFileSync(navbarPath, 'utf8');

    expect(content).toContain('ERTEKIN OZTURGUT');
    expect(content).toContain('Work');
    expect(content).not.toContain('Expertise');
    expect(content).toContain('About');
    expect(content).toContain('Insights');
    expect(content).toContain('LinkedIn');
    expect(content).toContain('Resume');

  });

  it('should render oversized headline and architectural storyline in HeroSection.tsx', () => {
    const heroPath = path.resolve(
      process.cwd(),
      'src/features/profile/components/HeroSection.tsx'
    );
    const content = fs.readFileSync(heroPath, 'utf8');

    // Section 6 Hero requirements
    expect(content).toContain('ENTERPRISE AI / SYSTEMS / TRANSFORMATION');
    expect(content).toContain('Building AI Systems');
    expect(content).toContain('Real Enterprise.');
    expect(content).toContain('Explore Selected Work');
    expect(content).toContain('Istanbul, Türkiye');
    expect(content).toContain('Agentic AI');

    // Section 7 System Architecture visual nodes
    expect(content).toContain('PEOPLE');
    expect(content).toContain('AI AGENT');
    expect(content).toContain('KNOWLEDGE');
    expect(content).toContain('TOOLS');
    expect(content).toContain('ENTERPRISE DATA');
    expect(content).toContain('ENTERPRISE SYSTEMS');
  });
});
