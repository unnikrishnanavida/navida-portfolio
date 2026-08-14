export const projects = [
  {
    id: 'aura',
    number: '01',
    title: 'AURA',
    subtitle: 'Deep Research Studio',
    category: 'AI Research • Generative AI • Knowledge Systems',

    description:
      'An AI-powered research environment designed to transform complex information into structured knowledge, insights, and actionable research workflows.',

    problem:
      'Complex research requires collecting, understanding, and organizing information across multiple sources. Manual synthesis is time-intensive.',

    system:
      'Research → Retrieval → Analysis → Knowledge Structuring → Insights',

    capabilities: [
      'Research automation across domains',
      'Information synthesis and aggregation',
      'Knowledge organization and graph construction',
      'AI-assisted analysis and insight generation',
      'Web intelligence and data collection',
    ],

    technologies: [
      'AI',
      'Generative AI',
      'Knowledge Graphs',
      'Research Automation',
      'Web Intelligence',
      'Information Retrieval',
    ],

    highlights: [
      'AI-assisted research workflows',
      'Structured knowledge exploration',
      'Intelligent information synthesis',
      'Modular research architecture',
    ],

    github: 'https://github.com/unnikrishnanavida/AURA',
    liveDemo: null,

    featured: true,
    flagship: true,
  },

  {
    id: 'edge-upi-risk',
    number: '02',
    title: 'Edge-Based UPI Risk Detection System',
    subtitle: 'Intelligent Transaction Risk Analysis',
    category: 'AI/ML • Edge AI • FinTech Security',

    description:
      'An intelligent risk-analysis system for detecting potentially suspicious UPI transactions using machine-learning techniques and edge-oriented inference.',

    problem:
      'Digital payment platforms require real-time identification of potentially fraudulent or suspicious transactions to protect user accounts and financial risk.',

    pipeline: [
      'Transaction Data',
      'Preprocessing & Normalization',
      'Feature Engineering',
      'ML Classification (XGBoost)',
      'Risk Scoring',
      'Decision Signal',
    ],

    technical: [
      'Python',
      'Machine Learning',
      'XGBoost (gradient-boosted classification)',
      'Data Analysis & Preprocessing',
      'Edge AI Architecture',
      'Risk Classification Models',
    ],

    whyItMatters:
      'Designed with edge-oriented inference in mind to reduce dependency on centralized processing for transaction-risk analysis, enabling faster decision-making and improved user privacy.',

    technologies: [
      'Python',
      'Machine Learning',
      'XGBoost',
      'Edge AI',
      'Data Analysis',
      'Feature Engineering',
    ],

    highlights: [
      'Transaction risk analysis',
      'Machine-learning classification',
      'Edge-oriented inference',
      'Security-focused architecture',
    ],

    github: 'https://github.com/unnikrishnanavida/edge-upi-risk-intelligence',
    liveDemo: null,

    featured: true,
    flagship: false,
  },

  {
    id: 'ai-music-classifier',
    number: '03',
    title: 'AI Music Classifier',
    subtitle: 'Intelligent Audio & Music Analysis',
    category: 'AI/ML • Audio Intelligence • Music',

    description:
      'An AI-driven music analysis system for audio classification, pitch detection, and intelligent interpretation of musical characteristics.',

    pipeline: [
      'Audio Input',
      'Preprocessing & Normalization',
      'Feature Extraction (Mel-scale, MFCCs, Spectral)',
      'Pitch & Frequency Analysis',
      'Classification',
      'Musical Interpretation',
    ],

    technologies: [
      'Python',
      'Librosa (audio analysis)',
      'Machine Learning',
      'Audio Processing',
      'Pitch Detection',
      'FastAPI (backend)',
    ],

    direction:
      'Exploring intelligent interpretation of musical characteristics including classification, pitch-based analysis, and automated feature extraction from audio signals.',

    highlights: [
      'Audio feature extraction',
      'Music classification',
      'Pitch and frequency analysis',
      'Intelligent music interpretation',
    ],

    github: null,
    liveDemo: null,

    featured: true,
    flagship: false,
  },

  {
    id: 'waste-management-ai',
    number: '04',
    title: 'AI Waste Management Assistant',
    subtitle: 'Generative AI for Sustainable Waste Management',
    category: 'Generative AI • Civic Technology',

    description:
      'A web-based civic application that uses generative AI to help users identify waste and understand appropriate disposal and recycling methods.',

    technologies: [
      'React',
      'Flask',
      'Firebase',
      'Generative AI',
      'Leaflet',
    ],

    highlights: [
      'AI-assisted waste identification',
      'Disposal recommendations',
      'Recycling guidance',
      'Collection-center discovery',
    ],

    github: null,
    liveDemo: null,

    featured: false,
    flagship: false,
  },

  {
    id: 'number-plate-recognition',
    number: '05',
    title: 'Automated Number Plate Recognition',
    subtitle: 'Computer Vision System',
    category: 'Computer Vision • OCR',

    description:
      'A computer-vision application focused on detecting vehicle number plates and extracting readable plate information from images.',

    technologies: [
      'Python',
      'OpenCV',
      'OCR',
      'Computer Vision',
    ],

    highlights: [
      'Number-plate detection',
      'Image preprocessing',
      'OCR-based extraction',
      'Vehicle identification workflow',
    ],

    github: null,
    liveDemo: null,

    featured: false,
    flagship: false,
  },

  {
    id: 'online-examination',
    number: '06',
    title: 'Online Examination Portal',
    subtitle: 'Full-Stack Examination Platform',
    category: 'Software Engineering • Web Development',

    description:
      'A web-based examination platform developed to support online assessments, examination workflows, and result management.',

    technologies: [
      'Web Development',
      'Database',
      'REST APIs',
      'Authentication',
    ],

    highlights: [
      'Online examination workflow',
      'Question management',
      'Result processing',
      'Administrative functionality',
    ],

    github: null,
    liveDemo: null,

    featured: false,
    flagship: false,
  },
]