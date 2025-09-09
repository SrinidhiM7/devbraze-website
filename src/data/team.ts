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
    name: 'Srinidhi',
    role: 'President',
    image: '/team/srinidhi.png',
    bio: 'Visionary leader driving </DevBraze> forward with passion for technology and innovation. Leading the community with a commitment to excellence and collaborative growth.',
    skills: ['Leadership', 'Full-Stack Development', 'Project Management', 'Strategic Planning', 'Community Building'],
    social: {
      github: 'https://github.com/srinidhi',
      linkedin: 'https://linkedin.com/in/srinidhi',
      email: 'srinidhi@devbraze.com'
    }
  },
  {
    id: '2',
    name: 'Vedha',
    role: 'Vice President',
    image: '/team/vedha.png',
    bio: 'Dynamic leader supporting the president in driving organizational growth and community development. Passionate about technology and student empowerment.',
    skills: ['Leadership', 'Operations Management', 'Team Coordination', 'Strategic Planning', 'Communication'],
    social: {
      github: 'https://github.com/vedha',
      linkedin: 'https://linkedin.com/in/vedha',
      email: 'vedha@devbraze.com'
    }
  },
  {
    id: '3',
    name: 'Chirag',
    role: 'Treasurer',
    image: '/team/chirag.png',
    bio: 'Financial expert managing </DevBraze> resources efficiently. Ensures transparent financial operations and sustainable growth of the organization.',
    skills: ['Financial Management', 'Budget Planning', 'Analytics', 'Resource Allocation', 'Accounting'],
    social: {
      github: 'https://github.com/chirag',
      linkedin: 'https://linkedin.com/in/chirag',
      email: 'chirag@devbraze.com'
    }
  },
  {
    id: '4',
    name: 'Aniketh',
    role: 'Tech Lead',
    image: '/team/aniketh.png',
    bio: 'Technical visionary leading all technology initiatives and development projects. Passionate about cutting-edge technologies and mentoring fellow developers.',
    skills: ['Full-Stack Development', 'GenAI', 'AI/ML', 'Technical Leadership', 'Code Review', 'Mentoring'],
    social: {
      github: 'https://github.com/aniketh',
      linkedin: 'https://linkedin.com/in/aniketh',
      email: 'aniketh@devbraze.com'
    }
  },
  {
    id: '5',
    name: 'Jeevitha',
    role: 'Design Lead',
    image: '/team/jeevitha.png',
    bio: 'Creative designer crafting beautiful and intuitive user experiences. Leading the visual identity and design system of </DevBraze> with innovation and style.',
    skills: ['UI/UX Design', 'Graphic Design', 'Design Systems', 'Prototyping', 'Brand Identity'],
    social: {
      github: 'https://github.com/raju',
      linkedin: 'https://linkedin.com/in/raju',
      email: 'raju@devbraze.com'
    }
  },
  {
    id: '6',
    name: 'Viha',
    role: 'Marketing Lead',
    image: '/team/viha.png',
    bio: 'Marketing strategist promoting </DevBraze> and expanding community reach. Expert in digital marketing and brand development initiatives.',
    skills: ['Digital Marketing', 'Brand Strategy', 'Content Marketing', 'SEO', 'Campaign Management'],
    social: {
      github: 'https://github.com/viha',
      linkedin: 'https://linkedin.com/in/viha',
      email: 'viha@devbraze.com'
    }
  },
  {
    id: '7',
    name: 'Manoj',
    role: 'Social Media Lead',
    image: '/team/manoj.png',
    bio: 'Social media expert managing </DevBraze> online presence and community engagement. Creating compelling content and building strong online communities.',
    skills: ['Social Media Management', 'Content Creation', 'Community Engagement', 'Analytics', 'Influencer Relations'],
    social: {
      github: 'https://github.com/manoj',
      linkedin: 'https://linkedin.com/in/manoj',
      email: 'manoj@devbraze.com'
    }
  },
  {
    id: '8',
    name: 'Affan',
    role: 'Event Management Lead',
    image: '/team/affan.png',
    bio: 'Event coordination expert ensuring flawless execution of all </DevBraze> events and workshops. Passionate about creating memorable experiences for the community.',
    skills: ['Event Planning', 'Project Management', 'Logistics', 'Vendor Management', 'Team Coordination'],
    social: {
      github: 'https://github.com/affan',
      linkedin: 'https://linkedin.com/in/affan',
      email: 'affan@devbraze.com'
    }
  }
];
