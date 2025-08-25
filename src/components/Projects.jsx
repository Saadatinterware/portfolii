import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, Filter } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "GreenSphere",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://via.placeholder.com/600x400/667eea/ffffff?text=E-Commerce+Platform",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "DigiTolk",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://via.placeholder.com/600x400/f093fb/ffffff?text=Task+Management",
      category: "frontend",
      technologies: ["React", "Redux", "Socket.io", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "10x Events",
      description: "A responsive weather dashboard that provides current weather data and forecasts using OpenWeatherMap API with beautiful data visualizations.",
      image: "https://via.placeholder.com/600x400/4facfe/ffffff?text=Weather+Dashboard",
      category: "frontend",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "RESTful API Server",
      description: "A robust RESTful API built with Node.js and Express, featuring user authentication, data validation, and comprehensive documentation.",
      image: "https://via.placeholder.com/600x400/ff9a9e/ffffff?text=RESTful+API",
      category: "backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Mobile Banking App",
      description: "A secure mobile banking application built with React Native, featuring biometric authentication and real-time transaction tracking.",
      image: "https://via.placeholder.com/600x400/a8edea/ffffff?text=Banking+App",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Biometrics", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations, dark theme, and optimized performance built with React and Framer Motion.",
      image: "https://via.placeholder.com/600x400/764ba2/ffffff?text=Portfolio+Site",
      category: "frontend",
      technologies: ["React", "Framer Motion", "CSS3", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ]

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'mobile', label: 'Mobile' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured Projects
          </motion.h2>

          <motion.div className="project-filters" variants={itemVariants}>
            <div className="filter-wrapper">
              <Filter size={20} />
              <div className="filter-buttons">
                {categories.map(category => (
                  <motion.button
                    key={category.key}
                    className={`filter-btn ${filter === category.key ? 'active' : ''}`}
                    onClick={() => setFilter(category.key)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="projects-grid" variants={containerVariants}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card glass-card ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                layout
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.liveUrl}
                        className="project-link"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="project-link"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <motion.a
                      href={project.liveUrl}
                      className="btn btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye size={16} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="btn btn-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div 
              className="no-projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>No projects found for the selected category.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
