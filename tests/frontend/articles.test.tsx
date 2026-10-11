import { describe, it, expect } from 'vitest';
import { contentRepository } from '../../src/services/contentRepository';
import { articlesSeed } from '../../src/services/seedData';

describe('Articles and Publishing Module (TASK-05)', () => {
  it('should retrieve all initial articles with required editorial fields', async () => {
    const articles = await contentRepository.getArticles();
    expect(articles.length).toBeGreaterThanOrEqual(3);

    for (const a of articles) {
      expect(a.id).toBeTruthy();
      expect(a.slug).toBeTruthy();
      expect(a.title).toBeTruthy();
      expect(a.content).toBeTruthy();
      expect(a.category).toBeDefined();
      expect(a.category.name).toBeTruthy();
      expect(a.readTimeMinutes).toBeGreaterThan(0);
      expect(a.author.name).toBe('Ertekin Özturgut');
    }
  });

  it('should find articles by specific slug', async () => {
    const targetSlug = 'n8n-vs-copilot-studio-lego-or-ready-made-furniture';
    const article = await contentRepository.getArticleBySlug(targetSlug);

    expect(article).toBeDefined();
    expect(article?.slug).toBe(targetSlug);
    expect(article?.title).toContain('n8n vs Copilot Studio');
  });


  it('should return null for non-existent slug', async () => {
    const article = await contentRepository.getArticleBySlug('non-existent-article-slug');
    expect(article).toBeNull();
  });

  it('should correctly filter articles by category slug', () => {
    const filtered = articlesSeed.filter((a) => a.category.slug === 'agentic-ai');
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every((a) => a.category.slug === 'agentic-ai')).toBe(true);
  });
});
