import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// پیشوندهای ۱۱۵ آدرس منسوخ شده بر اساس شیت Legacy Migration
const GONE_PREFIXES = [
  '/tag/',
  '/product-tag/',
  '/project-cat/',
  '/author/',
  '/woodmart_slider/',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (GONE_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return new NextResponse(
      '410 Gone: The requested resource has been permanently removed as part of Mitech architectural migration.',
      {
        status: 410,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'X-Robots-Tag': 'noindex, nofollow',
        },
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/tag/:path*',
    '/product-tag/:path*',
    '/project-cat/:path*',
    '/author/:path*',
    '/woodmart_slider/:path*',
  ],
};
