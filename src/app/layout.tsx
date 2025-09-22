import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://devbraze.dev'),
  title: {
    default: 'DevBraze - Technical Community of School of ECE | REVA University',
    template: '%s | DevBraze - ECE Technical Community'
  },
  description: 'DevBraze is the premier technical community of School of ECE at REVA University, empowering 250+ students through innovative workshops, hackathons, and cutting-edge projects in web development, AI, IoT, and electronics.',
  keywords: [
    'DevBraze',
    'ECE technical community',
    'REVA University',
    'School of ECE',
    'electronics engineering',
    'communication engineering',
    'tech workshops',
    'hackathons',
    'programming community',
    'student innovation',
    'web development',
    'artificial intelligence',
    'IoT projects',
    'cybersecurity',
    'robotics',
    'PCB design',
    'EasyEDA',
    'technical education',
    'engineering students',
    'Bangalore tech community'
  ],
  authors: [{ name: 'DevBraze Community', url: 'https://devbraze.dev' }],
  creator: 'DevBraze Technical Community',
  publisher: 'School of ECE, REVA University',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'Technology',
  classification: 'Educational Technology Community',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/DevBraze Logo Blue Border.png', sizes: '32x32', type: 'image/png' },
      { url: '/DevBraze Logo Blue Border.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/DevBraze Logo Blue Border.png',
    apple: [
      { url: '/DevBraze Logo Blue Border.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/DevBraze Logo Blue Border.png',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devbraze.dev',
    siteName: 'DevBraze - ECE Technical Community',
    title: 'DevBraze - Technical Community of School of ECE | REVA University',
    description: 'Premier technical community empowering 250+ ECE students through innovative workshops, hackathons, and cutting-edge projects at REVA University.',
    images: [
      {
        url: 'https://devbraze.dev/DevBraze%20Logo%20Blue%20Border.png',
        width: 1200,
        height: 630,
        alt: 'DevBraze - Technical Community Logo',
        type: 'image/png',
      },
      {
        url: 'https://devbraze.dev/DevBraze%20Logo%20Blue%20Border.png',
        width: 1080,
        height: 1080,
        alt: 'DevBraze Community Logo',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@devbraze_reva',
    creator: '@devbraze_reva',
    title: 'DevBraze - Technical Community of School of ECE',
    description: 'Premier technical community empowering 250+ ECE students through innovative workshops, hackathons, and cutting-edge projects.',
    images: ['https://devbraze.dev/DevBraze%20Logo%20Blue%20Border.png'],
  },
  alternates: {
    canonical: 'https://devbraze.dev',
  },
  verification: {
    google: 'etJB6faO2R5zN5uOXwkg8JJswXHomEH5FR2jBNtbnbc',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      me: ['https://devbraze.dev', 'mailto:devbrazecommunity@gmail.com'],
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P7WQC82QDF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P7WQC82QDF');
            `,
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3FA9F5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="application-name" content="DevBraze" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="DevBraze" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DevBraze",
              "alternateName": "DevBraze Technical Community",
              "url": "https://devbraze.dev",
              "logo": "https://devbraze.dev/DevBraze%20Logo%20Blue%20Border.png",
              "description": "Premier technical community of School of ECE at REVA University, empowering students through workshops, hackathons, and technical projects.",
              "foundingDate": "2023",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-63646-48730",
                "contactType": "customer service",
                "email": "devbrazecommunity@gmail.com"
              },
              "sameAs": [
                "https://www.linkedin.com/in/devbraze-reva-204872289",
                "https://www.instagram.com/devbraze_reva"
              ],
              "memberOf": {
                "@type": "EducationalOrganization",
                "name": "REVA University",
                "department": "School of Electronics and Communication Engineering"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
