import { Component } from 'react'
import './index.scss'

import noPicture from './../../assets/img/no_pictures.png'
import Arrow from './Arrow'

class Carousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pictures: [],
            currentPictureIndex: 0,
        }
    }

    componentDidMount() {
        this.setState({ pictures: this.props.pictures })
    }

    previous = () => {
        const index =
            this.state.currentPictureIndex === 0
                ? this.state.pictures.length - 1
                : this.state.currentPictureIndex - 1
        this.setState({ currentPictureIndex: index })
    }

    next = () => {
        const index =
            this.state.currentPictureIndex === this.state.pictures.length - 1
                ? 0
                : this.state.currentPictureIndex + 1
        this.setState({ currentPictureIndex: index })
    }

    getSRC = () => {
        return this.state.pictures[this.state.currentPictureIndex]
            ? this.state.pictures[this.state.currentPictureIndex]
            : noPicture
    }

    render() {
        return (
            <div className="carousel">
                <img
                    src={this.getSRC()}
                    alt="appartement"
                    className="carousel__picture"
                />

                {this.state.pictures.length > 1 && (
                    <>
                        <span onClick={this.previous}>
                            <Arrow direction="left" />
                        </span>

                        <span onClick={this.next}>
                            <Arrow direction="right" />
                        </span>

                        <div className="carousel__navigation">
                            {this.state.pictures.map((paragraph, index) => (
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
                    </>
                )}
            </div>
        )
    }
}

export default Carousel
