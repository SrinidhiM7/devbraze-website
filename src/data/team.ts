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
    instagram?: string;
    email?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Srinidhi M',
    role: 'President',
    image: '/team/srinidhi.png',
    bio: 'An aspiring Electronics and Communication Engineer with a strong passion for intelligent systems, automation, and real-time applications. Bridging the gap between hardware and software to create innovative solutions that make a real difference. When not coding or building projects, you\'ll find him on the football pitch, capturing moments through his DSLR lens, or exploring new places.',
    skills: ['ML & Deep Learning', 'Embedded C & IoT', 'Microcontrollers', 'Python', 'App Development', 'Web Development'],
    social: {
      github: 'https://github.com/srinidhim7',
      linkedin: 'https://www.linkedin.com/in/srinidhi-m-839290261',
      instagram: 'https://www.instagram.com/srinidhi_m7',
      email: 'srinidhim384@gmail.com'
    }
  },
  {
    id: '2',
    name: 'Vedhashri M',
    role: 'Vice President',
    image: '/team/vedha.png',
    bio: 'A passionate designer and public speaker who brings creativity and vision to every project. With a keen eye for design and exceptional communication skills, she leads by example and inspires others to achieve excellence. Always ready to take on new challenges and drive organizational growth.',
    skills: ['Designing', 'Public Speaking', 'Leadership', 'Team Coordination', 'Strategic Planning'],
    social: {
      linkedin: 'https://www.linkedin.com/in/vedhashri-magesh-701878309',
      email: 'vedhashrimagesh@gmail.com'
    }
  },
  {
    id: '3',
    name: 'Chirag Sharma',
    role: 'Treasurer',
    image: '/team/chirag.png',
    bio: 'A dedicated robotics enthusiast and skilled programmer who brings technical excellence to financial management. With expertise in ROS, robotics, and multiple programming languages, he ensures transparent financial operations while contributing to innovative technical solutions. His systematic approach makes him perfect for managing organizational resources.',
    skills: ['ROS', 'Robotics and Automation', 'C++', 'Python', 'NodeRed', 'Git', 'Finance'],
    social: {
      github: 'https://github.com/Chirag-Sharma-04',
      linkedin: 'https://www.linkedin.com/in/chirag-sharma-cs',
      instagram: 'https://www.instagram.com/chiragsharma728/',
      email: 'chiragcs2004@gmail.com'
    }
  },
  {
    id: '4',
    name: 'Aniketh Bhosale',
    role: 'Technical Team Lead',
    image: '/team/aniketh.png',
    bio: 'A passionate technology enthusiast and natural leader who thrives on innovation and problem-solving. With a strong foundation in full-stack development and AI/ML, he guides the technical direction of DevBraze while mentoring fellow developers. His curiosity and dedication drive the team towards cutting-edge solutions.',
    skills: ['Full-Stack Dev', 'GenAI', 'AI/ML', 'Tech Leadership', 'Code Review', 'Mentoring'],
    social: {
      github: 'https://github.com/AnikethBhosale',
      linkedin: 'https://www.linkedin.com/in/aniketh-bhosale-849480250/',
      instagram: 'https://www.instagram.com/aniketh_bhosale/',
      email: 'anikethbhosale11@gmail.com'
    }
  },
  {
    id: '5',
    name: 'Jeevitha K H',
    role: 'Design and Content Team Lead',
    image: '/team/jeevitha.png',
    bio: 'Creative designer crafting beautiful and intuitive user experiences. Leading the visual identity and design system of DevBraze with innovation and style, ensuring every design element tells a story and enhances user engagement.',
    skills: ['Digital Illustration', 'Graphic Design', 'Content Creation', 'Programming', 'Engineering', 'Creative Writing'],
    social: {
      linkedin: 'https://www.linkedin.com/in/jeevitha-h-gowda-17a977203',
      email: 'jeevithakh7@gmail.com'
    }
  },
  {
    id: '6',
    name: 'Viha Shomikha A S',
    role: 'Marketing Lead',
    image: '/team/viha.png',
    bio: 'A dynamic marketing strategist with excellent communication skills and a passion for coding. Lives by the motto "Eat, Sleep, Repeat" while tirelessly working to promote DevBraze and expand community reach through innovative digital marketing strategies and engaging public speaking.',
    skills: ['Digital Marketing', 'Brand Strategy', 'Public Speaking', 'Coding', 'Campaign Mgmt'],
    social: {
      github: 'https://github.com/VihaShomikha',
      linkedin: 'https://www.linkedin.com/in/vihashomikhaas',
      email: 'vihashomikhaas@gmail.com'
    }
  },
  {
    id: '7',
    name: 'Manoj Reddy',
    role: 'Head of social media',
    image: '/team/manoj.jpg',
    bio: 'Visual Storyteller, meticulous eye for photography and videography. Driven by a passion for the craft and an unwavering dedication to the final product and Possesses a strong work ethic and a meticulous, goal-oriented approach. Committed to investing the time and effort necessary to achieve exceptional results on every project',
    skills: ['Photography', 'Video Editing', 'Designing'],
    social: {
      github: 'https://github.com/ManojReddy246',
      linkedin: 'https://www.linkedin.com/in/manoj-reddy-421873382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/themanojverse?igsh=MzM3aG53ejIxd3B5',
      email: 'manojreddy2003mkd@gmail.com'
    }
  },
  {
    id: '8',
    name: 'Mohammed Affaan',
    role: 'Event Management Lead',
    image: '/team/affan.png',
    bio: 'A curious fast learner with exceptional communication skills and a passion for event organization. Aiming to be a Robotics Engineer while expertly coordinating all DevBraze events and workshops. His crowd management expertise and organizational skills ensure flawless execution of memorable community experiences.',
    skills: ['Communication', 'Python', 'Crowd Mgmt', 'Event Planning', 'Project Mgmt', 'Team Coordination'],
    social: {
      linkedin: 'https://www.linkedin.com/in/mohd-affaan-sharif-2386a0291',
      email: 'mohammedaffaan733@gmail.com'
    }
  }
];
