import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'

import '../base.scss'

class Layout extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('state--dark', this.props.isDark)
    document.body.classList.toggle('state--post', this.props.isPost)
  }

  componentDidUpdate(prevProps) {
    document.body.classList.toggle('state--dark', prevProps.isDark)
    document.body.classList.toggle('state--post', prevProps.isPost)
  }

  componentWillUnmount() {
    document.body.classList.remove('state--dark')
    document.body.classList.remove('state--post')
  }

  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div id="layout">
            <Helmet title={data.site.siteMetadata.title} />
            <Header data={data.site.siteMetadata} />
            <main id="main">
              {this.props.children}
            </main>
            <Footer />
          </div>
        )}
      />
    )
  }
}

Layout.defaultProps = {
  isDark: false,
  isPost: false
}

Layout.propTypes = {
  isDark: PropTypes.bool,
  isPost: PropTypes.bool
}

export default Layout