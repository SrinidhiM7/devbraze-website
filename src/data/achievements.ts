export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'award' | 'milestone' | 'recognition' | 'partnership';
  icon: string;
  value?: number;
  unit?: string;
}

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Active Members',
    description: 'Growing community of passionate ECE students',
    date: '2024-12-01',
    type: 'milestone',
    icon: 'Users',
    value: 250,
    unit: '+'
  },
  {
    id: '2',
    title: 'Events Conducted',
    description: 'Successfully organized technical events and workshops',
    date: '2024-12-01',
    type: 'milestone',
    icon: 'Calendar',
    value: 45,
    unit: '+'
  },
  {
    id: '3',
    title: 'Projects Completed',
    description: 'Innovative projects developed by our community',
    date: '2024-12-01',
    type: 'milestone',
    icon: 'Code',
    value: 30,
    unit: '+'
  },
  {
    id: '4',
    title: 'Best Technical Club Award',
    description: 'Recognized as the Best Technical Club by School of ECE',
    date: '2024-03-15',
    type: 'award',
    icon: 'Trophy',
  },
  {
    id: '5',
    title: 'Industry Partnership',
    description: 'Strategic partnerships with leading tech companies',
    date: '2024-06-10',
    type: 'partnership',
    icon: 'Handshake',
    value: 5,
    unit: ''
  },
  {
    id: '6',
    title: 'Student Placements',
    description: 'Members successfully placed in top tech companies',
    date: '2024-11-01',
    type: 'milestone',
    icon: 'Briefcase',
    value: 80,
    unit: '%'
  },
  {
    id: '7',
    title: 'Open Source Contributions',
    description: 'Contributions to major open source projects',
    date: '2024-09-20',
    type: 'recognition',
    icon: 'GitBranch',
    value: 100,
    unit: '+'
  },
  {
    id: '8',
    title: 'Research Publications',
    description: 'Research papers published in international conferences',
    date: '2024-08-05',
    type: 'recognition',
    icon: 'BookOpen',
    value: 12,
    unit: ''
  },
  {
    id: '9',
    title: 'Hackathon Wins',
    description: 'First place finishes in various hackathons',
    date: '2024-10-15',
    type: 'award',
    icon: 'Award',
    value: 8,
    unit: ''
  },
  {
    id: '10',
    title: 'Alumni Network',
    description: 'Strong alumni network working in top tech companies',
    date: '2024-12-01',
    type: 'milestone',
    icon: 'Network',
    value: 500,
    unit: '+'
  }
];

