import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border-light bg-canvas-white py-16 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-border-light">
          
          {/* Identity & Current Focus */}
          <div className="md:col-span-6 space-y-3">
            <Link
              href="/"
              className="font-mono text-sm font-bold tracking-widest text-ink uppercase inline-flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-signal rounded-none" />
              <span>ERTEKIN OZTURGUT</span>
            </Link>
            <p className="font-mono text-xs text-ink-muted">
              AI Solutions Engineer · Enterprise AI & Digital Transformation
            </p>
            <p className="font-mono text-xs text-ink-faint">
              Istanbul · Türkiye
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ink-faint block mb-3">
              NAVIGATION
            </span>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <Link href="/#about" className="text-ink-muted hover:text-ink transition-colors uppercase">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="text-ink-muted hover:text-ink transition-colors uppercase">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/#work" className="text-ink-muted hover:text-ink transition-colors uppercase">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-ink-muted hover:text-ink transition-colors uppercase">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-ink-muted hover:text-ink transition-colors uppercase">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-ink-muted hover:text-ink transition-colors uppercase">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social / Direct Channels */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ink-faint block mb-3">
              CONNECT
            </span>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a
                  href="https://www.linkedin.com/in/ertekinozturgut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-ink-muted hover:text-ink transition-colors uppercase"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@ertekinozturgut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-ink-muted hover:text-ink transition-colors uppercase"
                >
                  <span>Medium</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:ertekinozturgut@gmail.com"
                  className="inline-flex items-center gap-1 text-ink-muted hover:text-ink transition-colors uppercase"
                >
                  <span>Email</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-ink-faint">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Ertekin Özturgut. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>ARCHITECTURE //</span>
            <span className="text-ink">PRODUCTION AI · ENTERPRISE SYSTEMS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
