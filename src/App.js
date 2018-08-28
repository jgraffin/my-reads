import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/header/Header'
import Shelfs from './components/shelfs/Shelfs'
import Search from './components/search/Search'
import './index.css'

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header />

        <Route
          exact path="/"
          render={() => (
            <Shelfs />
          )}
        />

        <Route
          path="/search"
          render={() => (
            <Search />
          )}
        />

      </div>
    )
  }
}

export default App
