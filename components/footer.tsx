export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">E.Dev</div>
            <p className="text-gray-300 mb-4">
              Développeur Fullstack passionné par la création de solutions digitales innovantes.
            </p>
            <p className="text-gray-400 text-sm">Basé au Bénin 🇧🇯</p>
            <p className="text-gray-400 text-sm">Disponible pour le monde entier</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Développement Web</li>
              <li>Applications Mobile</li>
              <li>API & Backend</li>
              <li>Consulting Tech</li>
              <li>Graphisme</li>
              <li>Data analytic</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} E.Dev. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
