'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Youtube, Github } from 'lucide-react'
import { learningResources, ResourceCategory } from '@/data/resources'

export default function ResourcesSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  

  const getIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'youtube-channels':
        return <Youtube className="w-6 h-6 text-white" />
      case 'github-resources':
        return <Github className="w-6 h-6 text-white" />
      default:
        return <ExternalLink className="w-6 h-6 text-white" />
    }
  }

  const getGradient = (index: number) => {
    const gradients = [
      { fallback: 'bg-blue-500', gradient: 'from-blue-500 to-cyan-500' },
      { fallback: 'bg-purple-500', gradient: 'from-purple-500 to-pink-500' },
      { fallback: 'bg-green-500', gradient: 'from-green-500 to-emerald-500' },
      { fallback: 'bg-yellow-500', gradient: 'from-yellow-500 to-orange-500' },
      { fallback: 'bg-red-500', gradient: 'from-red-500 to-pink-500' }
    ]
    const selected = gradients[index % gradients.length]
    return `${selected.fallback} bg-gradient-to-r ${selected.gradient}`
  }

  return (
    <section id="resources" className="py-20 dotted-bg-primary relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 xs:mb-16"
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Learning <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-lg xs:text-xl text-gray-300 max-w-3xl mx-auto px-4 xs:px-0 drop-shadow-md">
            Essential resources and documentation to accelerate your development journey
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {learningResources.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 xs:mb-16 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {learningResources[activeCategory].items.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-black/60 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-3 ${getGradient(index)} rounded-xl shadow-lg`}>
                      {getIcon(learningResources[activeCategory].id)}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {resource.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs px-2 py-1 bg-cyan-900/30 text-cyan-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 font-medium hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400 transition-all duration-300 text-sm"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Visit Resource
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        
      </div>
    </section>
  )
}