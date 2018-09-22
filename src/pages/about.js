import React from 'react'

import Layout from '../components/Layout'
import styles from '../components/Layout.module.scss'

export default () => (
	<Layout>
		<h1 className={styles.pageTitle}>About</h1>
		<p>This is the about page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed auctor nisl. Quisque euismod nisl felis, ac efficitur lorem semper a. Aliquam condimentum dolor diam, vel rhoncus elit porttitor ut. Sed ornare euismod turpis, quis porttitor metus.</p>
	</Layout>
)
