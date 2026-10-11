import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('TASK-13: Impact Metrics Proof Band & Personal Thesis Manifesto', () => {
  it('should render verified metrics without ungrounded claims in MetricBand.tsx', () => {
    const metricBandPath = path.resolve(
      process.cwd(),
      'src/features/profile/components/MetricBand.tsx'
    );
    const content = fs.readFileSync(metricBandPath, 'utf8');

    // Verified metrics from CV and design guide
    expect(content).toContain('8+');
    expect(content).toContain('FIRST');
    expect(content).toContain('200+');
    expect(content).toContain('6');
    expect(content).toContain('ENTERPRISE TECHNOLOGY');
    expect(content).toContain('PRODUCTION AI SYSTEM');
    expect(content).toContain('PROJECTS ANALYSED');

    // Must not contain fabricated hype percentages
    expect(content).not.toContain('%40 efficiency');
    expect(content).not.toContain('10x faster');
  });

  it('should render the full-screen academic foundation and education pillars in ManifestoSection.tsx', () => {
    const manifestoPath = path.resolve(
      process.cwd(),
      'src/features/profile/components/ManifestoSection.tsx'
    );
    const content = fs.readFileSync(manifestoPath, 'utf8');

    // Section 9 / Academic Foundation requirements
    expect(content).not.toContain('AI Is Not The Product.');
    expect(content).not.toContain('The Working System Is.');
    expect(content).not.toContain('Models alone do not transform organisations.');

    // Academic Foundation & Education
    expect(content).toContain('ACADEMIC FOUNDATION');
    expect(content).toContain('Ankara University');
    expect(content).toContain('Istanbul Kultur University');
    expect(content).toContain('Marmara University');
  });
});

