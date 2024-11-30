import React from 'react';
import { EdgeProps } from 'reactflow';

const CustomEdge: React.FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style = {},
}) => {
  const edgePath = `M ${sourceX} ${sourceY}L ${targetX} ${targetY}`;

  return (
    <>
      <path
        id={id}
        className="hover-edge"
        style={{
          stroke: '#4a90e2',
          strokeWidth: 2,
          transition: 'all 0.2s ease',
          ...style,
        }}
        d={edgePath}
        markerEnd="url(#edge-arrow)"
      />
      <defs>
        <marker
          id="edge-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth={8}
          markerHeight={8}
          orient="auto-start-reverse"
        >
          <path
            d="M 0 0 L 10 5 L 0 10 z"
            fill="#4a90e2"
            className="arrow-marker"
          />
        </marker>
      </defs>
    </>
  );
};

export default CustomEdge;