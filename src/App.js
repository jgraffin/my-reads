import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/header/Header'
import Shelfs from './components/shelfs/Shelfs'
import Search from './components/search/Search'
import './index.css'
import * as BooksAPI from './utils/BooksAPI'
import Loader from './components/loader/Loader'

class App extends Component {

  state = {
    books: [],
    loading: true
  }

  // Monta o componente com os dados da api.
  // Muda o estado de books, preenchendo-o com os dados da api.
  // Após 500 milisegundos a lista é mostrada na tela.
  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      if (books) {
        this.setState({
          books: books,
          loading: false
        })
      }
    })
  }

  render() {

    const { loading } = this.state;

    return (

      <div className="App">

        <Header />

        {
          loading ?
            <Loader loadText="Loading Shelfs ..." />
            :
            <Route
              exact path="/"
              render={() => (
                <Shelfs books={this.state.books} />
              )}
            />
        }

        <Route
          path="/search"
          render={() => (
            <Search
              books={this.state.books}
            />
          )}
        />

      </div>
    )
  }
}

export default App
