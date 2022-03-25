module.exports = {
  i18n: {
    locales: ['nl', 'fr', 'de', 'zh-CN'],
    defaultLocale: 'fr',
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/betway.com',
        // locale: false,
      },
      {
        source: '/zh-CN',
        destination: '/zh-CN/betway.com',
        locale: false,
      },
      {
        source: '/nl',
        destination: '/de/betway.com',
        locale: false,
      },
      {
        source: '/zh-CN',
        destination: '/zh-CN/betway.com',
        has: [{ key: 'x-bwg-host', type: 'header', value: 'betway.com' }],
        locale: false,
      },
      {
        source: '/de',
        destination: '/de/betway.com',
        has: [{ key: 'x-bwg-host', type: 'header', value: 'betway.com' }],
        locale: false,
      },
    ]
  },
}
