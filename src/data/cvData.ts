import type { CV } from '../types/cv';

export const cvData: CV = {
  name: 'Ahmed Yosry',
  title: 'Software Engineer',
  summary: 'Computer Science student at Cairo University with hands-on experience in backend development and software testing. I enjoy building reliable systems using Java Spring Boot, designing RESTful APIs, and validating software through unit, API, and automated testing. I approach software with a quality-first mindset, focusing on correctness, edge cases, and maintainability. My background in competitive programming has strengthened my problem-solving skills and attention to detail, which I apply when developing and testing systems. Currently seeking entry-level opportunities where I can contribute to building well-tested, high-quality software while continuing to grow as a software engineer.',

  contact: [
    {
      label: 'Email',
      value: 'ahmedyosry1014@gmail.com',
      href: 'mailto:ahmedyosry1014@gmail.com'
    },
    {
      label: 'Phone',
      value: '+20 1091075766',
      href: 'tel:+201091075766'
    },
    {
      label: 'Location',
      value: 'Sheikh Zayed City, Giza, Egypt',
    },
    {
      label: 'GitHub',
      value: 'github.com/Ahmed-Yosri14',
      href: 'https://github.com/Ahmed-Yosri14'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ahmed-yosri14',
      href: 'https://linkedin.com/in/ahmed-yosri14/'
    }
  ],

  education: [
    {
      id: 'cairo-uni',
      degree: 'B.Sc. in Computer Science',
      institution: 'Cairo University',
      location: 'Giza, Egypt',
      start: '2022',
      end: '2026',
      gpa: '3.71 / 4.0',
      rank: 'Ranked 26th',
    }
  ],

  experience: [
    {
      id: 'egronx',
      role: 'Software Engineer Trainee',
      company: 'Egronx',
      location: 'Egypt',
      start: '08/2025',
      end: '09/2025',
      summary: 'Backend Development (Spring Boot)',
      bullets: [
        'Developed backend APIs using Spring Boot with scalable, modular architecture.',
        'Implemented JWT authentication, multi-role authorization, session control, and access rules.',
        'Tested and validated backend workflows using Postman and manual regression cycles.',
        'Designed, indexed, and optimized MySQL schemas to improve performance and reliability.'
      ]
    },
    {
      id: 'scale-ai',
      role: 'Software Engineer',
      company: 'Scale AI',
      location: 'Remote',
      start: '03/2025',
      end: '07/2025',
      summary: 'Code Quality, Problem Validation',
      bullets: [
        'Reviewed and validated code logic in Python, Java, and C++ for correctness and performance.',
        'Detected algorithmic errors, edge-case failures, and broken logic in complex solutions.'
      ]
    }
  ],

  projects: [
    {
      id: 'meat-home',
      title: 'Meat Home — Backend System',
      link: 'https://github.com/Ahmed-Yosri14/Meat-Home-Backend',
      tech: ['Spring Boot', 'MySQL'],
      year: '2025',
      summary: 'Built multi-role backend (customer, driver, admin, call-center) with secure JWT auth. Developed real-time order lifecycle logic and database models. Designed test cases and validated API endpoints during development.'
    },
    {
      id: 'fitness-tracker',
      title: 'Fitness Tracker — Full Stack System',
      link: 'https://github.com/Ahmed-Yosri14/Fitness-Tracker-Backend',
      tech: ['Spring Boot', 'React', 'JUnit', 'Selenium', 'JMeter'],
      year: '2025',
      summary: 'Performed unit testing (JUnit), API testing (Postman), and UI automation (Selenium). Executed load testing with JMeter and verified system stability.'
    },
    {
      id: 'lms',
      title: 'Learning Management System — Backend APIs',
      link: 'https://github.com/Ahmed-Yosri14',
      tech: ['Spring Boot', 'MySQL'],
      year: '2023',
      summary: 'Developed backend modules for courses, enrollment, and authentication. Implemented JWT-based RBAC and tested API workflows.'
    },
    {
      id: 'django-kitchen',
      title: 'Django Kitchen Recipe Platform',
      link: 'https://github.com/Ahmed-Yosri14',
      tech: ['Django', 'MySQL'],
      year: '2023',
      summary: 'Built authentication, recipe CRUD, categories, and user interaction features.'
    },
    {
      id: 'cli',
      title: 'Command Line Interpreter',
      link: 'https://github.com/Ahmed-Yosri14',
      tech: ['Java'],
      year: '2024',
      summary: 'Developed modular command parsing engine following OOP design principles.'
    }
  ],

  skills: [
    {
      category: 'Programming',
      items: ['Java', 'Python', 'C++', 'JavaScript', 'SQL']
    },
    {
      category: 'Backend',
      items: ['Spring Boot', 'Django', 'REST APIs', 'MVC', 'Authentication']
    },
    {
      category: 'Testing',
      items: ['Manual Testing', 'API Testing (Postman)', 'Selenium', 'JUnit', 'JMeter', 'Regression Testing']
    },
    {
      category: 'Tools',
      items: ['Git', 'Linux', 'Chrome DevTools']
    },
    {
      category: 'Databases',
      items: ['MySQL', 'MongoDB']
    },
    {
      category: 'CS Concepts',
      items: ['OOP', 'Algorithms', 'Data Structures', 'Concurrency', 'Clean Architecture']
    }
  ],

  certificates: [
    {
      name: 'ISTQB Certified Tester — Foundation Level (CTFL)',
      date: '10/2025'
    },
    {
      name: 'Sprints X Microsoft Software Testing Program',
      date: '08/2025'
    },
    {
      name: 'Level 2 Competitive Programming – Coach Academy',
      date: '07/2022'
    },
    {
      name: 'ECPC Qualifications — Ranked 16th',
      date: '07/2025'
    }
  ],

  languages: [
    {
      name: 'Arabic',
      level: 'Native'
    },
    {
      name: 'English',
      level: 'Fluent'
    },
    {
      name: 'Spanish',
      level: 'Intermediate'
    }
  ]
};

export default cvData;

