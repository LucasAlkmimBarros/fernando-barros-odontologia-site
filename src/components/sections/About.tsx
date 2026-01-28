import { Clock, MapPin, Award, Heart, Users } from 'lucide-react'

export function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-xl"></div>
              <img
                src="/foto-dr-fernando.jpeg"
                alt="Dr. Fernando Barros"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">40+</p>
                    <p className="text-sm text-gray-500">Anos de Experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Sobre o Consultório
            </div>

            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Dr. Fernando Barros
              <span className="block text-lg font-normal text-gray-500 mt-2">Cirurgião Dentista • CRO 11.812</span>
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Há mais de <strong>40 anos</strong> cuidando da saúde bucal e do sorriso de nossos
              pacientes com excelência e dedicação. Especialista em <strong>próteses e dentaduras</strong>,
              o Dr. Fernando Barros oferece um portfólio completo de tratamentos odontológicos
              com tecnologia moderna e atendimento humanizado.
            </p>

            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Horário de Atendimento</p>
                  <p className="text-gray-600 text-sm">Seg a Sex: 8h às 18h</p>
                  <p className="text-gray-600 text-sm">Sábado: 8h às 12h</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Localização</p>
                  <p className="text-gray-600 text-sm">R. Lima Drumond, 13</p>
                  <p className="text-gray-600 text-sm">Vale do Jatobá, BH - MG</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-500">
              <Users className="w-5 h-5" />
              <span>Milhares de pacientes atendidos com sucesso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}