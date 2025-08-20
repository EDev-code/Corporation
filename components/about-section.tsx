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
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">À propos de moi</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Développeur fullstack passionné, spécialisé dans les technologies web et mobile modernes. Je crée des
            solutions digitales qui répondent aux besoins réels des entreprises et startups.
          </p>
        </div>

        {/* Vision + Image */}
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

          <div className="relative group">
            <div className="w-full h-100 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
              <img
                src="/etienne.jpg"
                alt="Etienne METOEVI"
                className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
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
