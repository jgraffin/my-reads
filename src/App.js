import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/header/Header'
import Shelfs from './components/shelfs/Shelfs'
import Search from './components/search/Search'
import * as BooksAPI from './utils/BooksAPI'
import './index.css'

class App extends Component {

  changeStatus = (shelf, book) => {
    this.setState({
      book: book.shelf = shelf
    })
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Route
          exact path="/"
          render={() => (
            <Shelfs onChangeBooks={this.changeStatus} />
          )}
        />

        <Route
          path="/search"
          render={() => (
            <Search onChangeBookSearch={this.changeStatus} />
          )}
        />

      </div>
    )
  }
}

export default App
