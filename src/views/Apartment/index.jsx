import { Component } from 'react'
import './index.scss'

import Carousel from '../../components/Carousel'
import ApartmentTag from '../../components/ApartmentTag'
import Collapsible from '../../components/Collapsible'
import Stars from './../../components/Stars'

class Apartment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apartment: this.getApartment(),
        }
    }

    getApartment = () => {
        const apartment = this.props.apartments.filter(
            (apt) => apt.id === this.props.match.params.id
        )
        return apartment[0]
    }

    getTags = () => {
        return (
            <div className="apt-profile__tags">
                {this.state.apartment.tags.map((tag, index) => (
                    <ApartmentTag tag={tag} key={index} />
                ))}
            </div>
        )
    }

    getApartmentTitle = () => {
        return (
            <div className="apt-profile__title">
                <h1>{this.state.apartment.title}</h1>
                <div className="location">{this.state.apartment.location}</div>
            </div>
        )
    }

    getOwner = () => {
        return (
            <>
                <div className="name">
                    {this.state.apartment.host.name.split(' ')[0]}
                    <br />
                    {this.state.apartment.host.name.split(' ')[1]}
                </div>
                <div className="avatar">
                    <img src={this.state.apartment.host.picture} alt="" />
                </div>
            </>
        )
    }

    render() {
        return (
            <div className="apt-wrapper">
                <Carousel pictures={this.state.apartment.pictures} />
                <div className="apt">
                    <div className="apt-profile">
                        {this.getApartmentTitle()}
                        {this.getTags()}
                    </div>
                    <div className="apt-author">
                        <div className="apt-author__star-scale">
                            <Stars rating={this.state.apartment.rating} />
                        </div>
                        <div className="apt-author__identity">
                            {this.getOwner()}
                        </div>
                    </div>
                </div>
                <div className="description">
                    <Collapsible
                        title="Description"
                        content={this.state.apartment.description}
                    />
                </div>
                <div className="description">
                    <Collapsible
                        title="Equipements"
                        content={this.state.apartment.equipments}
                    />
                </div>
            </div>
        )
    }
}

export default Apartment
