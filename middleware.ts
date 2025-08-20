// middleware.ts
import { NextResponse, NextRequest } from 'next/server'
import { headers } from 'next/headers'

export const middleware = async (request: NextRequest) => {
  // Your middleware logic here
  console.log('Middleware is running for:', request.nextUrl.pathname)

  // authentication check example
  if(request.nextUrl.pathname.startsWith('/api')) {
    const authHeader = (await headers()).get('Authorization')
    // If no Authorization header is present, return a 401 Unauthorized response
    if (!authHeader) {
      return NextResponse.json(
        { success: false, message: 'Authorization header is required' },
        { status: 401 }
      )
    }

  }
  return NextResponse.next()
}

// BY DEFAULT Middleware runs on all routes
// To run middleware on specific routes, you can use the matcher property
export const config = {
  // matcher: [ '/dashboard/:path*', '/api/:path*' ],

  // for all endpoints of api
  matcher: ['/api/:path*', '/dashboard/:path*'],
}