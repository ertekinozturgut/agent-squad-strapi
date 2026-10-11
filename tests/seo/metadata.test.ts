import { describe, it, expect } from 'vitest';
import sitemap from '../../src/app/sitemap';
import robots from '../../src/app/robots';

describe('SEO Sitemap & Robots Generator (TASK-06)', () => {
  it('should generate valid sitemap entries with root, articles and all article slugs', async () => {
    const sitemapEntries = await sitemap();
    expect(sitemapEntries.length).toBeGreaterThanOrEqual(5);

    const urls = sitemapEntries.map((e) => e.url);
    expect(urls).toContain('https://ertekinozturgut.com');
    expect(urls).toContain('https://ertekinozturgut.com/about');
    expect(urls).toContain('https://ertekinozturgut.com/work');
    expect(urls).toContain('https://ertekinozturgut.com/insights');
    expect(urls).toContain('https://ertekinozturgut.com/articles');
    expect(
      urls.some((u) => u.includes('/articles/n8n-vs-copilot-studio-lego-or-ready-made-furniture'))
    ).toBe(true);
  });

  it('should generate compliant robots.txt configuration with sitemap reference', () => {
    const robotsConfig = robots();
    expect(robotsConfig.sitemap).toBe('https://ertekinozturgut.com/sitemap.xml');
    expect(robotsConfig.rules).toBeDefined();
  });
});
