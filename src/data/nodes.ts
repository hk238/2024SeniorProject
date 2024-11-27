import { Node } from 'reactflow';

export const initialNodes: Node[] = [
  {
    id: 'introversion_level',
    position: { x: 100, y: 50 },
    data: { 
      label: 'Introversion Level',
      description: 'Base personality trait'
    }
  },

  {
    id: 'social_engage_level',
    position: { x: 100, y: 250 },
    data: { 
      label: 'Social Engagement Level',
      description: 'Frequency of social interactions'
    }
  },
  {
    id: 'stress',
    position: { x: 400, y: 150 },
    data: { 
      label: 'Stress',
      description: 'Stress from social interactions',
      formula: 'Introversion Level + Social Engagement Level'
    }
  },
  {
    id: 'energy',
    position: { x: 700, y: 50 },
    data: { 
      label: 'Energy',
      description: 'Student tiredness level',
      formula: 'Stress'
    }
  },
  {
    id: 'need_for_time_alone',
    position: { x: 700, y: 250 },
    data: { 
      label: 'Need for Time Alone',
      formula: 'Stress'
    }
  },
  {
    id: 'cognitive_fatigue',
    position: { x: 1000, y: 150 },
    data: { 
      label: 'Cognitive Fatigue',
      formula: 'Energy + Need for Time Alone'
    }
  },
  {
    id: 'motivation',
    position: { x: 1300, y: 150 },
    data: { 
      label: 'Motivation',
      description: 'Student motivation level',
      formula: 'Cognitive Fatigue'
    }
  },
  {
    id: 'cognitive_engagement',
    position: { x: 1600, y: 50 },
    data: { 
      label: 'Cognitive Engagement',
      description: 'Level of mental involvement in learning',
      formula: 'Motivation'
    }
  },
  {
    id: 'behavior_engagement',
    position: { x: 1600, y: 250 },
    data: { 
      label: 'Behavioral Engagement',
      description: 'Level of active participation',
      formula: 'Motivation'
    }
  },
  {
    id: 'achievement',
    position: { x: 1900, y: 150 },
    data: { 
      label: 'Achievement',
      description: 'Academic performance level',
      formula: 'Cognitive Engagement + Behavioral Engagement'
    }
  },
  {
    id: 'respond',
    position: { x: 1900, y: 350 },
    data: { 
      label: 'Response',
      description: 'Student response to situations',
      formula: 'Cognitive Engagement + Behavioral Engagement'
    }
  },
  {
    id: 'emotion',
    position: { x: 2200, y: -50 },
    data: { 
      label: 'Emotion',
      description: 'Emotional state',
      formula: 'Achievement + Stress'
    }
  },
  {
    id: 'self_esteem',
    position: { x: 2200, y: 150 },
    data: { 
      label: 'Self-esteem',
      description: 'Belief in own abilities',
      formula: 'Achievement'
    }
  },
  {
    id: 'self_reflection',
    position: { x: 2500, y: 50 },
    data: { 
      label: 'Self-Reflection',
      description: 'Ability to reflect on experiences',
      formula: 'Emotion + Self-esteem'
    }
  }
];

export const initialEdges = [
  {
    id: 'e1-2',
    source: 'introversion_level',
    target: 'stress',
    data: {
      relationship: 'influences',
      formula: 'introversion_level * w + b'
    }
  },
  {
    id: 'e1-3',
    source: 'social_engage_level',
    target: 'stress',
    data: {
      relationship: 'influences',
      formula: 'social_engage_level * w + b'
    }
  },
  {
    id: 'e2-3',
    source: 'stress',
    target: 'energy',
    data: {
      relationship: 'increases',
      formula: 'stress * w + b'
    }
  },
  {
    id: 'e2-4',
    source: 'stress',
    target: 'need_for_time_alone',
    data: {
      relationship: 'determines',
      formula: 'stress * w + b'
    }
  },
  {
    id: 'e4-5',
    source: 'need_for_time_alone',
    target: 'cognitive_fatigue',
    data: {
      relationship: 'influences',
      formula: 'need_for_time_alone * w + b'
    }
  },
  {
    id: 'e3-5',
    source: 'energy',
    target: 'cognitive_fatigue',
    data: {
      relationship: 'affects',
      formula: 'energy * w + b'
    }
  },
  {
    id: 'e-cf-m',
    source: 'cognitive_fatigue',
    target: 'motivation',
    data: {
      relationship: 'influences',
      formula: 'cognitive_fatigue * w + b'
    }
  },
  {
    id: 'e-m-ce',
    source: 'motivation',
    target: 'cognitive_engagement',
    data: {
      relationship: 'increases',
      formula: 'motivation * w + b'
    }
  },
  {
    id: 'e-m-be',
    source: 'motivation',
    target: 'behavior_engagement',
    data: {
      relationship: 'increases',
      formula: 'motivation * w + b'
    }
  },
  {
    id: 'e-ce-a',
    source: 'cognitive_engagement',
    target: 'achievement',
    data: {
      relationship: 'influences',
      formula: 'cognitive_engagement * w + b'
    }
  },
  {
    id: 'e-be-a',
    source: 'behavior_engagement',
    target: 'achievement',
    data: {
      relationship: 'influences',
      formula: 'behavior_engagement * w + b'
    }
  },
  {
    id: 'e-a-se',
    source: 'achievement',
    target: 'self_esteem',
    data: {
      relationship: 'increases',
      formula: 'achievement * w + b'
    }
  },
  {
    id: 'e-e-se',
    source: 'emotion',
    target: 'self_reflection',
    data: {
      relationship: 'increases',
      formula: 'emotion * w + b'
    }
  },
  {
    id: 'e-se-sr',
    source: 'self_esteem',
    target: 'self_reflection',
    data: {
      relationship: 'enhances',
      formula: 'self_esteem * w + b'
    }
  },
  {
    id: 'e-a-e',
    source: 'achievement',
    target: 'emotion',
    data: {
      relationship: 'influences',
      formula: 'achievement * w + b'
    }
  },
  {
    id: 'e-ce-r',
    source: 'cognitive_engagement',
    target: 'respond',
    data: {
      relationship: 'influences',
      formula: 'cognitive_engagement * w + b'
    }
  },
  {
    id: 'e-be-r',
    source: 'behavior_engagement',
    target: 'respond',
    data: {
      relationship: 'influences',
      formula: 'behavior_engagement * w + b'
    }
  },
  {
    id: 'e-s-se',
    source: 'stress',
    target: 'emotion',
    data: {
      relationship: 'increases',
      formula: 'stress * w + b'
    }
  }
];