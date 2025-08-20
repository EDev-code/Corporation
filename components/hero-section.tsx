"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  // Texte complet et mot à mettre en gradient
  const fullText = "Salut, je suis Etienne"
  const highlightedWord = "Etienne"

  // Texte job title à animer
  const jobTitleText = "Développeur Fullstack Web & Mobile"

  // Longueurs affichées (animation lettre par lettre)
  const [displayedLength, setDisplayedLength] = useState(0)
  const [jobTitleLength, setJobTitleLength] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Animation texte principal
  useEffect(() => {
    if (displayedLength < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedLength(displayedLength + 1)
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [displayedLength, fullText.length])

  // Animation job title
  useEffect(() => {
    if (displayedLength === fullText.length && jobTitleLength < jobTitleText.length) {
      const timeout = setTimeout(() => {
        setJobTitleLength(jobTitleLength + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [jobTitleLength, displayedLength, jobTitleText.length])

  // Partie visible du texte principal
  const visibleText = fullText.slice(0, displayedLength)

  // Découpage pour isoler "Etienne" et lui appliquer le gradient
  const startIndex = fullText.indexOf(highlightedWord)
  const endIndex = startIndex + highlightedWord.length

  let before = ""
  let highlight = ""
  let after = ""

  if (displayedLength <= startIndex) {
    before = visibleText
  } else if (displayedLength <= endIndex) {
    before = fullText.slice(0, startIndex)
    highlight = visibleText.slice(startIndex, displayedLength)
  } else {
    before = fullText.slice(0, startIndex)
    highlight = fullText.slice(startIndex, endIndex)
    after = visibleText.slice(endIndex, displayedLength)
  }

  // Texte visible job title animé lettre par lettre
  const visibleJobTitle = jobTitleText.slice(0, jobTitleLength)

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20" itemScope itemType="https://schema.org/Person">
      
      {/* Background Image floutée */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: "url('/etiennee.jpg')" }}
      />
      
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative container mx-auto px-4 text-center z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          {/* Avatar */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl" itemProp="image" role="img" aria-label="Avatar de Etienne">
              EDev
            </div>
          </div>

          {/* Main Content - texte animé */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" itemProp="name" style={{ minHeight: "4.5rem", fontFamily: "inherit" }}>
            {before}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400" style={{ fontFamily: "'Lobster', cursive" }}>
              {highlight}
            </span>
            {after}
            <span className="blinking-cursor">|</span>
          </h1>

          {/* Job Title animé */}
          <p className="text-xl md:text-2xl text-gray-200 mb-4" itemProp="jobTitle">
            {visibleJobTitle}
            {jobTitleLength < jobTitleText.length && <span className="blinking-cursor">|</span>}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto" itemProp="description">
            Je transforme vos idées en solutions digitales innovantes et performantes. Basé au Bénin et dans le monde entier, passionné par la création d'applications web et mobile.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#projects">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Voir mes projets
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg">
                Me contacter
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 2rem;
          color: #0c4a6e;
          animation: blink 1s step-start infinite;
          margin-left: 2px;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
