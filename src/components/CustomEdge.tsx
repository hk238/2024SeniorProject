import React, { useState, MouseEvent } from 'react';
import { EdgeProps } from 'reactflow';

const CustomEdge: React.FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  data,
  style = {},
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // 엣지의 중앙 좌표 계산
  const centerX = (sourceX + targetX) / 2;
  const centerY = (sourceY + targetY) / 2;

  const onMouseEnter = () => {
    setShowTooltip(true);
  };

  const onMouseLeave = () => {
    setShowTooltip(false);
  };

  const edgePath = `M ${sourceX} ${sourceY}L ${targetX} ${targetY}`;

  return (
    <>
      <g>
        <path
          d={edgePath}
          stroke="transparent"
          strokeWidth={20}
          fill="none"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
        <path
          id={id}
          className="hover-edge"
          style={{
            stroke: '#4a90e2',
            strokeWidth: 2,
            transition: 'all 0.2s ease',
            pointerEvents: 'none',
            ...style,
          }}
          d={edgePath}
          markerEnd="url(#edge-arrow)"
        />
      </g>
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
      {showTooltip && data?.formula && (
        <foreignObject
          x={centerX}
          y={centerY}
          width={1}
          height={1}
          style={{
            position: 'relative',
            overflow: 'visible'
          }}
        >
          <div
            className="edge-tooltip"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              transform: 'translate(-50%, -120%)',
            }}
          >
            <div className="edge-formula">{data.formula}</div>
          </div>
        </foreignObject>
      )}
    </>
  );
};

export default CustomEdge;