export interface SiteProfile {
  fullName: string;
  title: string;
  shortBio: string;
  fullBio: string[];
  currentRole: string;
  company: string;
  location: string;
  email: string;
  linkedinUrl: string;
  mediumUrl: string;
  githubUrl: string;
  stats: {
    yearsExperience: number;
    teamSizeManaged: number;
    kaizenAwards: number;
    productionAiSystems: number;
  };
  leadershipPhilosophy: {
    title: string;
    statement: string;
    principles: Array<{
      title: string;
      description: string;
    }>;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  teamManaged?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  graduationYear: string;
  gpa?: string;
  highlights?: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  competition: string;
  organization: string;
  year: string;
  rank: '1st Place' | '2nd Place' | 'Representative' | 'Honorable Mention';
  impactDescription: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  organization: string;
  role: string;
  period: string;
  executiveSummary: string;
  theChallenge: string;
  architecturalSolution: string[];
  measurableOutcomes: Array<{
    metric: string;
    label: string;
    detail: string;
  }>;
  technologies: string[];
  isFeatured: boolean;
}

export interface CategoryItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  colorCode: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string; // Markdown or sanitized HTML
  category: CategoryItem;
  tags: string[];
  publishedAt: string;
  readTimeMinutes: number;
  isFeatured: boolean;
  canonicalUrl?: string;
  platform?: 'Medium' | 'LinkedIn' | 'TeknoPost' | 'Site';
  source?: 'linkedin' | 'medium' | 'site';
  coverImage?: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
}

export interface CompetencyCategory {
  category: string;
  description: string;
  skills: Array<{
    name: string;
    level: 'Expert' | 'Advanced' | 'Practitioner';
    highlight?: boolean;
    context?: string;
  }>;
}

export interface KnowledgeEntry {
  id: string;
  title: string;
  slug: string;
  category:
    | 'Architecture'
    | 'Experience'
    | 'Consulting_and_Services'
    | 'Education'
    | 'FAQ'
    | 'Policy'
    | 'Philosophy';
  summary: string;
  content: string;
  priority: number;
  isActive: boolean;
  keywords?: string[];
  lastSyncedAt?: string;
}

export type AiProvider =
  | 'openrouter'
  | 'openai'
  | 'anthropic'
  | 'groq'
  | 'ollama'
  | 'custom';

export interface AiAssistantConfig {
  id?: string | number;
  provider: AiProvider;
  fallbackProvider?: AiProvider;
  apiBaseUrl?: string;
  apiKeySecretName?: string;
  availablePresetModels?: string[];
  model: string;
  fallbackModel?: string;
  temperature: number;
  maxTokens: number;
  systemPromptOverride?: string;
  guardrailsEnabled: boolean;
  defamationProtection: boolean;
  privacyProtection: boolean;
  blockedKeywords: string[];
  unverifiedEmployers: string[];
  allowedTopics: string[];
  blockedTopics: string[];
  defamationSafeResponse?: string;
  privacySafeResponse?: string;
  generalRefusalMessage?: string;
  knowledgeGroundingMode: 'dynamic_cms' | 'custom_entries_only' | 'hybrid';
  additionalContextPrompt?: string;
  rateLimitPerMinute: number;
  isEnabled: boolean;
}

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export interface SeoConfig {
  id?: string | number;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  canonicalBaseUrl: string;
  defaultKeywords: string[];
  ogSiteName: string;
  ogImage: string;
  twitterHandle: string;
  twitterCardType: 'summary' | 'summary_large_image';
  robotsIndex: boolean;
  robotsFollow: boolean;
  googleSiteVerification?: string;
  bingSiteVerification?: string;
  yandexVerification?: string;
  pages: PageSeo[];
}

export interface PageVisit {
  id?: string | number;
  path: string;
  pageTitle?: string;
  referrer?: string;
  device?: 'desktop' | 'mobile' | 'tablet';
  browser?: string;
  ipHash?: string;
  durationSeconds?: number;
  timestamp?: string;
}

export interface AnalyticsOverview {
  totalViews: number;
  uniqueVisitors: number;
  deviceDistribution: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
  topPages: Array<{
    path: string;
    views: number;
    title: string;
  }>;
  topReferrers: Array<{
    referrer: string;
    count: number;
  }>;
  lastUpdated: string;
}

export interface AnalyticsSetting {
  id?: string | number;
  trackingEnabled: boolean;
  googleAnalyticsId?: string;
  plausibleDomain?: string;
  excludeAdminVisits: boolean;
}

