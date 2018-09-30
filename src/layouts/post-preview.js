import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { truncate } from '../services/helpers'

import styles from './post-preview.module.scss'

class PostPreview extends React.Component {
  render() {
    const { entry } = this.props

    return (
      <div className={styles.post}>
        <h2 className={styles.title}>
          <Link to={`/article/${entry.node.slug}/`}>{entry.node.name}</Link>
        </h2>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: truncate(entry.node.content.childMarkdownRemark.html)
          }}
        />
      </div>
    )
  }
}

PostPreview.propTypes = {
  entry: PropTypes.object
}

export default PostPreview
