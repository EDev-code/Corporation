"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Calendar, Download } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CVPage() {

  const handlePrint = () => {
    window.print()
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-4 sm:p-6 print:bg-white">

      {/* Bouton droit */}
      <div className="flex justify-between mb-4 sm:mb-6 print:hidden">

        {/* Bouton Retour à gauche */}
        <Link href="/">
          <Button className="shadow-lg hover:scale-105 transition">
            Retour
          </Button>
        </Link>

        {/* Bouton Télécharger PDF à droite */}
        <Button onClick={handlePrint} className="shadow-lg hover:scale-105 transition">
          <Download className="w-4 h-4 mr-2" />
          Télécharger
        </Button>

      </div>

      {/* CV */}
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-3 print:shadow-none">

        {/* SIDEBAR */}
        <div className="bg-gradient-to-b from-[#1e3a5f] to-[#0f172a] text-white p-6 md:p-8 space-y-6 md:space-y-8">

          {/* Photo */}
          <motion.div
            initial="hidden" animate="show" variants={fadeUp}
            className="flex justify-center"
          >
            <div className="p-1 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 hover:scale-105 transition">
              <img
                src="/etie.png"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover object-top scale-110 border-2 border-white"
                alt="profile"
              />
            </div>
          </motion.div>

          {/* Nom */}
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="text-center">
            <h1 className="text-lg md:text-xl font-bold tracking-wide">
              METOEVI ETIENNE
            </h1>
            <p className="text-blue-300 text-sm md:text-base">
              Développeur Full Stack Junior
            </p>
            <p className="text-blue-200 text-sm md:text-base">
              Assistant Technique
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <h2 className="text-xs md:text-sm uppercase tracking-widest text-gray-400 mb-2 md:mb-3">
              Contact
            </h2>
            <div className="space-y-1 md:space-y-2 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-300" />
                <p>+2290159411467</p>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-300" />
                <p>etiennnemetoevi82@gmail.com</p>
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-300" />
                <p>Cotonou - Bénin</p>
              </div>

              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-blue-300" />
                <p>02/01/2004</p>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <h2 className="text-xs md:text-sm uppercase tracking-widest text-gray-400 mb-2 md:mb-4">
              Education
            </h2>

            <div className="relative border-l border-gray-500 pl-3 md:pl-4 space-y-4 md:space-y-6">
              {[
                ["Licence Professionnelle", "IUT - Parakou", "2023 - 2025"],
                ["Baccalauréat (Biologie)", "CEG 1 Avrankou", "2021 - 2022"],
                ["BEPC", "CEG 1 Avrankou", "2018 - 2019"],
              ].map((item, i) => (
                <div key={i} className="relative hover:translate-x-1 transition">
                  <div className="absolute -left-[7px] md:-left-[9px] top-1 w-3 h-3 bg-blue-400 rounded-full"></div>
                  <p className="font-semibold text-sm md:text-base">{item[0]}</p>
                  <p className="text-xs md:text-sm text-gray-300">{item[1]}</p>
                  <p className="text-xs text-gray-400">{item[2]}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Compétences */}
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <h2 className="text-xs md:text-sm uppercase tracking-widest text-gray-400 mb-2 md:mb-4">
              Compétences
            </h2>

            <div className="space-y-3 md:space-y-4 text-sm md:text-base">

              <div>
                <p className="text-blue-300 font-semibold">Développement</p>
                <p>Laravel,Next.js,C/C++,Modélisation UML, Java Script, TailwindCSS</p>
              </div>

              <div>
                <p className="text-blue-300 font-semibold">Systèmes IT</p>
                <p>Installation,support</p>
              </div>

              <div>
                <p className="text-blue-300 font-semibold">Bureautique</p>
                <p>Word, Excel, PowerPoint</p>
              </div>

              <div>
                <p className="text-blue-300 font-semibold">Entreprise</p>
                <p>Gestion projet, analyse, collaboration</p>
              </div>

            </div>
          </motion.div>

          {/* Langues */}
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <h2 className="text-xs md:text-sm uppercase tracking-widest text-gray-400 mb-2 md:mb-3">
              Langues
            </h2>
            <p className="text-sm md:text-base">Français ⭐⭐⭐⭐</p>
            <p className="text-sm md:text-base">Anglais ⭐⭐</p>
          </motion.div>

        </div>

        {/* CONTENU */}
        <div className="col-span-1 md:col-span-2 p-6 md:p-10 space-y-8 md:space-y-10">

          {/* Header */}
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <h1 className="text-2xl md:text-4xl font-bold">
              METOEVI <span className="font-light">ETIENNE</span>
            </h1>

            <p className="text-blue-500 font-medium mt-1 text-sm md:text-base">
              Full Stack Developer | Laravel • Next.js •WordPress
            </p>
          </motion.div>

          {/* Profil */}
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <h2 className="text-lg md:text-xl font-semibold border-l-4 border-blue-500 pl-2 md:pl-3 mb-2 md:mb-3">
              Profil
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Développeur Full Stack junior, rigoureux et organisé, avec une bonne maîtrise des outils numériques.
              Passionné par les technologies web et mobiles ainsi que par la transformation digitale,
              je suis motivé à contribuer efficacement à des projets professionnels et à acquérir une expérience significative.
              Curieux et engagé, je m’efforce de produire un code propre et maintenable,
              tout en respectant les bonnes pratiques et en collaborant efficacement au sein d’une équipe.
            </p>
          </motion.div>

          {/* Expériences */}
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <h2 className="text-lg md:text-xl font-semibold border-l-4 border-blue-500 pl-2 md:pl-3 mb-4 md:mb-5">
              Expériences
            </h2>

            <div className="border-l-2 border-gray-200 pl-4 md:pl-6 space-y-4 md:space-y-6">

              {[
                {
                  title: "Go Digital Technology",
                  date: "2025",
                  items: ["Développement de Uniklove", "Support IT", "Modélisation UML"]
                },
                {
                  title: "Projet IUT",
                  date: "2025",
                  items: ["Développement de la Plateforme de logement Etudiants", "UML", "Modélisation UML", "Utilisatio de l'API KKIAPAY"]
                },
                {
                  title: "WordPress",
                  date: "2026",
                  items: ["Développement des sites", "Utilisations des thèmes"]
                },
                {
                  title: "Projet personnel",
                  date: "2026",
                  items: ["Développement de CertiPro,", "UML", "Modélisation UML"]
                }
              ].map((exp, i) => (
                <div key={i} className="relative hover:scale-[1.01] transition">
                  <div className="absolute -left-3 top-1 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <p className="font-semibold text-sm md:text-base">{exp.title}</p>
                  <p className="text-xs md:text-sm text-gray-500">{exp.date}</p>
                  <ul className="list-disc ml-5 text-xs md:text-sm text-gray-600">
                    {exp.items.map((it, j) => <li key={j}>{it}</li>)}
                  </ul>
                </div>
              ))}

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  )
}