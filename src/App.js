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
  Shield,
  Cloud,
  Heart,
  Smartphone,
  Globe,
  BookOpen,
  ShoppingCart,
  Bot,
  Cpu,
  Target
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

  // Technical Skills based on your summary
  const techSkills = [
    { name: "Java", level: 85, icon: <Server size={18} />, category: "Backend" },
    { name: "Python", level: 90, icon: <Brain size={18} />, category: "AI/ML" },
    { name: "C++", level: 80, icon: <Cpu size={18} />, category: "Programming" },
    { name: "C", level: 75, icon: <Terminal size={18} />, category: "Programming" },
    { name: "MySQL", level: 88, icon: <Database size={18} />, category: "Database" },
    { name: "HTML/CSS", level: 85, icon: <Globe size={18} />, category: "Frontend" },
    { name: "JavaScript", level: 82, icon: <Code2 size={18} />, category: "Frontend" },
    { name: "AI/ML", level: 78, icon: <Brain size={18} />, category: "Specialized" }
  ]

  // Your Actual Projects with brief descriptions
  const projects = [
    {
      title: "Chatbot for Childhood Trauma Care",
      description: "Developed a conversational AI-based chatbot to provide supportive interactions and basic guidance for emotional support.",
      icon: <Heart size={22} />,
      tech: ["Python", "AI/ML", "NLP", "Chatbot Framework"],
      link: "#",
      category: "AI Healthcare Application",
      color: theme.primary
    },
    {
      title: "E-Commerce Application System",
      description: "Built a fully functional e-commerce application with product listing, cart management, and order processing features.",
      icon: <ShoppingCart size={22} />,
      tech: ["Java", "MySQL", "Spring Boot", "JavaScript"],
      link: "#",
      category: "Full Stack Development",
      color: theme.secondary
    },
    {
      title: "Online Library Management System",
      description: "Designed and implemented a system to manage book inventory, users, and lending operations.",
      icon: <BookOpen size={22} />,
      tech: ["Java", "MySQL", "JSP", "Bootstrap"],
      link: "#",
      category: "Management System",
      color: theme.accent
    },
    {
      title: "Chatbot for Skin Care Support",
      description: "Created an automated chatbot to deliver skincare-related information using conversational workflows.",
      icon: <Bot size={22} />,
      tech: ["Python", "Chatbot", "Automation", "Web Integration"],
      link: "#",
      category: "AI Wellness Application",
      color: theme.success
    },
    {
      title: "Platform Rebuild Projects",
      description: "Rebuilt Udemy, TripAdvisor, and Apple Store platforms focusing on application structure and functional replication.",
      icon: <Smartphone size={22} />,
      tech: ["Java", "React", "MySQL", "UI/UX"],
      link: "#",
      category: "Platform Development",
      color: theme.warning
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
        "Gained hands-on experience with network infrastructure and protocols",
        "Configured network devices and monitored system performance"
      ],
      color: theme.primary
    },
    {
      company: "Accenture",
      role: "Developer Program Intern",
      period: "May 2023 - Jun 2023",
      icon: <Terminal size={18} />,
      points: [
        "Developed Python solutions for business problems using structured programming",
        "Applied Agile methodologies in solution development"
      ],
      color: theme.secondary
    },
    {
      company: "Accenture Analytics",
      role: "Data Visualization Intern",
      period: "Apr 2023 - May 2023",
      icon: <BarChart size={18} />,
      points: [
        "Created data visualizations and analysis reports",
        "Identified trends using charts and graphs"
      ],
      color: theme.accent
    }
  ]

  // Achievements based on your profile
  const achievements = [
    { number: "5", label: "Completed Projects", icon: <Rocket size={18} />, color: theme.primary },
    { number: "8+", label: "Technologies", icon: <Code2 size={18} />, color: theme.secondary },
    { number: "3", label: "Internships", icon: <Briefcase size={18} />, color: theme.success },
    { number: "2", label: "AI Chatbots", icon: <Brain size={18} />, color: theme.accent }
  ]

  // Tech Stack Categories based on your summary
  const techCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C++", "C", "JavaScript"],
      icon: <Code2 size={20} />,
      color: theme.primary
    },
    {
      title: "Web Development",
      skills: ["HTML/CSS", "React", "Spring Boot", "JSP", "Bootstrap"],
      icon: <Globe size={20} />,
      color: theme.secondary
    },
    {
      title: "Database & Tools",
      skills: ["MySQL", "Database Design", "Git", "VS Code", "Agile"],
      icon: <Database size={20} />,
      color: theme.success
    },
    {
      title: "Specialized Skills",
      skills: ["AI/ML", "Chatbot Development", "NLP", "Software Planning", "Generative AI"],
      icon: <Brain size={20} />,
      color: theme.accent
    }
  ]

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
                <span>Full Stack Developer</span>
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
                  <span>Hello, I'm</span>
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
                    AI/ML Enthusiast
                  </span>
                </h2>
                
                <div className="professional-summary">
                  <p className="summary-text">
                    Technology-focused professional with expertise in <strong>Full Stack Development</strong> and 
                    emerging <strong>AI/ML technologies</strong>. Strong programming foundation in C, C++, Java, 
                    Python, and MySQL, combined with knowledge of software planning and generative AI. 
                    Recognized for <strong>analytical thinking</strong>, <strong>adaptability</strong>, and a 
                    <strong> results-oriented mindset</strong>. Passionate about building scalable, secure, 
                    and high-performance software solutions.
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
                    <span>Contact</span>
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
                  <p className="section-subtitle">Internships & practical experience</p>
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
                  <h2 className="section-title">Project Portfolio</h2>
                  <p className="section-subtitle">Hands-on development experience</p>
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
                  <h2 className="section-title">Technical Proficiency</h2>
                  <p className="section-subtitle">Skills & capabilities</p>
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
              <h3 className="competencies-title">Professional Strengths</h3>
              <div className="competencies-grid">
                {[
                  { skill: "Full Stack Development", level: "Advanced", icon: <Code2 size={20} /> },
                  { skill: "AI/ML Technologies", level: "Proficient", icon: <Brain size={20} /> },
                  { skill: "Analytical Thinking", level: "Advanced", icon: <Target size={20} /> },
                  { skill: "Software Planning", level: "Proficient", icon: <Layout size={20} /> },
                  { skill: "Problem Solving", level: "Advanced", icon: <Zap size={20} /> },
                  { skill: "Adaptability", level: "Expert", icon: <Cloud size={20} /> },
                  { skill: "Results-Oriented", level: "Advanced", icon: <CheckCircle size={20} /> },
                  { skill: "Team Collaboration", level: "Proficient", icon: <Users size={20} /> }
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
                  <h2 className="section-title">Education</h2>
                  <p className="section-subtitle">Academic qualifications</p>
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
                    <p className="institution-name">Science with Mathematics</p>
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

      <footer className="footer-section">
        <div className="container">
          <div className="footer-content-wrapper">
            <div className="footer-main-content">
              <div className="footer-info-section">
                <h3 className="footer-name">SWETHA S</h3>
                <p className="footer-tagline-text">Full Stack Developer & AI/ML Enthusiast</p>
                <div className="footer-contact-info">
                  <div className="contact-info-item">
                    <Mail size={18} />
                    <span>sweshinisankar@gmail.com</span>
                  </div>
                  <div className="contact-info-item">
                    <Phone size={18} />
                    <span>+91 7904978495</span>
                  </div>
                </div>
              </div>

              <div className="footer-links-section">
                <div className="links-group">
                  <h4>Navigation</h4>
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
                © {new Date().getFullYear()} SWETHA S. Crafted with React & Framer Motion
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