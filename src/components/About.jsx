import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Sparkles, Zap } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Zap size={24} color="var(--accent)" />,
      title: "Fast Performance",
      description: "Optimized for speed, SEO, and user experience."
    },
    {
      icon: <Shield size={24} color="var(--accent)" />,
      title: "Clean Code",
      description: "Scaleable, maintainable, and robust architecture."
    },
    {
      icon: <Sparkles size={24} color="var(--accent)" />,
      title: "Modern UI/UX",
      description: "Clean, minimal, and premium aesthetic designs."
    }
  ]

  return (
    <section id="about" style={{
      padding: '120px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '80px',
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '60px',
        alignItems: 'center'
      }}>
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            marginBottom: '32px',
            lineHeight: 1.2
          }}>
            Building <br />
            Digital Excellence <br />
            With <span style={{ color: 'var(--accent)' }}>Precision.</span>
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            maxWidth: '500px'
          }}>
            I am a full-stack developer passionate about creating high-end digital products that combine 
            aesthetic beauty with technical performance. My focus is on delivering premium experiences 
            that leave a lasting impression.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gap: '24px'
        }}>
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="glass"
              style={{
                padding: '32px',
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateX(10px)'
                e.currentTarget.style.borderColor = 'var(--accent-soft)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.borderColor = 'var(--glass-border)'
              }}
            >
              <div style={{
                background: 'var(--accent-muted)',
                padding: '12px',
                borderRadius: '12px'
              }}>
                {feature.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
