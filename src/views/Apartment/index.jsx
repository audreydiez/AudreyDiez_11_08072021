import { Component } from 'react'
import './index.scss'

import Carousel from '../../components/Carousel'
import ApartmentTag from '../../components/ApartmentTag'
import Collapsible from '../../components/Collapsible'

import Star from './../../components/Star'

class Apartment extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const range = [1, 2, 3, 4, 5]

        const apartment = this.props.apartments.filter(
            (apt) => apt.id === this.props.match.params.id
        )

        const {
            title,
            location,
            tags,
            host,
            rating,
            description,
            equipments,
            pictures,
        } = apartment[0]

        const firstname = host.name.split(' ')[0]
        const lastname = host.name.split(' ')[1]

        return (
            <div className="apt-wrapper">
                <Carousel pictures={pictures} />
                <div className="apt">
                    <div className="apt-profile">
                        <div className="apt-profile__title">
                            <h1>{title}</h1>
                            <div className="location">{location}</div>
                        </div>
                        <div className="apt-profile__tags">
                            {tags.map((tag, index) => (
                                <ApartmentTag tag={tag} key={index} />
                            ))}
                        </div>
                    </div>
                    <div className="apt-author">
                        <div className="apt-author__star-scale">
                            <img src="{star}" alt="" />
                            {range.map((rangeNumber, index) =>
                                rating >= rangeNumber ? (
                                    <Star
                                        fill="#FF6060"
                                        className="logo"
                                        key={index}
                                    />
                                ) : (
                                    <Star
                                        fill="#E3E3E3"
                                        className="logo"
                                        key={index}
                                    />
                                )
                            )}
                        </div>
                        <div className="apt-author__identity">
                            <div className="name">
                                {firstname}
                                <br />
                                {lastname}
                            </div>
                            <div className="avatar">
                                <img src={host.picture} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <Collapsible
                        title="Description"
                        content={description}
                        isArray={Array.isArray(description)}
                    />
                </div>
                <div className="description">
                    <Collapsible
                        title="Equipements"
                        content={equipments}
                        isArray={Array.isArray(equipments)}
                    />
                </div>
            </div>
        )
    }
}

export default Apartment
