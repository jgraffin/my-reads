import React from 'react'

function MyBook(props) {

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
									{/* <button onClick={() => props.onChangeBookStatus(book)}>button</button> */}
									<select value={props.book} onChange={(e) => props.onChangeBookStatus(e.target.value)}>
										<option value="moveto" disabled>Move to...</option>
										<option value="wanttoread">Want to Read</option>
										<option value="reading">Reading</option>
										<option value="read">Read</option>
										<option value="none">None</option>
									</select>
								</div>
								<div className="item-book--img">
									<img src={book.imageLinks.thumbnail} alt={book.title} />
								</div>
								<div className="item-book--title">
									<h2>{book.title}</h2>
								</div>
								<div className="item-book--description">
									<p>
										{book.authors.map((author) =>
											author
										)}
									</p>
								</div>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	)
}

export default MyBook