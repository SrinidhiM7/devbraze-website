export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Arjun Sharma',
    role: 'President & Lead Developer',
    image: '/api/placeholder/150/150',
    bio: 'Final year ECE student passionate about full-stack development and AI. Leading </DevBraze> with vision to create impactful tech solutions.',
    skills: ['React', 'Node.js', 'Python', 'Machine Learning', 'Leadership'],
    social: {
      github: 'https://github.com/arjunsharma',
      linkedin: 'https://linkedin.com/in/arjunsharma',
      email: 'arjun@devbraze.com'
    }
  },
  {
    id: '2',
    name: 'Priya Patel',
    role: 'Vice President & UI/UX Designer',
    image: '/api/placeholder/150/150',
    bio: 'Creative designer and frontend developer focused on creating intuitive user experiences. Believes in the power of good design.',
    skills: ['Figma', 'React', 'CSS', 'Design Systems', 'User Research'],
    social: {
      github: 'https://github.com/priyapatel',
      linkedin: 'https://linkedin.com/in/priyapatel',
      email: 'priya@devbraze.com'
    }
  },
  {
    id: '3',
    name: 'Rohit Kumar',
    role: 'Technical Lead & Backend Developer',
    image: '/api/placeholder/150/150',
    bio: 'Backend enthusiast with expertise in scalable systems and cloud architecture. Passionate about performance optimization.',
    skills: ['Node.js', 'Python', 'AWS', 'Docker', 'MongoDB'],
    social: {
      github: 'https://github.com/rohitkumar',
      linkedin: 'https://linkedin.com/in/rohitkumar',
      email: 'rohit@devbraze.com'
    }
  },
  {
    id: '4',
    name: 'Sneha Gupta',
    role: 'Events Coordinator & Frontend Developer',
    image: '/api/placeholder/150/150',
    bio: 'Event management expert and React developer. Ensures smooth execution of all </DevBraze> events and workshops.',
    skills: ['React', 'JavaScript', 'Event Management', 'Communication', 'TypeScript'],
    social: {
      github: 'https://github.com/snehagupta',
      linkedin: 'https://linkedin.com/in/snehagupta',
      email: 'sneha@devbraze.com'
    }
  },
  {
    id: '5',
    name: 'Karthik Reddy',
    role: 'Cybersecurity Head & DevOps Engineer',
    image: '/api/placeholder/150/150',
    bio: 'Security researcher and DevOps expert ensuring robust and secure systems. Advocates for cybersecurity awareness.',
    skills: ['Cybersecurity', 'Docker', 'Kubernetes', 'Linux', 'Penetration Testing'],
    social: {
      github: 'https://github.com/karthikreddy',
      linkedin: 'https://linkedin.com/in/karthikreddy',
      email: 'karthik@devbraze.com'
    }
  },
  {
    id: '6',
    name: 'Aisha Rahman',
    role: 'AI/ML Lead & Data Scientist',
    image: '/api/placeholder/150/150',
    bio: 'AI enthusiast working on cutting-edge machine learning projects. Leads ML workshops and research initiatives.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Science', 'Computer Vision'],
    social: {
      github: 'https://github.com/aisharahman',
      linkedin: 'https://linkedin.com/in/aisharahman',
      email: 'aisha@devbraze.com'
    }
  },
  {
    id: '7',
    name: 'Vikram Singh',
    role: 'Mobile App Developer & IoT Specialist',
    image: '/api/placeholder/150/150',
    bio: 'Mobile development expert specializing in cross-platform applications and IoT integration. Passionate about emerging technologies.',
    skills: ['React Native', 'Flutter', 'IoT', 'Arduino', 'Firebase'],
    social: {
      github: 'https://github.com/vikramsingh',
      linkedin: 'https://linkedin.com/in/vikramsingh',
      email: 'vikram@devbraze.com'
    }
  },
  {
    id: '8',
    name: 'Meera Joshi',
    role: 'Content Lead & Technical Writer',
    image: '/api/placeholder/150/150',
    bio: 'Technical writing expert and content strategist. Creates engaging technical documentation and educational content for the community.',
    skills: ['Technical Writing', 'Content Strategy', 'Documentation', 'SEO', 'Marketing'],
    social: {
      github: 'https://github.com/meerajoshi',
      linkedin: 'https://linkedin.com/in/meerajoshi',
      email: 'meera@devbraze.com'
    }
  },
  {
    id: '9',
    name: 'Rahul Nair',
    role: 'Web3 Developer & Blockchain Researcher',
    image: '/api/placeholder/150/150',
    bio: 'Blockchain enthusiast exploring decentralized technologies and smart contracts. Leading Web3 initiatives and research projects.',
    skills: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts', 'DeFi'],
    social: {
      github: 'https://github.com/rahulnair',
      linkedin: 'https://linkedin.com/in/rahulnair',
      email: 'rahul@devbraze.com'
    }
  },
  {
    id: '10',
    name: 'Kavya Iyer',
    role: 'Community Manager & Social Media Lead',
    image: '/api/placeholder/150/150',
    bio: 'Community building expert focused on growing and engaging the DevBraze community. Manages social media presence and outreach programs.',
    skills: ['Community Management', 'Social Media', 'Public Relations', 'Event Planning', 'Networking'],
    social: {
      github: 'https://github.com/kavyaiyer',
      linkedin: 'https://linkedin.com/in/kavyaiyer',
      email: 'kavya@devbraze.com'
    }
  }
];
