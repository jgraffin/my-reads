import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/header/Header'
import Shelfs from './components/shelfs/Shelfs'
import Search from './components/search/Search'
import * as BooksAPI from './utils/BooksAPI'
import './index.css'

class App extends Component {

  // Recebe valor da Prateleira e do Livro correspondente.
  // Atualiza o livro na respectiva Prateleira selecionada.
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

        {/* Recebe o valor da mudança do livro via Props */}
        <Route
          exact path="/"
          render={() => (
            <Shelfs onChangeBooks={this.changeStatus} />
          )}
        />

        {/* Recebe o valor da mudança do livro via Props */}
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
