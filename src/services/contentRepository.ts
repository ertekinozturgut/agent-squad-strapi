import {
  SiteProfile,
  ExperienceItem,
  EducationItem,
  AwardItem,
  CaseStudyItem,
  CategoryItem,
  ArticleItem,
  CompetencyCategory,
  KnowledgeEntry,
  AiAssistantConfig,
  SeoConfig,
  PageSeo,
} from '../types/content.types';
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
} from './seedData';

class ContentRepository {
  private strapiBaseUrl: string;

  constructor() {
    this.strapiBaseUrl = process.env.STRAPI_URL || 'http://localhost:1337';
  }

  /**
   * Fetch site profile data with fallback to local seed
   */
  async getProfile(): Promise<SiteProfile> {
    try {
      if (process.env.ENABLE_LIVE_STRAPI === 'true') {
        const res = await fetch(`${this.strapiBaseUrl}/api/site-profile`, {
          next: { revalidate: 3600 },
        });
        if (res.ok) {
          const json = await res.json();
          if (json.data) {
            const d = json.data;
            return {
              ...siteProfileSeed,
              ...d,
              fullName: d.fullName || siteProfileSeed.fullName,
              title: d.title || siteProfileSeed.title,
              shortBio: d.shortBio || siteProfileSeed.shortBio,
              fullBio: Array.isArray(d.fullBio) ? d.fullBio : siteProfileSeed.fullBio,
              currentRole: d.currentRole || siteProfileSeed.currentRole,
              company: d.company || siteProfileSeed.company,
              location: d.location || siteProfileSeed.location,
              email: d.email || siteProfileSeed.email,
              linkedinUrl: d.linkedinUrl || siteProfileSeed.linkedinUrl,
              mediumUrl: d.mediumUrl || siteProfileSeed.mediumUrl,
              githubUrl: d.githubUrl || siteProfileSeed.githubUrl,
              stats: d.stats || siteProfileSeed.stats,
              leadershipPhilosophy: d.leadershipPhilosophy || {
                title: d.philosophyTitle || siteProfileSeed.leadershipPhilosophy.title,
                statement: d.philosophyStatement || siteProfileSeed.leadershipPhilosophy.statement,
                principles: d.principles || siteProfileSeed.leadershipPhilosophy.principles,
              },
            };
          }
        }
      }
    } catch {
      // Graceful fallback to static seed data
    }
    return siteProfileSeed;
  }

