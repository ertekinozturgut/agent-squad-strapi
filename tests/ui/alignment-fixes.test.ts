import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('TASK-07: Visual Alignment and Mobile Theme Color Fixes', () => {
  it('should not contain any invalid pl-13 classes in EducationAndAwards.tsx', () => {
    const filePath = path.resolve(
      process.cwd(),
      'src/features/experience/components/EducationAndAwards.tsx'
    );
    const content = fs.readFileSync(filePath, 'utf8');

    expect(content).not.toContain('pl-13');
    expect(content).toContain('pl-[52px]');
  });

  it('should define theme-color in layout.tsx for mobile browser support', () => {
    const layoutPath = path.resolve(process.cwd(), 'src/app/layout.tsx');
    const content = fs.readFileSync(layoutPath, 'utf8');

    expect(content).toContain('themeColor');
    expect(content).toContain('#090D16');
  });
});
