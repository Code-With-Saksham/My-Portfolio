import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Database, Globe } from 'lucide-react'

const Hero = () => {
  return (
    <section 
      id="home"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        padding: '0 20px'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: 'var(--glass-bg)',
          padding: '8px 16px',
          borderRadius: '24px',
          border: '1px solid var(--glass-border)',
          backdropFilter: 'blur(5px)',
          marginBottom: '24px'
        }}
      >
        <span style={{ 
          width: '8px', 
          height: '8px', 
          background: 'var(--accent)', 
          borderRadius: '50%',
          boxShadow: '0 0 10px var(--accent)'
        }} />
        <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
          AVAILABLE FOR NEW PROJECTS
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          lineHeight: 1,
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          marginBottom: '24px',
          color: 'var(--text-primary)',
          letterSpacing: '-0.04em'
        }}
      >
        SAKSHAM <span style={{ 
          background: 'linear-gradient(90deg, #ff1a1a, #ff4c4c)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 40px rgba(255, 26, 26, 0.2)'
        }}>AWASTHI</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '48px'
        }}
      >
        <div style={{
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-secondary)',
          fontSize: '1.2rem',
          display: 'flex',
          gap: '12px',
          alignItems: 'center'
        }}>
          <Code size={20} color="var(--accent)" />
          <span className="typing-text">Frontend & Backend Developer</span>
        </div>
        <p style={{
          maxWidth: '600px',
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          lineHeight: 1.6
        }}>
          Crafting premium digital experiences through minimal design and cutting-edge performance.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        style={{
          display: 'flex',
          gap: '20px'
        }}
      >
        <a 
          href="#projects" 
          className="cta-button primary"
          style={{
            background: 'var(--accent)',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '1rem',
            boxShadow: '0 10px 30px var(--accent-muted)',
            transition: 'all 0.3s ease'
          }}
        >
          View Portfolio <ArrowRight size={18} />
        </a>
        <a 
          href="#contact" 
          className="cta-button secondary"
          style={{
            background: 'var(--glass-bg)',
            color: 'var(--text-primary)',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '1rem',
            border: '1px solid var(--glass-border)',
            transition: 'all 0.3s ease'
          }}
        >
          Get in Touch
        </a>
      </motion.div>

      <style>{`
        .cta-button:hover {
          transform: translateY(-5px);
        }
        .cta-button.primary:hover {
          box-shadow: 0 15px 40px var(--accent-soft);
        }
        .cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.15);
        }
        .typing-text::after {
          content: '|';
          animation: blink 0.7s infinite;
          margin-left: 2px;
          color: var(--accent);
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}

export default Hero
