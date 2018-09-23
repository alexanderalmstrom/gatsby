import React from 'react'

import Layout from '../components/layout'
import styles from '../templates/page.module.scss'

class NotFound extends React.Component {
  render() {
    return (
      <Layout>
        <h1 className={styles.pageTitle}>Oh no!</h1>
        <p>You broke everything :(</p>
      </Layout>
    )
  }
}

export default NotFound
