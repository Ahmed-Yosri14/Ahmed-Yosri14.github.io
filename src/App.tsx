import { useState, useEffect, useRef } from 'react';
import './App.css';
import SkipToContent from './components/SkipToContent';
import CVPage from './pages/CVPage';
import {
  Code2, Database, TestTube, Terminal, GitBranch,
  Mail, ExternalLink, Briefcase, GraduationCap,
  Award, Rocket, Server, FileCode, FileText
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  SiPython, SiCplusplus, SiJavascript, SiMysql,
  SiSpringboot, SiMongodb, SiGit, SiLinux,
  SiPostman, SiSelenium, SiReact, SiHtml5, SiCss3,
  SiTypescript, SiTailwindcss
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { TbTestPipe } from 'react-icons/tb';

// Import images
import profileImage from './assets/My Image/1761159701209.png';
import meatHomeImg from './assets/Projects/FitnessTracke/Meat_Home.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import fitnessTrackerImg from './assets/Projects/FitnessTracke/FitnessTracker.PNG';
import lmsImg from './assets/Projects/FitnessTracke/LMS.png';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import kitchenRecipeImg from './assets/Projects/FitnessTracke/KitchenRecipe.PNG';
import cliImg from './assets/Projects/FitnessTracke/CLI.png';

// Custom hook for scroll animations with bidirectional support
const useScrollAnimation = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility based on whether element is intersecting
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isVisible] as const;
};

