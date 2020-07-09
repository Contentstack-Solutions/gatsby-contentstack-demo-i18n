const languages = require('./src/i18n/languages')

module.exports = {
  siteMetadata: {
    title: 'Gatsby + Contentstack',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentstack',
      options:{
        'api_key':'api_key',
        'delivery_token':'delivery_token',
        'environment':'staging',
        // Optional: expediteBuild set this to either true or false
        'expediteBuild': true,
        // Optional: Specify true if you want to generate custom schema
        'enableSchemaGeneration' : true,
        // Optional: Specify a different prefix for types. This is useful in cases where you have multiple instances of the plugin to be connected to different stacks.
        'type_prefix': `Contentstack`, // (default)
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: Object.keys(languages.locales),
        defaultLanguage: languages.defaultLocale,
        redirect: false,
      },
    },
    'gatsby-plugin-react-helmet'
  ],
}