import React from 'react'
import { auth } from '../services/auth'

import Layout from '../layouts/layout'
import styles from '../layouts/page.module.scss'

class CreateUser extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    auth
      .signup(this.state.email, this.state.password)
      .then(response => console.log('User created!', response))
      .catch(error => console.log('Error', error))
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Layout>
        <div className={styles.container}>
          <h1>Create user</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            <button type="submit">Create user</button>
          </form>
        </div>
      </Layout>
    )
  }
}

export default CreateUser
