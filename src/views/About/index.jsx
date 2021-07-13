import { Component } from 'react'
import Banner from '../../components/Banner'
import Collapsible from '../../components/Collapsible'

import about from '../../assets/img/about.jpeg'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        Page About
        <Banner picture={about} key="{about}" />
        <Collapsible />
      </div>
    )
  }
}

export default About
