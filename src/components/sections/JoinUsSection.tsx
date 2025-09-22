'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, MessageSquare, CheckCircle, AlertCircle, Users, Code, Lightbulb, Target } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  year: string
  branch: string
  skills: string
  interests: string[]
  otherInterest: string
  reason: string
  experience: string
}

export default function JoinUsSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    year: '',
    branch: '',
    skills: '',
    interests: [],
    otherInterest: '',
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
    'Electronics',
    'Robotics',
    'Embedded Systems',
    'PCB Design',
    'Other'
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
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }
    if (!formData.year) newErrors.year = 'Academic year is required'
    if (!formData.branch.trim()) newErrors.branch = 'Branch is required'
    if (!formData.reason.trim()) newErrors.reason = 'Please tell us why you want to join'
    if (formData.interests.length === 0) newErrors.interests = ['Please select at least one interest'] as any
    if (formData.interests.includes('Other') && !formData.otherInterest.trim()) {
      newErrors.otherInterest = 'Please specify your other interest'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY
    if (!accessKey) {
      setSubmitStatus('error')
      console.error('Missing NEXT_PUBLIC_WEB3FORMS_KEY')
      return
    }

    setIsSubmitting(true)

    try {
      const payload = {
        access_key: accessKey,
        subject: `New Core Team Application - ${formData.name} wants to join </DevBraze>`,
        from_name: formData.name,
        from_email: formData.email,
        // Custom email template
        message: `
Hello DevBraze Team,

I am writing to express my interest in joining the </DevBraze> core team. Below are my details:

PERSONAL INFORMATION:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Academic Year: ${formData.year}
• Branch: ${formData.branch}

TECHNICAL BACKGROUND:
• Skills: ${formData.skills || 'Not specified'}
• Areas of Interest: ${formData.interests.join(', ')}${formData.interests.includes('Other') && formData.otherInterest ? `\n• Other Interest: ${formData.otherInterest}` : ''}

PREVIOUS EXPERIENCE:
${formData.experience || 'No previous experience mentioned'}

MOTIVATION TO JOIN:
${formData.reason}

I am excited about the opportunity to contribute to the DevBraze community and help shape the future of technology education at School of ECE.

Looking forward to hearing from you.

Best regards,
${formData.name}
        `.trim(),
        // Basic honeypot
        botcheck: ''
      }

      console.log('Submitting to Web3Forms with payload:', payload)

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await res.json().catch(() => null)
      console.log('Web3Forms response:', { status: res.status, data })

      if (res.ok && data && (data.success === true || data.message)) {
        setSubmitStatus('success')
        console.log('Form submitted successfully!')
        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            year: '',
            branch: '',
            skills: '',
            interests: [],
            otherInterest: '',
            reason: '',
            experience: ''
          })
          setSubmitStatus('idle')
        }, 3000)
      } else {
        console.error('Web3Forms error', data)
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 3000)
      }
    } catch (error) {
      console.error('Submission failed', error)
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
      icon: Target,
      title: 'Career Growth',
      description: 'Build your portfolio and gain industry-relevant experience'
    }
  ]

  return (
    <section id="join" ref={sectionRef} className="py-16 xs:py-20 dotted-bg-secondary relative overflow-hidden">
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
            Join <span className="gradient-text">{"</DevBraze>"}</span>
          </h2>
          <p className="text-lg xs:text-xl text-gray-400 max-w-xs xs:max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto">
            Ready to be part of something amazing? Join our core team and help shape the future 
            of technology education at the School of ECE.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 xs:gap-12">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 xs:space-y-8"
          >
            <div>
              <h3 className="text-2xl xs:text-3xl font-bold text-white mb-4 xs:mb-6">Why Join {"</DevBraze>"}?</h3>
              <p className="text-gray-400 mb-6 xs:mb-8 leading-relaxed text-sm xs:text-base">
                {"</DevBraze>"} offers a unique opportunity to grow both personally and professionally. 
                As a core team member, you'll be at the forefront of innovation, leading initiatives 
                that impact hundreds of students.
              </p>
              
              <div className="space-y-4 xs:space-y-6 mb-6 xs:mb-8">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 xs:p-6">
                  <h4 className="text-base xs:text-lg font-semibold text-white mb-2 xs:mb-3">🎯 Leadership & Impact</h4>
                  <p className="text-gray-400 text-xs xs:text-sm leading-relaxed">
                    Take charge of exciting projects, mentor fellow students, and make a real difference in the tech community. 
                    Your ideas and initiatives will shape the future of technology education at our university.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 xs:p-6">
                  <h4 className="text-base xs:text-lg font-semibold text-white mb-2 xs:mb-3">🚀 Hands-on Experience</h4>
                  <p className="text-gray-400 text-xs xs:text-sm leading-relaxed">
                    Work on cutting-edge projects in electronics, robotics, web development, and more. 
                    Get access to advanced tools, equipment, and resources that aren't available in regular coursework.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 xs:p-6">
                  <h4 className="text-base xs:text-lg font-semibold text-white mb-2 xs:mb-3">🤝 Community & Networking</h4>
                  <p className="text-gray-400 text-xs xs:text-sm leading-relaxed">
                    Connect with like-minded peers, industry professionals, and alumni. Build lasting relationships 
                    that will benefit you throughout your career. Join a community that celebrates innovation and collaboration.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 xs:space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3 xs:gap-4 p-3 xs:p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-2 xs:p-3 bg-devbraze-gradient rounded-lg xs:rounded-xl flex-shrink-0">
                    <benefit.icon className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base xs:text-lg font-semibold text-white mb-1 xs:mb-2">{benefit.title}</h4>
                    <p className="text-gray-400 text-xs xs:text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-devbraze-gradient/10 border border-devbraze-blue/30 rounded-xl p-4 xs:p-6">
              <h4 className="text-base xs:text-lg font-semibold text-white mb-2 xs:mb-3">What We're Looking For:</h4>
              <ul className="space-y-1.5 xs:space-y-2 text-gray-300 text-xs xs:text-sm">
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
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl xs:rounded-2xl p-6 xs:p-8">
              <h3 className="text-xl xs:text-2xl font-bold text-white mb-4 xs:mb-6">Apply to Join Core Team</h3>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-4 xs:mb-6 p-3 xs:p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-2 xs:gap-3"
                >
                  <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 text-green-400" />
                  <span className="text-green-400 text-sm xs:text-base">Application submitted successfully! We'll be in touch soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-4 xs:mb-6 p-3 xs:p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-2 xs:gap-3"
                >
                  <AlertCircle className="w-4 h-4 xs:w-5 xs:h-5 text-red-400" />
                  <span className="text-red-400 text-sm xs:text-base">Something went wrong. Please try again.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                  <div className="form-field">
                    <label className="block text-xs xs:text-sm font-medium text-gray-300 mb-1.5 xs:mb-2">
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
                    <label className="block text-xs xs:text-sm font-medium text-gray-300 mb-1.5 xs:mb-2">
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

                {/* Phone Number */}
                <div className="form-field">
                  <label className="block text-xs xs:text-sm font-medium text-gray-300 mb-1.5 xs:mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-devbraze-blue transition-colors duration-300"
                    placeholder="10-digit phone number"
                    maxLength={10}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Year and Branch */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                  <div className="form-field">
                    <label className="block text-xs xs:text-sm font-medium text-gray-300 mb-1.5 xs:mb-2">
                      Academic Year *
                    </label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                      className="w-full px-3 xs:px-4 py-2 xs:py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-devbraze-blue transition-colors duration-300 text-sm xs:text-base"
                    >
                      <option value="">Select your year</option>
                      {years.map(year => (
                        <option key={year} value={year} className="bg-gray-800">{year}</option>
                      ))}
                    </select>
                    {errors.year && <p className="text-red-400 text-xs mt-1">{errors.year}</p>}
                  </div>

                  <div className="form-field">
                    <label className="block text-xs xs:text-sm font-medium text-gray-300 mb-1.5 xs:mb-2">
                      Branch *
                    </label>
                    <input
                      type="text"
                      value={formData.branch}
                      onChange={(e) => setFormData(prev => ({ ...prev, branch: e.target.value }))}
                      className="w-full px-3 xs:px-4 py-2 xs:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-devbraze-blue transition-colors duration-300 text-sm xs:text-base"
                      placeholder="e.g., Electronics & Communication"
                    />
                    {errors.branch && <p className="text-red-400 text-xs mt-1">{errors.branch}</p>}
                  </div>
                </div>

                {/* Interests */}
                <div className="form-field">
                  <label className="block text-xs xs:text-sm font-medium text-gray-300 mb-2 xs:mb-3">
                    Areas of Interest * (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 xs:gap-2">
                    {interestOptions.map(interest => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-2.5 xs:px-3 py-1.5 xs:py-2 rounded-lg text-xs xs:text-sm font-medium transition-all duration-300 ${
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
                  
                  {/* Other Interest Field */}
                  {formData.interests.includes('Other') && (
                    <div className="mt-3">
                      <label className="block text-xs xs:text-sm font-medium text-gray-300 mb-1.5 xs:mb-2">
                        Please specify your other interest *
                      </label>
                      <input
                        type="text"
                        value={formData.otherInterest}
                        onChange={(e) => setFormData(prev => ({ ...prev, otherInterest: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-devbraze-blue transition-colors duration-300"
                        placeholder="Describe your other area of interest..."
                      />
                      {errors.otherInterest && <p className="text-red-400 text-xs mt-1">{errors.otherInterest}</p>}
                    </div>
                  )}
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
