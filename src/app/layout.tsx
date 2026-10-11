import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../layouts/Navbar';
import { Footer } from '../layouts/Footer';
import { FloatingChatbot } from '../features/chat';
import { WebSiteJsonLd } from '../components/seo/JsonLd';
import { PageTracker } from '../components/analytics/PageTracker';
import { seoConfigSeed } from '../services/seedData';

export const metadata: Metadata = {
  metadataBase: new URL(seoConfigSeed.canonicalBaseUrl),
  title: {
    default: seoConfigSeed.defaultTitle,
    template: seoConfigSeed.titleTemplate,
  },
  description: seoConfigSeed.defaultDescription,
  keywords: seoConfigSeed.defaultKeywords,
  authors: [{ name: 'Ertekin Özturgut', url: seoConfigSeed.canonicalBaseUrl }],
  creator: 'Ertekin Özturgut',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: seoConfigSeed.canonicalBaseUrl,
    title: seoConfigSeed.defaultTitle,
    description: seoConfigSeed.defaultDescription,
    siteName: seoConfigSeed.ogSiteName,
    images: [
      {
        url: seoConfigSeed.ogImage,
        width: 1200,
        height: 630,
        alt: 'Ertekin Özturgut Portfolio',
      },
    ],
  },
  twitter: {
    card: seoConfigSeed.twitterCardType,
    title: seoConfigSeed.defaultTitle,
    description: seoConfigSeed.defaultDescription,
    creator: seoConfigSeed.twitterHandle,
    images: [seoConfigSeed.ogImage],
  },
  verification: {
    google: 'ertekin-ozturgut-official-portfolio',
    yandex: 'ertekin-ozturgut-yandex',
  },
  robots: {
    index: seoConfigSeed.robotsIndex,
    follow: seoConfigSeed.robotsFollow,
    googleBot: {
      index: seoConfigSeed.robotsIndex,
      follow: seoConfigSeed.robotsFollow,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  themeColor: '#090D16',
  colorScheme: 'dark' as const,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#090D16" />
        <WebSiteJsonLd />
      </head>
      <body
        className="min-h-screen flex flex-col bg-background text-titanium-100 selection:bg-signal selection:text-dark"
        suppressHydrationWarning
      >
        <PageTracker />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingChatbot />
      </body>
    </html>
  );
}
