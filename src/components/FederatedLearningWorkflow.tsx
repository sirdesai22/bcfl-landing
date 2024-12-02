import { useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { ChildNode, BlockchainNode, ValidatorNode, MainModelNode } from './CustomNodes';

const nodeTypes = {
  childNode: ChildNode,
  blockchainNode: BlockchainNode,
  validatorNode: ValidatorNode,
  mainModelNode: MainModelNode,
};

const initialNodes = [
  { id: '1', type: 'childNode', position: { x: 0, y: 0 }, data: { label: 'Child Node 1' } },
  { id: '2', type: 'childNode', position: { x: 0, y: 100 }, data: { label: 'Child Node 2' } },
  { id: '3', type: 'childNode', position: { x: 0, y: 200 }, data: { label: 'Child Node 3' } },
  { id: '4', type: 'blockchainNode', position: { x: 250, y: 100 }, data: { label: 'Blockchain' } },
  { id: '5', type: 'validatorNode', position: { x: 500, y: 100 }, data: { label: 'Validator' } },
  { id: '6', type: 'mainModelNode', position: { x: 750, y: 100 }, data: { label: 'Main Model' } },
];

const initialEdges = [
  { id: 'e1-4', source: '1', target: '4', animated: true, style: { stroke: '#ff6b6b' } },
  { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: '#ff6b6b' } },
  { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#ff6b6b' } },
  { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#4ecdc4' } },
  { id: 'e5-6', source: '5', target: '6', animated: true, style: { stroke: '#45b7d1' } },
];

export default function FederatedLearningWorkflow() {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params:any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        snapGrid={[10,10]}
        snapToGrid={true}
      >
        <Controls />
        {/* <MiniMap /> */}
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
      {/* <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'white', padding: '10px', borderRadius: '5px' }}>
        <h3>Legend</h3>
        <div><span style={{ color: '#ff6b6b' }}>●</span> Child Nodes</div>
        <div><span style={{ color: '#4ecdc4' }}>●</span> Blockchain</div>
        <div><span style={{ color: '#45b7d1' }}>●</span> Validator</div>
        <div><span style={{ color: '#6c5ce7' }}>●</span> Main Model</div>
      </div> */}
    </div>
  );
}

