"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      title: "ShowBiz",
      description:
        "ShowBiz est une plateforme de valorisation des artistes avec la possibilité de monétiser leurs contenus. Elle dispose d'interfaces dédiées pour les administrateurs, les artistes et les particuliers.",
      image: "/showbiz.png",
      technologies: ["Next.js", "Neon", "TypeScript", "TailwindCss", "Stripe", "AdMod"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      "title": "EDevSpace",
      "description": "EDevSpace est un site web complet pour une entreprise. Il offre une interface moderne et entièrement responsive.",
      "image": "/edevspace.png",
      "technologies": ["Next.js", "Neon", "TypeScript", "TailwindCss"],
      "liveUrl": "#",
      "codeUrl": "#"
    },
    {
      "title": "Uniklove mobile",
      "description": "Uniklove mobile est une application de rencontre et de matching relationnel. Elle permet aux utilisateurs de se connecter selon leurs affinités.",
      "image": "/uniklove.png",
      "technologies": ["FlutterFlow", "Firebase", "Dart", "Cloud Functions"],
      "liveUrl": "https://uniklove.com/",
      "codeUrl": "#"
    },
    {
      "title": "Uniklove web",
      "description": "Uniklove web est la version web de l'application de rencontre. Elle facilite le matching relationnel depuis un navigateur.",
      "image": "/unikloveweb.png",
      "technologies": ["FlutterFlow", "Firebase", "Dart", "Cloud Functions"],
      "liveUrl": "https://uniklove.com/",
      "codeUrl": "#"
    },
    {
      "title": "CampusHome",
      "description": "CampusHome est une plateforme de gestion de logements étudiants. Les propriétaires peuvent ajouter des logements vérifiés et les étudiants peuvent réserver facilement, avec contrats et reçus générés automatiquement.",
      "image": "/campusHome.png",
      "technologies": ["Laravel", "TailwindCss", "MySQL", "CSS", "JavaScript"],
      "liveUrl": "#",
      "codeUrl": "#"
    },
    {
      "title": "DeBi",
      "description": "DeBi est un portfolio moderne présentant le parcours d'une pharmacienne. Il met en avant ses compétences et réalisations professionnelles.",
      "image": "/portfolioDel.jpg",
      "technologies": ["Next.js", "TailwindCss", "Formspree"],
      "liveUrl": "https://enet.infinityfreeapp.com/",
      "codeUrl": "#"
    },
    {
      "title": "Photography",
      "description": "Photography est un portfolio présentant le parcours, les services et les réalisations d'un photographe. Il offre une expérience visuelle immersive pour les visiteurs.",
      "image": "/portfolioKitti.png",
      "technologies": ["Next.js", "TailwindCss", "Formspree"],
      "liveUrl": "https://eloge-one.vercel.app/",
      "codeUrl": "#"
    },
    {
      "title": "Portfolio",
      "description": "Portfolio présente le parcours de EDev. Il met en avant ses compétences et ses projets réalisés.",
      "image": "/portfolio.png",
      "technologies": ["PHP", "CSS", "MySQL", "JavaScript", "Bootstrap"],
      "liveUrl": "https://enet.infinityfreeapp.com/",
      "codeUrl": "#"
    },
    {
      "title": "E-ServN",
      "description": "E-ServN est une plateforme de restauration multi-espaces. On peut y ajouter des restaurants, suivre les commandes et gérer les livraisons avec des espaces pour administrateurs, livreurs et clients.",
      "image": "/eservnResto.png",
      "technologies": ["Next.js", "TailwindCss", "Formspree"],
      "liveUrl": "https://eservn.vercel.app/",
      "codeUrl": "#"
    },
    {
      "title": "Tourisme",
      "description": "Tourisme est une plateforme de tourisme au Bénin. Elle permet de réserver et de payer directement via la plateforme.",
      "image": "/tourism.png",
      "technologies": ["Next.js", "TailwindCss", "PostgreSQL", "Stripe"],
      "liveUrl": "https://enet.infinityfreeapp.com/",
      "codeUrl": "#"
    },
    {
      "title": "Alex.dev",
      "description": "Alex.dev est le portfolio d'un développeur web fullstack. Il présente ses compétences, projets et réalisations.",
      "image": "/alexdev.jpg",
      "technologies": ["Next.js", "TailwindCss", "Formspree", "TypeScript"],
      "liveUrl": "https://vercel.com/metoevi-etiennes-projects/edevcode",
      "codeUrl": "#"
    },
    {
      "title": "E-ServX Wifi",https://eloge-one.vercel.app/
      "description": "E-ServX Wifi est une plateforme de vente de wifi zone. Elle offre une interface moderne adaptée à l'expérience utilisateur.",
      "image": "/wifi.png",
      "technologies": ["Next.js", "TailwindCss", "TypeScript", "PostgreSQL"],
      "liveUrl": "https://kzmnto6e3mo6991bbcjt.lite.vusercontent.net/",
      "codeUrl": "#"
    }
  ]
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez quelques-unes de mes réalisations récentes, alliant innovation technique et design moderne.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              {/* Image pleine largeur */}
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-700 text-blue-800 dark:text-blue-200 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button size="sm" asChild className="flex-1 rounded-full">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir le projet
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}




