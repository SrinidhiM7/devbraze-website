/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://devbraze.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://devbraze.dev/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customPriorities = {
      '/': 1.0,
      '/events': 0.8,
    }
    
    const priority = customPriorities[path] || 0.7
    
    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}