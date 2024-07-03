import React from 'react';

const ScrollToSection = ({ sectionId, children }) => {
  const scrollToSection = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div onClick={scrollToSection}>
      {children}
    </div>
  );
};

export default ScrollToSection;
