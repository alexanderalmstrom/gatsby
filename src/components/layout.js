import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'

import '../base.scss'
import styles from './layout.module.scss'

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
				<Helmet title={data.site.siteMetadata.title} />
				<Header data={data.site.siteMetadata} />
				<main className={styles.main}>
					{children}
				</main>
				<Footer />
			</div>
		)}
	/>
)
