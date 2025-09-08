"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Database, Globe } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: <Globe className="w-10 h-10 text-white" />,
      title: "Applications Web",
      description: "Développement d'applications web modernes avec Next.js et Laravel",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-white" />,
      title: "Applications Mobile",
      description: "Création d'apps mobiles cross-platform avec Flutter",
      color: "from-teal-400 to-cyan-500",
    },
    {
      icon: <Database className="w-10 h-10 text-white" />,
      title: "Backend & API",
      description: "Architecture backend robuste et APIs RESTful performantes",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Code className="w-10 h-10 text-white" />,
      title: "Solutions Complètes",
      description: "De l'idée au déploiement, je gère tous les aspects techniques",
      color: "from-yellow-400 to-orange-500",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">À propos de moi</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Développeur fullstack passionné, spécialisé dans les technologies web et mobile modernes. Je crée des
            solutions digitales qui répondent aux besoins réels des entreprises et startups.
          </p>
        </div>

        {/* Photo entre header et vision */}
        <div className="mb-12 w-full flex justify-center">
          <div className="w-full max-w-md h-95 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/chef.jpg"
              alt="Etienne METOEVI"
              className="w-full h-full object-cover brightness-90 transition duration-500 hover:brightness-100"
            />
          </div>
        </div>

        {/* Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Ma vision</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              La technologie doit servir l'humain. Mon approche consiste à comprendre vos besoins pour créer des solutions sur mesure, performantes et évolutives.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Spécialisé dans l'écosystème JavaScript/TypeScript et les technologies modernes, je vous accompagne de la conception à la mise en production.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Flutter",
                "FlutterFlow",
                "Laravel",
                "Next.js",
                "Firebase",
                "TypeScript",
                "React",
                "WordPress",
                "Django",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-full text-sm font-medium transition transform hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {/* On peut mettre un élément vide ou décoration ici pour l'équilibre sur desktop */}
          <div className="hidden md:block"></div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 bg-gradient-to-br ${feature.color}`}
            >
              <CardContent className="p-6 text-center text-white">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Code, Smartphone, Database, Globe } from "lucide-react"

// export default function AboutSection() {
//   const features = [
//     {
//       icon: <Globe className="w-8 h-8 text-blue-600" />,
//       title: "Applications Web",
//       description: "Développement d'applications web modernes avec Next.js et Laravel",
//     },
//     {
//       icon: <Smartphone className="w-8 h-8 text-blue-600" />,
//       title: "Applications Mobile",
//       description: "Création d'apps mobiles cross-platform avec Flutter",
//     },
//     {
//       icon: <Database className="w-8 h-8 text-blue-600" />,
//       title: "Backend & API",
//       description: "Architecture backend robuste et APIs RESTful performantes",
//     },
//     {
//       icon: <Code className="w-8 h-8 text-blue-600" />,
//       title: "Solutions Complètes",
//       description: "De l'idée au déploiement, je gère tous les aspects techniques",
//     },
//   ]

//   return (
//     <section id="about" className="py-20 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">À propos de moi</h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             Développeur fullstack passionné avec une expertise en technologies web et mobile modernes. Je crée des
//             solutions digitales qui répondent aux besoins réels des entreprises et startups.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Ma vision</h3>
//             <p className="text-gray-600 dark:text-gray-300 mb-4">
//               Je crois que la technologie doit servir l'humain. Mon approche consiste à comprendre vos besoins métier
//               pour créer des solutions sur mesure, performantes et évolutives.
//             </p>
//             <p className="text-gray-600 dark:text-gray-300 mb-6">
//               Spécialisé dans l'écosystème JavaScript/TypeScript et les technologies modernes, je vous accompagne de la
//               conception à la mise en production de vos projets digitaux.
//             </p>

//             <div className="flex flex-wrap gap-3">
//               {[
//                 "Flutter",
//                 "FlutterFlow",
//                 "Laravel",
//                 "Next.js",
//                 "Firebase",
//                 "TypeScript",
//                 "React",
//                 "WordPress",
//                 "Django",
//               ].map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="relative">
//             <div className="w-full h-90 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl overflow-hidden shadow-2xl">
//               <img
//                 src="etienne.jpg" // ← image locale depuis /public/images
//                 alt="EDev, Etienne METOEVI"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((feature, index) => (
//             <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardContent className="p-6 text-center">
//                 <div className="mb-4 flex justify-center">{feature.icon}</div>
//                 <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
