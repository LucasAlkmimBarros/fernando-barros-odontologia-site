import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500">
            <img
              src="/foto-rosto-dr-fernando.png"
              alt="Dr. Fernando Barros"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Dr. Fernando Barros</h1>
            <p className="text-xs text-gray-500">Cirurgião Dentista • CRO 11.812</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Sobre</a>
          <a href="#especialidades" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Tratamentos</a>
          <a href="#contato" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contato</a>
          <a
            href="tel:+553133870033"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
          >
            <Phone className="w-4 h-4" />
            Ligar Agora
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-4 space-y-4">
            <a href="#sobre" className="text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a href="#especialidades" className="text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Tratamentos</a>
            <a href="#contato" className="text-gray-600 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Contato</a>
            <a
              href="tel:+553133870033"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-3 rounded-full font-medium"
            >
              <Phone className="w-4 h-4" />
              Ligar Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}