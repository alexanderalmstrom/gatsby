import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'

import '../base.scss'
import styles from './layout.module.scss'

class Layout extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('state--dark', this.props.isDark)
  }

  componentDidUpdate(prevProps) {
    document.body.classList.toggle('state--dark', prevProps.isDark)
  }

  componentWillUnmount() {
    document.body.classList.remove('state--dark')
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
          <div className={styles.base}>
            <Helmet title={data.site.siteMetadata.title} />
            <Header data={data.site.siteMetadata} />
            <main className={styles.main}>
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
  isDark: false
}

Layout.propTypes = {
  isDark: PropTypes.bool
}

export default Layout