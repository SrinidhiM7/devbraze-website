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
    title: 'Figma Workshop',
    description: 'A highly effective workshop providing clear insights into Figma fundamentals with valuable hands-on experience.',
    fullDescription: 'The Figma workshop was highly effective, providing clear insights into Figma\'s fundamentals along with valuable hands-on experience. Participants left confident in their new skills and eager to apply them in future projects. The workshop covered essential UI/UX design principles, collaborative design workflows, and practical implementation techniques. Overall, the event was a great success, equipping attendees with industry-relevant skills for modern design challenges.',
    date: '2024-08-28',
    type: 'workshop',
    image: '/images/Tech trinity  images/Picture10.png',
    images: ['/images/Tech trinity  images/Picture10.png', '/images/Tech trinity  images/Picture11.png'],
    location: 'ECE Department',
    highlights: ['UI/UX Design', 'Hands-on Experience', 'Design Fundamentals', 'Practical Skills']
  },
  {
    id: '2',
    title: 'Tech Fusion Hackathon',
    description: 'A spirited hackathon where innovation met teamwork, guided by helpful mentors for problem-solving and coding challenges.',
    fullDescription: 'Tech Fusion was a spirited hackathon where innovation met teamwork. Guided by helpful mentors, participants dove into problem-solving and coding challenges. The event\'s energetic vibe and supportive atmosphere made it a memorable success. Teams collaborated intensively to develop creative solutions, leveraging cutting-edge technologies and innovative approaches. The hackathon fostered creativity, technical excellence, and collaborative spirit among participants.',
    date: '2024-11-23',
    type: 'hackathon',
    image: '/images/Tech fusion hackathon images/Picture1.jpg',
    images: ['/images/Tech fusion hackathon images/Picture1.jpg', '/images/Tech fusion hackathon images/Picture2.jpg', '/images/Tech fusion hackathon images/Picture3.jpg'],
    location: 'ECE Lab Complex',
    highlights: ['Innovation Focus', 'Mentor Guidance', 'Team Collaboration', 'Problem Solving']
  },
  {
    id: '3',
    title: 'Diamante Hackathon',
    description: 'An exciting milestone organized by DevBraze in collaboration with Diamante Blockchain and ActualOne featuring Web3 and Blockchain.',
    fullDescription: 'Diamante DevHub at REVA University was an exciting milestone organized by our DevBraze club in collaboration with Diamante Blockchain and ActualOne. The event kicked off on August 30, 2024, with an insightful Web3 and Blockchain workshop, followed by a thrilling hackathon on August 31, where over 100 participants showcased their creativity and tech skills. Supported and inspired by our esteemed faculty, this event was a tremendous success, bridging academic learning with industry innovation.',
    date: '2024-08-31',
    type: 'hackathon',
    image: '/images/diamante images/1.jpg',
    images: ['/images/diamante images/1.jpg', '/images/diamante images/2.jpg'],
    location: 'REVA University',
    highlights: ['Web3 & Blockchain', 'Industry Collaboration', '100+ Participants', 'Faculty Support']
  },
  {
    id: '4',
    title: 'TechMania',
    description: 'A spectacular tech event bursting with excitement and high energy, featuring thrilling tech challenges and friendly competition.',
    fullDescription: 'Tech Mania burst with excitement and high energy, bringing everyone together for a day of thrilling tech challenges. Laughter and friendly competition filled the air as members dived into creative and brain-twisting games. It was an unforgettable experience packed with fun, learning, and team spirit! The games included Binary Bounty, Blind Coding, and Debugging challenges that tested participants\' technical skills and problem-solving abilities in an entertaining format.',
    date: '2024-02-22',
    type: 'competition',
    image: '/images/TechMania images/Picture6.jpg',
    images: ['/images/TechMania images/Picture6.jpg', '/images/TechMania images/Picture7.jpg', '/images/TechMania images/Picture8.jpg', '/images/TechMania images/Picture9.jpg'],
    location: 'ECE Department',
    highlights: ['Binary Bounty', 'Blind Coding', 'Debugging Challenge', 'Team Spirit']
  },
  {
    id: '5',
    title: 'Genesis',
    description: 'A vibrant celebration where our club transformed into a playful and energetic space with creative and entertaining games.',
    fullDescription: 'Genesis was a vibrant celebration where our club transformed into a playful and energetic space. Members dove into creative and entertaining games designed to spark joy and strengthen our bonds. The event radiated enthusiasm, making it a standout moment of laughter, friendly competition, and pure enjoyment for everyone. This foundational event established the community spirit and collaborative culture that would define our club\'s future activities.',
    date: '2023-11-01',
    type: 'seminar',
    image: '/images/genesis images/1.jpg',
    images: ['/images/genesis images/1.jpg', '/images/genesis images/2.jpg', '/images/genesis images/3.jpg'],
    location: 'ECE Department',
    highlights: ['Community Building', 'Creative Games', 'Team Bonding', 'Enthusiastic Participation']
  },
  {
    id: '6',
    title: 'Aarambha',
    description: 'The exciting start of our club led by Prof. Anitha Kumari, where founding members came together with great energy and eagerness.',
    fullDescription: 'Aarambha, held on November 1st, 2023, was the exciting start of our club, led by our wonderful coordinator, Prof. Anitha Kumari. All the founding members came together with great energy and eagerness to build a fun and welcoming community. The event was full of hope and excitement as we shared our goals and plans for the club\'s bright future. This inaugural event marked the official beginning of our journey toward creating a thriving tech community.',
    date: '2023-11-01',
    type: 'seminar',
    image: '/images/aarambha images/1.jpg',
    images: ['/images/aarambha images/1.jpg', '/images/aarambha images/2.jpg'],
    location: 'ECE Department',
    highlights: ['Inaugural Event', 'Prof. Anitha Kumari', 'Founding Members', 'Community Launch']
  }
];

export const upcomingEvents: Event[] = [
  {
    id: 'easyeda-2025-09-23',
    title: 'EasyEDA Workshop',
    description: 'PCB Design Workshop using EasyEDA Pro',
    fullDescription: 'Hands-on PCB Design Workshop using EasyEDA Pro. Learn the complete workflow: schematic capture, custom libraries, routing & layout techniques, exporting 2-layer PCBs, 2D/3D visualization, DRC checks, preparing Gerber files for manufacturing, and guidance on ordering PCBs through EasyEDA.',
    date: '2025-09-23',
    type: 'workshop',
    image: 'https://cdn.pixabay.com/photo/2016/06/08/05/44/circuit-1443251_1280.jpg',
    location: 'CV Raman Block (102/103)',
    registrationLink: 'https://forms.gle/95V5PVJw39gw9VzD8',
    highlights: ['9am - 4pm', '₹100 per head', 'Laptops compulsory', 'Hands-on session']
  }
];