'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Info, Users, Trophy, Lightbulb, Sparkles, Zap, Target, Clock, Award, Star } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CodeCrusade2025Page() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          {/* Background Image */}
          <div className="absolute inset-0">
            <motion.img
              src="/images/bg_code_crusade.jpg"
              alt="Code Crusade 2025 Background"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-black/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
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
              Code <span className="gradient-text">Crusade</span> 2025
            </h1>

            <p className="text-xl xs:text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed">
              14-Hour Innovation Marathon
            </p>

            <p className="text-lg xs:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join the ultimate coding battle where developers, innovators, and problem-solvers unite to build solutions
              addressing real-world challenges aligned with UN Sustainable Development Goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <div className="flex items-center gap-4 text-cyan-400">
                <Clock className="w-6 h-6" />
                <span className="text-lg font-medium">November 21-22, 2025</span>
              </div>
              <div className="flex items-center gap-4 text-purple-400">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-medium">REVA University</span>
              </div>
              <div className="flex items-center gap-4 text-pink-400">
                <Users className="w-6 h-6" />
                <span className="text-lg font-medium">3 Members/Team</span>
              </div>
            </div>

            <motion.a
              href="https://forms.gle/aSwhGe4uGQDNdDW9A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
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

      {/* Event Overview Section */}
      <section className="py-16 xs:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-purple-900/10 to-pink-900/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Info className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
              Event <span className="gradient-text">Overview</span>
            </h2>
            <p className="text-lg xs:text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about Code Crusade 2025
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-r from-black/40 to-gray-900/40 rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-cyan-400" />
                About the Event
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Code Crusade 2025 is a 14-hour innovation marathon bringing together developers, innovators, and problem-solvers to build solutions addressing real-world challenges aligned with UN Sustainable Development Goals. Work on cutting-edge technologies including AI, Blockchain, IoT, Cloud Computing, and Cybersecurity.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Get mentorship from industry experts, network with like-minded individuals, and compete for exciting prizes and incubation support through REVA Nest.
              </p>
            </motion.div>

            {/* Key Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl p-6 border border-cyan-400/20 text-center"
              >
                <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Date</h4>
                <p className="text-gray-300">November 21-22, 2025</p>
                <p className="text-gray-400 text-sm">Registration: 8:30 AM</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl p-6 border border-purple-400/20 text-center"
              >
                <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Venue</h4>
                <p className="text-gray-300">REVA University</p>
                <p className="text-gray-400 text-sm">School of ECE</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-pink-500/5 to-cyan-500/5 rounded-2xl p-6 border border-pink-400/20 text-center"
              >
                <Users className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Team Size</h4>
                <p className="text-gray-300">3 Members</p>
                <p className="text-gray-400 text-sm">Per Team</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-r from-green-500/5 to-teal-500/5 rounded-2xl p-6 border border-green-400/20 text-center"
              >
                <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Registration</h4>
                <p className="text-gray-300">Free</p>
                <p className="text-gray-400 text-sm">Limited Seats</p>
              </motion.div>
            </div>

            {/* What to Expect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-3xl p-8 border border-cyan-400/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-cyan-400" />
                What to Expect
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  '14-hour hackathon with mentorship',
                  'Work on cutting-edge technologies',
                  'Compete for exciting prizes & certificates',
                  'Incubation support via REVA Nest',
                  'Two-round evaluation process',
                  'Networking with industry experts'
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Evaluation Criteria */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-3xl p-8 border border-orange-400/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-orange-400" />
                Evaluation Criteria
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-3">Round 1: Idea Pre-Screening (8th November 2025)</h4>
                  <p className="text-gray-300 mb-3">Mandatory pre-qualification phase. Only shortlisted teams participate in the hackathon.</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">Submit concise presentation with Lean Canvas</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">Focus: Novelty, Innovation, SDG Alignment</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-3">Round 2: Final Prototype Demo (22nd November 2025)</h4>
                  <p className="text-gray-300 mb-3">Working prototype demonstration and final evaluation.</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">Functional prototype with live demo</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">Focus: Technical complexity, Presentation, Feasibility</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Tracks Section */}
      <section className="py-16 xs:py-20 dotted-bg-primary relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
              Technology <span className="gradient-text">Tracks</span>
            </h2>
            <p className="text-lg xs:text-xl text-gray-400 max-w-2xl mx-auto">
              Choose your battlefield and build innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { 
                name: 'GenAI + Machine Learning', 
                icon: '🤖', 
                color: 'from-blue-500/20 to-cyan-500/20',
                subthemes: ['Smart Education & Learning Tools', 'AI for Accessibility & Inclusion', 'Predictive Analytics for Urban Planning']
              },
              { 
                name: 'FinTech + Blockchain', 
                icon: '💰', 
                color: 'from-green-500/20 to-emerald-500/20',
                subthemes: ['Blockchain for Supply Chain Transparency', 'DeFi & Smart Contracts', 'Tokenized Microtransactions']
              },
              { 
                name: 'Cybersecurity + Cloud', 
                icon: '🔒', 
                color: 'from-purple-500/20 to-indigo-500/20',
                subthemes: ['Data Privacy Frameworks', 'Digital Identity & Authentication', 'Cybercrime Prevention Tools']
              },
              { 
                name: 'Internet of Things (IoT)', 
                icon: '📱', 
                color: 'from-pink-500/20 to-rose-500/20',
                subthemes: ['Smart Cities & Urban Mobility', 'Energy Monitoring & Optimization', 'Smart Agriculture & Irrigation']
              },
              { 
                name: 'Open Innovation', 
                icon: '💡', 
                color: 'from-orange-500/20 to-yellow-500/20',
                subthemes: ['Cross-disciplinary Solutions', 'Emerging Technologies', 'Sustainable Innovation']
              }
            ].map((track, idx) => (
              <motion.div
                key={track.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`bg-gradient-to-r ${track.color} rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors duration-300`}
              >
                <div className="text-4xl mb-4">{track.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{track.name}</h3>
                <div className="space-y-1">
                  {track.subthemes.slice(0, 3).map((subtheme, subIdx) => (
                    <div key={subIdx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{subtheme}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Schedule Section */}
      <section className="py-16 xs:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-purple-900/10 to-pink-900/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
              Event <span className="gradient-text">Schedule</span>
            </h2>
            <p className="text-lg xs:text-xl text-gray-400 max-w-2xl mx-auto">
              Your 14-hour journey through innovation and creativity
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Day 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Day 1 - November 21, 2025</h3>
                <p className="text-gray-400">The Beginning of Innovation</p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>

                <div className="space-y-6">
                  {[
                    { time: "8:30 AM - 9:00 AM", activity: "Registration & Check-In", icon: "📝", color: "from-blue-500 to-cyan-500", description: "Welcome participants and complete registration formalities" },
                    { time: "9:00 AM - 9:30 AM", activity: "Inauguration & Opening Address", icon: "🎤", color: "from-purple-500 to-pink-500", description: "Official launch with keynote speeches and event overview" },
                    { time: "9:30 AM - 10:20 AM", activity: "Hackathon Begins", icon: "🚀", color: "from-cyan-500 to-blue-500", description: "Start building your innovative solutions" },
                    { time: "10:20 AM - 10:45 AM", activity: "Short Break", icon: "☕", color: "from-yellow-500 to-orange-500", description: "Refresh and network with fellow participants" },
                    { time: "10:45 AM - 11:00 AM", activity: "Hackathon Continues", icon: "💻", color: "from-cyan-500 to-blue-500", description: "Continue developing your projects" },
                    { time: "11:00 AM - 11:15 AM", activity: "Snacks Distribution", icon: "🍪", color: "from-green-500 to-emerald-500", description: "Energy boost with snacks and refreshments" },
                    { time: "11:15 AM - 12:30 PM", activity: "Hackathon Continues", icon: "⚡", color: "from-cyan-500 to-blue-500", description: "Intensive coding and problem-solving session" },
                    { time: "12:30 PM - 1:20 PM", activity: "Lunch Break", icon: "🍽️", color: "from-orange-500 to-red-500", description: "Nutritious lunch and team discussions" },
                    { time: "1:20 PM - 3:00 PM", activity: "Mentoring Session", icon: "👨‍🏫", color: "from-indigo-500 to-purple-500", description: "Get guidance from industry experts" },
                    { time: "3:00 PM - 4:00 PM", activity: "Round 1 Evaluation (Optional)", icon: "📊", color: "from-pink-500 to-rose-500", description: "Optional progress check and feedback" },
                    { time: "4:00 PM", activity: "Day 1 Concludes", icon: "🏁", color: "from-gray-500 to-slate-500", description: "End of first day, see you tomorrow!" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="relative flex items-start gap-6 group"
                    >
                      {/* Timeline dot */}
                      <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>

                      {/* Content card */}
                      <div className="flex-1 bg-gradient-to-r from-black/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-1">{item.activity}</h4>
                            <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-cyan-400" />
                            <span className="text-cyan-400 font-mono text-sm font-medium">{item.time}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Day 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Day 2 - November 22, 2025</h3>
                <p className="text-gray-400">The Grand Finale</p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>

                <div className="space-y-6">
                  {[
                    { time: "9:00 AM - 10:20 AM", activity: "Hackathon Continues", icon: "💻", color: "from-cyan-500 to-blue-500", description: "Final push to complete your projects" },
                    { time: "10:20 AM - 10:40 AM", activity: "Short Break", icon: "☕", color: "from-yellow-500 to-orange-500", description: "Quick refresh before final hours" },
                    { time: "10:40 AM - 11:00 AM", activity: "Hackathon Continues", icon: "⚡", color: "from-cyan-500 to-blue-500", description: "Last coding session" },
                    { time: "11:00 AM - 11:15 AM", activity: "Snacks Distribution", icon: "🍪", color: "from-green-500 to-emerald-500", description: "Energy boost for presentations" },
                    { time: "11:15 AM - 12:40 PM", activity: "Mentoring Session", icon: "👨‍🏫", color: "from-indigo-500 to-purple-500", description: "Final mentorship and guidance" },
                    { time: "12:40 PM - 2:40 PM", activity: "Hackathon Continues", icon: "🔥", color: "from-cyan-500 to-blue-500", description: "Final touches and testing" },
                    { time: "2:40 PM - 3:20 PM", activity: "Demonstration & Final Evaluation", icon: "📊", color: "from-pink-500 to-rose-500", description: "Present your innovations to judges" },
                    { time: "3:20 PM - 4:00 PM", activity: "Closing Ceremony & Winners Announcement", icon: "🏆", color: "from-yellow-500 to-amber-500", description: "Celebrate winners and wrap up the event" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="relative flex items-start gap-6 group"
                    >
                      {/* Timeline dot */}
                      <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>

                      {/* Content card */}
                      <div className="flex-1 bg-gradient-to-r from-black/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-1">{item.activity}</h4>
                            <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-cyan-400" />
                            <span className="text-cyan-400 font-mono text-sm font-medium">{item.time}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 xs:py-20 dotted-bg-primary relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Requirements</span>
            </h2>
            <p className="text-lg xs:text-xl text-gray-400 max-w-2xl mx-auto">
              What you need to bring to join the crusade
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-3xl p-8 border border-yellow-400/20"
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-yellow-400 mb-4">Eligibility & Team Formation</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Open to all students from REVA University",
                      "Teams of 3 members are allowed",
                      "Interdisciplinary collaboration is encouraged",
                      "No Registration Fee — participation is completely free"
                    ].map((req, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-yellow-400 mb-4">Important Rules</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "All projects must be built during the hackathon",
                      "Pre-built projects are strictly not allowed",
                      "No cloning of existing GitHub repositories",
                      "Basic programming knowledge required",
                      "Each team should provide a Lean Canvas",
                      "Projects must align with given themes and SDGs"
                    ].map((req, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organizers & Contact Section */}
      <section className="py-16 xs:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-purple-900/10 to-pink-900/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Organizers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-r from-green-500/5 to-teal-500/5 rounded-3xl p-8 border border-green-400/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-green-400" />
                Organized By
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-400 rounded-full flex-shrink-0"></div>
                  <span className="text-white font-medium text-lg">&lt;/DevBraze&gt;</span>
                </div>
                <div className="ml-7 space-y-3">
                  <div className="text-gray-300 text-sm">In collaboration with:</div>
                  {[
                    'AICTE IdeaLab',
                    'IEEE Sensor Council',
                    'IEEE Systems, Man, & Cybernetics Society',
                    'IEEE Antenna & Propagation Society',
                    'IEEE Signal Processing Society',
                    'School of ECE, REVA University',
                    'IEEE Student Branch',
                    'REVA Nest'
                  ].map((org, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400/60 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{org}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Coordinators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-3xl p-8 border border-blue-400/20"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-400" />
                Contact Coordinators
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: "Prof. Veena G.N.", phone: "7022154265" },
                  { name: "Prof. Bhanuteja G", phone: "9035797664" },
                  { name: "Dr. Nikhat Tabassum", phone: "9986370826" },
                  { name: "Dr. Ravi Shankar D", phone: "9743508318" }
                ].map((coordinator, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-black/20 rounded-xl">
                    <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
              Ready to Join the <span className="gradient-text">Crusade?</span>
            </h2>
            <p className="text-lg xs:text-xl text-gray-400 mb-8 leading-relaxed">
              Secure your spot in this epic 14-hour innovation marathon and be part of something extraordinary!
            </p>

            <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 border-2 border-cyan-400/30 mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Free Registration
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  Limited Seats Available
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Team Event (3 Members)
                </span>
              </div>
            </div>

            <motion.a
              href="https://forms.gle/aSwhGe4uGQDNdDW9A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-xl rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-devbraze-gradient rounded-full blur-3xl parallax" data-speed="0.3"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-devbraze-gradient rounded-full blur-3xl parallax" data-speed="0.5"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-devbraze-gradient rounded-full blur-3xl parallax" data-speed="0.4"></div>
      </div>
    </main>
  )
}
