import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const rateLimit = new Map();

export async function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
  const limit = 15; // 분당 15회 (페이지 요청만 카운트)
  const windowMs = 60 * 1000; // 1분

  const now = Date.now();
  const windowStart = now - windowMs;

  const requestHistory = rateLimit.get(ip) || [];
  const recentRequests = requestHistory.filter((timestamp: number) => timestamp > windowStart);

  const success = recentRequests.length < limit;
  const remaining = Math.max(0, limit - recentRequests.length);

  if (!success) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'X-RateLimit-Remaining': remaining.toString(),
        'Retry-After': '60'
      }
    });
  }

  recentRequests.push(now);
  rateLimit.set(ip, recentRequests);

  return NextResponse.next();
}

export const config = {
  matcher: [
    // HTML 페이지만 rate limiting 적용 (이미지, 정적 파일 제외)
    '/((?!api|_next|static|public|favicon.ico|robots.txt|sitemap.xml|.*\\.).*)',
  ],
};