import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('TASK-14: Selected Systems — 4 Large Horizontal Blocks and Architecture Diagrams', () => {
  it('should render 4 production systems with architectural diagrams and metadata', () => {
    const caseStudiesPath = path.resolve(
      process.cwd(),
      'src/features/case-studies/components/CaseStudiesSection.tsx'
    );
    const content = fs.readFileSync(caseStudiesPath, 'utf8');

    // Section title
    expect(content).toContain('SELECTED SYSTEMS');
    expect(content).toContain('AI In Production.');

    // 01 Enterprise AI Assistant
    expect(content).toContain('01 / PRODUCTION AI');
    expect(content).toContain('Enterprise AI Assistant');
    expect(content).toContain('/work/enterprise-ai-assistant');
    expect(content).toContain('RAG RETRIEVAL PIPELINE');

    // 02 Kaizen Intelligence
    expect(content).toContain('02 / KNOWLEDGE INTELLIGENCE');
    expect(content).toContain('Turning 200+ Projects Into Organisational Intelligence');
    expect(content).toContain('/work/kaizen-intelligence');
    expect(content).toContain('MULTIMODAL INGESTION');

    // 03 AI Lead Intelligence
    expect(content).toContain('03 / AI + CRM');
    expect(content).toContain('From Incoming Lead to Intelligent Action');
    expect(content).toContain('/work/ai-lead-intelligence');
    expect(content).toContain('INTENT ROUTING');

    // 04 Enterprise API Modernisation
    expect(content).toContain('04 / ENTERPRISE ARCHITECTURE');
    expect(content).toContain('Simplifying Fragmented Enterprise Integrations');
    expect(content).toContain('/work/api-modernisation');
    expect(content).toContain('BEFORE VS. AFTER');
    expect(content).toContain('UNIFIED API GATEWAY');
  });
});
