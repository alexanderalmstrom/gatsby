import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import styles from '../components/Layout.module.scss'

class Index extends React.Component {
	render () {
		const posts = this.props.data.allContentfulPost.edges

		return (
			<Layout>
				{ posts ? (
					posts.map(entry => {
						return (
							<div key={entry.node.id} className={styles.articleItem}>
								<h2>{entry.node.name}</h2>
								<p>{entry.node.content.content}</p>
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
