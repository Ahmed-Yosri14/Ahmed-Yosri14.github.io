import React from 'react';
import type { Experience, Education, Project } from '../types/cv';

interface CVItemProps {
  item: Experience | Education | Project;
  type: 'experience' | 'education' | 'project';
}

const CVItem: React.FC<CVItemProps> = ({ item, type }) => {
  if (type === 'experience') {
    const exp = item as Experience;
    return (
      <article className="cv-item">
        <div className="cv-item-header">
          <h3 className="cv-item-title">{exp.role}</h3>
          <span className="cv-item-date">
            {exp.start} – {exp.end || 'Present'}
          </span>
        </div>
        <div className="cv-item-meta">
          <span className="cv-item-company">{exp.company}</span>
          {exp.location && <span className="cv-item-location">{exp.location}</span>}
        </div>
        {exp.summary && <p className="cv-item-summary">{exp.summary}</p>}
        {exp.bullets && exp.bullets.length > 0 && (
          <ul className="cv-item-bullets">
            {exp.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
      </article>
    );
  }

  if (type === 'education') {
    const edu = item as Education;
    return (
      <article className="cv-item">
        <div className="cv-item-header">
          <h3 className="cv-item-title">{edu.degree}</h3>
          <span className="cv-item-date">
            {edu.start} – {edu.end || 'Present'}
          </span>
        </div>
        <div className="cv-item-meta">
          <span className="cv-item-company">{edu.institution}</span>
          {edu.location && <span className="cv-item-location">{edu.location}</span>}
        </div>
        {(edu.gpa || edu.rank) && (
          <p className="cv-item-summary">
            {edu.gpa && `GPA: ${edu.gpa}`}
            {edu.gpa && edu.rank && ' — '}
            {edu.rank}
          </p>
        )}
        {edu.details && edu.details.length > 0 && (
          <ul className="cv-item-bullets">
            {edu.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </article>
    );
  }

  if (type === 'project') {
    const proj = item as Project;
    return (
      <article className="cv-item cv-project">
        <div className="cv-item-header">
          <h3 className="cv-item-title">
            {proj.link ? (
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                {proj.title}
              </a>
            ) : (
              proj.title
            )}
          </h3>
          {proj.year && <span className="cv-item-date">{proj.year}</span>}
        </div>
        {proj.tech && proj.tech.length > 0 && (
          <div className="cv-project-tech">
            {proj.tech.map((tech, index) => (
              <span key={index} className="cv-tech-tag">{tech}</span>
            ))}
          </div>
        )}
        {proj.summary && <p className="cv-item-summary">{proj.summary}</p>}
      </article>
    );
  }

  return null;
};

export default CVItem;

