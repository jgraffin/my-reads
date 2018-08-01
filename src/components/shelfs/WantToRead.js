import React, { Component } from 'react'

class WantToRead extends Component {
	render() {
		return (
			<div className="mr-shelf">
				<div className="mr-shelf__title">
					<h2>Want to Read</h2>
				</div>
				<div className="mr-shelf__list">
					<ul>
						{
							this.props.books.map((book) => (
								<li key={book.id}>
									{book.title}
								</li>
							))
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default WantToRead