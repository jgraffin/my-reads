import React, { Component } from 'react'
import MyBooks from '../my-books/MyBooks'
import * as BooksAPI from '../../utils/BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

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
			},
			{
				'id': 'none',
				'name': 'None'
			}
		]
	}

	state = {
		books: [],
		query: ''
	}

	componentDidMount = () => {
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
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
		console.log(this.state.books)

		let showingBooks, getTitle
		const match = new RegExp(escapeRegExp(this.state.query), 'i')

		getTitle = this.state.books.filter((b) => match.test(b.title))
		this.state.query ? showingBooks = getTitle : showingBooks = this.state.books
		
		showingBooks.sort(sortBy('name'))

		return (
			<main className="mr-main">
				<div className="container">
					<div className="filter-group">
						<input
							type="search"
							spellCheck="false"
							value={this.state.query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>
						<span className="highlight"></span>
						<span className="bar"></span>
						<label>Type some book</label>
					</div>
					{
						this.shelfs.map((s) =>
							<div className="mr-shelf" key={s.id}>
								<div className="mr-shelf__title">
									<h2>{s.name}</h2>
								</div>
								<div className="mr-shelf__list">
									<MyBooks onChangeBookShelf={this.changeStatus} books={showingBooks.filter((b) => b.shelf === s.id)} />
								</div>
							</div>
						)
					}
				</div>
			</main>
		)
	}
}

export default Shelfs