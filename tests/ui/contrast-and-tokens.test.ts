import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('UI/UX Design Tokens and 5-State Invariants (Rule 04)', () => {
  it('should define executive design tokens in tailwind.config.ts without generic neon gradients', () => {
    const tailwindPath = path.resolve(process.cwd(), 'tailwind.config.ts');
    expect(fs.existsSync(tailwindPath)).toBe(true);
    const content = fs.readFileSync(tailwindPath, 'utf8');

    // Must contain executive theme tokens
    expect(content).toContain('brand');
    expect(content).toContain('crimson');
    expect(content).toContain('cobalt');
    expect(content).toContain('titanium');
    expect(content).toContain('surface');

    // Must avoid generic neon violet clichés
    expect(content).not.toContain('#a855f7'); // generic neon purple
  });

  it('should define CSS variables in globals.css for consistent theme tokens', () => {
    const cssPath = path.resolve(process.cwd(), 'src/app/globals.css');
    expect(fs.existsSync(cssPath)).toBe(true);
    const cssContent = fs.readFileSync(cssPath, 'utf8');

    expect(cssContent).toContain('--color-background-primary');
    expect(cssContent).toContain('--color-surface-card');
    expect(cssContent).toContain('--color-accent-crimson');
    expect(cssContent).toContain(':focus-visible');
  });

  it('should have 5-state matrix defined in Button component', () => {
    const buttonPath = path.resolve(process.cwd(), 'src/components/ui/Button.tsx');
    expect(fs.existsSync(buttonPath)).toBe(true);
    const content = fs.readFileSync(buttonPath, 'utf8');

    // 1. Default
    expect(content).toContain('variantStyles');
    // 2. Hover
    expect(content).toContain('hover:');
    // 3. Focus-visible
    expect(content).toContain('focus-visible:ring');
    // 4. Active / Loading
    expect(content).toContain('isLoading');
    expect(content).toContain('aria-busy');
    // 5. Disabled
    expect(content).toContain('disabled:');
  });
});
