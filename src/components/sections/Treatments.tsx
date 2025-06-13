import React from 'react'
import { treatments } from '../../data/treatments'

export function Treatments() {
  return (
    <section id="especialidades" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center text-gray-900 mb-12">
          Nossos Tratamentos
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <div key={treatment.name} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{treatment.name}</h4>
              <p className="text-gray-600">{treatment.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-8">...e muito mais.</p>
      </div>
    </section>
  )
}