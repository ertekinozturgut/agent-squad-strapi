import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('TASK-17: Recognition (3x First Place), Insights (Field Notes) & Dark Final CTA', () => {
  it('should render 3x First Place and ALJ Kaizen Honors in RecognitionSection.tsx', () => {
    const recogPath = path.resolve(
      process.cwd(),
      'src/features/experience/components/RecognitionSection.tsx'
    );
    const content = fs.readFileSync(recogPath, 'utf8');

    // Section 20 requirements
    expect(content).toContain('RECOGNITION');
    expect(content).toContain('3×');
    expect(content).toContain('First Place.');
    expect(content).toContain('AI-Powered Assistant');
    expect(content).toContain('Personalised Communication & Offers');
    expect(content).toContain('Post-Sales Targeting');
    expect(content).toContain('My Lead Assistant');
    expect(content).toContain('ALJ Global Kaizen Marathon');
  });

  it('should render editorial cards in InsightsPreviewSection.tsx', () => {
    const insightsPath = path.resolve(
      process.cwd(),
      'src/features/articles/components/InsightsPreviewSection.tsx'
    );
    const content = fs.readFileSync(insightsPath, 'utf8');

    // Section 21 requirements
    expect(content).toContain('THINKING');
    expect(content).toContain('Field Notes');
    expect(content).toContain('n8n vs Copilot Studio: Lego or Ready-Made Furniture?');
    expect(content).toContain('Building a Smart AI Agent for Search and Email Automation in n8n');
    expect(content).toContain('Efficient Techniques for Bulk Data / Multiple Row Insert in C#');
  });


  it('should render the dark full-screen Final CTA in FinalCtaSection.tsx', () => {
    const ctaPath = path.resolve(
      process.cwd(),
      'src/features/contact/components/FinalCtaSection.tsx'
    );
    const content = fs.readFileSync(ctaPath, 'utf8');

    // Section 22 requirements
    expect(content).toContain("WHAT'S NEXT?");
    expect(content).toContain("Let's Build Systems");
    expect(content).toContain('That Make AI Useful.');
    expect(content).toContain('Enterprise AI · Architecture · Agents · Automation · Transformation');
    expect(content).toContain('CONNECT ON LINKEDIN');
    expect(content).toContain('ertekinozturgut@gmail.com');
  });

  it('should render minimal editorial footer in Footer.tsx', () => {
    const footerPath = path.resolve(process.cwd(), 'src/layouts/Footer.tsx');
    const content = fs.readFileSync(footerPath, 'utf8');

    // Section 23 requirements
    expect(content).toContain('ERTEKIN OZTURGUT');
    expect(content).toContain('AI Solutions Engineer');
    expect(content).toContain('Enterprise AI & Digital Transformation');
    expect(content).toContain('Istanbul · Türkiye');
    expect(content).toContain('LinkedIn');
    expect(content).toContain('Medium');
    expect(content).toContain('Email');
  });
});
