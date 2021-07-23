import { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

class Error extends Component {
    render() {
        return (
            <div className="wrapper-error">
                <div className="wrapper-error__number">404</div>
                <div className="wrapper-error__msg">
                    Oups! La page que vous demandez n'existe pas.
                </div>
                <Link
                    className="wrapper-error__back-link"
                    to="/"
                    title="Retour page d'accueil"
                >
                    Retourner sur la page d'accueil
                </Link>
            </div>
        )
    }
}

export default Error
