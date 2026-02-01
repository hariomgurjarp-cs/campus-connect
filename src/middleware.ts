
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Next.js Middleware runs at the Edge, allowing you to execute code before a request is completed.
 * This is the equivalent of "Edge Config" logic within the Next.js and Firebase App Hosting stack.
 * You can use this for redirects, custom headers, or simple edge-side logic.
 */
export function middleware(request: NextRequest) {
  // Create a response based on the incoming request
  const response = NextResponse.next();

  // Example: Injecting a custom header at the edge
  response.headers.set('x-campus-connect-edge-status', 'optimized');

  return response;
}

/**
 * Configure which paths the middleware should run on.
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
