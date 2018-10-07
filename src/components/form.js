import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby-link'

import { encode } from '../services/helpers'

import styles from './form.module.scss'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidUpdate() {}

  componentDidMount() {
    this.setState({
      fields: this.props.fields
    })
    
    this.data = {}

    Object.keys(this.props.fields).reduce((key, i) => {
      key = this.props.fields[i].name

      this.data[key] = ''

      return false
    }, {})

    this.setState({
      data: this.data
    })
  }

  handleChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const form = e.target

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state.data
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    const { fields } = this.state

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
        {fields ? fields.map((field, i) => {
              return (
                <p key={i}>
                  <label>
                    <span className={styles.label}>{field.label}</span>
                    {(() => {
                      switch (field.type) {
                        case 'text':
                        case 'email':
                          return (
                            <input
                              className={styles[field.type]}
                              type={field.type}
                              name={field.name}
                              value={this.state.data[field.name]}
                              onChange={this.handleChange}
                            />
                          )
                        case 'textarea':
                          return (
                            <textarea
                              className={styles[field.type]}
                              type={field.type}
                              name={field.name}
                              value={this.state.data[field.name]}
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
          : null}
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
