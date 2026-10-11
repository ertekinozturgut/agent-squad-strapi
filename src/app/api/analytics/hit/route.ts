import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const path = typeof body.path === 'string' ? body.path : '/';
    const pageTitle = typeof body.pageTitle === 'string' ? body.pageTitle : path;
    const referrer = typeof body.referrer === 'string' ? body.referrer : req.headers.get('referer') || 'Direct';

    const strapiBaseUrl = process.env.STRAPI_URL || 'http://localhost:1337';
    const clientIp =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      '127.0.0.1';
    const userAgent = req.headers.get('user-agent') || '';

    // Forward to Strapi analytics hit endpoint asynchronously
    fetch(`${strapiBaseUrl}/api/analytics/hit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': clientIp,
        'user-agent': userAgent,
      },
      body: JSON.stringify({
        path,
        pageTitle,
        referrer,
      }),
    }).catch(() => {
      // Graceful background silence
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
