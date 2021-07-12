import { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

import Logo from './../../assets/img/logo.svg'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <header className="header">
        <Link className="header__logo" to="/">
          <img src={Logo} alt="Kasa Home page" />
        </Link>
        <nav className="header__nav">
          <Link className="nav-link" to="/">
            Accueil
          </Link>
          <Link className="nav-link" to="/about">
            A Propos
          </Link>
        </nav>
      </header>
    )
  }
}

export default Header
