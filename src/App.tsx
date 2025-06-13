import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Treatments } from './components/sections/Treatments'
import { Contact } from './components/sections/Contact'
import { Location } from './components/sections/Location'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Contact />
        <Location />
      </main>
      <Footer />
    </div>
  )
}

export default App