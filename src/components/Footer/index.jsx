import { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from './../Logo'
import './index.scss'

class Footer extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <footer className="footer">
                <Link className="footer__logo" to="/">
                    <Logo fill="#ffffff" className="logo" />
                </Link>

                <div className="footer__mentions">
                    © 2020 Kasa. All rights reserved
                </div>
            </footer>
        )
    }

}

export default Footer
