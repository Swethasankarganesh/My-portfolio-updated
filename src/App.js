"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Briefcase, 
  Rocket, 
  GraduationCap,
  Code2,
  ExternalLink,
  ChevronRight,
  Award,
  Calendar,
  MapPin,
  Download,
  Sparkles,
  ArrowUp,
  Brain,
  Book,
  Wifi,
  Terminal,
  BarChart,
  CheckCircle,
  Zap,
  Server,
  Database,
  Layout,
  Cloud,
  Heart,
  Smartphone,
  Globe,
  BookOpen,
  ShoppingCart,
  Bot,
  Cpu,
  Target,
  TrendingUp,
  CircuitBoard
} from "lucide-react"
import "./App.css"

function App() {
  const [activeSection, setActiveSection] = useState("about")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const containerRef = useRef(null)
  
  const theme = {
    primary: "#3b82f6",
    secondary: "#8b5cf6",
    accent: "#06b6d4",
    dark: "#0f172a",
    light: "#f8fafc",
    card: "#1e293b",
    success: "#10b981",
    warning: "#f59e0b",
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

  // Technical Skills
  const techSkills = [
    { name: "Java Development", level: 85, icon: <Server size={18} />, category: "Backend Engineering" },
    { name: "Python & AI/ML", level: 90, icon: <Brain size={18} />, category: "Intelligent Systems" },
    { name: "C/C++", level: 80, icon: <Cpu size={18} />, category: "System Programming" },
    { name: "MySQL & Databases", level: 88, icon: <Database size={18} />, category: "Data Management" },
    { name: "JavaScript/React", level: 82, icon: <Code2 size={18} />, category: "Frontend Development" },
    { name: "Spring Boot", level: 78, icon: <Cloud size={18} />, category: "Enterprise Framework" },
    { name: "HTML/CSS", level: 92, icon: <Globe size={18} />, category: "Web Technologies" },
    { name: "Chatbot Development", level: 85, icon: <Bot size={18} />, category: "AI Solutions" }
  ]

  // Projects
  const projects = [
    {
      title: "AI-Powered Trauma Support Chatbot",
      description: "Engineered a conversational AI chatbot providing mental health support and emotional guidance using Natural Language Processing and empathetic response algorithms.",
      icon: <Heart size={22} />,
      tech: ["Python", "NLP", "AI/ML", "Dialogflow", "Web APIs"],
      features: [
        "Emotion recognition & empathetic responses",
        "Resource recommendation engine",
        "Secure & confidential interactions",
        "Multi-platform accessibility"
      ],
      link: "#",
      category: "Healthcare AI Solution",
      color: theme.primary
    },
    {
      title: "Enterprise E-Commerce Platform",
      description: "Developed a comprehensive e-commerce solution with end-to-end functionality including inventory management, secure payments, and real-time order processing.",
      icon: <ShoppingCart size={22} />,
      tech: ["Java", "Spring Boot", "MySQL", "React", "Payment Gateway"],
      features: [
        "Scalable product catalog system",
        "Secure payment processing",
        "Real-time inventory tracking",
        "Customer management dashboard"
      ],
      link: "#",
      category: "Full Stack Commerce",
      color: theme.secondary
    },
    {
      title: "Digital Library Management System",
      description: "Architected a complete library management platform automating book tracking, user management, and lending operations with comprehensive reporting.",
      icon: <BookOpen size={22} />,
      tech: ["Java", "MySQL", "JSP", "Bootstrap", "JavaScript"],
      features: [
        "Automated book tracking system",
        "User authentication & role management",
        "Overdue alert notifications",
        "Analytics & reporting dashboard"
      ],
      link: "#",
      category: "Management Software",
      color: theme.accent
    },
    {
      title: "Intelligent Skincare Assistant Bot",
      description: "Built an AI-driven skincare advisor delivering personalized recommendations through conversational interfaces and skin analysis algorithms.",
      icon: <Bot size={22} />,
      tech: ["Python", "Chatbot Framework", "AI Algorithms", "Web Integration"],
      features: [
        "Personalized skincare analysis",
        "Product recommendation engine",
        "Daily routine planning",
        "Educational content delivery"
      ],
      link: "#",
      category: "Wellness AI Application",
      color: theme.success
    },
    {
      title: "Enterprise Platform Replication Suite",
      description: "Architected and implemented functional replicas of leading platforms (Udemy, TripAdvisor, Apple Store) demonstrating comprehensive application structure mastery.",
      icon: <Smartphone size={22} />,
      tech: ["Java", "React", "MySQL", "REST APIs", "UI/UX Design"],
      features: [
        "Course management system",
        "Review & rating platform",
        "Product showcase application",
        "Unified user authentication"
      ],
      link: "#",
      category: "Platform Architecture",
      color: theme.warning
    }
  ]

  const experiences = [
    {
      company: "BSNL Telecom",
      role: "Network Engineering Intern",
      period: "Jun 2023 - Jul 2023",
      icon: <Wifi size={18} />,
      points: [
        "Implemented network infrastructure configurations for optimal performance",
        "Resolved connectivity issues and optimized data transmission protocols",
        "Gained practical expertise in telecommunications architecture"
      ],
      color: theme.primary
    },
    {
      company: "Accenture",
      role: "Developer Program Intern",
      period: "May 2023 - Jun 2023",
      icon: <Terminal size={18} />,
      points: [
        "Developed Python-based automation solutions for business processes",
        "Applied Agile methodologies in software development lifecycle",
        "Enhanced problem-solving capabilities through structured programming"
      ],
      color: theme.secondary
    },
    {
      company: "Accenture Analytics",
      role: "Data Visualization Specialist Intern",
      period: "Apr 2023 - May 2023",
      icon: <BarChart size={18} />,
      points: [
        "Transformed complex datasets into actionable insights through visualization",
        "Created interactive dashboards for business intelligence reporting",
        "Identified trends and patterns to drive data-informed decisions"
      ],
      color: theme.accent
    }
  ]

  const achievements = [
    { number: "5", label: "Production-Ready Projects", icon: <Rocket size={18} />, color: theme.primary },
    { number: "8+", label: "Core Technologies", icon: <CircuitBoard size={18} />, color: theme.secondary },
    { number: "3", label: "Industry Internships", icon: <Briefcase size={18} />, color: theme.success },
    { number: "2", label: "AI Solutions Built", icon: <TrendingUp size={18} />, color: theme.accent }
  ]

  const techCategories = [
    {
      title: "Full Stack Engineering",
      skills: ["Java", "Spring Boot", "React", "JavaScript", "HTML/CSS", "REST APIs"],
      icon: <Server size={20} />,
      color: theme.primary
    },
    {
      title: "AI & Intelligent Systems",
      skills: ["Python", "AI/ML", "Chatbot Development", "NLP", "Generative AI"],
      icon: <Brain size={20} />,
      color: theme.secondary
    },
    {
      title: "Data Engineering",
      skills: ["MySQL", "Database Design", "Data Modeling", "Analytics", "ETL"],
      icon: <Database size={20} />,
      color: theme.success
    },
    {
      title: "System Architecture",
      skills: ["C/C++", "Software Planning", "System Design", "Performance", "Scalability"],
      icon: <Layout size={20} />,
      color: theme.accent
    }
  ]


  // FIXED: Alternative method using fetch
  const downloadResume = async () => {
    try {
      const response = await fetch('/Swetha1.pdf');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Swetha_S_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        // If file not found, open in new tab
        window.open('/Swetha1.pdf', '_blank');
      }
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback to opening in new tab
      window.open('/Swetha1.pdf', '_blank');
    }
  }

  return (
    <div className="app" ref={containerRef}>
      <div className="minimal-bg"></div>

      <motion.div 
        className="scroll-progress"
        style={{ 
          scaleX: scrollYProgress,
          background: theme.gradient
        }}
      />

      <motion.header 
        className="compact-header"
        style={{ backgroundColor: headerBackground }}
      >
        <div className="container">
          <div className="header-content">
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
                <span>Software Engineer</span>
              </motion.span>
            </motion.div>

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
              {/* FIXED: Resume button with working download */}
              <motion.button 
                onClick={downloadResume}
                className="resume-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: theme.gradient }}
              >
                <Download size={16} />
                <span>Download Resume</span>
              </motion.button>
            </nav>

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
                {/* FIXED: Mobile resume button */}
                <motion.button
                  onClick={downloadResume}
                  className="mobile-resume"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  style={{ background: theme.gradient }}
                >
                  <Download size={18} />
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="main-content">
        <section id="about" className="hero-section">
          <div className="container">
            <div className="hero-layout">
              <motion.div 
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="hero-badge">
                  <Sparkles size={16} />
                  <span>Innovative Software Engineer</span>
                </div>
                
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
                  <span>Full Stack Developer</span>
                  <span className="role-tag" style={{ background: `${theme.primary}15`, color: theme.primary }}>
                    AI Solutions Specialist
                  </span>
                </h2>
                
                <div className="professional-summary">
                  <p className="summary-text">
                    Results-driven <strong>Software Engineer</strong> with expertise in building 
                    <strong> scalable enterprise applications</strong> and <strong>AI-powered solutions</strong>. 
                    Proven ability to deliver high-performance software from concept to deployment, 
                    with strong foundations in Java, Python, and modern web technologies. 
                    Passionate about creating impactful solutions that solve real-world problems through 
                    innovative technology implementation.
                  </p>
                </div>

                <div className="contact-grid">
                  {[
                    { icon: <Mail size={18} />, text: "sweshinisankar@gmail.com" },
                    { icon: <Phone size={18} />, text: "+91 7904978495" },
                    { icon: <MapPin size={18} />, text: "Coimbatore, India" }
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
                    <span>Connect on LinkedIn</span>
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
                    <span>Explore Code</span>
                  </motion.a>
                  {/* FIXED: Email contact */}
                  <motion.a
                    href="mailto:sweshinisankar@gmail.com?subject=Interview%20Request&body=Dear%20Swetha%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20potential%20opportunities."
                    className="action-btn accent"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ borderColor: theme.accent, color: theme.accent }}
                  >
                    <Mail size={20} />
                    <span>Contact Me</span>
                  </motion.a>
                </div>
              </motion.div>

              <motion.div 
                className="hero-stats"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
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

                <div className="tech-expertise">
                  <h3 className="expertise-title">Core Competencies</h3>
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
                  <h2 className="section-title">Professional Journey</h2>
                  <p className="section-subtitle">Industry experience & practical application</p>
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
                  <h2 className="section-title">Portfolio Showcase</h2>
                  <p className="section-subtitle">Enterprise-grade applications demonstrating technical excellence</p>
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
                    <h4 className="features-title">Technical Highlights:</h4>
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
                  
                  <motion.a 
                    href={project.link}
                    className="project-link"
                    whileHover={{ x: 5 }}
                    style={{ color: project.color }}
                  >
                    <ExternalLink size={14} />
                    <span>View Details</span>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                  <h2 className="section-title">Technical Mastery</h2>
                  <p className="section-subtitle">Comprehensive skill set for modern software development</p>
                </div>
              </div>
            </motion.div>

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

            <motion.div 
              className="competencies-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="competencies-title">Professional Value Proposition</h3>
              <div className="competencies-grid">
                {[
                  { skill: "Enterprise Application Development", level: "Expert", icon: <Server size={20} /> },
                  { skill: "AI/ML Solution Architecture", level: "Advanced", icon: <Brain size={20} /> },
                  { skill: "Full Stack Proficiency", level: "Expert", icon: <Code2 size={20} /> },
                  { skill: "System Design & Architecture", level: "Advanced", icon: <Layout size={20} /> },
                  { skill: "Problem-Solving Aptitude", level: "Expert", icon: <Target size={20} /> },
                  { skill: "Technical Innovation", level: "Advanced", icon: <Zap size={20} /> },
                  { skill: "Project Delivery Excellence", level: "Expert", icon: <CheckCircle size={20} /> },
                  { skill: "Adaptive Learning Ability", level: "Advanced", icon: <TrendingUp size={20} /> }
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
                  <h2 className="section-title">Academic Foundation</h2>
                  <p className="section-subtitle">Educational qualifications & achievements</p>
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
                      <span className="stat-name">Academic Excellence</span>
                      <span className="stat-value" style={{ color: theme.success }}>CGPA: 8.2/10.0</span>
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
                      <span className="stat-name">Focus Area</span>
                      <span className="stat-value" style={{ color: theme.accent }}>Software Engineering</span>
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
                    <p className="institution-name">Science with Mathematics Stream</p>
                  </div>
                </div>
                <div className="education-stats">
                  <div className="education-stat-item">
                    <Award size={18} style={{ color: theme.success }} />
                    <div>
                      <span className="stat-name">Academic Performance</span>
                      <span className="stat-value" style={{ color: theme.success }}>87% Score</span>
                    </div>
                  </div>
                  <div className="education-stat-item">
                    <Calendar size={18} style={{ color: theme.primary }} />
                    <div>
                      <span className="stat-name">Year of Completion</span>
                      <span className="stat-value" style={{ color: theme.primary }}>2021</span>
                    </div>
                  </div>
                  <div className="education-stat-item">
                    <Target size={18} style={{ color: theme.accent }} />
                    <div>
                      <span className="stat-name">Specialization</span>
                      <span className="stat-value" style={{ color: theme.accent }}>Science with Mathematics</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-section">
        <div className="container">
          <div className="footer-content-wrapper">
            <div className="footer-main-content">
              <div className="footer-info-section">
                <h3 className="footer-name">SWETHA S</h3>
                <p className="footer-tagline-text">Innovative Software Engineer | Full Stack & AI Specialist</p>
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
                    <span>Coimbatore, India</span>
                  </div>
                </div>
              </div>

              <div className="footer-links-section">
                <div className="links-group">
                  <h4>Portfolio</h4>
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
                © {new Date().getFullYear()} SWETHA S | Crafted with React & Framer Motion
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