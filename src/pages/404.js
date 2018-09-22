import React from 'react'

import Layout from '../components/layout'
import styles from '../components/layout.module.scss'

export default () => (
	<Layout>
		<h1 className={styles.pageTitle}>Oh no!</h1>
		<p>You broke everything :(</p>
	</Layout>
)
