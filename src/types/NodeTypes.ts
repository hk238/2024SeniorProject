export interface ModelNode {
    id: string;
    label: string;
    description?: string;
    formula?: string;
  }
  
  export interface ModelEdge {
    id: string;
    source: string;
    target: string;
    label?: string;
  }