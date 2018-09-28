import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import styles from './post.module.scss'

class Post extends React.Component {
  render() {
    const { data } = this.props
    const { title } = data.site.siteMetadata
    const post = data.contentfulPost

    return (
      <Layout>
        { post.name ? (
          <Helmet title={`${post.name} - ${title}`} />
        ) : null }
        <article className={styles.article}>
          { post.name ? (
            <h1 className={styles.articleTitle}>
              {post.name}
            </h1>
          ) : null }
          { post.content ? (
            <div
              className={styles.articleContent}
              dangerouslySetInnerHTML={{
                __html: post.content.childMarkdownRemark.html
              }}
            />
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
    contentfulPost(slug: { eq: $slug }) {
      name
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default Post
