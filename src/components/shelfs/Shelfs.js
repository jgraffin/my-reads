import React, { Component } from 'react'
import MyBooks from '../my-books/MyBooks'
import * as BooksAPI from '../../utils/BooksAPI'

class Shelfs extends Component {

	state = {
		shelfs: [
			{ shelf: 'wantToRead', name: 'Want to Read' },
			{ shelf: 'currentlyReading', name: 'Currently Reading' },
			{ shelf: 'read', name: 'Read' }
		],
		books: []
	}

	componentDidMount = () => {
		BooksAPI.getAll().then((books) => { 
			this.setState({ books })
			// this.setState((state) => ({
			// 	books: state.books.filter((books) => books.shelf === this.state.shelfs.filter((s) => s.shelf))		
			// }))
		})
	}

	changeStatus = (book) => {
		this.setState((state) => ({
			books: state.books.filter((b) => b.status !== book.status )
		})) 
	}

	render() {
		console.log(this.state.books)
		return (
			<main className="mr-main">
				<div className="container">
					{		
						this.state.shelfs.map((s) => (
							<div className="mr-shelf" key={s.shelf}>
								<div className="mr-shelf__title">
									<h2>{s.name}</h2>
								</div>
								<div className="mr-shelf__list">
									<MyBooks onChangeBookStatus={this.changeStatus} books={this.state.books} />
								</div>
							</div>
						))
					}
				</div>
			</main>
		)
	}
}

export default Shelfs