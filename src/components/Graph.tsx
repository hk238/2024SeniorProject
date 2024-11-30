import React from 'react';
import ReactFlow, { 
  Controls, 
  NodeTypes,
  EdgeTypes,
  NodeMouseHandler,
  EdgeMouseHandler
} from 'reactflow';
import CustomNode from './CustomNode';
import CustomEdge from './CustomEdge';
import { initialNodes, initialEdges } from '../data/nodes';
import 'reactflow/dist/style.css';
import '../styles/nodes.css';

interface GraphProps {
  onNodeHover?: (formula?: string, description?: string) => void;
  onEdgeHover?: (formula?: string) => void;
}

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const edgeTypes: EdgeTypes = {
  custom: CustomEdge,
};

const Graph: React.FC<GraphProps> = ({ onNodeHover, onEdgeHover }) => {
  const customNodes = initialNodes.map(node => ({
    ...node,
    type: 'custom'
  }));

  const customEdges = initialEdges.map(edge => ({
    ...edge,
    type: 'custom'
  }));

  const handleNodeMouseEnter: NodeMouseHandler = (_, node) => {
    if (onNodeHover) {
      onNodeHover(node.data.formula, node.data.description);
    }
  };

  const handleNodeMouseLeave: NodeMouseHandler = () => {
    if (onNodeHover) {
      onNodeHover(undefined, undefined);
    }
  };

  const handleEdgeMouseEnter: EdgeMouseHandler = (_, edge) => {
    if (onEdgeHover) {
      onEdgeHover(edge.data?.formula);
    }
  };

  const handleEdgeMouseLeave: EdgeMouseHandler = () => {
    if (onEdgeHover) {
      onEdgeHover(undefined);
    }
  };

  return (
    <div style={{ 
      width: '90vw', 
      height: '80vh',
      margin: '5vh auto',
      border: '1px solid #eee',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      <ReactFlow
        nodes={customNodes}
        edges={customEdges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={{ type: 'custom' }}
        fitView
        minZoom={0.1}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}
        onNodeMouseEnter={handleNodeMouseEnter}
        onNodeMouseLeave={handleNodeMouseLeave}
        onEdgeMouseEnter={handleEdgeMouseEnter}
        onEdgeMouseLeave={handleEdgeMouseLeave}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Graph;