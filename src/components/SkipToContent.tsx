import React from 'react';

interface SkipToContentProps {
  targetId?: string;
}

const SkipToContent: React.FC<SkipToContentProps> = ({ targetId = 'main-content' }) => {
  return (
    <a href={`#${targetId}`} className="skip-link">
      Skip to content
    </a>
  );
};

export default SkipToContent;

