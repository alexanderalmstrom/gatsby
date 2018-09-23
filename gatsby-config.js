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
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Gatsby',
				short_name: 'Gatsby',
				start_url: '/',
				background_color: '#f7f0eb',
				theme_color: '#a2466c',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png'
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: contentfulConfig
		},
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-offline',
		'gatsby-transformer-remark'
	]
}
