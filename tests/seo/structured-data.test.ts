import { describe, it, expect } from 'vitest';
import { siteProfileSeed, articlesSeed, seoConfigSeed } from '../../src/services/seedData';

describe('Structured Data & Schema.org JSON-LD (TASK-06)', () => {
  it('should validate Person schema properties for Ertekin Özturgut', () => {
    const profile = siteProfileSeed;

    expect(profile.fullName).toBe('Ertekin Özturgut');
    expect(profile.currentRole).toBe('Next-Generation Digital Solutions Unit Supervisor');
    expect(profile.company).toBe('Toyota Türkiye Pazarlama ve Satış A.Ş.');
    expect(profile.linkedinUrl).toContain('linkedin.com/in/ertekinozturgut');
    expect(profile.mediumUrl).toContain('medium.com/@ertekinozturgut');
    expect(profile.githubUrl).toContain('github.com/ertekinozturgut');
  });

  it('should validate Article schema properties for editorial publications', () => {
    for (const article of articlesSeed) {
      expect(article.title).toBeTruthy();
      expect(article.excerpt).toBeTruthy();
      expect(article.publishedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(article.author.name).toBe('Ertekin Özturgut');
      expect(article.tags.length).toBeGreaterThan(0);
    }
  });

  it('should validate WebSite and Breadcrumb schema properties', () => {
    expect(seoConfigSeed.canonicalBaseUrl).toBe('https://ertekinozturgut.com');
    expect(seoConfigSeed.pages.length).toBeGreaterThanOrEqual(5);

    const homePage = seoConfigSeed.pages.find((p) => p.path === '/');
    expect(homePage).toBeDefined();
    expect(homePage?.title).toContain('Ertekin Özturgut');
  });
});
