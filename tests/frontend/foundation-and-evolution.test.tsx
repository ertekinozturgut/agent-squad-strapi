import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('TASK-16: Technical Foundation, Career Evolution & Leadership Pillars', () => {
  it('should render the clean 4-column tech table without logo clutter in TechnicalFoundationTable.tsx', () => {
    const tablePath = path.resolve(
      process.cwd(),
      'src/features/competencies/components/TechnicalFoundationTable.tsx'
    );
    const content = fs.readFileSync(tablePath, 'utf8');

    // Section 17 requirements
    expect(content).toContain('Technical Foundation');
    expect(content).toContain('AI SYSTEMS');
    expect(content).toContain('ENTERPRISE');
    expect(content).toContain('ENGINEERING');
    expect(content).toContain('AUTOMATION');
    expect(content).toContain('Large Language Models');
    expect(content).toContain('Microsoft Dynamics 365');
    expect(content).toContain('.NET / C#');
    expect(content).toContain('n8n');
  });

  it('should render historical progression from 2017 to 2026 in CareerEvolutionSection.tsx', () => {
    const evolutionPath = path.resolve(
      process.cwd(),
      'src/features/experience/components/CareerEvolutionSection.tsx'
    );
    const content = fs.readFileSync(evolutionPath, 'utf8');

    // Section 18 requirements
    expect(content).toContain('THE FOUNDATION');
    expect(content).toContain('Before AI,');
    expect(content).toContain('I Built The Systems');
    expect(content).toContain('AI Depends On.');
    expect(content).toContain('2017');
    expect(content).toContain('2019');
    expect(content).toContain('2021');
    expect(content).toContain('2024');
    expect(content).toContain('2025');
    expect(content).toContain('2026');
    expect(content).toContain('SOFTWARE ENGINEERING');
    expect(content).toContain('PRODUCTION AI');
    expect(content).toContain('AGENTIC AI & TRANSFORMATION');
  });

  it('should render 4 leadership pillars in LeadershipSection.tsx', () => {
    const leadershipPath = path.resolve(
      process.cwd(),
      'src/features/experience/components/LeadershipSection.tsx'
    );
    const content = fs.readFileSync(leadershipPath, 'utf8');

    // Section 19 requirements
    expect(content).toContain('Building AI Systems');
    expect(content).toContain('Is Only Half The Challenge.');
    expect(content).toContain('STRATEGY');
    expect(content).toContain('GOVERNANCE');
    expect(content).toContain('DELIVERY');
    expect(content).toContain('ENABLEMENT');
  });
});
