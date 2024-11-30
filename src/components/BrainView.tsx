import React, { useState } from 'react';
import Graph from './Graph';

interface NodeInfo {
  formula?: string;
  description?: string;
}

const BrainView: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<NodeInfo | null>(null);
  const [hoveredEdgeFormula, setHoveredEdgeFormula] = useState<string | null>(null);

  const handleBrainClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleReturn = () => {
    setIsExpanded(false);
    setHoveredNode(null);
    setHoveredEdgeFormula(null);
  };

  const handleNodeHover = (formula?: string, description?: string) => {
    if (formula || description) {
      setHoveredNode({ formula, description });
      setHoveredEdgeFormula(null);
    } else {
      setHoveredNode(null);
    }
  };

  const handleEdgeHover = (formula?: string) => {
    if (formula) {
      setHoveredEdgeFormula(formula);
      setHoveredNode(null);
    } else {
      setHoveredEdgeFormula(null);
    }
  };

  return (
    <div className="brain-container">
      {isExpanded ? (
        <div className="full-graph-container">
          <button 
            className="return-button"
            onClick={handleReturn}
          >
            Return to Brain View
          </button>
          <Graph 
            onNodeHover={handleNodeHover} 
            onEdgeHover={handleEdgeHover}
          />
          {hoveredNode && (
            <div className="node-info-display">
              {hoveredNode.description && (
                <div className="description-content">
                  {hoveredNode.description}
                </div>
              )}
              {hoveredNode.formula && (
                <div className="formula-content">
                  Formula: {hoveredNode.formula}
                </div>
              )}
            </div>
          )}
          {hoveredEdgeFormula && (
            <div className="edge-info-display">
              <div className="formula-content">
                Formula: {hoveredEdgeFormula}
              </div>
            </div>
          )}
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