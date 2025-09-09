'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Users, Star, Clock, ExternalLink, ChevronLeft, ChevronRight, Mail, Bell, Info } from 'lucide-react'
import { pastEvents, upcomingEvents, Event } from '@/data/events'

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState<'past' | 'upcoming'>('upcoming')
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getEventTypeColor = (type: string) => {
    const colors = {
      workshop: 'bg-blue-500',
      hackathon: 'bg-purple-500',
      seminar: 'bg-green-500',
      competition: 'bg-red-500',
      webinar: 'bg-yellow-500'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-500'
  }

  const EventCard = ({ event, index }: { event: Event; index: number }) => {
    const [isHovered, setIsHovered] = useState(false)
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="event-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl xs:rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-36 xs:h-48 bg-gradient-to-br from-devbraze-blue/20 to-devbraze-purple/20 overflow-hidden">
          {event.image && (
            <img 
              src={event.image} 
              alt={event.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-devbraze-gradient opacity-20"></div>
          <div className="absolute top-3 xs:top-4 left-3 xs:left-4 z-10">
            <span className={`px-2 xs:px-3 py-1 rounded-full text-xs font-semibold text-white ${getEventTypeColor(event.type)}`}>
              {event.type.toUpperCase()}
            </span>
          </div>
          <div className="absolute bottom-3 xs:bottom-4 left-3 xs:left-4 text-white z-10">
            <div className="flex items-center gap-1.5 xs:gap-2 text-xs xs:text-sm">
              <Calendar className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
              {formatDate(event.date)}
            </div>
          </div>
          {event.fullDescription && (
            <div className="absolute top-3 xs:top-4 right-3 xs:right-4 z-10">
              <Info className="w-4 h-4 text-white/70 group-hover:text-white transition-colors duration-300" />
            </div>
          )}
        </div>

        <div className="p-4 xs:p-6">
          <h3 className="text-lg xs:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-devbraze-gradient transition-all duration-300">
            {event.title}
          </h3>
          <p className="text-gray-400 text-xs xs:text-sm mb-3 xs:mb-4 leading-relaxed">
            {event.description}
          </p>

          {event.location && (
            <div className="flex items-center gap-1.5 xs:gap-2 text-xs xs:text-sm text-gray-400 mb-2 xs:mb-3">
              <MapPin className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
              {event.location}
            </div>
          )}

          {event.highlights && (
            <div className="mb-3 xs:mb-4">
              <div className="flex flex-wrap gap-1.5 xs:gap-2">
                {event.highlights.slice(0, 3).map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-1.5 xs:px-2 py-0.5 xs:py-1 bg-devbraze-gradient/20 border border-devbraze-blue/30 rounded-lg text-xs text-devbraze-blue"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          )}

          {event.registrationLink && (
            <button className="w-full px-3 xs:px-4 py-1.5 xs:py-2 bg-devbraze-gradient rounded-lg text-white font-medium hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-1.5 xs:gap-2 text-xs xs:text-sm">
              Register Now
              <ExternalLink className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
            </button>
          )}
        </div>

        {/* Hover Overlay with Full Description */}
        {isHovered && event.fullDescription && (
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm rounded-xl xs:rounded-2xl overflow-hidden z-50">
            <div className="h-full overflow-y-auto p-4 xs:p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg xs:text-xl font-bold text-white bg-gradient-to-r from-devbraze-blue to-devbraze-purple bg-clip-text text-transparent">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(event.date)}
                  </div>
                </div>
                
                <div className="text-gray-300 text-xs xs:text-sm leading-relaxed whitespace-pre-line">
                  {event.fullDescription}
                </div>

                {event.highlights && (
                  <div className="pt-3 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {event.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-devbraze-gradient/20 border border-devbraze-blue/30 rounded-lg text-xs text-devbraze-blue"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Image Gallery - Below Text */}
                {event.images && event.images.length > 0 && (
                  <div className="pt-3 border-t border-white/10">
                    <div className="text-xs text-gray-400 mb-2">
                      📸 Event Gallery ({event.images.length} photos)
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {event.images.map((image, idx) => (
                        <div key={idx} className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${event.title} - Image ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    )
  }

  return (
    <section id="events" ref={sectionRef} className="py-16 xs:py-20 dotted-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 xs:mb-12"
        >
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Events</span>
          </h2>
          <p className="text-lg xs:text-xl text-gray-400 max-w-xs xs:max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto mb-6 xs:mb-8">
            From hands-on workshops to exciting hackathons, we create learning experiences 
            that inspire and empower our community members.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-full p-1.5 xs:p-2">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-4 xs:px-6 py-2 xs:py-3 rounded-full font-medium transition-all duration-300 text-sm xs:text-base ${
                  activeTab === 'upcoming'
                    ? 'bg-devbraze-gradient text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-4 xs:px-6 py-2 xs:py-3 rounded-full font-medium transition-all duration-300 text-sm xs:text-base ${
                  activeTab === 'past'
                    ? 'bg-devbraze-gradient text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>
        </motion.div>

        {/* Events Content */}
        {activeTab === 'past' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 lg:gap-8">
            {pastEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        )}

        {activeTab === 'upcoming' && upcomingEvents.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 lg:gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        )}

        {activeTab === 'upcoming' && upcomingEvents.length === 0 && (
          <div className="max-w-xs xs:max-w-lg sm:max-w-2xl md:max-w-4xl mx-auto">
            <div className="text-center py-12 xs:py-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-cyan-500/30 rounded-2xl xs:rounded-3xl p-8 xs:p-12 backdrop-blur-sm"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl xs:rounded-3xl blur-xl"></div>
                  <div className="relative">
                    <Bell className="w-16 h-16 xs:w-20 xs:h-20 text-cyan-400 mx-auto mb-4 xs:mb-6 animate-pulse" />
                    <h3 className="text-2xl xs:text-3xl font-bold text-white mb-3 xs:mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      No Upcoming Events
                    </h3>
                    <p className="text-gray-300 mb-6 xs:mb-8 text-base xs:text-lg">
                      Subscribe to get updates about our next event
                    </p>
                    
                    <form onSubmit={handleEmailSubmit} className="max-w-sm xs:max-w-md mx-auto">
                      <div className="flex flex-col xs:flex-row gap-3 xs:gap-4">
                        <div className="relative flex-1">
                          <Mail className="absolute left-2.5 xs:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 xs:w-5 xs:h-5 text-cyan-400" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full pl-8 xs:pl-10 pr-3 xs:pr-4 py-2.5 xs:py-3 bg-black/50 border border-cyan-500/30 rounded-lg xs:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm xs:text-base"
                          />
                        </div>
                        <motion.button
                          type="submit"
                          disabled={isSubscribed}
                          className="px-4 xs:px-6 py-2.5 xs:py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg xs:rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm xs:text-base"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                        </motion.button>
                      </div>
                    </form>
                    
                    {isSubscribed && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 xs:mt-4 text-green-400 font-medium text-sm xs:text-base"
                      >
                        ✓ Successfully subscribed! You'll be notified about upcoming events.
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  )
}
