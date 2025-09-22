'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Linkedin, Instagram, Mail, MapPin, Phone, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const router = useRouter()
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/devbraze-reva-204872289',
      color: 'text-blue-400 hover:text-blue-300 active:text-blue-500'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/devbraze_reva',
      color: 'text-pink-400 hover:text-pink-300 active:text-pink-500'
    }
  ]

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '#team' },
    { name: 'Resources', href: '#resources' },
    { name: 'Join Us', href: '#join' }
  ]

  const contactInfo = [
    {
      icon: MapPin,
      text: 'The School of ECE, REVA University',
      href: null
    },
    {
      icon: Mail,
      text: 'devbrazecommunity@gmail.com',
      href: 'mailto:devbrazecommunity@gmail.com'
    },
    {
      icon: Phone,
      text: '+91 63646 48730',
      href: 'tel:+916364648730'
    }
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      // Navigate to page
      router.push(href)
    } else {
      // Check if we're on the home page
      const isHomePage = window.location.pathname === '/'
      
      if (isHomePage) {
        // Scroll to section on home page
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // Navigate to home page with hash
        router.push(`/${href}`)
      }
    }
  }

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 xs:py-12">
                {/* Footer Content */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 mb-8 xs:mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3 xs:space-y-4 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center space-x-2 xs:space-x-3">
              <div className="relative w-10 h-10 xs:w-12 xs:h-12">
                <Image
                  src="/DevBraze Logo Blue Border.png"
                  alt="DevBraze Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg xs:text-xl font-bold gradient-text">{"</DevBraze>"}</h3>
                <p className="text-xs xs:text-sm text-gray-400">School of ECE</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs xs:text-sm leading-relaxed max-w-md">
              Empowering ECE students through technology, innovation, and collaborative learning. 
              Join us in building the future of technology.
            </p>
            <div className="flex space-x-3 xs:space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 xs:p-3 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/30 transition-all duration-300 ${social.color} touch-manipulation`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5 xs:w-6 xs:h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-3 xs:space-y-4"
          >
            <h3 className="text-base xs:text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-1.5 xs:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-xs xs:text-sm flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="w-2.5 h-2.5 xs:w-3 xs:h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-3 xs:space-y-4"
          >
            <h3 className="text-base xs:text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2 xs:space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start space-x-2 xs:space-x-3">
                  <contact.icon className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-devbraze-blue mt-0.5 flex-shrink-0" />
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-xs xs:text-sm hover:underline"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-gray-400 text-xs xs:text-sm">{contact.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 mt-8 xs:mt-12 pt-6 xs:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-3 xs:space-y-4 sm:space-y-0"
        >
          <p className="text-gray-400 text-xs xs:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} {"</DevBraze>"}. All rights reserved. Made by{" "}
            <a 
              href="https://www.linkedin.com/in/srinidhi-m-839290261" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 hover:underline"
            >
              Srinidhi
            </a>
            {" "}and{" "}
            <a 
              href="https://www.linkedin.com/in/aniketh-bhosale-849480250/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 hover:underline"
            >
              Aniketh
            </a>.
          </p>
          <div className="flex space-x-4 xs:space-x-6 text-xs xs:text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Code of Conduct
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
