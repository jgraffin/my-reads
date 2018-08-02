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
		this.setState((state) => ({
			books: state.books.filter((b) => console.log(b.status === book.status) )
		})) 
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