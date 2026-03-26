import React from 'react'
import { motion } from 'framer-motion'
import { 
  Dribbble, 
  Framer, 
  Github, 
  Globe, 
  Layers, 
  Layout, 
  Lightbulb, 
  Palette, 
  Terminal, 
  Trophy, 
  Wind 
} from 'lucide-react'

const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Three.js", "Framer Motion", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Prisma"]
  },
  {
    title: "Design & Tools",
    skills: ["Figma", "Adobe CC", "Git", "Docker", "AWS", "Vercel"]
  }
]

const Skills = () => {
  return (
    <section id="skills" style={{
      padding: '120px 20px',
      position: 'relative',
      zIndex: 1
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}
      >
        <span style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}>Tech Stack</span>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '16px' }}>Mastering <span style={{ color: 'var(--accent)' }}>Excellence.</span></h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '40px'
      }}>
        {skillGroups.map((group, groupIdx) => (
          <motion.div
            key={groupIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: groupIdx * 0.2 }}
            viewport={{ once: true }}
            className="glass"
            style={{
              padding: '48px',
              borderRadius: '24px',
              border: '1px solid var(--glass-border)',
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
              cursor: 'default'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.borderColor = 'var(--accent-soft)'
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 26, 26, 0.1)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'var(--glass-border)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              {groupIdx === 0 ? <Layout size={24} color="var(--accent)" /> : 
               groupIdx === 1 ? <Terminal size={24} color="var(--accent)" /> : 
               <Palette size={24} color="var(--accent)" />}
              {group.title}
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              {group.skills.map((skill, skillIdx) => (
                <motion.span
                  key={skillIdx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="skill-tag"
                  style={{
                    padding: '10px 20px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)'
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.background = 'var(--accent-muted)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
