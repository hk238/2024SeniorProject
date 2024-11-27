import React from 'react';
import ReactFlow, { 
  Controls, 
  NodeTypes,
  EdgeTypes
} from 'reactflow';
import CustomNode from './CustomNode';
import CustomEdge from './CustomEdge';
import { initialNodes, initialEdges } from '../data/nodes';
import 'reactflow/dist/style.css';
import '../styles/nodes.css';

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const edgeTypes: EdgeTypes = {
  custom: CustomEdge,
};

const Graph: React.FC = () => {
  const customNodes = initialNodes.map(node => ({
    ...node,
    type: 'custom'
  }));

  const customEdges = initialEdges.map(edge => ({
    ...edge,
    type: 'custom'
  }));

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
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Graph;