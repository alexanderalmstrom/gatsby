import React from 'react'

import Layout from '../components/layout'
import styles from '../components/layout.module.scss'

export default () => (
	<Layout>
		<h1 className={styles.pageTitle}>About</h1>
		<p>This is the about page.</p>
	</Layout>
)
