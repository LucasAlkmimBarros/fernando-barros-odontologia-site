import { Phone, Mail, MessageCircle, Clock } from 'lucide-react'

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Fale Conosco
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você. Escolha a forma de contato que preferir
            e agende sua consulta agora mesmo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <a
            href="tel:+553133870033"
            className="group flex flex-col items-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-xl border border-transparent hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Telefone</h4>
            <p className="text-gray-600 text-lg">(31) 3387-0033</p>
            <span className="mt-4 text-blue-600 font-medium group-hover:underline">Ligar agora →</span>
          </a>

          <a
            href="https://wa.me/553133870033"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl hover:shadow-xl border border-transparent hover:border-green-200 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/30">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h4>
            <p className="text-gray-600 text-lg">(31) 3387-0033</p>
            <span className="mt-4 text-emerald-600 font-medium group-hover:underline">Enviar mensagem →</span>
          </a>

          <a
            href="mailto:fernandopaeslemebarros@gmail.com"
            className="group flex flex-col items-center p-8 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl hover:shadow-xl border border-transparent hover:border-violet-200 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-violet-500/30">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">E-mail</h4>
            <p className="text-gray-600 text-center text-sm">fernandopaeslemebarros@gmail.com</p>
            <span className="mt-4 text-violet-600 font-medium group-hover:underline">Enviar e-mail →</span>
          </a>
        </div>

        {/* Quick Info */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h4 className="text-2xl font-bold mb-4">Agende Sua Consulta Hoje</h4>
              <p className="text-blue-100 mb-6">
                Nossa equipe está pronta para oferecer o melhor atendimento odontológico
                que você e sua família merecem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 text-blue-100">
                  <Clock className="w-5 h-5" />
                  <span>Seg-Sex: 8h-18h | Sáb: 8h-12h</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-end">
              <a
                href="https://wa.me/553133870033"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="tel:+553133870033"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                Ligar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}