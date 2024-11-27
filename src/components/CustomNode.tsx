import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

interface CustomNodeProps {
  data: {
    label: string;
    description?: string;
    formula?: string;
  };
}

const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showFormula, setShowFormula] = useState(false);

  const handleClick = () => {
    setShowFormula(!showFormula);
  };

  return (
    <>
      <div 
        className="custom-node"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <Handle type="target" position={Position.Left} />
        <div className="node-content">
          <div className="node-title">{data.label}</div>
          {isHovered && data.description && (
            <div className="node-description">{data.description}</div>
          )}
        </div>
        <Handle type="source" position={Position.Right} />
      </div>
      {showFormula && data.formula && (
        <div className="floating-formula">
          {data.formula}
        </div>
      )}
    </>
  );
};

export default CustomNode;