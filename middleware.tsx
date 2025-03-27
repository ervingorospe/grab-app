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
  const protectedRoutes = ['/dashboard', '/profile', '/settings']

  // If user is logged in and tries to access /login or /register, redirect to dashboard
  if (token && (req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/register')) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  // Check token validity for protected routes
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    const decodedToken = token ? await verifyToken(token) : null

    if (!decodedToken) {
      console.log('Token expired or missing, redirecting to /login')

      // ⚠️ Important: Use `return new Response()` to avoid "This page isn’t working" error
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/settings/:path*', '/login', '/register']
}
