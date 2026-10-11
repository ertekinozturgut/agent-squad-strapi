import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Scale AI Dynamic Interactions & Animation Systems', () => {
  it('should include SVG flow dash and tech-grid animations in globals.css', () => {
    const cssPath = path.resolve(process.cwd(), 'src/app/globals.css');
    const content = fs.readFileSync(cssPath, 'utf8');

    expect(content).toContain('.bg-tech-grid');
    expect(content).toContain('.bg-tech-grid-dark');
    expect(content).toContain('@keyframes flowDash');
    expect(content).toContain('.animate-flow-dash');
    expect(content).toContain('@keyframes signalPulse');
    expect(content).toContain('.corner-crosshairs');
  });

  it('should support interactive tabs and simulation in HeroSection.tsx', () => {
    const heroPath = path.resolve(
      process.cwd(),
      'src/features/profile/components/HeroSection.tsx'
    );
    const content = fs.readFileSync(heroPath, 'utf8');

    expect(content).toContain('01 // Pipeline Flow');
    expect(content).toContain('02 // Telemetry');
    expect(content).toContain('03 // MCP Schema');
    expect(content).toContain('TEST QUERY');
    expect(content).toContain('animate-flow-dash');
    expect(content).toContain('nodeDetails');
  });

  it('should support Before vs After interactive toggle in CaseStudiesSection.tsx', () => {
    const csPath = path.resolve(
      process.cwd(),
      'src/features/case-studies/components/CaseStudiesSection.tsx'
    );
    const content = fs.readFileSync(csPath, 'utf8');

    expect(content).toContain('cs4Mode');
    expect(content).toContain('Before (Spaghetti)');
    expect(content).toContain('After (Modern)');
    expect(content).toContain('UNIFIED API GATEWAY');
    expect(content).toContain('animate-flow-dash');
  });

  it('should support active phase selection and deliverable bar in ProcessStepper.tsx', () => {
    const stepperPath = path.resolve(
      process.cwd(),
      'src/features/competencies/components/ProcessStepper.tsx'
    );
    const content = fs.readFileSync(stepperPath, 'utf8');

    expect(content).toContain('selectedStep');
    expect(content).toContain('ACTIVE PHASE DELIVERABLE');
    expect(content).toContain('QUALITY GATE READY');
  });
});