// "use client"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ExternalLink, Github } from "lucide-react"
// import Image from "next/image"

// export default function ProjectsSection() {
//   const projects = [
//      {
  //     "title": "ShowBiz",
  //     "description": "ShowBiz est une plateforme de valorisation des artistes avec la possibilité de monétiser leurs contenus. Elle dispose d'interfaces dédiées pour les administrateurs, les artistes et les particuliers.",
  //     "image": "/showbiz.png",
  //     "technologies": ["Next.js", "Neon", "TypeScript", "TailwindCss", "Stripe", "AdMod"],
  //     "liveUrl": "#",
  //     "codeUrl": "#"
  //   },
  //   {
  //     "title": "EDevSpace",
  //     "description": "EDevSpace est un site web complet pour une entreprise. Il offre une interface moderne et entièrement responsive.",
  //     "image": "/edevspace.png",
  //     "technologies": ["Next.js", "Neon", "TypeScript", "TailwindCss"],
  //     "liveUrl": "#",
  //     "codeUrl": "#"
  //   },
  //   {
  //     "title": "Uniklove mobile",
  //     "description": "Uniklove mobile est une application de rencontre et de matching relationnel. Elle permet aux utilisateurs de se connecter selon leurs affinités.",
  //     "image": "/uniklove.png",
  //     "technologies": ["FlutterFlow", "Firebase", "Dart", "Cloud Functions"],
  //     "liveUrl": "https://uniklove.com/",
  //     "codeUrl": "#"
  //   },
  //   {
  //     "title": "Uniklove web",
  //     "description": "Uniklove web est la version web de l'application de rencontre. Elle facilite le matching relationnel depuis un navigateur.",
  //     "image": "/unikloveweb.png",
  //     "technologies": ["FlutterFlow", "Firebase", "Dart", "Cloud Functions"],
  //     "liveUrl": "https://uniklove.com/",
  //     "codeUrl": "#"
  //   },
  //   {
  //     "title": "CampusHome",
  //     "description": "CampusHome est une plateforme de gestion de logements étudiants. Les propriétaires peuvent ajouter des logements vérifiés et les étudiants peuvent réserver facilement, avec contrats et reçus générés automatiquement.",
  //     "image": "/campushome.png",
  //     "technologies": ["Laravel", "TailwindCss", "MySQL", "CSS", "JavaScript"],
  //     "liveUrl": "#",
  //     "codeUrl": "#"
  //   },
  //   {
  //     "title": "DeBi",
  //     "description": "DeBi est un portfolio moderne présentant le parcours d'une pharmacienne. Il met en avant ses compétences et réalisations professionnelles.",
  //     "image": "/portfolioDel.jpg",
  //     "technologies": ["Next.js", "TailwindCss", "Formspree"],
  //     "liveUrl": "https://enet.infinityfreeapp.com/",
  //     "codeUrl": "#"
  //   },
  //   {
  //     "title": "Photography",
  //     "description": "Photography est un portfolio présentant le parcours, les services et les réalisations d'un photographe. Il offre une expérience visuelle immersive pour les visiteurs.",
  //     "image": "/portfolioKitti.png",
  //     "technologies": ["Next.js", "TailwindCss", "Formspree"],
  //     "liveUrl": "https://enet.infinityfreeapp.com/",
  //     "codeUrl": "#"
  //   },
  //   {
  //     "title": "Portfolio",
  //     "description": "Portfolio présente le parcours de EDev. Il met en avant ses compétences et ses projets réalisés.",
  //     "image": "/portfolio.png",
  //     "technologies": ["PHP", "CSS", "MySQL", "JavaScript", "Bootstrap"],
  //     "liveUrl": "https://enet.infinityfreeapp.com/",
  //     "codeUrl": "#"
  //   },
  //   {
  //     "title": "E-ServN",
  //     "description": "E-ServN est une plateforme de restauration multi-espaces. On peut y ajouter des restaurants, suivre les commandes et gérer les livraisons avec des espaces pour administrateurs, livreurs et clients.",
  //     "image": "/eservnResto.png",
  //     "technologies": ["Next.js", "TailwindCss", "Formspree"],
  //     "liveUrl": "https://enet.infinityfreeapp.com/",
  //     "codeUrl": "#"
  //   },
  //   {
  //     "title": "Tourisme",
  //     "description": "Tourisme est une plateforme de tourisme au Bénin. Elle permet de réserver et de payer directement via la plateforme.",
  //     "image": "/tourism.png",
  //     "technologies": ["Next.js", "TailwindCss", "PostgreSQL", "Stripe"],
  //     "liveUrl": "https://enet.infinityfreeapp.com/",
  //     "codeUrl": "#"
  //   },
  //   {
  //     "title": "Alex.dev",
  //     "description": "Alex.dev est le portfolio d'un développeur web fullstack. Il présente ses compétences, projets et réalisations.",
  //     "image": "/alexdev.jpg",
  //     "technologies": ["Next.js", "TailwindCss", "Formspree", "TypeScript"],
  //     "liveUrl": "#",
  //     "codeUrl": "#"
  //   },
  //   {
  //     "title": "E-ServX Wifi",
  //     "description": "E-ServX Wifi est une plateforme de vente de wifi zone. Elle offre une interface moderne adaptée à l'expérience utilisateur.",
  //     "image": "/wifi.png",
  //     "technologies": ["Next.js", "TailwindCss", "TypeScript", "PostgreSQL"],
  //     "liveUrl": "https://kzmnto6e3mo6991bbcjt.lite.vusercontent.net/",
  //     "codeUrl": "#"
  //   }
  // ]

//   return (
//     <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Mes Projets</h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Découvrez quelques-unes de mes réalisations récentes, alliant innovation technique et design moderne.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
//               <div className="relative h-48 overflow-hidden">
//                 <Image
//                   src={project.image || "/placeholder.svg"}
//                   alt={project.title}
//                   fill
//                   className="object-cover hover:scale-105 transition-transform duration-300"
//                 />
//               </div>

//               <CardHeader>
//                 <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
//               </CardHeader>

//               <CardContent>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.technologies.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-3">
//                   <Button size="sm" asChild className="flex-1">
//                     <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                       <ExternalLink className="w-4 h-4 mr-2" />
//                       Voir le projet
//                     </a>
//                   </Button>
//                   <Button variant="outline" size="sm">
//                     <Github className="w-4 h-4" />
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
