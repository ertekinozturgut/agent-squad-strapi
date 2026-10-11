import { describe, it, expect } from 'vitest';
import { contentRepository } from '../../src/services/contentRepository';
import * as fs from 'fs';
import * as path from 'path';

describe('Backend Content Repository and Strapi v5 Schemas', () => {
  it('should fetch site profile with required executive fields', async () => {
    const profile = await contentRepository.getProfile();
    expect(profile.fullName).toBe('Ertekin Özturgut');
    expect(profile.company).toContain('Toyota Türkiye');
    expect(profile.stats.yearsExperience).toBeGreaterThanOrEqual(8);
    expect(profile.leadershipPhilosophy.principles.length).toBeGreaterThan(0);
  });

  it('should fetch full experience history aligned with CV', async () => {
    const experiences = await contentRepository.getExperiences();
    expect(experiences.length).toBeGreaterThanOrEqual(5);

    const current = experiences.find((e) => e.isCurrent);
    expect(current).toBeDefined();
    expect(current?.role).toContain('Next-Generation Digital Solutions');

    const toyotafirstAi = experiences.find((e) => e.role === 'Software Supervisor');
    expect(toyotafirstAi).toBeDefined();
    expect(
      toyotafirstAi?.achievements.some(
        (a) => a.toLowerCase().includes('first production') || a.includes('ilk üretim seviyesi')
      )
    ).toBe(true);
  });

  it('should fetch case studies with quantifiable metrics', async () => {
    const caseStudies = await contentRepository.getCaseStudies();
    expect(caseStudies.length).toBeGreaterThan(0);

    for (const cs of caseStudies) {
      expect(cs.slug).toBeTruthy();
      expect(cs.measurableOutcomes.length).toBeGreaterThan(0);
      expect(cs.architecturalSolution.length).toBeGreaterThan(0);
    }
  });

  it('should filter articles by category and search term correctly', async () => {
    const allArticles = await contentRepository.getArticles();
    expect(allArticles.length).toBeGreaterThan(0);

    const agenticArticles = await contentRepository.getArticles('agentic-ai');
    expect(agenticArticles.every((a) => a.category.slug === 'agentic-ai')).toBe(true);

    const searchResults = await contentRepository.getArticles(undefined, 'Copilot Studio');
    expect(searchResults.length).toBeGreaterThan(0);
    expect(searchResults.some((a) => a.title.includes('Copilot Studio'))).toBe(true);
  });

  it('should have valid Strapi v5 JSON schema definitions for all content types', () => {
    const collectionSchemas = [
      'strapi/src/api/article/content-types/article/schema.json',
      'strapi/src/api/category/content-types/category/schema.json',
      'strapi/src/api/case-study/content-types/case-study/schema.json',
      'strapi/src/api/experience/content-types/experience/schema.json',
      'strapi/src/api/competency/content-types/competency/schema.json',
      'strapi/src/api/education/content-types/education/schema.json',
      'strapi/src/api/award/content-types/award/schema.json',
      'strapi/src/api/knowledge-entry/content-types/knowledge-entry/schema.json',
      'strapi/src/api/page-visit/content-types/page-visit/schema.json',
    ];

    for (const s of collectionSchemas) {
      const fullPath = path.resolve(process.cwd(), s);
      expect(fs.existsSync(fullPath)).toBe(true);
      const content = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
      expect(content.kind).toBe('collectionType');
      expect(content.attributes).toBeDefined();
    }

    const singleSchemas = [
      'strapi/src/api/site-profile/content-types/site-profile/schema.json',
      'strapi/src/api/ai-assistant/content-types/ai-assistant/schema.json',
      'strapi/src/api/seo-setting/content-types/seo-setting/schema.json',
      'strapi/src/api/analytics-setting/content-types/analytics-setting/schema.json',
    ];

    for (const s of singleSchemas) {
      const fullPath = path.resolve(process.cwd(), s);
      expect(fs.existsSync(fullPath)).toBe(true);
      const content = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
      expect(content.kind).toBe('singleType');
      expect(content.attributes).toBeDefined();
    }
  });

  it('should have valid Strapi v5 component definitions', () => {
    const componentFiles = [
      'strapi/src/components/metrics/stat-item.json',
      'strapi/src/components/metrics/measurable-outcome.json',
      'strapi/src/components/shared/principle.json',
      'strapi/src/components/skills/skill-item.json',
      'strapi/src/components/credentials/language-item.json',
      'strapi/src/components/seo/page-seo.json',
      'strapi/src/components/seo/metadata.json',
    ];

    for (const c of componentFiles) {
      const fullPath = path.resolve(process.cwd(), c);
      expect(fs.existsSync(fullPath)).toBe(true);
      const content = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
      expect(content.collectionName).toBeDefined();
      expect(content.attributes).toBeDefined();
    }
  });
});
