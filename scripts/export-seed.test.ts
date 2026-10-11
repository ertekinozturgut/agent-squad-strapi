import { it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import {
  siteProfileSeed,
  experienceSeed,
  educationSeed,
  awardsSeed,
  caseStudiesSeed,
  categoriesSeed,
  articlesSeed,
  competenciesSeed,
  certificationsSeed,
  languagesSeed,
  knowledgeEntriesSeed,
  aiAssistantConfigSeed,
  seoConfigSeed,
} from '../src/services/seedData';

it('exports seed data to strapi/src/seed/initial-data.json', () => {
  const targetDir = path.resolve(process.cwd(), 'strapi/src/seed');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Format site profile with principles and stats matching component structure
  const profileData = {
    ...siteProfileSeed,
    philosophyTitle: siteProfileSeed.leadershipPhilosophy.title,
    philosophyStatement: siteProfileSeed.leadershipPhilosophy.statement,
    principles: siteProfileSeed.leadershipPhilosophy.principles,
    languages: languagesSeed,
    certifications: certificationsSeed,
  };

  const fullSeed = {
    profile: profileData,
    experiences: experienceSeed,
    educations: educationSeed,
    awards: awardsSeed,
    caseStudies: caseStudiesSeed,
    categories: categoriesSeed,
    articles: articlesSeed,
    competencies: competenciesSeed,
    knowledgeEntries: knowledgeEntriesSeed,
    aiAssistant: aiAssistantConfigSeed,
    seo: seoConfigSeed,
  };

  const targetPath = path.join(targetDir, 'initial-data.json');
  fs.writeFileSync(targetPath, JSON.stringify(fullSeed, null, 2), 'utf-8');
  expect(fs.existsSync(targetPath)).toBe(true);
  console.info('Successfully generated strapi/src/seed/initial-data.json');
});
