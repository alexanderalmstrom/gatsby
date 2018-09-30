import React from 'react'
import { Link } from 'gatsby'

import styles from './header.module.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.delta = 5
    this.currentScroll = 0
    this.lastScroll = 0

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    this.currentScroll = window.pageYOffset

    if (Math.abs(this.lastScroll - this.currentScroll) <= this.delta) return

    if (this.currentScroll > 100) {
      if (this.lastScroll > this.currentScroll) {
        document.body.classList.add('state--scroll-up')
        document.body.classList.remove('state--scroll-down')
      } else {
        document.body.classList.add('state--scroll-down')
        document.body.classList.remove('state--scroll-up')
      }
    } else {
      document.body.classList.remove('state--scroll-down')
      document.body.classList.remove('state--scroll-up')
    }

    this.lastScroll = this.currentScroll
  }

  render() {
    return (
      <header id="header" className={styles.header}>
        <h1>
          <Link to="/">{this.props.data.title}</Link>
        </h1>
        <nav>
          <Link to="/about/">About</Link>
        </nav>
      </header>
    )
  }
}

export default Header
