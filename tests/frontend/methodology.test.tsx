import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('TASK-15: How I Build (3 Layers) & Process Stepper (5 Steps)', () => {
  it('should render the 3 operational layers with Adoption emphasized in HowIBuildSection.tsx', () => {
    const howPath = path.resolve(
      process.cwd(),
      'src/features/competencies/components/HowIBuildSection.tsx'
    );
    const content = fs.readFileSync(howPath, 'utf8');

    // Section 15 requirements
    expect(content).toContain('HOW I BUILD');
    expect(content).toContain('Three Layers.');
    expect(content).toContain('One Working System.');
    expect(content).toContain('ARCHITECTURE');
    expect(content).toContain('DELIVERY');
    expect(content).toContain('ADOPTION');
    expect(content).toContain('DIFFERENTIATOR');
  });

  it('should render the 5-phase execution flow in ProcessStepper.tsx', () => {
    const stepperPath = path.resolve(
      process.cwd(),
      'src/features/competencies/components/ProcessStepper.tsx'
    );
    const content = fs.readFileSync(stepperPath, 'utf8');

    // Section 16 requirements
    expect(content).toContain('From Business Problem');
    expect(content).toContain('To Production AI.');
    expect(content).toContain('DISCOVER');
    expect(content).toContain('DESIGN');
    expect(content).toContain('BUILD');
    expect(content).toContain('DEPLOY');
    expect(content).toContain('ADOPT');
  });
});
