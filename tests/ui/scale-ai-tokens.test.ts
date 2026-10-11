import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Scale AI & Palantir Enterprise Editorial Design System (TASK-11)', () => {
  it('should define the Scale AI color palette in tailwind.config.ts', () => {
    const tailwindPath = path.resolve(process.cwd(), 'tailwind.config.ts');
    expect(fs.existsSync(tailwindPath)).toBe(true);
    const content = fs.readFileSync(tailwindPath, 'utf8');

    // Scale AI Canvas Off-white
    expect(content).toContain('#F4F3EF');
    // Scale AI Canvas White
    expect(content).toContain('#FAFAF8');
    // Scale AI Primary Dark
    expect(content).toContain('#111111');
    // Electric Lime single signal accent
    expect(content).toContain('#B6FF39');
    // Sharp border radius (0px - 4px)
    expect(content).toContain('0px');
    expect(content).toContain('2px');
    // IBM Plex Mono typography
    expect(content).toContain('IBM Plex Mono');
  });

  it('should configure CSS variables and off-white base in globals.css', () => {
    const cssPath = path.resolve(process.cwd(), 'src/app/globals.css');
    expect(fs.existsSync(cssPath)).toBe(true);
    const css = fs.readFileSync(cssPath, 'utf8');

    expect(css).toContain('--color-canvas: #F4F3EF');
    expect(css).toContain('--color-dark: #111111');
    expect(css).toContain('--color-signal: #B6FF39');
    expect(css).toContain('::selection');
    expect(css).toContain('#B6FF39');
  });

  it('should prohibit generic neon violet gradients or excessive rounded SaaS cards', () => {
    const tailwindPath = path.resolve(process.cwd(), 'tailwind.config.ts');
    const content = fs.readFileSync(tailwindPath, 'utf8');

    // No neon purple/violet
    expect(content).not.toContain('#a855f7');
    expect(content).not.toContain('#8b5cf6');
    // No rounded 24px-32px
    expect(content).not.toContain('24px');
    expect(content).not.toContain('32px');
  });
});
