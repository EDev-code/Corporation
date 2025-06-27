export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Etienne METOEVI",
    jobTitle: "Développeur Fullstack Web & Mobile",
    description:
      "Développeur Fullstack basé au Bénin et dans le monde entier, spécialisé en Next.js, WordPress, Django, Laravel, Flutter et Firebase.",
    url: "https://etienne.dev",
    image: "https://photos.app.goo.gl/dkb6o8GGkP82Cb5o8",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cotonou",
      addressCountry: "BJ",
    },
    email: "etiennemetoevi82@gmail.com",
    telephone: "+22959411467",
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Laravel",
      "PHP",
      "Flutter",
      "Dart",
      "Firebase",
      "MySQL",
      "PostgreSQL",
      "Node.js",
      "API Development",
      "Mobile Development",
      "Web Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "IUT-UNIVERSITE DE PARAKOU",
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    sameAs: [
      "https://github.com/MetoeviEtienne",
      "https://www.linkedin.com/in/etienne-metoevi-197931315",
      "https://www.youtube.com/@EDev92",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "E.Dev - Portfolio",
    description: "Portfolio professionnel de Etienne, développeur fullstack web et mobile",
    url: "https://etienne.dev",
    author: {
      "@type": "Person",
      name: "Etienne METOEVI",
    },
    inLanguage: "fr-FR",
    copyrightYear: "2025",
    genre: "Portfolio",
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "E.Dev - Services de Développement",
    description: "Services de développement web et mobile fullstack",
    provider: {
      "@type": "Person",
      name: "Etienne METOEVI",
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    serviceType: ["Développement Web", "Développement Mobile", "API Development", "Consulting Technique"],
    url: "https://etienne.dev",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  )
}
