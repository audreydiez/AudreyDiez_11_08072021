import { Component } from 'react'
import './index.scss'

class ApartmentTag extends Component {
    render() {
        return <button className="btn--tag">{this.props.tag}</button>
    }
}

export default ApartmentTag
