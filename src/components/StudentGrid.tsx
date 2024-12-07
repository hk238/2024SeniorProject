import React, { useEffect, useState } from 'react';
import BrainView from './BrainView';

const StudentGrid: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [gridColumns, setGridColumns] = useState(5);
  
  useEffect(() => {
    const updateGridColumns = () => {
      if (window.innerWidth <= 768) {
        setGridColumns(2);
      } else if (window.innerWidth <= 1024) {
        setGridColumns(3);
      } else if (window.innerWidth <= 1366) {
        setGridColumns(4);
      } else {
        setGridColumns(5);
      }
    };

    updateGridColumns();
    window.addEventListener('resize', updateGridColumns);
    return () => window.removeEventListener('resize', updateGridColumns);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const triggerPoint = viewportHeight * 0.8;
      const resetPoint = viewportHeight * 0.4;

      if (scrollPosition > triggerPoint) {
        if (!isScrolled) {
          setFocusedIndex(7);
          setTimeout(() => {
            setIsScrolled(true);
          }, 800);
        }
      } else if (scrollPosition < resetPoint) {
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
        <div 
          className={`student-grid ${isScrolled ? 'scrolled' : ''}`}
          style={{ 
            gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
            gap: window.innerWidth <= 768 ? '1rem' : '2rem'
          }}
        >
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