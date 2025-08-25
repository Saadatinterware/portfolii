import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import LoadingScreen from './components/LoadingScreen'
import CursorFollower from './components/CursorFollower'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="App">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <CursorFollower />
      <ParticleBackground />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
