import React, { Component } from 'react'
import MyBooks from '../my-books/MyBooks'
import Filter from '../filter/Filter'
import * as BooksAPI from '../../utils/BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import Loader from '../loader/Loader';
import { Route } from 'react-router-dom'

class Shelfs extends Component {

	constructor() {
		super()
		this.shelfs = [
			{ 'id': 'wantToRead', 'name': 'Want to Read' },
			{ 'id': 'currentlyReading', 'name': 'Currently Reading' },
			{ 'id': 'read', 'name': 'Read' }
		]

		this.state = {
			books: [],
			query: '',
			loading: true
		}
	}
  
	componentDidMount = () => {
		BooksAPI.getAll().then((books) => {
			setTimeout(() => this.setState({
				books,
				loading: false
			}), 500);
		})
	}

	changeStatus = (shelf, book) => {
		this.props.onChangeBooks(shelf, book)
	}

	updateQuery = (query) => {
		this.setState({
			query: query.trim()
		})
	}

	render() {
		const { loading } = this.state;

		let showingBooks, getTitle
		const match = new RegExp(escapeRegExp(this.state.query), 'i')

		getTitle = this.state.books.filter((b) => match.test(b.title))
		this.state.query ? showingBooks = getTitle : showingBooks = this.state.books

		if (loading) {
			return (
				<Loader loadText="Loading Shelfs ..." />
			)
		}
		else {
			return (
				<main className="mr-main">
					<div className="container">

						<Filter onUpdateQuery={this.updateQuery} />

						{
							this.props.books && (
								<Route
									path="/book/:id"
									render={({ match }) => (
										<Book book={this.props.books.find(b  => b.id === match.params.id )}/>      
									)}
								/>
							)
						}
					</div>
				</main>
			)
		}
	}
}

export default Book

const Book = ({ book }) => {
	return  (
		<main className="mr-main">
		  <div className="container">
				{book.title}
				{console.log('dsadad')}
		  </div>
		</main>
	 )
}

