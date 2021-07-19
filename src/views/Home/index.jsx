import { Component } from 'react'
import Banner from '../../components/Banner'
import './index.scss'

import home from './../../assets/img/home.jpeg'
import RoomCard from '../../components/ApartmentCard'
import {Link} from "react-router-dom";
import about from "../../assets/img/about.jpeg";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
      const bannerTitle = ['Chez vous, ', <br />, 'partout et ailleurs']

    return (
      <div>
        <Banner
          picture={home}
          text={
              bannerTitle.map((word, index)=>{
                  return (<span key={index}>{word}</span>)
              })
          }
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
