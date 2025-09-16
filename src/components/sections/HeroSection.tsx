'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Users, Calendar, Code, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  const logoRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile devices for performance optimization
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const stats = [
    { icon: Calendar, label: 'Events', value: '15+' },
    { icon: Code, label: 'Workshops', value: '5+' },
    { icon: Users, label: 'Participated', value: '500+' }
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/devbraze-reva-204872289', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/devbraze_reva', label: 'Instagram' }
  ]

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Simplified animation variants for mobile
  const mobileAnimationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const desktopAnimationVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" }
  }

  const animationVariants = isMobile ? mobileAnimationVariants : desktopAnimationVariants

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden dotted-bg-primary">
      {/* Simplified Background Elements for better performance */}
      <div className="absolute inset-0">
        {/* Static Grid Pattern for mobile, animated for desktop */}
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

        {/* Reduced Floating Elements - Only show on desktop */}
        {!isMobile && (
          <div className="absolute inset-0 opacity-20">
            <motion.div 
              className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl"
              animate={{ 
                y: [0, -15, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl"
              animate={{ 
                y: [0, 20, 0],
                x: [0, -10, 0]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-40 left-20 w-18 h-18 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur-lg"
              animate={{ 
                x: [0, 15, 0],
                y: [0, -10, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </div>
        )}

        {/* Simplified Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/10 to-black/30"></div>
      </div>

      {/* Simplified Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <motion.div
          ref={logoRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Simplified border animation - slower on mobile */}
            <div className={`logo-border absolute inset-0 rounded-full bg-devbraze-gradient p-1 xs:p-2 ${isMobile ? 'animate-spin-slow' : 'animate-spin-slow'}`}>
              <div className="w-full h-full bg-black rounded-full"></div>
            </div>
            <div className="relative z-10 p-4 xs:p-6 sm:p-8">
              <div className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                <Image
                  src="/DevBraze Logo Blue Border.png"
                  alt="DevBraze Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 475px) 192px, (max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Main Heading - Simplified animations */}
        <motion.div
          {...animationVariants}
          transition={{ ...animationVariants.transition, delay: 0.3 }}
          className="mb-6 xs:mb-8 pt-16 xs:pt-20"
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 xs:mb-4">
            <span className="gradient-text">{"</DevBraze>"}</span>
          </h1>
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light px-4 xs:px-0">
            Technical Community of{' '}
            <span className="text-devbraze-blue font-semibold">School of ECE</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          {...animationVariants}
          transition={{ ...animationVariants.transition, delay: 0.5 }}
          className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-400 max-w-xs xs:max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto mb-12 xs:mb-16 leading-relaxed px-4 xs:px-0"
        >
          Empowering ECE students through innovative technology, collaborative learning, 
          and cutting-edge projects. Join us in shaping the future of electronics and computing.
        </motion.p>

        {/* Stats Section - Simplified animations */}
        <motion.div
          ref={statsRef}
          {...animationVariants}
          transition={{ ...animationVariants.transition, delay: 0.7 }}
          className="grid grid-cols-3 gap-4 xs:gap-6 sm:gap-8 max-w-sm xs:max-w-lg sm:max-w-2xl mx-auto px-4 xs:px-0"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: isMobile ? 0.4 : 0.6, 
                delay: 0.9 + index * (isMobile ? 0.05 : 0.1) 
              }}
              className="text-center"
            >
              <div className="flex justify-center mb-1 xs:mb-2">
                <div className="p-2 xs:p-3 bg-devbraze-gradient rounded-lg xs:rounded-xl">
                  <stat.icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
              <div className="stat-number text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs xs:text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Social Media Icons - Desktop */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-6 xs:bottom-8 right-4 xs:right-8 hidden sm:flex flex-col gap-3 xs:gap-4"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 xs:p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-devbraze-gradient transition-colors duration-300"
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
          </motion.a>
        ))}
      </motion.div>

      {/* Social Media Icons - Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-16 xs:bottom-20 left-1/2 transform -translate-x-1/2 sm:hidden flex gap-3 xs:gap-4"
      >
        {socialLinks.map((social, index) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 xs:p-3 bg-white/10 backdrop-blur-sm rounded-lg active:bg-devbraze-gradient transition-colors duration-200"
          >
            <social.icon className="w-4 h-4 xs:w-5 xs:h-5 text-white" />
          </a>
        ))}
      </motion.div>

      {/* Scroll Indicator - Simplified animation */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 xs:w-8 xs:h-8" />
      </motion.button>
    </section>
  )
}
