/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  // Allow dev origins for cross-origin requests
  allowedDevOrigins: ['192.168.1.5'],
}

module.exports = nextConfig

