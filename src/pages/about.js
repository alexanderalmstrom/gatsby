import React from 'react'

import Layout from '../components/layout'
import styles from '../components/layout.module.scss'

export default () => (
	<Layout>
		<h1 className={styles.pageTitle}>About</h1>
		<p>This is the about page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed auctor nisl. Quisque euismod nisl felis, ac efficitur lorem semper a. Aliquam condimentum dolor diam, vel rhoncus elit porttitor ut. Sed ornare euismod turpis, quis porttitor metus.</p>
	</Layout>
)
