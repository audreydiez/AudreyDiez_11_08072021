import { Component } from 'react'
import './index.scss'

class Banner extends Component {
    render() {
        return (
            <div className="wrapper-banner">
                <img
                    src={this.props.picture}
                    alt=""
                    className="wrapper-banner__img"
                />
                <div className="wrapper-banner__background" />
                {this.props.text && (
                    <div className="wrapper-banner__txt">{this.props.text}</div>
                )}
            </div>
        )
    }
}

export default Banner
