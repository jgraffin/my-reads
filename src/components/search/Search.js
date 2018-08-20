import React, { Component } from 'react'
import Filter from '../filter/Filter'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../utils/BooksAPI'
import escapeRegExp from 'escape-string-regexp'

class Search extends Component {

	state = {
		value: '',
		items: []
	}

	updateAdvancedQuery = (value) => {

		this.setState({
			value: value.trim()
		})

		if (this.state.value) {
			BooksAPI.search(this.state.value)
				.then((data) => {
					this.setState({
						items: [...data]
					})
				})
		}
	}

	removeClass = () => {
		document.body.classList.remove('overflow-hidden')
	}

	render() {

		document.body.classList.add('overflow-hidden')

		const match = new RegExp(escapeRegExp(this.state.value), 'i')
		let matchText = this.state.items.filter((b) => match.test(b.title))

		if (matchText) {
			return (
				<div className="mr-search">
					<div className="container">
						<Link to="/" onClick={this.removeClass} className="mr-search-button mr-search-button--close">
							<svg className="mr-search-button__icon mr-search-button__icon-close" viewBox="0 0 24 24">
								<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
							</svg>
						</Link>
						<h2 className="mr-search-title">
							<svg className="mr-search-button mr-search-button__icon" viewBox="0 0 24 24">
								<path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
							</svg>
							<strong>Advanced Search</strong>
						</h2>

						<Filter onUpdateQuery={this.updateAdvancedQuery} />

						<div className="mr-search-results">
							<ul>
								{
									this.state.items.map((i) => (
										<li key={i.id}>
											<div className="mr-search-results__image">
												<img src={i.imageLinks ? i.imageLinks.smallThumbnail : '#!'} alt={i.title} />
											</div>
											<div className="mr-search-results__text">
												<div className="text-col text-col-title">
													<h2>{i.title}</h2>
												</div>
												<div className="text-col text-col-authors">
													<strong>Authors</strong>
													<p>{i.author}</p>
												</div>
												<div className="text-col text-col-category">
													<strong>Categories</strong>
													<p>{i.categories}</p>
												</div>
											</div>
										</li>
									))
								}
							</ul>
						</div>
					</div>
				</div>
			)
		}
	}
}

export default Search