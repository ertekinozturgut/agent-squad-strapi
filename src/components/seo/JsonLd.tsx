import React from 'react';
import { SiteProfile, ArticleItem } from '../../types/content.types';

export interface PersonJsonLdProps {
  profile: SiteProfile;
}

export const PersonJsonLd: React.FC<PersonJsonLdProps> = ({ profile }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.fullName,
    jobTitle: profile.currentRole,
    worksFor: {
      '@type': 'Organization',
      name: profile.company,
      url: 'https://www.toyota.com.tr',
    },
    url: 'https://ertekinozturgut.com',
    sameAs: [profile.linkedinUrl, profile.mediumUrl, profile.githubUrl],
    email: profile.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Istanbul',
      addressCountry: 'TR',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Ankara University',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Istanbul Kultur University',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Marmara University',
      },
    ],
    knowsAbout: [
      'Agentic AI',
      'Model Context Protocol (MCP)',
      'Large Language Models (LLM)',
      'Retrieval-Augmented Generation (RAG)',
      'Microsoft Dynamics 365 CRM',
      'API Architecture',
      'Enterprise Software Engineering',
      'Kaizen Problem Solving',
    ],
    award: [
      'PS 1st Place · Toyota AI-Powered Assistant',
      'PS 1st Place · Personalised Communication & Offers',
      'PS 1st Place · Improving Post-Sales Customer Targeting with Data Analytics Models',
      'PS 2nd Place · My Lead Assistant',
      'Business Reform — Represented Toyota Turkey at the ALJ Global Kaizen Marathon · Toyota Turkey Kaizen Platform',
    ],
  };

  return (
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  );
};

export interface ArticleJsonLdProps {
  article: ArticleItem;
}

export const ArticleJsonLd: React.FC<ArticleJsonLdProps> = ({ article }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
      url: 'https://ertekinozturgut.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Ertekin Özturgut',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ertekinozturgut.com/articles/${article.slug}`,
    },
    keywords: article.tags.join(', '),
    articleSection: article.category.name,
  };

  return (
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  );
};

export interface WebSiteJsonLdProps {
  url?: string;
  name?: string;
  description?: string;
}

export const WebSiteJsonLd: React.FC<WebSiteJsonLdProps> = ({
  url = 'https://ertekinozturgut.com',
  name = 'Ertekin Özturgut | Enterprise AI & Solution Architecture',
  description = 'Executive portfolio of Ertekin Özturgut — Enterprise AI & Next-Gen Digital Solutions Lead at Toyota Türkiye.',
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url,
    name,
    description,
    author: {
      '@type': 'Person',
      name: 'Ertekin Özturgut',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/articles?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  );
};

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbJsonLd: React.FC<BreadcrumbJsonLdProps> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  );
};
