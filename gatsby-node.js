const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, getNode, actions }) => {
	const { createPage } = actions

	return new Promise((resolve, reject) => {
		const postTemplate = path.resolve('./src/templates/post.js')
		resolve(
			graphql(
				`
					{
						allContentfulPost {
							edges {
								node {
									name
									slug
								}
							}
						}
					}
				`
			).then(result => {
				if (result.errors) {
					console.log(result.errors)
					reject(result.errors)
				}

				const posts = result.data.allContentfulPost.edges

				posts.forEach((post, index) => {
					createPage({
						path: `/article/${post.node.slug}/`,
						component: postTemplate,
						context: {
							slug: post.node.slug
						},
					})
				})
			})
		)
	})
}