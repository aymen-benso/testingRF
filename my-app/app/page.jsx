"use client"

import React from 'react';
import ReactFlow from 'reactflow';
 
import 'reactflow/dist/style.css';
import { useState } from 'react';
 
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
 
export default function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

const addNodeAndEdge = () => {
  const newNodeId = (nodes.length + 1).toString();
  const newEdgeId = 'e' + nodes[nodes.length - 1].id + '-' + newNodeId;

  const newNode = { id: newNodeId, position: { x: 0, y: nodes.length * 100 }, data: { label: newNodeId } };
  const newEdge = { id: newEdgeId, source: nodes[nodes.length - 1].id, target: newNodeId };

  setNodes([...nodes, newNode]);
  setEdges([...edges, newEdge]);
};
const deleteNodeAndEdge = () => {
  if (nodes.length < 2) return;
  const newNodes = nodes.slice(0, nodes.length - 1);
  const newEdges = edges.slice(0, edges.length - 1);
  setNodes(newNodes);
  setEdges(newEdges);
} 


  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <div className="bg-gray-200">
          <button 
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={addNodeAndEdge}
          >
            Add Node
          </button>
          <button 
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={deleteNodeAndEdge}
          >
            Delete Node
          </button>
        </div>
        <div className="bg-gray-300">
          <ReactFlow nodes={nodes} edges={edges} />
        </div>
      </div>
    </>
  );
}