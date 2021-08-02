import { Component } from 'react'
import './index.scss'

import arrow from './../../assets/img/arrow.svg'

class Collapsible extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            className: 'is-close',
        }
    }

    handleClick = () => {
        console.log('a')
        this.setState({ isOpen: !this.state.isOpen })
        this.state.isOpen
            ? this.setState({ className: 'is-close' })
            : this.setState({ className: 'is-open' })
    }

    getContent = () => {
        if (Array.isArray(this.props.content)) {
            return this.props.content.map((item, index) => (
                <p key={`item-${index}`}>{item}</p>
            ))
        } else {
            return <p>{this.props.content}</p>
        }
    }

    render() {
        return (
            <div className="collapsible">
                <div
                    className={`collapsible__title ${this.state.className}`}
                    onClick={this.handleClick}
                >
                    <p>{this.props.title} </p>
                    <img
                        src={arrow}
                        alt="Voir le contenu"
                        className={this.state.className}
                    />
                </div>
                <div className={`collapsible__content ${this.state.className}`}>
                    {this.getContent()}
                </div>
            </div>
        )
    }
}

export default Collapsible
