import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import styles from './page.module.scss'

class Page extends React.Component {
  render() {
    const { data } = this.props
    const { title } = data.site.siteMetadata
    const page = data.contentfulPage

    return (
      <Layout isDark={true}>
        { page.name ? (
          <Helmet title={`${page.name} - ${title}`} />
        ) : null }
        <article className={styles.page}>
          { page.name ? (
            <header className={styles.header}>
              <h1 className={styles.title}>{page.name}</h1>
            </header>
          ) : null }
          { page.content ? (
            <div className={styles.container}>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{
                  __html: page.content.childMarkdownRemark.html
                }}
              />
            </div>
          ) : null }
        </article>
      </Layout>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPage(slug: { eq: $slug }) {
      name
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default Page
