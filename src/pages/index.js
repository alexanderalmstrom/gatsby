import React from 'react'
import { graphql } from 'gatsby'

import PostItem from '../components/post-item'

import Layout from '../components/layout'

class Index extends React.Component {
  render() {
    const posts = this.props.data.allContentfulPost.edges

    return (
      <Layout>
        <div className="container">
          {posts
            ? posts.map(entry => {
                return <PostItem key={entry.node.id} entry={entry} />
              })
            : null}
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allContentfulPost {
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
        }
      }
    }
  }
`

export default Index
