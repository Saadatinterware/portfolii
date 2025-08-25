import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import './Experience.css'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Interware Private Limited.",
      location: "Lahore, Punjab",
      period: "2023 - Present",
      type: "Full-time",
      description: [
        "Led development of a scalable e-commerce platform serving 100k+ users",
        "Implemented microservices architecture reducing system latency by 40%",
        "Mentored junior developers and established coding standards",
        "Technologies: React, Node.js, AWS, Docker, MongoDB"
      ],
      achievements: ["Increased team productivity by 30%", "Reduced deployment time by 60%"]
    },
    {
      title: "Full Stack Developer",
      company: "Boson Studio.",
      location: "Phalia, Punjab",
      period: "2022 - 2023",
      type: "Full-time",
      description: [
        "Developed and maintained multiple client web applications",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Integrated third-party APIs and payment gateways",
        "Technologies: Vue.js, Python, Django, PostgreSQL"
      ],
      achievements: ["Delivered 15+ projects on time", "Client satisfaction rate of 98%"]
    },
    {
      title: "Web Development Intern",
      company: "Boson Studio",
      location: "Phalia, Punjab",
      period: "2021 - 2022",
      type: "Full-time",
      description: [
        "Built responsive web applications for various startup clients",
        "Optimized application performance and improved loading speeds by 50%",
        "Implemented modern CSS frameworks and animation libraries",
        "Technologies: React, JavaScript, Sass, Webpack"
      ],
      achievements: ["Improved page load speeds by 50%", "Built 8 successful MVP products"]
    },
    // {
    //   title: "Junior Web Developer",
    //   company: "Creative Agency",
    //   location: "Los Angeles, CA",
    //   period: "2018 - 2019",
    //   type: "Full-time",
    //   description: [
    //     "Developed custom WordPress themes and plugins",
    //     "Created interactive landing pages for marketing campaigns",
    //     "Collaborated with designers to implement creative web solutions",
    //     "Technologies: HTML5, CSS3, JavaScript, PHP, WordPress"
    //   ],
    //   achievements: ["Built 20+ custom WordPress sites", "Increased conversion rates by 25%"]
    // }
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Work Experience
          </motion.h2>

          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="timeline-dot">
                  <div className="dot-inner"></div>
                </div>
                
                <div className="experience-content glass-card">
                  <div className="experience-header">
                    <div className="title-section">
                      <h3 className="job-title">{exp.title}</h3>
                      <div className="company-info">
                        <span className="company-name">{exp.company}</span>
                        <span className="job-type">{exp.type}</span>
                      </div>
                    </div>
                    
                    <div className="meta-info">
                      <div className="period">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="location">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="experience-body">
                    <ul className="responsibilities">
                      {exp.description.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + idx * 0.1 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="achievements">
                      <h4>Key Achievements:</h4>
                      <div className="achievement-tags">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.span
                            key={idx}
                            className="achievement-tag"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
