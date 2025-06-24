import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X } from 'lucide-react';

const PersonalWebsite = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'supervision', label: 'Supervision' },
    { id: 'publications', label: 'Publications' },
    { id: 'skills', label: 'Skills' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
   
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    
    // Navigation Styles
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #e2e8f0',
      zIndex: 1000,
      transition: 'all 0.3s ease'
    },
    navContainer: {
      maxWidth: '64rem',
      margin: '0 auto',
      padding: '0 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '4rem'
    },
    logo: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1e293b',
      textDecoration: 'none'
    },
    navMenu: {
     //display: 'flex', 
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navItem: {
      cursor: 'pointer',
      color: '#64748b',
      fontSize: '0.875rem',
      fontWeight: '500',
      transition: 'color 0.3s ease',
      padding: '0.5rem 0',
      position: 'relative'
    },
    navItemActive: {
      color: '#10b981'
    },
    navItemActiveIndicator: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '2px',
      backgroundColor: '#10b981',
      borderRadius: '1px'
    },
    mobileMenuButton: {
     //display: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0.5rem'
    },
    mobileMenu: {
      position: 'fixed',
      top: '4rem',
      left: 0,
      right: 0,
      //bottom: 0,
      backgroundColor: 'white',
      borderBottom: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      zIndex: 1001,
      transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100vh)',
      transition: 'transform 0.3s ease',
      overflowY: 'auto',
    },
    mobileNavMenu: {
      padding: '1rem 1.5rem',
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    
    // Main Content Styles
    main: {
      marginTop: '4rem'
    },
    maxWidth: {
      maxWidth: '64rem',
      margin: '0 auto',
      padding: '0 1.5rem'
    },
    
    // Hero Section
    hero: {
      textAlign: 'center',
      padding: '4rem 0',
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      color: 'white',
      marginBottom: '0'
    },
    avatar: {
      width: '8rem',
      height: '8rem',
      margin: '0 auto 1.5rem',
      borderRadius: '50%',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      border: '4px solid rgba(255, 255, 255, 0.2)'
    },
    avatarImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    avatarFallback: {
      width: '100%',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2.5rem',
      fontWeight: '300',
      color: 'white'
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: '300',
      marginBottom: '0.5rem',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      marginBottom: '1.5rem',
      opacity: 0.9
    },
    heroDescription: {
      maxWidth: '42rem',
      margin: '0 auto 2rem',
      lineHeight: '1.75',
      opacity: 0.9
    },
    contactInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1.5rem',
      fontSize: '0.875rem',
      marginBottom: '2rem',
      opacity: 0.9
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem'
    },
    socialLink: {
      padding: '0.75rem',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)'
    },
    
    // Section Styles
    section: {
      padding: '4rem 0',
      backgroundColor: 'white'
    },
    sectionAlt: {
      padding: '4rem 0',
      backgroundColor: '#f8fafc'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '300',
      color: '#1e293b',
      textAlign: 'center',
      marginBottom: '3rem',
      position: 'relative'
    },
    sectionTitleUnderline: {
      position: 'absolute',
      bottom: '-0.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '4rem',
      height: '3px',
      backgroundColor: '#10b981',
      borderRadius: '2px'
    },
    
    // Experience & Education Styles
    experienceItem: {
      borderLeft: '4px solid #10b981',
      paddingLeft: '1.5rem',
      marginBottom: '2rem',
      position: 'relative'
    },
    experienceItemAlt: {
      borderLeft: '4px solid #64748b',
      paddingLeft: '1.5rem',
      marginBottom: '2rem',
      position: 'relative'
    },
    experienceTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '0.25rem'
    },
    experienceCompany: {
      color: '#10b981',
      fontWeight: '500',
      marginBottom: '0.25rem'
    },
    experienceDate: {
      fontSize: '0.875rem',
      color: '#64748b',
      marginBottom: '0.75rem'
    },
    experienceDescription: {
      color: '#64748b',
      lineHeight: '1.6'
    },
    
    // Education specific
    educationItem: {
      borderLeft: '4px solid #10b981',
      paddingLeft: '1.5rem',
      marginBottom: '2rem'
    },
    educationItemAlt: {
      borderLeft: '4px solid #10b981',
      paddingLeft: '1.5rem',
      marginBottom: '2rem'
    },
    
    // Project Styles
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem'
    },
    projectCard: {
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '0.75rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      border: '1px solid #e2e8f0'
    },
    projectHeader: {
      marginBottom: '1rem'
    },
    projectTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '0.25rem'
    },
    projectDate: {
      fontSize: '0.875rem',
      color: '#64748b'
    },
    projectDescription: {
      color: '#64748b',
      marginBottom: '1rem',
      lineHeight: '1.6'
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1rem'
    },
    techTag: {
      padding: '0.25rem 0.5rem',
      backgroundColor: '#dbeafe',
      color: '#1e40af',
      fontSize: '0.75rem',
      borderRadius: '0.375rem',
      fontWeight: '500'
    },
    techTagGreen: {
      backgroundColor: '#d1fae5',
      color: '#065f46'
    },
    techTagPurple: {
      backgroundColor: '#e9d5ff',
      color: '#7c2d12'
    },
    projectLink: {
      display: 'inline-flex',
      alignItems: 'center',
      color: '#10b981',
      textDecoration: 'none',
      fontSize: '0.875rem',
      fontWeight: '500',
      gap: '0.25rem',
      transition: 'color 0.3s ease'
    },
    
    // Skills Styles
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem'
    },
    skillCategory: {
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '0.75rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e2e8f0'
    },
    skillCategoryTitle: {
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '1rem',
      fontSize: '1.125rem'
    },
    skillTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },
    skillTag: {
      padding: '0.5rem 0.75rem',
      backgroundColor: '#dbeafe',
      color: '#1e40af',
      fontSize: '0.875rem',
      borderRadius: '0.5rem',
      fontWeight: '500'
    },
    
    // Placeholder Styles
    placeholder: {
      backgroundColor: '#f8fafc',
      padding: '3rem',
      borderRadius: '0.75rem',
      textAlign: 'center',
      border: '2px dashed #cbd5e1'
    },
    placeholderText: {
      color: '#64748b',
      fontStyle: 'italic',
      fontSize: '1.125rem'
    },
    
    // Footer
    footer: {
      backgroundColor: '#1e293b',
      color: '#94a3b8',
      textAlign: 'center',
      padding: '2rem 0',
      fontSize: '0.875rem'
    }
  };

  // Componente Avatar
  const Avatar = ({ photoUrl, initials = "RM", alt = "Profile photo" }) => {
    const [imageError, setImageError] = useState(false);

    return (
      <div style={styles.avatar}>
        {photoUrl && !imageError ? (
          <img
            src={photoUrl}
            alt={alt}
            style={styles.avatarImage}
            onError={() => setImageError(true)}
          />
        ) : (
          <div style={styles.avatarFallback}>
            <span>{initials}</span>
          </div>
        )}
      </div>
    );
  };

  // Componente ProjectCard
  const ProjectCard = ({ title, period, description, link, technologies }) => (
    <div 
      style={styles.projectCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div style={styles.projectHeader}>
        <h3 style={styles.projectTitle}>{title}</h3>
        <span style={styles.projectDate}>{period}</span>
      </div>
      <p style={styles.projectDescription}>{description}</p>
      {technologies && (
        <div style={styles.techTags}>
          {technologies.map((tech, index) => (
            <span key={index} style={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.projectLink}
          onMouseEnter={(e) => e.target.style.color = '#059669'}
          onMouseLeave={(e) => e.target.style.color = '#10b981'}
        >
          View Project <ExternalLink size={14} />
        </a>
      )}
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <a href="#about" style={styles.logo} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
            Ricky Marinsalda
          </a>
          
          {/* Desktop Menu */}
          <ul style={styles.navMenu} className="nav-menu">
            {navigationItems.map((item) => (
              <li
                key={item.id}
                style={{
                  ...styles.navItem,
                  ...(activeSection === item.id ? styles.navItemActive : {})
                }}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={(e) => e.target.style.color = '#10b981'}
                onMouseLeave={(e) => e.target.style.color = activeSection === item.id ? '#10b981' : '#64748b'}
              >
                {item.label}
                {activeSection === item.id && <div style={styles.navItemActiveIndicator} />}
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <button
            style={styles.mobileMenuButton}
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div style={styles.mobileMenu}>
          <ul style={styles.mobileNavMenu}>
            {navigationItems.map((item) => (
              <li
                key={item.id}
                style={{
                  ...styles.navItem,
                  ...(activeSection === item.id ? styles.navItemActive : {})
                }}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main style={styles.main}>
        {/* Hero Section */}
        <section id="about" style={styles.hero}>
          <div style={styles.maxWidth}>
            <Avatar 
              photoUrl="ricky.png"
              initials="RM"
              alt="Ricky Marinsalda profile photo"
            />
            <h1 style={styles.heroTitle}>Ricky Marinsalda</h1>
            <p style={styles.heroSubtitle}>Research Fellow in AI & Data Engineering</p>
            <p style={styles.heroDescription}>
              Graduated in Artificial Intelligence and Data Engineering from the University of Pisa, 
              with a passion for technology and a problem-solving oriented approach. Currently working 
              as a Research Fellow, focusing on AI, data analysis, IoT and cloud technologies.
            </p>
            
            {/* Contact Info */}
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <MapPin size={16} />
                <span>Pisa, Italy</span>
              </div>
              <div style={styles.contactItem}>
                <Mail size={16} />
                <a href="mailto:rickymarinsalda@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>
                  rickymarinsalda@gmail.com
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div style={styles.socialLinks}>
              <a
                href="https://github.com/rickymarinsalda"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Github size={20} color="white" />
              </a>
              <a
                href="https://www.linkedin.com/in/ricky-marinsalda-a2637a1b5/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Linkedin size={20} color="white" />
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" style={styles.section}>
          <div style={styles.maxWidth}>
            <h2 style={styles.sectionTitle}>
              Experience
              <div style={styles.sectionTitleUnderline} />
            </h2>
            <div>
              <div style={styles.experienceItem}>
                <h3 style={styles.experienceTitle}>Research Fellow</h3>
                <p style={styles.experienceCompany}>University of Pisa</p>
                <p style={styles.experienceDate}>January 2025 - Present | Pisa, Italy</p>
                <p style={styles.experienceDescription}>
                  Conducting research in artificial intelligence and data engineering, 
                  contributing to innovative projects in the field.
                </p>
              </div>
              
              <div style={styles.experienceItemAlt}>
                <h3 style={styles.experienceTitle}>Product Tester (Erasmus Internship)</h3>
                <p style={styles.experienceCompany}>Sonus Networks</p>
                <p style={styles.experienceDate}>June 2017 | Prague, Czech Republic</p>
                <p style={styles.experienceDescription}>
                  Verified and improved official documentation for installing, configuring, 
                  and updating SBC, EMS, and PSX systems for both hardware-based and virtual machine versions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" style={styles.sectionAlt}>
          <div style={styles.maxWidth}>
            <h2 style={styles.sectionTitle}>
              Education
              <div style={styles.sectionTitleUnderline} />
            </h2>
            <div>
              <div style={styles.educationItem}>
                <h3 style={styles.experienceTitle}>Master's Degree in Artificial Intelligence and Data Engineering</h3>
                <p style={{...styles.experienceCompany, color: '#10b981'}}>University of Pisa</p>
                <p style={styles.experienceDate}>2022 - 2024 | Final Grade: 110/110</p>
                <p style={styles.experienceDescription}>
                  <strong>Thesis:</strong> Design and Implementation of a Monitoring System for Patients Affected by Chronic Diseases
                </p>
                <div style={styles.techTags}>
                  {['MongoDB', 'Redis', 'Machine Learning', 'Python', 'Neo4j', 'Deep Learning', 'Cloud Computing', 'Docker', 'IoT'].map((skill, index) => (
                    <span key={index} style={{...styles.techTag, ...styles.techTagGreen}}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={styles.educationItemAlt}>
                <h3 style={styles.experienceTitle}>Bachelor's Degree in Computer Engineering</h3>
                <p style={styles.experienceCompany}>University of Pisa</p>
                <p style={styles.experienceDate}>2018 - 2022 | Final Grade: 97/110</p>
                <p style={styles.experienceDescription}>
                  <strong>Thesis:</strong> Reproduction of a Spectre V2 Attack Simulation on Linux and Mitigation through Retpoline
                </p>
                <div style={styles.techTags}>
                  {['C', 'C++', 'MySQL', 'Assembly', 'Operating Systems', 'Networks', 'Web Development'].map((skill, index) => (
                    <span key={index} style={styles.techTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={styles.section}>
          <div style={styles.maxWidth}>
            <h2 style={styles.sectionTitle}>
              Key Projects
              <div style={styles.sectionTitleUnderline} />
            </h2>
            <div style={styles.projectsGrid}>
              <ProjectCard
                title="Monitoring System for Chronic Disease Patients"
                period="Jun 2024 - Nov 2024"
                description="Designed and developed a comprehensive monitoring system integrating Android applications for patients and React web interface for doctors. Features include biometric data collection, real-time notifications, and video calling capabilities."
                technologies={['Android', 'React', 'Socket.io', 'Redis', 'InfluxDB']}
              />
              
              <ProjectCard
                title="Sleep Monitoring Android Application"
                period="Mar 2024 - May 2024"
                description="Developed a smartwatch-based sleep monitoring system using WearOS. Implemented statistical and deep neural network models combining heart rate and accelerometer data for sleep pattern analysis."
                link="https://github.com/rickymarinsalda/SleepMonitoring_MASSS_Project"
                technologies={['Android', 'WearOS', 'Machine Learning', 'Neural Networks']}
              />
              
              <ProjectCard
                title="SEPP (Search Engine ++)"
                period="Sep 2023 - Dec 2023"
                description="Built a C++ program that creates an inverted index structure from text documents and processes queries on the index for efficient information retrieval."
                link="https://github.com/scarburato/searchenginepp"
                technologies={['C++', 'Information Retrieval', 'Data Structures']}
              />
              
              <ProjectCard
                title="Plant Disease Diagnosis with CNN"
                period="Aug 2023 - Sep 2023"
                description="Led a project to improve plant disease diagnosis using Convolutional Neural Networks. Developed and evaluated CNN models to distinguish between healthy and infected plants."
                link="https://github.com/Froffri/plant_disease_classifier"
                technologies={['Python', 'CNN', 'Deep Learning', 'Computer Vision']}
              />

              <ProjectCard
                title="Clifford Algebra Neural Networks"
                period="Apr 2024 - Jun 2024"
                description="Implemented and trained neural networks based on Clifford algebra for geometry-aware applications, using tfga library for integration with TensorFlow."
                link="https://github.com/rickymarinsalda/SEAI_Project_Clifford_Algebra"
                technologies={['TensorFlow', 'Clifford Algebra', 'Geometric Deep Learning']}
              />
            </div>
          </div>
        </section>

     {/* Supervision Section */}
     <section id="supervision" style={styles.sectionAlt}>
          <div style={styles.maxWidth}>
            <h2 style={styles.sectionTitle}>
              Thesis Supervision
              <div style={styles.sectionTitleUnderline} />
            </h2>
            <div>
              <div style={styles.experienceItem}>
                <h3 style={styles.experienceTitle}>Bachelor's Thesis Co-Supervision</h3>
                <p style={styles.experienceCompany}>University of Pisa - Department of Information Engineering</p>
                <p style={styles.experienceDate}>Computer Engineering Degree</p>
                <p style={styles.experienceDescription}>
                  <strong>Title:</strong> "Creazione di un'applicazione web per la gestione automatizzata di raccolta dati sul benessere di pazienti affetti da malattie croniche"
                  <br /><br />
                  <strong>Student:</strong> Sandro Wu<br />
                  <strong>Supervisors:</strong> Prof. Carlo Vallati, Ing. Francesco Di Rienzo, Ing. Ricky Marinsalda
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" style={styles.section}>
          <div style={styles.maxWidth}>
            <h2 style={styles.sectionTitle}>
              Publications & Conferences
              <div style={styles.sectionTitleUnderline} />
            </h2>
            <div style={styles.placeholder}>
              <p style={styles.placeholderText}>
                Publications and conference presentations will be listed here as my research contributions develop.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={styles.sectionAlt}>
          <div style={styles.maxWidth}>
            <h2 style={styles.sectionTitle}>
              Technical Skills
              <div style={styles.sectionTitleUnderline} />
            </h2>
            <div style={styles.skillsGrid}>
              <div style={styles.skillCategory}>
                <h4 style={styles.skillCategoryTitle}>Programming Languages</h4>
                <div style={styles.skillTags}>
                  {['Python', 'Java', 'Kotlin', 'C', 'C++', 'JavaScript'].map((skill, index) => (
                    <span key={index} style={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={styles.skillCategory}>
                <h4 style={styles.skillCategoryTitle}>AI & Machine Learning</h4>
                <div style={styles.skillTags}>
                  {['Machine Learning', 'Deep Learning', 'Neural Networks', 'Computer Vision', 'TensorFlow'].map((skill, index) => (
                    <span key={index} style={{...styles.skillTag, ...styles.techTagGreen}}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={styles.skillCategory}>
                <h4 style={styles.skillCategoryTitle}>Databases & Cloud</h4>
                <div style={styles.skillTags}>
                  {['MongoDB', 'Redis', 'MySQL', 'Neo4j', 'InfluxDB', 'Docker', 'Cloud Computing'].map((skill, index) => (
                    <span key={index} style={{...styles.skillTag, ...styles.techTagPurple}}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.maxWidth}>
          <p>© 2025 Ricky Marinsalda. Built with React for GitHub Pages.</p>
        </div>
      </footer>
      
      <style>
        
        {`
        @media (max-width: 768px) {
        .nav-menu   { display: none; }
        .mobile-menu-button { display: block; }
      }
      @media (min-width: 769px) {
        .mobile-menu-button { display: none; }
        .nav-menu { display: flex; }
      }

        `}
      </style>
    </div>
  );
};

export default PersonalWebsite;