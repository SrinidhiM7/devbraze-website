'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { pastEvents, upcomingEvents, Event } from '@/data/events'

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState<'past' | 'upcoming'>('upcoming')

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
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-black/70 backdrop-blur-lg hover:border-cyan-400/40 transition-all duration-300"
      >
        {/* Enhanced Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/8 to-purple-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Image Container - Slightly larger */}
        <div className="relative h-56 overflow-hidden">
          {event.image ? (
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-lg font-bold">{event.title}</div>
                <div className="text-sm opacity-75">No image available</div>
              </div>
            </div>
          )}

          {/* Event Type Badge - Enhanced */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold text-white ${getEventTypeColor(event.type)}`}>
              {event.type.toUpperCase()}
            </span>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-all duration-300"></div>
        </div>

        {/* Content - Enhanced */}
        <div className="relative z-10 p-6">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
            {event.title}
          </h3>

          <p className="text-gray-300 text-base leading-relaxed mb-4 line-clamp-3">
            {event.description}
          </p>

          {/* Event Meta - Enhanced */}
          <div className="flex flex-col gap-3 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span className="font-medium">{formatDate(event.date)}</span>
            </div>
            {event.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="font-medium">{event.location}</span>
              </div>
            )}
          </div>

          {/* Highlights - If available */}
          {event.highlights && event.highlights.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {event.highlights.slice(0, 3).map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 border border-cyan-400/25 rounded-full text-xs text-cyan-400 font-medium"
                  >
                    {highlight}
                  </span>
                ))}
                {event.highlights.length > 3 && (
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500/15 to-pink-500/15 border border-purple-400/25 rounded-full text-xs text-purple-400 font-medium">
                    +{event.highlights.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    )
  };

  const FeaturedEventCard = ({ event, index }: { event: Event; index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-black/80 backdrop-blur-lg hover:border-cyan-400/50 transition-all duration-300 col-span-full md:col-span-3"
      >
        {/* Enhanced Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="flex flex-col lg:flex-row">
          {/* Image Container - Larger */}
          <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
            {event.image ? (
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">{event.title}</div>
                  <div className="text-sm opacity-75">No image available</div>
                </div>
              </div>
            )}

            {/* Event Type Badge - Larger */}
            <div className="absolute top-6 left-6">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${getEventTypeColor(event.type)}`}>
                {event.type.toUpperCase()}
              </span>
            </div>

            {/* Featured Badge */}
            <div className="absolute top-6 right-6">
              <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-xs font-semibold text-white">
                FEATURED
              </span>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
          </div>

          {/* Content - Larger and more detailed */}
          <div className="relative z-10 p-8 lg:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {event.title}
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {event.description}
              </p>

              {/* Event Meta - Enhanced */}
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="font-medium">{formatDate(event.date)}</span>
                </div>
                {event.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                )}
              </div>

              {/* Highlights */}
              {event.highlights && event.highlights.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Event Details</h4>
                  <div className="flex flex-wrap gap-3">
                    {event.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-sm text-cyan-400 font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Register Button */}
            {event.registrationLink && (
              <div className="mt-6">
                <a
                  href={event.registrationLink}
                  className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-xl hover:from-cyan-400 hover:to-purple-400 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Register Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    )
  };

  return (
    <section id="events" className="py-16 xs:py-20 dotted-bg-primary relative overflow-hidden">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pastEvents.length > 0 ? (
              pastEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 text-lg">No past events available</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'upcoming' && (
          <div className="space-y-8">
            {/* Featured Event - EasyEDA Workshop */}
            {upcomingEvents.find(event => event.id === 'easyeda-2025-09-23') && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <FeaturedEventCard
                  event={upcomingEvents.find(event => event.id === 'easyeda-2025-09-23')!}
                  index={0}
                />
              </div>
            )}

            {/* Other Upcoming Events */}
            {upcomingEvents.filter(event => event.id !== 'easyeda-2025-09-23').length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {upcomingEvents
                  .filter(event => event.id !== 'easyeda-2025-09-23')
                  .map((event, index) => (
                    <EventCard key={event.id} event={event} index={index + 1} />
                  ))
                }
              </div>
            )}

            {/* No events message */}
            {upcomingEvents.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 text-lg">No upcoming events at the moment</p>
                <p className="text-gray-500 text-sm mt-2">Check back soon for new events!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
