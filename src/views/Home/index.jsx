import { Component } from 'react'
import Banner from '../../components/Banner'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Banner />
        Page Home
      </div>
    )
  }
}

export default Home
