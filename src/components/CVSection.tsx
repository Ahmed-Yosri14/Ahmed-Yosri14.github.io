import React from 'react';

interface CVSectionProps {
  title: string;
  id?: string;
  children: React.ReactNode;
}

const CVSection: React.FC<CVSectionProps> = ({ title, id, children }) => {
  const sectionId = id || title.toLowerCase().replace(/\s+/g, '-');
  const titleId = `${sectionId}-title`;

  return (
    <section id={sectionId} className="cv-section" aria-labelledby={titleId}>
      <h2 id={titleId} className="cv-section-title">{title}</h2>
      <div className="cv-section-content">
        {children}
      </div>
    </section>
  );
};

export default CVSection;

