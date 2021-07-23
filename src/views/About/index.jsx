import { Component } from 'react'
import Banner from '../../components/Banner'
import Collapsible from '../../components/Collapsible'
import './index.scss'

import about from '../../assets/img/about.jpeg'
import aboutData from './../../assets/data/about.json'

class About extends Component {
    render() {
        return (
            <div>
                <Banner picture={about} key="{about}" />
                <div className="wrapper-about">
                    {aboutData.map((data) => (
                        <Collapsible
                            title={data.title}
                            content={data.content}
                            key={data.id}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default About
