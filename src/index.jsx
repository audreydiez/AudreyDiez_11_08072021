import 'normalize.css'
import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
import Room from './views/Room'
import About from './views/About'
import Error from './components/Error'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/room">
          <Room />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
