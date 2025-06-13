import { MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 mb-4 md:mb-0">
            © 2025 Consultório Dr. Fernando Barros. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="https://wa.me/553133870033" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}