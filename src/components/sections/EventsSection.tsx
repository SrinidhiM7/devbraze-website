'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Info, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { pastEvents, upcomingEvents, Event } from '@/data/events'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState<'past' | 'upcoming'>('upcoming')
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [selectedPastEvent, setSelectedPastEvent] = useState<Event | null>(null)
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
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

  const handleViewPastEventDetails = (event: Event, cardElement: HTMLElement) => {
    setSelectedPastEvent(event)
    setCurrentImageIndex(0)

    // Position modal at the same vertical level as the clicked card
    if (sectionRef.current && cardElement) {
      const sectionRect = sectionRef.current.getBoundingClientRect()
      const cardRect = cardElement.getBoundingClientRect()

      setModalPosition({
        x: 0, // Keep x as 0 for horizontal centering
        y: cardRect.top - sectionRect.top
      })
    }
  }

  const nextImage = () => {
    if (selectedPastEvent?.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedPastEvent.images!.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedPastEvent?.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedPastEvent.images!.length - 1 : prev - 1
      )
    }
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

          {/* View More Button - Always at bottom */}
          <div className="mt-auto">
            <button
              onClick={(e) => handleViewPastEventDetails(event, e.currentTarget.closest('.group') as HTMLElement)}
              className={`w-full px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-xl text-cyan-400 ${isMobile ? 'active:from-cyan-500/30 active:to-purple-500/30' : 'hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400'} ${isMobile ? 'transition-colors duration-200' : 'transition-all duration-300'} flex items-center justify-center gap-2 font-medium backdrop-blur-sm`}
            >
              <Info className="w-4 h-4" />
              View More
            </button>
          </div>
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

      {/* Past Events Detail Modal */}
      <AnimatePresence>
        {selectedPastEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[50] flex items-start justify-center p-3 xs:p-4 sm:p-6"
            onClick={() => setSelectedPastEvent(null)}
            style={{
              paddingTop: `${modalPosition.y + (sectionRef.current?.offsetTop || 0)}px`
            }}
          >
            <motion.div
              initial={{ scale: isMobile ? 0.95 : 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: isMobile ? 0.95 : 0.8, opacity: 0 }}
              transition={{ duration: isMobile ? 0.2 : 0.3 }}
              className={`bg-gray-900/95 ${isMobile ? 'backdrop-blur-sm' : 'backdrop-blur-lg'} border border-white/10 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto relative mx-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPastEvent(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 z-10 touch-manipulation"
              >
                <X className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
              </button>

              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
                {/* Image Gallery - Left Side */}
                <div className="flex-shrink-0 lg:w-1/2">
                  <div className="relative">
                    {/* Main Image */}
                    <div className="relative h-64 sm:h-80 lg:h-96 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden mb-3 sm:mb-4">
                      {selectedPastEvent.images && selectedPastEvent.images.length > 0 ? (
                        <img
                          src={selectedPastEvent.images[currentImageIndex]}
                          alt={`${selectedPastEvent.title} - Image ${currentImageIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={selectedPastEvent.image}
                          alt={selectedPastEvent.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    {/* Image Navigation */}
                    {selectedPastEvent.images && selectedPastEvent.images.length > 1 && (
                      <>
                        {/* Navigation Buttons */}
                        <button
                          onClick={prevImage}
                          className={`absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-3 sm:p-2 bg-black/50 ${isMobile ? 'active:bg-black/70' : 'hover:bg-black/70'} rounded-full text-white transition-colors touch-manipulation`}
                        >
                          <ChevronLeft className="w-5 h-5 sm:w-5 sm:h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className={`absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-3 sm:p-2 bg-black/50 ${isMobile ? 'active:bg-black/70' : 'hover:bg-black/70'} rounded-full text-white transition-colors touch-manipulation`}
                        >
                          <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5" />
                        </button>

                        {/* Thumbnail Images */}
                        <div className="flex gap-2 sm:gap-2 overflow-x-auto pb-2">
                          {selectedPastEvent.images.map((image, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`flex-shrink-0 w-16 h-16 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 ${isMobile ? '' : 'transition-colors'} touch-manipulation ${
                                index === currentImageIndex
                                  ? 'border-cyan-400'
                                  : isMobile ? 'border-gray-600' : 'border-gray-600 hover:border-gray-500'
                              }`}
                            >
                              <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>

                        {/* Image Counter */}
                        <div className="text-center text-xs sm:text-sm text-gray-400 mt-2">
                          {currentImageIndex + 1} / {selectedPastEvent.images.length}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Content - Right Side */}
                <div className="flex-1 space-y-4 sm:space-y-6">
                  <div>
                    {/* Event Type Badge */}
                    <div className="mb-4">
                      <span className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-white ${getEventTypeColor(selectedPastEvent.type)}`}>
                        {selectedPastEvent.type.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                      {selectedPastEvent.title}
                    </h3>

                    {/* Event Meta */}
                    <div className="flex flex-col gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                        <span className="font-medium">{formatDate(selectedPastEvent.date)}</span>
                      </div>
                      {selectedPastEvent.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                          <span className="font-medium">{selectedPastEvent.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Full Description */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">About the Event</h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed whitespace-pre-line">
                      {selectedPastEvent.fullDescription || selectedPastEvent.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  {selectedPastEvent.highlights && selectedPastEvent.highlights.length > 0 && (
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Event Highlights</h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {selectedPastEvent.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-xs sm:text-sm text-cyan-400 font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
