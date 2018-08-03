import React from 'react'

function MyBooks(props) {
	return (
		<ul>
			{
				props.books.map((book) => (
					<li key={book.id}>
						<div className="item-book--selection">
							{
								<select value={props.book} onChange={(e) => props.onChangeBookStatus( e.target.value )}>
									<option value="moveto" disabled>Move to...</option>
									<option value={book.shelf}>Want to Read</option>
									<option value={book.shelf}>Read</option>
									<option value={book.shelf}>None</option>
								</select>
							}
						</div>
						<div className="item-book--img">
							<img src={book.imageLinks.smallThumbnail} alt={book.title} />
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
	)
}

export default MyBooks