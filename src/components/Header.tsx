'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Resources', href: '#resources' },
    { name: 'Join Us', href: '#join' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      {/* Logo - Fixed Position */}
      <motion.div 
        className="fixed top-2 left-2 xs:top-4 xs:left-4 z-50 flex items-center space-x-2 xs:space-x-3"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-8 h-8 xs:w-10 xs:h-10 lg:w-12 lg:h-12">
          <Image
            src="/DevBraze Logo Blue Border.png"
            alt="DevBraze Logo"
            fill
            className="object-contain filter hover:brightness-110 transition-all duration-300"
            priority
          />
        </div>
        <div className="hidden xs:block">
          <h1 className="text-lg xs:text-xl lg:text-2xl font-bold gradient-text">
            {"</DevBraze>"}
          </h1>
          <p className="text-xs text-gray-400 -mt-1 hidden sm:block">
            School of ECE
          </p>
        </div>
      </motion.div>

      {/* Centered Navigation */}
      <nav className="flex justify-center">
        <div className="flex items-center justify-center h-14 xs:h-16 lg:h-20 w-full max-w-4xl px-2 xs:px-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between w-full max-w-3xl">
            {menuItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-transparent hover:bg-clip-text hover:bg-devbraze-gradient transition-all duration-300 font-medium text-base xl:text-lg px-2 xl:px-4 py-2 relative group"
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
            className="lg:hidden p-2 xs:p-3 rounded-full bg-black/60 backdrop-blur-lg border border-white/10 hover:bg-white/20 transition-colors duration-300 fixed top-2 right-2 xs:top-4 xs:right-4 z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <X className="w-5 h-5 xs:w-6 xs:h-6" />
            ) : (
              <Menu className="w-5 h-5 xs:w-6 xs:h-6" />
            )}
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
            className="lg:hidden fixed top-16 xs:top-20 left-0 right-0 z-40 flex justify-center px-4"
          >
            <div className="bg-black/90 backdrop-blur-lg border border-white/10 rounded-xl xs:rounded-2xl p-4 xs:p-6 w-[280px] xs:w-[320px]">
              <div className="space-y-2 xs:space-y-3">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-center px-4 xs:px-6 py-2 xs:py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-300 text-base xs:text-lg font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
