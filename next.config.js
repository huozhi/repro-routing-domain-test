module.exports = {
  i18n: {
    locales: ['nl', 'fr', 'de'],
    defaultLocale: 'de',
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/de',
          destination: '/de/betway.com',
          has: [{ key: 'x-bwg-host', type: 'header', value: 'betway.com' }],
          locale: false,
        },
        {
          source: '/fr',
          destination: '/fr/betway.com',
          has: [{ key: 'x-bwg-host', type: 'header', value: 'betway.com' }],
          locale: false,
        },
        {
          source: '/nl',
          destination: '/nl/betway.com',
          has: [{ key: 'x-bwg-host', type: 'header', value: 'betway.com' }],
          locale: false,
        },
        {
          source: '/de',
          destination: '/de/betway.com',
          has: [{ key: 'x-bwg-host', type: 'header', value: 'betway.com' }],
          locale: false,
        }, 
      ],
    }
  },
}
