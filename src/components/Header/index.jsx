import { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

import Logo from './../Logo'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <Link className="header__logo" to="/">
                    <Logo fill="#FF6060" className="logo" />
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
