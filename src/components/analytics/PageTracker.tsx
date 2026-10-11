'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function PageTracker() {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || pathname === lastPath.current) return;
    lastPath.current = pathname;

    const payload = JSON.stringify({
      path: pathname,
      pageTitle: typeof document !== 'undefined' ? document.title : pathname,
      referrer: typeof document !== 'undefined' ? document.referrer : '',
    });

    try {
      if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
        const blob = new Blob([payload], { type: 'application/json' });
        navigator.sendBeacon('/api/analytics/hit', blob);
      } else {
        fetch('/api/analytics/hit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
          keepalive: true,
        }).catch(() => {
          // Graceful silence
        });
      }
    } catch {
      // Graceful silence
    }
  }, [pathname]);

  return null;
}
