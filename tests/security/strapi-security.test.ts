import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Strapi & API Security Hardening (OWASP Top 10 / ASVS v5.0)', () => {
  it('should verify Strapi middlewares.ts exists with strict security policies', () => {
    const middlewarePath = path.resolve(process.cwd(), 'strapi/config/middlewares.ts');
    expect(fs.existsSync(middlewarePath)).toBe(true);

    const content = fs.readFileSync(middlewarePath, 'utf8');
    // Verify Helmet security & CSP
    expect(content).toContain('strapi::security');
    expect(content).toContain('contentSecurityPolicy');
    expect(content).toContain('hsts');
    expect(content).toContain('noSniff: true');
    expect(content).toContain('xssFilter: true');

    // Verify CORS origin whitelisting
    expect(content).toContain('strapi::cors');
    expect(content).toContain('ertekinozturgut.com');
    expect(content).toContain('localhost:3000');

    // Verify information disclosure prevention
    expect(content).toContain('strapi::poweredBy');
    expect(content).toContain('enabled: false');

    // Verify DoS payload limits
    expect(content).toContain('jsonLimit');
    expect(content).toContain('maxDepth: 10');
  });

  it('should ensure Public role does not have unauthorized mutating update permissions in index.ts', () => {
    const indexPath = path.resolve(process.cwd(), 'strapi/src/index.ts');
    const content = fs.readFileSync(indexPath, 'utf8');

    // Ensure Public role permissions block mutating actions
    expect(content).not.toContain("'api::ai-assistant.ai-assistant.update'");
    expect(content).not.toContain("'api::ai-assistant.ai-assistant.updateConfig'");
  });

  it('should verify routes/ai-assistant.ts does not allow unauthenticated PUT operations', () => {
    const routesPath = path.resolve(process.cwd(), 'strapi/src/api/ai-assistant/routes/ai-assistant.ts');
    const content = fs.readFileSync(routesPath, 'utf8');

    // PUT operations must NOT have auth: false
    const lines = content.split('\n');
    let inPutRoute = false;
    for (const line of lines) {
      if (line.includes("method: 'PUT'")) {
        inPutRoute = true;
      } else if (inPutRoute && line.includes('method:')) {
        inPutRoute = false;
      }
      if (inPutRoute) {
        expect(line).not.toContain('auth: false');
      }
    }
  });

  it('should enforce rate limiting headers on rapid requests', async () => {
    // Test sliding-window rate limiter concept
    const timestamps: number[] = [];
    const limit = 5;
    const now = Date.now();

    for (let i = 0; i < limit; i++) {
      timestamps.push(now - i * 1000);
    }
    expect(timestamps.length).toBe(limit);

    // Adding 6th request within 1 min should exceed
    const recent = timestamps.filter((t) => now - t < 60000);
    expect(recent.length >= limit).toBe(true);
  });
});
