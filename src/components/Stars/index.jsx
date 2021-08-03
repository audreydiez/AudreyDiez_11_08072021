import * as React from 'react'
import './index.scss'
import { Component } from 'react'

class Stars extends Component {
    render() {
        const ratingMax = 5
        let starsFill = []

        for (let i = 0; i < ratingMax; i++) {
            i < this.props.rating
                ? starsFill.push('#FF6060')
                : starsFill.push('#E3E3E3')
        }

        return (
            <>
                {starsFill.map((color, index) => {
                    return (
                        <svg
                            viewBox="0 0 30 30"
                            fill={color}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`star-icon logo`}
                            key={index}
                        >
                            <path
                                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                                fill={color}
                            />
                        </svg>
                    )
                })}
            </>
        )
    }
}

export default Stars
