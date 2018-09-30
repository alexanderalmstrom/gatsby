import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../layouts/layout'
import styles from './post.module.scss'

class Post extends React.Component {
  render() {
    const { data } = this.props
    const { title } = data.site.siteMetadata
    const post = data.contentfulPost

    return (
      <Layout isPost={true}>
        {post.name ? <Helmet title={`${post.name} - ${title}`} /> : null}
        <article className={styles.post}>
          {post.heroImage ? (
            <header className={styles.header}>
              <div className={styles.headerInner}>
                {post.name ? (
                  <h1 className={styles.title}>{post.name}</h1>
                ) : null}
              </div>
              <img src={post.heroImage.resize.src} alt="" />
            </header>
          ) : null}
          {post.content ? (
            <section className={styles.content}>
              <div
                className={styles.contentInner}
                dangerouslySetInnerHTML={{
                  __html: post.content.childMarkdownRemark.html
                }}
              />
            </section>
          ) : null}
        </article>
      </Layout>
    )
  }
}

export const query = graphql`
  query SinglePostQuery($slug: String!) {
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
      publishDate(formatString: "MMMM Do, YYYY")
    }
  }
`

export default Post
