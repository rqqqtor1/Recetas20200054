import React from 'react';
import '../components/Title.css';

const Title = ({ children, className = '', level = 1 }) => {
  const TitleTag = `h${level}`;
  
  return (
    <TitleTag className={`title title-${level} ${className}`}>
      {children}
    </TitleTag>
  );
};

export default Title;