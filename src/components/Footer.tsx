import { MessageCircle, Phone, Mail, MapPin, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400">
                <img
                  src="/foto-rosto-dr-fernando.png"
                  alt="Dr. Fernando Barros"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold">Dr. Fernando Barros</h4>
                <p className="text-gray-400 text-sm">Cirurgião Dentista</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Há mais de 40 anos cuidando da saúde bucal e do sorriso de nossos
              pacientes com excelência e dedicação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Links Rápidos</h5>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre o Consultório</a>
              </li>
              <li>
                <a href="#especialidades" className="text-gray-400 hover:text-white transition-colors">Tratamentos</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white transition-colors">Entre em Contato</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Contato</h5>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>(31) 3387-0033</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-sm">fernandopaeslemebarros@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>R. Lima Drumond, 13<br />Vale do Jatobá, BH - MG</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Consultório Dr. Fernando Barros. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/553133870033"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+553133870033"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Telefone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          <p className="text-center text-gray-600 text-sm mt-4 flex items-center justify-center gap-1">
            Feito com <Heart className="w-4 h-4 text-red-500" /> para você
          </p>
        </div>
      </div>
    </footer>
  )
}