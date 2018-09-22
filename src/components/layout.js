import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import styles from './layout.module.css'

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
				<main className={styles.main}>{children}</main>
			</div>
		)}
	/>
)
