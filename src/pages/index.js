import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import styles from '../components/layout.module.scss'

class Index extends React.Component {
	render () {
		const posts = this.props.data.allContentfulPost.edges

		return (
			<Layout>
				{ posts ? (
					posts.map(entry => {
						console.log(entry)
						return (
							<div key={entry.node.id} className={styles.articleItem}>
								<h2>
									<Link to={`/article/${entry.node.slug}`}>
										{entry.node.name}
									</Link>
								</h2>
								<div
									dangerouslySetInnerHTML={{
										__html: entry.node.content.content
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
						content
					}
				}
			}
		}
	}
`

export default Index
