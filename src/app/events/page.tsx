'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Info, X, ChevronLeft, ChevronRight, Users, Trophy, Lightbulb, Sparkles, Zap, Target } from 'lucide-react'
import { pastEvents, upcomingEvents, Event } from '@/data/events'
import { useIsMobile } from '@/hooks/useIsMobile'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function EventsPage() {
  const [selectedPastEvent, setSelectedPastEvent] = useState<Event | null>(null)
  const [selectedRegistrationEvent, setSelectedRegistrationEvent] = useState<Event | null>(null)
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })
  const [registrationModalPosition, setRegistrationModalPosition] = useState({ x: 0, y: 0 })
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const isMobile = useIsMobile(768)
  const sectionRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth'

    // Add scroll-triggered animations
    const handleScroll = () => {
      const scrolled = window.scrollY
      const parallaxElements = document.querySelectorAll('.parallax')

      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5')
        const yPos = -(scrolled * speed)
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const handleRegistrationClick = (event: Event, cardElement: HTMLElement) => {
    if (event.id === 'code-crusade-2025') {
      // Navigate to dedicated page for Code Crusade
      router.push('/events/code-crusade-2025')
    } else {
      // For other events, open modal (if needed in future)
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
        className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/90 to-black/90 ${isMobile ? '' : 'backdrop-blur-md'} ${isMobile ? 'active:border-cyan-400/30' : 'hover:border-cyan-400/30'} transition-colors duration-200 h-full min-h-[400px] max-h-[450px] flex flex-col ${isMobile ? 'shadow-lg' : 'shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20'} cursor-pointer`}
        onClick={(e) => handleViewPastEventDetails(event, e.currentTarget as HTMLElement)}
        {...(isMobile ? {} : { whileHover: { y: -5 }, transition: { duration: 0.2 } })}
      >
        {/* Background Image - Full Card */}
        {event.image && (
          <div className="absolute inset-0">
            <img
              src={event.image}
              alt={event.title}
              className={`w-full h-full object-cover ${isMobile ? '' : 'group-hover:scale-110 transition-transform duration-700'}`}
              loading="lazy"
              style={{ aspectRatio: '16/9' }}
            />
            {/* Dark overlay for text readability */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 ${isMobile ? '' : 'group-hover:from-black/70 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-500'}`}></div>
          </div>
        )}

        {/* Event Type Badge - Top Left */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getEventTypeColor(event.type)} shadow-lg backdrop-blur-sm`}>
            {event.type.toUpperCase()}
          </span>
        </div>

        {/* Content - Positioned at bottom */}
        <div className="relative z-10 p-6 mt-auto">
          <h3 className={`text-xl font-bold text-white mb-2 ${isMobile ? '' : 'group-hover:text-cyan-300 transition-colors duration-300'} line-clamp-2 drop-shadow-lg`}>
            {event.title}
          </h3>

          {/* Event Meta - Compact */}
          <div className="flex flex-col gap-2 text-sm text-gray-300 mb-4 drop-shadow-md">
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

          {/* View Details Button */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 ${isMobile ? 'bg-white/15' : 'bg-white/10'} ${isMobile ? '' : 'backdrop-blur-sm'} border border-white/20 rounded-lg text-white text-sm font-medium ${isMobile ? 'active:bg-white/25' : 'hover:bg-white/20 hover:border-white/30'} transition-colors duration-200 ${isMobile ? '' : 'group-hover:shadow-lg group-hover:shadow-cyan-500/20'}`}>
            <Info className="w-4 h-4" />
            View Details
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
        className={`group relative overflow-hidden rounded-3xl border border-cyan-400/30 ${isMobile ? 'bg-black/90' : 'bg-black/80 backdrop-blur-lg'} ${isMobile ? 'active:border-cyan-400/50' : 'hover:border-cyan-400/50'} transition-colors duration-200 col-span-full md:col-span-3 min-h-[500px] max-h-[550px] flex flex-col ${isMobile ? 'shadow-xl' : 'shadow-2xl hover:shadow-cyan-500/20'}`}
        {...(isMobile ? {} : { whileHover: { y: -5 }, transition: { duration: 0.2 } })}
      >
        {/* Background Image - Full Card */}
        {event.image && (
          <div className="absolute inset-0">
            <img
              src={event.image}
              alt={event.title}
              className={`w-full h-full object-cover ${isMobile ? '' : 'group-hover:scale-105 transition-transform duration-500'}`}
              loading="lazy"
              style={{ aspectRatio: '16/9' }}
            />
            {/* Dark overlay for text readability */}
            <div className={`absolute inset-0 bg-black/60 ${isMobile ? '' : 'group-hover:bg-black/50 transition-all duration-300'}`}></div>
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
                className={`inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-xl ${isMobile ? 'active:from-cyan-400 active:to-purple-400' : 'hover:from-cyan-400 hover:to-purple-400 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105'} ${isMobile ? 'transition-colors duration-200' : 'transition-all duration-300'} backdrop-blur-sm shadow-lg`}
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
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      {/* Events Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Background Image */}
          <div className="absolute inset-0">
            <motion.img
              src="/bg.jpg"
              alt="DevBraze Events Background"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-purple-900/10 to-black/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Sparkles className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-cyan-400 mb-6" />
            </motion.div>

            <h1 className="text-5xl xs:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              Our <span className="gradient-text">Events</span>
            </h1>

            <p className="text-xl xs:text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
              Where Innovation Meets Opportunity
            </p>

            <p className="text-lg xs:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              From hands-on workshops to thrilling hackathons, we create transformative experiences
              that empower our community to learn, build, and innovate together.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <div className="flex items-center gap-4 text-cyan-400">
                <Users className="w-6 h-6" />
                <span className="text-lg font-medium">Community Driven</span>
              </div>
              <div className="flex items-center gap-4 text-purple-400">
                <Trophy className="w-6 h-6" />
                <span className="text-lg font-medium">Innovation Focused</span>
              </div>
              <div className="flex items-center gap-4 text-pink-400">
                <Lightbulb className="w-6 h-6" />
                <span className="text-lg font-medium">Learning Centered</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
          />
        </div>
      </section>

      {/* Events Stats Section */}
      <section className="py-16 xs:py-20 dotted-bg-primary relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
              By the <span className="gradient-text">Numbers</span>
            </h2>
            <p className="text-lg xs:text-xl text-gray-400 max-w-2xl mx-auto">
              Our events bring together passionate individuals from diverse backgrounds
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-cyan-500 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-10 h-10 text-white drop-shadow-sm" />
              </div>
              <h3 className="text-3xl font-bold gradient-text mb-2">500+</h3>
              <p className="text-gray-400">Community Members</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-purple-500 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Trophy className="w-10 h-10 text-white drop-shadow-sm" />
              </div>
              <h3 className="text-3xl font-bold gradient-text mb-2">15+</h3>
              <p className="text-gray-400">Events Hosted</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-pink-500 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="w-10 h-10 text-white drop-shadow-sm" />
              </div>
              <h3 className="text-3xl font-bold gradient-text mb-2">1000+</h3>
              <p className="text-gray-400">Hours of Learning</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 xs:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-purple-900/10 to-pink-900/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
              Upcoming <span className="gradient-text">Events</span>
            </h2>
            <p className="text-lg xs:text-xl text-gray-400 max-w-2xl mx-auto">
              Don't miss out on our upcoming workshops, hackathons, and learning opportunities
            </p>
          </motion.div>

          {/* Upcoming Events Content */}
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
                <div className="w-24 h-24 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-gray-400 text-lg mb-2">No upcoming events at the moment</p>
                <p className="text-gray-500 text-sm">Check back soon for new events!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section ref={sectionRef} className="py-16 xs:py-20 dotted-bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
              Past <span className="gradient-text">Events</span>
            </h2>
            <p className="text-lg xs:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Explore our successful events and the amazing experiences we've created for our community
            </p>
          </motion.div>

          {/* Past Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pastEvents.length > 0 ? (
              pastEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="w-24 h-24 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-gray-400 text-lg">No past events available</p>
              </div>
            )}
          </div>
        </div>

        {/* Past Events Detail Modal */}
        <AnimatePresence>
          {selectedPastEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: isMobile ? 0.2 : 0.3 }}
              className={`fixed inset-0 ${isMobile ? 'bg-black/90' : 'bg-black/80 backdrop-blur-sm'} z-[50] flex items-start justify-center p-2 xs:p-4`}
              onClick={() => setSelectedPastEvent(null)}
              style={{
                paddingTop: `${modalPosition.y + (sectionRef.current?.offsetTop || 0)}px`
              }}
            >
              <motion.div
                initial={{ scale: isMobile ? 0.95 : 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: isMobile ? 0.95 : 0.8, opacity: 0 }}
                transition={{ 
                  duration: isMobile ? 0.2 : 0.3,
                  ease: isMobile ? "easeOut" : "easeInOut"
                }}
                className={`${isMobile ? 'bg-gray-900' : 'bg-gray-900/95 backdrop-blur-lg'} border border-white/10 rounded-3xl p-4 xs:p-6 sm:p-8 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] max-w-6xl max-h-[90vh] overflow-y-auto relative mx-auto ${isMobile ? '' : 'shadow-2xl'}`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPastEvent(null)}
                  className={`absolute top-4 right-4 p-2 rounded-full ${isMobile ? 'bg-white/20' : 'bg-white/10 hover:bg-white/20'} transition-colors ${isMobile ? 'duration-200' : 'duration-200'} z-10`}
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Image Gallery - Left Side */}
                  <div className="flex-shrink-0 flex justify-center lg:justify-start">
                    <div className="relative">
                      <div className={`w-80 h-60 lg:w-96 lg:h-72 rounded-3xl overflow-hidden ${isMobile ? 'border-2 border-cyan-400/50' : 'border-4 border-cyan-400'}`}>
                        {selectedPastEvent.images && selectedPastEvent.images.length > 0 ? (
                          <img
                            src={selectedPastEvent.images[currentImageIndex]}
                            alt={`${selectedPastEvent.title} - Image ${currentImageIndex + 1}`}
                            className={`w-full h-full object-cover ${isMobile ? '' : 'rounded-3xl'}`}
                            style={{ aspectRatio: '16/9' }}
                            loading="lazy"
                          />
                        ) : (
                          <img
                            src={selectedPastEvent.image}
                            alt={selectedPastEvent.title}
                            className={`w-full h-full object-cover ${isMobile ? '' : 'rounded-3xl'}`}
                            style={{ aspectRatio: '16/9' }}
                            loading="lazy"
                          />
                        )}
                      </div>

                      {/* Image Navigation for multiple images */}
                      {selectedPastEvent.images && selectedPastEvent.images.length > 1 && (
                        <>
                          {/* Navigation Buttons */}
                          <button
                            onClick={prevImage}
                            className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 ${isMobile ? 'bg-black/70' : 'bg-black/50 hover:bg-black/70'} rounded-full text-white transition-colors ${isMobile ? 'duration-150' : 'duration-200'} touch-manipulation z-10`}
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={nextImage}
                            className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 ${isMobile ? 'bg-black/70' : 'bg-black/50 hover:bg-black/70'} rounded-full text-white transition-colors ${isMobile ? 'duration-150' : 'duration-200'} touch-manipulation z-10`}
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>

                          {/* Thumbnail Images */}
                          <div className={`flex gap-2 overflow-x-auto pb-2 mt-4 ${isMobile ? 'scrollbar-hide' : ''}`}>
                            {selectedPastEvent.images.map((image, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-colors ${isMobile ? 'duration-150' : 'duration-200'} touch-manipulation ${
                                  index === currentImageIndex
                                    ? 'border-cyan-400'
                                    : `border-gray-600 ${isMobile ? 'active:border-gray-500' : 'hover:border-gray-500'}`
                                }`}
                              >
                                <img
                                  src={image}
                                  alt={`Thumbnail ${index + 1}`}
                                  className="w-full h-full object-cover"
                                  style={{ aspectRatio: '16/9' }}
                                />
                              </button>
                            ))}
                          </div>

                          {/* Image Counter */}
                          <div className="text-center text-xs text-gray-400 mt-2">
                            {currentImageIndex + 1} / {selectedPastEvent.images.length}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Content - Right Side */}
                  <div className="flex-1 space-y-6">
                    <div className="text-center lg:text-left">
                      {/* Event Type Badge */}
                      <div className="mb-4 flex justify-center lg:justify-start">
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${getEventTypeColor(selectedPastEvent.type)}`}>
                          {selectedPastEvent.type.toUpperCase()}
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{selectedPastEvent.title}</h3>

                      {/* Event Meta */}
                      <div className="flex flex-col gap-3 text-sm text-gray-400 mb-6">
                        <div className="flex items-center gap-2 justify-center lg:justify-start">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span className="font-medium">{formatDate(selectedPastEvent.date)}</span>
                        </div>
                        {selectedPastEvent.location && (
                          <div className="flex items-center gap-2 justify-center lg:justify-start">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            <span className="font-medium">{selectedPastEvent.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Full Description */}
                    <div>
                      <h4 className="text-lg lg:text-xl font-semibold text-white mb-3">About the Event</h4>
                      <p className="text-gray-300 leading-relaxed text-base whitespace-pre-line">
                        {selectedPastEvent.fullDescription || selectedPastEvent.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    {selectedPastEvent.highlights && selectedPastEvent.highlights.length > 0 && (
                      <div>
                        <h4 className="text-lg lg:text-xl font-semibold text-white mb-3">Event Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedPastEvent.highlights.map((highlight, idx) => (
                            <span
                              key={highlight}
                              className="px-3 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-sm text-cyan-400"
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

      {/* Call to Action Section */}
      <section className="py-16 xs:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-purple-900/10 to-pink-900/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Target className="w-16 h-16 mx-auto text-cyan-400 mb-6" />
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Join Us?</span>
            </h2>
            <p className="text-lg xs:text-xl text-gray-400 mb-8 leading-relaxed">
              Be part of our vibrant community of innovators, creators, and learners.
              Stay updated with our latest events and opportunities.
            </p>

            <div className="flex justify-center">
              <motion.a
                href="/#contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Registration Modal */}
      <AnimatePresence>
        {selectedRegistrationEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: isMobile ? 0.2 : 0.3 }}
            className={`fixed inset-0 ${isMobile ? 'bg-black/90' : 'bg-black/80 backdrop-blur-sm'} z-[50] flex items-start justify-center p-4`}
            onClick={() => setSelectedRegistrationEvent(null)}
            style={{
              paddingTop: `${registrationModalPosition.y}px`
            }}
          >
            <motion.div
              initial={{ scale: isMobile ? 0.95 : 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: isMobile ? 0.95 : 0.8, opacity: 0 }}
              transition={{ 
                duration: isMobile ? 0.2 : 0.3,
                ease: isMobile ? "easeOut" : "easeInOut"
              }}
              className={`${isMobile ? 'bg-gray-900' : 'bg-gray-900/95 backdrop-blur-lg'} border border-white/10 rounded-3xl p-6 sm:p-8 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] max-w-4xl max-h-[90vh] overflow-y-auto relative ${isMobile ? '' : 'shadow-2xl'}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedRegistrationEvent(null)}
                className={`absolute top-4 right-4 p-2 rounded-full ${isMobile ? 'bg-white/20' : 'bg-white/10 hover:bg-white/20'} transition-colors ${isMobile ? 'duration-200' : 'duration-200'} z-10`}
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
                      href={selectedRegistrationEvent.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-xl rounded-xl ${isMobile ? 'active:from-cyan-400 active:to-purple-400' : 'hover:from-cyan-400 hover:to-purple-400 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105'} ${isMobile ? 'transition-colors duration-200' : 'transition-all duration-300'} backdrop-blur-sm shadow-lg`}
                    >
                      Register Now
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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

      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-devbraze-gradient rounded-full blur-3xl parallax" data-speed="0.3"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-devbraze-gradient rounded-full blur-3xl parallax" data-speed="0.5"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-devbraze-gradient rounded-full blur-3xl parallax" data-speed="0.4"></div>
      </div>
    </main>
  )
}