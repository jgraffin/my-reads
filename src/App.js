import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/header/Header'
import Shelfs from './components/shelfs/Shelfs'
import Search from './components/search/Search'
import * as BooksAPI from './utils/BooksAPI'
import './index.css'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      book: []
    }
  }

  onUpdate = (book, shelf) => {
    this.setState({
      book: book.shelf = shelf
    })
    BooksAPI.update(book, shelf)
  };

  render() {
    return (
      <div className="App">
        <Header />
        
        <Route
          path="/"
          render={() => (
            <Shelfs  passedVal={this.state.book}/>
          )}
        />

        <Route
          path="/search"
          render={() =>(
            <Search onUpdate={this.onUpdate} />
          )}
        />
      </div>
    );
  }
}

export default App
