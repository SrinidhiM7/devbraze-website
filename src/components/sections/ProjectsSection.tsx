'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Users, Star, Filter, Code, Smartphone, Brain, Blocks, Wifi, Monitor } from 'lucide-react'
import { projects, Project } from '@/data/projects'

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)
  const sectionRef = useRef<HTMLDivElement>(null)

  const categories = [
    { id: 'all', name: 'All Projects', icon: Filter },
    { id: 'web', name: 'Web', icon: Code },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'ai', name: 'AI/ML', icon: Brain },
    { id: 'blockchain', name: 'Blockchain', icon: Blocks },
    { id: 'iot', name: 'IoT', icon: Wifi },
    { id: 'desktop', name: 'Desktop', icon: Monitor }
  ]

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory))
    }
  }, [selectedCategory])



  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500'
      case 'in-progress':
        return 'bg-yellow-500'
      case 'planned':
        return 'bg-blue-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed'
      case 'in-progress':
        return 'In Progress'
      case 'planned':
        return 'Planned'
      default:
        return 'Unknown'
    }
  }

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="project-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group card-hover"
    >
      <div className="relative h-48 bg-gradient-to-br from-devbraze-blue/20 to-devbraze-purple/20">
        <div className="absolute inset-0 bg-devbraze-gradient opacity-20"></div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(project.status)}`}>
            {getStatusText(project.status)}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
            {project.category.toUpperCase()}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Code className="w-16 h-16 text-white/60" />
        </div>
      </div>

      <div className="p-4 xs:p-6">
        <h3 className="text-lg xs:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-devbraze-gradient transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-xs xs:text-sm mb-3 xs:mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-3 xs:mb-4">
          <div className="flex flex-wrap gap-1 xs:gap-2">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-devbraze-gradient/20 border border-devbraze-blue/30 rounded-lg text-xs text-devbraze-blue"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-600/20 border border-gray-500/30 rounded-lg text-xs text-gray-400">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-3 xs:mb-4">
          <div className="flex items-center gap-2 text-xs xs:text-sm text-gray-400">
            <Users className="w-3 h-3 xs:w-4 xs:h-4" />
            <span>{project.teamMembers.length} team member{project.teamMembers.length !== 1 ? 's' : ''}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 xs:gap-3">
          {project.githubLink && (
            <button className="flex-1 px-3 xs:px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-xs xs:text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-1 xs:gap-2">
              <Github className="w-3 h-3 xs:w-4 xs:h-4" />
              <span className="hidden xs:inline">Code</span>
              <span className="xs:hidden">Git</span>
            </button>
          )}
          {project.liveLink && (
            <button className="flex-1 px-3 xs:px-4 py-2 bg-devbraze-gradient rounded-lg text-white text-xs xs:text-sm font-medium hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-1 xs:gap-2">
              <ExternalLink className="w-3 h-3 xs:w-4 xs:h-4" />
              <span className="hidden xs:inline">Live Demo</span>
              <span className="xs:hidden">Demo</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" ref={sectionRef} className="py-20 dotted-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 xs:mb-12"
        >
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg xs:text-xl text-gray-400 max-w-3xl mx-auto mb-6 xs:mb-8 px-4 xs:px-0">
            Innovative solutions built by our community members, showcasing the power of 
            collaborative learning and cutting-edge technology.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 xs:mb-8 px-2 xs:px-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 xs:px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-sm xs:text-base ${
                  selectedCategory === category.id
                    ? 'bg-devbraze-gradient text-white'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <category.icon className="w-3 h-3 xs:w-4 xs:h-4" />
                <span className="hidden xs:inline">{category.name}</span>
                <span className="xs:hidden">{category.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 mb-12 xs:mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 xs:py-16">
            <Code className="w-12 h-12 xs:w-16 xs:h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl xs:text-2xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-gray-400 px-4 xs:px-0">
              No projects found in this category. Try selecting a different category.
            </p>
          </div>
        )}

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 xs:gap-8 mb-12 xs:mb-16"
        >
          <div className="text-center p-4 xs:p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl">
            <h4 className="text-2xl xs:text-3xl font-bold gradient-text mb-2">{projects.length}</h4>
            <p className="text-gray-400 text-sm xs:text-base">Total Projects</p>
          </div>
          <div className="text-center p-4 xs:p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl">
            <h4 className="text-2xl xs:text-3xl font-bold gradient-text mb-2">
              {projects.filter(p => p.status === 'completed').length}
            </h4>
            <p className="text-gray-400 text-sm xs:text-base">Completed Projects</p>
          </div>
          <div className="text-center p-4 xs:p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl">
            <h4 className="text-2xl xs:text-3xl font-bold gradient-text mb-2">
              {new Set(projects.flatMap(p => p.technologies)).size}
            </h4>
            <p className="text-gray-400 text-sm xs:text-base">Technologies Used</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-devbraze-blue/10 to-devbraze-purple/10 border border-white/10 rounded-2xl p-6 xs:p-8">
            <h3 className="text-xl xs:text-2xl font-bold text-white mb-4">
              Have a Project Idea?
            </h3>
            <p className="text-gray-400 mb-4 xs:mb-6 max-w-2xl mx-auto text-sm xs:text-base px-4 xs:px-0">
              Join {"</DevBraze>"} and turn your ideas into reality. Collaborate with talented peers, 
              learn new technologies, and build something amazing together.
            </p>
            <motion.button
              onClick={() => document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 xs:px-8 py-3 xs:py-4 bg-devbraze-gradient rounded-full text-white font-semibold hover:shadow-2xl transition-all duration-300 text-sm xs:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building With Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
