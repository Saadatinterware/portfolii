import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './CursorFollower.css'

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.classList.contains('cursor-hover') ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-hover')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    // Check for hoverable elements continuously
    const checkHoverables = (e) => {
      const target = e.target
      const isHoverable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.classList.contains('cursor-hover') ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-hover')
      
      setIsHovering(isHoverable)
    }

    document.addEventListener('mouseover', checkHoverables)

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
      document.removeEventListener('mouseover', checkHoverables)
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className={`cursor-follower ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 25
        }}
      />
      
      {/* Cursor trail */}
      <motion.div
        className={`cursor-trail ${isHovering ? 'hovering' : ''}`}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20
        }}
      />
    </>
  )
}

export default CursorFollower
