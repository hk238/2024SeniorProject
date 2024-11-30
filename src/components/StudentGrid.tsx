import React, { useEffect, useState } from 'react';
import BrainView from './BrainView';

const StudentGrid: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        if (!isScrolled) {
          setFocusedIndex(7);
          setTimeout(() => {
            setIsScrolled(true);
          }, 1000);
        }
      } else if (scrollPosition < 100) {
        if (isScrolled) {
          setIsScrolled(false);
          setTimeout(() => {
            setFocusedIndex(null);
          }, 500);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <div className="page-container">
      <div className="header-container">
        <h1>2024 Calvin Senior Project: Heonjae Kwon & Jaden Brookens</h1>
      </div>
      <div className="student-container">
        <div className={`student-grid ${isScrolled ? 'scrolled' : ''}`}>
          {Array(15).fill(0).map((_, index) => (
            <div 
              key={index} 
              className={`student-item ${focusedIndex === index ? 'focused' : ''} ${
                focusedIndex !== null && focusedIndex !== index ? 'fade-out' : ''
              }`}
            >
              <div className="brain-image">
                <div className="mini-graph" />
              </div>
              <div className="student-name">Student {index + 1}</div>
            </div>
          ))}
        </div>
        <div className={`focused-view ${isScrolled ? 'visible' : ''}`}>
          <BrainView />
      </div>
    </div>
    </div>
  );
};

export default StudentGrid; 