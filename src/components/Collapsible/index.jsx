import { Component } from 'react'
import './index.scss'

import arrow from './../../assets/img/arrow.svg'

class Collapsible extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    };

  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;

    return <div className="collapsible">
      <div className={`collapsible__title ${isOpen ? "is-open" : "is-close"}`} onClick={this.handleClick}>
        <p dangerouslySetInnerHTML={{__html: this.state.isOpen}}>

        </p>
        <img src={arrow} alt=""/>
      </div>
      <div className={`collapsible__content ${isOpen ? "is-open" : "is-close"}`}>
        <p>Content</p>
      </div>
    </div>
  }
}

export default Collapsible
