import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('TASK-08: Executive Tone and Consistent Messaging Validation', () => {
  it('should not contain informal "BLOG" tag in articles/page.tsx', () => {
    const articlesPagePath = path.resolve(process.cwd(), 'src/app/articles/page.tsx');
    const content = fs.readFileSync(articlesPagePath, 'utf8');

    expect(content).not.toContain('[YAYINLAR & BLOG]');
    expect(content).toContain('DÜŞÜNCE LİDERLİĞİ');
  });

  it('should have consistent Enterprise AI title in Navbar and Hero', () => {
    const navbarPath = path.resolve(process.cwd(), 'src/layouts/Navbar.tsx');
    const heroPath = path.resolve(
      process.cwd(),
      'src/features/profile/components/HeroSection.tsx'
    );

    const navbarContent = fs.readFileSync(navbarPath, 'utf8');
    const heroContent = fs.readFileSync(heroPath, 'utf8');

    expect(navbarContent).toContain('Enterprise AI & Solutions Lead');
    expect(heroContent).toContain('Enterprise AI & Next-Gen Digital Solutions Lead');
  });
});
