const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, getNode, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postLayout = path.resolve('./src/layouts/post.js')
    const pageLayout = path.resolve('./src/layouts/page.js')

    resolve(
      graphql(
        `
          {
            allContentfulPost {
              edges {
                node {
                  slug
                }
              }
            }
            allContentfulPage {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulPost.edges
        const pages = result.data.allContentfulPage.edges

        posts.forEach((post, index) => {
          createPage({
            path: `/article/${post.node.slug}/`,
            component: postLayout,
            context: {
              slug: post.node.slug
            }
          })
        })

        pages.forEach((page, index) => {
          createPage({
            path: `/${page.node.slug}/`,
            component: pageLayout,
            context: {
              slug: page.node.slug
            }
          })
        })
      })
    )
  })
}
