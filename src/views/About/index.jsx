import { Component } from 'react'
import Banner from '../../components/Banner'
import Collapsible from '../../components/Collapsible'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        Page About
        <Banner />
        <Collapsible />
      </div>
    )
  }
}

export default About
