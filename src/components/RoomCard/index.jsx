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
        <img className="article__image" src={this.props.apartment.cover} alt=""/>
        <div className="article__title">{this.props.apartment.title}</div>
      </article>
    )
  }
}

export default RoomCard
