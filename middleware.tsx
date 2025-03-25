import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // List of protected routes
  const protectedRoutes = ["/dashboard", "/profile", "/settings"];

  // Redirect to /login if trying to access a protected route without a token
  if (!token && protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"], // Only protect these routes
};
