import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { stripHTML } from '../services/helpers'

import styles from './post-item.module.scss'

class PostItem extends React.Component {
  render () {
    const { entry } = this.props

    return (
      <div key={entry.node.id} className={styles.post}>
        <h2 className={styles.title}>
          <Link to={`/article/${entry.node.slug}/`}>
            {entry.node.name}
          </Link>
        </h2>
        <div className={styles.content}
          dangerouslySetInnerHTML={{
            __html: stripHTML(
              entry.node.content.childMarkdownRemark.html
            )
          }}
        />
      </div>
    )
  }
}

PostItem.propTypes = {
  entry: PropTypes.object
}

export default PostItem