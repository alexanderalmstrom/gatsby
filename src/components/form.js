import React from 'react'
import PropTypes from 'prop-types'
import { navigateTo } from 'gatsby-link'

import { encode } from '../services/helpers'

import styles from './form.module.scss'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      valid: false
    }

    this.timer = null

    this.handleChange = this.handleChange.bind(this)
    this.handleValidate = this.handleValidate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidUpdate() {
    
  }
  
  componentDidMount () {
    this.setState({
      fields: this.props.fields
    })

    Object.keys(this.props.fields).reduce((key, i) => {
      key = this.props.fields[i].name

      this.setState({
        [key]: ''
      })

      return false
    }, {})
  }

  handleChange = e => {
    e.persist()

    this.setState({ [e.target.name]: e.target.value })

    clearTimeout(this.timer)

    this.timer = setTimeout(() => {
      this.handleValidate(e)
    }, 300)
  }

  handleValidate = e => {

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
        { this.state.fields ? (
          this.state.fields.map((field, i) => {
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
          })
        ) : null }
        <p>
          <button className={styles.btn} type="submit">
            {this.props.btn || 'Send'}
          </button>
        </p>
      </form>
    )
  }
}

Form.propTypes = {
  name: PropTypes.string,
  fields: PropTypes.array
}

export default Form
