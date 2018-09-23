import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import styles from './post.module.scss'

class Post extends React.Component {
	render () {
		const { data } = this.props
		const { title } = data.site.siteMetadata
		const post = data.contentfulPost

		return (
			<Layout>
				<Helmet title={`${post.name} - ${title}`} />
				{ post ? (
					<article className={styles.article}>
						<h1 className={styles.articleTitle}>
							{post.name}
						</h1>
						<div
							className={styles.articleContent}
							dangerouslySetInnerHTML={{
								__html: post.content.childMarkdownRemark.html
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
		site {
			siteMetadata {
				title
			}
		}
		contentfulPost(slug: { eq: $slug }) {
			name
			content {
				childMarkdownRemark {
					html
				}
			}
		}
	}
`

export default Post