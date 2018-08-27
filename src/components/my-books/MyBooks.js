import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MyBooks = (props) => {

	MyBooks.propTypes = {
		books: PropTypes.array.isRequired,
		onChangeBookShelf: PropTypes.func.isRequired
	}

	return (
		<div>
			<ul>
				{
					props.books.map((b) => (
						<li key={b.id}>
							<a href="#!" className="mr-search-results__image">
								<div className="item-book--selection">
								{
									<select defaultValue={b.shelf ? b.shelf = b.shelf : b.shelf = 'none'} onChange={event => props.onChangeBookShelf(event.target.value, b)}>
										<option value="moveto" disabled>Move to...</option>
										<option value="wantToRead">Want to Read</option>
										<option value="read">Read</option>
										<option value="currentlyReading">Currently Reading</option>
										<option value="none">None</option>
									</select>
								}
							</div>
								<img src={b.imageLinks ? b.imageLinks.smallThumbnail : '#!'} alt={b.title} />
							</a>
							<div className="mr-search-results__text">
								<div className="text-col text-col-title">
									<Link to={`/book/${b.id}`}>{b.title}</Link>
								</div>
								<div className="text-col text-col-category">
									<p>{b.categories}</p>
								</div>
							</div>
						</li>
					))
				}
			</ul>
			
		</div>
	)
}

export default MyBooks


 