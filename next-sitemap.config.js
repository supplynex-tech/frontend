/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://supplynex.ir',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,

  exclude: [
    '/dashboard',
    '/form/*'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/form']
      }
    ]
  }

}