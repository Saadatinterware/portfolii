import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Coffee, Users, Code } from 'lucide-react'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const stats = [
    { icon: <Code size={32} />, number: "50+", label: "Projects Completed" },
    { icon: <Users size={32} />, number: "30+", label: "Happy Clients" },
    { icon: <Coffee size={32} />, number: "1000+", label: "Cups of Coffee" },
    { icon: <Award size={32} />, number: "5+", label: "Awards Won" }
  ]

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

  const skillsData = [
    { name: "Frontend Development", percentage: 95 },
    { name: "Backend Development", percentage: 85 },
    { name: "UI/UX Design", percentage: 80 },
    { name: "Mobile Development", percentage: 75 }
  ]

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>

          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="about-intro">
                <h3>Hello! I'm John, a passionate web developer.</h3>
                <p>
                  I'm a full-stack developer with over 5 years of experience in creating 
                  modern, responsive, and user-friendly web applications. I have a strong 
                  foundation in both frontend and backend technologies, with a keen eye for 
                  design and user experience.
                </p>
                <p>
                  My journey in web development started when I built my first website in college. 
                  Since then, I've been constantly learning and adapting to new technologies, 
                  always striving to write clean, efficient, and maintainable code.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or enjoying a good cup of coffee while reading about 
                  the latest trends in web development.
                </p>
              </div>

              <div className="skills-progress">
                <h4>Technical Skills</h4>
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    variants={itemVariants}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="about-image" variants={itemVariants}>
              <div className="image-container">
                <div className="image-placeholder">
                  <div className="avatar-bg">
                    <span className="avatar-text">JD</span>
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="image-decoration"></div>
              </div>
            </motion.div>
          </div>

          <motion.div className="about-stats" variants={itemVariants}>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card glass-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <motion.div
                    className="stat-number"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
