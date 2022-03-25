module.exports = {
  trailingSlash: false,
  i18n: {
    locales: ['en-in', 'hi-in', 'en-gb', 'es-mx'],
    defaultLocale: 'en-gb',
  },
  async rewrites() {
    {
      return [
        {
          source: '/en-in',
          destination: '/en-in/betway.com',
          has: [{
            key: 'x-bwg-host',
            type: 'header',
            value: 'betway.com'
          }],
          locale: false,
        },
        {
          source: '/hi-in',
          destination: '/hi-in/betway.com',
          has: [{
            key: 'x-bwg-host',
            type: 'header',
            value: 'betway.com'
          }],
          locale: false,
        },
        {
          source: '/en-gb',
          destination: '/en-gb/betway.com',
          has: [{
            key: 'x-bwg-host',
            type: 'header',
            value: 'betway.com'
          }],
          locale: false,
        },
        {
          source: '/en-gb',
          destination: '/es-mx/betway.mx',
          has: [{
            key: 'x-bwg-host',
            type: 'header',
            value: 'betway.mx'
          }],
          locale: false,
        },
        {
          source: '/es-mx',
          destination: '/es-mx/betway.mx',
          has: [{
            key: 'x-bwg-host',
            type: 'header',
            value: 'betway.mx'
          }],
          locale: false,
        },
        {
          source: '/en-gb',
          destination: '/en-gb/betway.com',
          locale: false,
        },
      ]
    }
  },
}