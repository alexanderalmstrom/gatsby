import React from 'react'
import { auth } from '../services/auth'

import Layout from '../layouts/layout'
import pageStyles from '../layouts/page.module.scss'
import formStyles from '../components/form.module.scss'

class CreateUser extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    auth
      .signup(this.state.email, this.state.password)
      .then(response => console.log('User created!', response))
      .catch(error => {
        console.log(error)

        this.setState({
          error: error.message
        })
      })
  }

  render() {
    const { email, password, error } = this.state

    return (
      <Layout>
        <div className={pageStyles.container}>
          <header className={pageStyles.header}>
            <div className={pageStyles.headerInner}>
              <h1>Create user</h1>
            </div>
          </header>
          <section className={pageStyles.content}>
            <div className={pageStyles.contentInner}>
              <form onSubmit={this.handleSubmit}>
                <p>
                  <label>
                    <span className={formStyles.label}>
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      className={formStyles.input}
                      value={email}
                      onChange={this.handleChange} />
                  </label>
                </p>
                <p>
                  <label>
                    <span className={formStyles.label}>
                      Password
                    </span>
                    <input
                      type="password"
                      name="password"
                      className={formStyles.input}
                      value={password}
                      onChange={this.handleChange} />
                  </label>
                </p>
                <button
                  type="submit"
                  className={formStyles.btn}>
                  Create user
                </button>
              </form>
              <div className={formStyles.error}>
                {error}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default CreateUser
