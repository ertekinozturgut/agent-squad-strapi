import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { contentRepository } from '../../../services/contentRepository';
import { ArticleDetailView } from '../../../features/articles';
import { ArticleJsonLd } from '../../../components/seo/JsonLd';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = await contentRepository.getArticles();
  const baseSlugs = articles.map((a) => ({
    slug: a.slug,
  }));
  const aliasSlugs = [
    { slug: 'agentic-ai-kurumsal-mimari-ve-mcp' },
    { slug: 'toyota-ilk-uretim-yapay-zeka-sistemi' },
    { slug: 'kurumsal-crm-ve-ajansal-otomasyon-donusumu' },
    { slug: 'enterprise-ai-beyond-hype' },
    { slug: 'model-context-protocol-agentic-architecture' },
    { slug: 'dynamics-365-central-api-architecture' },
  ];
  return [...baseSlugs, ...aliasSlugs];
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await contentRepository.getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | Ertekin Özturgut`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await contentRepository.getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <ArticleJsonLd article={article} />
      <ArticleDetailView article={article} />
    </>
  );
}
