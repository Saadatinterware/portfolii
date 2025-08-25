import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Database, Smartphone, Globe, Settings } from 'lucide-react'
import './Skills.css'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={32} />,
      skills: [
        { name: "React.js", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Vue.js", level: 75 },
        { name: "HTML5/CSS3", level: 95 }
      ],
      color: "var(--gradient-primary)"
    },
    {
      title: "Backend Development",
      icon: <Database size={32} />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "REST APIs", level: 90 }
      ],
      color: "var(--gradient-secondary)"
    },
    {
      title: "UI/UX Design",
      icon: <Palette size={32} />,
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "Photoshop", level: 75 },
        { name: "Illustrator", level: 70 },
        { name: "Prototyping", level: 85 },
        { name: "User Research", level: 80 }
      ],
      color: "var(--gradient-accent)"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={32} />,
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 70 },
        { name: "iOS Development", level: 65 },
        { name: "Android Development", level: 70 },
        { name: "Mobile UI/UX", level: 80 },
        { name: "App Store Optimization", level: 75 }
      ],
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "DevOps & Tools",
      icon: <Settings size={32} />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Linux", level: 80 },
        { name: "Webpack", level: 80 }
      ],
      color: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
    },
    {
      title: "Web Technologies",
      icon: <Globe size={32} />,
      skills: [
        { name: "GraphQL", level: 75 },
        { name: "Socket.io", level: 80 },
        { name: "Redux", level: 85 },
        { name: "Jest/Testing", level: 80 },
        { name: "PWA", level: 75 },
        { name: "SEO", level: 80 }
      ],
      color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    }
  ]

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
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Skills & Expertise
          </motion.h2>

          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="skill-category glass-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="category-header">
                  <div 
                    className="category-icon"
                    style={{ color: `var(--primary-color)` }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1 + skillIndex * 0.05 
                      }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <motion.div
                          className="skill-progress-bar"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.2, 
                            delay: index * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          style={{
                            background: category.color
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
