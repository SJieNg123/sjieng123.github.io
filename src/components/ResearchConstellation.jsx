import React, { useState } from 'react';
import { ExternalLink, FileText } from 'lucide-react';

const ResearchConstellation = ({ mousePosition }) => {
  const [hoveredNode, setHoveredNode] = useState(null);

  const researchNodes = [
    {
      id: 1,
      title: 'RingLWE & DEPIR',
      description: 'Doubly Efficient Private Information Retrieval using Ring Learning With Errors',
      position: { x: 25, y: 30 },
      connections: [2, 3]
    },
    {
      id: 2,
      title: 'IEEE TDSC Paper',
      description: 'Privacy-Preserving URL-based Filtering System',
      position: { x: 55, y: 20 },
      connections: [3]
    },
    {
      id: 3,
      title: 'System Architecture',
      description: 'Scalable Infrastructure for Cryptographic Protocols',
      position: { x: 70, y: 50 },
      connections: []
    },
    {
      id: 4,
      title: 'Zero-Knowledge Proofs',
      description: 'Efficient ZK-SNARK implementations for real-world applications',
      position: { x: 40, y: 65 },
      connections: [3]
    }
  ];

  return (
    <section className="research-section">
      <div className="research-header">
        <h2 className="section-title">Research Constellation</h2>
        <p className="section-subtitle monospace-text">
          &gt; Exploring the frontiers of cryptography and privacy-preserving systems
        </p>
      </div>

      <div className="constellation-container">
        <svg className="constellation-svg" viewBox="0 0 100 100">
          {/* Draw Connections */}
          {researchNodes.map(node => 
            node.connections.map(targetId => {
              const target = researchNodes.find(n => n.id === targetId);
              return (
                <line
                  key={`${node.id}-${targetId}`}
                  x1={node.position.x}
                  y1={node.position.y}
                  x2={target.position.x}
                  y2={target.position.y}
                  className={`constellation-line ${
                    hoveredNode === node.id || hoveredNode === targetId ? 'active' : ''
                  }`}
                />
              );
            })
          )}

          {/* Draw Nodes */}
          {researchNodes.map(node => (
            <g key={node.id}>
              <circle
                cx={node.position.x}
                cy={node.position.y}
                r="1.5"
                className={`constellation-node ${
                  hoveredNode === node.id ? 'active' : ''
                }`}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              />
              {hoveredNode === node.id && (
                <circle
                  cx={node.position.x}
                  cy={node.position.y}
                  r="3"
                  className="node-pulse"
                />
              )}
            </g>
          ))}
        </svg>

        {/* Node Details Cards */}
        {researchNodes.map(node => (
          <div
            key={node.id}
            className={`research-card ${
              hoveredNode === node.id ? 'highlighted' : ''
            }`}
            style={{
              left: `${node.position.x}%`,
              top: `${node.position.y}%`
            }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="card-glow"></div>
            <FileText className="card-icon" />
            <h3 className="card-title">{node.title}</h3>
            <p className="card-description">{node.description}</p>
            <div className="card-action">
              <ExternalLink className="action-icon" />
              <span className="monospace-text">View Details</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchConstellation;