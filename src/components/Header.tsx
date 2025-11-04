'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '/events' },
    { name: 'Code Crusade', href: '/events/code-crusade-2025' },
    { name: 'Team', href: '#team' },
    { name: 'Resources', href: '#resources' },
  ]

  const joinUsItem = { name: 'Join Us', href: '#join' }

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      // Navigate to page
      router.push(href)
      setIsOpen(false)
    } else {
      // Check if we're on the home page
      const isHomePage = window.location.pathname === '/'
      
      if (isHomePage) {
        // Scroll to section on home page
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          setIsOpen(false)
        }
      } else {
        // Navigate to home page with hash
        router.push(`/${href}`)
        setIsOpen(false)
      }
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-slate-900/80 backdrop-blur-sm'
      }`}
    >
      {/* Logo - Fixed Position */}
      <motion.div 
        className="fixed top-3 left-3 sm:top-4 sm:left-4 z-50 flex items-center space-x-2 sm:space-x-3 cursor-pointer max-w-[calc(100vw-120px)] sm:max-w-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollToSection('#home')}
      >
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 flex-shrink-0">
          <Image
            src="/DevBraze Logo Blue Border.png"
            alt="DevBraze Logo"
            fill
            className="object-contain filter hover:brightness-110 transition-all duration-300"
            priority
          />
        </div>
        <div className="block min-w-0">
          <h1 className="text-base sm:text-xl lg:text-2xl font-bold gradient-text truncate">
            {"</DevBraze>"}
          </h1>
          <p className="text-[10px] sm:text-xs text-gray-400 -mt-1 truncate">
            School of ECE
          </p>
        </div>
      </motion.div>

      {/* Centered Navigation */}
      <nav className="flex justify-center">
        <div className="flex items-center justify-center h-16 sm:h-16 lg:h-20 w-full max-w-4xl px-2 xs:px-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between w-full max-w-3xl">
            {menuItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-transparent hover:bg-clip-text hover:bg-devbraze-gradient transition-all duration-300 font-medium text-base lg:text-lg xl:text-lg px-3 lg:px-4 xl:px-4 py-2 lg:py-2 xl:py-2 relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 sm:p-3 rounded-full bg-black/60 backdrop-blur-lg border border-white/10 hover:bg-white/20 transition-colors duration-300 fixed top-3 right-3 sm:top-4 sm:right-4 z-50 touch-manipulation"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-6 h-6 sm:w-6 sm:h-6" />
            )}
          </motion.button>

          {/* Join Us Button - Top Right */}
          <motion.button
            onClick={() => scrollToSection(joinUsItem.href)}
            className="hidden lg:flex fixed top-4 right-4 z-50 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {joinUsItem.name}
          </motion.button>
        </div>

      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden fixed top-20 sm:top-24 left-0 right-0 z-40 flex justify-center px-4"
          >
            <div className="bg-black/95 backdrop-blur-lg border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-6 w-[320px] sm:w-[360px] max-w-[90vw]">
              <div className="space-y-3 sm:space-y-3">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-center px-6 sm:px-6 py-4 sm:py-4 text-white hover:bg-white/10 rounded-lg transition-colors duration-300 text-lg sm:text-lg font-medium touch-manipulation"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                {/* Join Us Button in Mobile Menu */}
                <motion.button
                  onClick={() => scrollToSection(joinUsItem.href)}
                  className="block w-full text-center px-6 sm:px-6 py-4 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg sm:text-lg touch-manipulation"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {joinUsItem.name}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
