export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-blue-900">Dr. Fernando Barros</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#sobre" className="text-gray-600 hover:text-blue-600">Sobre</a>
          <a href="#especialidades" className="text-gray-600 hover:text-blue-600">Especialidades</a>
          <a href="#contato" className="text-gray-600 hover:text-blue-600">Contato</a>
        </nav>
      </div>
    </header>
  )
}