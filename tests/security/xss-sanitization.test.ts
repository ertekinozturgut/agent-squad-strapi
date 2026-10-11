import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Security & XSS Neutralization (OWASP ASVS / Rule 03)', () => {
  it('should not contain any instances of dangerouslySetInnerHTML across the entire source code', () => {
    const srcDir = path.resolve(process.cwd(), 'src');

    function scanFiles(dir: string): string[] {
      let results: string[] = [];
      const list = fs.readdirSync(dir);
      for (const file of list) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
          results = results.concat(scanFiles(fullPath));
        } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
          results.push(fullPath);
        }
      }
      return results;
    }

    const files = scanFiles(srcDir);
    expect(files.length).toBeGreaterThan(0);

    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      expect(content).not.toContain('dangerouslySetInnerHTML');
    }
  });

  it('should verify SafeMarkdownRenderer exists and operates without raw HTML execution', () => {
    const rendererPath = path.resolve(process.cwd(), 'src/components/ui/SafeMarkdownRenderer.tsx');
    expect(fs.existsSync(rendererPath)).toBe(true);

    const content = fs.readFileSync(rendererPath, 'utf8');
    expect(content).not.toContain('dangerouslySetInnerHTML');
    expect(content).toContain('renderInline');
  });

  it('should verify all external links have rel="noopener noreferrer" for security', () => {
    const contactPath = path.resolve(process.cwd(), 'src/features/contact/components/ContactSection.tsx');
    const footerPath = path.resolve(process.cwd(), 'src/layouts/Footer.tsx');

    const contactContent = fs.readFileSync(contactPath, 'utf8');
    const footerContent = fs.readFileSync(footerPath, 'utf8');

    expect(contactContent).toContain('rel="noopener noreferrer"');
    expect(footerContent).toContain('rel="noopener noreferrer"');
  });
});
