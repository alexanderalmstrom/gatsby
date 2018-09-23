import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import styles from './page.module.scss'

class Page extends React.Component {
	render () {
		const page = this.props.data.contentfulPage

		return (
			<Layout>
				{ page ? (
					<article className={styles.page}>
						<h1 className={styles.pageTitle}>
							{page.name}
						</h1>
						<div
							className={styles.pageContent}
							dangerouslySetInnerHTML={{
								__html: page.content.content
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
		contentfulPage(slug: { eq: $slug }) {
			name
			content {
				content
			}
		}
	}
`

export default Page