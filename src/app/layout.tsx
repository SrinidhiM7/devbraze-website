import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://devbraze.com'),
  title: '</DevBraze> - Technical Community of School of ECE',
  description: '</DevBraze> is the premier technical community of School of ECE, fostering innovation, learning, and collaboration among ECE students through workshops, hackathons, and technical projects.',
  keywords: '</DevBraze>, ECE, technical community, programming, technology, workshops, hackathons',
  authors: [{ name: '</DevBraze> Community' }],
  icons: {
    icon: '/DevBraze Logo Blue Border.png',
    shortcut: '/DevBraze Logo Blue Border.png',
    apple: '/DevBraze Logo Blue Border.png',
  },
  openGraph: {
    title: '</DevBraze> - Technical Community of School of ECE',
    description: 'Premier technical community fostering innovation and learning among ECE students',
    url: 'https://devbraze.com',
    siteName: '</DevBraze>',
    images: [
      {
        url: '/DevBraze Logo Blue Border.png',
        width: 1200,
        height: 630,
        alt: 'DevBraze Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '</DevBraze> - Technical Community of School of ECE',
    description: 'Premier technical community fostering innovation and learning among ECE students',
    images: ['/DevBraze Logo Blue Border.png'],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  )
}
