import { Component } from 'react'
import Banner from '../../components/Banner'

import home from './../../assets/img/home.jpeg'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Banner
          picture={home}
          text={['Chez vous, ', <br />, 'partout et ailleurs.']}
          key="{home}"
        />
        Page Home
      </div>
    )
  }
}

export default Home
