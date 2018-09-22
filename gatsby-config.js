module.exports = {
	siteMetadata: {
		title: 'Alexander Almström',
		description: 'This is so cool'
	},
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'gatsby-site',
				short_name: 'starter',
				start_url: '/',
				background_color: '#000000',
				theme_color: '#000000',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png'
			},
		},
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-offline'
	]
}
