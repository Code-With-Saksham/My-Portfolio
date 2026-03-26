import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: "AgriVision-Precision-Agriculture-Analytics",
    category: "Full Stack ML Application",
    description: "Advanced precision agriculture analytics platform integrating machine learning and data visualization for optimized crop yields.",
    image: "/projects/agrivision.png",
    tags: ["React", "Machine Learning", "Data Analytics", "Python"],
    github: "https://github.com/Code-With-Saksham/AgriVision-Precision-Agriculture-Analytics.git",
    site: "https://v0-agri-vision.vercel.app/"
  },
  {
    title: "PHANTOM: Smart Voice Assistant",
    category: "AI & Deep Learning",
    description: "Intelligent personal assistant focusing on natural language understanding and practical AI tasks, utilizing deep learning and efficient system design.",
    image: "/projects/phantom.png",
    tags: ["Python", "Deep Learning", "NLP", "AI Systems"],
    github: "https://github.com/Code-With-Saksham/PHANTOM.git",
    site: "#"
  }
]

const Projects = () => {
  return (
    <section id="projects" style={{
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
        <span style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}>Selection</span>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '16px' }}>Selected <span style={{ color: 'var(--accent)' }}>Works.</span></h2>
        <p style={{ maxWidth: '600px', margin: '16px auto 0', color: 'var(--text-secondary)', fontSize: '1.2rem'}}>
          A collection of digital products crafted with care and technical expertise.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '40px'
      }}>
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="project-card"
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              cursor: 'pointer',
              border: '1px solid var(--glass-border)',
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
              background: 'var(--glass-bg)'
            }}
          >
            {/* Project Image Container */}
            <div style={{
              width: '100%',
              height: '240px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img 
                src={project.image} 
                alt={project.title} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  filter: 'grayscale(100%) brightness(0.6)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)'
                  e.currentTarget.style.filter = 'grayscale(0%) brightness(1)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.filter = 'grayscale(100%) brightness(0.6)'
                }}
              />
              <div 
                className="view-project"
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255, 26, 26, 0.1)',
                  backdropFilter: 'blur(5px)',
                  padding: '10px',
                  borderRadius: '50%',
                  border: '1px solid var(--accent-soft)',
                  opacity: 0,
                  transition: 'all 0.3s ease'
                }}
              >
                <ArrowUpRight size={20} color="var(--accent)" />
              </div>
            </div>

            {/* Project Info */}
            <div style={{ padding: '32px' }}>
              <span style={{ 
                color: 'var(--accent)', 
                fontSize: '0.8rem', 
                fontWeight: 600, 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em' 
              }}>
                {project.category}
              </span>
              <h3 style={{ 
                fontSize: '1.6rem', 
                marginTop: '12px', 
                marginBottom: '16px', 
                fontFamily: 'var(--font-heading)' 
              }}>
                {project.title}
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                lineHeight: 1.6, 
                fontSize: '1rem',
                marginBottom: '24px'
              }}>
                {project.description}
              </p>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                   {project.tags.map((tag, tagIdx) => (
                     <span key={tagIdx} style={{
                        padding: '4px 12px',
                        borderRadius: '20px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        fontSize: '0.75rem',
                        color: 'var(--text-secondary)'
                     }}>
                       {tag}
                     </span>
                   ))}
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} 
                     onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} 
                     onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    <Github size={18} />
                  </a>
                  {project.site !== "#" && (
                    <a href={project.site} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}
                       onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} 
                       onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-soft);
          box-shadow: 0 30px 60px rgba(255, 26, 26, 0.1);
        }
        .project-card:hover .view-project {
          opacity: 1 !important;
          transform: translate(-10px, 10px);
        }
        .project-card:hover h3 {
          color: var(--accent);
          transition: color 0.3s ease;
        }
        @media (max-width: 480px) {
           section { padding: 40px 20px; }
        }
      `}</style>
    </section>
  )
}

export default Projects
