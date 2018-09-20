import React, { Component } from 'react'
import SearchTitle from '../search-title/SearchTitle'
import Filter from '../filter/Filter'
import MyBooks from '../my-books/MyBooks'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../utils/BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import { debounce } from 'throttle-debounce';

class Search extends Component {

	state = {
		value: '',
		items: [],
		getView: 'search'
	}

	changeStatus = (shelf, book) => {
		this.setState({
			book: book.shelf = shelf
		})
		BooksAPI.update(book, shelf)
	}

	// Pega o valor e atualiza o estado.
	// Com o valor de state, faz uma chamada na api utilizando o método "search", 
	// retornar todos os items e atualiza o estado de "items".
	updateAdvancedQuery = debounce(600, (value) => {
		this.setState({
			value: value.trim()
		})
		if (value && this.state.value) {
			BooksAPI.search(this.state.value).then((data) => {
				this.setState({
					items: this.props.books
				})
				this.setState({
					items: [...data]
				})
			})
		}
	})

	// Remove a classe que foi adicionada ao acessar a página de Search.
	removeClass = () => {
		document.body.classList.remove('overflow-hidden')
		this.changeStatus()
	}

	render() {

		// Adiciona a classe no body a fim de simular um modal no container principal.
		document.body.classList.add('overflow-hidden')

		let showingBooks, listItems
		const match = new RegExp(escapeRegExp(this.state.value), 'i')

		listItems = this.state.items.filter((b) => match.test(b.title))
		showingBooks = this.state.query ? listItems : this.state.items

		// Verifica se o valor for diferente de vazio, retorna o nó html com os dados.
		if (this.state.value !== '') {
			return (
				<div className="mr-search">
					<div className="container">
						<Link to="/" onClick={this.removeClass} className="mr-search-button mr-search-button--close">
							<svg className="mr-search-button__icon mr-search-button__icon-close" viewBox="0 0 24 24">
								<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
							</svg>
						</Link>

						<SearchTitle />

						<Filter onUpdateQuery={this.updateAdvancedQuery} />

						<div className="mr-search-results">
							<MyBooks
								onChangeBookShelf={this.changeStatus}
								books={showingBooks.filter((b) => b.id)}
								bookSearch={this.props.books}
								view={this.state.getView}
							/>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div className="mr-search">
					<div className="container">
						<Link to="/" onClick={this.removeClass} className="mr-search-button mr-search-button--close">
							<svg className="mr-search-button__icon mr-search-button__icon-close" viewBox="0 0 24 24">
								<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
							</svg>
						</Link>

						<SearchTitle />

						<Filter onUpdateQuery={this.updateAdvancedQuery} />

						<div className="mr-search-results">
							<p>You must type some <strong>Book</strong> or <strong>Author</strong></p>
						</div>
					</div>
				</div>
			)
		}
	}
}

export default Search


