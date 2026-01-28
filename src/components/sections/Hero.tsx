import { MessageCircle, Sparkles, Shield, Clock } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/foto-consultorio.jpeg"
          alt="Consultório Dr. Fernando Barros"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-blue-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100 text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Mais de 40 anos de experiência
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Seu Sorriso Merece o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              Melhor Cuidado
            </span>
          </h2>

          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Tratamentos odontológicos com excelência, tecnologia e o cuidado personalizado
            que você merece. Agende sua consulta e transforme seu sorriso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://wa.me/553133870033"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-green-500/30 hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Ver Tratamentos
            </a>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center gap-3 text-blue-100">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-cyan-300" />
              </div>
              <div>
                <p className="font-semibold text-white">CRO 11.812</p>
                <p className="text-sm text-blue-200">Certificado</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-blue-100">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-cyan-300" />
              </div>
              <div>
                <p className="font-semibold text-white">Seg a Sáb</p>
                <p className="text-sm text-blue-200">Atendimento</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-blue-100">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-cyan-300" />
              </div>
              <div>
                <p className="font-semibold text-white">+40 Anos</p>
                <p className="text-sm text-blue-200">Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}