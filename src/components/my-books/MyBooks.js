import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import NoImage from '../../imgs/no-image.png'

const MyBooks = (props) => {
	return (
		<ul>
			{
				// Mapeia todos os livros.
				// Combobox verifica se o respectivo item possui prateleira ou não.
				// Combobox envia valor de clique via props.
				// Lazyload para performar o carregamento da capa do livro.
				// Verifica se existe ou não capa.
				props.books.map((b) => (
					<li key={b.id}>
						<Link to="#!" className="mr-search-results__image">
							<div className="item-book--selection">
								{
									<select
										defaultValue={props.bookSearch.filter((book) => book.id === b.id).reduce((prev, book) => book.shelf, 'none')}
										onChange={event => props.onChangeBookShelf(event.target.value, b)}>
										<option value="moveto" disabled>Move to...</option>
										<option value="wantToRead">Want to Read</option>
										<option value="read">Read</option>
										<option value="currentlyReading">Currently Reading</option>
										<option value="none">None</option>
									</select>
								}
							</div>
							<LazyLoad height={200}>
								<img
									src={b.imageLinks ? b.imageLinks.smallThumbnail : NoImage}
									alt={b.title}
								/>
							</LazyLoad>
						</Link>
						<div className="mr-search-results__text">
							<div className="text-col text-col-title">
								<h3>{b.title}</h3>
							</div>
							<div className="text-col text-col-category">
								<p>{b.categories}</p>
							</div>
							<div className="text-col text-col-author">
								<p>{b.authors || 'Author Unavailable'}</p>
							</div>
							<div className="text-col mr-current-shelf">
								<div className={props.bookSearch.filter((book) => book.id === b.id).reduce((prev, book) => book.shelf, 'none')}>
									{props.bookSearch.filter((book) => book.id === b.id).reduce((prev, book) => book.shelf, 'none')}
								</div>
							</div>
						</div>
					</li>
				))
			}
		</ul>
	)
}

export default MyBooks

// Documenta quais os tipos de valores a serem passados e sua obrigatoriedade
MyBooks.propTypes = {
	books: PropTypes.array.isRequired,
	onChangeBookShelf: PropTypes.func.isRequired
}

