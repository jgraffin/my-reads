import React, { Component } from 'react'
import MyBooks from '../my-books/MyBooks'
import Filter from '../filter/Filter'
import * as BooksAPI from '../../utils/BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import Loader from '../loader/Loader';

class Shelfs extends Component {

	constructor() {
		super()
		this.shelfs = [
			{
				'id': 'wantToRead',
				'name': 'Want to Read'
			},
			{
				'id': 'currentlyReading',
				'name': 'Currently Reading'
			},
			{
				'id': 'read',
				'name': 'Read'
			}
		]
	}

	state = {
		books: [],
		query: '',
		loading: true
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
		this.setState({
			book: book.shelf = shelf
		})
		BooksAPI.update(book, shelf)
	}

	updateQuery = (query) => {
		this.setState({
			query: query.trim()
		})
	}

	render() {
		const { loading } = this.state;
		console.log(this.state.books)

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
							this.shelfs.map((s) =>
								<div className="mr-shelf" key={s.id}>
									<div className="mr-shelf__title">
										<h2>{s.name}</h2>
									</div>
									<div className="mr-shelf__list">
										<MyBooks
											onChangeBookShelf={this.changeStatus}
											books={showingBooks.filter((b) => b.shelf === s.id)}
										/>
									</div>
								</div>
							)
						}
					</div>
				</main>
			)
		}
	}
}

export default Shelfs