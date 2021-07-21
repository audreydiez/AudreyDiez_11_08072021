import { Component } from 'react'
import './index.scss'

class ApartmentTag extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {


    return <button className="btn--tag">{this.props.tag}</button>
  }
}

export default ApartmentTag
