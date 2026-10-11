import * as path from 'path';
import * as fs from 'fs';

interface StrapiBootstrapContext {
  query: (uid: string) => {
    findOne: (params: { where: Record<string, unknown> }) => Promise<{ id: number | string } | null>;
    create: (params: { data: Record<string, unknown> }) => Promise<unknown>;
    delete: (params: { where: Record<string, unknown> }) => Promise<unknown>;
  };
  documents: (uid: string) => {
    findFirst: (params?: Record<string, unknown>) => Promise<Record<string, unknown> | null>;
    findMany: (params?: Record<string, unknown>) => Promise<Record<string, unknown>[]>;
    create: (params: { data: Record<string, unknown>; status?: string }) => Promise<Record<string, unknown>>;
    update: (params: { documentId: string; data: Record<string, unknown> }) => Promise<Record<string, unknown>>;
  };
  log: {
    info: (msg: string) => void;
    warn: (msg: string) => void;
    error: (msg: string) => void;
  };
}

export default {
  register(/* { strapi } */) {},

  async bootstrap({ strapi }: { strapi: StrapiBootstrapContext }) {
    // 1. Configure Public permissions for all headless endpoints
    try {
      const publicRole = await strapi
        .query('plugin::users-permissions.role')
        .findOne({ where: { type: 'public' } });

      if (publicRole) {
        const actionsToEnable = [
          // Article
          'api::article.article.find',
          'api::article.article.findOne',
          'api::article.article.getPlatformOverview',
          'api::article.article.findByPlatform',
          // Category
          'api::category.category.find',
          'api::category.category.findOne',
          // Case Study
          'api::case-study.case-study.find',
          'api::case-study.case-study.findOne',
          // Site Profile
          'api::site-profile.site-profile.find',
          // Experience
          'api::experience.experience.find',
          'api::experience.experience.findOne',
          // Competency
          'api::competency.competency.find',
          'api::competency.competency.findOne',
          // Education
          'api::education.education.find',
          'api::education.education.findOne',
          // Award
          'api::award.award.find',
          'api::award.award.findOne',
          // AI Assistant & Knowledge Base (Read-only for Public)
          'api::ai-assistant.ai-assistant.find',
          'api::ai-assistant.ai-assistant.getConfig',
          'api::knowledge-entry.knowledge-entry.find',
          'api::knowledge-entry.knowledge-entry.findOne',
          // SEO & Growth Settings
          'api::seo-setting.seo-setting.find',
          // Analytics & Page Visit Tracking
          'api::page-visit.page-visit.hit',
          'api::page-visit.page-visit.overview',
          'api::analytics-setting.analytics-setting.find',
        ];

        for (const action of actionsToEnable) {
          const existing = await strapi
            .query('plugin::users-permissions.permission')
            .findOne({ where: { action, role: publicRole.id } });

          if (!existing) {
            await strapi
              .query('plugin::users-permissions.permission')
              .create({ data: { action, role: publicRole.id } });
          }
        }

        // Revoke unauthorized mutating actions from public role if present
        const mutatingActionsToRevoke = [
          `api::ai-assistant.ai-assistant.${'update'}`,
          `api::ai-assistant.ai-assistant.${'updateConfig'}`,
          'api::seo-setting.seo-setting.update',
          'api::analytics-setting.analytics-setting.update',
        ];

        for (const action of mutatingActionsToRevoke) {
          const forbidden = await strapi
            .query('plugin::users-permissions.permission')
            .findOne({ where: { action, role: publicRole.id } });
          if (forbidden && forbidden.id) {
            await strapi
              .query('plugin::users-permissions.permission')
              .delete({ where: { id: forbidden.id } });
          }
        }

        strapi.log.info('Public permissions automatically configured for all portfolio API endpoints');
      }
    } catch (err) {
      strapi.log.warn('Could not automatically configure public permissions: ' + err);
    }

    // 2. Auto-seed comprehensive initial CV & portfolio content if empty
    try {
      let seedData: Record<string, unknown> | null = null;
      const candidates = [
        path.resolve(__dirname, 'seed/initial-data.json'),
        path.resolve(__dirname, '../seed/initial-data.json'),
        path.resolve(process.cwd(), 'strapi/src/seed/initial-data.json'),
        path.resolve(process.cwd(), 'src/seed/initial-data.json'),
      ];

      for (const p of candidates) {
        if (fs.existsSync(p)) {
          seedData = JSON.parse(fs.readFileSync(p, 'utf8'));
          break;
        }
      }

      if (!seedData) {
        strapi.log.warn('Initial seed file not found, skipping automated content population');
        return;
      }

      // 2a. Seed Site Profile (Single Type)
      try {
        const existingProfile = await strapi.documents('api::site-profile.site-profile').findFirst();
        if (!existingProfile && seedData.profile) {
          await strapi.documents('api::site-profile.site-profile').create({
            data: seedData.profile as Record<string, unknown>,
            status: 'published',
          });
          strapi.log.info('Seeded Site Profile single type successfully');
        }
      } catch (err) {
        strapi.log.warn('Site profile seed warning: ' + err);
      }

      // 2b. Seed Experiences
      try {
        const existingExp = await strapi.documents('api::experience.experience').findMany({ limit: 1 });
        if ((!existingExp || existingExp.length === 0) && Array.isArray(seedData.experiences)) {
          for (const exp of seedData.experiences as Array<Record<string, unknown>>) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { id, ...data } = exp;
            await strapi.documents('api::experience.experience').create({
              data,
              status: 'published',
            });
          }
          strapi.log.info(`Seeded ${(seedData.experiences as unknown[]).length} career experiences`);
        }
      } catch (err) {
        strapi.log.warn('Experience seed warning: ' + err);
      }

      // 2c. Seed Competencies
      try {
        const existingComp = await strapi.documents('api::competency.competency').findMany({ limit: 1 });
        if ((!existingComp || existingComp.length === 0) && Array.isArray(seedData.competencies)) {
          for (const comp of seedData.competencies as Array<Record<string, unknown>>) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { id, ...data } = comp;
            await strapi.documents('api::competency.competency').create({
              data,
              status: 'published',
            });
          }
          strapi.log.info(`Seeded ${(seedData.competencies as unknown[]).length} competency categories`);
        }
      } catch (err) {
        strapi.log.warn('Competencies seed warning: ' + err);
      }

      // 2d. Seed Educations
      try {
        const existingEdu = await strapi.documents('api::education.education').findMany({ limit: 1 });
        if ((!existingEdu || existingEdu.length === 0) && Array.isArray(seedData.educations)) {
          for (const edu of seedData.educations as Array<Record<string, unknown>>) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { id, ...data } = edu;
            await strapi.documents('api::education.education').create({
              data,
              status: 'published',
            });
          }
          strapi.log.info(`Seeded ${(seedData.educations as unknown[]).length} education records`);
        }
      } catch (err) {
        strapi.log.warn('Education seed warning: ' + err);
      }

      // 2e. Seed Awards
      try {
        const existingAwards = await strapi.documents('api::award.award').findMany({ limit: 1 });
        if ((!existingAwards || existingAwards.length === 0) && Array.isArray(seedData.awards)) {
          for (const award of seedData.awards as Array<Record<string, unknown>>) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { id, ...data } = award;
            await strapi.documents('api::award.award').create({
              data,
              status: 'published',
            });
          }
          strapi.log.info(`Seeded ${(seedData.awards as unknown[]).length} awards & honors`);
        }
      } catch (err) {
        strapi.log.warn('Awards seed warning: ' + err);
      }

      // 2f. Seed Categories
      const categoryMap = new Map<string, string>();
      try {
        const existingCategories = await strapi.documents('api::category.category').findMany({ limit: 1 });
        if ((!existingCategories || existingCategories.length === 0) && Array.isArray(seedData.categories)) {
          for (const cat of seedData.categories as Array<Record<string, unknown>>) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { id, ...data } = cat;
            const created = await strapi.documents('api::category.category').create({
              data,
              status: 'published',
            });
            if (created && typeof data.slug === 'string') {
              categoryMap.set(data.slug, (created.documentId || created.id) as string);
            }
          }
          strapi.log.info(`Seeded ${(seedData.categories as unknown[]).length} article categories`);
        }
      } catch (err) {
        strapi.log.warn('Category seed warning: ' + err);
      }

      // 2g. Seed Articles
      try {
        const existingArticles = await strapi.documents('api::article.article').findMany({ limit: 1 });
        if ((!existingArticles || existingArticles.length === 0) && Array.isArray(seedData.articles)) {
          for (const art of seedData.articles as Array<Record<string, unknown>>) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { id, category, author, ...data } = art;
            const catObj = category as Record<string, unknown> | undefined;
            const catDocId = catObj?.slug ? categoryMap.get(catObj.slug as string) : undefined;
            await strapi.documents('api::article.article').create({
              data: {
                ...data,
                ...(catDocId ? { category: catDocId } : {}),
              },
              status: 'published',
            });
          }
          strapi.log.info(`Seeded ${(seedData.articles as unknown[]).length} articles`);
        }
      } catch (err) {
        strapi.log.warn('Articles seed warning: ' + err);
      }

      // 2h. Seed Case Studies
      try {
        const existingCs = await strapi.documents('api::case-study.case-study').findMany({ limit: 1 });
        if ((!existingCs || existingCs.length === 0) && Array.isArray(seedData.caseStudies)) {
          for (const cs of seedData.caseStudies as Array<Record<string, unknown>>) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { id, ...data } = cs;
            await strapi.documents('api::case-study.case-study').create({
              data,
              status: 'published',
            });
          }
          strapi.log.info(`Seeded ${(seedData.caseStudies as unknown[]).length} case studies`);
        }
      } catch (err) {
        strapi.log.warn('Case studies seed warning: ' + err);
      }

      // 2i. Seed Knowledge Base Entries (Collection Type)
      try {
        const existingKe = await strapi.documents('api::knowledge-entry.knowledge-entry').findMany({ limit: 1 });
        if ((!existingKe || existingKe.length === 0) && Array.isArray(seedData.knowledgeEntries)) {
          for (const ke of seedData.knowledgeEntries as Array<Record<string, unknown>>) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { id, ...data } = ke;
            await strapi.documents('api::knowledge-entry.knowledge-entry').create({
              data,
              status: 'published',
            });
          }
          strapi.log.info(`Seeded ${(seedData.knowledgeEntries as unknown[]).length} knowledge base entries`);
        }
      } catch (err) {
        strapi.log.warn('Knowledge entries seed warning: ' + err);
      }

      // 2j. Seed or Update AI Assistant Config (Single Type)
      try {
        const existingAi = await strapi.documents('api::ai-assistant.ai-assistant').findFirst();
        const aiPayload = (seedData.aiAssistant as Record<string, unknown>) || {
          model: 'nvidia/nemotron-3-ultra-550b-a55b:free',
          fallbackModel: 'nvidia/nemotron-3-ultra-550b-a55b',
          temperature: 0.2,
          maxTokens: 800,
          guardrailsEnabled: true,
          defamationProtection: true,
          privacyProtection: true,
          rateLimitPerMinute: 10,
          isEnabled: true,
        };

        if (!existingAi) {
          await strapi.documents('api::ai-assistant.ai-assistant').create({
            data: aiPayload,
          });
          strapi.log.info('Seeded AI Assistant configuration successfully');
        } else if (existingAi.documentId) {
          await strapi.documents('api::ai-assistant.ai-assistant').update({
            documentId: existingAi.documentId as string,
            data: aiPayload,
          });
          strapi.log.info('Synchronized AI Assistant guardrail & knowledge configuration');
        }
      } catch (err) {
        strapi.log.warn('AI Assistant seed warning: ' + err);
      }

      // 2k. Seed or Update SEO Settings (Single Type)
      try {
        const existingSeo = await strapi.documents('api::seo-setting.seo-setting').findFirst();
        const seoPayload = (seedData.seo as Record<string, unknown>) || null;
        if (seoPayload) {
          if (!existingSeo) {
            await strapi.documents('api::seo-setting.seo-setting').create({
              data: seoPayload,
            });
            strapi.log.info('Seeded SEO & Search Engine settings successfully');
          } else if (existingSeo.documentId) {
            await strapi.documents('api::seo-setting.seo-setting').update({
              documentId: existingSeo.documentId as string,
              data: seoPayload,
            });
            strapi.log.info('Synchronized SEO settings');
          }
        }
      } catch (err) {
        strapi.log.warn('SEO setting seed warning: ' + err);
      }

      // 2l. Seed or Update Analytics Settings (Single Type)
      try {
        const existingAnalytics = await strapi.documents('api::analytics-setting.analytics-setting').findFirst();
        if (!existingAnalytics) {
          await strapi.documents('api::analytics-setting.analytics-setting').create({
            data: {
              trackingEnabled: true,
              excludeAdminVisits: true,
              googleAnalyticsId: '',
              plausibleDomain: '',
            },
          });
          strapi.log.info('Seeded Analytics & Page Tracking settings successfully');
        }
      } catch (err) {
        strapi.log.warn('Analytics setting seed warning: ' + err);
      }

      // 2l. Ensure Super Admin user exists for immediate panel access
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const adminUserService = (strapi as any).plugin?.('admin')?.service?.('user');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const adminRoleService = (strapi as any).plugin?.('admin')?.service?.('role');
        if (adminUserService && adminRoleService) {
          const hasAdmin = await adminUserService.exists();
          if (!hasAdmin) {
            const superAdminRole = await adminRoleService.getSuperAdmin();
            if (superAdminRole) {
              await adminUserService.create({
                email: 'admin@ertekinozturgut.com',
                firstname: 'Ertekin',
                lastname: 'Özturgut',
                password: 'ErtekinAdmin2026!',
                registrationToken: null,
                isActive: true,
                roles: [superAdminRole.id],
              });
              strapi.log.info('Auto-registered default Super Admin: admin@ertekinozturgut.com / ErtekinAdmin2026!');
            }
          }
        }
      } catch (adminErr) {
        strapi.log.warn('Admin user setup note: ' + adminErr);
      }
    } catch (err) {
      strapi.log.warn('Automated seeding routine encountered an error: ' + err);
    }
  },
};
