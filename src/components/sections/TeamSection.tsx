'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { teamMembers, TeamMember } from '@/data/team'

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const selectMember = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const currentMember = teamMembers[currentIndex]

  return (
    <section id="team" ref={sectionRef} className="py-20 dotted-bg-secondary relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-purple-500/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Core Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The passionate innovators who drive DevBraze forward, leading by example 
            and inspiring the next generation of tech pioneers.
          </p>
        </motion.div>

        {/* Circular Team Slider */}
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left Side - Circular Selector with Clock Needle */}
          <div className="relative flex justify-center">
            <div className="relative w-[600px] h-[600px] flex items-center justify-center">
              <div className="relative w-[550px] h-[550px]">
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center z-30">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                  </div>
                </div>

                {/* Clock Needle - Properly centered */}
                {/* <motion.div
                  className="absolute z-5"
                  style={{
                    top: '22%',
                    left: '50%',
                    width: '4px',
                    height: '130px',
                    background: 'linear-gradient(to top, #22d3ee, #a855f7)',
                    transformOrigin: '2px 190px', // Bottom center of the needle
                    transform: 'translate(-2px, -190px)', // Position so bottom is at center
                  }}
                  animate={{
                    rotate: (currentIndex * 360) / teamMembers.length
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  initial={{ rotate: 0 }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-2 border-white"></div>
                </motion.div> */}

                {/* Team Member Circles */}
                {teamMembers.map((member, index) => {
                  const angle = (index * 360) / teamMembers.length
                  const isActive = index === currentIndex
                  const radius = 200 // Increased radius for larger circles
                  const centerX = 275 // Half of 550px container
                  const centerY = 275 // Half of 550px container
                  
                  const x = centerX + radius * Math.cos((angle - 90) * Math.PI / 180)
                  const y = centerY + radius * Math.sin((angle - 90) * Math.PI / 180)
                  
                  return (
                    <motion.button
                      key={member.id}
                      onClick={() => selectMember(index)}
                      className={`absolute w-24 h-24 rounded-full border-2 transition-all duration-500 overflow-hidden ${
                        isActive 
                          ? 'border-cyan-400 scale-125 shadow-lg shadow-cyan-400/50 z-10' 
                          : 'border-cyan-500/30 hover:border-cyan-400/60 hover:scale-110'
                      }`}
                      style={{
                        left: `${x - 48}px`, // Half of 96px (w-24)
                        top: `${y - 48}px`,  // Half of 96px (h-24)
                      }}
                      whileHover={{ scale: isActive ? 1.35 : 1.2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`w-full h-full rounded-full flex items-center justify-center text-base font-bold transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-cyan-500/60 to-purple-500/60 text-white' 
                          : 'bg-black/80 text-cyan-400 hover:bg-cyan-500/20'
                      }`}>
                        {/* Placeholder for image - will be replaced with actual images */}
                        <div className="text-xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      
                      {/* Active pulse effect */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-cyan-400/50"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.button>
                  )
                })}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(34, 211, 238, 0.2)" />
                      <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
                    </linearGradient>
                  </defs>
                  {teamMembers.map((_, index) => {
                    const angle = (index * 360) / teamMembers.length
                    const radius = 200
                    const centerX = 275
                    const centerY = 275
                    const x = centerX + radius * Math.cos((angle - 90) * Math.PI / 180)
                    const y = centerY + radius * Math.sin((angle - 90) * Math.PI / 180)
                    
                    return (
                      <line
                        key={index}
                        x1={centerX}
                        y1={centerY}
                        x2={x}
                        y2={y}
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        strokeDasharray={index === currentIndex ? "none" : "5,5"}
                        opacity={index === currentIndex ? 0.8 : 0.3}
                      />
                    )
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side - Member Details Card */}
          <motion.div
            key={currentMember.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 h-[600px] flex items-center"
          >
            <div className="relative w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-black/60 backdrop-blur-lg border border-cyan-500/30 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                {/* Member Image Placeholder */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl p-1 animate-pulse">
                      <div className="w-32 h-32 bg-black rounded-2xl"></div>
                    </div>
                    <div className="relative w-32 h-32 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-2xl border-2 border-cyan-400/50 flex items-center justify-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {currentMember.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold text-white">
                    {currentMember.name}
                  </h3>
                  <p className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {currentMember.role}
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {currentMember.bio}
                  </p>
                </div>

                {/* Skills */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Skills & Expertise
                  </h4>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {currentMember.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-sm text-cyan-400 hover:border-cyan-400 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-6">
                  {currentMember.social.github && (
                    <motion.a
                      href={currentMember.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/40 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Github className="w-5 h-5 text-cyan-400" />
                    </motion.a>
                  )}
                  {currentMember.social.linkedin && (
                    <motion.a
                      href={currentMember.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/40 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Linkedin className="w-5 h-5 text-cyan-400" />
                    </motion.a>
                  )}
                  {currentMember.social.email && (
                    <motion.a
                      href={`mailto:${currentMember.social.email}`}
                      className="p-3 bg-black/40 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            { number: "10", label: "Core Team Members", description: "Leading innovators" },
            { number: "15+", label: "Department Volunteers", description: "Supporting community" },
            { number: "250+", label: "Active Community Members", description: "Growing network" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 bg-black/40 backdrop-blur-lg border border-cyan-500/20 rounded-xl hover:border-cyan-400/40 transition-all duration-300 group"
            >
              <h4 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </h4>
              <p className="text-white font-semibold mb-2">{stat.label}</p>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-black/60 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Want to Join Our Core Team?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                We're always looking for passionate, dedicated individuals who share our vision 
                of empowering the ECE community through technology and innovation.
              </p>
              <motion.button
                onClick={() => document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold text-lg hover:from-cyan-400 hover:to-purple-400 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply to Join Core Team
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}