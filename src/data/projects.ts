export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
  category: 'web' | 'mobile' | 'ai' | 'blockchain' | 'iot' | 'desktop';
  status: 'completed' | 'in-progress' | 'planned';
  teamMembers: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'EduConnect Platform',
    description: 'AI-powered learning management system connecting students with personalized educational resources.',
    longDescription: 'A comprehensive LMS that uses machine learning to adapt to individual learning styles and provide personalized content recommendations. Features include virtual classrooms, progress tracking, and AI-driven assessment tools.',
    technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'Socket.io'],
    image: '/api/placeholder/400/300',
    githubLink: 'https://github.com/devbraze/educonnect',
    liveLink: 'https://educonnect.devbraze.com',
    category: 'web',
    status: 'completed',
    teamMembers: ['Arjun Sharma', 'Aisha Rahman', 'Priya Patel'],
    features: [
      'Personalized learning paths',
      'Real-time collaboration',
      'AI-powered assessments',
      'Progress analytics',
      'Virtual classrooms'
    ]
  },
  {
    id: '2',
    title: 'CyberGuard Mobile App',
    description: 'Mobile security application providing real-time threat detection and privacy protection.',
    longDescription: 'A comprehensive mobile security solution that monitors device activity, detects malicious apps, and provides privacy protection features. Includes VPN integration and secure communication tools.',
    technologies: ['React Native', 'Node.js', 'Python', 'Firebase', 'Machine Learning'],
    image: '/api/placeholder/400/300',
    githubLink: 'https://github.com/devbraze/cyberguard',
    category: 'mobile',
    status: 'in-progress',
    teamMembers: ['Karthik Reddy', 'Rohit Kumar', 'Sneha Gupta'],
    features: [
      'Real-time threat detection',
      'Privacy protection',
      'Secure messaging',
      'VPN integration',
      'Activity monitoring'
    ]
  },
  {
    id: '3',
    title: 'SmartCampus IoT',
    description: 'IoT-based smart campus management system for energy optimization and facility monitoring.',
    longDescription: 'An integrated IoT solution for campus management featuring smart lighting, climate control, and resource optimization. Uses sensor networks and machine learning for predictive maintenance.',
    technologies: ['Arduino', 'Raspberry Pi', 'Python', 'React', 'InfluxDB', 'Grafana'],
    image: '/api/placeholder/400/300',
    githubLink: 'https://github.com/devbraze/smartcampus',
    category: 'iot',
    status: 'completed',
    teamMembers: ['Rohit Kumar', 'Karthik Reddy', 'Arjun Sharma'],
    features: [
      'Smart lighting control',
      'Energy monitoring',
      'Predictive maintenance',
      'Real-time analytics',
      'Mobile dashboard'
    ]
  },
  {
    id: '4',
    title: 'BlockChain Voting System',
    description: 'Secure and transparent voting system built on blockchain technology for student elections.',
    longDescription: 'A decentralized voting platform ensuring transparency, security, and immutability. Features include voter verification, real-time results, and audit trails for complete transparency.',
    technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'Ethereum', 'IPFS'],
    image: '/api/placeholder/400/300',
    githubLink: 'https://github.com/devbraze/blockvote',
    liveLink: 'https://vote.devbraze.com',
    category: 'blockchain',
    status: 'completed',
    teamMembers: ['Arjun Sharma', 'Rohit Kumar', 'Aisha Rahman'],
    features: [
      'Blockchain security',
      'Transparent voting',
      'Real-time results',
      'Voter verification',
      'Audit trails'
    ]
  },
  {
    id: '5',
    title: 'AI Code Assistant',
    description: 'VS Code extension that provides intelligent code suggestions and debugging assistance.',
    longDescription: 'An AI-powered development tool that helps programmers write better code faster. Features include intelligent auto-completion, bug detection, and code optimization suggestions.',
    technologies: ['TypeScript', 'Python', 'OpenAI API', 'VS Code API', 'Machine Learning'],
    image: '/api/placeholder/400/300',
    githubLink: 'https://github.com/devbraze/ai-assistant',
    category: 'desktop',
    status: 'in-progress',
    teamMembers: ['Aisha Rahman', 'Arjun Sharma', 'Priya Patel'],
    features: [
      'Intelligent suggestions',
      'Bug detection',
      'Code optimization',
      'Multi-language support',
      'Real-time assistance'
    ]
  },
  {
    id: '6',
    title: 'DevBraze Community Portal',
    description: 'Social platform for connecting ECE students and sharing technical knowledge and projects.',
    longDescription: 'A community-driven platform where students can showcase projects, share knowledge, participate in discussions, and collaborate on technical initiatives.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind'],
    image: '/api/placeholder/400/300',
    githubLink: 'https://github.com/devbraze/community',
    liveLink: 'https://community.devbraze.com',
    category: 'web',
    status: 'planned',
    teamMembers: ['Priya Patel', 'Sneha Gupta', 'Arjun Sharma'],
    features: [
      'Project showcase',
      'Knowledge sharing',
      'Discussion forums',
      'Collaboration tools',
      'Event management'
    ]
  }
];

