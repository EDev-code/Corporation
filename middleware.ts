import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { pathname, search } = url

  // Redirection HTTPS (en production)
  if (process.env.NODE_ENV === "production" && request.headers.get("x-forwarded-proto") !== "https") {
    url.protocol = "https:"
    return NextResponse.redirect(url)
  }

  // Redirection www vers non-www (ou vice versa selon préférence)
  const hostname = request.headers.get("host")
  if (hostname?.startsWith("www.")) {
    url.hostname = hostname.replace("www.", "")
    return NextResponse.redirect(url, 301)
  }

  // Redirection des URLs avec double slash
  if (pathname.includes("//")) {
    url.pathname = pathname.replace(/\/+/g, "/")
    return NextResponse.redirect(url, 301)
  }

  // Redirection des URLs avec des caractères spéciaux
  const cleanPath = pathname
    .toLowerCase()
    .replace(/[^a-z0-9\-/]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")

  if (pathname !== cleanPath && cleanPath !== "") {
    url.pathname = cleanPath
    return NextResponse.redirect(url, 301)
  }

  // Redirection des anciennes URLs de développeur freelance
  const freelanceRedirects: Record<string, string> = {
    "/freelance": "/#about",
    "/developpeur-freelance": "/#about",
    "/freelance-benin": "/#about",
    "/developpeur-web-benin": "/#about",
    "/developpeur-web": "/#about",
    "/developpeur-mobile": "/#about",
    "/developpeur-graphisme": "/#about",
    "/developpeur-mobile-benin": "/#about",
    "/fullstack-developer": "/#about",
    "/hire-me": "/#contact",
    "/embaucher": "/#contact",
    "/devis": "/#contact",
    "/quote": "/#contact",
  }

  if (freelanceRedirects[pathname]) {
    url.pathname = "/"
    url.hash = freelanceRedirects[pathname].replace("/#", "")
    return NextResponse.redirect(url, 301)
  }

  // Redirection des URLs de technologies vers la section compétences
  const techRedirects = [
    "react",
    "nextjs",
    "next-js",
    "laravel",
    "php",
    "flutter",
    "dart",
    "firebase",
    "mysql",
    "postgresql",
    "nodejs",
    "node-js",
    "typescript",
    "javascript",
    "tailwind",
    "css",
    "html",
  ]

  if (techRedirects.some((tech) => pathname.includes(tech))) {
    url.pathname = "/"
    url.hash = "skills"
    return NextResponse.redirect(url, 301)
  }

  // Redirection des URLs de projets spécifiques
  if (pathname.startsWith("/project/") || pathname.startsWith("/projet/")) {
    url.pathname = "/"
    url.hash = "projects"
    return NextResponse.redirect(url, 301)
  }

  // Gestion des paramètres UTM (préservation pour analytics)
  const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]
  const hasUtmParams = utmParams.some((param) => url.searchParams.has(param))

  // Si pas de paramètres UTM et URL avec query string inutile, nettoyer
  if (!hasUtmParams && search && !pathname.includes("api")) {
    const allowedParams = ["ref", "source"]
    const searchParams = new URLSearchParams(search)
    let hasAllowedParams = false

    for (const [key] of searchParams) {
      if (!allowedParams.includes(key)) {
        searchParams.delete(key)
      } else {
        hasAllowedParams = true
      }
    }

    if (!hasAllowedParams) {
      url.search = ""
      return NextResponse.redirect(url, 301)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$|.*\\.ico$).*)",
  ],
}
