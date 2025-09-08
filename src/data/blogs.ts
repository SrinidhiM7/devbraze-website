export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: 'web-dev' | 'ai-ml' | 'cybersecurity' | 'mobile' | 'blockchain' | 'iot';
  tags: string[];
  image: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React 18: New Features and Best Practices',
    excerpt: 'Explore the latest features in React 18 including Concurrent Features, Automatic Batching, and Suspense improvements.',
    content: 'React 18 brings exciting new features that improve performance and developer experience...',
    author: 'Arjun Sharma',
    date: '2024-12-10',
    readTime: '8 min read',
    category: 'web-dev',
    tags: ['React', 'JavaScript', 'Frontend', 'Performance'],
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: '2',
    title: 'Machine Learning for Beginners: Your First Neural Network',
    excerpt: 'A comprehensive guide to building your first neural network using Python and TensorFlow.',
    content: 'Machine learning might seem intimidating, but building your first neural network is easier than you think...',
    author: 'Aisha Rahman',
    date: '2024-12-05',
    readTime: '12 min read',
    category: 'ai-ml',
    tags: ['Machine Learning', 'Python', 'TensorFlow', 'Neural Networks'],
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: '3',
    title: 'Cybersecurity in 2024: Essential Practices for Developers',
    excerpt: 'Learn about the most important cybersecurity practices every developer should implement in their projects.',
    content: 'As cyber threats evolve, developers must stay ahead with robust security practices...',
    author: 'Karthik Reddy',
    date: '2024-11-28',
    readTime: '10 min read',
    category: 'cybersecurity',
    tags: ['Security', 'Best Practices', 'Web Security', 'Authentication'],
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: '4',
    title: 'Building Scalable APIs with Node.js and Express',
    excerpt: 'Best practices for creating robust, scalable REST APIs using Node.js, Express, and modern development patterns.',
    content: 'Building scalable APIs is crucial for modern web applications. Here\'s how to do it right...',
    author: 'Rohit Kumar',
    date: '2024-11-20',
    readTime: '15 min read',
    category: 'web-dev',
    tags: ['Node.js', 'Express', 'API', 'Backend', 'Scalability'],
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: '5',
    title: 'The Future of Mobile Development: React Native vs Flutter',
    excerpt: 'A detailed comparison of React Native and Flutter for cross-platform mobile development.',
    content: 'Choosing the right framework for mobile development is crucial. Let\'s compare the top contenders...',
    author: 'Sneha Gupta',
    date: '2024-11-15',
    readTime: '7 min read',
    category: 'mobile',
    tags: ['React Native', 'Flutter', 'Mobile Development', 'Cross-platform'],
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: '6',
    title: 'Introduction to Blockchain Development with Solidity',
    excerpt: 'Learn the basics of blockchain development and how to create smart contracts using Solidity.',
    content: 'Blockchain technology is revolutionizing many industries. Here\'s how to get started with development...',
    author: 'Arjun Sharma',
    date: '2024-11-10',
    readTime: '20 min read',
    category: 'blockchain',
    tags: ['Blockchain', 'Solidity', 'Smart Contracts', 'Ethereum'],
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: '7',
    title: 'IoT with Arduino: Building Your First Smart Device',
    excerpt: 'Step-by-step guide to creating IoT devices using Arduino and connecting them to the cloud.',
    content: 'Internet of Things is transforming how we interact with devices. Let\'s build something amazing...',
    author: 'Karthik Reddy',
    date: '2024-11-05',
    readTime: '18 min read',
    category: 'iot',
    tags: ['IoT', 'Arduino', 'Hardware', 'Sensors', 'Cloud'],
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: '8',
    title: 'Advanced CSS Techniques for Modern Web Design',
    excerpt: 'Explore advanced CSS features including Grid, Flexbox, Custom Properties, and animations for stunning web designs.',
    content: 'Modern CSS offers powerful tools for creating beautiful, responsive designs. Let\'s explore the advanced features...',
    author: 'Priya Patel',
    date: '2024-10-30',
    readTime: '14 min read',
    category: 'web-dev',
    tags: ['CSS', 'Web Design', 'Responsive', 'Animations'],
    image: '/api/placeholder/600/400',
    featured: false
  }
];

