'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight, Users, Award, Star } from 'lucide-react'
import { teamMembers, TeamMember } from '@/data/team'

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const nextSlide = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(teamMembers.length / 1))
    } else {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3))
    }
  }

  const prevSlide = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev - 1 + Math.ceil(teamMembers.length / 1)) % Math.ceil(teamMembers.length / 1))
    } else {
      setCurrentIndex((prev) => (prev - 1 + Math.ceil(teamMembers.length / 3)) % Math.ceil(teamMembers.length / 3))
    }
  }

  const getVisibleMembers = () => {
    const itemsPerSlide = isMobile ? 1 : 3
    const startIndex = currentIndex * itemsPerSlide
    return teamMembers.slice(startIndex, startIndex + itemsPerSlide)
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  return (
    <section id="team" className="py-20 dotted-bg-secondary relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="gradient-text">Core Team</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the passionate innovators driving DevBraze forward and shaping the future of tech education
          </p>
        </motion.div>

        {/* Team Grid with Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/60 backdrop-blur-sm border border-cyan-500/30 rounded-full hover:border-cyan-400 transition-all duration-300 group"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-cyan-400 group-hover:text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/60 backdrop-blur-sm border border-cyan-500/30 rounded-full hover:border-cyan-400 transition-all duration-300 group"
            disabled={currentIndex >= Math.ceil(teamMembers.length / (isMobile ? 1 : 3)) - 1}
          >
            <ChevronRight className="w-6 h-6 text-cyan-400 group-hover:text-white" />
          </button>

          {/* Team Members Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12"
            layout
          >
            <AnimatePresence mode="popLayout">
              {getVisibleMembers().map((member, index) => (
                <motion.div
                  key={`${member.id}-${currentIndex}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative">
                    {/* Card Background with Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    
                    <div className="relative bg-black/80 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/60 transition-all duration-300 group-hover:transform group-hover:scale-105">
                      {/* Profile Picture */}
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full p-1 animate-pulse">
                            <div className="w-24 h-24 bg-black rounded-full"></div>
                          </div>
                          <div className="relative w-24 h-24 bg-gradient-to-br from-cyan-500/40 to-purple-500/40 rounded-full flex items-center justify-center border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors duration-300">
                            <span className="text-2xl font-bold gradient-text">
                              {getInitials(member.name)}
                            </span>
                          </div>
                          {/* Online Status Indicator */}
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>

                      {/* Member Info */}
                      <div className="text-center space-y-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-sm font-semibold gradient-text">
                          {member.role}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                          {member.bio}
                        </p>
                      </div>

                      {/* Skills Preview - Top 3 */}
                      <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        {member.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-xs text-cyan-400"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.skills.length > 3 && (
                          <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-xs text-purple-400">
                            +{member.skills.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-3 mt-6">
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-black/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300 group"
                          >
                            <Github className="w-4 h-4 text-cyan-400" />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-black/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300"
                          >
                            <Linkedin className="w-4 h-4 text-cyan-400" />
                          </a>
                        )}
                        {member.social.email && (
                          <a
                            href={`mailto:${member.social.email}`}
                            className="p-2 bg-black/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300"
                          >
                            <Mail className="w-4 h-4 text-cyan-400" />
                          </a>
                        )}
                      </div>

                      {/* View More Button */}
                      <button
                        onClick={() => setSelectedMember(member)}
                        className="w-full mt-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400 transition-all duration-300 text-sm font-medium"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(teamMembers.length / (isMobile ? 1 : 3)) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-cyan-400/30 hover:bg-cyan-400/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { 
              icon: Users, 
              number: "10", 
              label: "Core Members", 
              description: "Dedicated leaders driving innovation" 
            },
            { 
              icon: Award, 
              number: "50+", 
              label: "Projects Delivered", 
              description: "Successful community initiatives" 
            },
            { 
              icon: Star, 
              number: "250+", 
              label: "Students Mentored", 
              description: "Growing tech community" 
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 bg-black/40 backdrop-blur-lg border border-cyan-500/20 rounded-xl hover:border-cyan-400/40 transition-all duration-300 group"
            >
              <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-4xl font-bold mb-2 gradient-text">
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
                Ready to Join Our Team?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                We're looking for passionate individuals who want to make a difference in the tech community
              </p>
              <motion.button
                onClick={() => document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold text-lg hover:from-cyan-400 hover:to-purple-400 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-black/90 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/40 to-purple-500/40 rounded-full flex items-center justify-center border-2 border-cyan-400">
                    <span className="text-2xl font-bold gradient-text">
                      {getInitials(selectedMember.name)}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedMember.name}</h3>
                  <p className="text-lg gradient-text font-semibold">{selectedMember.role}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">About</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedMember.bio}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Skills & Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-sm text-cyan-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-4 pt-6">
                  {selectedMember.social.github && (
                    <a
                      href={selectedMember.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300"
                    >
                      <Github className="w-5 h-5 text-cyan-400" />
                    </a>
                  )}
                  {selectedMember.social.linkedin && (
                    <a
                      href={selectedMember.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-cyan-400" />
                    </a>
                  )}
                  {selectedMember.social.email && (
                    <a
                      href={`mailto:${selectedMember.social.email}`}
                      className="p-3 bg-black/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </a>
                  )}
                </div>
              </div>

              <button
                onClick={() => setSelectedMember(null)}
                className="mt-6 w-full py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400 transition-all duration-300"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}