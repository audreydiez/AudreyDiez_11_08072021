import { Component } from 'react'
import './index.scss'

import arrow from './../../assets/img/arrow.svg'

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPictureIndex: 0,
        }
    }

    previous = () => {
        const index =
            this.state.currentPictureIndex === 0
                ? this.props.pictures.length - 1
                : this.state.currentPictureIndex - 1
        this.setState({ currentPictureIndex: index })
    }

    next = () => {
        const index =
            this.state.currentPictureIndex === this.props.pictures.length - 1
                ? 0
                : this.state.currentPictureIndex + 1
        this.setState({ currentPictureIndex: index })
    }

    render() {
        const pictures = this.props.pictures

        return (
            <div className="carousel">
                <img
                    src={pictures[this.state.currentPictureIndex]}
                    alt=""
                    className="carousel__picture"
                />
                <img
                    className="carousel__arrow-left"
                    src={arrow}
                    onClick={this.previous}
                />
                <img
                    className="carousel__arrow-right"
                    src={arrow}
                    onClick={this.next}
                />
                <div className="carousel__navigation">
                    {pictures.map((paragraph, index) => (
                        <div
                            className={`line ${
                                index === this.state.currentPictureIndex
                                    ? 'is-active'
                                    : ''
                            }`}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel
