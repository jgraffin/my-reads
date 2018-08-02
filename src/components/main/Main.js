import React, { Component } from 'react'
import WantToRead from '../shelfs/WantToRead'

class Main extends Component {

	state = {
		books: [
			{
				"id": "lotr",
				"title": "The Lord Of The Rings",
				"imageFolder": "https://pictures.abebooks.com/isbn/9780007149247-uk.jpg",
				"author": 'Christopher Tolkien',
				"status": "wanttoread"
			},
			{
				"id": "silmarillion",
				"title": "Silmarillion",
				"imageFolder": "https://a-static.mlcdn.com.br/618x463/silmarillion-5a-ed-wmf-martins-fontes-wmf/cliquebooks/503385-3/11e3e1b397b9fe7029c8558152fbdc8a.jpg",
				"author": 'John Reuel Ronald Tolkien',
				"status": "wanttoread"
			},
			{
				"id": "harry-potter",
				"title": "Harry Potter",
				"imageFolder": "https://ewedit.files.wordpress.com/2016/09/hpchamber.jpg",
				"author": 'JK. Rowling',
				"status": "wanttoread"
			}
		]
	}

	changeStatus = (book) => {
		
		console.log(book)
		// if (book.status === 'want-to-read') {
		// 	this.setState((state) => ({
		// 		books: state.books.filter((b) => 
		// 			b.status = 'reading'
		// 		)
		// 	})) 
		// 	console.log('reading');
		// } else if (book.status === 'reading') {
		// 	this.setState((state) => ({
		// 		books: state.books.filter((b) => 
		// 			b.status = 'read'
		// 		)
		// 	})) 
		// 	console.log('read');
		// } else {
		// 	this.setState((state) => ({
		// 		books: state.books.filter((b) => 
		// 			b.status = 'want-to-read'
		// 		)
		// 	})) 	
		// 	console.log('want-to-read');
		// }
	}

	render() {
		return (
			<main className="mr-main">
				<div className="container">
					<WantToRead onChangeBookStatus={this.changeStatus} books={this.state.books} />
				</div>
			</main>
		)
	}
}

export default Main