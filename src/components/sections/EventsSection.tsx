'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Star, Clock, ExternalLink, ChevronLeft, ChevronRight, Mail, Bell } from 'lucide-react'
import { pastEvents, upcomingEvents, Event } from '@/data/events'

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState<'past' | 'upcoming'>('upcoming')
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
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



  const EventCard = ({ event, index }: { event: Event; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="event-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
    >
      <div className="relative h-48 bg-gradient-to-br from-devbraze-blue/20 to-devbraze-purple/20">
        <div className="absolute inset-0 bg-devbraze-gradient opacity-20"></div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getEventTypeColor(event.type)}`}>
            {event.type.toUpperCase()}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4" />
            {formatDate(event.date)}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-devbraze-gradient transition-all duration-300">
          {event.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {event.description}
        </p>

        {event.location && (
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
            <MapPin className="w-4 h-4" />
            {event.location}
          </div>
        )}

        {event.highlights && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {event.highlights.slice(0, 3).map((highlight, idx) => (
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

        {event.registrationLink && (
          <button className="w-full px-4 py-2 bg-devbraze-gradient rounded-lg text-white font-medium hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2">
            Register Now
            <ExternalLink className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  )



  return (
    <section id="events" ref={sectionRef} className="py-20 dotted-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            From hands-on workshops to exciting hackathons, we create learning experiences 
            that inspire and empower our community members.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-full p-2">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === 'upcoming'
                    ? 'bg-devbraze-gradient text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        )}

        {activeTab === 'upcoming' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center py-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-cyan-500/30 rounded-3xl p-12 backdrop-blur-sm"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
                  <div className="relative">
                    <Bell className="w-20 h-20 text-cyan-400 mx-auto mb-6 animate-pulse" />
                    <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      No Upcoming Events
                    </h3>
                    <p className="text-gray-300 mb-8 text-lg">
                      Subscribe to get updates about our next event
                    </p>
                    
                    <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                          />
                        </div>
                        <motion.button
                          type="submit"
                          disabled={isSubscribed}
                          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                        className="mt-4 text-green-400 font-medium"
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
