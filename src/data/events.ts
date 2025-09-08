export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'workshop' | 'hackathon' | 'seminar' | 'competition' | 'webinar';
  image: string;
  location?: string;
  registrationLink?: string;
  highlights?: string[];
}

export const pastEvents: Event[] = [
  {
    id: '1',
    title: 'AI & Machine Learning Workshop',
    description: 'Comprehensive workshop on AI fundamentals and practical ML implementations using Python and TensorFlow.',
    date: '2024-11-15',
    type: 'workshop',
    image: '/api/placeholder/400/250',
    location: 'ECE Auditorium',
    highlights: ['100+ participants', 'Hands-on coding', 'Industry experts', 'Certificate provided']
  },
  {
    id: '2',
    title: 'DevBraze Hackathon 2024',
    description: '48-hour hackathon focused on solving real-world problems using cutting-edge technology.',
    date: '2024-10-20',
    type: 'hackathon',
    image: '/api/placeholder/400/250',
    location: 'ECE Lab Complex',
    highlights: ['50+ teams', '₹50,000 prize pool', '48 hours coding', 'Industry mentors']
  },
  {
    id: '3',
    title: 'Web Development Bootcamp',
    description: 'Intensive bootcamp covering full-stack web development with React, Node.js, and modern frameworks.',
    date: '2024-09-10',
    type: 'workshop',
    image: '/api/placeholder/400/250',
    location: 'Computer Center',
    highlights: ['3-day program', 'Live projects', 'Job placement', 'Portfolio building']
  },
  {
    id: '4',
    title: 'Cybersecurity Awareness Seminar',
    description: 'Expert-led seminar on cybersecurity best practices and emerging threats in the digital age.',
    date: '2024-08-25',
    type: 'seminar',
    image: '/api/placeholder/400/250',
    location: 'ECE Seminar Hall',
    highlights: ['Industry speakers', 'Live demonstrations', 'Q&A session', 'Security tools']
  }
];

export const upcomingEvents: Event[] = [
  {
    id: '5',
    title: 'Cloud Computing Workshop',
    description: 'Hands-on workshop on AWS, Azure, and Google Cloud platforms with practical deployment exercises.',
    date: '2025-01-15',
    type: 'workshop',
    image: '/api/placeholder/400/250',
    location: 'ECE Lab 1',
    registrationLink: '#register',
    highlights: ['AWS certification', 'Live deployments', 'Free credits', 'Industry mentors']
  },
  {
    id: '6',
    title: 'Open Source Contribution Drive',
    description: 'Learn how to contribute to open source projects and make your mark in the global developer community.',
    date: '2025-02-01',
    type: 'workshop',
    image: '/api/placeholder/400/250',
    location: 'Computer Center',
    registrationLink: '#register',
    highlights: ['GitHub mastery', 'Real contributions', 'Mentor guidance', 'Portfolio boost']
  },
  {
    id: '7',
    title: 'Tech Talk: Future of AI',
    description: 'Industry experts discuss the future of artificial intelligence and its impact on various sectors.',
    date: '2025-02-20',
    type: 'seminar',
    image: '/api/placeholder/400/250',
    location: 'ECE Auditorium',
    registrationLink: '#register',
    highlights: ['Industry leaders', 'Future insights', 'Networking', 'Q&A session']
  }
];

