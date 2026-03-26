import React from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Send 
} from 'lucide-react'

const Contact = () => {
  const [status, setStatus] = React.useState('idle'); // 'idle', 'loading', 'success', 'error'

  return (
    <section id="contact" style={{
      padding: '120px 20px',
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '80px'
      }}>
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <span style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem' }}>Get in Touch</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '24px', marginBottom: '32px' }}>
            Let's <span style={{ color: 'var(--accent)' }}>Collaborate.</span>
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            marginBottom: '48px'
          }}>
            I'm always open to discussing new projects, creative ideas, or being part of your visions.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
             <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sakshamawasthi0912@gmail.com&su=Project Inquiry" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '20px', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                <div style={{ 
                  background: 'var(--accent-muted)', 
                  padding: '14px', 
                  borderRadius: '12px',
                  border: '1px solid var(--accent-soft)'
                }}>
                   <Mail size={24} color="var(--accent)" />
                </div>
                <div>
                   <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Email Me</h4>
                   <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>sakshamawasthi0912@gmail.com</p>
                </div>
             </a>
             
             <a href="https://www.linkedin.com/in/saksham-awasthi0912/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '20px', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                <div style={{ 
                  background: 'var(--accent-muted)', 
                  padding: '14px', 
                  borderRadius: '12px',
                  border: '1px solid var(--accent-soft)'
                }}>
                   <Linkedin size={18} color="var(--accent)" />
                </div>
                <div>
                   <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>LinkedIn</h4>
                   <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Let's Connect</p>
                </div>
             </a>
          </div>
        </motion.div>

        <motion.form
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           onSubmit={async (e) => {
              e.preventDefault();
              setStatus('loading');
              const formData = new FormData(e.target);
              
              formData.append("access_key", "531c653b-938b-415c-9d2d-bfc9a0f4024b"); 

              try {
                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData
                });

                const data = await response.json();

                if (data.success) {
                  setStatus('success');
                  e.target.reset();
                  setTimeout(() => setStatus('idle'), 3000);
                } else {
                  setStatus('error');
                  setTimeout(() => setStatus('idle'), 3000);
                }
              } catch (err) {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
              }
           }}
           className="glass"
           style={{
             padding: '48px',
             borderRadius: '24px',
             border: '1px solid var(--glass-border)',
             display: 'grid',
             gap: '24px'
           }}
        >
          <div style={{ display: 'grid', gap: '8px' }}>
             <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.1em' }}>NAME</label>
             <input type="text" name="name" required placeholder="Your Name" style={inputStyle} />
          </div>
          <div style={{ display: 'grid', gap: '8px' }}>
             <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.1em' }}>EMAIL</label>
             <input type="email" name="email" required placeholder="Your Email" style={inputStyle} />
          </div>
          <div style={{ display: 'grid', gap: '8px' }}>
             <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.1em' }}>MESSAGE</label>
             <textarea name="message" required placeholder="Your Message" rows="4" style={inputStyle}></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status === 'loading'}
            style={{
              background: status === 'success' ? '#10b981' : status === 'error' ? '#ef4444' : 'var(--accent)',
              color: 'white',
              border: 'none',
              padding: '20px',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '16px',
              boxShadow: '0 10px 30px var(--accent-muted)',
              transition: 'all 0.3s ease'
            }}
          >
            {status === 'loading' ? (
              <>Sending... <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>-</motion.div></>
            ) : status === 'success' ? (
              <>Message Sent! <Send size={20} /></>
            ) : status === 'error' ? (
              <>Error Occurred <Send size={20} /></>
            ) : (
              <>Send Message <Send size={20} /></>
            )}
          </button>
        </motion.form>
      </div>

      <style>{`
         input:focus, textarea:focus {
            border-color: var(--accent) !important;
            background: rgba(255, 26, 26, 0.05) !important;
            box-shadow: 0 0 20px rgba(255, 26, 26, 0.1) !important;
            outline: none;
         }
      `}</style>
    </section>
  )
}

const inputStyle = {
   background: 'rgba(255, 255, 255, 0.03)',
   border: '1px solid var(--glass-border)',
   padding: '18px 24px',
   borderRadius: '12px',
   color: 'var(--text-primary)',
   fontSize: '1rem',
   transition: 'all 0.3s ease',
   fontFamily: 'inherit'
}

export default Contact
