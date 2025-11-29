import React from 'react';
import cvData from '../data/cvData';
import CVHeader from '../components/CVHeader';
import CVSection from '../components/CVSection';
import CVItem from '../components/CVItem';
import './CV.css';

const CVPage: React.FC = () => {
  return (
    <main id="main-content" className="cv-page">
      <div className="cv-container">
        <CVHeader
          name={cvData.name}
          title={cvData.title}
          contact={cvData.contact}
        />

        <CVSection title="Summary" id="summary">
          <p className="cv-summary">{cvData.summary}</p>
        </CVSection>

        <div className="cv-grid">
          <div className="cv-main">
            <CVSection title="Experience" id="experience">
              {cvData.experience.map((exp, index) => (
                <CVItem key={exp.id || index} item={exp} type="experience" />
              ))}
            </CVSection>

            <CVSection title="Projects" id="projects">
              {cvData.projects.map((project, index) => (
                <CVItem key={project.id || index} item={project} type="project" />
              ))}
            </CVSection>

            <CVSection title="Education" id="education">
              {cvData.education.map((edu, index) => (
                <CVItem key={edu.id || index} item={edu} type="education" />
              ))}
            </CVSection>
          </div>

          <aside className="cv-sidebar">
            <CVSection title="Technical Skills" id="skills">
              {cvData.skills.map((skillGroup, index) => (
                <div key={index} className="cv-skill-group">
                  <h3 className="cv-skill-category">{skillGroup.category}</h3>
                  <div className="cv-skill-tags">
                    {skillGroup.items.map((skill, idx) => (
                      <span key={idx} className="cv-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </CVSection>

            <CVSection title="Certificates" id="certificates">
              <ul className="cv-list">
                {cvData.certificates.map((cert, index) => (
                  <li key={index} className="cv-list-item">
                    <strong>{cert.name}</strong>
                    <span className="cv-cert-date">{cert.date}</span>
                  </li>
                ))}
              </ul>
            </CVSection>

            <CVSection title="Languages" id="languages">
              <ul className="cv-list">
                {cvData.languages.map((lang, index) => (
                  <li key={index} className="cv-list-item">
                    <strong>{lang.name}</strong>: {lang.level}
                  </li>
                ))}
              </ul>
            </CVSection>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CVPage;

