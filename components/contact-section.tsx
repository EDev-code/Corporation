"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("https://formspree.io/f/xdkzjqad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        alert("Message envoyé avec succès !")
        setFormData({ firstName: "", lastName: "", email: "", message: "" })
      } else {
        alert("Erreur lors de l'envoi. Veuillez réessayer.")
      }
    } catch (error) {
      alert("Erreur réseau. Veuillez réessayer.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contactez-moi</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Discutons ensemble de vos besoins et trouvons la solution idéale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <Card className="border-0 shadow-2xl p-6 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-indigo-900">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Restons en contact</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Je suis ouvert aux nouvelles opportunités et collaborations. N'hésitez pas à me contacter pour
                  discuter de votre projet.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "etiennemetoevi82@gmail.com" },
                  { icon: Phone, label: "Téléphone", value: "+229 0159411467" },
                  { icon: MapPin, label: "Localisation", value: "Cotonou, Bénin" },
                ].map((info, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/30 dark:bg-white/10 rounded-lg flex items-center justify-center shadow-md">
                      <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{info.label}</p>
                      <p className="text-gray-700 dark:text-gray-300">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">Suivez-moi</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/MetoeviEtienne" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-200 dark:hover:bg-blue-800">
                      <Github className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/etienne-metoevi-197931315/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-200 dark:hover:bg-blue-800">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href="mailto:etiennemetoevi82@gmail.com">
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-200 dark:hover:bg-blue-800">
                      <Mail className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 dark:text-white">Envoyez-moi un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Prénom
                    </label>
                    <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nom
                    </label>
                    <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 transition-all">
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
