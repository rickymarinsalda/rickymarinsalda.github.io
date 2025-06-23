import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const PersonalWebsite = () => {
  const [expandedSections, setExpandedSections] = useState({
    about: true,
    experience: false,
    education: false,
    projects: false,
    supervision: false,
    publications: false,
    skills: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    maxWidth: {
      maxWidth: '64rem',
      margin: '0 auto',
      padding: '0 1.5rem',
      paddingTop: '3rem',
      paddingBottom: '3rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    avatar: {
      width: '8rem',
      height: '8rem',
      margin: '0 auto 1.5rem',
      borderRadius: '50%',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '4px solid white'
    },
    avatarImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    avatarFallback: {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2.5rem',
      fontWeight: '300',
      color: 'white'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '300',
      color: '#1f2937',
      marginBottom: '0.5rem'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#6b7280',
      marginBottom: '1.5rem'
    },
    description: {
      color: '#6b7280',
      maxWidth: '42rem',
      margin: '0 auto',
      lineHeight: '1.75',
      marginBottom: '1.5rem'
    },
    contactInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1.5rem',
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '1.5rem'
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
      padding: '0.5rem',
      backgroundColor: 'white',
      borderRadius: '50%',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      transition: 'box-shadow 0.3s ease'
    },
    mainContent: {
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      padding: '2rem'
    },
    section: {
      marginBottom: '2rem'
    },
    sectionButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      textAlign: 'left',
      marginBottom: '1rem',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '300',
      color: '#1f2937',
      transition: 'color 0.3s ease'
    },
    sectionContent: {
      animation: 'fadeIn 0.3s ease-out'
    },
    experienceItem: {
      borderLeft: '4px solid #3b82f6',
      paddingLeft: '1.5rem',
      marginBottom: '1.5rem'
    },
    experienceItemAlt: {
      borderLeft: '4px solid #d1d5db',
      paddingLeft: '1.5rem',
      marginBottom: '1.5rem'
    },
    experienceTitle: {
      fontSize: '1.125rem',
      fontWeight: '500',
      color: '#1f2937'
    },
    experienceCompany: {
      color: '#3b82f6',
      fontWeight: '500'
    },
    experienceDate: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '0.5rem'
    },
    experienceDescription: {
      color: '#6b7280'
    },
    educationItem: {
      borderLeft: '4px solid #10b981',
      paddingLeft: '1.5rem',
      marginBottom: '1.5rem'
    },
    educationItemAlt: {
      borderLeft: '4px solid #3b82f6',
      paddingLeft: '1.5rem',
      marginBottom: '1.5rem'
    },
    projectCard: {
      marginBottom: '1.5rem',
      padding: '1rem',
      border: '1px solid #e5e7eb',
      borderRadius: '0.5rem',
      transition: 'box-shadow 0.3s ease'
    },
    projectHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '0.5rem'
    },
    projectTitle: {
      fontSize: '1.125rem',
      fontWeight: '500',
      color: '#1f2937'
    },
    projectDate: {
      fontSize: '0.875rem',
      color: '#6b7280'
    },
    projectDescription: {
      color: '#6b7280',
      marginBottom: '0.75rem',
      lineHeight: '1.75'
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '0.75rem'
    },
    techTag: {
      padding: '0.25rem 0.5rem',
      backgroundColor: '#dbeafe',
      color: '#1e40af',
      fontSize: '0.75rem',
      borderRadius: '0.25rem'
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
      color: '#3b82f6',
      textDecoration: 'none',
      fontSize: '0.875rem',
      gap: '0.25rem'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem'
    },
    skillCategory: {
      marginBottom: '0.75rem'
    },
    skillCategoryTitle: {
      fontWeight: '500',
      color: '#1f2937',
      marginBottom: '0.75rem'
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
      borderRadius: '0.25rem'
    },
    placeholder: {
      backgroundColor: '#f9fafb',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      textAlign: 'center'
    },
    placeholderText: {
      color: '#6b7280',
      fontStyle: 'italic'
    },
    footer: {
      textAlign: 'center',
      marginTop: '4rem',
      color: '#6b7280',
      fontSize: '0.875rem'
    }
  };

  const Section = ({ id, title, children }) => {
    const isExpanded = expandedSections[id];
    
    return (
      <section style={styles.section}>
        <button
          onClick={() => toggleSection(id)}
          style={styles.sectionButton}
          onMouseEnter={(e) => e.target.querySelector('h2').style.color = '#3b82f6'}
          onMouseLeave={(e) => e.target.querySelector('h2').style.color = '#1f2937'}
        >
          <h2 style={styles.sectionTitle}>
            {title}
          </h2>
          {isExpanded ? (
            <ChevronUp size={20} color="#6b7280" />
          ) : (
            <ChevronDown size={20} color="#6b7280" />
          )}
        </button>
        {isExpanded && (
          <div style={styles.sectionContent}>
            {children}
          </div>
        )}
      </section>
    );
  };

  const ProjectCard = ({ title, period, description, link, technologies }) => (
    <div 
      style={styles.projectCard}
      onMouseEnter={(e) => e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}
      onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
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
        >
          View Project <ExternalLink size={12} />
        </a>
      )}
    </div>
  );

  // Componente Avatar con gestione foto e fallback
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

  return (
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        {/* Header */}
        <header style={styles.header}>
          
          <Avatar 
            photoUrl="ricky.png"
            initials="RM"
            alt="Ricky Marinsalda profile photo"
          />
          <h1 style={styles.title}>Ricky Marinsalda</h1>
          <p style={styles.subtitle}>Research Fellow in AI & Data Engineering</p>
          <p style={styles.description}>
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
              onMouseEnter={(e) => e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}
              onMouseLeave={(e) => e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}
            >
              <Github size={20} color="#374151" />
            </a>
            <a
              href="https://www.linkedin.com/in/ricky-marinsalda-a2637a1b5/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
              onMouseEnter={(e) => e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}
              onMouseLeave={(e) => e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}
            >
              <Linkedin size={20} color="#374151" />
            </a>
          </div>
        </header>

        <div style={styles.mainContent}>
          {/* Experience */}
          <Section id="experience" title="Experience">
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
          </Section>

          {/* Education */}
          <Section id="education" title="Education">
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
          </Section>

          {/* Key Projects */}
          <Section id="projects" title="Key Projects">
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
          </Section>

          {/* Thesis Supervision */}
          <Section id="supervision" title="Thesis Supervision">
            <div style={styles.placeholder}>
              <p style={styles.placeholderText}>
                Information about supervised bachelor's theses will be updated as I progress in my research career.
              </p>
            </div>
          </Section>

          {/* Publications & Conferences */}
          <Section id="publications" title="Publications & Conferences">
            <div style={styles.placeholder}>
              <p style={styles.placeholderText}>
                Publications and conference presentations will be listed here as my research contributions develop.
              </p>
            </div>
          </Section>

          {/* Skills */}
          <Section id="skills" title="Technical Skills">
            <div style={styles.skillsGrid}>
              <div>
                <h4 style={styles.skillCategoryTitle}>Programming Languages</h4>
                <div style={styles.skillTags}>
                  {['Python', 'Java', 'Kotlin', 'C', 'C++', 'JavaScript'].map((skill, index) => (
                    <span key={index} style={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 style={styles.skillCategoryTitle}>AI & Machine Learning</h4>
                <div style={styles.skillTags}>
                  {['Machine Learning', 'Deep Learning', 'Neural Networks', 'Computer Vision', 'TensorFlow'].map((skill, index) => (
                    <span key={index} style={{...styles.skillTag, ...styles.techTagGreen}}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
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
          </Section>
        </div>

        {/* Footer */}
        <footer style={styles.footer}>
          <p>© 2025 Ricky Marinsalda. Built with React for GitHub Pages.</p>
        </footer>
      </div>
      
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default PersonalWebsite;