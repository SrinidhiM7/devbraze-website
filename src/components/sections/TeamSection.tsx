'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Users, Award, Star } from 'lucide-react'
import Image from 'next/image'
import { teamMembers, TeamMember } from '@/data/team'

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [selectedMember])

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  const handleImageError = (memberId: string) => {
    setImageErrors(prev => new Set([...prev, memberId]))
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

        {/* Team Grid - All Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xs:gap-8 mb-12 xs:mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors duration-300">
                        {!imageErrors.has(member.id) ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                            onError={() => handleImageError(member.id)}
                            sizes="96px"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-cyan-500/40 to-purple-500/40 flex items-center justify-center">
                            <span className="text-2xl font-bold gradient-text">
                              {getInitials(member.name)}
                            </span>
                          </div>
                        )}
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
                    {member.skills.slice(0, 3).map((skill: string) => (
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
              number: "8", 
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
            className="modal-overlay modal-backdrop bg-black/80"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="modal-content bg-black/95 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-6 xs:p-8 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col xs:flex-row items-center xs:items-start gap-4 xs:gap-6 mb-6">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 xs:w-24 xs:h-24 rounded-full overflow-hidden border-2 border-cyan-400">
                    {!imageErrors.has(selectedMember.id) ? (
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(selectedMember.id)}
                        sizes="96px"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-cyan-500/40 to-purple-500/40 flex items-center justify-center">
                        <span className="text-xl xs:text-2xl font-bold gradient-text">
                          {getInitials(selectedMember.name)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-center xs:text-left">
                  <h3 className="text-xl xs:text-2xl font-bold text-white">{selectedMember.name}</h3>
                  <p className="text-base xs:text-lg gradient-text font-semibold">{selectedMember.role}</p>
                </div>
              </div>

              <div className="space-y-4 xs:space-y-6">
                <div>
                  <h4 className="text-base xs:text-lg font-semibold text-white mb-2 xs:mb-3">About</h4>
                  <p className="text-gray-300 leading-relaxed text-sm xs:text-base">{selectedMember.bio}</p>
                </div>

                <div>
                  <h4 className="text-base xs:text-lg font-semibold text-white mb-2 xs:mb-3">Skills & Expertise</h4>
                  <div className="flex flex-wrap gap-1.5 xs:gap-2">
                    {selectedMember.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 xs:px-3 py-1 xs:py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-xs xs:text-sm text-cyan-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-3 xs:gap-4 pt-4 xs:pt-6">
                  {selectedMember.social.github && (
                    <a
                      href={selectedMember.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 xs:p-3 bg-black/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300"
                    >
                      <Github className="w-4 h-4 xs:w-5 xs:h-5 text-cyan-400" />
                    </a>
                  )}
                  {selectedMember.social.linkedin && (
                    <a
                      href={selectedMember.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 xs:p-3 bg-black/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4 xs:w-5 xs:h-5 text-cyan-400" />
                    </a>
                  )}
                  {selectedMember.social.email && (
                    <a
                      href={`mailto:${selectedMember.social.email}`}
                      className="p-2 xs:p-3 bg-black/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300"
                    >
                      <Mail className="w-4 h-4 xs:w-5 xs:h-5 text-cyan-400" />
                    </a>
                  )}
                </div>
              </div>

              <button
                onClick={() => setSelectedMember(null)}
                className="mt-4 xs:mt-6 w-full py-2 xs:py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400 transition-all duration-300 text-sm xs:text-base"
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