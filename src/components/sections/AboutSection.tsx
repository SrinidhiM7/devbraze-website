'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Lightbulb, Rocket, Heart, Star, Code, BookOpen } from 'lucide-react'

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animations will be handled by Framer Motion
  }, [])

  const values = [
    {
      icon: Code,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building together, learning from each other'
    },
    {
      icon: BookOpen,
      title: 'Learning',
      description: 'Continuous growth and knowledge sharing'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Striving for the highest standards in everything'
    }
  ]

  const achievements = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To create a vibrant ecosystem where ECE students can explore, innovate, and excel in technology while building meaningful connections and real-world skills.'
    },
    {
      icon: Lightbulb,
      title: 'Our Vision',
      description: 'To be the leading technical community that transforms passionate students into industry-ready professionals and innovative problem solvers.'
    },
    {
      icon: Rocket,
      title: 'Our Impact',
      description: 'Empowering 250+ students through 45+ events, fostering innovation through 30+ projects, and creating pathways to successful tech careers.'
    }
  ]

  return (
    <section id="about" ref={sectionRef} className="py-16 xs:py-20 dotted-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 xs:mb-16"
        >
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">{"</DevBraze>"}</span>
          </h2>
          <p className="text-lg xs:text-xl text-gray-400 max-w-xs xs:max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto">
            We are more than just a technical community - we're a family of passionate ECE students 
            united by our love for technology and innovation.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 xs:gap-12 mb-16 xs:mb-20">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 xs:space-y-6"
          >
            <div className="about-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl xs:rounded-2xl p-6 xs:p-8">
              <h3 className="text-xl xs:text-2xl font-bold text-white mb-3 xs:mb-4 flex items-center gap-2 xs:gap-3">
                <Heart className="text-red-400 w-5 h-5 xs:w-6 xs:h-6" />
                Our Story
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3 xs:mb-4 text-sm xs:text-base">
                {"</DevBraze>"} was born from a simple idea: to create a space where ECE students could 
                come together to learn, build, and grow. Founded by passionate students who believed 
                in the power of community-driven learning, we've evolved into the premier technical 
                community of the School of ECE.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm xs:text-base">
                What started as a small group of coding enthusiasts has grown into a vibrant 
                ecosystem of 250+ members, spanning various domains from web development and AI 
                to IoT and cybersecurity. We're not just about technical skills - we're about 
                building lasting friendships and professional networks.
              </p>
            </div>

            <div className="about-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl xs:rounded-2xl p-6 xs:p-8">
              <h3 className="text-xl xs:text-2xl font-bold text-white mb-3 xs:mb-4">
                School of <span className="text-devbraze-blue">ECE</span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm xs:text-base">
                As part of the prestigious School of Electronics and Communication Engineering, 
                {"</DevBraze>"} represents the innovative spirit and technical excellence that defines 
                our institution. We bridge the gap between academic learning and industry 
                requirements, preparing students for successful careers in technology.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Mission, Vision, Impact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 xs:space-y-6"
          >
            {achievements.map((item, index) => (
              <div
                key={item.title}
                className="about-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl xs:rounded-2xl p-6 xs:p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-3 xs:gap-4">
                  <div className="p-2 xs:p-3 bg-devbraze-gradient rounded-lg xs:rounded-xl flex-shrink-0">
                    <item.icon className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg xs:text-xl font-bold text-white mb-2 xs:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm xs:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 xs:mb-12"
        >
          <h3 className="text-2xl xs:text-3xl font-bold text-white mb-3 xs:mb-4">Our Core Values</h3>
          <p className="text-gray-400 text-base xs:text-lg max-w-xs xs:max-w-lg sm:max-w-2xl mx-auto">
            These values guide everything we do and shape the culture of our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="value-item text-center p-4 xs:p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="inline-flex p-3 xs:p-4 bg-devbraze-gradient rounded-xl mb-3 xs:mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-6 h-6 xs:w-8 xs:h-8 text-white" />
              </div>
              <h4 className="text-lg xs:text-xl font-bold text-white mb-1 xs:mb-2">{value.title}</h4>
              <p className="text-gray-400 text-xs xs:text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 xs:mt-16"
        >
        </motion.div>
      </div>
    </section>
  )
}
