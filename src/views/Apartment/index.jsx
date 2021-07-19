import { Component } from 'react'
import Carousel from '../../components/Carousel'
import RoomTag from '../../components/ApartmentTag'
import Collapsible from '../../components/Collapsible'

class Room extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {


    return (
      <div>
        <Carousel />
        <div className="room-profile">
            <div className="room-profile__title">
                <h1>Title</h1>
                <span className="subtitle">Sous titre</span>
            </div>
        </div>
        <RoomTag />
        <Collapsible />
      </div>
    )
  }
}

export default Room
