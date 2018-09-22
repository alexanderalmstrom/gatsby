import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'

import styles from './Layout.module.scss'

export default ({ children }) => (
	<StaticQuery
		query={graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<div className={styles.wrapper}>
				<Header data={data.site.siteMetadata} />
				<main className={styles.main}>
					{children}
				</main>
				<Footer />
			</div>
		)}
	/>
)
