import 'normalize.css'
import './index.scss'
import './../src/assets/scss/Stylesheet.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'

import data from './../src/assets/data/data.json'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
import Apartment from './views/Apartment'
import About from './views/About'
import Error from './components/Error'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home data={data} />
          </Route>
          <Route path="/apartments/:id"
                 render={(props) => <Apartment {...props} apartments={data} />}
          >
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
