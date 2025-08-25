import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const titles = [
    'Full Stack Developer',
    'Frontend Specialist', 
    'UI/UX Enthusiast',
    'Problem Solver'
  ]

  // Initialize the typing animation
  useEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true)
      // Start with the first character after a short delay
      setTimeout(() => {
        setDisplayText(titles[0].substring(0, 1))
      }, 500)
    }
  }, [isInitialized, titles])

  useEffect(() => {
    if (!isInitialized) return // Don't start until initialized
    
    let timeout
    const currentTitle = titles[currentIndex]
    
    if (!isDeleting && displayText === currentTitle) {
      // Finished typing, start deleting after pause
      timeout = setTimeout(() => setIsDeleting(true), 1500)
    } else if (isDeleting && displayText === '') {
      // Finished deleting, move to next title
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % titles.length)
    } else {
      // Typing or deleting
      const typingSpeed = isDeleting ? 30 : 80
      timeout = setTimeout(() => {
        setDisplayText(prev => {
          if (isDeleting) {
            return currentTitle.substring(0, prev.length - 1)
          } else {
            return currentTitle.substring(0, prev.length + 1)
          }
        })
      }, typingSpeed)
    }
    
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex, titles, isInitialized])

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <motion.div
        className="container hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={itemVariants}>
          <motion.p 
            className="hero-greeting"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Muhammad Saad
          </motion.h1>
          
          <div className="hero-title-container">
            <span className="hero-title-prefix">I'm a </span>
            <span className="hero-title-dynamic">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          
          <motion.p 
            className="hero-description"
            variants={itemVariants}
          >
            Passionate about creating beautiful, functional, and user-friendly web experiences. 
            I specialize in modern web technologies and love turning ideas into digital reality.
          </motion.p>
        </motion.div>

        <motion.div className="hero-cta" variants={itemVariants}>
          <motion.button
            className="btn btn-primary"
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            Get In Touch
          </motion.button>
          
          <motion.a
            href="#"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download CV
          </motion.a>
        </motion.div>

        <motion.div className="hero-social" variants={itemVariants}>
          <motion.a
            href="https://github.com/websaad"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={24} />
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/muhammad-saad-0b123b240/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={24} />
          </motion.a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={24} />
          <span>Scroll Down</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
