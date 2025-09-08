'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle, Users, Code, Lightbulb, Target } from 'lucide-react'

interface FormData {
  name: string
  email: string
  year: string
  branch: string
  skills: string
  interests: string[]
  reason: string
  experience: string
}

export default function JoinUsSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    year: '',
    branch: '',
    skills: '',
    interests: [],
    reason: '',
    experience: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const sectionRef = useRef<HTMLDivElement>(null)

  const interestOptions = [
    'Web Development',
    'Mobile Development',
    'AI/Machine Learning',
    'Cybersecurity',
    'IoT',
    'Blockchain',
    'Data Science',
    'DevOps',
    'UI/UX Design',
    'Cloud Computing'
  ]

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate']

  useEffect(() => {
    // Animations handled by Framer Motion
  }, [])

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.year) newErrors.year = 'Academic year is required'
    if (!formData.branch.trim()) newErrors.branch = 'Branch is required'
    if (!formData.reason.trim()) newErrors.reason = 'Please tell us why you want to join'
    if (formData.interests.length === 0) newErrors.interests = ['Please select at least one interest'] as any

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          year: '',
          branch: '',
          skills: '',
          interests: [],
          reason: '',
          experience: ''
        })
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const benefits = [
    {
      icon: Users,
      title: 'Networking',
      description: 'Connect with like-minded peers and industry professionals'
    },
    {
      icon: Code,
      title: 'Skill Development',
      description: 'Learn new technologies through hands-on projects and workshops'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Work on cutting-edge projects and research initiatives'
    },
    {
      icon: Target,
      title: 'Career Growth',
      description: 'Build your portfolio and gain industry-relevant experience'
    }
  ]

  return (
    <section id="join" ref={sectionRef} className="py-20 dotted-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join <span className="gradient-text">{"</DevBraze>"}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to be part of something amazing? Join our core team and help shape the future 
            of technology education at School of ECE.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Why Join {"</DevBraze>"}?</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {"</DevBraze>"} offers a unique opportunity to grow both personally and professionally. 
                As a core team member, you'll be at the forefront of innovation, leading initiatives 
                that impact hundreds of students.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-3 bg-devbraze-gradient rounded-xl flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-devbraze-gradient/10 border border-devbraze-blue/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3">What We're Looking For:</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Passionate about technology and innovation</li>
                <li>• Strong communication and leadership skills</li>
                <li>• Commitment to community service and learning</li>
                <li>• Experience in any technical domain (preferred but not required)</li>
                <li>• Willingness to dedicate time to {"</DevBraze>"} activities</li>
              </ul>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Apply to Join Core Team</h3>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Application submitted successfully! We'll be in touch soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400">Something went wrong. Please try again.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-field">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-devbraze-blue transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div className="form-field">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-devbraze-blue transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Year and Branch */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-field">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Academic Year *
                    </label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-devbraze-blue transition-colors duration-300"
                    >
                      <option value="">Select your year</option>
                      {years.map(year => (
                        <option key={year} value={year} className="bg-gray-800">{year}</option>
                      ))}
                    </select>
                    {errors.year && <p className="text-red-400 text-xs mt-1">{errors.year}</p>}
                  </div>

                  <div className="form-field">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Branch *
                    </label>
                    <input
                      type="text"
                      value={formData.branch}
                      onChange={(e) => setFormData(prev => ({ ...prev, branch: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-devbraze-blue transition-colors duration-300"
                      placeholder="e.g., Electronics & Communication"
                    />
                    {errors.branch && <p className="text-red-400 text-xs mt-1">{errors.branch}</p>}
                  </div>
                </div>

                {/* Interests */}
                <div className="form-field">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Areas of Interest * (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {interestOptions.map(interest => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          formData.interests.includes(interest)
                            ? 'bg-devbraze-gradient text-white'
                            : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                  {errors.interests && <p className="text-red-400 text-xs mt-1">Please select at least one interest</p>}
                </div>

                {/* Skills */}
                <div className="form-field">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Technical Skills
                  </label>
                  <input
                    type="text"
                    value={formData.skills}
                    onChange={(e) => setFormData(prev => ({ ...prev, skills: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-devbraze-blue transition-colors duration-300"
                    placeholder="e.g., Python, React, Machine Learning, etc."
                  />
                </div>

                {/* Experience */}
                <div className="form-field">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Previous Experience
                  </label>
                  <textarea
                    value={formData.experience}
                    onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-devbraze-blue transition-colors duration-300 resize-none"
                    placeholder="Tell us about any projects, internships, or relevant experience..."
                  />
                </div>

                {/* Reason */}
                <div className="form-field">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Why do you want to join DevBraze? *
                  </label>
                  <textarea
                    value={formData.reason}
                    onChange={(e) => setFormData(prev => ({ ...prev, reason: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-devbraze-blue transition-colors duration-300 resize-none"
                    placeholder="Share your motivation and what you hope to contribute to our community..."
                  />
                  {errors.reason && <p className="text-red-400 text-xs mt-1">{errors.reason}</p>}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="w-full px-6 py-4 bg-devbraze-gradient rounded-lg text-white font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Submitting Application...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Application Submitted!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Application
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
