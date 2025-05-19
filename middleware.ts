import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-url', request.nextUrl.toString());

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  return response
}