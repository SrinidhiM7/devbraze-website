'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Mail, Zap, Code, Terminal } from 'lucide-react'

export default function ResourcesSection() {
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

  const resources = [
    {
      title: "Technical Documentation",
      description: "Comprehensive guides and API documentation for our projects",
      link: "#",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Project Templates",
      description: "Starter templates for various tech stacks and frameworks",
      link: "#", 
      icon: Code,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Learning Resources",
      description: "Curated list of tutorials, courses, and learning materials",
      link: "#",
      icon: Terminal,
      color: "from-purple-500 to-pink-500"
    }
  ]

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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learning <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Essential resources and documentation to accelerate your development journey
          </p>
        </motion.div>

        {/* Minimal Resource Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-black/60 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center justify-center mb-6">
                    <div className={`p-4 bg-gradient-to-r ${resource.color} rounded-xl opacity-80`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 text-center">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 text-center leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <motion.a
                    href={resource.link}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 font-medium hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Access Resource
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
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
            <div className="relative bg-black/60 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Resources
              </h3>
              <p className="text-gray-400 mb-6">
                Subscribe to get notified when we add new resources and learning materials
              </p>
              
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubscribed}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  className="mt-4 text-green-400 font-medium"
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