import React from 'react';
import './CurvedSection.css';

interface CurvedSectionProps {
  children: React.ReactNode;
  position: 'top' | 'middle' | 'bottom';
  className?: string;
  glassEffect?: string;
}

const CurvedSection: React.FC<CurvedSectionProps> = ({
  children,
  position,
  className = '',
  glassEffect = 'backdrop-blur-sm bg-black/20'
}) => {
  const getPositionClass = () => {
    switch (position) {
      case 'top':
        return 'curved-section--top';
      case 'middle':
        return 'curved-section--middle';
      case 'bottom':
        return 'curved-section--bottom';
      default:
        return '';
    }
  };

  return (
    <div
      className={`curved-section curved-section--glass ${getPositionClass()} ${glassEffect} ${className}`}
    >
      <div className="curved-section__content">
        {children}
      </div>
    </div>
  );
};

export default CurvedSection;