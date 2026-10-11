import { MetadataRoute } from 'next';
import { seoConfigSeed } from '../services/seedData';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = seoConfigSeed.canonicalBaseUrl || 'https://ertekinozturgut.com';

  return {
    rules: {
      userAgent: '*',
      allow: seoConfigSeed.robotsIndex ? '/' : '',
      disallow: seoConfigSeed.robotsIndex ? ['/api/private/', '/admin/'] : ['/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
