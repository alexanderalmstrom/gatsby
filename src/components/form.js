import React from 'react'
import PropTypes from 'prop-types'
import { navigateTo } from 'gatsby-link'

import styles from './form.module.scss'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    const form = e.target

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <form
        name={this.props.name}
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value={this.props.name} />
        {this.props.fields.map((field, i) => {
          return (
            <p key={i}>
              <label>
                <span className={styles.label}>{field.label}</span>
                {(() => {
                  switch (field.type) {
                    case 'input':
                      return (
                        <input
                          className={styles[field.type]}
                          type={field.type}
                          name={field.name}
                          value={this.state[field.name]}
                          onChange={this.handleChange}
                        />
                      )
                    case 'textarea':
                      return (
                        <textarea
                          className={styles[field.type]}
                          type={field.type}
                          name={field.name}
                          value={this.state[field.name]}
                          onChange={this.handleChange}
                        />
                      )
                    default:
                      return null
                  }
                })()}
              </label>
            </p>
          )
        })}
        <p>
          <button className={styles.btn} type="submit">
            {this.props.btn || 'Send'}
          </button>
        </p>
      </form>
    )
  }
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

Form.propTypes = {
  name: PropTypes.string,
  fields: PropTypes.array
}

export default Form
