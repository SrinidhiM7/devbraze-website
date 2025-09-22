import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events - DevBraze Technical Community',
  description: 'Explore DevBraze events including workshops, hackathons, and seminars. Join our technical community events at School of ECE, REVA University for hands-on learning in web development, AI, IoT, and electronics.',
  keywords: [
    'DevBraze events',
    'ECE workshops',
    'hackathons',
    'technical seminars',
    'EasyEDA workshop',
    'PCB design',
    'Tech Fusion hackathon',
    'Figma workshop',
    'Diamante hackathon',
    'Web3 blockchain',
    'TechMania competition',
    'programming events',
    'REVA University events',
    'student competitions',
    'tech community events'
  ],
  openGraph: {
    title: 'Events - DevBraze Technical Community',
    description: 'Join our exciting technical events including workshops, hackathons, and competitions at School of ECE, REVA University.',
    url: 'https://devbraze.dev/events',
    type: 'website',
    images: [
      {
        url: 'https://devbraze.dev/images/Tech%20fusion%20hackathon%20images/Picture1.jpg',
        width: 1200,
        height: 630,
        alt: 'DevBraze Tech Events and Workshops',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events - DevBraze Technical Community',
    description: 'Join our exciting technical events including workshops, hackathons, and competitions.',
    images: ['https://devbraze.dev/images/Tech%20fusion%20hackathon%20images/Picture1.jpg'],
  },
  alternates: {
    canonical: 'https://devbraze.dev/events',
  },
}

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "DevBraze Technical Events",
            "description": "Regular technical events including workshops, hackathons, and seminars organized by DevBraze technical community.",
            "organizer": {
              "@type": "Organization",
              "name": "DevBraze",
              "url": "https://devbraze.dev"
            },
            "location": {
              "@type": "Place",
              "name": "School of ECE, REVA University",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
              }
            },
            "url": "https://devbraze.dev/events",
            "image": "https://devbraze.dev/images/Tech%20fusion%20hackathon%20images/Picture1.jpg"
          })
        }}
      />
      {children}
    </>
  )
}