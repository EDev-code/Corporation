"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Plateforme e-commerce complète avec gestion des commandes, paiements et tableau de bord admin. Interface moderne et responsive.",
      image: "https://i.pinimg.com/736x/5b/96/de/5b96dea96c3480f41c386bc666e999fb.jpg",
      technologies: ["Next.js", "Laravel", "MySQL", "Stripe"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Uniklove",
      description:
        "Application mobile de rencontre et de matching relationnel.",
      image: "https://i.pinimg.com/736x/75/9f/4f/759f4fd127ea3f9d4b8c0b3710757c5f.jpg",
      technologies: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
      liveUrl: "https://uniklove.com/",
      codeUrl: "#",
    },
    {
      title: "CampusHome",
      description:
        "CampusHome est une plateforme de gestion de logement des etudiants ou les propriétaires peuvent facilement accéder à leur espace pour ajouter des logements verifiées par les administrateurs.Les étudiants peuvent rechercher et reservés un logement avec des notifications envoyées aux proprietaire du logement.La plateforme génère automatiquement le contrat et les reçus de paiements car elle est dotée d'un module de paiement externe. ",
      image: "https://i.pinimg.com/736x/36/0f/3e/360f3eef23d45c446b300004e5369157.jpg",
      technologies: ["Laravel", "Tailwidcss", "MySQL", "CSS"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Portefolio",
      description:
        "UN portfolio moderne présentant le parcours du client",
      image: "https://i.pinimg.com/736x/35/1b/cd/351bcd095405abe33788c212eba2a47b.jpg",
      technologies: ["WordPrss", "Elementor", "MySQL"],
      liveUrl: "https://enet.infinityfreeapp.com/",
      codeUrl: "#",
    },
    {
      title: "API Microservices",
      description:
        "Architecture microservices avec authentification JWT, rate limiting et documentation automatique OpenAPI.",
      image: "https://i.pinimg.com/736x/a0/cf/eb/a0cfeb789534afaf7a7fb7c262bc0809.jpg",
      technologies: ["Laravel", "Docker", "Redis", "PostgreSQL"],
      liveUrl: "#",
      codeUrl: "#",
    },
     {
      title: "Portfolio Photography",
      description:
        "En tant qu’UI/UX Designer, je conçois des interfaces intuitives et esthétiques qui améliorent l’expérience utilisateur tout en répondant aux objectifs du produit.",
      image: "https://i.pinimg.com/736x/fa/4f/aa/fa4faa4cc92a5940210d35174a6f52cc.jpg",
      technologies: ["NextJs", "Tailwind CSS", "TypeScript", "PostgreSQL"],
      liveUrl: "https://kzmnto6e3mo6991bbcjt.lite.vusercontent.net/",
      codeUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Mes Projets</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez quelques-unes de mes réalisations récentes, alliant innovation technique et design moderne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                 <Button size="sm" asChild className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir le projet
                    </a>
                </Button>
                  <Button variant="outline" size="sm">
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