  /**
   * Fetch career experience items
   */
  async getExperiences(): Promise<ExperienceItem[]> {
    try {
      if (process.env.ENABLE_LIVE_STRAPI === 'true') {
        const res = await fetch(`${this.strapiBaseUrl}/api/experiences?sort=startDate:desc`, {
          next: { revalidate: 3600 },
        });
        if (res.ok) {
          const json = await res.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) return json.data;
        }
      }
    } catch {
      // Graceful fallback
    }
    return experienceSeed;
  }

  /**
   * Fetch education items
   */
  async getEducation(): Promise<EducationItem[]> {
    try {
      if (process.env.ENABLE_LIVE_STRAPI === 'true') {
        const res = await fetch(`${this.strapiBaseUrl}/api/educations?sort=graduationYear:desc`, {
          next: { revalidate: 3600 },
        });
        if (res.ok) {
          const json = await res.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) return json.data;
        }
      }
    } catch {
      // Graceful fallback
    }
    return educationSeed;
  }

  /**
   * Fetch certifications from CV
   */
  async getCertifications(): Promise<string[]> {
    return certificationsSeed;
  }

  /**
   * Fetch language proficiencies from CV
   */
  async getLanguages(): Promise<Array<{ language: string; proficiency: string }>> {
    return languagesSeed;
  }

  /**
   * Fetch honors and awards
   */
  async getAwards(): Promise<AwardItem[]> {
    try {
      if (process.env.ENABLE_LIVE_STRAPI === 'true') {
        const res = await fetch(`${this.strapiBaseUrl}/api/awards?sort=year:desc`, {
          next: { revalidate: 3600 },
        });
        if (res.ok) {
          const json = await res.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) return json.data;
        }
      }
    } catch {
      // Graceful fallback
    }
    return awardsSeed;
  }

  /**
   * Fetch case studies
   */
  async getCaseStudies(): Promise<CaseStudyItem[]> {
    try {
      if (process.env.ENABLE_LIVE_STRAPI === 'true') {
        const res = await fetch(`${this.strapiBaseUrl}/api/case-studies`, {
          next: { revalidate: 3600 },
        });
        if (res.ok) {
          const json = await res.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) return json.data;
        }
      }
    } catch {
      // Fallback to seed
    }
    return caseStudiesSeed;
  }

  /**
   * Fetch single case study by slug
   */
  async getCaseStudyBySlug(slug: string): Promise<CaseStudyItem | null> {
    const all = await this.getCaseStudies();
    return all.find((cs) => cs.slug === slug) || null;
  }

  /**
   * Fetch all article categories
   */
  async getCategories(): Promise<CategoryItem[]> {
    try {
      if (process.env.ENABLE_LIVE_STRAPI === 'true') {
        const res = await fetch(`${this.strapiBaseUrl}/api/categories`, {
          next: { revalidate: 3600 },
        });
        if (res.ok) {
          const json = await res.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) return json.data;
        }
      }
    } catch {
      // Fallback to seed
    }
    return categoriesSeed;
  }

  /**
   * Fetch articles with optional category and search filter
   */
  async getArticles(categorySlug?: string, searchQuery?: string): Promise<ArticleItem[]> {
    let result = articlesSeed;

    try {
      if (process.env.ENABLE_LIVE_STRAPI === 'true') {
        const res = await fetch(`${this.strapiBaseUrl}/api/articles?populate=*`, {
          next: { revalidate: 600 },
        });
        if (res.ok) {
          const json = await res.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            result = json.data;
          }
        }
      }
    } catch {
      // Fallback to seed
    }

    if (categorySlug && categorySlug !== 'all') {
      result = result.filter((a) => a.category.slug === categorySlug);
    }

    if (searchQuery && searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }

  /**
   * Fetch single article by slug with alias resolution
   */
  async getArticleBySlug(slug: string): Promise<ArticleItem | null> {
    const articleAliases: Record<string, string> = {
      'agentic-ai-kurumsal-mimari-ve-mcp': 'n8n-vs-copilot-studio-lego-or-ready-made-furniture',
      'model-context-protocol-mcp-ve-ajan-mimarileri': 'n8n-vs-copilot-studio-lego-or-ready-made-furniture',
      'model-context-protocol-agentic-architecture': 'n8n-vs-copilot-studio-lego-or-ready-made-furniture',
      'toyota-ilk-uretim-yapay-zeka-sistemi': 'building-smart-ai-agent-search-email-automation-n8n',
      'enterprise-ai-beyond-hype': 'building-smart-ai-agent-search-email-automation-n8n',
      'kurumsal-crm-ve-ajansal-otomasyon-donusumu': 'efficient-techniques-for-bulk-data-multiple-row-insert-in-csharp',
      'dynamics-365-central-api-architecture': 'efficient-techniques-for-bulk-data-multiple-row-insert-in-csharp',
    };

    const targetSlug = articleAliases[slug] || slug;
    const articles = await this.getArticles();
    return articles.find((a) => a.slug === targetSlug || a.slug === slug) || null;
  }

  /**
   * Fetch competency matrix
   */
  async getCompetencies(): Promise<CompetencyCategory[]> {
    try {
      if (process.env.ENABLE_LIVE_STRAPI === 'true') {
        const res = await fetch(`${this.strapiBaseUrl}/api/competencies?populate=*`, {
          next: { revalidate: 3600 },
        });
        if (res.ok) {
          const json = await res.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) return json.data;
        }
      }
    } catch {
      // Graceful fallback
    }
    return competenciesSeed;
  }

  /**
   * Fetch custom AI knowledge base entries from Strapi with fallback
   */
  async getKnowledgeEntries(): Promise<KnowledgeEntry[]> {
    try {
      if (process.env.ENABLE_LIVE_STRAPI === 'true') {
        const res = await fetch(`${this.strapiBaseUrl}/api/knowledge-entries?sort=priority:desc`, {
          next: { revalidate: 1800 },
        });
        if (res.ok) {
          const json = await res.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) return json.data;
        }
      }
    } catch {
      // Graceful fallback
    }
    return knowledgeEntriesSeed;
  }

  /**
   * Fetch AI Assistant and Guardrail configuration from Strapi with fallback
   */
  async getAiAssistantConfig(): Promise<AiAssistantConfig> {
    try {
      if (process.env.ENABLE_LIVE_STRAPI === 'true') {
        const res = await fetch(`${this.strapiBaseUrl}/api/ai-assistant/config`, {
          next: { revalidate: 300 },
        });
        if (res.ok) {
          const json = await res.json();
          if (json.data) return { ...aiAssistantConfigSeed, ...json.data };
        }
      }
    } catch {
      // Graceful fallback
    }
    return aiAssistantConfigSeed;
  }

  /**
   * Fetch global SEO & Search Engine settings from Strapi with fallback
   */
  async getSeoConfig(): Promise<SeoConfig> {
    try {
      if (process.env.ENABLE_LIVE_STRAPI === 'true') {
        const res = await fetch(`${this.strapiBaseUrl}/api/seo-setting?populate=*`, {
          next: { revalidate: 3600 },
        });
        if (res.ok) {
          const json = await res.json();
          if (json.data) return { ...seoConfigSeed, ...json.data };
        }
      }
    } catch {
      // Graceful fallback
    }
    return seoConfigSeed;
  }

  /**
   * Fetch page-specific SEO configuration with fallback to global defaults
   */
  async getPageSeo(path: string): Promise<PageSeo> {
    const seo = await this.getSeoConfig();
    const found = seo.pages?.find((p) => p.path === path);
    if (found) return found;
    return {
      path,
      title: seo.defaultTitle,
      description: seo.defaultDescription,
      keywords: seo.defaultKeywords,
      ogImage: seo.ogImage,
      canonicalUrl: `${seo.canonicalBaseUrl}${path === '/' ? '' : path}`,
      noIndex: false,
    };
  }

  // --- MODULAR DOMAIN ACCESS FACADES ---
  get profileModule() {
    return {
      getProfile: () => this.getProfile(),
      getExperiences: () => this.getExperiences(),
      getCompetencies: () => this.getCompetencies(),
      getEducation: () => this.getEducation(),
      getAwards: () => this.getAwards(),
      getCertifications: () => this.getCertifications(),
      getLanguages: () => this.getLanguages(),
    };
  }

  get publicationsModule() {
    return {
      getArticles: (categorySlug?: string, searchQuery?: string) =>
        this.getArticles(categorySlug, searchQuery),
      getArticleBySlug: (slug: string) => this.getArticleBySlug(slug),
      getCategories: () => this.getCategories(),
      getCaseStudies: () => this.getCaseStudies(),
      getCaseStudyBySlug: (slug: string) => this.getCaseStudyBySlug(slug),
    };
  }

  get aiModule() {
    return {
      getConfig: () => this.getAiAssistantConfig(),
      getKnowledgeEntries: () => this.getKnowledgeEntries(),
    };
  }

  get seoModule() {
    return {
      getConfig: () => this.getSeoConfig(),
      getPageSeo: (path: string) => this.getPageSeo(path),
    };
  }
}

export const contentRepository = new ContentRepository();
