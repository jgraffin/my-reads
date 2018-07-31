import React, { Component } from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>Here is header</Header>
        <Main>Here is Main</Main>
        <Footer>Here is Footer</Footer>
      </div>
    );
  }
}

export default App
