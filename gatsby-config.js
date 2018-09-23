let contentfulConfig

try {
  contentfulConfig = require('./.contentful')
} catch (_) {}

contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken
}

const { spaceId, accessToken } = contentfulConfig

module.exports = {
  siteMetadata: {
    title: 'Gatsby'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby',
        short_name: 'Gatsby',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png'
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images-contentful',
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}
