import { Component } from 'react'
import Banner from '../../components/Banner'
import './index.scss'

import home from './../../assets/img/home.jpeg'
import RoomCard from '../../components/RoomCard'
import {Link} from "react-router-dom";

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
        <main className="wrapper-home">
          {this.props.data.map((apartment) => (
              <Link className="article-link" to={`/room/${apartment.id}`} title={apartment.title} key={apartment.id}>
                    <RoomCard apartment={apartment} />
              </Link>
          ))}
        </main>
      </div>
    )
  }
}

export default Home
