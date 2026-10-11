'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#work', label: 'Work' },
    { href: '/#services', label: 'Advisory & Training' },
    { href: '/insights', label: 'Insights' },
    { href: '/#contact', label: 'Contact' },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/insights') {
      return pathname === '/insights' || pathname?.startsWith('/articles') || pathname?.startsWith('/insights/');
    }
    if (href === '/#work' || href === '/work') {
      return pathname === '/work' || pathname?.startsWith('/work/');
    }
    if (href === '/#about' || href === '/about') {
      return pathname === '/about';
    }
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-light bg-canvas/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand identity - Minimal Monospace / Sans Logotype */}
        <Link
          href="/"
          title="Enterprise AI & Solutions Lead"
          aria-label="Ertekin Özturgut | Enterprise AI & Solutions Lead"
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark"
        >
          <span className="w-2 h-2 bg-signal rounded-none inline-block group-hover:scale-110 transition-transform" />
          <span className="font-mono text-sm font-semibold tracking-widest text-ink uppercase">
            ERTEKIN OZTURGUT
          </span>
        </Link>

        {/* Desktop Navigation - Scale AI / Palantir Minimal Architecture */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`text-xs font-mono tracking-wider uppercase transition-colors relative py-1 ${
                  active
                    ? 'text-ink font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-signal'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions - LinkedIn & Resume External Links */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/ertekinozturgut"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs text-ink-muted hover:text-ink transition-colors uppercase tracking-wider"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-ink-muted group-hover:text-ink" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs px-3 py-1.5 border border-border-light hover:border-ink bg-white text-ink rounded-[2px] transition-colors uppercase tracking-wider"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="p-2 text-ink hover:bg-canvas-subtle rounded-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border-light bg-canvas-white px-6 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={`font-mono text-sm tracking-wider uppercase py-1 ${
                    active ? 'text-ink font-bold border-l-2 border-signal pl-2' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-border-light flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/in/ertekinozturgut"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between py-2 font-mono text-xs text-ink uppercase tracking-wider"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 font-mono text-xs py-2 px-4 bg-dark text-white rounded-[2px] uppercase tracking-wider"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
