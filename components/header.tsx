"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Download } from "lucide-react"

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const menuItems = [
    { href: "#about", label: "À propos" },
    { href: "#projects", label: "Projets" },
    { href: "#skills", label: "Compétences" },
    { href: "#experience", label: "Expérience" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 shadow-md backdrop-blur-md"
          : "bg-white/80 text-gray-900 dark:bg-gray-900/80 dark:text-gray-100 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            E.Dev
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* CV */}
            <a
              href="https://www.canva.com/design/DAGjZQ34c5Q/v3f-CcFulHf24ZrMCzExmg/edit?utm_content=DAGjZQ34c5Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>CV</span>
              </Button>
            </a>

            {/* Dark / Light toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* CV en mobile */}
              <a
                href="https://www.canva.com/design/DAGjZQ34c5Q/v3f-CcFulHf24ZrMCzExmg/edit?utm_content=DAGjZQ34c5Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="self-start">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger CV
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
