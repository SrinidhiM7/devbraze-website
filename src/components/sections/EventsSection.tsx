'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, X, Info } from 'lucide-react'
import { upcomingEvents, Event } from '@/data/events'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [selectedRegistrationEvent, setSelectedRegistrationEvent] = useState<Event | null>(null)
  const [registrationModalPosition, setRegistrationModalPosition] = useState({ x: 0, y: 0 })
  const isMobile = useIsMobile(768)
  const sectionRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

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

  const handleRegistrationClick = (event: Event, cardElement: HTMLElement) => {
    if (event.id === 'code-crusade-2025') {
      // Navigate to dedicated page for Code Crusade
      router.push('/events/code-crusade-2025')
    } else {
      // For other events, open modal
      setSelectedRegistrationEvent(event)

      // Position modal at the same vertical level as the clicked card
      if (cardElement) {
        const cardRect = cardElement.getBoundingClientRect()
        const scrollY = window.scrollY

        setRegistrationModalPosition({
          x: 0, // Keep x as 0 for horizontal centering
          y: cardRect.top + scrollY
        })
      }
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
        ref={(el) => {
          if (el) {
            // Store reference for positioning
            ;(el as any)._cardElement = el
          }
        }}
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

            {/* Call to Action */}
            <div className="mb-6">
              <p className="text-gray-300 text-base leading-relaxed drop-shadow-md">
                Click below to learn more and register for this exciting event!
              </p>
            </div>
          </div>

          {/* Register Button - Bottom */}
          {event.registrationLink && (
            <div className="mt-6">
              <button
                onClick={(e) => {
                  const cardElement = (e.currentTarget as HTMLElement).closest('.group') as HTMLElement
                  handleRegistrationClick(event, cardElement)
                }}
                className={`inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-xl ${isMobile ? 'active:from-cyan-400 active:to-purple-400' : 'hover:from-cyan-400 hover:to-purple-400 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105'} ${isMobile ? 'transition-colors duration-200' : 'transition-all duration-300'} backdrop-blur-sm`}
              >
                Register Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
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
          {/* Featured Event - Code Crusade 2025 */}
          {upcomingEvents.find(event => event.id === 'code-crusade-2025') && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <FeaturedEventCard
                event={upcomingEvents.find(event => event.id === 'code-crusade-2025')!}
                index={0}
              />
            </div>
          )}

          {/* Other Upcoming Events */}
          {upcomingEvents.filter(event => event.id !== 'code-crusade-2025').length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {upcomingEvents
                .filter(event => event.id !== 'code-crusade-2025')
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

      {/* Registration Modal */}
      <AnimatePresence>
        {selectedRegistrationEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 ${isMobile ? 'bg-black/90' : 'bg-black/80 backdrop-blur-sm'} z-[60] flex items-start justify-center p-4`}
            onClick={() => setSelectedRegistrationEvent(null)}
            style={{
              paddingTop: `${registrationModalPosition.y}px`
            }}
          >
            <motion.div
              initial={{ scale: isMobile ? 0.95 : 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: isMobile ? 0.95 : 0.8, opacity: 0 }}
              transition={{ duration: isMobile ? 0.2 : 0.3 }}
              className={`${isMobile ? 'bg-gray-900' : 'bg-gray-900/95 backdrop-blur-lg'} border border-white/10 rounded-3xl p-6 sm:p-8 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] max-w-4xl max-h-[90vh] overflow-y-auto relative ${isMobile ? '' : 'shadow-2xl'}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedRegistrationEvent(null)}
                className={`absolute top-4 right-4 p-2 rounded-full ${isMobile ? 'bg-white/20' : 'bg-white/10 hover:bg-white/20'} transition-colors duration-200`}
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="space-y-6">
                {/* Header */}
                <div className="text-center border-b border-white/10 pb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Info className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedRegistrationEvent.title}</h3>
                  <p className="text-gray-400 text-lg">14-hour Innovation Marathon</p>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm text-purple-400 font-medium">
                      HACKATHON
                    </span>
                  </div>
                </div>

                {/* Event Overview */}
                <div className="bg-gradient-to-r from-black/40 to-gray-900/40 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    Event Overview
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {selectedRegistrationEvent.fullDescription || selectedRegistrationEvent.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-white">Date & Time</div>
                          <div className="text-gray-300">November 21-22, 2025</div>
                          <div className="text-gray-400 text-sm">8:30 AM onwards</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-white">Venue</div>
                          <div className="text-gray-300">REVA University, Bengaluru</div>
                          <div className="text-gray-400 text-sm">School of ECE</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-cyan-400 rounded-full mt-0.5 flex-shrink-0"></div>
                        <div>
                          <div className="font-medium text-white">Registration Fee</div>
                          <div className="text-gray-300">Free</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-cyan-400 rounded-full mt-0.5 flex-shrink-0"></div>
                        <div>
                          <div className="font-medium text-white">Team Size</div>
                          <div className="text-gray-300">2-4 members</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Highlights */}
                {selectedRegistrationEvent.highlights && selectedRegistrationEvent.highlights.length > 0 && (
                  <div className="bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl p-6 border border-cyan-400/20">
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      What to Expect
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedRegistrationEvent.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technology Tracks */}
                <div className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl p-6 border border-purple-400/20">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Technology Tracks
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['AI-driven innovations', 'FinTech solutions', 'Cloud computing', 'IoT applications', 'Blockchain technology', 'Cybersecurity'].map((track, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{track}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Event Schedule */}
                <div className="bg-gradient-to-r from-black/40 to-gray-900/40 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    Event Schedule
                  </h4>
                  
                  <div className="space-y-6">
                    {/* Day 1 */}
                    <div>
                      <h5 className="text-lg font-medium text-cyan-400 mb-3">Day 1 - November 21, 2025</h5>
                      <div className="space-y-2">
                        {[
                          { time: "8:30 AM", activity: "Registration & Check-In" },
                          { time: "9:00 AM", activity: "Inauguration & Opening Address" },
                          { time: "9:30 AM", activity: "Hackathon Begins" },
                          { time: "10:45 AM", activity: "Short Break & Snacks" },
                          { time: "12:30 PM", activity: "Lunch Break" },
                          { time: "1:20 PM", activity: "Mentoring Session" },
                          { time: "4:00 PM", activity: "End of Day 1" }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-4 text-sm">
                            <span className="text-cyan-400 font-mono w-16 flex-shrink-0">{item.time}</span>
                            <div className="w-px h-4 bg-cyan-400/30"></div>
                            <span className="text-gray-300">{item.activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Day 2 */}
                    <div>
                      <h5 className="text-lg font-medium text-cyan-400 mb-3">Day 2 - November 22, 2025</h5>
                      <div className="space-y-2">
                        {[
                          { time: "9:00 AM", activity: "Hacking Resumes" },
                          { time: "10:20 AM", activity: "Short Break & Snacks" },
                          { time: "11:15 AM", activity: "Mentoring Session" },
                          { time: "12:40 PM", activity: "Hackathon Continues" },
                          { time: "2:40 PM", activity: "Demonstration & Final Evaluation" },
                          { time: "4:00 PM", activity: "Closing Ceremony & Winners Announcement" }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-4 text-sm">
                            <span className="text-cyan-400 font-mono w-16 flex-shrink-0">{item.time}</span>
                            <div className="w-px h-4 bg-cyan-400/30"></div>
                            <span className="text-gray-300">{item.activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div className="bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-2xl p-6 border border-yellow-400/20">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    Requirements
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Laptops compulsory for all participants",
                      "Team of 2-4 members (individual participation not allowed)",
                      "Basic programming knowledge required",
                      "Passion for innovation and problem-solving"
                    ].map((req, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Organizers */}
                <div className="bg-gradient-to-r from-green-500/5 to-teal-500/5 rounded-2xl p-6 border border-green-400/20">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Organized By
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-white font-medium">&lt;/DevBraze&gt;</span>
                    </div>
                    <div className="ml-6 space-y-2">
                      <div className="text-gray-300">In collaboration with:</div>
                      {['School of ECE, REVA University', 'IEEE Student Branch', 'REVA Nest'].map((org, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400/60 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{org}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl p-6 border border-blue-400/20">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Contact Coordinators
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Prof. Bhanuteja G", phone: "9035797664" },
                      { name: "Dr. Nikhat Tabassum", phone: "9986370826" },
                      { name: "Dr. Ravi Shankar D", phone: "9743508310" },
                      { name: "Prof. Veena G.N.", phone: "7022154265" }
                    ].map((coordinator, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-black/20 rounded-lg">
                        <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">
                            {coordinator.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">{coordinator.name}</div>
                          <div className="text-gray-400 text-xs">{coordinator.phone}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Register Button */}
                <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border-2 border-cyan-400/30">
                  <div className="text-center space-y-4">
                    <h4 className="text-2xl font-bold text-white">Ready to Join the Crusade?</h4>
                    <p className="text-gray-300">Secure your spot in this epic 14-hour innovation marathon!</p>
                    
                    <a
                      href="https://forms.gle/aSwhGe4uGQDNdDW9A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-xl rounded-xl ${isMobile ? 'active:from-cyan-400 active:to-purple-400' : 'hover:from-cyan-400 hover:to-purple-400 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105'} transition-all duration-300`}
                      onClick={() => setSelectedRegistrationEvent(null)}
                    >
                      Register Now
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Free Registration
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        Limited Seats
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        Team Event
                      </span>
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
