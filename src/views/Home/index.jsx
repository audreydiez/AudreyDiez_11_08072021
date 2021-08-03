import { Component } from 'react'
import Banner from '../../components/Banner'
import './index.scss'
import data from './../../assets/data/data2.json'

import home from './../../assets/img/home.jpeg'
import ApartmentCard from '../../components/ApartmentCard'
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apartments: [],
        }
    }

    componentDidMount() {
        this.setState({ apartments: data })
    }

    getApartments = () => {
        return this.state.apartments.map((apartment, index) => (
            <Link
                className="article-link"
                to={`/apartments/${apartment.id}`}
                title={apartment.title}
                key={index}
            >
                <ApartmentCard apartment={apartment} />
            </Link>
        ))
    }

    render() {
        const bannerTitle = ['Chez vous, ', <br />, 'partout et ailleurs']

        return (
            <div>
                <Banner
                    picture={home}
                    text={bannerTitle.map((word, index) => {
                        return <span key={index}>{word}</span>
                    })}
                />
                <main className="wrapper-home">{this.getApartments()}</main>
            </div>
        )
    }
}

export default Home
