// (File intentionally left blank after removal of Project Ecosystem Map component)

import React, { useRef, useEffect } from 'react';

// You need to install 3d-force-graph and three.js for this to work
// npm install 3d-force-graph three

const data = {
  nodes: [
    { id: 'Project', group: 1 },
    { id: 'Frontend', group: 2 },
    { id: 'Backend', group: 2 },
    { id: 'Database', group: 3 },
    { id: 'DevOps', group: 4 },
    { id: 'Design', group: 5 },
    { id: 'Testing', group: 6 },
    { id: 'API', group: 3 },
    { id: 'User', group: 7 }
  ],
  links: [
    { source: 'Project', target: 'Frontend' },
    { source: 'Project', target: 'Backend' },
    { source: 'Frontend', target: 'Design' },
    { source: 'Backend', target: 'Database' },
    { source: 'Backend', target: 'API' },
    { source: 'API', target: 'Frontend' },
    { source: 'Frontend', target: 'User' },
    { source: 'Backend', target: 'Testing' },
    { source: 'Frontend', target: 'Testing' },
    { source: 'DevOps', target: 'Backend' },
    { source: 'DevOps', target: 'Frontend' }
  ]
};

const ProjectEcosystemMap = () => {
  const ref = useRef();

  useEffect(() => {
    let Graph;
    let fgInstance;
    (async () => {
      const ForceGraph3D = (await import('3d-force-graph')).default;
      fgInstance = ForceGraph3D()(ref.current)
        .graphData(data)
        .nodeAutoColorBy('group')
        .nodeLabel('id')
        .linkDirectionalParticles(2)
        .linkDirectionalParticleWidth(2)
        .backgroundColor('#18181b');
    })();
    return () => {
      if (fgInstance && fgInstance._destructor) fgInstance._destructor();
    };
  }, []);

  return (
    <section id="ecosystem-map" style={{ background: '#18181b', padding: '40px 0' }}>
      <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: 24 }}>Project Ecosystem Map</h2>
      <div ref={ref} style={{ width: '100%', height: '500px', margin: '0 auto', borderRadius: 16, overflow: 'hidden' }} />
    </section>
  );
};

export default ProjectEcosystemMap;
