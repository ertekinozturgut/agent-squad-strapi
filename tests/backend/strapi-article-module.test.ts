import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { articleService } from '../../strapi/src/api/article/services/article';
import {
  articleLifecycles,
  ArticleData,
} from '../../strapi/src/api/article/content-types/article/lifecycles';

describe('Strapi v5 Article & AI Assistant Management Modules', () => {
  it('should have valid Strapi v5 Article schema with source, platform, and interaction fields', () => {
    const schemaPath = path.resolve(
      process.cwd(),
      'strapi/src/api/article/content-types/article/schema.json'
    );
    expect(fs.existsSync(schemaPath)).toBe(true);

    const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
    expect(schema.kind).toBe('collectionType');
    expect(schema.attributes.source).toBeDefined();
    expect(schema.attributes.source.enum).toEqual(['site', 'medium', 'linkedin']);
    expect(schema.attributes.platform).toBeDefined();
    expect(schema.attributes.platform.enum).toEqual(['Site', 'Medium', 'LinkedIn', 'TeknoPost']);
    expect(schema.attributes.canonicalUrl).toBeDefined();
    expect(schema.attributes.readTimeMinutes).toBeDefined();
    expect(schema.attributes.clapsCount).toBeDefined();
  });

  it('should have valid Strapi v5 AI Assistant configuration schema', () => {
    const aiSchemaPath = path.resolve(
      process.cwd(),
      'strapi/src/api/ai-assistant/content-types/ai-assistant/schema.json'
    );
    expect(fs.existsSync(aiSchemaPath)).toBe(true);

    const schema = JSON.parse(fs.readFileSync(aiSchemaPath, 'utf8'));
    expect(schema.kind).toBe('singleType');
    expect(schema.attributes.model).toBeDefined();
    expect(schema.attributes.temperature).toBeDefined();
    expect(schema.attributes.guardrailsEnabled).toBeDefined();
    expect(schema.attributes.rateLimitPerMinute).toBeDefined();
  });

  it('should accurately calculate reading time based on 200 words per minute', () => {
    const text200Words = Array(200).fill('architecture').join(' ');
    const readTime1 = articleService.calculateReadTime(text200Words);
    expect(readTime1).toBe(1);

    const text500Words = Array(500).fill('system').join(' ');
    const readTime3 = articleService.calculateReadTime(text500Words);
    expect(readTime3).toBe(3);
  });

  it('should extract structured Table of Contents from Markdown content', () => {
    const markdown = `
# Title
## Section 1: Architectural Foundations
Some intro text.
### 1.1 Model Context Protocol
Deep dive here.
## Section 2: Production Governance
Governance details.
`;
    const toc = articleService.extractTableOfContents(markdown);
    expect(toc.length).toBe(3);
    expect(toc[0].title).toBe('Section 1: Architectural Foundations');
    expect(toc[0].level).toBe(2);
    expect(toc[1].title).toBe('1.1 Model Context Protocol');
    expect(toc[1].level).toBe(3);
    expect(toc[2].title).toBe('Section 2: Production Governance');
  });

  it('should enforce canonical URL rules by platform', () => {
    const validMedium = articleService.validateCanonicalUrl(
      'Medium',
      'https://medium.com/@ertekinozturgut/test-article'
    );
    expect(validMedium.isValid).toBe(true);

    const invalidMedium = articleService.validateCanonicalUrl(
      'Medium',
      'https://otherblog.com/test'
    );
    expect(invalidMedium.isValid).toBe(false);

    const validLinkedIn = articleService.validateCanonicalUrl(
      'LinkedIn',
      'https://www.linkedin.com/in/ertekinozturgut'
    );
    expect(validLinkedIn.isValid).toBe(true);
  });

  it('should automatically compute slug, reading time, and normalize platform in lifecycles beforeCreate', () => {
    const mockData: ArticleData = {
      title: 'Enterprise AI Agent Governance and MCP',
      content: 'This is a test content with multiple words representing an article about AI.',
      canonicalUrl: 'https://medium.com/@ertekinozturgut/sample',
    };

    const mockEvent = {
      action: 'beforeCreate',
      params: {
        data: mockData,
      },
    };

    articleLifecycles.beforeCreate(mockEvent);

    expect(mockData.slug).toBe('enterprise-ai-agent-governance-and-mcp');
    expect(mockData.readTimeMinutes).toBeGreaterThanOrEqual(1);
    expect(mockData.source).toBe('medium');
    expect(mockData.platform).toBe('Medium');
  });
});
