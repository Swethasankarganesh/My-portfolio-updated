"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Briefcase, 
  Rocket, 
  GraduationCap,
  Code2,
  Cpu,
  Database,
  Cloud,
  ExternalLink,
  Sparkles,
  ChevronRight,
  Award,
  Calendar,
  MapPin,
  Download,
  Wifi,
  Users,
  BarChart,
  Book,
  ShoppingBag,
  MessageCircle,
  Monitor
} from "lucide-react"
import "./App.css"

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState("about")
  const [scrollY, setScrollY] = useState(0)
  const particlesRef = useRef([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: e.clientX, 
        y: e.clientY 
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    
    // Create floating particles animation
    const updateParticles = () => {
      particlesRef.current.forEach((particle, i) => {
        if (particle) {
          const x = Math.sin(Date.now() * 0.001 + i) * 50
          const y = Math.cos(Date.now() * 0.001 + i) * 50
          particle.style.transform = `translate(${x}px, ${y}px)`
        }
      })
    }

    const interval = setInterval(updateParticles, 50)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      clearInterval(interval)
    }
  }, [])

  const scrollToSection = (id) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const skillsData = {
    technical: [
      { name: "C++", level: 85, icon: "⚙️" },
      { name: "Java", level: 80, icon: "☕" },
      { name: "Python", level: 90, icon: "🐍" },
      { name: "JavaScript", level: 82, icon: "📜" },
    ],
    web: [
      { name: "HTML5", level: 90, icon: "🌐" },
      { name: "CSS", level: 85, icon: "🎨" },
      { name: "Full Stack", level: 83, icon: "🚀" },
      { name: "MySQL", level: 88, icon: "🗄️" },
    ],
    soft: [
      { name: "Problem Solving", level: 90, icon: "💡" },
      { name: "Software Planning", level: 85, icon: "📋" },
      { name: "Generative AI", level: 78, icon: "🤖" },
      { name: "Team Collaboration", level: 87, icon: "👥" },
    ]
  }

  return (
    <div className="app">
      {/* Animated Background with Gradient Mesh */}
      <div className="bg-gradient"></div>
      <div className="gradient-mesh"></div>
      
      {/* Animated Mouse Glow */}
      <motion.div
        className="mouse-glow"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      />

      {/* Floating Particles with Animation */}
      <div className="particles-container">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            ref={el => particlesRef.current[i] = el}
            className="particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              y: [null, Math.random() * -100],
              x: [null, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
            }}
          />
        ))}
      </div>

      {/* Navigation Dots - Hidden on Mobile */}
      <div className="nav-dots">
        {["about", "summary", "experience", "projects", "skills", "education"].map((section, idx) => (
          <motion.button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`nav-dot ${activeSection === section ? "active" : ""}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              opacity: activeSection === section ? 1 : 0.6,
              scale: activeSection === section ? 1.2 : 1
            }}
          >
            <span className="dot-tooltip">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Header */}
      <motion.header 
        className="glass-header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <div className="header-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="sparkle-icon" size={20} />
            <h1 className="logo-text">
              <span className="gradient-text">SWETHA</span>
              <span className="logo-surname"> S</span>
            </h1>
            <div className="badge">Software Developer</div>
          </motion.div>

          <nav className="nav-links">
            {["About", "Summary", "Experience", "Projects", "Skills", "Education"].map((item, idx) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav-btn ${activeSection === item.toLowerCase() ? "active" : ""}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  color: activeSection === item.toLowerCase() ? "var(--accent)" : "var(--text-secondary)"
                }}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div 
                    className="nav-indicator"
                    layoutId="nav-indicator"
                  />
                )}
              </motion.button>
            ))}
            
            <motion.a
              href="#"
              className="resume-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Resume
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="about" className="hero-section">
          <motion.div 
            className="hero-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-content">
              <div className="hero-text">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="hero-greeting">Hi, I'm</p>
                  <h1 className="hero-name">
                    <span className="gradient-text">SWETHA.S</span>
                  </h1>
                </motion.div>
                
                <motion.h2
                  className="hero-title"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Software Developer
                  <span className="highlight"> & AI/ML Enthusiast</span>
                </motion.h2>
                
                <motion.div
                  className="hero-description"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p>linkedin.com/in/swetha-s-192363285</p>
                </motion.div>

                <motion.div 
                  className="contact-info"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="contact-item">
                    <Mail size={18} />
                    <span>sweshinisankar@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <Phone size={18} />
                    <span>+91 7904978495</span>
                  </div>
                  <div className="contact-item">
                    <MapPin size={18} />
                    <span>Coimbatore, India</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="social-links"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.a
                    href="https://www.linkedin.com/in/swetha-s-192363285"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href="https://github.com/Swethasankarganesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn github"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    GitHub
                  </motion.a>
                </motion.div>
              </div>

              <motion.div 
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="floating-card">
                  <div className="tech-stack-icons">
                    <div className="tech-icon">
                      <Code2 size={32} />
                    </div>
                    <div className="tech-icon">
                      <Cpu size={32} />
                    </div>
                    <div className="tech-icon">
                      <Database size={32} />
                    </div>
                    <div className="tech-icon">
                      <Cloud size={32} />
                    </div>
                  </div>
                  <div className="stats-grid">
                    <div className="stat">
                      <span className="stat-number">5+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">3</span>
                      <span className="stat-label">Internships</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">8.2</span>
                      <span className="stat-label">CGPA</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Professional Summary Section */}
        <section id="summary" className="section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-header">
              <Briefcase className="section-icon" size={28} />
              <h2 className="section-title">Professional Summary</h2>
            </div>

            <motion.div 
              className="summary-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <p className="summary-text">
                Technology-focused professional with expertise in Full Stack Development and emerging AI/ML technologies. 
                Strong programming foundation in C, C++, Java, Python, and MySQL, combined with knowledge of software 
                planning and generative AI. Recognized for analytical thinking, adaptability, and a results-oriented mindset. 
                Passionate about building scalable, secure, and high-performance software solutions.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-header">
              <Briefcase className="section-icon" size={28} />
              <h2 className="section-title">Work Experience</h2>
            </div>

            <div className="timeline">
              {/* BSNL Internship */}
              <motion.div
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="timeline-marker">
                  <div className="marker-circle"></div>
                  <div className="timeline-line"></div>
                </div>
                <motion.div 
                  className="experience-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="experience-header">
                    <div>
                      <div className="company-meta">
                        <Wifi size={20} className="company-icon" />
                        <div>
                          <h3 className="company-name">BSNL Training Center</h3>
                          <p className="role-title">Telecom Intern</p>
                        </div>
                      </div>
                      <div className="experience-meta">
                        <Calendar size={14} />
                        <span>Two-week Internship</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="achievement-list">
                    <motion.li 
                      className="achievement-item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <ChevronRight size={16} />
                      Completed a two-week internship at the BSNL Main Telephone Exchange with hands-on exposure to networking fundamentals and telecommunication protocols
                    </motion.li>
                    <motion.li 
                      className="achievement-item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ChevronRight size={16} />
                      Gained practical knowledge of network configurations, service enablement, and protocol-based customer connectivity
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>

              {/* Accenture Developer Internship */}
              <motion.div
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="timeline-marker">
                  <div className="marker-circle"></div>
                  <div className="timeline-line"></div>
                </div>
                <motion.div 
                  className="experience-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="experience-header">
                    <div>
                      <div className="company-meta">
                        <Users size={20} className="company-icon" />
                        <div>
                          <h3 className="company-name">Accenture</h3>
                          <p className="role-title">Developer and Technology Intern (Virtual)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="achievement-list">
                    <motion.li 
                      className="achievement-item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <ChevronRight size={16} />
                      Completed a structured virtual internship focused on agile problem representation and solution development
                    </motion.li>
                    <motion.li 
                      className="achievement-item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <ChevronRight size={16} />
                      Developed and implemented Python-based solutions for defined problem statements using logical and structured programming approaches
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>

              {/* Accenture Data Analyst Internship */}
              <motion.div
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="timeline-marker">
                  <div className="marker-circle"></div>
                </div>
                <motion.div 
                  className="experience-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="experience-header">
                    <div>
                      <div className="company-meta">
                        <BarChart size={20} className="company-icon" />
                        <div>
                          <h3 className="company-name">Accenture</h3>
                          <p className="role-title">Data Analyst and Visualization Job Simulation (Virtual)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="achievement-list">
                    <motion.li 
                      className="achievement-item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <ChevronRight size={16} />
                      Participated in a virtual job simulation involving data organization, analysis, and visualization
                    </motion.li>
                    <motion.li 
                      className="achievement-item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <ChevronRight size={16} />
                      Interpreted datasets using charts and graphs to identify trends, patterns, and growth insights
                    </motion.li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-header">
              <Rocket className="section-icon" size={28} />
              <h2 className="section-title">Projects</h2>
            </div>

            <div className="projects-grid">
              {/* Chatbot for Childhood Trauma Care */}
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-header">
                  <div className="project-icon">
                    <MessageCircle size={24} />
                  </div>
                  <h3 className="project-title">Chatbot for Childhood Trauma Care</h3>
                </div>
                
                <p className="project-description">
                  Developed a conversational AI-based chatbot to provide supportive interactions and basic guidance
                </p>
                
                <div className="project-tech">
                  <span className="tech-badge">AI</span>
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">NLP</span>
                </div>
              </motion.div>

              {/* E-Commerce Application System */}
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-header">
                  <div className="project-icon">
                    <ShoppingBag size={24} />
                  </div>
                  <h3 className="project-title">E-Commerce Application System</h3>
                </div>
                
                <p className="project-description">
                  Built a fully functional e-commerce application with features including product listing, cart management, and order processing
                </p>
                
                <div className="project-tech">
                  <span className="tech-badge">Full Stack</span>
                  <span className="tech-badge">JavaScript</span>
                  <span className="tech-badge">MySQL</span>
                </div>
              </motion.div>

              {/* Online Library Management System */}
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-header">
                  <div className="project-icon">
                    <Book size={24} />
                  </div>
                  <h3 className="project-title">Online Library Management System</h3>
                </div>
                
                <p className="project-description">
                  Designed and implemented a system to manage book inventory, users, and lending operations
                </p>
                
                <div className="project-tech">
                  <span className="tech-badge">Java</span>
                  <span className="tech-badge">MySQL</span>
                  <span className="tech-badge">OOP</span>
                </div>
              </motion.div>

              {/* Chatbot for Skin Care Support */}
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-header">
                  <div className="project-icon">
                    <MessageCircle size={24} />
                  </div>
                  <h3 className="project-title">Chatbot for Skin Care Support</h3>
                </div>
                
                <p className="project-description">
                  Created an automated chatbot to deliver skincare-related information using conversational workflows
                </p>
                
                <div className="project-tech">
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">Chatbot</span>
                  <span className="tech-badge">Automation</span>
                </div>
              </motion.div>

              {/* Platform Rebuild Projects */}
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-header">
                  <div className="project-icon">
                    <Monitor size={24} />
                  </div>
                  <h3 className="project-title">Platform Rebuild Projects</h3>
                </div>
                
                <p className="project-description">
                  Rebuilt platforms inspired by Udemy, TripAdvisor, and Apple Store, focusing on application structure, navigation flow, and functional replication
                </p>
                
                <div className="project-tech">
                  <span className="tech-badge">Web Dev</span>
                  <span className="tech-badge">UI/UX</span>
                  <span className="tech-badge">Frontend</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-header">
              <Code2 className="section-icon" size={28} />
              <h2 className="section-title">Skills</h2>
            </div>

            <div className="skills-grid">
              {Object.entries(skillsData).map(([category, skills], idx) => (
                <motion.div
                  key={category}
                  className="skill-category-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="category-title">
                    {category === 'technical' ? 'Programming Languages' : 
                     category === 'web' ? 'Web Technologies' : 'Professional Skills'}
                  </h3>
                  <div className="skills-list">
                    {skills.map((skill, i) => (
                      <motion.div 
                        key={skill.name}
                        className="skill-item"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <div className="skill-info">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <motion.div 
                            className="skill-progress"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Skills List */}
            <motion.div 
              className="additional-skills"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="additional-skills-title">Additional Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">Full Stack Development</span>
                <span className="skill-tag">Machine Learning Fundamentals</span>
                <span className="skill-tag">Prompt Engineering</span>
                <span className="skill-tag">Generative AI</span>
                <span className="skill-tag">Software Planning</span>
                <span className="skill-tag">Problem-Solving</span>
                <span className="skill-tag">Self-Motivated</span>
                <span className="skill-tag">Team Player</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-header">
              <GraduationCap className="section-icon" size={28} />
              <h2 className="section-title">Education</h2>
            </div>

            <div className="education-grid">
              {/* Bachelor's Degree */}
              <motion.div 
                className="education-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="education-header">
                  <div className="degree-icon">🎓</div>
                  <div>
                    <h3 className="degree-name">Bachelor of Information Technology</h3>
                    <p className="institution-name">Sri Ramakrishna Institute of Technology, Coimbatore</p>
                  </div>
                </div>
                
                <div className="education-details">
                  <div className="detail-item">
                    <Award size={16} />
                    <span>CGPA: 8.2</span>
                  </div>
                </div>
              </motion.div>

              {/* Higher Secondary */}
              <motion.div 
                className="education-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="education-header">
                  <div className="degree-icon">📚</div>
                  <div>
                    <h3 className="degree-name">Higher Secondary Certificate (HSC) – 2021</h3>
                    <p className="institution-name">Venkatalakshmi Matriculation Higher Secondary School</p>
                    <p className="institution-name">Punitha Arockia Annai Higher Secondary School, Pudukkottai</p>
                  </div>
                </div>
                
                <div className="education-details">
                  <div className="detail-item">
                    <Award size={16} />
                    <span>Percentage: 87%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-logo">SWETHA.S</h3>
              <p className="footer-tagline">Software Developer & AI/ML Enthusiast</p>
              <p className="footer-contact">sweshinisankar@gmail.com | +91 7904978495</p>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4>Quick Links</h4>
                {["About", "Summary", "Experience", "Projects", "Skills", "Education"].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.toLowerCase())
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
              
              <div className="link-group">
                <h4>Connect</h4>
                <a href="mailto:sweshinisankar@gmail.com">Email</a>
                <a href="https://linkedin.com/in/swetha-s-192363285">LinkedIn</a>
                <a href="https://github.com/Swetha-star">GitHub</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} SWETHA.S. All rights reserved.</p>
            <p className="footer-note">
              Built with React, Framer Motion, and modern web technologies
            </p>
          </div>
        </div>
      </motion.footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {scrollY > 500 && (
          <motion.button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App