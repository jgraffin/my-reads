import React, { Component } from 'react'
import Header from './components/header/Header'
import Shelfs from './components/shelfs/Shelfs'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Shelfs />
      </div>
    );
  }
}

export default App
