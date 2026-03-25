"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  const fullText = "Hi, je suis Etienne"
  const highlightedWord = "Etienne"
  const jobTitleText = "Développeur Fullstack Web & Mobile"

  const [displayedLength, setDisplayedLength] = useState(0)
  const [jobTitleLength, setJobTitleLength] = useState(0)

  useEffect(() => setIsVisible(true), [])

  useEffect(() => {
    if (displayedLength < fullText.length) {
      const timeout = setTimeout(() => setDisplayedLength(displayedLength + 1), 150)
      return () => clearTimeout(timeout)
    }
  }, [displayedLength])

  useEffect(() => {
    if (displayedLength === fullText.length && jobTitleLength < jobTitleText.length) {
      const timeout = setTimeout(() => setJobTitleLength(jobTitleLength + 1), 100)
      return () => clearTimeout(timeout)
    }
  }, [jobTitleLength, displayedLength])

  const visibleText = fullText.slice(0, displayedLength)
  const startIndex = fullText.indexOf(highlightedWord)
  const endIndex = startIndex + highlightedWord.length

  let before = "", highlight = "", after = ""
  if (displayedLength <= startIndex) before = visibleText
  else if (displayedLength <= endIndex) {
    before = fullText.slice(0, startIndex)
    highlight = visibleText.slice(startIndex, displayedLength)
  } else {
    before = fullText.slice(0, startIndex)
    highlight = fullText.slice(startIndex, endIndex)
    after = visibleText.slice(endIndex, displayedLength)
  }

  const visibleJobTitle = jobTitleText.slice(0, jobTitleLength)

  // Canvas et toile d'araignée côté client
  useEffect(() => {
    const canvas = document.getElementById("webCanvas")
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight
    const points = []
    const numPoints = 60

    function random(min,max){ return Math.random()*(max-min)+min }

    for(let i=0;i<numPoints;i++){
      points.push({
        x: random(0,width),
        y: random(0,height),
        vx: random(-0.5,0.5),
        vy: random(-0.5,0.5)
      })
    }

    function draw(){
      ctx.clearRect(0,0,width,height)

      for(let i=0;i<points.length;i++){
        let p = points[i]
        p.x += p.vx
        p.y += p.vy
        if(p.x<0||p.x>width) p.vx*=-1
        if(p.y<0||p.y>height) p.vy*=-1

        // Point
        ctx.beginPath()
        ctx.arc(p.x,p.y,2,0,Math.PI*2)
        ctx.fillStyle="rgba(96,165,250,0.9)" // bleu lumineux
        ctx.fill()

        // Connexions
        for(let j=i+1;j<points.length;j++){
          let p2 = points[j]
          let dist = Math.hypot(p.x-p2.x, p.y-p2.y)
          if(dist<140){
            ctx.beginPath()
            ctx.moveTo(p.x,p.y)
            ctx.lineTo(p2.x,p2.y)
            // mélange bleu + doré subtil
            ctx.strokeStyle = `rgba(96,165,250,${1-dist/140})` // bleu dominant
            ctx.stroke()
            ctx.beginPath()
            ctx.moveTo(p.x,p.y)
            ctx.lineTo(p2.x,p2.y)
            ctx.strokeStyle = `rgba(255,215,0,${0.3*(1-dist/140)})` // doré subtil
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(draw)
    }

    draw()

    window.addEventListener("resize", ()=>{
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    })

  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-24 bg-black overflow-hidden">

      {/* toile d'araignée animée */}
      <canvas id="webCanvas" className="absolute inset-0 w-full h-full pointer-events-none"></canvas>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* IMAGE */}
          <div className="flex justify-center lg:order-2 mb-10 lg:mb-0 relative">
            <div className="relative">
              {/* halo lumineux royal */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-yellow-400/50 blur-3xl scale-125"></div>

              {/* roi 👑 lié au cercle */}
              <div className="absolute -top-0 -right-4 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg z-10 animate-bounce">
                👑
              </div>

              <img
                src="/etiennes.png"
                alt="Etienne développeur"
                className="relative w-80 h-80 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[420px] lg:h-[420px] object-cover rounded-full border-4 border-white/10 shadow-2xl object-top"
              />
            </div>
          </div>

          {/* TEXTE */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {before}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"
                style={{ fontFamily: "'Lobster', cursive" }}
              >
                {highlight}
              </span>
              {after}
              <span className="blinking-cursor">|</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8">
              {visibleJobTitle}
              {jobTitleLength < jobTitleText.length && <span className="blinking-cursor">|</span>}
            </p>

            {/* Boutons */}
            <div className="flex justify-center lg:justify-start gap-4 mb-10 flex-wrap">
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                Voir mes projets <ArrowDown className="ml-2 w-4 h-4"/>
              </Button>
              <Button variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Me contacter
              </Button>
            </div>

            {/* Réseaux */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a href="https://github.com/MetoeviEtienne" target="_blank"><Github className="text-white w-6 h-6 hover:text-gray-300 transition"/></a>
              <a href="https://www.linkedin.com/in/etienne-metoevi-197931315/" target="_blank"><Linkedin className="text-white w-6 h-6 hover:text-gray-300 transition"/></a>
              <a href="mailto:etiennemetoevi82@gmail.com"><Mail className="text-white w-6 h-6 hover:text-gray-300 transition"/></a>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 1.8rem;
          color: #60a5fa;
          animation: blink 1s step-start infinite;
          margin-left: 2px;
        }
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </section>
  )
}




// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
// import { useEffect, useState } from "react"

// export default function HeroSection() {
//   const [isVisible, setIsVisible] = useState(false)

//   const fullText = "Bonjour, je suis Etienne"
//   const highlightedWord = "Etienne"
//   const jobTitleText = "Développeur Fullstack Web & Mobile"

//   const [displayedLength, setDisplayedLength] = useState(0)
//   const [jobTitleLength, setJobTitleLength] = useState(0)

//   useEffect(() => setIsVisible(true), [])

//   // Animation pour le texte principal
//   useEffect(() => {
//     if (displayedLength < fullText.length) {
//       const timeout = setTimeout(() => setDisplayedLength(displayedLength + 1), 150)
//       return () => clearTimeout(timeout)
//     }
//   }, [displayedLength])

//   // Animation pour le titre du job
//   useEffect(() => {
//     if (displayedLength === fullText.length && jobTitleLength < jobTitleText.length) {
//       const timeout = setTimeout(() => setJobTitleLength(jobTitleLength + 1), 100)
//       return () => clearTimeout(timeout)
//     }
//   }, [jobTitleLength, displayedLength])

//   // Construction du texte avec highlight
//   const visibleText = fullText.slice(0, displayedLength)
//   const startIndex = fullText.indexOf(highlightedWord)
//   const endIndex = startIndex + highlightedWord.length

//   let before = "", highlight = "", after = ""
//   if (displayedLength <= startIndex) before = visibleText
//   else if (displayedLength <= endIndex) {
//     before = fullText.slice(0, startIndex)
//     highlight = visibleText.slice(startIndex, displayedLength)
//   } else {
//     before = fullText.slice(0, startIndex)
//     highlight = fullText.slice(startIndex, endIndex)
//     after = visibleText.slice(endIndex, displayedLength)
//   }

//   const visibleJobTitle = jobTitleText.slice(0, jobTitleLength)

//   const images = ["/Metos.png", "/Etienne.png", "/Metoevi Etienne.jpg"]
//   const duplicatedImages = [...images, ...images]

//   return (
//     <section className="relative min-h-screen flex items-center justify-center pt-20" itemScope itemType="https://schema.org/Person">
//       {/* Carrousel */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 flex animate-slide-left">
//           {duplicatedImages.map((img, idx) => (
//             <div key={idx} className="w-full h-full bg-cover bg-center blur-sm" style={{ backgroundImage: `url('${img}')` }} />
//           ))}
//         </div>
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       <div className="relative container mx-auto px-4 text-center z-10">
//         <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//             {before}
//             <span
//               className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"
//               style={{ fontFamily: "'Lobster', cursive" }}
//             >
//               {highlight}
//             </span>
//             {after}
//             <span className="blinking-cursor">|</span>
//           </h1>

//           <p className="text-xl md:text-2xl text-gray-200 mb-6">
//             {visibleJobTitle}
//             {jobTitleLength < jobTitleText.length && <span className="blinking-cursor">|</span>}
//           </p>

//           {/* Boutons */}
//           <div className="flex justify-center gap-4 mb-10">
//             <Button
//               className="bg-blue-600 hover:bg-blue-700"
//               onClick={() => {
//                 const section = document.getElementById("projects")
//                 if (section) section.scrollIntoView({ behavior: "smooth" })
//               }}
//             >
//               Voir mes projets <ArrowDown className="ml-2 w-4 h-4" />
//             </Button>

//             <Button
//               variant="outline"
//               onClick={() => {
//                 const section = document.getElementById("contact") // cible le formulaire
//                 if (section) section.scrollIntoView({ behavior: "smooth" })
//               }}
//             >
//               Me contacter
//             </Button>
//           </div>

//           {/* Liens sociaux */}
//           <div className="flex justify-center gap-6">
//             <a href="https://github.com/MetoeviEtienne" target="_blank" rel="noopener noreferrer">
//               <Github className="text-white w-6 h-6 hover:text-gray-300 transition" />
//             </a>
//             <a href="https://www.linkedin.com/in/etienne-metoevi-197931315/" target="_blank" rel="noopener noreferrer">
//               <Linkedin className="text-white w-6 h-6 hover:text-gray-300 transition" />
//             </a>
//             <a href="mailto:etiennemetoevi82@gmail.com.com">
//               <Mail className="text-white w-6 h-6 hover:text-gray-300 transition" />
//             </a>
//           </div>

//         </div>
//       </div>

//       <style jsx>{`
//         .blinking-cursor {
//           font-weight: 100;
//           font-size: 2rem;
//           color: #0c4a6e;
//           animation: blink 1s step-start infinite;
//           margin-left: 2px;
//         }
//         @keyframes blink { 50% { opacity: 0; } }

//         @keyframes slideLeft {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-slide-left {
//           display: flex;
//           width: 200%;
//           animation: slideLeft 50s linear infinite;
//         }
//       `}</style>
//     </section>
//   )
// }

 