import React, { Component } from 'react'
import MyBook from '../my-book/MyBook'
import * as BooksApi from '../../utils/BooksAPI'

class Main extends Component {

	state = {
		books: []
	}

	componentDidMount = () => {
		BooksApi.getAll().then((books) => {
			this.setState({ books })
		});
	}

	changeStatus = (book) => {
		this.setState((state) => ({
			books: state.books.filter((b) => b.status = book)
		}))
		debugger;
		BooksApi.update(book)
	}

	render() {
		console.log(this.state.books)
		return (
			<main className="mr-main">
				<div className="container">
					<MyBook onChangeBookStatus={this.changeStatus} books={this.state.books} />
				</div>
			</main>
		)
	}
}

export default Main