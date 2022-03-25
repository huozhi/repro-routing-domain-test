module.exports = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },
  async rewrites() {
    {
      return [
        {
          destination: '/en/betway.com',
          has: [{ key: 'x-bwg-host', type: 'header', value: 'betway.com' }],
          locale: false,
          source: '/en/',
        },
        {
          destination: '/de/betway.com',
          has: [{ key: 'x-bwg-host', type: 'header', value: 'betway.com' }],
          locale: false,
          source: '/de/',
        },
      ]
    }
  },
}
