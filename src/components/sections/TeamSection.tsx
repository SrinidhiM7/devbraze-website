'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Users, Award, Star, X, Instagram } from 'lucide-react'
import Image from 'next/image'
import { teamMembers, TeamMember } from '@/data/team'

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  const handleViewDetails = (member: TeamMember, cardElement: HTMLElement) => {
    setSelectedMember(member)
    
    // Get card position relative to the section (only Y position)
    if (sectionRef.current && cardElement) {
      const sectionRect = sectionRef.current.getBoundingClientRect()
      const cardRect = cardElement.getBoundingClientRect()
      
      setModalPosition({
        x: 0, // Keep x as 0 for horizontal centering
        y: cardRect.top - sectionRect.top
      })
    }
  }

  const handleImageError = (memberId: string) => {
    setImageErrors(prev => new Set([...prev, memberId]))
  }

  return (
    <section id="team" ref={sectionRef} className="py-20 dotted-bg-secondary relative overflow-hidden">
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
              Our <span className="gradient-text">Leadership Team</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the passionate innovators driving DevBraze forward and shaping the future of technology education
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
                
                <div className="relative bg-black/80 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/60 transition-all duration-300 group-hover:transform group-hover:scale-105 h-[520px] flex flex-col">
                  {/* Profile Picture */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-3xl p-1 animate-pulse">
                        <div className="w-24 h-24 bg-black rounded-3xl"></div>
                      </div>
                      <div className="relative w-24 h-24 rounded-3xl overflow-hidden border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors duration-300">
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
                  <div className="text-center space-y-3 flex-grow">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 min-h-[28px]">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold gradient-text min-h-[20px]">
                      {member.role}
                    </p>
                    <div className="h-[72px] flex items-start">
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 text-center">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* Skills Preview - Top 3 */}
                  <div className="mt-4 mb-4 h-[60px] flex flex-wrap gap-2 justify-center content-start overflow-hidden">
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
                  <div className="flex justify-center gap-3 mb-4 h-[40px] items-center">
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
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-black/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300"
                      >
                        <Instagram className="w-4 h-4 text-cyan-400" />
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
                    onClick={(e) => handleViewDetails(member, e.currentTarget.closest('.group') as HTMLElement)}
                    className="w-full py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400 transition-all duration-300 text-sm font-medium mt-auto"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Structure Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Teams</h3>
            <p className="text-gray-400 text-lg">Interconnected teams working together to drive innovation</p>
          </div>
          
          {/* Central DevBraze Logo */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-32 h-32 border-2 border-cyan-400 rounded-lg relative">
                {/* Microchip pins */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-cyan-400"></div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-cyan-400"></div>
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-3 h-1 bg-cyan-400"></div>
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-3 h-1 bg-cyan-400"></div>
                <div className="absolute -top-1 left-1/4 w-1 h-3 bg-cyan-400"></div>
                <div className="absolute -top-1 right-1/4 w-1 h-3 bg-cyan-400"></div>
                <div className="absolute -bottom-1 left-1/4 w-1 h-3 bg-cyan-400"></div>
                <div className="absolute -bottom-1 right-1/4 w-1 h-3 bg-cyan-400"></div>
                <div className="absolute -left-1 top-1/4 w-3 h-1 bg-cyan-400"></div>
                <div className="absolute -left-1 bottom-1/4 w-3 h-1 bg-cyan-400"></div>
                <div className="absolute -right-1 top-1/4 w-3 h-1 bg-cyan-400"></div>
                <div className="absolute -right-1 bottom-1/4 w-3 h-1 bg-cyan-400"></div>
                
                {/* Inner logo */}
                <div className="absolute inset-2 bg-black rounded flex items-center justify-center">
                  <Image
                    src="/DevBraze Logo Blue Border.png"
                    alt="DevBraze Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Teams Grid */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* First 3 teams in 3-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "CONTENT AND DESIGN TEAM",
                "MARKETING TEAM", 
                "EVENT MANAGEMENT TEAM"
              ].map((team, index) => (
                <motion.div
                  key={team}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/90 backdrop-blur-lg border border-cyan-400/30 rounded-xl p-4 hover:border-cyan-400/60 transition-all duration-300 group"
                >
                  <p className="text-white font-bold text-sm text-center group-hover:text-cyan-400 transition-colors duration-300">
                    {team}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Last 2 teams in centered 2-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "TECH TEAM",
                "SOCIAL MEDIA TEAM"
              ].map((team, index) => (
                <motion.div
                  key={team}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                  className="bg-gray-800/90 backdrop-blur-lg border border-cyan-400/30 rounded-xl p-4 hover:border-cyan-400/60 transition-all duration-300 group"
                >
                  <p className="text-white font-bold text-sm text-center group-hover:text-cyan-400 transition-colors duration-300">
                    {team}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

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
              number: "30+", 
              label: "Members in Club", 
              description: "Active community members" 
            },
            { 
              icon: Award, 
              number: "15+", 
              label: "Events", 
              description: "Successful community events" 
            },
            { 
              icon: Star, 
              number: "500+", 
              label: "Participants", 
              description: "Students engaged in activities" 
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[50] flex items-start justify-center p-2 xs:p-4"
            onClick={() => setSelectedMember(null)}
            style={{
              paddingTop: `${modalPosition.y + (sectionRef.current?.offsetTop || 0)}px`
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/95 backdrop-blur-lg border border-white/10 rounded-3xl p-4 xs:p-6 sm:p-8 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] max-w-6xl max-h-[90vh] overflow-y-auto relative mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="flex flex-col lg:flex-row gap-6">
                {/* Profile Picture - Left Side */}
                <div className="flex-shrink-0 flex justify-center lg:justify-start">
                  <div className="relative">
                    <div className="w-80 h-60 lg:w-96 lg:h-48 rounded-3xl overflow-hidden border-4 border-cyan-400">
                      {!imageErrors.has(selectedMember.id) ? (
                        <Image
                          src={selectedMember.image}
                          alt={selectedMember.name}
                          fill
                          className="object-cover rounded-3xl"
                          onError={() => handleImageError(selectedMember.id)}
                          sizes="340px"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-cyan-500/40 to-purple-500/40 flex items-center justify-center rounded-3xl">
                          <span className="text-2xl lg:text-4xl font-bold gradient-text">
                            {getInitials(selectedMember.name)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content - Right Side */}
                <div className="flex-1 space-y-6">
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{selectedMember.name}</h3>
                    <p className="text-lg lg:text-xl gradient-text font-semibold">{selectedMember.role}</p>
                  </div>

                  <div>
                    <h4 className="text-lg lg:text-xl font-semibold text-white mb-3">About</h4>
                    <p className="text-gray-300 leading-relaxed text-base">{selectedMember.bio}</p>
                  </div>

                  <div>
                    <h4 className="text-lg lg:text-xl font-semibold text-white mb-3">Skills & Expertise</h4>
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

                  <div className="pt-4">
                    <h4 className="text-lg lg:text-xl font-semibold text-white mb-3">Connect</h4>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                      {selectedMember.social.github && (
                        <a
                          href={selectedMember.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-black/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300"
                        >
                          <Github className="w-6 h-6 text-cyan-400" />
                        </a>
                      )}
                      {selectedMember.social.linkedin && (
                        <a
                          href={selectedMember.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-black/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300"
                        >
                          <Linkedin className="w-6 h-6 text-cyan-400" />
                        </a>
                      )}
                      {selectedMember.social.instagram && (
                        <a
                          href={selectedMember.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-black/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300"
                        >
                          <Instagram className="w-6 h-6 text-cyan-400" />
                        </a>
                      )}
                      {selectedMember.social.email && (
                        <a
                          href={`mailto:${selectedMember.social.email}`}
                          className="p-3 bg-black/40 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 rounded-lg transition-all duration-300"
                        >
                          <Mail className="w-6 h-6 text-cyan-400" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}