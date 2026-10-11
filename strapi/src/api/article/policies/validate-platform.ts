/**
 * Strapi v5 Policy: Validate Platform & Canonical URL Integrity
 * Enforces business rules: Medium and LinkedIn articles must provide valid external canonical URLs.
 */

import { articleService } from '../services/article';

export interface PolicyContext {
  request: {
    body: {
      data?: {
        platform?: string;
        source?: string;
        canonicalUrl?: string;
      };
    };
  };
}

export default async (policyContext: PolicyContext) => {
  const { data } = policyContext.request.body || {};
  if (!data) return true;

  if (data.platform) {
    const check = articleService.validateCanonicalUrl(data.platform, data.canonicalUrl);
    if (!check.isValid) {
      return false;
    }
  }

  return true;
};
