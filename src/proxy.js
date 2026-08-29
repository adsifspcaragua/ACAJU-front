import { NextResponse } from 'next/server'
import { decrypt } from './lib/session'
import { cookies } from 'next/headers'

// 28/08/2026, docs da proxt the authorization do next usado nesse código.
// https://nextjs.org/docs/app/guides/authentication#authorization

// 1. Specify protected and public routes
// const protectedRoutes = ['/admin/meuPerfil', '/admin/painelAdmin', '/admin/gerenciarEquipe']
const publicRoutes = ['/admin/login', '/']

export default async function proxy(req) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  // const isProtectedRoute = protectedRoutes.includes(path)

  const isPublicRoute = publicRoutes.includes(path)
  const isProtectedRoute = path.startsWith('/admin') && !isPublicRoute;

  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)

  // 5. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/admin/login', req.nextUrl))
  }

  if (
    isPublicRoute &&
    session?.userId
  ) {
    return NextResponse.redirect(new URL('/admin/meuPerfil', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}