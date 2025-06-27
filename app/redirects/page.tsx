import type { Metadata } from "next"
import RedirectTester from "@/components/redirect-tester"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Test des Redirections",
  description: "Page de test pour vérifier les redirections 301",
  robots: {
    index: false,
    follow: false,
  },
}

// Page de test des redirections (seulement en développement)
export default function RedirectsTestPage() {
  if (process.env.NODE_ENV !== "development") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Page non disponible</h1>
          <p className="text-gray-600 dark:text-gray-400">Cette page n'est disponible qu'en mode développement.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">🔄 Test des Redirections 301</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Interface complète pour tester et valider toutes les redirections configurées sur le portfolio d'Étienne.
          </p>
        </div>

        <RedirectTester />

        <div className="max-w-6xl mx-auto mt-12 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">📋 Configuration des Redirections</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Toutes les redirections 301 configurées pour optimiser le SEO et l'expérience utilisateur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
                <CardTitle className="text-blue-700 dark:text-blue-300 flex items-center gap-2">
                  🏠 Pages Principales
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code className="text-red-600">/about</code>
                    <span>→</span>
                    <code className="text-green-600">/#about</code>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-red-600">/portfolio</code>
                    <span>→</span>
                    <code className="text-green-600">/#projects</code>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-red-600">/contact</code>
                    <span>→</span>
                    <code className="text-green-600">/#contact</code>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-red-600">/skills</code>
                    <span>→</span>
                    <code className="text-green-600">/#skills</code>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-red-600">/experience</code>
                    <span>→</span>
                    <code className="text-green-600">/#experience</code>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">+8 autres redirections</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-800">
              <CardHeader className="bg-green-50 dark:bg-green-900/20">
                <CardTitle className="text-green-700 dark:text-green-300 flex items-center gap-2">
                  💼 Services & Freelance
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code className="text-red-600">/services</code>
                    <span>→</span>
                    <code className="text-green-600">/#about</code>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-red-600">/freelance</code>
                    <span>→</span>
                    <code className="text-green-600">/#about</code>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-red-600">/hire-me</code>
                    <span>→</span>
                    <code className="text-green-600">/#contact</code>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-red-600">/devis</code>
                    <span>→</span>
                    <code className="text-green-600">/#contact</code>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">+4 autres redirections</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 dark:border-purple-800">
              <CardHeader className="bg-purple-50 dark:bg-purple-900/20">
                <CardTitle className="text-purple-700 dark:text-purple-300 flex items-center gap-2">
                  ⚡ Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code className="text-red-600">/nextjs</code>
                    <span>→</span>
                    <code className="text-green-600">/#skills</code>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-red-600">/laravel</code>
                    <span>→</span>
                    <code className="text-green-600">/#skills</code>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-red-600">/flutter</code>
                    <span>→</span>
                    <code className="text-green-600">/#skills</code>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-red-600">/react</code>
                    <span>→</span>
                    <code className="text-green-600">/#skills</code>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">+6 autres redirections</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 dark:border-orange-800">
              <CardHeader className="bg-orange-50 dark:bg-orange-900/20">
                <CardTitle className="text-orange-700 dark:text-orange-300 flex items-center gap-2">
                  🔤 Variations de Casse
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code className="text-red-600">/About</code>
                    <span>→</span>
                    <code className="text-green-600">/#about</code>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-red-600">/Portfolio</code>
                    <span>→</span>
                    <code className="text-green-600">/#projects</code>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-red-600">/Contact</code>
                    <span>→</span>
                    <code className="text-green-600">/#contact</code>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">Gestion automatique via middleware</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-800">
              <CardHeader className="bg-red-50 dark:bg-red-900/20">
                <CardTitle className="text-red-700 dark:text-red-300 flex items-center gap-2">
                  🗂️ Anciennes URLs
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code className="text-red-600">/index.html</code>
                    <span>→</span>
                    <code className="text-green-600">/</code>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-red-600">/home.html</code>
                    <span>→</span>
                    <code className="text-green-600">/</code>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-red-600">/blog</code>
                    <span>→</span>
                    <code className="text-green-600">/</code>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-red-600">/admin</code>
                    <span>→</span>
                    <code className="text-green-600">/</code>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">+3 autres redirections</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700">
              <CardHeader className="bg-gray-50 dark:bg-gray-800">
                <CardTitle className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  🛡️ Middleware & Sécurité
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>HTTPS forcé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Suppression www</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Nettoyage URLs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Préservation UTM</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">Gestion automatique</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-700 dark:text-blue-300 flex items-center gap-2">
                📊 Instructions d'Utilisation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Test Manuel</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Entrez une URL complète ou un chemin relatif</li>
                    <li>Cliquez sur "Tester" pour vérifier la redirection</li>
                    <li>Analysez le résultat JSON retourné</li>
                    <li>Vérifiez le status code et la destination</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Test Automatique</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Cliquez sur "Tester Tout" pour lancer tous les tests</li>
                    <li>Suivez la progression en temps réel</li>
                    <li>Consultez le résumé des tests réussis/échoués</li>
                    <li>Exportez les résultats en CSV si nécessaire</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
