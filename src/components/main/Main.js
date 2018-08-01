import React from 'react'
import WantToRead from '../shelfs/WantToRead'

const books = [
	{
		"id": "lotr",
		"title": "The Lord Of The Rings",
		"imageFolder": "http://localhost:5001/ryan.jpg"
	},
	{
		"id": "silmarillion",
		"title": "Silmarillion",
		"imageFolder": "http://localhost:5001/michael.jpg"
	},
	{
		"id": "the-hobbit",
		"title": "The Hobbit",
		"imageFolder": "http://localhost:5001/tyler.jpg"
	}
]

const Main = (props) => (
	<main className="mr-main">
		<div className="container">
			<WantToRead books={books} />
		</div>
	</main>
)

export default Main