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
      <Layout isPost={true}>
        { post.name ? (
          <Helmet title={`${post.name} - ${title}`} />
        ) : null }
        <article className={styles.post}>
          { post.heroImage ? (
            <header className={[styles.header, post.heroImage ? styles.hero : ""].join(' ')}>
              <div className={styles.headerInner}>
                { post.name ? (
                  <h1 className={styles.title}>
                    {post.name}
                  </h1>
                ) : null }
              </div>
              <img src={post.heroImage.resize.src} alt="" />
            </header>
          ) : null }
          { post.content ? (
            <div className={styles.container}>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{
                  __html: post.content.childMarkdownRemark.html
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
    contentfulPost(slug: { eq: $slug }) {
      name
      heroImage {
        resize(width: 1920, height: 1080, quality: 70) {
          src
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default Post
