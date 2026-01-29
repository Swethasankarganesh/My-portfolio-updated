"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Briefcase, 
  Award,
  Calendar,
  MapPin,
  Download,
  Sparkles,
  ArrowUp,
  Brain,
  ShoppingBag,
  Book,
  MessageCircle,
  Wifi,
  Terminal,
  BarChart,
  CheckCircle,
  Zap,
  Server,
  Database,
  Layout,
  Command,
  Users,
  Target,
  TrendingUp,
  Globe,
} from "lucide-react"
import "./App.css"

function App() {
  const [activeSection, setActiveSection] = useState("about")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const containerRef = useRef(null)
  
  // Refined color theme
  const theme = {
    primary: "#3b82f6",    // Blue
    secondary: "#8b5cf6",  // Purple
    accent: "#06b6d4",     // Cyan
    dark: "#0f172a",       // Navy
    light: "#f8fafc",      // Light
    card: "#1e293b",       // Slate
    success: "#10b981",    // Emerald
    warning: "#f59e0b",    // Amber
    gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
    gradientFull: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)"
  }
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const headerBackground = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(15, 23, 42, 0)", "rgba(15, 23, 42, 0.98)"]
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      const sections = ["about", "experience", "projects", "skills", "education"]
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        }
        return false
      })
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const scrollToSection = (id) => {
    setActiveSection(id)
    setIsMenuOpen(false)
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

  // Technical Skills with proper icons
  const techSkills = [
    { name: "Java", level: 85, icon: <Cpu size={18} />, category: "Backend" },
    { name: "Python", level: 90, icon: <Brain size={18} />, category: "AI/ML" },
    { name: "JavaScript", level: 82, icon: <Code2 size={18} />, category: "Frontend" },
    { name: "React", level: 78, icon: <Layout size={18} />, category: "Frontend" },
    { name: "MySQL", level: 88, icon: <Database size={18} />, category: "Database" },
    { name: "HTML/CSS", level: 92, icon: <Globe size={18} />, category: "Frontend" },
    { name: "C++", level: 80, icon: <Terminal size={18} />, category: "Backend" },
    { name: "Spring Boot", level: 75, icon: <Server size={18} />, category: "Backend" }
  ]

  // Projects with clear, detailed descriptions
  const projects = [
    {
      title: "Mental Health Support Chatbot",
      description: "An AI-powered chatbot designed to provide immediate emotional support and coping strategies. The system uses Natural Language Processing to understand user emotions and respond empathetically while maintaining ethical boundaries.",
      icon: <Brain size={22} />,
      tech: ["Python", "TensorFlow", "NLP", "React", "Node.js"],
      features: [
        "Emotion recognition from text input",
        "Context-aware responses",
        "Privacy-focused design",
        "Resource recommendation system"
      ],
      link: "#",
      category: "AI/ML Application",
      color: theme.primary
    },
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with scalable architecture for handling multiple concurrent users.",
      icon: <ShoppingBag size={22} />,
      tech: ["Java", "Spring Boot", "MySQL", "React", "Redux"],
      features: [
        "Secure user authentication",
        "Real-time inventory management",
        "Payment gateway integration",
        "Order tracking system"
      ],
      link: "#",
      category: "Full Stack Web App",
      color: theme.secondary
    },
    {
      title: "Digital Library Management",
      description: "A comprehensive library management system enabling digital book tracking, reservations, and member management. Includes analytics dashboard for librarians to monitor borrowing patterns and popular genres.",
      icon: <Book size={22} />,
      tech: ["Java", "MySQL", "JSP", "Bootstrap", "JavaScript"],
      features: [
        "Automated book tracking",
        "Overdue fine calculation",
        "Member activity reports",
        "Multi-user access control"
      ],
      link: "#",
      category: "Management System",
      color: theme.accent
    },
    {
      title: "AI Skincare Assistant",
      description: "Intelligent skincare recommendation system that analyzes skin types and conditions to provide personalized skincare routines and product suggestions using machine learning algorithms.",
      icon: <MessageCircle size={22} />,
      tech: ["Python", "Flask", "OpenAI API", "JavaScript", "CSS"],
      features: [
        "Skin type classification",
        "Personalized routine generation",
        "Ingredient analysis",
        "Progress tracking"
      ],
      link: "#",
      category: "Health & Wellness AI",
      color: theme.success
    }
  ]

  // Experience section
  const experiences = [
    {
      company: "BSNL Telecom",
      role: "Network Engineering Intern",
      period: "Jun 2023 - Jul 2023",
      icon: <Wifi size={18} />,
      points: [
        "Hands-on experience with network infrastructure setup and maintenance",
        "Configured routers and switches for optimal network performance",
        "Participated in troubleshooting network connectivity issues",
        "Learned about telecom protocols and data transmission"
      ],
      color: theme.primary
    },
    {
      company: "Accenture",
      role: "Developer Program Intern",
      period: "May 2023 - Jun 2023",
      icon: <Terminal size={18} />,
      points: [
        "Developed Python solutions for business automation tasks",
        "Implemented Agile methodologies in project development",
        "Conducted code reviews and collaborative debugging sessions",
        "Created technical documentation for developed solutions"
      ],
      color: theme.secondary
    },
    {
      company: "Accenture Analytics",
      role: "Data Visualization Intern",
      period: "Apr 2023 - May 2023",
      icon: <BarChart size={18} />,
      points: [
        "Transformed raw data into interactive dashboards using BI tools",
        "Identified key business insights through data analysis",
        "Created visualization reports for stakeholder presentations",
        "Optimized data processing workflows for efficiency"
      ],
      color: theme.accent
    }
  ]

  // Achievements
  const achievements = [
    { number: "5+", label: "Projects", icon: <Rocket size={18} />, color: theme.primary },
    { number: "3", label: "Internships", icon: <Briefcase size={18} />, color: theme.secondary },
    { number: "8.2", label: "CGPA", icon: <Award size={18} />, color: theme.success },
    { number: "15+", label: "Technologies", icon: <Code2 size={18} />, color: theme.accent }
  ]

  // Tech Stack Categories
  const techCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind"],
      icon: <Layout size={20} />,
      color: theme.primary
    },
    {
      title: "Backend",
      skills: ["Java", "Python", "Spring Boot", "Node.js", "C++", "Flask"],
      icon: <Server size={20} />,
      color: theme.secondary
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
      icon: <Database size={20} />,
      color: theme.success
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "VS Code", "Figma", "Docker", "Agile", "Jira"],
      icon: <Command size={20} />,
      color: theme.accent
    }
  ]

  return (
    <div className="app" ref={containerRef}>
      {/* Fixed Background */}
      <div className="minimal-bg"></div>

      {/* Progress Indicator */}
      <motion.div 
        className="scroll-progress"
        style={{ 
          scaleX: scrollYProgress,
          background: theme.gradient
        }}
      />

      {/* Fixed Header */}
      <motion.header 
        className="compact-header"
        style={{ backgroundColor: headerBackground }}
      >
        <div className="container">
          <div className="header-content">
            {/* Fixed Logo - No empty gradient box */}
            <motion.div 
              className="logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="logo-mark">
                <Code2 size={22} />
              </div>
              <span className="logo-text">SWETHA S</span>
              <motion.span 
                className="logo-badge"
                animate={{ 
                  boxShadow: [
                    `0 0 0px ${theme.primary}40`,
                    `0 0 8px ${theme.primary}80`,
                    `0 0 0px ${theme.primary}40`
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap size={12} />
                <span>Developer</span>
              </motion.span>
            </motion.div>

            {/* Navigation */}
            <nav className="compact-nav">
              {["About", "Experience", "Projects", "Skills", "Education"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-item ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
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
                href="/Swetha1.pdf" 
                download
                className="resume-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: theme.gradient }}
              >
                <Download size={16} />
                <span>Resume</span>
              </motion.a>
            </nav>

            {/* Mobile Menu */}
            <motion.button 
              className="menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <span className={`menu-bar ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`menu-bar ${isMenuOpen ? 'open' : ''}`}></span>
              <span className={`menu-bar ${isMenuOpen ? 'open' : ''}`}></span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mobile-menu-content">
                {["About", "Experience", "Projects", "Skills", "Education"].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`mobile-nav-item ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight size={16} />
                    {item}
                  </motion.button>
                ))}
                <motion.a 
                  href="/Swetha1.pdf" 
                  download
                  className="mobile-resume"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  style={{ background: theme.gradient }}
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section - Fixed gradient issue */}
        <section id="about" className="hero-section">
          <div className="container">
            <div className="hero-layout">
              {/* Left Content */}
              <motion.div 
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="hero-badge">
                  <Sparkles size={16} />
                  <span>Hello there, I'm</span>
                </div>
                
                {/* Fixed: No empty gradient box, just text */}
                <h1 className="hero-title">
                  <span className="hero-name">SWETHA S</span>
                  <motion.span 
                    className="typing-cursor"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                </h1>
                
                <h2 className="hero-subtitle">
                  <Code2 size={22} />
                  <span>Software Developer</span>
                  <span className="role-tag" style={{ background: `${theme.primary}15`, color: theme.primary }}>
                    AI/ML Specialist
                  </span>
                </h2>
                
                <p className="hero-description">
                  A passionate Software Developer with expertise in building scalable web applications 
                  and AI-powered solutions. I combine technical skills with creative problem-solving 
                  to deliver efficient, user-friendly software that makes an impact.
                </p>

                {/* Contact Info */}
                <div className="contact-grid">
                  {[
                    { icon: <Mail size={18} />, text: "sweshinisankar@gmail.com" },
                    { icon: <Phone size={18} />, text: "+91 7904978495" },
                    { icon: <MapPin size={18} />, text: "Coimbatore, Tamil Nadu" }
                  ].map((contact, idx) => (
                    <motion.div 
                      key={idx}
                      className="contact-chip"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      {contact.icon}
                      <span>{contact.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="action-buttons">
                  <motion.a
                    href="https://www.linkedin.com/in/swetha-s-192363285"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn primary"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ background: theme.primary }}
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="https://github.com/Swethasankarganesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn secondary"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ borderColor: theme.secondary, color: theme.secondary }}
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href="mailto:sweshinisankar@gmail.com"
                    className="action-btn accent"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ borderColor: theme.accent, color: theme.accent }}
                  >
                    <Mail size={20} />
                    <span>Email Me</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Right Stats - Fixed layout */}
              <motion.div 
                className="hero-stats"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Achievement Cards */}
                <div className="stats-grid">
                  {achievements.map((stat, idx) => (
                    <motion.div 
                      key={idx}
                      className="stat-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                      whileHover={{ y: -3 }}
                      style={{ borderLeftColor: stat.color }}
                    >
                      <div className="stat-icon" style={{ color: stat.color }}>
                        {stat.icon}
                      </div>
                      <div className="stat-content">
                        <div className="stat-number">{stat.number}</div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Expertise */}
                <div className="tech-expertise">
                  <h3 className="expertise-title">Technical Expertise</h3>
                  <div className="expertise-grid">
                    {techCategories.map((category, idx) => (
                      <motion.div
                        key={idx}
                        className="expertise-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        whileHover={{ y: -3 }}
                        style={{ borderColor: `${category.color}30` }}
                      >
                        <div className="expertise-header" style={{ color: category.color }}>
                          {category.icon}
                          <span>{category.title}</span>
                        </div>
                        <div className="expertise-skills">
                          {category.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="skill-chip" style={{ background: `${category.color}15` }}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section experience-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="section-title-wrapper">
                <motion.div
                  className="section-icon-wrapper"
                  style={{ background: theme.gradient }}
                >
                  <Briefcase size={24} />
                </motion.div>
                <div>
                  <h2 className="section-title">Professional Experience</h2>
                  <p className="section-subtitle">Internships & hands-on learning</p>
                </div>
              </div>
            </motion.div>

            <div className="experience-timeline">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="timeline-item"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <motion.div 
                    className="timeline-marker"
                    style={{ borderColor: exp.color }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                  >
                    {exp.icon}
                  </motion.div>
                  <motion.div 
                    className="experience-card"
                    whileHover={{ y: -3 }}
                    style={{ borderLeftColor: exp.color }}
                  >
                    <div className="exp-header-content">
                      <div className="exp-company-info">
                        <h3>{exp.company}</h3>
                        <span className="exp-duration">{exp.period}</span>
                      </div>
                      <span className="exp-role-badge" style={{ background: `${exp.color}15`, color: exp.color }}>
                        {exp.role}
                      </span>
                    </div>
                    <ul className="exp-points-list">
                      {exp.points.map((point, pIdx) => (
                        <motion.li 
                          key={pIdx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: pIdx * 0.1 }}
                        >
                          <CheckCircle size={16} style={{ color: exp.color }} />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section - Improved with better descriptions */}
        <section id="projects" className="section projects-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-title-wrapper">
                <motion.div
                  className="section-icon-wrapper"
                  style={{ background: theme.gradient }}
                >
                  <Rocket size={24} />
                </motion.div>
                <div>
                  <h2 className="section-title">Featured Projects</h2>
                  <p className="section-subtitle">Practical applications showcasing technical skills</p>
                </div>
              </div>
            </motion.div>

            <div className="projects-grid">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="project-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  style={{ borderTopColor: project.color }}
                >
                  <div className="project-header-content">
                    <motion.div 
                      className="project-icon-wrapper"
                      style={{ background: `${project.color}15`, color: project.color }}
                      animate={{ rotate: [0, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {project.icon}
                    </motion.div>
                    <div>
                      <h3 className="project-title-text">{project.title}</h3>
                      <span className="project-category-label" style={{ color: project.color }}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="project-description-text">
                    {project.description}
                  </p>
                  
                  <div className="project-features">
                    <h4 className="features-title">Key Features:</h4>
                    <ul className="features-list">
                      {project.features.map((feature, fIdx) => (
                        <motion.li 
                          key={fIdx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: fIdx * 0.1 }}
                        >
                          <div className="feature-dot" style={{ backgroundColor: project.color }}></div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-tech-stack">
                    <div className="tech-tags">
                      {project.tech.map((tech, tIdx) => (
                        <motion.span
                          key={tech}
                          className="tech-tag-item"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.2, delay: tIdx * 0.1 }}
                          style={{ 
                            background: `${project.color}10`,
                            borderColor: `${project.color}30`,
                            color: project.color
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-title-wrapper">
                <motion.div
                  className="section-icon-wrapper"
                  style={{ background: theme.gradient }}
                >
                  <Code2 size={24} />
                </motion.div>
                <div>
                  <h2 className="section-title">Technical Skills</h2>
                  <p className="section-subtitle">Proficiency levels & expertise areas</p>
                </div>
              </div>
            </motion.div>

            {/* Skill Bars */}
            <div className="skill-bars-container">
              {techSkills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  className="skill-bar-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <div className="skill-info-row">
                    <div className="skill-icon-wrapper">
                      {skill.icon}
                      <div className="skill-details">
                        <span className="skill-name-text">{skill.name}</span>
                        <span className="skill-category-label">{skill.category}</span>
                      </div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-progress-container">
                    <motion.div 
                      className="skill-progress-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                      style={{ background: theme.gradient }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Professional Competencies */}
            <motion.div 
              className="competencies-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="competencies-title">Professional Competencies</h3>
              <div className="competencies-grid">
                {[
                  { skill: "Problem Solving", level: "Advanced", icon: <Target size={20} /> },
                  { skill: "Team Collaboration", level: "Expert", icon: <Users size={20} /> },
                  { skill: "Adaptability", level: "Advanced", icon: <TrendingUp size={20} /> },
                  { skill: "Analytical Thinking", level: "Advanced", icon: <Brain size={20} /> },
                  { skill: "Communication", level: "Expert", icon: <MessageCircle size={20} /> },
                  { skill: "Project Management", level: "Intermediate", icon: <Briefcase size={20} /> },
                  { skill: "Code Optimization", level: "Advanced", icon: <Zap size={20} /> },
                  { skill: "Continuous Learning", level: "Expert", icon: <GraduationCap size={20} /> }
                ].map((comp, idx) => (
                  <motion.div
                    key={comp.skill}
                    className="competency-card-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: idx * 0.03 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="competency-icon" style={{ color: theme.primary }}>
                      {comp.icon}
                    </div>
                    <div className="competency-details">
                      <span className="competency-name">{comp.skill}</span>
                      <span className="competency-level" style={{ color: theme.primary }}>
                        {comp.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section education-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-title-wrapper">
                <motion.div
                  className="section-icon-wrapper"
                  style={{ background: theme.gradient }}
                >
                  <GraduationCap size={24} />
                </motion.div>
                <div>
                  <h2 className="section-title">Education</h2>
                  <p className="section-subtitle">Academic background & achievements</p>
                </div>
              </div>
            </motion.div>

            <div className="education-cards-container">
              <motion.div 
                className="education-card-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -3 }}
                style={{ borderColor: `${theme.primary}30` }}
              >
                <div className="education-card-header">
                  <motion.div 
                    className="education-icon"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ background: theme.gradient }}
                  >
                    <GraduationCap size={26} />
                  </motion.div>
                  <div className="education-info">
                    <h3>Bachelor of Information Technology</h3>
                    <p className="institution-name">Sri Ramakrishna Institute of Technology, Coimbatore</p>
                  </div>
                </div>
                <div className="education-stats">
                  <div className="education-stat-item">
                    <Award size={18} style={{ color: theme.success }} />
                    <div>
                      <span className="stat-name">CGPA</span>
                      <span className="stat-value" style={{ color: theme.success }}>8.2/10.0</span>
                    </div>
                  </div>
                  <div className="education-stat-item">
                    <Calendar size={18} style={{ color: theme.primary }} />
                    <div>
                      <span className="stat-name">Duration</span>
                      <span className="stat-value" style={{ color: theme.primary }}>2021 - Present</span>
                    </div>
                  </div>
                  <div className="education-stat-item">
                    <Sparkles size={18} style={{ color: theme.accent }} />
                    <div>
                      <span className="stat-name">Status</span>
                      <span className="stat-value" style={{ color: theme.accent }}>Currently Pursuing</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="education-card-item"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ y: -3 }}
                style={{ borderColor: `${theme.secondary}30` }}
              >
                <div className="education-card-header">
                  <motion.div 
                    className="education-icon"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    style={{ background: theme.gradient }}
                  >
                    <Book size={26} />
                  </motion.div>
                  <div className="education-info">
                    <h3>Higher Secondary Certificate (HSC)</h3>
                    <p className="institution-name">Venkatalakshmi Matriculation & Punitha Arockia Annai HSS</p>
                  </div>
                </div>
                <div className="education-stats">
                  <div className="education-stat-item">
                    <Award size={18} style={{ color: theme.success }} />
                    <div>
                      <span className="stat-name">Percentage</span>
                      <span className="stat-value" style={{ color: theme.success }}>87%</span>
                    </div>
                  </div>
                  <div className="education-stat-item">
                    <Calendar size={18} style={{ color: theme.primary }} />
                    <div>
                      <span className="stat-name">Year</span>
                      <span className="stat-value" style={{ color: theme.primary }}>2021</span>
                    </div>
                  </div>
                  <div className="education-stat-item">
                    <Target size={18} style={{ color: theme.accent }} />
                    <div>
                      <span className="stat-name">Stream</span>
                      <span className="stat-value" style={{ color: theme.accent }}>Science with Mathematics</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Fixed gradient issue */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content-wrapper">
            <div className="footer-main-content">
              <div className="footer-info-section">
                {/* Fixed: No gradient box, just regular text */}
                <h3 className="footer-name">SWETHA S</h3>
                <p className="footer-tagline-text">Software Developer & AI Enthusiast</p>
                <div className="footer-contact-info">
                  <div className="contact-info-item">
                    <Mail size={18} />
                    <span>sweshinisankar@gmail.com</span>
                  </div>
                  <div className="contact-info-item">
                    <Phone size={18} />
                    <span>+91 7904978495</span>
                  </div>
                  <div className="contact-info-item">
                    <MapPin size={18} />
                    <span>Coimbatore, Tamil Nadu</span>
                  </div>
                </div>
              </div>

              <div className="footer-links-section">
                <div className="links-group">
                  <h4>Quick Links</h4>
                  {["About", "Experience", "Projects", "Skills", "Education"].map((item) => (
                    <motion.a 
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.toLowerCase())
                      }}
                      whileHover={{ x: 5, color: theme.primary }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
                <div className="links-group">
                  <h4>Connect</h4>
                  <motion.a 
                    href="https://linkedin.com/in/swetha-s-192363285"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5, color: theme.primary }}
                  >
                    LinkedIn
                  </motion.a>
                  <motion.a 
                    href="https://github.com/Swethasankarganesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5, color: theme.primary }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a 
                    href="mailto:sweshinisankar@gmail.com"
                    whileHover={{ x: 5, color: theme.primary }}
                  >
                    Email
                  </motion.a>
                </div>
              </div>
            </div>

            <div className="footer-bottom-section">
              <motion.p
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                © {new Date().getFullYear()} SWETHA S. All rights reserved.
              </motion.p>
              <div className="footer-social-links">
                {[
                  { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/swetha-s-192363285" },
                  { icon: <Github size={20} />, href: "https://github.com/Swethasankarganesh" },
                  { icon: <Mail size={20} />, href: "mailto:sweshinisankar@gmail.com" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    style={{ color: theme.primary }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            className="back-to-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            style={{ background: theme.gradient }}
          >
            <ArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App