import React from 'react'
import { Link } from 'gatsby'

import styles from './header.module.css'

export default ({ data }) => (
	<header className={styles.header}>
		<h1>
			<Link to="/">{data.title}</Link>
		</h1>
		<nav>
			<Link to="/about/">About</Link>
		</nav>
	</header>
)
