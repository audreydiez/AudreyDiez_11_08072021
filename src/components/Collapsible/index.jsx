import { Component } from 'react'
import './index.scss'

import arrow from './../../assets/img/arrow.svg'

class Collapsible extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }

    handleClick = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        const { isOpen } = this.state
        const { title, content, isArray } = this.props

        return (
            <div className="collapsible">
                <div
                    className={`collapsible__title ${
                        isOpen ? 'is-open' : 'is-close'
                    }`}
                    onClick={this.handleClick}
                >
                    <p>{title} </p>
                    <img
                        src={arrow}
                        alt=""
                        className={` ${isOpen ? 'is-open' : 'is-close'}`}
                    />
                </div>
                <div
                    className={`collapsible__content ${
                        isOpen ? 'is-open' : 'is-close'
                    }`}
                >
                    {isArray ? (
                        content.map((item, index) => (
                            <p key={`item-${index}`}>{item}</p>
                        ))
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            </div>
        )
    }
}

export default Collapsible
