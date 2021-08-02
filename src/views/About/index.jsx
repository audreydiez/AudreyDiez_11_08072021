import { Component } from 'react'
import Banner from '../../components/Banner'
import Collapsible from '../../components/Collapsible'
import './index.scss'

import about from '../../assets/img/about.jpeg'
import aboutData from './../../assets/data/about.json'

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            aboutData: [],
        }
    }

    componentDidMount() {
        this.setState({ aboutData })
    }

    getAbout = () => {
        return this.state.aboutData.map((data) => (
            <Collapsible
                title={data.title}
                content={data.content}
                key={data.id}
            />
        ))
    }

    render() {
        return (
            <div>
                <Banner picture={about} />
                <div className="wrapper-about">{this.getAbout()}</div>
            </div>
        )
    }
}

export default About
