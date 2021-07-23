import { Component } from 'react'
import './index.scss'

class ApartmentCard extends Component {
    render() {
        const { title, cover } = this.props.apartment

        return (
            <article className="article">
                <img className="article__image" src={cover} alt="" />
                <div className="article__title">{title}</div>
            </article>
        )
    }
}

export default ApartmentCard
