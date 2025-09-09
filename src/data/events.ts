export interface Event {
  id: string;
  title: string;
  description: string;
  fullDescription?: string; // For detailed view on hover/modal
  date: string;
  type: 'workshop' | 'hackathon' | 'seminar' | 'competition' | 'webinar';
  image: string;
  images?: string[]; // For multiple images
  location?: string;
  registrationLink?: string;
  highlights?: string[];
}

export const pastEvents: Event[] = [
  {
    id: '1',
    title: 'Tech Trinity',
    description: 'Two Days of Intensive Learning & Innovation featuring Figma Workshop and GitHub & LinkedIn Mastery.',
    fullDescription: 'DevBraze Presents Tech Trinity : Two Days of Intensive Learning & Innovation\nApril 7th-8th marked an incredible knowledge-sharing journey with our back-to-back workshops.\nThe Figma Workshop on the 7th saw Aniketh, Joyprakash Kalita, and Gourish Mokashi demonstrate the power of UI/UX design, transforming concepts into polished visual prototypes through hands-on sessions.\nOn the 8th, Deepak N and Darshan Krishna N led the GitHub & LinkedIn Mastery workshop, equipping participants with essential tools for version control and professional networking in the tech industry.',
    date: '2024-04-07',
    type: 'workshop',
    image: '/images/Tech trinity  images/Picture10.png',
    images: ['/images/Tech trinity  images/Picture10.png', '/images/Tech trinity  images/Picture11.png', '/images/Tech trinity  images/Picture12.png'],
    location: 'ECE Department',
    highlights: ['2-day event', 'UI/UX Design', 'Version Control', 'Professional Networking']
  },
  {
    id: '2',
    title: 'Tech Fusion Hackathon',
    description: 'TECHFUSION Hackathon sponsored by Zaka Networks, focusing on Web3, IoT, AIML and open innovation.',
    fullDescription: '</DevBraze> organized TECHFUSION Hackathon sponsored by Zaka Networks, that focused on fostering innovation and creativity in Web3, IoT, AIML and open innovation. It gives an opportunity to participants to discover advanced technologies and to use the skills to solve real-life problems. This hackathon was designed for tech enthusiasts who can collaborate, learn, and network.\nThe hackathon kicked off with a briefing session highlighting the event structure, the problem statements, and what was to be delivered by the end of the hackathon. The participants divided themselves into teams, worked through a problem solution over the period, and then met mentors/ industry experts.\nThe final presentations demonstrated innovative and diverse solutions for challenges in Web3, IoT, AIML and open innovation domains. The projects were judged by a panel on creativity, feasibility, and impact.',
    date: '2024-03-15', // Estimated date as not provided
    type: 'hackathon',
    image: '/images/Tech fusion hackathon images/Picture1.jpg',
    images: ['/images/Tech fusion hackathon images/Picture1.jpg', '/images/Tech fusion hackathon images/Picture2.jpg', '/images/Tech fusion hackathon images/Picture3.jpg', '/images/Tech fusion hackathon images/Picture4.jpg', '/images/Tech fusion hackathon images/Picture5.jpg'],
    location: 'ECE Lab Complex',
    highlights: ['Zaka Networks Sponsor', 'Web3 & IoT Focus', 'Industry Mentors', 'Innovation Challenge']
  },
  {
    id: '3',
    title: 'TechMania',
    description: 'Spectacular tech event with treasure hunts, coding competitions, and quiz games in collaboration with IEEE CIS.',
    fullDescription: 'the tech world was set ablaze with excitement at #TechMania, a spectacular event hosted by </Devbraze> in collaboration with IEEE CIS, under the adept guidance of our esteemed faculty coordinator, Dr. Chaya Ravindran, and the dynamic Secretary of CIS, Dr. Manjunath Kounte.\n\nTechMania was an electrifying showcase of talent, innovation, and camaraderie, featuring three exhilarating sub-events that left everyone in awe! From brain-teasing treasure hunts to intense coding competitions and thrilling quiz games, there was something for every tech enthusiast.\n\nBut beyond the fierce competition, what truly made TechMania special was the joy and fun shared by all the students who participated. It was a day filled with laughter, learning, and unforgettable memories.',
    date: '2024-02-10', // Estimated date as not provided
    type: 'competition',
    image: '/images/TechMania images/Picture6.jpg',
    images: ['/images/TechMania images/Picture6.jpg', '/images/TechMania images/Picture7.jpg', '/images/TechMania images/Picture8.jpg', '/images/TechMania images/Picture9.jpg'],
    location: 'ECE Department',
    highlights: ['IEEE CIS Collaboration', 'Treasure Hunt', 'Coding Competition', 'Quiz Games']
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
