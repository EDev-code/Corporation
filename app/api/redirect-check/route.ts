import { type NextRequest, NextResponse } from "next/server"

// API améliorée pour vérifier les redirections
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get("url")

  if (!url) {
    return NextResponse.json({ error: "URL parameter is required" }, { status: 400 })
  }

  try {
    const startTime = Date.now()

    // Construire l'URL complète si nécessaire
    let testUrl = url
    if (url.startsWith("/")) {
      const baseUrl = request.nextUrl.origin
      testUrl = baseUrl + url
    }

    const response = await fetch(testUrl, {
      method: "HEAD",
      redirect: "manual",
      headers: {
        "User-Agent": "RedirectTester/1.0",
      },
    })

    const responseTime = Date.now() - startTime
    const location = response.headers.get("location")
    const isRedirect = response.status >= 300 && response.status < 400

    return NextResponse.json({
      url: testUrl,
      status: response.status,
      statusText: response.statusText,
      redirected: isRedirect,
      location: location,
      responseTime: responseTime,
      headers: {
        "content-type": response.headers.get("content-type"),
        "cache-control": response.headers.get("cache-control"),
        server: response.headers.get("server"),
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to check URL",
        details: error instanceof Error ? error.message : "Unknown error",
        url: url,
      },
      { status: 500 },
    )
  }
}

// Endpoint pour tester plusieurs redirections en batch
export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json()

    if (!Array.isArray(urls)) {
      return NextResponse.json({ error: "URLs must be an array" }, { status: 400 })
    }

    const results = await Promise.all(
      urls.map(async (url: string) => {
        try {
          const startTime = Date.now()
          let testUrl = url
          if (url.startsWith("/")) {
            const baseUrl = request.nextUrl.origin
            testUrl = baseUrl + url
          }

          const response = await fetch(testUrl, {
            method: "HEAD",
            redirect: "manual",
            headers: {
              "User-Agent": "RedirectTester/1.0",
            },
          })

          const responseTime = Date.now() - startTime
          const location = response.headers.get("location")
          const isRedirect = response.status >= 300 && response.status < 400

          return {
            url: testUrl,
            originalUrl: url,
            status: response.status,
            redirected: isRedirect,
            location: location,
            responseTime: responseTime,
            success: true,
          }
        } catch (error) {
          return {
            url: url,
            originalUrl: url,
            error: error instanceof Error ? error.message : "Unknown error",
            success: false,
          }
        }
      }),
    )

    return NextResponse.json({
      total: results.length,
      results: results,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to process batch request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
