# </DevBraze> Website

A modern, futuristic website for </DevBraze> - the technical community of School of ECE. Built with Next.js, TailwindCSS, and Framer Motion for stunning animations and a professional user experience.

![</DevBraze>](./public/DevBraze%20Logo%20Blue%20Border.png)

## 🚀 Features

### ✨ Futuristic Design
- **Dark cyber theme** with elegant black background and neon accents
- **Cyan-purple gradient system** for a modern tech aesthetic
- **Glass morphism effects** with backdrop blur and transparency
- **Responsive design** optimized for mobile-first approach
- **Orbitron font** for headings to enhance the futuristic feel

### 🎬 Stunning Animations
- **Hero section** with pulsing elements and cyber effects
- **Framer Motion animations** for smooth and performant transitions
- **Proper circular team slider** with orbital member positioning
- **2-grid achievement slider** showcasing member accomplishments
- **Holographic effects** and cyber glow animations
- **Matrix-style background patterns** for depth

### 📱 Sections & Components

1. **Hero Section**
   - Centered </DevBraze> logo with low opacity behind heading
   - Animated gradient border on logo
   - Social media icons in bottom right corner
   - Statistics showcase (3 stats: Members, Events, Projects)

2. **About Section**
   - Mission, vision, and impact
   - Core values with animated icons
   - School of ECE information
   - Interactive cards with hover effects

3. **Events Section**
   - Past events in 2x2 grid layout
   - Simplified upcoming events with email subscription
   - Clean "no upcoming events" state
   - Registration and notification system

4. **Team Section**
   - Proper circular team slider with orbital positioning
   - Individual member profiles with holographic effects
   - Skills and social links
   - Team statistics with cyber styling

5. **Projects Section**
   - Filterable project cards
   - Technology stack display
   - Project status indicators
   - GitHub and live demo links

6. **Achievements Section**
   - 2-grid sideways slider for member achievements
   - Hackathon wins and recognition showcase
   - Animated achievement cards
   - Stats overview with futuristic styling

7. **Resources Section**
   - Minimal design with essential resources
   - Three main resource categories
   - Newsletter subscription
   - Clean and focused layout

8. **Join Us Section**
   - Application form with validation
   - Benefits showcase
   - Form submission handling
   - Success/error states

9. **Footer**
   - Social media links
   - Quick navigation
   - Contact information
   - Newsletter signup

### 🛠️ Technical Features
- **Next.js App Router** for modern React development
- **TypeScript** for type safety
- **TailwindCSS** for utility-first styling
- **Framer Motion** for smooth UI transitions and animations
- **Lucide React** for consistent icons
- **Mobile-first responsive design**
- **Futuristic cyber theme** as default
- **Smooth scrolling** navigation
- **Form validation** with error handling
- **SEO optimized** with proper meta tags
- **No Anime.js dependency** for better performance

## 🎨 Design System

### Colors
```css
/* Primary Colors */
--background: #000000        /* Black background */
--foreground: #FFFFFF        /* White text */

/* Futuristic Cyber Palette */
--cyber-cyan: #00d9ff       /* Primary accent */
--cyber-purple: #a855f7     /* Secondary accent */
--cyber-pink: #ec4899       /* Tertiary accent */
--cyber-blue: #3b82f6       /* Supporting blue */
--cyber-green: #10b981      /* Success states */
--neon-yellow: #fbbf24      /* Warning states */

/* Glass morphism and borders */
--glass: rgba(255, 255, 255, 0.05)
--border: rgba(0, 217, 255, 0.3)
```

### Typography
- **Primary Font**: Inter (Google Fonts) for body text
- **Display Font**: Orbitron (Google Fonts) for futuristic headings
- **Headings**: Bold weights with cyber gradient text effects
- **Body**: Regular weight with high contrast
- **Code**: Monospace for technical content

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd DevBraze_Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
DevBraze_Website/
├── public/
│   └── DevBraze Logo Blue Border.png    # Logo and favicon
├── src/
│   ├── app/
│   │   ├── globals.css                  # Global styles
│   │   ├── layout.tsx                   # Root layout
│   │   └── page.tsx                     # Main page
│   ├── components/
│   │   ├── sections/                    # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── EventsSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ResourcesSection.tsx
│   │   │   ├── AchievementsSection.tsx
│   │   │   └── JoinUsSection.tsx
│   │   ├── Header.tsx                   # Navigation header
│   │   ├── Footer.tsx                   # Site footer
│   │   └── ThemeProvider.tsx            # Theme context
│   ├── data/                           # Static data
│   │   ├── events.ts                   # Event data
│   │   ├── team.ts                     # Team member data
│   │   ├── projects.ts                 # Project data
│   │   ├── blogs.ts                    # Blog post data
│   │   └── achievements.ts             # Achievement data
│   └── lib/                           # Utilities
├── tailwind.config.js                 # Tailwind configuration
├── tsconfig.json                      # TypeScript configuration
└── package.json                       # Dependencies
```

## 🎯 Key Features Breakdown

### Animation System
- **Framer Motion**: Smooth UI component animations and transitions
- **CSS Animations**: Custom keyframes for cyber effects
- **Tailwind Animations**: Built-in animation utilities
- **Intersection Observer**: Scroll-triggered animations

### Responsive Design
- **Mobile-first approach**: Optimized for mobile devices
- **Breakpoint system**: sm, md, lg, xl breakpoints
- **Flexible grid layouts**: CSS Grid and Flexbox
- **Touch-friendly**: Large tap targets and gestures

### Performance Optimizations
- **Next.js Image**: Optimized image loading
- **Code splitting**: Automatic route-based splitting
- **Lazy loading**: Intersection Observer for sections
- **Bundle optimization**: Tree shaking and minification

## 🎨 Customization

### Updating Content
- **Events**: Edit `src/data/events.ts`
- **Team**: Edit `src/data/team.ts`
- **Projects**: Edit `src/data/projects.ts`
- **Blogs**: Edit `src/data/blogs.ts`
- **Achievements**: Edit `src/data/achievements.ts`

### Styling
- **Colors**: Update `tailwind.config.js`
- **Components**: Modify files in `src/components/`
- **Global styles**: Edit `src/app/globals.css`

### Adding New Sections
1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Update navigation in `src/components/Header.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **</DevBraze> Community** for inspiration and requirements
- **School of ECE** for supporting the initiative
- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Anime.js** for powerful animations

## 📞 Contact

For questions, suggestions, or support:
- **Email**: contact@devbraze.com
- **GitHub**: [</DevBraze> GitHub](https://github.com/devbraze)
- **LinkedIn**: [</DevBraze> LinkedIn](https://linkedin.com/company/devbraze)

---

**Built with ❤️ by </DevBraze> Community**
