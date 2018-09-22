import React from 'react'

import styles from './header.module.css'

export default ({ title }) => (
	<header className={styles.header}>
		<h1>{title}</h1>
	</header>
)