// Navbar Component
const Navbar = ({ setCurrentView }: { setCurrentView: (view: 'home' | 'cv') => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    console.log(`Attempting to scroll to section: ${id}`);
    const element = document.getElementById(id);
    if (element) {
      console.log(`Section ${id} found. Scrolling into view.`);
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Section ${id} not found in the DOM.`);
    }
  };

  const handleCVClick = () => {
    // Open CV in new tab
    window.open('https://drive.google.com/file/d/1ozcExHx9YExMxpH1DAUIYRpIQs3TenUa/view', '_blank', 'noopener,noreferrer');
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo" onClick={() => { setCurrentView('home'); scrollToSection('hero'); }}>
          <Code2 size={24} className="logo-icon" />
          <span className="logo-text">Ahmed Yosry</span>
        </a>

        <button 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          <li>
            <a
              onClick={handleCVClick}
              className="cv-button"
            >
              <FileText size={18} />
              CV
              <ExternalLink size={14} className="external-icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Ahmed Yosry</span>
          </h1>
          <p className="hero-subtitle">Software Engineer</p>
          <p className="hero-description">
            Backend Developer & QA Engineer specializing in Spring Boot, Django,
            and building reliable, scalable systems with comprehensive testing strategies.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              <Rocket size={20} />
              View Projects
            </button>
            <a
              href="https://drive.google.com/file/d/1ozcExHx9YExMxpH1DAUIYRpIQs3TenUa/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FileText size={20} />
              View CV
              <ExternalLink size={16} className="btn-external-icon" />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="profile-image-container">
            <img src={profileImage} alt="Ahmed Yosry" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  const stats = [
    { icon: GraduationCap, label: 'GPA', value: '3.71/4.0', color: '#3b82f6' },
    { icon: Award, label: 'Department Rank', value: '26th', color: '#8b5cf6' },
    { icon: Code2, label: 'Projects', value: '5+', color: '#10b981' },
  ];

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className={`container animate-on-scroll animate-slide-left ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">
          <Briefcase className="section-icon" size={32} />
          About Me
        </h2>
        <div className="about-content">
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon size={32} style={{ color: stat.color }} className="stat-icon" />
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="about-text">
            <p>
              I'm a Computer Science student at Cairo University with hands-on experience in backend development and software testing.
              I enjoy building reliable systems using Java Spring Boot, designing RESTful APIs, and validating software through unit,
              API, and automated testing.
            </p>
            <p>
              I approach software with a quality-first mindset, focusing on correctness, edge cases, and maintainability. My background
              in competitive programming has strengthened my problem-solving skills and attention to detail, which I apply when developing
              and testing systems.
            </p>
            <p>
              I'm currently seeking entry-level opportunities where I can contribute to building well-tested, high-quality software while
              continuing to grow as a software engineer.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: 'Meat Home — Backend System',
      description: 'Multi-role backend system with JWT authentication for customer, driver, admin, and call-center roles. Features real-time order lifecycle management.',
      tech: ['Spring Boot', 'MySQL', 'JWT', 'REST APIs'],
      github: 'https://github.com/Ahmed-Amer01/Meat-Home-Backend',
      demo: '#',
      icon: Server,
      image: meatHomeImg
    },
    {
      id: 2,
      title: 'Fitness Tracker',
      description: 'Full-stack fitness tracking application with comprehensive testing including unit tests, API testing, UI automation, and load testing.',
      tech: ['Spring Boot', 'React', 'JUnit', 'Selenium', 'JMeter'],
      github: 'https://github.com/nourshaaban1/Fitness-Tracker-Backend',
      demo: '#',
      icon: TestTube,
      image: fitnessTrackerImg
    },
    {
      id: 3,
      title: 'Learning Management System',
      description: 'Backend APIs for course management, student enrollment, and JWT-based role-based access control.',
      tech: ['Spring Boot', 'MySQL', 'JWT', 'RBAC'],
      github: 'https://github.com/Ahmed-Yosri14/Learning-Management-System',
      demo: '#',
      icon: GraduationCap,
      image: lmsImg
    },
    {
      id: 4,
      title: 'Django Kitchen Recipe Platform',
      description: 'Recipe sharing platform with user authentication, CRUD operations, categories, and social interaction features.',
      tech: ['Django', 'MySQL', 'Python'],
      github: 'https://github.com/Ahmed-Yosri14/Was-Fit-Mama-Website',
      demo: '#',
      icon: Code2,
      image: kitchenRecipeImg
    },
    {
      id: 5,
      title: 'Command Line Interpreter',
      description: 'Modular command-line interface with advanced parsing capabilities following OOP principles.',
      tech: ['Java', 'OOP'],
      github: 'https://github.com/Ahmed-Yosri14/Command-Line-Interpreter',
      demo: '#',
      icon: Terminal,
      image: cliImg
    }
  ];

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className={`container animate-on-scroll animate-slide-right ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">
          <Rocket className="section-icon" size={32} />
          Featured Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-image-overlay">
                  <project.icon className="project-icon-large" size={48} />
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub size={18} />
                    GitHub
                  </a>
                  {project.demo !== '#' && (
                    <a href={project.demo} className="project-link">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Component
const Skills = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  const skills = [
    {
      category: 'Programming Languages',
      icon: Code2,
      items: [
        { name: 'Java', icon: DiJava, color: '#007396' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' }
      ]
    },
    {
      category: 'Backend Development',
      icon: Server,
      items: [
        { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
        { name: 'REST APIs', icon: Server, color: '#3b82f6' },
        { name: 'MVC', icon: Code2, color: '#3b82f6' },
        { name: 'JWT Auth', icon: GitBranch, color: '#3b82f6' }
      ]
    },
    {
      category: 'Frontend Development',
      icon: Code2,
      items: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' }
      ]
    },
    {
      category: 'Databases',
      icon: Database,
      items: [
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'SQL', icon: Database, color: '#4479A1' }
      ]
    },
    {
      category: 'Testing & QA',
      icon: TestTube,
      items: [
        { name: 'JUnit', icon: TbTestPipe, color: '#25A162' },
        { name: 'Selenium', icon: SiSelenium, color: '#43B02A' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Manual Testing', icon: TestTube, color: '#3b82f6' }
      ]
    },
    {
      category: 'Tools & DevOps',
      icon: Terminal,
      items: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Linux', icon: SiLinux, color: '#FCC624' },
        { name: 'Browser DevTools', icon: Terminal, color: '#3b82f6' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className={`container animate-on-scroll animate-slide-left ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">
          <FileCode className="section-icon" size={32} />
          Skills & Technologies
        </h2>
        <p className="skills-description">
          I specialize in backend development using Java Spring Boot and Python Django, building clean, scalable systems with comprehensive testing strategies. Experienced with modern frontend technologies and committed to delivering reliable, well-tested software solutions.
        </p>
        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className={`skill-category ${skillCategory.category === 'Tools & DevOps' ? 'skill-category-compact' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="skill-category-title">
                <skillCategory.icon size={24} className="skill-category-icon" />
                {skillCategory.category}
              </h3>
              <div className={`skill-items-grid ${skillCategory.category === 'Tools & DevOps' ? 'skill-items-compact' : ''}`}>
                {skillCategory.items.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <skill.icon
                      size={skillCategory.category === 'Tools & DevOps' ? 28 : 32}
                      className="skill-item-icon"
                      style={{ color: skill.color }}
                    />
                    <span className="skill-item-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className={`container animate-on-scroll animate-slide-right ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">
          <Mail className="section-icon" size={32} />
          Get In Touch
        </h2>
        <p className="contact-description">
          I'm always open to discussing new projects, opportunities, or collaborations.
          Feel free to reach out!
        </p>
        <div className="contact-links">
          <a href="mailto:ahmedyosry1014@gmail.com" className="contact-btn">
            <Mail size={20} />
            Email Me
          </a>
          <a href="https://github.com/Ahmed-Yosri14" target="_blank" rel="noopener noreferrer" className="contact-btn">
            <FaGithub size={20} />
            GitHub
          </a>
          <a href="https://linkedin.com/in/ahmed-yosri14/" target="_blank" rel="noopener noreferrer" className="contact-btn">
            <FaLinkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1ozcExHx9YExMxpH1DAUIYRpIQs3TenUa/view"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn contact-btn-cv"
          >
            <FileText size={20} />
            Download CV
            <ExternalLink size={16} className="external-icon-inline" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Ahmed Yosry. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [currentView, setCurrentView] = useState<'home' | 'cv'>('home');

  return (
    <div className="app">
      <SkipToContent targetId={currentView === 'cv' ? 'main-content' : 'hero'} />
      <Navbar setCurrentView={setCurrentView} />

      {currentView === 'home' ? (
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      ) : (
        <CVPage />
      )}

      <Footer />
    </div>
  );
}

export default App;

