'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, Calendar, Code, Trophy, Handshake, Briefcase, 
  GitBranch, BookOpen, Award, Network, Star, TrendingUp, Medal
} from 'lucide-react'
import { achievements, Achievement } from '@/data/achievements'

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const iconMap = {
    Users,
    Calendar,
    Code,
    Trophy,
    Handshake,
    Briefcase,
    GitBranch,
    BookOpen,
    Award,
    Network,
    Medal
  }

  // Filter member achievements (awards, hackathon wins, recognitions)
  const memberAchievements = achievements.filter(a => 
    a.type === 'award' || a.type === 'recognition' || (a.type === 'milestone' && a.title.includes('Placement'))
  )

  const milestones = achievements.filter(a => a.type === 'milestone' && a.value)

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'award':
        return 'from-yellow-500 to-orange-500'
      case 'recognition':
        return 'from-green-500 to-emerald-500'
      case 'milestone':
        return 'from-blue-500 to-cyan-500'
      default:
        return 'from-purple-500 to-pink-500'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'award':
        return Trophy
      case 'recognition':
        return Star
      case 'milestone':
        return Medal
      default:
        return Award
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    })
  }

  const AchievementCard = ({ achievement, index }: { achievement: Achievement; index: number }) => {
    const IconComponent = iconMap[achievement.icon as keyof typeof iconMap]
    const TypeIcon = getTypeIcon(achievement.type)
    
    return (
      <div className="relative group h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
        <div className="relative bg-black/60 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-4 xs:p-6 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col">
          {/* Achievement Type Badge */}
          <div className="absolute top-3 xs:top-4 right-3 xs:right-4">
            <div className={`p-1.5 xs:p-2 rounded-lg bg-gradient-to-r ${getTypeColor(achievement.type)} opacity-80`}>
              <TypeIcon className="w-3 h-3 xs:w-4 xs:h-4 text-white" />
            </div>
          </div>

          {/* Main Icon */}
          <div className="flex items-center justify-center mb-4 xs:mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur-md opacity-60"></div>
              <div className="relative p-2 xs:p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-400/30">
                {IconComponent && <IconComponent className="w-8 h-8 xs:w-10 xs:h-10 text-cyan-400" />}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-lg xs:text-xl font-bold text-white mb-2 xs:mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {achievement.title}
              </h3>
              <p className="text-gray-300 text-xs xs:text-sm mb-3 xs:mb-4 leading-relaxed line-clamp-3">
                {achievement.description}
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 xs:gap-4 text-xs xs:text-sm text-gray-400 mt-auto">
              <span>{formatDate(achievement.date)}</span>
              {achievement.value && (
                <span className="text-cyan-400 font-bold text-base xs:text-lg">
                  {achievement.value}{achievement.unit}
                </span>
              )}
            </div>
          </div>

          {/* Subtle hover effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    )
  }

  return (
    <section id="achievements" ref={sectionRef} className="py-20 dotted-bg-primary relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 xs:mb-16"
        >
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
            Member <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-lg xs:text-xl text-gray-400 max-w-3xl mx-auto px-4 xs:px-0">
            Celebrating the outstanding accomplishments of our community members in hackathons, 
            competitions, and professional achievements.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="mb-12 xs:mb-16">
          <div className="max-w-6xl mx-auto">
            {memberAchievements.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8">
                  {memberAchievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative"
                    >
                      <AchievementCard achievement={achievement} index={index} />
                    </motion.div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-base xs:text-lg">No achievements to display at the moment.</p>
              </div>
            )}
          </div>
        </div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6"
        >
          {milestones.slice(0, 4).map((milestone, index) => {
            const IconComponent = iconMap[milestone.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 xs:p-6 bg-black/40 backdrop-blur-lg border border-cyan-500/20 rounded-xl hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className="inline-flex p-2 xs:p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl mb-3 xs:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {IconComponent && <IconComponent className="w-6 h-6 xs:w-8 xs:h-8 text-cyan-400" />}
                </div>
                <div className="text-xl xs:text-2xl md:text-3xl font-bold text-white mb-1 xs:mb-2">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {milestone.value}{milestone.unit}
                  </span>
                </div>
                <h3 className="text-xs xs:text-sm font-semibold text-white mb-1">{milestone.title}</h3>
                <p className="text-xs text-gray-400">{milestone.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

    </section>
  )
}