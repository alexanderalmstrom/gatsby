import React from 'react'

import Layout from '../layouts/layout'
import styles from './404.module.scss'

class NotFound extends React.Component {
  render() {
    return (
      <Layout>
        <article className={styles.page}>
          <header className={styles.header}>
            <h1 className={styles.title}>Oh no!</h1>
          </header>
          <section className={styles.content}>
            <p>You broke everything :(</p>
          </section>
        </article>
      </Layout>
    )
  }
}

export default NotFound
