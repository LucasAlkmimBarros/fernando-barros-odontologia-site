import { Stethoscope, Sparkles, Crown, Wrench, Heart, Scissors, Shield, Smile } from 'lucide-react'

const treatments = [
  {
    name: 'Tratamentos de Canal',
    description: 'Incisivos, pré-molares e molares',
    icon: Stethoscope,
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Clareamento Dental',
    description: 'Sistema caseiro personalizado',
    icon: Sparkles,
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    name: 'Coroas Dentárias',
    description: 'Jaqueta, metálica e metalocerâmica',
    icon: Crown,
    color: 'from-amber-500 to-amber-600'
  },
  {
    name: 'Pontes Fixas',
    description: 'Reposição de dentes ausentes',
    icon: Wrench,
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    name: 'Restaurações',
    description: 'Resina de alta qualidade',
    icon: Heart,
    color: 'from-rose-500 to-rose-600'
  },
  {
    name: 'Limpeza e Profilaxia',
    description: 'Manutenção da saúde bucal',
    icon: Shield,
    color: 'from-violet-500 to-violet-600'
  },
  {
    name: 'Extrações',
    description: 'Remoção segura de dentes',
    icon: Scissors,
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'Placas para Bruxismo',
    description: 'Proteção contra desgaste',
    icon: Shield,
    color: 'from-teal-500 to-teal-600'
  },
  {
    name: 'Prótese Removível',
    description: 'Dentadura, roach e silicone flexível',
    icon: Smile,
    color: 'from-indigo-500 to-indigo-600'
  }
]

export function Treatments() {
  return (
    <section id="especialidades" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 text-sm font-medium mb-6">
            <Stethoscope className="w-4 h-4" />
            Nossos Serviços
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Tratamentos Especializados
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Oferecemos uma ampla gama de tratamentos odontológicos com tecnologia
            moderna e atendimento personalizado para cada paciente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment) => {
            const Icon = treatment.icon
            return (
              <div
                key={treatment.name}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${treatment.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{treatment.name}</h4>
                <p className="text-gray-600">{treatment.description}</p>
              </div>
            )
          })}
        </div>

        <p className="text-center text-gray-500 mt-12 text-lg">
          ...e muito mais. <a href="#contato" className="text-blue-600 font-medium hover:underline">Entre em contato</a> para saber mais.
        </p>
      </div>
    </section>
  )
}