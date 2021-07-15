import { Component } from 'react'
import './index.scss'
import {Link} from "react-router-dom";

class RoomCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }



  render() {
    const { title, cover, id } = this.props.apartment;

    return (


        <article className="article">

          <img className="article__image" src={cover} alt=""/>
          <div className="article__title">{title}</div>

        </article>

    )
  }
}

export default RoomCard
