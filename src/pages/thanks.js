import React from 'react'

import Layout from '../layouts/layout'
import styles from '../layouts/page.module.scss'

class Thanks extends React.Component {
  render() {
    return (
      <Layout>
        <article className={styles.page}>
          <header className={styles.header}>
            <div className={styles.headerInner}>
              <h1 className={styles.title}>Thanks for your message!!</h1>
            </div>
          </header>
          <section className={styles.content}>
            <div className={styles.contentInner}>
              We will get back to you soon.
            </div>
          </section>
        </article>
      </Layout>
    )
  }
}

export default Thanks
