import React, { Component } from 'react'
import MyBooks from '../my-books/MyBooks'
import * as BooksAPI from '../../utils/BooksAPI'
import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'

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

	changeShelf = (valueClicked) => {
		console.log(valueClicked)

		this.setState((state) => ({
			books: state.books.filter((b) => b.shelf = valueClicked) && this.state.books.filter((b) => b.id !== this.state.books.id)
		}))

	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	render() {
		console.log(this.state.books)

		let showingBooks
		const match = new RegExp(escapeRegExp(this.state.query), 'i')
		this.state.query ? showingBooks = this.state.books.filter((b) => match.test(b.title)) : showingBooks = this.state.books

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
									<MyBooks onChangeBookShelf={this.changeShelf} books={showingBooks.filter((b) => b.shelf === s.id)} />
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