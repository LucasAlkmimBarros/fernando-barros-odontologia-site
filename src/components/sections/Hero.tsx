import React from 'react'
import { MessageCircle } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img
          src="/img/foto-consultorio.jpeg"
          alt="Consultório Dr. Fernando Barros"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Sorria com prazer
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Atendimentos odontológicos com qualidade e segurança
          </p>
          <a
            href="https://wa.me/553133870033"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Agende sua Consulta
          </a>
        </div>
      </div>
    </section>
  )
}