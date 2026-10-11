import { describe, it, expect } from 'vitest';
import { siteProfileSeed, experienceSeed, caseStudiesSeed } from '../../src/services/seedData';
import * as fs from 'fs';
import * as path from 'path';

describe('Frontend Feature Slices (TASK-04)', () => {
  it('should have public barrel index.ts in each feature slice', () => {
    const featureSlices = ['profile', 'case-studies', 'experience', 'competencies', 'contact'];

    for (const feature of featureSlices) {
      const indexPath = path.resolve(process.cwd(), `src/features/${feature}/index.ts`);
      expect(fs.existsSync(indexPath)).toBe(true);
      const content = fs.readFileSync(indexPath, 'utf8');
      expect(content).toContain('export');
    }
  });

  it('should provide full profile information for HeroSection', () => {
    expect(siteProfileSeed.fullName).toBe('Ertekin Özturgut');
    expect(siteProfileSeed.currentRole).toBe('Next-Generation Digital Solutions Unit Supervisor');
    expect(siteProfileSeed.company).toContain('Toyota Türkiye');
    expect(siteProfileSeed.stats.kaizenAwards).toBe(5);
  });

  it('should have production case studies with quantified business outcomes', () => {
    expect(caseStudiesSeed.length).toBeGreaterThanOrEqual(4);
    const toyotaFirstAi = caseStudiesSeed.find((c) => c.slug === 'toyota-first-production-ai-system');
    expect(toyotaFirstAi).toBeDefined();
    expect(toyotaFirstAi?.measurableOutcomes.some((o) => o.metric === '70%' || o.metric === '%70')).toBe(true);
  });

  it('should map career experience chronology from latest to oldest', () => {
    expect(experienceSeed[0].isCurrent).toBe(true);
    expect(experienceSeed[0].role).toContain('Next-Generation Digital Solutions');
    expect(experienceSeed[experienceSeed.length - 1].company).toBe('BePro Networks');
  });
});
