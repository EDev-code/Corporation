"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center px-6 py-12 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-lg">
        <h1 className="text-9xl font-extrabold text-blue-600 dark:text-blue-400 mb-4 animate-bounce">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Page non trouvée</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/">
              <Home className="w-5 h-5 mr-2 inline" />
              Retour à l'accueil
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5 mr-2 inline" />
            Page précédente
          </Button>
        </div>
      </div>
    </div>
  )
}



// "use client"

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Home, ArrowLeft } from "lucide-react"

// export default function NotFound() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
//       <div className="text-center px-4">
//         <div className="mb-8">
//           <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</h1>
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Page non trouvée</h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
//             Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
//           </p>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Button asChild size="lg">
//             <Link href="/">
//               <Home className="w-4 h-4 mr-2" />
//               Retour à l'accueil
//             </Link>
//           </Button>
//           <Button variant="outline" size="lg" onClick={() => window.history.back()}>
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Page précédente
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }
