import { Component } from 'react'
import './index.scss'

import arrow from './../../../assets/img/arrow.svg'

class Arrow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            direction: '',
            className: '',
            txt: '',
        }
    }

    componentDidMount() {
        if (this.props.direction === 'left') {
            this.setState({
                direction: 'left',
                className: 'carousel__arrow-left',
                txt: 'Précédent',
            })
        } else if (this.props.direction === 'right') {
            this.setState({
                direction: 'right',
                className: 'carousel__arrow-right',
                txt: 'Suivant',
            })
        }
    }

    render() {
        return (
            <img
                className={this.state.className}
                src={arrow}
                alt={this.state.txt}
            />
        )
    }
}

export default Arrow
