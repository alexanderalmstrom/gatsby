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
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-offline'
	]
}
