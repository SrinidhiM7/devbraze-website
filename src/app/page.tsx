'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import EventsSection from '@/components/sections/EventsSection'
import TeamSection from '@/components/sections/TeamSection'
import ResourcesSection from '@/components/sections/ResourcesSection'
import JoinUsSection from '@/components/sections/JoinUsSection'

export default function Home() {
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

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Events Section */}
      <EventsSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Projects Section removed */}
      
      
      
      {/* Resources Section */}
      <ResourcesSection />
      
      {/* Join Us Section */}
      <JoinUsSection />
      
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

