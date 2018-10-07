import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'

import '../base.scss'

class Layout extends React.Component {
  componentDidMount() {
    document.body.classList.toggle(
      `state--${this.props.state}`,
      this.props.state
    )
  }

  componentDidUpdate(prevProps) {
    document.body.classList.toggle(`state--${prevProps.state}`, prevProps.state)
  }

  componentWillUnmount() {
    document.body.classList.remove(`state--${this.props.state}`)
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
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
            <main id="main">{this.props.children}</main>
            <Footer />
          </div>
        )}
      />
    )
  }
}

Layout.defaultProps = {
  state: null
}

Layout.propTypes = {
  state: PropTypes.string
}

export default Layout
