import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify, JWTPayload } from 'jose'

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET as string)

async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY)
    return payload // Valid token
  } catch (error) {
    return null // Expired or invalid token
  }
}

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token-auth')?.value
  const protectedRoutes = ['/dashboard', '/profile', '/address', '/history', '/book']

  const url = req.nextUrl.clone() // Clone URL to modify it safely

  // Redirect logged-in users away from login & register pages
  if (token && (url.pathname === '/login' || url.pathname === '/register')) {
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }

  // Verify token for protected routes
  if (protectedRoutes.some((route) => url.pathname.startsWith(route))) {
    const decodedToken = token ? await verifyToken(token) : null

    if (!decodedToken) {
      console.log('Token expired or missing, redirecting to /login')

      const response = NextResponse.redirect(new URL('/login', req.url))
      response.cookies.delete('token-auth') // Properly delete expired token
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register', '/profile', '/address', '/history', '/book']
}
