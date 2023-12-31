module.exports = {
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'de'],
    localeDetection: false
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development'
}
