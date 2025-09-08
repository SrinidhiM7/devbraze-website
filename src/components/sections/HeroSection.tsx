'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Users, Calendar, Code, Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  const logoRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple CSS-based animations will be handled by Tailwind classes
  }, [])

  const stats = [
    { icon: Users, label: 'Active Members', value: 250 },
    { icon: Calendar, label: 'Events Hosted', value: 45 },
    { icon: Code, label: 'Projects', value: 30 }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/devbraze', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/devbraze', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/devbraze', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/devbraze', label: 'Instagram' }
  ]

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden dotted-bg-primary">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Dynamic Floating Elements */}
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl"
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl"
            animate={{ 
              y: [0, 30, 0],
              x: [0, -10, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur-xl"
            animate={{ 
              x: [0, 20, 0],
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Additional floating particles */}
          <motion.div 
            className="absolute top-1/3 left-1/3 w-8 h-8 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full blur-md"
            animate={{ 
              y: [0, -40, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 7, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg"
            animate={{ 
              x: [0, -25, 0],
              y: [0, 20, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        {/* Enhanced Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/3 via-transparent to-teal-500/3"></div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/40"></div>
      </div>

      {/* Centered Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <motion.div
          ref={logoRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="logo-border absolute inset-0 rounded-full bg-devbraze-gradient p-2 animate-spin-slow">
              <div className="w-full h-full bg-black rounded-full"></div>
            </div>
            <div className="relative z-10 p-8">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                <Image
                  src="/DevBraze Logo Blue Border.png"
                  alt="DevBraze Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8 pt-20"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="gradient-text">{"</DevBraze>"}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
            Technical Community of{' '}
            <span className="text-devbraze-blue font-semibold">School of ECE</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Empowering ECE students through innovative technology, collaborative learning, 
          and cutting-edge projects. Join us in shaping the future of electronics and computing.
        </motion.p>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2">
                <div className="p-3 bg-devbraze-gradient rounded-xl">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="stat-number text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Social Media Icons - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col gap-4"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-devbraze-gradient transition-all duration-300 group"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
          >
            <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </motion.a>
        ))}
      </motion.div>

      {/* Social Media Icons - Mobile (Bottom Center) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 md:hidden flex gap-4"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-devbraze-gradient transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
          >
            <social.icon className="w-5 h-5 text-white" />
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  )
}
