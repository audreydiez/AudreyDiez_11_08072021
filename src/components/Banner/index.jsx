import { Component } from 'react'
import './index.scss'
import home from './../../assets/img/home.jpeg'

class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="wrapper-banner">
        <img src={home} alt="" className="wrapper-banner__img" />
        <div className="wrapper-banner__background"></div>
        <div className="wrapper-banner__txt">
          Chez vous, <br />
          partout et ailleurs
        </div>
      </div>
    )
  }
}

export default Banner
