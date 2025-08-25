import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github size={24} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={24} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Mail size={24} />, href: 'mailto:john@example.com', label: 'Email' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-gradient"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="footer-main" variants={itemVariants}>
            <h3 className="footer-title">Let's Create Something Amazing Together</h3>
            <p className="footer-subtitle">
              Ready to bring your ideas to life? Let's connect and build the future.
            </p>
            
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  variants={itemVariants}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="footer-bottom" variants={itemVariants}>
            <div className="footer-copyright">
              <p>
                © {currentYear} Muhammad Saad. Made with{' '}
                <motion.span
                  className="heart"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart size={16} fill="#ff6b6b" color="#ff6b6b" />
                </motion.span>{' '}
                and lots of coffee ☕
              </p>
            </div>
            
            <motion.button
              className="scroll-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              variants={itemVariants}
            >
              <ArrowUp size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="footer-decoration">
        <div className="decoration-circle decoration-circle-1"></div>
        <div className="decoration-circle decoration-circle-2"></div>
        <div className="decoration-circle decoration-circle-3"></div>
      </div>
    </footer>
  )
}

export default Footer
