export interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  items: ResourceItem[];
}

export interface ResourceItem {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export const learningResources: ResourceCategory[] = [
  {
    id: 'youtube-channels',
    title: 'YouTube Channels',
    description: 'Top educational YouTube channels for developers',
    items: [
      {
        id: 'youtube-1',
        title: 'freeCodeCamp.org',
        url: 'https://www.youtube.com/c/Freecodecamp',
        description: 'Full-stack web, JavaScript, Python, CS basics, projects, career talks',
        tags: ['web', 'javascript', 'python', 'cs-basics'],
        featured: true
      },
      {
        id: 'youtube-2',
        title: 'Traversy Media',
        url: 'https://www.youtube.com/c/TraversyMedia',
        description: 'Web dev, JS/TS, Node, React, APIs, tooling',
        tags: ['web', 'javascript', 'typescript', 'node', 'react']
      },
      {
        id: 'youtube-3',
        title: 'The Net Ninja',
        url: 'https://www.youtube.com/c/TheNetNinja',
        description: 'Web dev, modern JS/TS, React/Vue, Node, Firebase',
        tags: ['web', 'javascript', 'typescript', 'react', 'vue', 'node', 'firebase']
      },
      {
        id: 'youtube-4',
        title: 'Fireship',
        url: 'https://www.youtube.com/c/Fireship',
        description: 'Web frameworks, cloud, Firebase, dev tools, quick overviews',
        tags: ['web', 'frameworks', 'cloud', 'firebase', 'tools']
      },
      {
        id: 'youtube-5',
        title: 'Tech With Tim',
        url: 'https://www.youtube.com/c/TechWithTim',
        description: 'Python, automation, beginner CS, projects',
        tags: ['python', 'automation', 'cs-basics', 'tutorials']
      },
      {
        id: 'youtube-6',
        title: 'Kevin Powell',
        url: 'https://www.youtube.com/c/KevinPowell',
        description: 'CSS, responsive design, UI best practices',
        tags: ['css', 'frontend', 'ui-ux', 'design']
      },
      {
        id: 'youtube-7',
        title: 'The Coding Train',
        url: 'https://www.youtube.com/c/TheCodingTrain',
        description: 'Creative coding, JavaScript, p5.js, visualizations',
        tags: ['creative-coding', 'javascript', 'p5js', 'visualization']
      },
      {
        id: 'youtube-8',
        title: 'Web Dev Simplified',
        url: 'https://www.youtube.com/c/WebDevSimplified',
        description: 'Web dev, JS/TS, React, performance, architecture tips',
        tags: ['web', 'javascript', 'typescript', 'react', 'performance']
      }
    ]
  },
  {
    id: 'github-resources',
    title: 'GitHub Resources',
    description: 'Open source projects and contribution opportunities',
    items: [
      {
        id: 'github-1',
        title: 'Awesome (master list)',
        url: 'https://github.com/sindresorhus/awesome',
        description: 'Curated "awesome-lists" across languages, frameworks, tools',
        tags: ['resources', 'lists', 'tools', 'frameworks']
      },
      {
        id: 'github-2',
        title: 'Awesome for Beginners',
        url: 'https://github.com/MunGell/awesome-for-beginners',
        description: 'Beginner-friendly OSS issues by language/ecosystem',
        tags: ['open-source', 'beginner-friendly', 'contribution']
      },
      {
        id: 'github-3',
        title: 'Good First Issue',
        url: 'https://goodfirstissue.dev',
        description: 'First-timer OSS issues aggregated from popular repos',
        tags: ['open-source', 'beginner-friendly', 'contribution']
      },
      {
        id: 'github-4',
        title: 'Trending Repositories',
        url: 'https://github.com/trending',
        description: 'Daily trending repos for discovery and learning',
        tags: ['trending', 'discovery', 'learning']
      },
      {
        id: 'github-5',
        title: 'How to Find Good First Issues',
        url: 'https://www.freecodecamp.org/news/how-to-find-good-first-issues-on-github/',
        description: 'OSS onboarding, contribution workflow, issue discovery',
        tags: ['tutorial', 'open-source', 'contribution-guide']
      }
    ]
  },
  {
    id: 'roadmaps',
    title: 'Learning Roadmaps',
    description: 'Structured learning paths for different development roles',
    items: [
      {
        id: 'roadmap-1',
        title: 'Developer Roadmaps',
        url: 'https://roadmap.sh',
        description: 'Role-based roadmaps for frontend, backend, DevOps, mobile, and more',
        tags: ['learning-path', 'career', 'roadmap']
      },
      {
        id: 'roadmap-2',
        title: 'Full-Stack Roadmap',
        url: 'https://roadmap.sh/full-stack',
        description: 'Frontend, backend, databases, deployment, and tooling sequence',
        tags: ['fullstack', 'web', 'learning-path']
      },
      {
        id: 'roadmap-3',
        title: 'Frontend Roadmap',
        url: 'https://roadmap.sh/frontend',
        description: 'HTML, CSS, JS/TS, frameworks, testing, and performance',
        tags: ['frontend', 'web', 'learning-path']
      },
      {
        id: 'roadmap-4',
        title: 'DevOps Roadmap',
        url: 'https://roadmap.sh/devops',
        description: 'Linux, networking, CI/CD, containers, IaC, cloud, and monitoring',
        tags: ['devops', 'cloud', 'learning-path']
      }
    ]
  },
  {
    id: 'documentation',
    title: 'Documentation',
    description: 'Essential documentation and references',
    items: [
      {
        id: 'docs-1',
        title: 'MDN Web Docs',
        url: 'https://developer.mozilla.org',
        description: 'HTML, CSS, JavaScript, Web APIs, HTTP, browser guides',
        tags: ['web', 'documentation', 'reference']
      },
      {
        id: 'docs-2',
        title: 'DevDocs',
        url: 'https://devdocs.io',
        description: 'Unified, fast docs for many languages, libraries, and frameworks',
        tags: ['documentation', 'reference', 'api']
      },
      {
        id: 'docs-3',
        title: 'W3Schools',
        url: 'https://www.w3schools.com',
        description: 'Web basics tutorials and references (HTML, CSS, JS, SQL, etc.)',
        tags: ['web', 'tutorials', 'reference']
      },
      {
        id: 'docs-4',
        title: 'cdnjs',
        url: 'https://cdnjs.com',
        description: 'Frontend libraries/CDN hosting and versions for quick prototyping',
        tags: ['cdn', 'libraries', 'frontend']
      }
    ]
  },
  {
    id: 'courses',
    title: 'Courses & Learning',
    description: 'Structured learning platforms and courses',
    items: [
      {
        id: 'course-1',
        title: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org',
        description: 'Full-stack curriculum, JS, Python, databases, projects, certifications',
        tags: ['web', 'fullstack', 'free', 'certification']
      },
      {
        id: 'course-2',
        title: 'The Odin Project',
        url: 'https://www.theodinproject.com',
        description: 'Full-stack web (HTML/CSS/JS), Node, Ruby on Rails, projects',
        tags: ['web', 'fullstack', 'free', 'projects']
      },
      {
        id: 'course-3',
        title: 'Coursera (Software Development)',
        url: 'https://www.coursera.org/browse/computer-science/software-development',
        description: 'Software engineering, languages, tooling, testing, specialization paths',
        tags: ['courses', 'certification', 'paid']
      },
      {
        id: 'course-4',
        title: 'Pluralsight',
        url: 'https://www.pluralsight.com',
        description: 'Intermediate/advanced dev, cloud, DevOps, security, tooling',
        tags: ['courses', 'advanced', 'paid']
      }
    ]
  },
  {
    id: 'practice',
    title: 'Coding Practice',
    description: 'Platforms to practice coding and problem-solving',
    items: [
      {
        id: 'practice-1',
        title: 'LeetCode',
        url: 'https://leetcode.com',
        description: 'Data structures, algorithms, interview prep',
        tags: ['algorithms', 'interview-prep', 'practice']
      },
      {
        id: 'practice-2',
        title: 'HackerRank',
        url: 'https://www.hackerrank.com',
        description: 'Algorithms, data structures, SQL, 30-day challenges',
        tags: ['algorithms', 'sql', 'challenges']
      },
      {
        id: 'practice-3',
        title: 'Codewars',
        url: 'https://codewars.com',
        description: 'Language katas for syntax fluency and TDD habits',
        tags: ['practice', 'katas', 'tdd']
      },
      {
        id: 'practice-4',
        title: 'Exercism',
        url: 'https://exercism.org',
        description: 'Language tracks with mentoring and tests',
        tags: ['practice', 'mentoring', 'languages']
      },
      {
        id: 'practice-5',
        title: 'Frontend Mentor',
        url: 'https://www.frontendmentor.io',
        description: 'Frontend UI challenges with real-world briefs',
        tags: ['frontend', 'ui', 'challenges']
      }
    ]
  }
];
