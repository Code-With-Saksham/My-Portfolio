import React, { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

const App = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Scroll to top on refresh
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ position: 'relative', overflowX: 'hidden', backgroundColor: '#000' }}>
      <CustomCursor />
      <Navbar />

      {/* Progress Bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--accent)',
          zIndex: 101,
          transformOrigin: '0%'
        }}
        scaleX={scaleX}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
