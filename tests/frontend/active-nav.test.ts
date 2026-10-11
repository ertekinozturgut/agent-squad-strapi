import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('TASK-09: Active Nav State and URL Search Params Sync', () => {
  it('should use usePathname in Navbar.tsx for active route detection', () => {
    const navbarPath = path.resolve(process.cwd(), 'src/layouts/Navbar.tsx');
    const content = fs.readFileSync(navbarPath, 'utf8');

    expect(content).toContain('usePathname');
    expect(content).toContain('isLinkActive');
    expect(content).toContain('aria-current');
  });

  it('should synchronize search and category with URL params in ArticleListContainer', () => {
    const containerPath = path.resolve(
      process.cwd(),
      'src/features/articles/components/ArticleListContainer.tsx'
    );
    const content = fs.readFileSync(containerPath, 'utf8');

    expect(content).toContain('useSearchParams');
    expect(content).toContain('window.history.replaceState');
    expect(content).toContain('params.set');
  });

  it('should wrap ArticleListContainer in Suspense on articles page', () => {
    const articlesPagePath = path.resolve(process.cwd(), 'src/app/articles/page.tsx');
    const content = fs.readFileSync(articlesPagePath, 'utf8');

    expect(content).toContain('Suspense');
    expect(content).toContain('<ArticleListContainer');
  });
});
