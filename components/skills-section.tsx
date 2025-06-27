"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Flutter", level: 85 },
        { name: "Flutterflow", level: 85 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Laravel/PHP", level: 90 },
        { name: "Django", level: 80 },
        { name: "Node.js", level: 85 },
        { name: "API REST", level: 95 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      title: "Base de données",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Firebase", level: 90 },
        { name: "Redis", level: 80 },
      ],
    },
    {
      title: "DevOps & Outils",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS/Vercel", level: 85 },
        { name: "CI/CD", level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Compétences Techniques</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Une expertise technique solide acquise au fil des projets et de la veille technologique constante.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">{category.title}</h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
