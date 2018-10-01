import React from 'react'

import Layout from '../layouts/layout'
import styles from '../layouts/page.module.scss'

import Form from '../components/form'

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <article className={styles.page}>
          <header className={styles.header}>
            <div className={styles.headerInner}>
              <h1 className={styles.title}>Contact</h1>
            </div>
          </header>
          <section className={styles.content}>
            <div className={styles.contentInner}>
              <Form />
            </div>
          </section>
        </article>
      </Layout>
    )
  }
}

export default Contact
