'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { upcomingEvents, Event } from '@/data/events'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const isMobile = useIsMobile(768)
  const sectionRef = useRef<HTMLDivElement>(null)

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
    // Simplified animations for mobile to prevent flickering
    const cardVariants = {
      hidden: { opacity: 0, y: isMobile ? 20 : 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: isMobile ? 0.3 : 0.6, 
          delay: isMobile ? 0 : index * 0.1 
        }
      }
    }

    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={cardVariants}
        className={`group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-black/70 ${isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-lg'} hover:border-cyan-400/40 ${isMobile ? 'transition-colors duration-200' : 'transition-all duration-300'} h-full min-h-[500px] flex flex-col`}
      >
        {/* Background Image - Full Card */}
        {event.image && (
          <div className="absolute inset-0">
            <img
              src={event.image}
              alt={event.title}
              className={`w-full h-full object-cover ${isMobile ? '' : 'group-hover:scale-105'} ${isMobile ? '' : 'transition-transform duration-500'}`}
              loading="lazy"
            />
            {/* Dark overlay for text readability */}
            <div className={`absolute inset-0 bg-black/60 ${isMobile ? '' : 'group-hover:bg-black/50'} ${isMobile ? '' : 'transition-all duration-300'}`}></div>
          </div>
        )}

        {/* Enhanced Background gradient overlay - Disabled on mobile for performance */}
        {!isMobile && (
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/8 to-purple-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}

        {/* Content - Positioned over image */}
        <div className="relative z-10 p-6 flex-1 flex flex-col h-full">
          {/* Event Type Badge - Enhanced */}
          <div className="mb-4">
            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold text-white ${getEventTypeColor(event.type)} shadow-lg`}>
              {event.type.toUpperCase()}
            </span>
          </div>

          <h3 className={`text-2xl font-bold text-white mb-3 ${isMobile ? '' : 'group-hover:text-cyan-400 transition-colors duration-300'} line-clamp-2 drop-shadow-lg`}>
            {event.title}
          </h3>

          <p className="text-gray-200 text-base leading-relaxed mb-4 line-clamp-3 flex-1 drop-shadow-md">
            {event.description}
          </p>

          {/* Event Meta - Enhanced */}
          <div className="flex flex-col gap-3 text-sm text-gray-200 mb-4 drop-shadow-md">
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
                    className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/25 rounded-full text-xs text-cyan-400 font-medium backdrop-blur-sm"
                  >
                    {highlight}
                  </span>
                ))}
                {event.highlights.length > 3 && (
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500/15 to-pink-500/15 border border-purple-400/25 rounded-full text-xs text-purple-400 font-medium backdrop-blur-sm">
                    +{event.highlights.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Register Button - Always at bottom */}
          {event.registrationLink && (
            <div className="mt-auto">
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl text-cyan-400 ${isMobile ? 'active:from-cyan-500/30 active:to-purple-500/30' : 'hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400'} ${isMobile ? 'transition-colors duration-200' : 'transition-all duration-300'} flex items-center justify-center gap-2 font-medium backdrop-blur-sm`}
              >
                Register Now
              </a>
            </div>
          )}
        </div>
      </motion.div>
    )
  };

  const FeaturedEventCard = ({ event, index }: { event: Event; index: number }) => {
    // Simplified animations for mobile
    const featuredCardVariants = {
      hidden: { opacity: 0, y: isMobile ? 20 : 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: isMobile ? 0.4 : 0.8, 
          delay: isMobile ? 0 : index * 0.1 
        }
      }
    }

    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={featuredCardVariants}
        className={`group relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-black/80 ${isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-lg'} hover:border-cyan-400/50 ${isMobile ? 'transition-colors duration-200' : 'transition-all duration-300'} col-span-full md:col-span-3 min-h-[500px] flex flex-col`}
      >
        {/* Background Image - Full Card */}
        {event.image && (
          <div className="absolute inset-0">
            <img
              src={event.image}
              alt={event.title}
              className={`w-full h-full object-cover ${isMobile ? '' : 'group-hover:scale-105'} ${isMobile ? '' : 'transition-transform duration-500'}`}
              loading="lazy"
            />
            {/* Dark overlay for text readability */}
            <div className={`absolute inset-0 bg-black/60 ${isMobile ? '' : 'group-hover:bg-black/50'} ${isMobile ? '' : 'transition-all duration-300'}`}></div>
          </div>
        )}

        {/* Enhanced Background gradient overlay - Disabled on mobile for performance */}
        {!isMobile && (
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}

        {/* Content - Positioned over image */}
        <div className="relative z-10 p-8 flex flex-col justify-between h-full">
          {/* Top Section - Badges and Title */}
          <div>
            {/* Event Type Badge */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${getEventTypeColor(event.type)} shadow-lg backdrop-blur-sm`}>
                {event.type.toUpperCase()}
              </span>
            </div>

            <h3 className={`text-3xl lg:text-4xl font-bold text-white mb-4 ${isMobile ? '' : 'group-hover:text-cyan-400 transition-colors duration-300'} drop-shadow-lg`}>
              {event.title}
            </h3>

            <p className="text-gray-200 text-lg leading-relaxed mb-6 drop-shadow-md">
              {event.description}
            </p>

            {/* Event Meta - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-200 mb-6 drop-shadow-md">
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
                <h4 className="text-lg font-semibold text-white mb-3 drop-shadow-lg">Event Details</h4>
                <div className="flex flex-wrap gap-3">
                  {event.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-sm text-cyan-400 font-medium backdrop-blur-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Register Button - Bottom */}
          {event.registrationLink && (
            <div className="mt-6">
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-xl ${isMobile ? 'active:from-cyan-400 active:to-purple-400' : 'hover:from-cyan-400 hover:to-purple-400 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105'} ${isMobile ? 'transition-colors duration-200' : 'transition-all duration-300'} backdrop-blur-sm`}
              >
                Register Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </motion.div>
    )
  };

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
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-lg xs:text-xl text-gray-400 max-w-xs xs:max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto mb-6 xs:mb-8">
            Join us for exciting workshops, hackathons, and learning experiences 
            that will shape your future in technology.
          </p>
        </motion.div>

        {/* Events Content */}
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
      </div>
    </section>
  )
}
