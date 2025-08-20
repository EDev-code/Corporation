"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      type: "experience",
      title: "Développeur Fullstack Freelance",
      company: "Indépendant",
      location: "Bénin",
      period: "2022 - Présent",
      description:
        "Développement d'applications web et mobile pour diverses entreprises. Spécialisation en Next.js, Laravel et Flutter.",
      achievements: [
        "10+ projets livrés avec succès",
        "Clients satisfaits dans 5 pays",
        "Expertise en architecture microservices",
      ],
    },
    {
      type: "experience",
      title: "Développeur Web Senior",
      company: "TechCorp Solutions",
      location: "Cotonou, Bénin",
      period: "2020 - 2022",
      description:
        "Développement et maintenance d'applications web complexes. Encadrement d'équipe junior et optimisation des performances.",
      achievements: [
        "Amélioration des performances de 40%",
        "Formation de 3 développeurs junior",
        "Migration vers architecture moderne",
      ],
    },
    {
      type: "education",
      title: "Master en Informatique",
      company: "IUT de l'Université de Parakou",
      location: "Bénin",
      period: "En cours",
      description: "Spécialisation en développement logiciel et systèmes d'information.",
      achievements: ["Mention: En cours", "Projet de fin d'études: En cours", "Stage en entreprise tech : En cours"],
    },
    {
      type: "education",
      title: "Licence en Informatique",
      company: "IUT de l'Université de Parakou",
      location: "Bénin",
      period: "2022 - 2025",
      description: "Formation fondamentale en informatique et programmation.",
      achievements: ["Major de promotion", "Participation à des hackathons (HederaX)", "Projets open source"],
    },
  ]

  return (
    <section
      id="experience"
      className="relative py-20 bg-black text-white overflow-hidden"
    >
      {/* Quadrillage coloré avec différentes couleurs professionnelles */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,#6366f1_1px,#8b5cf6_1px,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,#6366f1_1px,#8b5cf6_1px,#06b6d4_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Expérience & Formation</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Mon parcours professionnel et académique qui m'a mené à devenir développeur fullstack.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Ligne de la timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500"></div>

            <div className="space-y-8">
              {experiences.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Point de la timeline */}
                  <div
                    className={`absolute left-6 w-4 h-4 rounded-full border-4 ${item.type === "experience"
                        ? "bg-blue-600 border-blue-300"
                        : "bg-teal-400 border-teal-200"
                      }`}
                  ></div>

                  {/* Carte */}
                  <div className="ml-16 w-full">
                    <Card className="border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-2xl transition duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-blue-400 font-medium">{item.company}</p>
                          </div>
                          <div className="flex flex-col md:items-end mt-2 md:mt-0">
                            <div className="flex items-center text-gray-400 text-sm mb-1">
                              <Calendar className="w-4 h-4 mr-1" />
                              {item.period}
                            </div>
                            <div className="flex items-center text-gray-400 text-sm">
                              <MapPin className="w-4 h-4 mr-1" />
                              {item.location}
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4">{item.description}</p>

                        <div className="space-y-2">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <div
                              key={achievementIndex}
                              className="flex items-center text-sm text-gray-300"
                            >
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
