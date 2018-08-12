import React, { Component } from 'react'
import Filter from '../filter/Filter'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../utils/BooksAPI'

class Search extends Component {

	state = {
		query: '',
		items: []
	}

	updateAdvancedQuery = (query) => {

		this.setState({
			query: query.trim()
		})	

		let value = this.state.query
		if (value !== '') {
			BooksAPI.search(value).then((data) => {
				this.setState({
					items: [...data] 
				})
			})
		}
	}

	render() {

		return (
			<div className="mr-search">
				<div className="container">
					<Link to="/" className="mr-search-button mr-search-button--close">
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
								this.state.items.map((index) => (
									<li key={index.id}>
										<div className="mr-search-results__image">
											<img src={index.imageLinks.smallThumbnail ? index.imageLinks.smallThumbnail : 'no image available'} alt={index.title} />
										</div>
										<div className="mr-search-results__text">
											<div className="text-col text-col-title">
												<h2>{index.title ? index.title : 'no title'}</h2>
											</div>
											<div className="text-col text-col-authors">
												<strong>Authors</strong>
												<ul>
													{
														index.authors ? index.authors : 'no authors'
													}
												</ul>
											</div>
											<div className="text-col text-col-description">
												<strong>Description</strong>
												<p>{index.description ? index.description : 'no description'}</p>
											</div>
											<div className="text-col text-col-category">
												<strong>Categories</strong>
												<p>{index.categories ? index.categories : 'no categoy available'}</p>
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

export default Search