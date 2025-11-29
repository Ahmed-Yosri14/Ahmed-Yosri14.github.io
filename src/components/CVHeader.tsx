import React from 'react';
import type { Contact } from '../types/cv';

interface CVHeaderProps {
  name: string;
  title: string;
  contact: Contact[];
}

const CVHeader: React.FC<CVHeaderProps> = ({ name, title, contact }) => {
  return (
    <header className="cv-header">
      <h1 className="cv-name">{name}</h1>
      <p className="cv-title">{title}</p>
      <div className="cv-contact">
        {contact.map((item, index) => (
          <div key={index} className="cv-contact-item">
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.value}
              </a>
            ) : (
              <span>{item.value}</span>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};

export default CVHeader;

