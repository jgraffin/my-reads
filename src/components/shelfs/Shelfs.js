import React, { Component } from 'react'
import MyBooks from '../my-books/MyBooks'
import * as BooksAPI from '../../utils/BooksAPI'

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
		books: []
	}

	componentDidMount = () => {
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
		})
	}

	changeStatus = (book) => {
		console.log(book === this.shelfs.id)
		// this.setState((state) => ({
		// 	books: state.books.filter((b) => b.shelf !== this.shelfs)
		// }))
	}

	render() {
		return (
			<main className="mr-main">
				<div className="container">
					{
						this.shelfs.map((s) => 
							<div className="mr-shelf" key={s.id}>
								<div className="mr-shelf__title">
									<h2>{s.name}</h2>
								</div>
								<div className="mr-shelf__list">
									<MyBooks onChangeBookStatus={this.changeStatus} books={this.state.books.filter((b) => b.shelf === s.id)} />
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