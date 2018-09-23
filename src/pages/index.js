import React from 'react'
import { graphql, Link } from 'gatsby'

import { stripHTML } from '../services/helpers'

import Layout from '../components/layout'
import styles from '../templates/post.module.scss'

class Index extends React.Component {
	render () {
		const posts = this.props.data.allContentfulPost.edges

		return (
			<Layout>
				{ posts ? (
					posts.map(entry => {
						return (
							<div key={entry.node.id} className={styles.articleItem}>
								<h2>
									<Link to={`/article/${entry.node.slug}/`}>
										{entry.node.name}
									</Link>
								</h2>
								<div
									dangerouslySetInnerHTML={{
										__html: stripHTML(entry.node.content.childMarkdownRemark.html)
									}}
								/>
							</div>
						)
					})
				) : null }
			</Layout>
		)
	}
}

export const query = graphql`
	query {
		allContentfulPost {
			edges {
				node {
					id
					slug
					name
					content {
						childMarkdownRemark {
							html
						}
					}
				}
			}
		}
	}
`

export default Index
