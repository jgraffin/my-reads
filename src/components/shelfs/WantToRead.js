import React, { Component } from 'react'

function WantToRead(props) {

	return (
		<div className="mr-shelf">
			<div className="mr-shelf__title">
				<h2>Want to Read</h2>
			</div>
			<div className="mr-shelf__list">
				<ul>
					{
						props.books.map((book) => (
							<li key={book.id}>
								<div className="item-book--selection">
									<select>
										<option value="Move to...">Move to...</option>
										<option value="Currently Reading">Currently Reading</option>
										<option value="Want to Read">Want to Read</option>
										<option value="Read">Read</option>
										<option value="None">None</option>
									</select>
								</div>
								<div className="item-book--img">
									<img src={book.imageFolder} alt={book.title} />
								</div>
								<div className="item-book--title">
									<h2>{book.title}</h2>
								</div>
								<div className="item-book--description">
									<p>{book.author}</p>
								</div>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	)
}

export default WantToRead