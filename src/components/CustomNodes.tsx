import { Handle, Position } from 'reactflow';

const nodeStyles = {
  padding: '10px',
  borderRadius: '5px',
  fontSize: '12px',
  color: 'white',
  textAlign: 'center' as const,
  width: '150px',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export function ChildNode({ data }:any) {
  return (
    <div style={{ ...nodeStyles, background: '#ff6b6b' }}>
      <Handle type="source" position={Position.Right} />
      {data.label}
    </div>
  );
}

export function BlockchainNode({ data }:any) {
  return (
    <div style={{ ...nodeStyles, background: '#4ecdc4' }}>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      {data.label}
    </div>
  );
}

export function ValidatorNode({ data }:any) {
  return (
    <div style={{ ...nodeStyles, background: '#45b7d1' }}>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      {data.label}
    </div>
  );
}

export function MainModelNode({ data }:any) {
  return (
    <div style={{ ...nodeStyles, background: '#6c5ce7' }}>
      <Handle type="target" position={Position.Left} />
      {data.label}
    </div>
  );
}

