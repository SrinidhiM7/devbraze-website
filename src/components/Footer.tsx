'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, Phone, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/devbraze',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/company/devbraze',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/devbraze',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/devbraze',
      color: 'hover:text-pink-400'
    }
  ]

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Resources', href: '#resources' },
    { name: 'Join Us', href: '#join' }
  ]

  const contactInfo = [
    {
      icon: MapPin,
      text: 'School of ECE, University Campus'
    },
    {
      icon: Mail,
      text: 'contact@devbraze.com'
    },
    {
      icon: Phone,
      text: '+91 98765 43210'
    }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
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
                  className={`p-1.5 xs:p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-4 h-4 xs:w-5 xs:h-5" />
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
                  <span className="text-gray-400 text-xs xs:text-sm">{contact.text}</span>
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
            © {new Date().getFullYear()} {"</DevBraze>"}. All rights reserved. Made with ❤️ by {"</DevBraze>"} Team.
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
