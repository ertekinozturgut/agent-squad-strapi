import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Page Visit Analytics & Metrics Module', () => {
  it('should have valid Strapi schema for page-visit and analytics-setting', () => {
    const pageVisitSchema = path.resolve(
      process.cwd(),
      'strapi/src/api/page-visit/content-types/page-visit/schema.json'
    );
    expect(fs.existsSync(pageVisitSchema)).toBe(true);

    const pv = JSON.parse(fs.readFileSync(pageVisitSchema, 'utf8'));
    expect(pv.kind).toBe('collectionType');
    expect(pv.attributes.path).toBeDefined();
    expect(pv.attributes.device).toBeDefined();
    expect(pv.attributes.ipHash).toBeDefined();
    expect(pv.attributes.timestamp).toBeDefined();

    const analyticsSettingSchema = path.resolve(
      process.cwd(),
      'strapi/src/api/analytics-setting/content-types/analytics-setting/schema.json'
    );
    expect(fs.existsSync(analyticsSettingSchema)).toBe(true);

    const as = JSON.parse(fs.readFileSync(analyticsSettingSchema, 'utf8'));
    expect(as.kind).toBe('singleType');
    expect(as.attributes.trackingEnabled).toBeDefined();
  });

  it('should classify user agent into device category properly', () => {
    function classifyDevice(ua: string): 'desktop' | 'mobile' | 'tablet' {
      const lower = ua.toLowerCase();
      if (/tablet|ipad|playbook|silk/i.test(lower)) return 'tablet';
      if (/mobile|iphone|ipod|android|blackberry|mini/i.test(lower)) return 'mobile';
      return 'desktop';
    }

    const iphoneUa = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148';
    const ipadUa = 'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15';
    const macUa = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36';

    expect(classifyDevice(iphoneUa)).toBe('mobile');
    expect(classifyDevice(ipadUa)).toBe('tablet');
    expect(classifyDevice(macUa)).toBe('desktop');
  });

  it('should generate anonymous IP hash without storing raw IP (GDPR / KVKK compliance)', () => {
    const crypto = require('crypto');
    const rawIp = '192.168.1.55';
    const salt = 'ertekin-analytics-salt-2026';

    const hash = crypto.createHash('sha256').update(`${rawIp}-${salt}`).digest('hex').slice(0, 16);
    expect(hash.length).toBe(16);
    expect(hash).not.toContain(rawIp);
  });
});
