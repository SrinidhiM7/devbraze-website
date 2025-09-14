'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Mail, Youtube, Github } from 'lucide-react'
import { learningResources, ResourceCategory } from '@/data/resources'

export default function ResourcesSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

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
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-emerald-500',
      'from-yellow-500 to-orange-500',
      'from-red-500 to-pink-500'
    ]
    return gradients[index % gradients.length]
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
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
            Learning <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-lg xs:text-xl text-gray-400 max-w-3xl mx-auto px-4 xs:px-0">
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
                    <div className={`p-3 bg-gradient-to-r ${getGradient(index)} rounded-xl`}>
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

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-black/60 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-6 xs:p-8">
              <h3 className="text-xl xs:text-2xl font-bold text-white mb-3 xs:mb-4">
                Stay Updated with Resources
              </h3>
              <p className="text-gray-400 mb-4 xs:mb-6 text-sm xs:text-base px-2 xs:px-0">
                Subscribe to get notified when we add new resources and learning materials
              </p>
              
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 xs:gap-4">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 xs:w-5 xs:h-5 text-cyan-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full pl-9 xs:pl-10 pr-3 xs:pr-4 py-2.5 xs:py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm xs:text-base"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubscribed}
                    className="px-4 xs:px-6 py-2.5 xs:py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm xs:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                  </motion.button>
                </div>
              </form>
              
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 xs:mt-4 text-green-400 font-medium text-sm xs:text-base"
                >
                  ✓ Successfully subscribed! You'll get updates about new resources.
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}