import React from 'react'
import PropTypes from 'prop-types'

const MyBooks = (props) => {

	MyBooks.propTypes = {
		books: PropTypes.array.isRequired,
		onChangeBookShelf: PropTypes.func.isRequired
	}

	return (
		<ul>
			{
				props.books.map((b) => (
					<li key={b.id}>
						<div className="item-book--selection">
							{
								<select defaultValue={b.shelf} onChange={event => props.onChangeBookShelf(event.target.value, b)}>
									<option value="moveto" disabled>Move to...</option>
									<option value="wantToRead">Want to Read</option>
									<option value="read">Read</option>
									<option value="currentlyReading">Currently Reading</option>
									<option value="none">None</option>
								</select>
							}
						</div>
						<div className="item-book--img">
							<img src={b.imageLinks.smallThumbnail} alt={b.title} />
						</div>
						<div className="item-book--title">
							<h2>{b.title}</h2>
						</div>
						<div className="item-book--description">
							<p>{b.author}</p>
						</div>
					</li>
				))
			}
		</ul>
	)
}

export default MyBooks