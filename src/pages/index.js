import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/layout'
import PostPreview from '../layouts/post-preview'
import styles from './index.module.scss'

class Index extends React.Component {
  render() {
    const posts = this.props.data.allContentfulPost.edges

    return (
      <Layout>
        <section className={styles.content}>
          <div class={styles.posts}>
            {posts
              ? posts.map(entry => {
                  return <PostPreview key={entry.node.id} entry={entry} />
                })
              : null}
          </div>
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query IndexPostQuery {
    allContentfulPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          name
          slug
          content {
            childMarkdownRemark {
              html
            }
          }
          publishDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`

export default Index
