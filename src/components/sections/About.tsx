import React from 'react'
import { Clock, MapPin } from 'lucide-react'

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/img/foto-dr-fernando.jpeg"
              alt="Dr. Fernando Barros"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">Dr. Fernando Barros</h3>
            <p className="text-gray-600 mb-6">
              Consultório Odontológico Dr. Fernando Barros (CRO 11.812)<br /><br />
              Há mais de 40 anos cuidando da saúde bucal e do sorriso de nossos pacientes com excelência e dedicação.<br /><br />
              Especialista em próteses e dentaduras, o Dr. Fernando Barros oferece um portfólio completo de tratamentos odontológicos.
            </p>
            <div className="flex items-center text-gray-600 mb-4">
              <Clock className="w-5 h-5 mr-2 text-blue-600" />
              <div>
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
              </div>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              <span>R. Lima Drumond, 13 - Vale do Jatoba, Belo Horizonte - MG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}