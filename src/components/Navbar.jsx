import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      
      // Scrolled state for background
      setScrolled(currentScrollPos > 20)
      
      // Visibility logic
      if (prevScrollPos > currentScrollPos) {
        setVisible(true) // Scrolling up
      } else if (currentScrollPos > 100) {
        setVisible(false) // Scrolling down
      }
      
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: visible ? 0 : -100, 
        opacity: visible ? 1 : 0 
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{
        width: '100%',
        zIndex: 50,
        background: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: scrolled ? '1rem 2rem' : '2rem 2rem',
        position: 'fixed',
        top: 0,
        left: 0,
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
      }}
    >
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div 
          className="logo-container"
          style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            fontSize: '1.2rem',
            letterSpacing: '0.1em',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          <span style={{ color: 'var(--text-primary)' }}>@</span>
          <span style={{ color: 'var(--accent)', textShadow: '0 0 10px var(--accent-soft)' }}>SAKSHAM AWASTHI</span>
        </div>

        {/* Desktop Links */}
        <div 
          className="nav-links"
          style={{
            display: 'flex',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {navLinks.map((link) => (
            <div key={link.name} style={{ position: 'relative', overflow: 'hidden' }}>
              <a
                href={link.href}
                className="nav-link"
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  transition: 'color 0.3s ease',
                  padding: '8px 0',
                  letterSpacing: '0.02em'
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.name}
              </a>
              <div
                className="underline"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '1px',
                  background: 'var(--accent)',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.3s ease',
                  transformOrigin: 'left'
                }}
              />
            </div>
          ))}
          
          <a 
            href="#contact"
            style={{
              background: 'var(--accent)',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: '0 0 15px var(--accent-muted)',
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 5px 20px var(--accent-soft)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 15px var(--accent-muted)'
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle - simplified for now */}
        <div style={{ display: 'none' }}>
           <Menu color="white" />
        </div>
      </div>

      <style>{`
        .nav-link:hover + .underline {
          transform: scaleX(1) !important;
        }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </motion.nav>
  )
}

export default Navbar
