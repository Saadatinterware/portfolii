import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './LoadingScreen.css'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [showLoader, setShowLoader] = useState(true)
  
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            setShowLoader(false)
            setTimeout(() => onComplete(), 500)
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(progressInterval)
  }, [onComplete])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      y: -50,
      transition: { duration: 0.5 }
    }
  }

  const logoVariants = {
    hidden: { scale: 0.5, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        delay: 0.5,
        duration: 0.8
      }
    }
  }

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="loading-screen"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="loading-content">
            <motion.div
              className="loading-logo"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="logo-ring">
                <div className="logo-inner">
                  <span className="logo-letter">P</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="loading-text"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <h2>Portfolio</h2>
              <p>Loading amazing content...</p>
            </motion.div>
            
            <div className="loading-progress">
              <div className="progress-container">
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <span className="progress-text">{progress}%</span>
            </div>
          </div>
          
          {/* Background particles */}
          <div className="loading-particles">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="particle"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
