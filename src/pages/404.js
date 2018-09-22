import React from 'react'

import Layout from '../components/Layout'

import styles from '../components/Layout.module.scss'

export default () => (
	<Layout>
		<h1 className={styles.pageTitle}>Oh no!</h1>
		<p>You broke everything :(</p>
	</Layout>
)
