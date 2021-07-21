import { Component } from 'react'
import Carousel from '../../components/Carousel'
import RoomTag from '../../components/RoomTag'
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
        Page Room
        <RoomTag />
        <Collapsible />
      </div>
    )
  }
}

export default Room
