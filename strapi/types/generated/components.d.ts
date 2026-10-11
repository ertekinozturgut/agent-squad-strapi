import type { Schema, Struct } from '@strapi/strapi';

export interface CredentialsLanguageItem extends Struct.ComponentSchema {
  collectionName: 'components_credentials_language_items';
  info: {
    description: 'Language proficiency level';
    displayName: 'Language Item';
    icon: 'earth';
  };
  attributes: {
    language: Schema.Attribute.String & Schema.Attribute.Required;
    proficiency: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MetricsMeasurableOutcome extends Struct.ComponentSchema {
  collectionName: 'components_metrics_measurable_outcomes';
  info: {
    description: 'Quantifiable results from enterprise case studies';
    displayName: 'Measurable Outcome';
    icon: 'bulletList';
  };
  attributes: {
    detail: Schema.Attribute.Text & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    metric: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MetricsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_metrics_stat_items';
  info: {
    description: 'Executive numerical achievements';
    displayName: 'Stat Item';
    icon: 'chartBubble';
  };
  attributes: {
    kaizenAwards: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5>;
    productionAiSystems: Schema.Attribute.Integer &
      Schema.Attribute.DefaultTo<13>;
    teamSizeManaged: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<12>;
    yearsExperience: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<8>;
  };
}

export interface SeoMetadata extends Struct.ComponentSchema {
  collectionName: 'components_seo_metadata';
  info: {
    description: '\u00D6zelle\u015Ftirilmi\u015F meta verileri';
    displayName: 'SEO Metadata';
    icon: 'globe';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keywords: Schema.Attribute.JSON;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogImage: Schema.Attribute.String;
    preventIndexing: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SeoPageSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_page_seos';
  info: {
    description: 'Sayfa bazl\u0131 SEO ba\u015Fl\u0131k, a\u00E7\u0131klama ve payla\u015F\u0131m ayarlar\u0131';
    displayName: 'Page SEO';
    icon: 'search';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    keywords: Schema.Attribute.JSON;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ogImage: Schema.Attribute.String;
    path: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPrinciple extends Struct.ComponentSchema {
  collectionName: 'components_shared_principles';
  info: {
    description: 'Core engineering and leadership philosophy pillar';
    displayName: 'Leadership Principle';
    icon: 'shield';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SkillsSkillItem extends Struct.ComponentSchema {
  collectionName: 'components_skills_skill_items';
  info: {
    description: 'Individual technical skill with proficiency level';
    displayName: 'Skill Item';
    icon: 'code';
  };
  attributes: {
    context: Schema.Attribute.String;
    highlight: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    level: Schema.Attribute.Enumeration<
      ['Expert', 'Advanced', 'Practitioner']
    > &
      Schema.Attribute.DefaultTo<'Advanced'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'credentials.language-item': CredentialsLanguageItem;
      'metrics.measurable-outcome': MetricsMeasurableOutcome;
      'metrics.stat-item': MetricsStatItem;
      'seo.metadata': SeoMetadata;
      'seo.page-seo': SeoPageSeo;
      'shared.principle': SharedPrinciple;
      'skills.skill-item': SkillsSkillItem;
    }
  }
}
