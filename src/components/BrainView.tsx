import React, { useState } from 'react';
import Graph from './Graph';

const BrainView: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleBrainClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleReturn = () => {
    setIsExpanded(false);
  };

  return (
    <div className="brain-container">
      {isExpanded ? (
        <div className="full-graph-container">
          <Graph />
          <button 
            className="return-button"
            onClick={handleReturn}
          >
            Return to Brain View
          </button>
        </div>
      ) : (
        <div 
          className="brain-wrapper"
          onClick={handleBrainClick}
        >
          <div className="brain-image">
            <div className="mini-graph" />
          </div>
          <div className="brain-text">Click to explore student's cognitive model</div>
        </div>
      )}
    </div>
  );
};

export default BrainView; 