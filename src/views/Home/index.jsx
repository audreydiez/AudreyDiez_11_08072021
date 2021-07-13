import { Component } from 'react'
import Banner from '../../components/Banner'
import './index.scss'

import home from './../../assets/img/home.jpeg'
import RoomCard from '../../components/RoomCard'

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
          text={['Chez vous, ', <br />, 'partout et ailleurs']}
          key="{ }"
        />
        <div className="wrapper-home">
          {this.props.data.map((apartment) => (
            <RoomCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
