import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import cx from 'classnames';

import Header from './header'
import Footer from './footer'

import '../base.scss'
import styles from './layout.module.scss'

class Layout extends React.Component {
  render () {
    const baseClassName = cx(styles.base, {
      [styles.isDark]: this.props.isDark
    })

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
          <div className={baseClassName}>
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