import { Component } from 'react'
import './index.scss'

class RoomCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <article className="article">
        <div className="article__title">Titre de la location</div>
      </article>
    )
  }
}

export default RoomCard
