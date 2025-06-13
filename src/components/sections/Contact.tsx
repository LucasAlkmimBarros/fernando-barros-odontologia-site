import React from 'react'
import { Phone, Mail, MessageCircle } from 'lucide-react'

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center text-gray-900 mb-12">Entre em Contato</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <a
            href="tel:+553133870033"
            className="flex flex-col items-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <Phone className="w-8 h-8 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Telefone</h4>
            <p className="text-gray-600">(31) 3387-0033</p>
          </a>
          <a
            href="https://wa.me/553133870033"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <MessageCircle className="w-8 h-8 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h4>
            <p className="text-gray-600">(31) 3387-0033</p>
          </a>
          <a
            href="mailto:fernandopaeslemebarros@gmail.com"
            className="flex flex-col items-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <Mail className="w-8 h-8 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">E-mail</h4>
            <p className="text-gray-600">fernandopaeslemebarros@gmail.com</p>
          </a>
        </div>
      </div>
    </section>
  )
}