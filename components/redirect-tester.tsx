"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, Clock, Download, RefreshCw, ExternalLink } from "lucide-react"

interface RedirectTest {
  source: string
  expected: string
  status?: number
  actual?: string
  success?: boolean
  error?: string
  responseTime?: number
}

interface TestResults {
  total: number
  passed: number
  failed: number
  tests: RedirectTest[]
}

export default function RedirectTester() {
  const [testUrl, setTestUrl] = useState("")
  const [singleResult, setSingleResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [autoTesting, setAutoTesting] = useState(false)
  const [testResults, setTestResults] = useState<TestResults | null>(null)
  const [progress, setProgress] = useState(0)

  // Configuration des redirections à tester
  const redirectsToTest: RedirectTest[] = [
    // Pages principales
    { source: "/about", expected: "/#about" },
    { source: "/about-me", expected: "/#about" },
    { source: "/portfolio", expected: "/#projects" },
    { source: "/work", expected: "/#projects" },
    { source: "/projects", expected: "/#projects" },
    { source: "/skills", expected: "/#skills" },
    { source: "/competences", expected: "/#skills" },
    { source: "/experience", expected: "/#experience" },
    { source: "/cv", expected: "/#experience" },
    { source: "/resume", expected: "/#experience" },
    { source: "/contact", expected: "/#contact" },
    { source: "/contact-me", expected: "/#contact" },
    { source: "/get-in-touch", expected: "/#contact" },

    // Variations de casse
    { source: "/About", expected: "/#about" },
    { source: "/Portfolio", expected: "/#projects" },
    { source: "/Contact", expected: "/#contact" },

    // Services
    { source: "/services", expected: "/#about" },
    { source: "/services/web-development", expected: "/#projects" },
    { source: "/services/mobile-development", expected: "/#projects" },
    { source: "/freelance", expected: "/#about" },
    { source: "/developpeur-freelance", expected: "/#about" },
    { source: "/hire-me", expected: "/#contact" },
    { source: "/devis", expected: "/#contact" },

    // Technologies
    { source: "/nextjs", expected: "/#skills" },
    { source: "/next-js", expected: "/#skills" },
    { source: "/laravel", expected: "/#skills" },
    { source: "/flutter", expected: "/#skills" },
    { source: "/firebase", expected: "/#skills" },
    { source: "/react", expected: "/#skills" },

    // Anciennes URLs
    { source: "/index.html", expected: "/" },
    { source: "/index.php", expected: "/" },
    { source: "/home.html", expected: "/" },
    { source: "/blog", expected: "/" },
    { source: "/admin", expected: "/" },
  ]

  const testSingleRedirect = async () => {
    if (!testUrl) return

    setLoading(true)
    try {
      const startTime = Date.now()
      const response = await fetch(`/api/redirect-check?url=${encodeURIComponent(testUrl)}`)
      const responseTime = Date.now() - startTime
      const data = await response.json()
      setSingleResult({ ...data, responseTime })
    } catch (error) {
      setSingleResult({ error: "Failed to test redirect" })
    }
    setLoading(false)
  }

  const testAllRedirects = async () => {
    setAutoTesting(true)
    setProgress(0)
    const results: RedirectTest[] = []
    const baseUrl = window.location.origin

    for (let i = 0; i < redirectsToTest.length; i++) {
      const test = redirectsToTest[i]
      const fullUrl = baseUrl + test.source

      try {
        const startTime = Date.now()
        const response = await fetch(fullUrl, {
          method: "HEAD",
          redirect: "manual",
        })
        const responseTime = Date.now() - startTime

        const actualLocation = response.headers.get("location")
        const isRedirect = response.status >= 300 && response.status < 400

        let success = false
        let actual = actualLocation || "No redirect"

        if (isRedirect && actualLocation) {
          // Normaliser les URLs pour la comparaison
          const expectedFull = test.expected.startsWith("/") ? baseUrl + test.expected : test.expected
          const actualNormalized = actualLocation.startsWith("/") ? baseUrl + actualLocation : actualLocation
          success = actualNormalized === expectedFull || actualLocation === test.expected
          actual = actualLocation
        }

        results.push({
          ...test,
          status: response.status,
          actual,
          success,
          responseTime,
        })
      } catch (error) {
        results.push({
          ...test,
          error: error instanceof Error ? error.message : "Unknown error",
          success: false,
        })
      }

      setProgress(((i + 1) / redirectsToTest.length) * 100)
    }

    const passed = results.filter((r) => r.success).length
    const failed = results.length - passed

    setTestResults({
      total: results.length,
      passed,
      failed,
      tests: results,
    })
    setAutoTesting(false)
  }

  const exportResults = () => {
    if (!testResults) return

    const csvContent = [
      ["Source", "Expected", "Actual", "Status", "Success", "Response Time (ms)", "Error"].join(","),
      ...testResults.tests.map((test) =>
        [
          test.source,
          test.expected,
          test.actual || "",
          test.status || "",
          test.success ? "PASS" : "FAIL",
          test.responseTime || "",
          test.error || "",
        ].join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `redirect-tests-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  // Seulement visible en développement
  if (process.env.NODE_ENV !== "development") {
    return null
  }

  return (
    <div className="space-y-6">
      {/* Test manuel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ExternalLink className="w-5 h-5" />
            Test Manuel
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="https://example.com/old-url ou /about"
              value={testUrl}
              onChange={(e) => setTestUrl(e.target.value)}
              className="flex-1"
            />
            <Button onClick={testSingleRedirect} disabled={loading}>
              {loading ? <Clock className="w-4 h-4 animate-spin" /> : "Tester"}
            </Button>
          </div>

          {singleResult && (
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <pre className="text-sm overflow-x-auto">{JSON.stringify(singleResult, null, 2)}</pre>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Test automatique */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <RefreshCw className="w-5 h-5" />
              Test Automatique de Toutes les Redirections
            </div>
            <div className="flex gap-2">
              <Button onClick={testAllRedirects} disabled={autoTesting} variant="default">
                {autoTesting ? (
                  <>
                    <Clock className="w-4 h-4 animate-spin mr-2" />
                    Test en cours...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Tester Tout ({redirectsToTest.length})
                  </>
                )}
              </Button>
              {testResults && (
                <Button onClick={exportResults} variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Exporter CSV
                </Button>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {autoTesting && (
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Progression du test</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="w-full" />
            </div>
          )}

          {testResults && (
            <div className="space-y-4">
              {/* Résumé */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{testResults.total}</div>
                  <div className="text-sm text-blue-600">Total</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{testResults.passed}</div>
                  <div className="text-sm text-green-600">Réussis</div>
                </div>
                <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{testResults.failed}</div>
                  <div className="text-sm text-red-600">Échoués</div>
                </div>
              </div>

              {/* Détails des tests */}
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {testResults.tests.map((test, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      test.success
                        ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                        : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {test.success ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                        <div>
                          <div className="font-mono text-sm">
                            <span className="font-semibold">{test.source}</span>
                            <span className="mx-2">→</span>
                            <span className="text-gray-600 dark:text-gray-400">{test.expected}</span>
                          </div>
                          {!test.success && (
                            <div className="text-xs text-red-600 mt-1">{test.error || `Actual: ${test.actual}`}</div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {test.status && (
                          <Badge variant={test.status === 301 ? "default" : "secondary"}>{test.status}</Badge>
                        )}
                        {test.responseTime && (
                          <Badge variant="outline" className="text-xs">
                            {test.responseTime}ms
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
