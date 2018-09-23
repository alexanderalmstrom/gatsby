import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import styles from './post.module.scss'

class Post extends React.Component {
	render () {
		const post = this.props.data.contentfulPost

		return (
			<Layout>
				{ post ? (
					<article className={styles.article}>
						<h1 className={styles.articleTitle}>
							{post.name}
						</h1>
						<div
							className={styles.articleContent}
							dangerouslySetInnerHTML={{
								__html: post.content.content
							}}
						/>
					</article>
				) : null }
			</Layout>
		)
	}
}

export const query = graphql`
	query($slug: String!) {
		contentfulPost(slug: { eq: $slug }) {
			name
			content {
				content
			}
		}
	}
`

export default Post